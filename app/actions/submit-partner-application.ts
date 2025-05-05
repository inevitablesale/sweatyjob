"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import type { Database } from "@/lib/supabase/database.types"

type PartnerApplicationInsert = Database["public"]["Tables"]["partner_applications"]["Insert"]

export async function submitPartnerApplication(data: {
  first_name: string
  last_name: string
  email: string
  phone: string
  company_name?: string
  business_type?: string
  message?: string
}) {
  const supabase = createClient()

  try {
    const partnerData: PartnerApplicationInsert = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      company_name: data.company_name || null,
      business_type: data.business_type || null,
      message: data.message || null,
    }

    const { error } = await supabase.from("partner_applications").insert([partnerData])

    if (error) {
      console.error("Error submitting partner application:", error)
      throw new Error("Failed to submit application")
    }

    // Revalidate the partners page
    revalidatePath("/partners")

    return { success: true }
  } catch (error) {
    console.error("Error in submitPartnerApplication:", error)
    throw error
  }
}
