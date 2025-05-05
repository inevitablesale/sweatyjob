import { Card, CardContent } from "@/components/ui/card"

export function TechnologyExplanation() {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white">How Our Technology Works</h2>
          <p className="text-xl text-white max-w-2xl">
            Our technology uses advanced AI and sensor technology to handle complex mowing scenarios autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-night-900 border-white/10 hover:border-sweat-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Multi-Map Mowing</h3>
              <p className="text-white">
                Supports multiple mowing maps, allowing it to mow a single lawn or switch between several lawns in
                sequence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-night-900 border-white/10 hover:border-sweat-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Intelligent Mowing</h3>
              <p className="text-white">
                Leverages panoramic vision, RTK positioning, and visual perception for intelligent mapping, precision
                mowing, and autonomous charging.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-night-900 border-white/10 hover:border-sweat-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Autonomous Charging</h3>
              <p className="text-white">
                Automatically returns to the charging station when the battery is low and resumes mowing once fully
                charged.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-night-900 border-white/10 hover:border-sweat-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Obstacle Avoidance</h3>
              <p className="text-white">
                Uses AI-powered obstacle detection to avoid objects on the lawn and allows users to mark obstacle zones
                in the app.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-night-900 border-white/10 hover:border-sweat-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Smart Scheduling & Security</h3>
              <p className="text-white">
                Users can set mowing schedules and security routines via the App, including Watchdog Mode for enhanced
                monitoring.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-night-900 border-white/10 hover:border-sweat-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Grass Clipping Mulching</h3>
              <p className="text-white">
                Cuts grass into fine clippings that decompose and act as organic fertilizer, enriching the soil without
                cleanup.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
