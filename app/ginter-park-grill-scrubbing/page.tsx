import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Redirecting to Ginter Park Grill Scrubbing",
  description: "Please wait while we redirect you to the Ginter Park grill scrubbing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/ginter-park/grill-scrubbing",
  },
}

export default function RedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/neighborhoods/ginter-park/grill-scrubbing" />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Redirecting...</h1>
          <p className="text-gray-600 mb-6">
            Please wait while we redirect you to the Ginter Park grill scrubbing service page.
          </p>
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
            <div className="absolute top-0 left-0 h-full bg-green-500 animate-[progress_2s_ease-in-out_infinite]"></div>
          </div>
          <p className="text-gray-600">
            If you are not redirected automatically, please{" "}
            <a
              href="/neighborhoods/ginter-park/grill-scrubbing"
              className="text-green-600 hover:text-green-800 font-medium"
            >
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}
