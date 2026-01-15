import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import Script from "next/script"
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://learnify-live.vercel.app'),
  title: {
    default: 'Learnify | Live Learning & Project-Based Tracks',
    template: '%s | Learnify'
  },
  description:
    'Learnify is a LiveStream platform for live learning, project-based tracks, gamification, and community. Bridging the skill gap in the Arab world.',
  keywords: ['Learnify', 'Live Learning', 'MENA EdTech', 'Project-Based Learning', 'Skill Gap', 'Arab Learners'],
  authors: [{ name: 'Learnify Technologies, Inc. Team' }],
  creator: 'Zaid Dweiri',
  publisher: 'Learnify Technologies, Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://learnify-live.vercel.app',
    siteName: 'Learnify',
    title: 'Learnify | The Future of Skills in the Arab World',
    description: 'Join the movement. Learn live, build projects, and grow together through community and AI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learnify | Built by Learners, for the Future',
    description: 'Bridging the skill gap through live-streaming, project-based tracks, and gamification.',
    creator: '@learnify',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
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
