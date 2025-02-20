import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ProjectStructure from "@/components/ProjectStructure";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="relative overflow-hidden bg-gray-900 antialiased bg-grid-white/[0.02]">
        <Spotlight
          translateY={-100}
          width={400}
          height={800}
          smallWidth={200}
          xOffset={100}
        />
        <Header />
        <Hero />
      </div>
      <Features />
      <HowItWorks />
      <ProjectStructure />
      {/* <Testimonials /> */}
      <CTA />
    </main>
  );
}
