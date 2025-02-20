import { Terminal, List, Rocket } from "lucide-react"

const steps = [
  { icon: Terminal, title: "Run the CLI Command", description: "npx create-100xrepo my-project" },
  { icon: List, title: "Select Your Stack", description: "Choose Frontend, Backend, and DB" },
  { icon: Rocket, title: "Get a Fully Configured Monorepo!", description: "Start coding right away" },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-purple-600 rounded-full p-4 mb-4">
              <step.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Step {index + 1}: {step.title}
            </h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

