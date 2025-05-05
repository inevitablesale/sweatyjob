"use server"
import { redirect } from "next/navigation"
import { captureLead, type LeadSource } from "@/lib/lead-capture"

export async function capturePhoneNumber(formData: FormData) {
  const phone = formData.get("phone") as string
  const source = (formData.get("source") as LeadSource) || "phone_capture"
  const skipRedirect = formData.get("skipRedirect") === "true"

  if (!phone) {
    return { error: "Phone number is required" }
  }

  // Clean the phone number (remove non-digits)
  const cleanedPhone = phone.replace(/\D/g, "")

  // Basic validation
  if (cleanedPhone.length < 10) {
    return { error: "Please enter a valid phone number" }
  }

  try {
    // Use our unified lead capture system
    await captureLead({
      phone: cleanedPhone,
      source,
      status: "new",
    })

    // Only redirect if skipRedirect is not true
    if (!skipRedirect) {
      // Redirect to waitlist with phone prefilled
      redirect(`/waitlist?phone=${cleanedPhone}`)
    }

    // Return success if we're not redirecting
    return { success: true }
  } catch (error) {
    console.error("Error capturing phone number:", error)
    // More detailed error message that will help with debugging
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    return { error: `Failed to save your information: ${errorMessage}. Please try again.` }
  }
}

// Export the function directly with the name we're importing elsewhere
export const capturePhone = capturePhoneNumber
