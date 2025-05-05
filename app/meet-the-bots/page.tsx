import { Button } from "@/components/ui/button"
import { MessageSquare, Heart, Leaf, Zap, Shield } from "lucide-react"
import Image from "next/image"

export default function MeetTheBotsPage() {
  const bots = [
    {
      name: "Mowgli",
      neighborhood: "Bellevue",
      image: "/images/bot-mowgli.jpg",
      stats: "Mowed 52 lawns • Saved 104 hours • 0 emissions",
      personality:
        "Friendly and reliable, Mowgli loves perfectly straight lines and is known for being extra thorough around garden edges.",
      owner: "Johnson Family",
    },
    {
      name: "Buzz",
      neighborhood: "Ginter Park",
      image: "/images/bot-buzz.jpg",
      stats: "Mowed 48 lawns • Saved 96 hours • 0 emissions",
      personality:
        "Energetic and efficient, Buzz is an early riser who gets the job done quickly while being extra careful around flower beds.",
      owner: "Williams Household",
    },
    {
      name: "Clippity",
      neighborhood: "Battery Park",
      image: "/images/bot-clippity.jpg",
      stats: "Mowed 56 lawns • Saved 112 hours • 0 emissions",
      personality:
        "Methodical and precise, Clippity is a perfectionist who ensures not a single blade of grass is out of place.",
      owner: "Thompson Residence",
    },
    {
      name: "Mowzart",
      neighborhood: "Laburnum Park",
      image: "/images/bot-mowzart.jpg",
      stats: "Mowed 43 lawns • Saved 86 hours • 0 emissions",
      personality:
        'Creative and adaptable, Mowzart creates beautiful patterns while mowing and handles complex yard layouts with ease.",  Mowzart creates beautiful patterns while mowing and handles complex yard layouts with ease.',
      owner: "Garcia Family",
    },
    {
      name: "Sir Mows-A-Lot",
      neighborhood: "Sherwood Park",
      image: "/images/bot-sir-mows-a-lot.jpg",
      stats: "Mowed 61 lawns • Saved 122 hours • 0 emissions",
      personality:
        "Dignified and thorough, Sir Mows-A-Lot takes pride in maintaining the most prestigious lawns with exceptional attention to detail.",
      owner: "Wilson Estate",
    },
    {
      name: "Blade Runner",
      neighborhood: "Rosedale",
      image: "/images/bot-blade-runner.jpg",
      stats: "Mowed 47 lawns • Saved 94 hours • 0 emissions",
      personality:
        "Fast and efficient, Blade Runner covers ground quickly while still delivering a precise cut every time.",
      owner: "Martinez Family",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet The Bots</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our LawnBots are more than just machines - they're part of the family! Each bot has its own personality and is
          ready to be adopted into your home.
        </p>
      </div>

      <div className="bg-secondary p-8 rounded-lg mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Adopt a Bot!</h2>
            <p className="text-lg text-gray-600 mb-6">
              When you join LawnBot Richmond, you'll adopt your very own robot mower. You can name it, track its
              progress, and watch as it becomes part of your home. What will you name your bot?
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Leaf className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Eco-Friendly</h3>
                  <p className="text-gray-600">Zero emissions and 100% electric operation</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Smart Technology</h3>
                  <p className="text-gray-600">GPS navigation and obstacle detection</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Family Safe</h3>
                  <p className="text-gray-600">Multiple safety features for pets and children</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="sms:8045739825">
                  <MessageSquare className="mr-2 h-5 w-5" /> Text to Adopt Your Bot
                </a>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/images/bot-family.jpg"
              alt="LawnBot Family"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Bot Community</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {bots.map((bot, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden bot-card">
            <div className="h-56 relative">
              <Image
                src={bot.image || "/placeholder.svg"}
                alt={`${bot.name} the LawnBot`}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <Heart className="h-6 w-6 text-red-500" fill="currentColor" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{bot.name}</h3>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Active</span>
              </div>
              <p className="text-gray-500 mb-4">{bot.neighborhood}, Richmond</p>
              <p className="text-gray-600 mb-4">{bot.personality}</p>
              <div className="bg-gray-50 p-3 rounded-md mb-4">
                <p className="text-sm text-gray-600">{bot.stats}</p>
              </div>
              <p className="text-sm text-gray-500">Adopted by: {bot.owner}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bot Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-4">Technical Features</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Advanced GPS navigation system</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Obstacle detection and avoidance</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Rain sensors for weather adaptation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Automatic return to charging station</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Whisper-quiet operation (58dB)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-4">Safety Features</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Automatic blade stop when lifted</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">PIN-protected settings</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Anti-theft GPS tracking</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Enclosed blade design for safety</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-600">Emergency stop button</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to adopt your own LawnBot?</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Text us today to check availability in your neighborhood and start the adoption process. Your new bot is
          waiting to meet you!
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
          <a href="sms:8045739825">
            <MessageSquare className="mr-2 h-5 w-5" /> Text (804) 573-9825
          </a>
        </Button>
      </div>
    </div>
  )
}
