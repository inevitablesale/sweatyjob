import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">Thank You!</h1>
            <p className="text-lg text-center text-gray-600 mb-8">
              We've received your information and a member of our partner team will be in touch with you shortly to
              discuss the next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partners">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Partner Program
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Return to Homepage</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
