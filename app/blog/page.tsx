import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "dandy-eco-friendly-weed-control",
      title: "How to Control Weeds in Richmond Lawns Without Harming the Environment",
      excerpt:
        "Discover eco-friendly weed control methods for Virginia lawns that protect local waterways while effectively eliminating weeds. Learn how Dandy's precision technology reduces herbicide use by 90%.",
      date: "April 15, 2025",
      image: "/james-river-eco-lawn.png",
      neighborhood: "All Richmond",
      slug: "dandy-eco-friendly-weed-control",
    },
    {
      id: "oto-lawn-watering-guide",
      title: "The Ultimate Guide to Watering Your Lawn During Virginia Summers",
      excerpt:
        "Learn the perfect lawn watering schedule for Richmond's hot, humid summers. Discover how OtO smart sprinkler technology can save water while keeping your lawn lush and green.",
      date: "April 10, 2025",
      image: "/summer-lawn-irrigation.png",
      neighborhood: "All Richmond",
      slug: "oto-lawn-watering-guide",
    },
    {
      id: "lawn-care-tips-bellevue",
      title: "Top Lawn Care Tips for Bellevue Richmond Homes",
      excerpt:
        "Discover the best practices for maintaining a lush, green lawn in Bellevue's unique soil conditions. From watering schedules to fertilization tips specific to Richmond's climate.",
      date: "March 25, 2025",
      image:
        "https://www.lovethegarden.com/sites/default/files/styles/header_image_fallback/public/content/articles/UK_advice-lawn-care-7-lawn-care-tips_header.jpg?itok=XCbvcdLr",
      neighborhood: "Bellevue",
      slug: "lawn-care-tips-bellevue-richmond",
    },
    {
      id: "flower-beds-ginter-park",
      title: "Best Ways to Maintain Flower Beds in Ginter Park",
      excerpt:
        "Learn how to keep your Ginter Park flower beds looking beautiful year-round with these neighborhood-specific maintenance tips and plant recommendations.",
      date: "March 20, 2025",
      image:
        "https://cdn.shopify.com/s/files/1/0593/3265/7306/files/02-low-maintenance-garden-bed-min.jpg?v=1727708814",
      neighborhood: "Ginter Park",
      slug: "flower-bed-maintenance-ginter-park",
    },
    {
      id: "pressure-washing-battery-park",
      title: "Why Pressure Washing Boosts Home Value in Battery Park",
      excerpt:
        "Battery Park homes can see significant value increases with regular pressure washing. Discover why this service is particularly important in this historic Richmond neighborhood.",
      date: "March 15, 2025",
      image: "https://www.jbpowerclean.com/wp-content/uploads/2023/05/washing-house-with-a-high-pressure.jpg",
      neighborhood: "Battery Park",
      slug: "pressure-washing-home-value-battery-park",
    },
    {
      id: "spring-cleaning-laburnum-park",
      title: "Spring Cleaning Checklist for Laburnum Park Homeowners",
      excerpt:
        "Get your Laburnum Park home ready for spring with this comprehensive cleaning checklist tailored to the specific needs of homes in this Richmond neighborhood.",
      date: "March 10, 2025",
      image:
        "https://presentablelandscape.com/wp-content/uploads/2021/01/Spring-Cleanup-Northern-Kentucky-Mulch-Tree-Care.jpg",
      neighborhood: "Laburnum Park",
      slug: "spring-cleaning-checklist-laburnum-park",
    },
    {
      id: "deck-maintenance-sherwood-park",
      title: "Deck Maintenance Guide for Sherwood Park Residents",
      excerpt:
        "Sherwood Park homes often feature beautiful decks that require special care. Learn how to protect and maintain your deck through Richmond's changing seasons.",
      date: "March 5, 2025",
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-maintain-your-deck-step-3.jpg",
      neighborhood: "Sherwood Park",
      slug: "deck-maintenance-guide-sherwood-park",
    },
    {
      id: "pet-friendly-yards-bryan-parkway",
      title: "Creating Pet-Friendly Yards in Bryan Parkway",
      excerpt:
        "Bryan Parkway residents love their pets! Discover how to create and maintain a yard that's both beautiful and safe for your furry friends in this Richmond neighborhood.",
      date: "March 1, 2025",
      image: "https://static.sniffspot.com/packs/img/dog-small-582.4bd26b3f45c27778.png",
      neighborhood: "Bryan Parkway",
      slug: "pet-friendly-yards-bryan-parkway",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Sweaty Job Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert tips, guides, and insights for Richmond homeowners. Discover neighborhood-specific advice to keep your
          home looking its best.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/robot-mower-in-action.png"
                alt="Robot mower vs traditional lawn mower repair"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">Why Robot Mowing Beats Lawn Mower Repair Every Time</h3>
            <p className="text-gray-600 mb-4">
              Tired of constant lawn mower repairs? Discover why our robot mowing service is the smarter alternative to
              traditional lawn mower repair and maintenance.
            </p>
            <Link href="/repair" className="text-green-600 font-medium hover:underline">
              Read the full article →
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-sm text-green-700 font-medium mb-2">
                {post.neighborhood} • {post.date}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-green-700 hover:text-green-800 font-medium inline-flex items-center"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
