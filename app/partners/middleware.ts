import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // This middleware only runs for /partners/* paths
  return NextResponse.next()
}

export const config = {
  matcher: ["/partners/:path*"],
}
