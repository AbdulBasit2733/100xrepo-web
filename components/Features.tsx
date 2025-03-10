import { Layers, Palette, Cog, Plug, Database, Package, Smartphone, Code, MonitorDot } from "lucide-react"

const features = [
  { icon: Layers, title: "Turbo Repo Monorepo", description: "Efficient monorepo structure" },
  { icon: Palette, title: "Frontend: Next.js", description: "Modern frontend setup" },
  { icon: Cog, title: "Backend: Express", description: "Powerful HTTP server" },
  { icon: Plug, title: "WebSocket Server", description: "Real-time communication" },
  { icon: Database, title: "Database: PostgreSQL & MongoDB", description: "Flexible database options" },
  { icon: Package, title: "Uses pnpm", description: "Fast package management" },
  { icon: Smartphone, title: "React Native + Expo", description: "Cross-platform mobile development" },
]

const upcomingFeatures = [
  { icon: Code, title: "React 19 Support", description: "Latest React features and improvements" },
  { icon: Database, title: "ORM: Prisma & mongoose", description: "Flexible ORM options" },
  { icon: Cog, title: "Backend: Hono", description: "Web application framework" },
  { icon: MonitorDot, title: "Runtime: Bun / Node", description: "Powerfull Runtime Environment" },
  { icon: Package, title: "Packages: Bun / Yarn", description: "Fast package management" },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center">
            <feature.icon className="h-12 w-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold my-12 text-center">Coming Soon</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingFeatures.map((feature, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6 flex flex-col items-center text-center border border-purple-400/20">
            <feature.icon className="h-12 w-12 mb-4 text-purple-400/60" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
