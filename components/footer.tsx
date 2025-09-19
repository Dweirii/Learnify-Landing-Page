import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#061A15] border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        {/* Main content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[#0BA94C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-white font-semibold">Learnify</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            <a
              href="/"
              className="text-white/80 hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
            >
              Home
            </a>
            <a
              href="/features"
              className="text-white/80 hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-white/80 hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
            >
              Pricing
            </a>
            <a
              href="/faq"
              className="text-white/80 hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
            >
              FAQ
            </a>
            <a
              href="/about"
              className="text-white/80 hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
            >
              About us
            </a>
          </nav>

          {/* Social & Contact */}
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow us on Twitter"
                className="text-white/60 hover:text-[#0BA94C] transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow us on LinkedIn"
                className="text-white/60 hover:text-[#0BA94C] transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Subscribe to our YouTube channel"
                className="text-white/60 hover:text-[#0BA94C] transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow us on Instagram"
                className="text-white/60 hover:text-[#0BA94C] transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <a
              href="mailto:hello@learnify.app"
              className="text-white/80 hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
            >
              hello@learnify.app
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/60">
            <span>© {currentYear} Learnify</span>
            <div className="flex gap-6">
              <a
                href="/terms"
                className="hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
              >
                Terms
              </a>
              <a
                href="/privacy"
                className="hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
              >
                Privacy
              </a>
              <a
                href="/cookies"
                className="hover:text-[#0BA94C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] rounded"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
