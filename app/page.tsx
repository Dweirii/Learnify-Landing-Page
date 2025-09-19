import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import OverviewSection from "@/components/overview-section"
import VisionSection from "@/components/vision-section"
import KeyFeatures from "@/components/key-features"
import TargetAudience from "@/components/target-audience"
import HowItWorksDiagram from "@/components/how-it-works-diagram"
import AchievementsSection from "@/components/achievements-section"
import CtaJoin from "@/components/cta-join"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061A15] via-[#102D26] to-[#061A15]">
      <Navbar />
      <Hero />
      <OverviewSection />
      <VisionSection />
      <KeyFeatures />
      <TargetAudience />
      <HowItWorksDiagram />
      <AchievementsSection />
      <CtaJoin />
      <Footer />
    </div>
  )
}
