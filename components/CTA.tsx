import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Monorepo in Seconds!</h2>
      <p className="text-xl mb-8 text-gray-300">Experience the power of create-100xrepo today.</p>
      <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
        Run npx create-100xrepo now
        <Terminal className="ml-2 h-5 w-5" />
      </Button>
    </section>
  )
}

