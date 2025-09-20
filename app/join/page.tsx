import Navbar from "@/components/navbar"
import WhyJoin from "@/components/join/why-join"
import LifeAtLearnify from "@/components/join/life-at-learnify"
import OpenRoles from "@/components/join/open-roles"
import TeamMoments from "@/components/join/team-moments"
import Footer from "@/components/footer"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#061A15] to-[#102D26]">
      <Navbar />
      <main className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Join the <span className="text-[#0BA94C]">Learnify</span> Team
          </h1>
          <p className="text-lg md:text-xl text-[#ABAEB6] leading-relaxed mb-8 max-w-2xl mx-auto">
            Help us redefine learning in MENA and beyond. Be part of a movement that empowers students to learn by
            doing.
          </p>
          <a
            href="#roles"
            className="inline-block w-full sm:w-auto bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15]"
          >
            See Open Roles
          </a>
        </div>
      </main>
      <WhyJoin />
      <LifeAtLearnify />
      <TeamMoments />
      <OpenRoles />
      <Footer />
    </div>
  )
}
