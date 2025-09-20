import Navbar from "@/components/navbar"
import Link from "next/link"
import { Lock, Clock, Bell } from "lucide-react"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#061A15] to-[#102D26] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0BA94C]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#0BA94C]/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#0BA94C]/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <Navbar />
      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0BA94C]/20 to-[#0BA94C]/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#0BA94C]/20">
                <Lock className="w-10 h-10 text-[#0BA94C]" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0BA94C] rounded-full flex items-center justify-center animate-bounce">
                <Bell className="w-3 h-3 text-black" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#0BA94C]/80 rounded-full flex items-center justify-center animate-pulse">
                <Clock className="w-3 h-3 text-black" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-[#0BA94C] bg-clip-text text-transparent">
              Invest in your future,
            </span>
            <br />
            <span className="text-white">not just a subscription</span>
          </h1>

          <p className="text-lg md:text-xl text-[#ABAEB6] leading-relaxed mb-8 max-w-3xl mx-auto">
            Learnify is designed to make quality education affordable and accessible. Our upcoming pricing will be
            tailored for students, learners, and communities — because learning should never be out of reach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-[#ABAEB6] text-sm">
              <Lock className="w-4 h-4 text-[#0BA94C]" />
              <span>Pricing unlocks soon</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
