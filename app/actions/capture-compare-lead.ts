"use server"

import { captureLead, type LeadData } from "@/lib/lead-capture"

export async function captureCompareLead(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = (formData.get("address") as string) || ""

    // Split name into first and last name
    const nameParts = name.split(" ")
    const firstName = nameParts[0] || ""
    const lastName = nameParts.slice(1).join(" ") || ""

    // Create lead data object
    const leadData: LeadData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      source: "compare_page",
      status: "new",
      notes: "Lead captured from competitor comparison page",
      utmSource: "website",
      utmMedium: "organic",
      utmCampaign: "competitor_comparison",
    }

    // Capture the lead
    const result = await captureLead(leadData)

    return {
      success: true,
      message: "Thank you! Your information has been submitted.",
      leadId: result.id,
      isNew: result.isNew,
    }
  } catch (error) {
    console.error("Error capturing lead:", error)
    return {
      success: false,
      message: "There was an error submitting your information. Please try again.",
    }
  }
}
