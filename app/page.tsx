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
import UniversitySupport from "@/components/university-support"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061A15] via-[#102D26] to-[#061A15]">
      <Navbar />
      <Hero />
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
          <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>
      <OverviewSection />
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
          <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>
      <VisionSection />
        <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
            <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>
      <KeyFeatures />
        <div className="flex items-center justify-center mt-14">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
            <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>
      <TargetAudience />
        <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
            <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>
      <HowItWorksDiagram />
        <div className="flex items-center justify-center my-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
            <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>
      <AchievementsSection />
        <div className="flex items-center justify-center my-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
            <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>
      <CtaJoin />
        <div className="flex items-center justify-center mt-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
            <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>
      <UniversitySupport />
      <Footer />
    </div>
  )
}
