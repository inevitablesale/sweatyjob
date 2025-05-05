/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/the-club',
        destination: '/member-benefits',
        permanent: true,
      },
      {
        source: '/repair-alternative',
        destination: '/repair',
        permanent: true,
      },
      {
        source: '/:neighborhood-:service',
        destination: '/neighborhoods/:neighborhood/:service',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/saturday-club',
        destination: '/member-benefits',
        permanent: true,
      },
      // Redirect from /for-pros to /partners
      {
        source: '/for-pros',
        destination: '/partners',
        permanent: true,
      },
      // Redirect from /for-pros/* to /partners/*
      {
        source: '/for-pros/:path*',
        destination: '/partners/:path*',
        permanent: true,
      },
      // Focus specifically on the main /for-pros route
      {
        source: '/neighborhoods/for/pros',
        destination: '/partners',
        permanent: false,
      }
    ]
  },
  
  // Add image domains for external images
  images: {
    domains: [
      'i0.wp.com',
      'www.bellevueweb.org',
      'upload.wikimedia.org',
      'imagescdn.homes.com',
      'www.bestmow.com',
      'lh3.googleusercontent.com',
      'rerva.com',
      'images.squarespace-cdn.com',
      'sjc.microlink.io',
      'superiorsprinklerinc.com',
      'bunburypoolcleaning.com',
      'v0.blob.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  // Add build error handling configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
