"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getSupabaseClient } from "@/lib/supabase/client"
import { AlertCircle, CheckCircle2, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = getSupabaseClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) throw error

      setSuccess(true)
    } catch (error: any) {
      setError(error.message || "Failed to send reset password email")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-night-900 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-white">
              <span className="text-sweat-500">Sweaty</span>Job
            </h1>
          </Link>
          <p className="text-gray-400 mt-2">Reset your password</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success ? (
          <Card className="bg-night-800 border-night-700">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-green-500/10 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <CardTitle className="text-white text-center">Check your email</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                We've sent you a password reset link
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-400 mb-6">
                Please check your email and click on the reset link to create a new password.
              </p>
              <p className="text-sm text-gray-500">
                If you don't see the email, check your spam folder or make sure you entered the correct email address.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t border-night-700 pt-6">
              <div className="text-sm text-gray-400 text-center">
                Remember your password?{" "}
                <Link href="/auth/login" className="text-sweat-400 hover:text-sweat-300">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        ) : (
          <Card className="bg-night-800 border-night-700">
            <CardHeader>
              <CardTitle className="text-white">Forgot Password</CardTitle>
              <CardDescription className="text-gray-400">
                Enter your email and we'll send you a reset link
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-night-700 border-night-600 text-white pl-10"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-sweat-500 hover:bg-sweat-600 text-white" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t border-night-700 pt-6">
              <div className="text-sm text-gray-400 text-center">
                Remember your password?{" "}
                <Link href="/auth/login" className="text-sweat-400 hover:text-sweat-300">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
