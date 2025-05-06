import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const clearFirst = formData.get("clearFirst") === "true"
    const batchSize = Number.parseInt(formData.get("batchSize") as string) || 100
    const debugMode = formData.get("debugMode") === "true"
    const defaultState = (formData.get("defaultState") as string) || "Unknown"

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 })
    }

    // Check if it's a CSV file
    if (!file.name.endsWith(".csv")) {
      return NextResponse.json({ success: false, error: "File must be a CSV" }, { status: 400 })
    }

    // Initialize Supabase client
    const supabase = createClient()

    // Clear table if requested
    if (clearFirst) {
      console.log("Clearing competitors table before import...")
      const { error: clearError } = await supabase
        .from("competitors")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000")

      if (clearError) {
        console.error("Error clearing competitors table:", clearError)
        return NextResponse.json(
          { success: false, error: `Failed to clear competitors table: ${clearError.message}` },
          { status: 500 },
        )
      }
      console.log("Competitors table cleared successfully")
    }

    // Read and parse the CSV file
    const text = await file.text()
    const lines = text.split("\n").filter((line) => line.trim())

    if (lines.length <= 1) {
      return NextResponse.json({ success: false, error: "CSV file has no data rows" }, { status: 400 })
    }

    // Parse headers (first line)
    const headers = parseCSVLine(lines[0])
    console.log(`CSV Headers: ${headers.length} columns found`)

    // Check if we have the required headers
    const hasStateHeader = headers.some((h) => h === "state" || h === "State" || h === "STATE")
    const hasPeopleAlsoSearchHeaders = headers.some((h) => h.startsWith("peopleAlsoSearch/"))

    if (!hasStateHeader) {
      console.log("Warning: No 'state' header found in CSV. Will use default state value.")
    }

    if (hasPeopleAlsoSearchHeaders) {
      console.log("Found 'peopleAlsoSearch' headers in CSV. Will extract related businesses data.")
    }

    // Collect detailed skip reasons for diagnostics
    const skipReasons = {
      missingTitle: 0,
      missingLocation: 0,
      missingReviewData: 0,
      duplicateBusiness: 0,
      parseError: 0,
      headerMismatch: 0,
      insertError: 0,
      other: 0,
    }

    // Process records
    let totalImported = 0
    let skipped = 0
    const errors = []
    let sampleRecord = null
    const processedBusinessIds = new Set() // Track processed business IDs

    // Sample data for debugging
    const sampleLines = debugMode ? lines.slice(1, 6) : []
    const sampleParsedData = []

    // Process data in batches
    for (let i = 0; i < lines.length - 1; i += batchSize) {
      const batch = lines.slice(i + 1, i + 1 + batchSize) // Skip header row
      const batchRecords = []

      // Process each line in the batch
      for (let j = 0; j < batch.length; j++) {
        try {
          const line = batch[j]
          const values = parseCSVLine(line)

          // For debugging - store sample parsed data
          if (debugMode && i + j < 5) {
            sampleParsedData.push({ line: i + j + 1, values })
          }

          // Skip if values don't match headers
          if (values.length !== headers.length) {
            console.log(
              `Skipping line ${i + j + 1}: values length (${values.length}) doesn't match headers (${headers.length})`,
            )
            skipReasons.headerMismatch++
            skipped++
            continue
          }

          // Create a record object
          const record: Record<string, any> = {
            // Set default values for required fields
            state: defaultState, // Default state to satisfy NOT NULL constraint
          }

          // For collecting "people also search for" data
          const peopleAlsoSearch: any[] = []
          const peopleAlsoSearchIndices = new Set<number>()

          // Basic business fields
          let hasTitle = false
          let hasLocation = false
          let hasReviewData = false

          // Map CSV values to record fields
          headers.forEach((header, index) => {
            const value = values[index]?.trim() || ""

            // Handle business fields
            if (header === "title" || header === "name" || header === "business") {
              record["title"] = value || "Unknown Business"
              hasTitle = Boolean(value)
            } else if (header === "totalScore" || header === "total_score") {
              record["total_score"] = value && !isNaN(Number.parseFloat(value)) ? Number.parseFloat(value) : null
            } else if (header === "reviewsCount" || header === "reviews_count") {
              record["reviews_count"] = value && !isNaN(Number.parseInt(value)) ? Number.parseInt(value, 10) : 0
            } else if (header === "street" || header === "address") {
              record["street"] = value
            } else if (header === "city") {
              record["city"] = value || "Unknown"
              hasLocation = hasLocation || Boolean(value)
            } else if (header === "state" || header === "State" || header === "STATE") {
              record["state"] = value || defaultState
              hasLocation = hasLocation || Boolean(value)
            } else if (header === "country_code" || header === "countrycode") {
              record["country_code"] = value
            } else if (header === "website") {
              record["website"] = value
            } else if (header === "url" || header === "google_maps_url" || header === "searchPageUrl") {
              record["google_maps_url"] = value
            } else if (header === "phone") {
              record["phone"] = value
            } else if (header === "category_name" || header === "categoryName") {
              record["category_name"] = value
            }

            // Extract "people also search for" data
            if (header.startsWith("peopleAlsoSearch/")) {
              const parts = header.split("/")
              if (parts.length >= 3) {
                const index = Number.parseInt(parts[1], 10)
                const field = parts[2]

                // Initialize the entry if it doesn't exist
                if (!peopleAlsoSearchIndices.has(index)) {
                  peopleAlsoSearchIndices.add(index)
                  peopleAlsoSearch[index] = {}
                }

                // Add the field to the entry
                peopleAlsoSearch[index][field] = value
              }
            }

            // Extract review data - focus on the first review (reviews/0/...)
            if (header.startsWith("reviews/0/")) {
              const reviewField = header.split("/").slice(2).join("/")

              if (reviewField === "name") {
                record["reviewer_name"] = value
                hasReviewData = hasReviewData || Boolean(value)
              } else if (reviewField === "text") {
                record["review_text"] = value
                hasReviewData = hasReviewData || Boolean(value)
              } else if (reviewField === "stars") {
                record["review_rating"] = value && !isNaN(Number.parseFloat(value)) ? Number.parseFloat(value) : null
                hasReviewData = hasReviewData || record["review_rating"] !== null
              }
            }
          })

          // Add the "people also search for" data to the record if we found any
          if (peopleAlsoSearch.length > 0) {
            // Filter out empty entries and clean up the array
            const cleanedPeopleAlsoSearch = peopleAlsoSearch.filter(Boolean)
            if (cleanedPeopleAlsoSearch.length > 0) {
              record["people_also_search"] = cleanedPeopleAlsoSearch
            }
          }

          // Track skip reasons
          if (!hasTitle) skipReasons.missingTitle++
          if (!hasLocation) skipReasons.missingLocation++
          if (!hasReviewData) skipReasons.missingReviewData++

          // Only process records with required fields - RELAXED VALIDATION
          // We now only require a title OR location, plus some review data
          if ((hasTitle || hasLocation) && hasReviewData) {
            // Generate a unique identifier for deduplication
            const businessKey =
              `${record.title || "unknown"}-${record.city || "unknown"}-${record.state || defaultState}`.toLowerCase()

            // Skip if we've already processed this business
            if (processedBusinessIds.has(businessKey)) {
              console.log(`Skipping duplicate business: ${businessKey}`)
              skipReasons.duplicateBusiness++
              skipped++
              continue
            }

            // Ensure required fields have values
            if (!record.title) record.title = "Unknown Business"
            if (!record.city) record.city = "Unknown"
            if (!record.state) record.state = defaultState

            batchRecords.push(record)
            processedBusinessIds.add(businessKey)

            // Store sample record
            if (!sampleRecord) {
              sampleRecord = record
            }
          } else {
            console.log(`Skipping record due to missing required fields or review data`)
            skipped++
          }
        } catch (error) {
          console.error(`Error processing line:`, error)
          errors.push({
            line: i + j + 1,
            error: error instanceof Error ? error.message : "Unknown error",
          })
          skipReasons.parseError++
          skipped++
        }
      }

      // Insert batch records
      if (batchRecords.length > 0) {
        const { data, error } = await supabase.from("competitors").insert(batchRecords).select()

        if (error) {
          console.error(`Error inserting batch:`, error)
          errors.push({
            line: i,
            error: `Batch insert error: ${error.message}`,
          })
          skipReasons.insertError += batchRecords.length
          skipped += batchRecords.length
        } else {
          totalImported += data.length
          console.log(`Inserted ${data.length} records in batch`)
        }
      }

      // Log progress after each batch
      console.log(`Processed batch: ${totalImported} imported, ${skipped} skipped`)
    }

    // Prepare debugging info
    const debugInfo = debugMode
      ? {
          sampleLines,
          sampleParsedData,
          headers,
          headerCount: headers.length,
          firstFewHeaders: headers.slice(0, 10),
          reviewHeaders: headers.filter((h) => h.startsWith("reviews/")),
          peopleAlsoSearchHeaders: headers.filter((h) => h.startsWith("peopleAlsoSearch/")),
          hasReviewTextHeader: headers.includes("reviews/0/text"),
          hasReviewerNameHeader: headers.includes("reviews/0/name"),
          hasReviewStarsHeader: headers.includes("reviews/0/stars"),
          hasStateHeader,
          hasPeopleAlsoSearchHeaders,
        }
      : undefined

    return NextResponse.json({
      success: true,
      totalImported,
      skipped,
      skipReasons,
      errors: errors.length > 0 ? errors.slice(0, 20) : undefined,
      sampleRecord,
      debugInfo,
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
