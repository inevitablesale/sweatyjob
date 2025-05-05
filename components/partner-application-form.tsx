"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { submitPartnerApplication } from "@/app/actions/submit-partner-application"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  company_name: z.string().optional(),
  business_type: z.string().optional(),
  message: z.string().optional(),
})

export function PartnerApplicationForm({ dark = false }: { dark?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company_name: "",
      business_type: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await submitPartnerApplication(values)
      setIsSuccess(true)
      toast({
        title: "Application Submitted",
        description: "We've received your application and will contact you shortly.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your application couldn't be submitted. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f5df4d]/20 mb-4">
          <CheckCircle className="h-8 w-8 text-[#f5df4d]" />
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>YOU'RE IN!</h3>
        <p className={dark ? "text-white/80" : "text-gray-600"}>
          Your application has been received. Our team will contact you within 24 hours to discuss next steps and get
          you started ASAP.
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white" : ""}>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
                    {...field}
                    className={dark ? "bg-white/10 border-white/20 text-white" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white" : ""}>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    {...field}
                    className={dark ? "bg-white/10 border-white/20 text-white" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white" : ""}>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@example.com"
                    {...field}
                    className={dark ? "bg-white/10 border-white/20 text-white" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white" : ""}>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(555) 123-4567"
                    {...field}
                    className={dark ? "bg-white/10 border-white/20 text-white" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white" : ""}>Company Name (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Business"
                    {...field}
                    className={dark ? "bg-white/10 border-white/20 text-white" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="business_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white" : ""}>Business Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={dark ? "bg-white/10 border-white/20 text-white" : ""}>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="lawn_care">Lawn Care</SelectItem>
                    <SelectItem value="landscape">Landscape Design</SelectItem>
                    <SelectItem value="pest_control">Pest Control</SelectItem>
                    <SelectItem value="irrigation">Irrigation</SelectItem>
                    <SelectItem value="tree_care">Tree Care</SelectItem>
                    <SelectItem value="new_business">New Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={dark ? "text-white" : ""}>Tell us about your business (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What markets are you interested in? How many customers do you currently have?"
                  className={`resize-none ${dark ? "bg-white/10 border-white/20 text-white" : ""}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#f5df4d] hover:bg-[#f0d73a] text-black font-bold py-3 text-lg"
        >
          {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION NOW"}
        </Button>
      </form>
    </Form>
  )
}
