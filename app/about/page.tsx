"use client"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { useEffect, useState } from "react"
import Traction from "@/components/about/traction"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#061A15] to-[#102D26] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0BA94C]/5 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-[#0BA94C]/10 rounded-full blur-xl animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-[#0BA94C]/8 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#0BA94C]/6 rounded-full blur-md animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "4s" }}
        ></div>
      </div>

      <Navbar />

      <main className="container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-8 md:mb-12 relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance relative z-10">
              <span className="text-white bg-clip-text  drop-shadow-lg">
                Our Story,
              </span>
              <br />
              <span className="text-[#0BA94C] drop-shadow-lg animate-pulse" style={{ animationDuration: "3s" }}>
                Your Future.
              </span>
            </h1>
          </div>

          <div
            className={`max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xl md:text-2xl text-[#ABAEB6] leading-relaxed text-pretty">
              What started with{" "}
              <span className="font-semibold text-white bg-gradient-to-r from-[#0BA94C]/20 to-[#0BA94C]/10 px-3 py-1 rounded-lg border border-[#0BA94C]/20">
                three students in 2024
              </span>{" "}
              has grown into a vision to empower learners to{" "}
              <span className="font-bold text-[#0BA94C] relative">
                learn by doing
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0BA94C]/50 rounded"></span>
              </span>{" "}
              and{" "}
              <span className="font-bold text-[#0BA94C] relative">
                lead by knowing
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0BA94C]/50 rounded"></span>
              </span>
              .
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Link
              href="#team"
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0BA94C] to-[#0BA94C]/90 text-white font-semibold rounded-xl hover:from-[#0BA94C]/90 hover:to-[#0BA94C] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/30 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative">Meet the Team</span>
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/features"
              className="group inline-flex items-center px-6 py-3 text-[#0BA94C] font-medium hover:text-white transition-all duration-300 border border-[#0BA94C]/30 rounded-xl hover:bg-[#0BA94C]/10 hover:border-[#0BA94C]/60 hover:shadow-lg hover:shadow-[#0BA94C]/20"
            >
              <span>Explore Features</span>
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <section
          className={`max-w-3xl mx-auto mt-10 md:mt-22 text-center relative transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
              <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative">
              <span className="text-white">
                Our Story
              </span>
            </h2>

            <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 mb-6 border border-white/10">
              <p className="text-lg md:text-xl text-[#ABAEB6] leading-relaxed text-pretty">
                Learnify began in 2024 when three students—
                <span className="font-semibold text-white bg-[#0BA94C]/20 px-2 py-1 rounded mx-1">Zaid Dweiri</span>,
                <span className="font-semibold text-white bg-[#0BA94C]/20 px-2 py-1 rounded mx-1">Hazem Alazab</span>,
                and
                <span className="font-semibold text-white bg-[#0BA94C]/20 px-2 py-1 rounded mx-1">Lara Najem</span>
                —saw too many graduates across the MENA region entering the job market unprepared. Determined to close
                the gap between education and real-world skills, they launched Learnify not as a website, but as a{" "}
                <span className="font-bold text-[#0BA94C]">movement</span>: learn live, build projects, and grow
                together through community, gamification, and AI.
              </p>
            </div>

            <p className="text-sm md:text-base text-white/80 mb-8 italic font-medium">
              Built by learners. Powered by community.
            </p>
          </div>
        </section>

        <section
          className={`max-w-6xl mx-auto mt-10 md:mt-22 relative transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
            <div className="flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
              <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
            </div>

          {/* Section Hero */}
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative z-10">
              <span className="text-white">
                Learn by doing,
              </span>
              <br />
              <span className="text-[#0BA94C] drop-shadow-lg">lead by knowing</span>
            </h2>

            <p className="text-xl md:text-2xl text-[#ABAEB6] leading-relaxed text-pretty relative z-10">
              At Learnify, we believe education is action. Our vision is to empower learners to gain real-world skills
              and become the leaders of tomorrow.
            </p>
          </div>

          {/* Vision Points as Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="w-12 h-12 bg-[#0BA94C]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0BA94C]/30 transition-colors">
                <svg className="w-6 h-6 text-[#0BA94C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">We believe in learning by doing.</h3>
              <p className="text-[#ABAEB6] leading-relaxed">
                Hands-on, project-based learning builds the skills and confidence needed for real jobs and real impact.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="w-12 h-12 bg-[#0BA94C]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0BA94C]/30 transition-colors">
                <svg className="w-6 h-6 text-[#0BA94C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">We believe education is a movement.</h3>
              <p className="text-[#ABAEB6] leading-relaxed">
                It's about communities that inspire, mentor, and support each other across borders and generations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="w-12 h-12 bg-[#0BA94C]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0BA94C]/30 transition-colors">
                <svg className="w-6 h-6 text-[#0BA94C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">We believe every learner can be a leader.</h3>
              <p className="text-[#ABAEB6] leading-relaxed">
                Students, mentors, and creators deserve the tools to teach, inspire, and make a difference.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="w-12 h-12 bg-[#0BA94C]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0BA94C]/30 transition-colors">
                <svg className="w-6 h-6 text-[#0BA94C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">We believe in bridging the gap.</h3>
              <p className="text-[#ABAEB6] leading-relaxed">
                Between education and employment, knowledge and practice, isolation and community.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="w-12 h-12 bg-[#0BA94C]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0BA94C]/30 transition-colors">
                <svg className="w-6 h-6 text-[#0BA94C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 114 0 2 2 0 012-2h7v-9a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                We believe the future of MENA lies in its youth.
              </h3>
              <p className="text-[#ABAEB6] leading-relaxed">
                By empowering Arab learners with real-world skills, we are building a stronger, more connected
                generation.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="w-12 h-12 bg-[#0BA94C]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0BA94C]/30 transition-colors">
                <svg className="w-6 h-6 text-[#0BA94C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">We believe everyone has something to teach.</h3>
              <p className="text-[#ABAEB6] leading-relaxed">
                Every learner carries knowledge and experiences worth sharing — and someone out there who needs them.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team section */}
        <section
          id="team"
          className={`max-w-6xl mx-auto mt-10 md:mt-22 relative transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
              <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
       
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              <span className="text-white">
                Meet the <span className="text-[#0BA94C]">Learnify</span> Team!
              </span>
            </h2>

            <p className="text-lg md:text-xl text-[#ABAEB6] leading-relaxed text-pretty relative z-10">
              A team of learners, builders, and visionaries behind Learnify's mission.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Dr. Reem AlFayez */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="h-20 w-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:ring-2 group-hover:ring-[#0BA94C]/50 transition-all duration-300">
                <img
                  src="/Reem-AlFayez.jpg"
                  alt="Dr. Reem AlFayez - Mentor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Dr. Reem AlFayez</h3>
              <p className="text-[#0BA94C] text-sm text-center mb-4 font-medium">Mentor</p>
              <p className="text-[#ABAEB6] leading-relaxed text-center">
                Leads Learnify's mentorship program, provides guidance to Learnify members, and helps them grow.
              </p>
            </div>

            {/* Zaid Dweiri */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="h-20 w-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:ring-2 group-hover:ring-[#0BA94C]/50 transition-all duration-300">
                <img
                  src="/dweiri.jpg"
                  alt="ZId Dweiri - Founder & CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Zaid Dweiri</h3>
              <p className="text-[#0BA94C] text-sm text-center mb-4 font-medium">Founder & CTO</p>
              <p className="text-[#ABAEB6] leading-relaxed text-center">
                Leads Learnify's technical vision, product roadmap, and platform development.
              </p>
            </div>

            {/* Hazem Alazab */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="h-20 w-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:ring-2 group-hover:ring-[#0BA94C]/50 transition-all duration-300">
                <img
                  src="/hazem.jpg"
                  alt="Hazem Alazab - Administrative Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Hazem Alazab</h3>
              <p className="text-[#0BA94C] text-sm text-center mb-4 font-medium">Administrative Manager</p>
              <p className="text-[#ABAEB6] leading-relaxed text-center">
                Oversees operations, manages resources, and ensures efficient, compliant workflows across the team.
              </p>
            </div>

            {/* Farah Hawamdeh */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="h-20 w-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:ring-2 group-hover:ring-[#0BA94C]/50 transition-all duration-300">
                <img
                  src="/farah.png"
                  alt="Farah Hawamdeh - Head of Marketing & Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Farah Hawamdeh</h3>
              <p className="text-[#0BA94C] text-sm text-center mb-4 font-medium">Head of Marketing & Designer</p>
              <p className="text-[#ABAEB6] leading-relaxed text-center">
                Drives Learnify's marketing strategy and designs user-friendly interfaces, focusing on clarity,
                simplicity, and great user experience.
              </p>
            </div>

            {/* Lara Najem */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="h-20 w-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:ring-2 group-hover:ring-[#0BA94C]/50 transition-all duration-300">
                <img
                  src="/lara.jpg"
                  alt="Lara Najem - Business Development Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Lara Najem</h3>
              <p className="text-[#0BA94C] text-sm text-center mb-4 font-medium">Business Development Manager</p>
              <p className="text-[#ABAEB6] leading-relaxed text-center">
                Builds partnerships with universities and trainers, shapes the business model, and prepares proposals
                for investors.
              </p>
            </div>

            {/* Firas Ballol */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/10 group">
              <div className="h-20 w-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:ring-2 group-hover:ring-[#0BA94C]/50 transition-all duration-300">
                <img
                  src="/firas.png"
                  alt="Firas Ballol - Junior Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Firas Ballol</h3>
              <p className="text-[#0BA94C] text-sm text-center mb-4 font-medium">Junior Developer</p>
              <p className="text-[#ABAEB6] leading-relaxed text-center">
                Supports technical tasks, assists with testing and
                performance improvements.
              </p>
            </div>
          </div>
        </section>

        {/* Traction section */}
        <Traction />
      </main>
      <Footer />
    </div>
  )
}
