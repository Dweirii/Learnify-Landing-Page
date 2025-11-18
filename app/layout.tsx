import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import Script from "next/script"
import './globals.css'

export const metadata: Metadata = {
  title: 'Learnify',
  description:
    'Learnify LiveStream Platform for Live Learning, Project-Based Tracks, Gamification, and Community in one place to bridge the skill gap.',
  generator: 'Learnify',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://genie-ai-genesis-hackthon-widget.vercel.app/widget.js"
          data-organization-id="org_35UIvA8d8LGBnfSLUvOazVwTDnG"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
