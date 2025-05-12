import { createClient } from "@supabase/supabase-js"
import type { Database } from "./supabase/database.types"

// Initialize Supabase client
const supabase = createClient<Database>(process.env.SUPABASE_URL || "", process.env.SUPABASE_SERVICE_ROLE_KEY || "")

export type LeadSource =
  | "phone_capture"
  | "waitlist"
  | "smart_yard_purchase"
  | "standard_mowing"
  | "appointment_booking"
  | "contact_form"
  | "website_signup"
  | "competitor_comparison"
  | "lawn_weeding_robots"
  | "garden_weeding_robots"

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "unqualified"
  | "converted"
  | "lost"
  | "waitlisted"
  | "appointment_scheduled"
  | "checkout_started"
  | "checkout_completed"

export interface LeadData {
  // Required fields
  phone: string
  source: LeadSource

  // Optional fields
  firstName?: string
  lastName?: string
  email?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  coordinates?: { lat: number; lng: number }
  propertySize?: string
  status?: LeadStatus
  notes?: string
  neighborhood?: string
  stripeCustomerId?: string

  // UTM parameters
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

export async function captureLead(leadData: LeadData) {
  try {
    const now = new Date().toISOString()

    // Check if this lead already exists by phone number
    const { data: existingLead } = await supabase
      .from("leads")
      .select("id, status, created_at")
      .eq("phone", leadData.phone)
      .maybeSingle()

    if (existingLead) {
      // Update the existing lead
      const { error } = await supabase
        .from("leads")
        .update({
          first_name: leadData.firstName || existingLead.first_name,
          last_name: leadData.lastName || existingLead.last_name,
          email: leadData.email || existingLead.email,
          address: leadData.address || existingLead.address,
          city: leadData.city || existingLead.city,
          state: leadData.state || existingLead.state,
          zip_code: leadData.zipCode || existingLead.zip_code,
          coordinates: leadData.coordinates || existingLead.coordinates,
          property_size: leadData.propertySize || existingLead.property_size,
          source: leadData.source, // Always update the source to track the latest touchpoint
          status: leadData.status || existingLead.status,
          notes: leadData.notes
            ? `${existingLead.notes ? existingLead.notes + "\n\n" : ""}${now}: ${leadData.notes}`
            : existingLead.notes,
          updated_at: now,
          last_contact_date: now,
          stripe_customer_id: leadData.stripeCustomerId || existingLead.stripe_customer_id,
          neighborhood: leadData.neighborhood || existingLead.neighborhood,
          utm_source: leadData.utmSource || existingLead.utm_source,
          utm_medium: leadData.utmMedium || existingLead.utm_medium,
          utm_campaign: leadData.utmCampaign || existingLead.utm_campaign,
        })
        .eq("id", existingLead.id)

      if (error) throw error

      return {
        id: existingLead.id,
        isNew: false,
        createdAt: existingLead.created_at,
      }
    } else {
      // Insert a new lead
      const { data, error } = await supabase
        .from("leads")
        .insert({
          first_name: leadData.firstName || null,
          last_name: leadData.lastName || null,
          email: leadData.email || null,
          phone: leadData.phone,
          address: leadData.address || null,
          city: leadData.city || null,
          state: leadData.state || null,
          zip_code: leadData.zipCode || null,
          coordinates: leadData.coordinates || null,
          property_size: leadData.propertySize || null,
          source: leadData.source,
          status: leadData.status || "new",
          notes: leadData.notes || null,
          created_at: now,
          updated_at: now,
          last_contact_date: now,
          lead_score: 10, // Default initial score
          stripe_customer_id: leadData.stripeCustomerId || null,
          neighborhood: leadData.neighborhood || null,
          utm_source: leadData.utmSource || null,
          utm_medium: leadData.utmMedium || null,
          utm_campaign: leadData.utmCampaign || null,
        })
        .select()
        .single()

      if (error) throw error

      return {
        id: data.id,
        isNew: true,
        createdAt: data.created_at,
      }
    }
  } catch (error) {
    console.error("Error capturing lead:", error)
    throw error
  }
}

export async function addToWaitlist(
  leadId: string,
  waitlistData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    neighborhood: string
    propertySize: string
    notes?: string
    source: string
  },
) {
  try {
    const now = new Date().toISOString()

    // Add to waitlist table
    const { error } = await supabase.from("waitlist").insert({
      lead_id: leadId,
      first_name: waitlistData.firstName,
      last_name: waitlistData.lastName,
      email: waitlistData.email,
      phone: waitlistData.phone,
      address: waitlistData.address,
      neighborhood: waitlistData.neighborhood,
      property_size: waitlistData.propertySize,
      notes: waitlistData.notes || null,
      source: waitlistData.source,
      status: "new",
      created_at: now,
      updated_at: now,
    })

    if (error) throw error

    // Update the lead status
    await supabase
      .from("leads")
      .update({
        status: "waitlisted",
        updated_at: now,
      })
      .eq("id", leadId)

    return { success: true }
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    throw error
  }
}

export async function scheduleAppointment(
  leadId: string,
  appointmentData: {
    serviceType: string
    appointmentDate: string
    timeSlot: string
    notes?: string
    address?: string
    coordinates?: { lat: number; lng: number }
    stripeSessionId?: string
    paymentStatus?: string
    email?: string
    phone?: string
    stripeCustomerId?: string
  },
) {
  try {
    const now = new Date().toISOString()

    // Create appointment
    const { data, error } = await supabase
      .from("appointments")
      .insert({
        lead_id: leadId,
        service_type: appointmentData.serviceType,
        appointment_date: appointmentData.appointmentDate,
        time_slot: appointmentData.timeSlot,
        status: "scheduled",
        notes: appointmentData.notes || null,
        created_at: now,
        updated_at: now,
        stripe_session_id: appointmentData.stripeSessionId || null,
        payment_status: appointmentData.paymentStatus || "pending",
        address: appointmentData.address || null,
        coordinates: appointmentData.coordinates || null,
        lead_email: appointmentData.email || null,
        lead_phone: appointmentData.phone || null,
        stripe_customer_id: appointmentData.stripeCustomerId || null,
      })
      .select()
      .single()

    if (error) throw error

    // Update the lead status
    await supabase
      .from("leads")
      .update({
        status: "appointment_scheduled",
        updated_at: now,
        last_contact_date: now,
      })
      .eq("id", leadId)

    return {
      appointmentId: data.id,
      success: true,
    }
  } catch (error) {
    console.error("Error scheduling appointment:", error)
    throw error
  }
}

export async function updateLeadStatus(leadId: string, status: LeadStatus, notes?: string) {
  try {
    const now = new Date().toISOString()

    const { data: existingLead } = await supabase.from("leads").select("notes").eq("id", leadId).single()

    const updatedNotes = notes
      ? `${existingLead.notes ? existingLead.notes + "\n\n" : ""}${now}: ${notes}`
      : existingLead.notes

    const { error } = await supabase
      .from("leads")
      .update({
        status,
        notes: updatedNotes,
        updated_at: now,
        last_contact_date: now,
      })
      .eq("id", leadId)

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error("Error updating lead status:", error)
    throw error
  }
}
