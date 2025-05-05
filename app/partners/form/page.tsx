"use client"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, DollarSign, TrendingUp } from "lucide-react"
import { PartnerApplicationForm } from "@/components/partner-application-form"

export default function PartnersFormPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#f5df4d] text-black py-3 px-4 text-center font-bold">
        LIMITED TIME: Only accepting 3 partners per market - 70% of spots already filled
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              STOP WAITING.
              <br />
              START <span className="text-[#f5df4d]">BUILDING</span>.<br />
              JOIN NOW.
            </h1>

            <div className="space-y-6 mb-8">
              <p className="text-xl font-medium">
                This isn't just another opportunity. This is THE opportunity to build recurring revenue with ZERO
                inventory costs.
              </p>

              <div className="flex items-start space-x-3">
                <DollarSign className="h-6 w-6 text-[#f5df4d] mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="font-bold text-[#f5df4d]">$69/month</span> recurring profit per customer
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#f5df4d] mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="font-bold text-[#f5df4d]">$250</span> one-time setup fee per customer
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-[#f5df4d] mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Just <span className="font-bold text-[#f5df4d]">10 customers</span> ={" "}
                  <span className="font-bold text-[#f5df4d]">$690/month</span> passive income
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-[#f5df4d] mt-1 flex-shrink-0" />
                <p className="text-lg">
                  Applications closing <span className="font-bold text-[#f5df4d]">SOON</span> - Don't miss out
                </p>
              </div>
            </div>

            <div className="p-4 bg-white/10 rounded-lg mb-8">
              <p className="italic text-lg">
                "The biggest mistake I see entrepreneurs make is waiting for the 'perfect time' to start. There is no
                perfect time. The best time was yesterday. The second best time is RIGHT NOW."
              </p>
              <p className="text-right font-bold mt-2">- Gary Vaynerchuk</p>
            </div>

            <div className="hidden md:block">
              <Link
                href="#application-form"
                className="inline-flex items-center px-8 py-4 text-lg font-bold bg-[#f5df4d] text-black rounded-md hover:bg-[#f0d73a] transition-all"
              >
                APPLY NOW <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div id="application-form" className="bg-zinc-900 p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">SECURE YOUR SPOT NOW</h2>

            <PartnerApplicationForm dark={true} />

            <p className="text-sm text-center mt-6 text-zinc-400">
              By submitting this form, you're taking the first step toward building real passive income. We'll contact
              you within 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-bold mb-6">STOP OVERTHINKING. START DOING.</p>

          <Link
            href="#application-form"
            className="inline-flex items-center px-8 py-4 text-lg font-bold bg-[#f5df4d] text-black rounded-md hover:bg-[#f0d73a] transition-all"
          >
            APPLY NOW <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-zinc-900 py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} SweatyJob |{" "}
            <Link href="/partners" className="underline">
              Partners
            </Link>{" "}
            |{" "}
            <Link href="/about" className="underline">
              About
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
