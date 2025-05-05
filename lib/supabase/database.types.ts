export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          email: string | null
          phone: string
          address: string | null
          city: string | null
          state: string | null
          zip_code: string | null
          coordinates: Json | null
          property_size: string | null
          source: string
          status: string
          notes: string | null
          created_at: string
          updated_at: string
          last_contact_date: string | null
          lead_score: number | null
          stripe_customer_id: string | null
          neighborhood: string | null
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
        }
        Insert: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email?: string | null
          phone: string
          address?: string | null
          city?: string | null
          state?: string | null
          zip_code?: string | null
          coordinates?: Json | null
          property_size?: string | null
          source: string
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
          last_contact_date?: string | null
          lead_score?: number | null
          stripe_customer_id?: string | null
          neighborhood?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email?: string | null
          phone?: string
          address?: string | null
          city?: string | null
          state?: string | null
          zip_code?: string | null
          coordinates?: Json | null
          property_size?: string | null
          source?: string
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
          last_contact_date?: string | null
          lead_score?: number | null
          stripe_customer_id?: string | null
          neighborhood?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
        }
      }
      appointments: {
        Row: {
          id: string
          lead_id: string
          service_type: string
          appointment_date: string
          time_slot: string
          status: string
          notes: string | null
          created_at: string
          updated_at: string
          stripe_session_id: string | null
          payment_status: string | null
          address: string | null
          coordinates: Json | null
          lead_email: string | null
          lead_phone: string | null
          stripe_customer_id: string | null
        }
        Insert: {
          id?: string
          lead_id: string
          service_type: string
          appointment_date: string
          time_slot: string
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
          stripe_session_id?: string | null
          payment_status?: string | null
          address?: string | null
          coordinates?: Json | null
          lead_email?: string | null
          lead_phone?: string | null
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          lead_id?: string
          service_type?: string
          appointment_date?: string
          time_slot?: string
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
          stripe_session_id?: string | null
          payment_status?: string | null
          address?: string | null
          coordinates?: Json | null
          lead_email?: string | null
          lead_phone?: string | null
          stripe_customer_id?: string | null
        }
      }
      waitlist: {
        Row: {
          id: string
          lead_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          address: string
          neighborhood: string
          property_size: string
          notes: string | null
          source: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          lead_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          address: string
          neighborhood: string
          property_size: string
          notes?: string | null
          source?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          lead_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          address?: string
          neighborhood?: string
          property_size?: string
          notes?: string | null
          source?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      partner_applications: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          company_name: string | null
          business_type: string | null
          message: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          company_name?: string | null
          business_type?: string | null
          message?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          company_name?: string | null
          business_type?: string | null
          message?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          email: string
          phone: string | null
          address: string | null
          city: string | null
          state: string | null
          zip: string | null
          subscription_status: string | null
          subscription_plan: string | null
          subscription_start_date: string | null
          subscription_end_date: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          created_at: string | null
          updated_at: string | null
          is_admin: boolean | null
        }
        Insert: {
          id: string
          first_name?: string | null
          last_name?: string | null
          email: string
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip?: string | null
          subscription_status?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          subscription_end_date?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          created_at?: string | null
          updated_at?: string | null
          is_admin?: boolean | null
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip?: string | null
          subscription_status?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          subscription_end_date?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          created_at?: string | null
          updated_at?: string | null
          is_admin?: boolean | null
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string
          amount: number
          currency: string
          status: string
          stripe_payment_id: string | null
          stripe_invoice_id: string | null
          payment_method: string | null
          payment_method_last4: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          currency?: string
          status: string
          stripe_payment_id?: string | null
          stripe_invoice_id?: string | null
          payment_method?: string | null
          payment_method_last4?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          currency?: string
          status?: string
          stripe_payment_id?: string | null
          stripe_invoice_id?: string | null
          payment_method?: string | null
          payment_method_last4?: string | null
          created_at?: string | null
        }
      }
      available_time_slots: {
        Row: {
          id: string
          date: string
          time_slot: string
          is_available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          date: string
          time_slot: string
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          date?: string
          time_slot?: string
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
