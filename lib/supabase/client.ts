import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "./database.types"

// Create a single supabase client for the entire session
let supabaseClient: ReturnType<typeof createClientComponentClient<Database>> | null = null

// Hardcoded environment variables as a fallback
const SUPABASE_URL = "https://ilwabykqutxgwtuebbvp.supabase.co"
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsd2FieWtxdXR4Z3d0dWViYnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODU4NDAsImV4cCI6MjA1OTk2MTg0MH0.Emo8G6gsiDv_6N3ZfSDtjIPX_d30C1dw-ck3doCkk-s"

export const getSupabaseClient = () => {
  console.log("🔵 INITIALIZING SUPABASE CLIENT")
  if (!supabaseClient) {
    try {
      console.log("🔵 CREATING NEW SUPABASE CLIENT")
      // Try to create client with env vars first
      if (
        typeof process.env.NEXT_PUBLIC_SUPABASE_URL === "string" &&
        typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === "string"
      ) {
        console.log("🔵 USING ENV VARS FOR SUPABASE CLIENT")
        supabaseClient = createClientComponentClient<Database>()
      }
      // Fall back to hardcoded values if env vars aren't available
      else {
        console.log("🔵 USING HARDCODED VALUES FOR SUPABASE CLIENT")
        supabaseClient = createClientComponentClient<Database>({
          supabaseUrl: SUPABASE_URL,
          supabaseKey: SUPABASE_ANON_KEY,
        })
      }
      console.log("🟢 SUPABASE CLIENT CREATED SUCCESSFULLY")
    } catch (error) {
      console.error("🔴 FAILED TO INITIALIZE SUPABASE CLIENT:", error)
      // Create with explicit values as last resort
      try {
        console.log("🔵 ATTEMPTING FALLBACK SUPABASE CLIENT CREATION")
        supabaseClient = createClientComponentClient<Database>({
          supabaseUrl: SUPABASE_URL,
          supabaseKey: SUPABASE_ANON_KEY,
        })
        console.log("🟢 FALLBACK SUPABASE CLIENT CREATED SUCCESSFULLY")
      } catch (fallbackError) {
        console.error("🔴 FAILED TO INITIALIZE SUPABASE CLIENT WITH FALLBACK:", fallbackError)
        return null
      }
    }
  } else {
    console.log("🟢 USING EXISTING SUPABASE CLIENT")
  }
  return supabaseClient
}

// Re-export explicitly to ensure it's recognized
