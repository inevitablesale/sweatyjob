"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MailCheck } from "lucide-react"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-night-900 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-white">
              <span className="text-sweat-500">Sweaty</span>Job
            </h1>
          </Link>
        </div>

        <Card className="bg-night-800 border-night-700">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-sweat-500/10 p-3 rounded-full">
                <MailCheck className="h-8 w-8 text-sweat-500" />
              </div>
            </div>
            <CardTitle className="text-white text-center">Check your email</CardTitle>
            <CardDescription className="text-gray-400 text-center">
              We've sent you a verification link to your email address
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-400 mb-6">
              Please check your email and click on the verification link to complete your registration.
            </p>
            <p className="text-sm text-gray-500">
              If you don't see the email, check your spam folder or make sure you entered the correct email address.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t border-night-700 pt-6">
            <div className="text-sm text-gray-400 text-center">
              Already verified?{" "}
              <Link href="/auth/login" className="text-sweat-400 hover:text-sweat-300">
                Sign in
              </Link>
            </div>
            <div className="text-sm text-gray-400 text-center">
              Didn't receive an email?{" "}
              <Link href="/auth/register" className="text-sweat-400 hover:text-sweat-300">
                Try again
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
