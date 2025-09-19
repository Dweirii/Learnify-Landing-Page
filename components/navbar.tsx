"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Image from "next/image"

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <Image
      src="/logo.png"
      alt="Learnify"
      width={150}   // directly control logo size
      height={150}
      className="object-contain pt-2"
    />
  </div>
)
export type NavItem = {
  label: string
  href: string
}

interface NavbarProps {
  items?: NavItem[]
  ctaHref?: string
  className?: string
}

const defaultItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About us", href: "/about" },
]

export default function Navbar({ items = defaultItems, ctaHref = "/join", className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll behavior for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 12
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const navLinkClass = (href: string) =>
    cn(
      "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md",
      "hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-transparent",
      "motion-reduce:transition-none",
      isActiveLink(href)
        ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-[#0BA94C] after:rounded-full"
        : "text-[#B3B3B3] hover:text-white",
    )

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 motion-reduce:transition-none",
        isScrolled ? "bg-[#061A15] shadow-lg border-t border-[#102D26]/12" : "bg-transparent",
        className,
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-transparent rounded-md"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <div className="flex items-center gap-1">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-medium px-6 py-2 transition-colors duration-200 focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-transparent motion-reduce:transition-none"
          >
            <Link href={ctaHref}>Join Learnify</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-[#102D26] focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-transparent"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#061A15] border-l border-[#102D26] p-0" id="mobile-menu">
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#102D26]">
                  <Logo />
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-[#102D26] focus:ring-2 focus:ring-[#0BA94C]"
                      aria-label="Close navigation menu"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-4">
                    {items.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 motion-reduce:transition-none",
                            "focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15]",
                            isActiveLink(item.href)
                              ? "bg-[#0BA94C]/10 text-white border-l-4 border-[#0BA94C]"
                              : "text-[#B3B3B3] hover:text-white hover:bg-[#102D26]",
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                {/* CTA Button */}
                <div className="p-6 border-t border-[#102D26]">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-medium py-3 transition-colors duration-200 focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] motion-reduce:transition-none"
                    >
                      <Link href={ctaHref}>Join Learnify</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
