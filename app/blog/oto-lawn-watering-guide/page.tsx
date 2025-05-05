import OtoLawnWateringGuide from "@/articles/oto-lawn-watering-guide"

export const metadata = {
  title: "The Ultimate Guide to Watering Your Lawn During Virginia Summers | SweatyJob",
  description:
    "Learn the perfect lawn watering schedule for Richmond's hot, humid summers. Discover how OtO smart sprinkler technology can save water while keeping your lawn lush and green.",
  openGraph: {
    title: "The Ultimate Guide to Watering Your Lawn During Virginia Summers",
    description:
      "Expert advice on watering schedules, signs of water stress, and smart technology solutions for Richmond lawns.",
    images: ["/images/oto-sprinkler.jpg"],
  },
}

export default function OtoArticlePage() {
  return <OtoLawnWateringGuide />
}
