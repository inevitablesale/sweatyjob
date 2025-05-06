import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SweatyJob | AI-Powered Lawn Mowing in Richmond, VA",
  description:
    "SweatyJob offers autonomous AI mowing in Richmond, VA. Reclaim your weekends with our smart lawn care service.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-BN8QPV7LF4`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BN8QPV7LF4');
  `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-night-900 text-white`}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
