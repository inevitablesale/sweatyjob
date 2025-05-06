import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const clearFirst = formData.get("clearFirst") === "true"
    const extractReviews = formData.get("extractReviews") === "true"
    const batchSize = Number.parseInt(formData.get("batchSize") as string) || 100

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 })
    }

    // Check if it's a CSV file
    if (!file.name.endsWith(".csv")) {
      return NextResponse.json({ success: false, error: "File must be a CSV" }, { status: 400 })
    }

    // Initialize Supabase client
    const supabase = createClient()

    // Clear tables if requested
    if (clearFirst) {
      console.log("Clearing tables before import...")

      // Clear reviews first (due to foreign key constraints)
      if (extractReviews) {
        const { error: clearReviewsError } = await supabase
          .from("reviews")
          .delete()
          .neq("id", "00000000-0000-0000-0000-000000000000")

        if (clearReviewsError) {
          console.error("Error clearing reviews table:", clearReviewsError)
          return NextResponse.json(
            { success: false, error: `Failed to clear reviews table: ${clearReviewsError.message}` },
            { status: 500 },
          )
        }
      }

      // Then clear competitors
      const { error: clearCompetitorsError } = await supabase
        .from("competitors")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000")

      if (clearCompetitorsError) {
        console.error("Error clearing competitors table:", clearCompetitorsError)
        return NextResponse.json(
          { success: false, error: `Failed to clear competitors table: ${clearCompetitorsError.message}` },
          { status: 500 },
        )
      }

      console.log("Tables cleared successfully")
    }

    // Read and parse the CSV file
    const text = await file.text()
    const lines = text.split("\n").filter((line) => line.trim())

    if (lines.length <= 1) {
      return NextResponse.json({ success: false, error: "CSV file has no data rows" }, { status: 400 })
    }

    // Parse headers (first line)
    const headers = parseCSVLine(lines[0])
    console.log("CSV Headers:", headers)

    // Process records
    let totalBusinesses = 0
    let skippedBusinesses = 0
    let totalReviews = 0
    let skippedReviews = 0
    const errors = []
    let sampleBusiness = null
    let sampleReview = null
    const processedBusinessIds = new Set() // Track processed business IDs

    // Process data in batches
    for (let i = 0; i < lines.length - 1; i += batchSize) {
      const batch = lines.slice(i + 1, i + 1 + batchSize) // Skip header row

      // Process each line in the batch
      for (const line of batch) {
        try {
          const values = parseCSVLine(line)

          // Skip if values don't match headers
          if (values.length !== headers.length) {
            console.log(`Skipping line: values length (${values.length}) doesn't match headers (${headers.length})`)
            skippedBusinesses++
            continue
          }

          // Create a record object for the business
          const businessRecord: Record<string, any> = {}
          const reviewsData: Array<Record<string, any>> = []

          // Map CSV values to record fields
          headers.forEach((header, index) => {
            const value = values[index]?.trim() || ""

            // Handle business fields
            if (header === "title" || header === "name" || header === "business") {
              businessRecord["title"] = value
            } else if (header === "totalScore" || header === "total_score") {
              businessRecord["total_score"] =
                value && !isNaN(Number.parseFloat(value)) ? Number.parseFloat(value) : null
            } else if (header === "reviewsCount" || header === "reviews_count") {
              businessRecord["reviews_count"] = value && !isNaN(Number.parseInt(value)) ? Number.parseInt(value, 10) : 0
            } else if (header === "street" || header === "address") {
              businessRecord["street"] = value
            } else if (header === "city") {
              businessRecord["city"] = value
            } else if (header === "state") {
              businessRecord["state"] = value
            } else if (header === "country_code" || header === "countrycode") {
              businessRecord["country_code"] = value
            } else if (header === "website") {
              businessRecord["website"] = value
            } else if (header === "url" || header === "google_maps_url") {
              businessRecord["google_maps_url"] = value
            } else if (header === "phone") {
              businessRecord["phone"] = value
            } else if (header === "category_name" || header === "categoryName") {
              businessRecord["category_name"] = value
            }

            // Extract review data
            if (extractReviews && header.startsWith("reviews/")) {
              const parts = header.split("/")
              if (parts.length >= 3) {
                const reviewIndex = Number.parseInt(parts[1])
                const reviewField = parts.slice(2).join("/")

                // Initialize review object if it doesn't exist
                if (!reviewsData[reviewIndex]) {
                  reviewsData[reviewIndex] = {}
                }

                // Map review fields
                if (reviewField === "name") {
                  reviewsData[reviewIndex]["reviewer_name"] = value
                } else if (reviewField === "text") {
                  reviewsData[reviewIndex]["review_text"] = value
                } else if (reviewField === "stars") {
                  reviewsData[reviewIndex]["stars"] =
                    value && !isNaN(Number.parseFloat(value)) ? Number.parseFloat(value) : null
                } else if (reviewField === "publishedAtDate") {
                  reviewsData[reviewIndex]["published_at"] = value ? new Date(value).toISOString() : null
                } else if (reviewField === "reviewId") {
                  reviewsData[reviewIndex]["review_id"] = value
                } else if (reviewField === "reviewerPhotoUrl") {
                  reviewsData[reviewIndex]["reviewer_photo_url"] = value
                } else if (reviewField === "responseFromOwnerText") {
                  reviewsData[reviewIndex]["response_from_owner_text"] = value
                } else if (reviewField === "responseFromOwnerDate") {
                  reviewsData[reviewIndex]["response_from_owner_date"] = value ? new Date(value).toISOString() : null
                }
              }
            }
          })

          // Only process records with required fields
          if (businessRecord.title && businessRecord.city && businessRecord.state) {
            // Generate a unique identifier for deduplication
            const businessKey = `${businessRecord.title}-${businessRecord.city}-${businessRecord.state}`.toLowerCase()

            // Skip if we've already processed this business
            if (processedBusinessIds.has(businessKey)) {
              console.log(`Skipping duplicate business: ${businessKey}`)
              skippedBusinesses++
              continue
            }

            // Insert business record
            const { data: businessData, error: businessError } = await supabase
              .from("competitors")
              .insert([businessRecord])
              .select()
              .single()

            if (businessError) {
              console.error(`Error inserting business:`, businessError)
              errors.push({
                line: i,
                error: businessError.message,
              })
              skippedBusinesses++
              continue
            }

            totalBusinesses++
            processedBusinessIds.add(businessKey)

            // Store sample business
            if (!sampleBusiness) {
              sampleBusiness = businessData
            }

            // Process reviews if enabled
            if (extractReviews && businessData && reviewsData.length > 0) {
              const validReviews = reviewsData
                .filter((review) => review.reviewer_name && review.review_text && review.stars)
                .map((review) => ({
                  ...review,
                  competitor_id: businessData.id,
                }))

              if (validReviews.length > 0) {
                const { data: reviewsInserted, error: reviewsError } = await supabase
                  .from("reviews")
                  .insert(validReviews)
                  .select()

                if (reviewsError) {
                  console.error(`Error inserting reviews:`, reviewsError)
                  skippedReviews += validReviews.length
                } else {
                  totalReviews += validReviews.length

                  // Store sample review
                  if (!sampleReview && reviewsInserted && reviewsInserted.length > 0) {
                    sampleReview = reviewsInserted[0]
                  }
                }
              }
            }
          } else {
            console.log(`Skipping record due to missing required fields`)
            skippedBusinesses++
          }
        } catch (error) {
          console.error(`Error processing line:`, error)
          errors.push({
            line: i,
            error: error instanceof Error ? error.message : "Unknown error",
          })
          skippedBusinesses++
        }
      }

      // Log progress after each batch
      console.log(`Processed batch: ${totalBusinesses} businesses, ${totalReviews} reviews`)
    }

    return NextResponse.json({
      success: true,
      totalBusinesses,
      skippedBusinesses,
      totalReviews,
      skippedReviews,
      errors: errors.length > 0 ? errors.slice(0, 10) : undefined,
      sampleBusiness,
      sampleReview,
    })
  } catch (error) {
    console.error("Import error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// CSV line parser that handles quoted fields and commas within quotes
function parseCSVLine(line: string): string[] {
  const result = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
        // Double quotes inside quoted field = escaped quote
        current += '"'
        i++
      } else {
        // Toggle quote mode
        inQuotes = !inQuotes
      }
    } else if (char === "," && !inQuotes) {
      // End of field
      result.push(current)
      current = ""
    } else {
      current += char
    }
  }

  // Add the last field
  result.push(current)

  return result.map((value) => value.replace(/^"|"$/g, "").trim())
}
