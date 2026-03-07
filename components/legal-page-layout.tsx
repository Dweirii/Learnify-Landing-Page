import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ChevronLeft } from "lucide-react"

interface LegalPageLayoutProps {
  title: React.ReactNode
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061A15] via-[#102D26] to-[#061A15] overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#ABAEB6] hover:text-[#0BA94C] transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded text-sm md:text-base"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-2 text-balance tracking-tight">
              {title}
            </h1>
            <p className="text-lg font-semibold text-[#0BA94C]">
              Last Updated: {lastUpdated}
            </p>
          </header>

          {/* Same decorative divider as home page */}
          <div className="w-full mb-10">
            <div className="flex items-center justify-center max-w-3xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10" />
              <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10" />
            </div>
          </div>

          <div className="legal-content space-y-8 text-[#ABAEB6] text-base lg:text-lg leading-relaxed [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white/95 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:text-pretty [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1 [&_li]:mb-1 [&_a]:text-[#0BA94C] [&_a]:hover:underline [&_strong]:text-white/90">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
