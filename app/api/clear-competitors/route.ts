import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    const supabase = createClient()

    // Delete all records from the competitors table
    // Using neq with a UUID that won't exist to delete all records
    const { error } = await supabase.from("competitors").delete().neq("id", "00000000-0000-0000-0000-000000000000")

    if (error) {
      console.error("Error clearing competitors table:", error)
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Competitors table cleared successfully",
    })
  } catch (error) {
    console.error("Error in clear-competitors:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
