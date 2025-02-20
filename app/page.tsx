import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import ProjectStructure from "@/components/ProjectStructure"
import CTA from "@/components/CTA"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <ProjectStructure />
      {/* <Testimonials /> */}
      <CTA />
    </main>
  )
}

