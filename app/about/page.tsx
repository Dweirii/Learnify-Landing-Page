import type { Metadata } from "next"
import AboutContent from "./about-content"

export const metadata: Metadata = {
  title: "About Our Story",
  description: "What started with three students in 2024 has grown into a vision to empower learners. Read the story of Zaid, Hazem, and Lara building Learnify.",
  openGraph: {
    title: "About Learnify | Our Story & Vision",
    description: "Learn how we are bridging the skill gap in the MENA region through live-streaming and project-based learning.",
    url: "https://learnify-live.vercel.app/about",
  }
}

export default function AboutPage() {
  return <AboutContent />
}
