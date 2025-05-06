"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import type { ReactNode } from "react"

interface ConditionalLayoutProps {
  children: ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isComparePage = pathname.startsWith("/compare")

  return (
    <>
      {!isComparePage && <Header />}
      <main>{children}</main>
      {!isComparePage && <Footer />}
    </>
  )
}
