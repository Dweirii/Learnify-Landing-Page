import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061A15] via-[#102D26] to-[#061A15]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="pt-12 pb-12 md:pt-24 md:pb-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-white">Powerful </span>
            <span className="text-[#0BA94C]">Features</span>
          </h1>
          <p className="max-w-3xl mx-auto text-[#ABAEB6] text-base sm:text-lg md:text-xl leading-relaxed px-2">
            Everything you need to learn, grow, and connect with others in one comprehensive platform.
          </p>
        </section>

        {/* Core Learning Features */}
        <section className="pb-16 md:pb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 md:mb-4">Core Learning Experience</h2>
            <div className="w-16 md:w-20 h-1 bg-[#0BA94C] mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0BA94C]/20 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0BA94C] rounded"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Live Learning Sessions</h3>
              <p className="text-[#ABAEB6] text-sm md:text-base leading-relaxed">
                Join interactive livestreams where students, experts, and mentors share knowledge in real time.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0BA94C]/20 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0BA94C] rounded"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">AI-Powered Learning Agent</h3>
              <p className="text-[#ABAEB6] text-sm md:text-base leading-relaxed">
                Get personalized guidance and mentoring from an AI study companion that answers questions, explains
                concepts, and supports you throughout your learning journey.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0BA94C]/20 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0BA94C] rounded"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Skill Building Tracks</h3>
              <p className="text-[#ABAEB6] text-sm md:text-base leading-relaxed">
                Follow structured learning paths designed to build real-world, job-ready skills based on your interest.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0BA94C]/20 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0BA94C] rounded"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Project-Based Learning</h3>
              <p className="text-[#ABAEB6] text-sm md:text-base leading-relaxed">
                Learn by doing; follow guided tracks with hands-on projects to master real-world skills.
              </p>
            </div>
          </div>
        </section>

        {/* Engagement Features */}
        <section className="pb-16 md:pb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 md:mb-4">Stay Engaged & Motivated</h2>
            <div className="w-16 md:w-20 h-1 bg-[#0BA94C] mx-auto"></div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            <div className="text-center p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#0BA94C]/50 transition-all duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0BA94C]/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#0BA94C] rounded-full"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Gamified Learning System</h3>
              <p className="text-[#ABAEB6] text-xs md:text-sm leading-relaxed">
                Stay motivated with points, badges, and challenges that make learning fun and rewarding.
              </p>
            </div>

            <div className="text-center p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#0BA94C]/50 transition-all duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0BA94C]/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#0BA94C] rounded-full"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Community Learning</h3>
              <p className="text-[#ABAEB6] text-xs md:text-sm leading-relaxed">
                Connect with like-minded learners, exchange ideas, and grow together in supportive learning circles.
              </p>
            </div>

            <div className="text-center p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#0BA94C]/50 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0BA94C]/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#0BA94C] rounded-full"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Community Management</h3>
              <p className="text-[#ABAEB6] text-xs md:text-sm leading-relaxed">
                Organize, collaborate, and lead your own learning communities with built-in management features.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="pb-16 md:pb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 md:mb-4">Platform Capabilities</h2>
            <div className="w-16 md:w-20 h-1 bg-[#0BA94C] mx-auto"></div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0BA94C]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#0BA94C] rounded"></div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Free & Premium Access</h3>
                <p className="text-[#ABAEB6] text-sm md:text-base leading-relaxed">
                  Access free learning content anytime, with premium features available for deeper engagement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0BA94C]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#0BA94C] rounded"></div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Scheduled Content</h3>
                <p className="text-[#ABAEB6] text-sm md:text-base leading-relaxed">
                  Plan ahead by scheduling your live sessions and content, so your audience never misses what's next.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0BA94C]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#0BA94C] rounded"></div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Private Sessions</h3>
                <p className="text-[#ABAEB6] text-sm md:text-base leading-relaxed">
                  Host exclusive, invite-only live sessions for different educational purposes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-white/10 py-16 md:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 px-2">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-[#ABAEB6] text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of learners already growing their skills and building their future on Learnify.
          </p>
          <a
            href="/join"
            className="inline-block bg-[#0BA94C] text-black font-semibold rounded-xl px-6 py-3 md:px-8 md:py-4 text-base md:text-lg hover:brightness-110 hover:scale-105 transition-all duration-200"
          >
            Start Learning Today
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}
