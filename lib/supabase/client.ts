import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "./database.types"

// Create a single supabase client for the entire session
let supabaseClient: ReturnType<typeof createClientComponentClient<Database>> | null = null

// Hardcoded environment variables as a fallback
const SUPABASE_URL = "https://ilwabykqutxgwtuebbvp.supabase.co"
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsd2FieWtxdXR4Z3d0dWViYnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODU4NDAsImV4cCI6MjA1OTk2MTg0MH0.Emo8G6gsiDv_6N3ZfSDtjIPX_d30C1dw-ck3doCkk-s"

export const getSupabaseClient = () => {
  if (!supabaseClient) {
    try {
      // Try to create client with env vars first
      if (
        typeof process.env.NEXT_PUBLIC_SUPABASE_URL === "string" &&
        typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === "string"
      ) {
        supabaseClient = createClientComponentClient<Database>()
      }
      // Fall back to hardcoded values if env vars aren't available
      else {
        supabaseClient = createClientComponentClient<Database>({
          supabaseUrl: SUPABASE_URL,
          supabaseKey: SUPABASE_ANON_KEY,
        })
      }
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error)
      // Create with explicit values as last resort
      try {
        supabaseClient = createClientComponentClient<Database>({
          supabaseUrl: SUPABASE_URL,
          supabaseKey: SUPABASE_ANON_KEY,
        })
      } catch (fallbackError) {
        console.error("Failed to initialize Supabase client with fallback:", fallbackError)
        return null
      }
    }
  }
  return supabaseClient
}
