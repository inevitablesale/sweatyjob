import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    const supabase = createClient()

    // Create a test record with all fields explicitly defined
    const testRecord = {
      title: "Test Lawn Company " + new Date().toISOString(),
      total_score: 4.5,
      reviews_count: 42,
      street: "123 Test Street",
      city: "Richmond",
      state: "Virginia",
      country_code: "US",
      website: "https://example.com",
      phone: "+1 555-123-4567",
      category_name: "Lawn care service",
      google_maps_url: "https://maps.google.com/example",
    }

    console.log("Inserting test record:", testRecord)

    const { data, error } = await supabase.from("competitors").insert(testRecord).select()

    if (error) {
      console.error("Test insert error:", error)
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          details: error,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Test record inserted successfully",
    })
  } catch (error) {
    console.error("Test insert exception:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
