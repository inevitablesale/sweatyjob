import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const clearFirst = formData.get("clearFirst") === "true"

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 })
    }

    // Check if it's a CSV file
    if (!file.name.endsWith(".csv")) {
      return NextResponse.json({ success: false, error: "File must be a CSV" }, { status: 400 })
    }

    // Initialize Supabase client
    const supabase = createClient()

    // Clear the table first if requested
    if (clearFirst) {
      console.log("Clearing competitors table before import...")
      const { error: clearError } = await supabase
        .from("competitors")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000")

      if (clearError) {
        console.error("Error clearing table:", clearError)
        return NextResponse.json(
          { success: false, error: `Failed to clear table: ${clearError.message}` },
          { status: 500 },
        )
      }

      console.log("Table cleared successfully")
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

    // Process records individually
    let totalInserted = 0
    let totalSkipped = 0
    const errors = []
    const sampleRecords = []
    const skippedRecords = []
    const insertedIds = new Set() // Track inserted IDs to detect duplicates

    // Process data rows (skip header)
    for (let i = 1; i < lines.length; i++) {
      try {
        const values = parseCSVLine(lines[i])

        // Skip if values don't match headers
        if (values.length !== headers.length) {
          console.log(`Skipping line ${i}: values length (${values.length}) doesn't match headers (${headers.length})`)
          totalSkipped++
          continue
        }

        // Create a record object
        const record: Record<string, any> = {}

        // Map CSV values to record fields
        headers.forEach((header, index) => {
          const value = values[index]?.trim() || ""
          const fieldName = mapHeaderToField(header.trim().toLowerCase())

          if (fieldName) {
            // Convert values to appropriate types
            if (fieldName === "total_score") {
              // For total_score, empty or non-numeric values become null
              record[fieldName] = value && !isNaN(Number.parseFloat(value)) ? Number.parseFloat(value) : null
            } else if (fieldName === "reviews_count") {
              // For reviews_count, empty or non-numeric values become 0
              record[fieldName] = value && !isNaN(Number.parseInt(value)) ? Number.parseInt(value, 10) : 0
            } else {
              record[fieldName] = value
            }
          }
        })

        // Only process records with required fields
        if (record.title && record.city && record.state) {
          // Generate a unique identifier for deduplication
          const recordKey = `${record.title}-${record.city}-${record.state}`.toLowerCase()

          // Skip if we've already inserted this record
          if (insertedIds.has(recordKey)) {
            console.log(`Skipping duplicate record at line ${i}: ${recordKey}`)
            totalSkipped++
            continue
          }

          // Insert individual record
          const { data, error } = await supabase.from("competitors").insert([record]).select()

          if (error) {
            console.error(`Error inserting record at line ${i}:`, error)
            errors.push({
              line: i,
              error: error.message,
            })
            totalSkipped++

            // Store sample of skipped records
            if (skippedRecords.length < 3) {
              skippedRecords.push({
                line: i,
                record: { ...record },
                error: error.message,
              })
            }
          } else {
            totalInserted++
            insertedIds.add(recordKey) // Track this record as inserted

            // Store sample of successful records
            if (sampleRecords.length < 3) {
              sampleRecords.push({ ...record })
            }

            // Log progress periodically
            if (totalInserted % 100 === 0) {
              console.log(`Progress: ${totalInserted} records inserted, ${totalSkipped} skipped`)
            }
          }
        } else {
          console.log(`Skipping record at line ${i} due to missing required fields`)
          totalSkipped++
        }

        // Add a tiny delay to avoid overwhelming the database
        if (i % 10 === 0) {
          await new Promise((resolve) => setTimeout(resolve, 10))
        }
      } catch (error) {
        console.error(`Error processing line ${i}:`, error)
        errors.push({
          line: i,
          error: error instanceof Error ? error.message : "Unknown error",
        })
        totalSkipped++
      }
    }

    return NextResponse.json({
      success: true,
      totalInserted,
      totalSkipped,
      totalLines: lines.length - 1, // Exclude header
      uniqueRecords: insertedIds.size,
      errors: errors.length > 0 ? errors.slice(0, 10) : undefined, // Limit to first 10 errors
      sampleRecords,
      skippedRecords,
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

// Simple CSV line parser
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

// Map CSV header to database field
function mapHeaderToField(header: string): string | null {
  // Direct mappings
  const fieldMap: Record<string, string> = {
    title: "title",
    name: "title",
    business: "title",
    "business name": "title",
    company: "title",
    "company name": "title",

    total_score: "total_score",
    totalscore: "total_score",
    rating: "total_score",
    score: "total_score",

    reviews_count: "reviews_count",
    reviewscount: "reviews_count",
    reviews: "reviews_count",
    "review count": "reviews_count",

    street: "street",
    address: "street",
    "street address": "street",

    city: "city",
    town: "city",
    locality: "city",

    state: "state",
    province: "state",
    region: "state",

    country_code: "country_code",
    countrycode: "country_code",
    country: "country_code",

    // FIX: Correct the website and URL mappings
    website: "website", // Keep website -> website
    web: "website",

    // FIX: Map URL to google_maps_url instead of website
    url: "google_maps_url", // Changed from "website" to "google_maps_url"
    "google maps url": "google_maps_url",
    "maps url": "google_maps_url",
    maps: "google_maps_url",
    "google maps": "google_maps_url",

    phone: "phone",
    telephone: "phone",
    "phone number": "phone",

    category_name: "category_name",
    categoryname: "category_name",
    category: "category_name",
    type: "category_name",

    slug: "slug", // Add slug mapping if present
  }

  return fieldMap[header] || null
}
