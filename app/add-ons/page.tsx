import { Button } from "@/components/ui/button"
import { PhoneCall, CheckCircle2, Star } from "lucide-react"

export default function AddOnsPage() {
  const addOnServices = [
    {
      id: "windows",
      title: "Window Cleaning",
      description:
        "Crystal clear windows inside and out. Improve your home's appearance and let in more natural light.",
      features: [
        "Interior and exterior glass cleaning",
        "Screen cleaning and inspection",
        "Sill, track, and frame cleaning",
        "Streak-free finish using professional techniques",
      ],
      image: "https://www.high-classcleaning.co.uk/wp-content/uploads/2023/12/hig-class-window-cleaning.jpg",
      regularPrice: "$150–$250",
      subscriberPrice: "$120–$200",
      discount: "20% off",
    },
    {
      id: "pressure",
      title: "Pressure Washing",
      description: "Revitalize your home's exterior surfaces with professional pressure washing.",
      features: ["Driveway and walkway cleaning", "Deck and patio washing", "Siding cleaning", "Fence washing"],
      image: "https://washh.com/wp-content/uploads/2019/08/driveway-cleaning.jpg",
      regularPrice: "$200–$350",
      subscriberPrice: "$150–$280",
      discount: "25% off",
    },
    {
      id: "flower",
      title: "Flower Bed Maintenance",
      description: "Keep your garden beds looking beautiful with professional maintenance and care.",
      features: [
        "Thorough weeding including root extraction",
        "Fresh mulch application at proper depth",
        "Plant health assessment",
        "Pruning, trimming, and deadheading",
      ],
      image: "https://greenacreslandscapeinc.com/wp-content/uploads/2017/05/low-maintenance-flower-beds.jpg",
      regularPrice: "$150–$250",
      subscriberPrice: "$100–$175",
      discount: "30% off",
    },
    {
      id: "grill",
      title: "Grill Cleaning",
      description: "Restore your grill to like-new condition with our professional cleaning service.",
      features: [
        "Deep cleaning of grates, burners, and heat shields",
        "Grease trap emptying and sanitizing",
        "Exterior cleaning and polishing",
        "Operational check and safety inspection",
      ],
      image:
        "https://images.thdstatic.com/productImages/6de216f6-8347-403c-abc7-fb32ec27428f/svn/scrub-daddy-grill-brushes-810044131147-1d_600.jpg",
      regularPrice: "$100–$150",
      subscriberPrice: "$75–$110",
      discount: "25% off",
    },
    {
      id: "deck-staining",
      title: "Deck Staining",
      description: "Protect and beautify your deck with our professional staining service.",
      features: [
        "Premium stain products",
        "Even application techniques",
        "Weather-resistant finishes",
        "Color matching available",
      ],
      image: "https://www.perimtec.com/wp-content/uploads/2021/01/deck-stain-featured.jpg",
      regularPrice: "$400–$700",
      subscriberPrice: "$300–$525",
      discount: "25% off",
    },
    {
      id: "car-detailing",
      title: "Mobile Car Detailing",
      description: "Professional car detailing service that comes to your home.",
      features: [
        "Exterior wash and wax",
        "Interior vacuuming and cleaning",
        "Dashboard and trim conditioning",
        "Tire and wheel cleaning",
      ],
      image:
        "https://mobilecardetail.net/wp-content/uploads/2019/02/car-detailing-service-in-framingham-massachusetts-1170x710.jpg",
      regularPrice: "$150–$250",
      subscriberPrice: "$120–$200",
      discount: "20% off",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Exclusive Add-on Services for Subscribers</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          As a lawn subscription member, you get access to these premium services at special subscriber-only rates.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/3">
            <img
              src="https://sjc.microlink.io/Y4M8K3401Ib1QFi4t-fOphTxek0N7AQ9rSFzy2ZyGFfCUXdfATQGrGy861P1n953FYliiKDMuqqBRFCtp1CkXA.jpeg"
              alt="BESTMOW Titan-100 robotic lawn mower"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-green-800 mb-3">Not a Subscriber Yet?</h2>
            <p className="text-gray-700 mb-4">
              Our lawn subscription members enjoy exclusive discounts on all add-on services. For just $30/week, you get
              a perfectly maintained lawn with our BESTMOW Titan-100 robotic mower subscription, plus access to these
              exclusive discounted services. Cancel anytime with no commitment.
            </p>
            <div className="mt-4">
              <Button className="bg-green-700 hover:bg-green-800" asChild>
                <a href="tel:8045739825">
                  <PhoneCall className="mr-2 h-5 w-5" /> Subscribe Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {addOnServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="rounded-lg shadow-md w-full h-[300px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-1" /> Subscriber Exclusive
              </div>
              <h2 className="text-3xl font-bold text-green-800">{service.title}</h2>
              <p className="text-lg text-gray-600">{service.description}</p>

              {/* Pricing Section */}
              <div className="mt-4 bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Exclusive Subscriber Pricing</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Regular Price</p>
                    <p className="text-lg line-through">{service.regularPrice}</p>
                  </div>
                  <div className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.discount}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Subscriber Price</p>
                    <p className="text-xl font-bold text-green-800">{service.subscriberPrice}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <h3 className="font-semibold text-green-800">What's Included</h3>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button className="bg-green-700 hover:bg-green-800 w-full sm:w-auto" asChild>
                  <a href={`tel:8045739825`}>
                    <PhoneCall className="mr-2 h-5 w-5" /> Schedule This Service
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Need a custom service?</h2>
        <p className="text-lg text-gray-600 mb-6">
          If you're looking for a service not listed here, contact us to discuss your specific needs. Subscribers
          receive priority scheduling and discounted rates on all services.
        </p>
        <Button size="lg" className="bg-green-700 hover:bg-green-800" asChild>
          <a href="tel:8045739825">
            <PhoneCall className="mr-2 h-5 w-5" /> Call (804) 573-9825
          </a>
        </Button>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-700 mb-2">How do I schedule an add-on service?</h3>
            <p className="text-gray-600">
              Simply call or text us at (804) 573-9825 to schedule any add-on service. As a subscriber, you'll receive
              priority scheduling and your exclusive discounted rate.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-700 mb-2">Can I get add-on services if I'm not a subscriber?</h3>
            <p className="text-gray-600">
              These services are exclusively available to our lawn subscription members at the discounted rates shown.
              The regular pricing is provided for comparison only.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-700 mb-2">How often should I schedule these services?</h3>
            <p className="text-gray-600">
              The frequency depends on the service and your specific needs. Window cleaning is typically done 2-3 times
              per year, pressure washing annually, and flower bed maintenance monthly during growing season.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-700 mb-2">Are there any bundle discounts available?</h3>
            <p className="text-gray-600">
              Yes! Subscribers who book multiple add-on services together can receive additional discounts. Contact us
              for custom bundle pricing based on your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
