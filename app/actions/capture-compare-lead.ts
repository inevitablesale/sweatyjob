"use server"

import { captureLead, type LeadData } from "@/lib/lead-capture"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().optional(),
})

type State = {
  success: boolean
  message: string
  leadId: string
  isNew: boolean
}

export async function captureCompareLead(prevState: State, formData: FormData): Promise<State> {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please check your information and try again.",
        leadId: "",
        isNew: false,
      }
    }

    const { name, email, phone, address } = validatedFields.data

    // Split name into first and last name
    const nameParts = name.split(" ")
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : ""

    // Determine the source based on the URL or referrer
    let source: LeadData["source"] = "contact_form"

    // Get the current URL path from the referrer or other means
    const url = (formData.get("source") as string) || ""

    if (url.includes("lawn-weeding-robots")) {
      source = "lawn_weeding_robots"
    } else if (url.includes("garden-weeding-robots")) {
      source = "garden_weeding_robots"
    } else if (url.includes("compare")) {
      source = "competitor_comparison"
    }

    // Capture the lead
    const leadData: LeadData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      source,
      status: "new",
      notes: `Lead captured from ${source} page.`,
    }

    const result = await captureLead(leadData)

    return {
      success: true,
      message: "Thank you! We'll be in touch soon about your robot mower options.",
      leadId: result.id,
      isNew: result.isNew,
    }
  } catch (error) {
    console.error("Error capturing lead:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      leadId: "",
      isNew: false,
    }
  }
}
