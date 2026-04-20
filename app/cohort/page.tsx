import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CohortJoinHero from "@/components/cohort/cohort-join-hero"
import CohortJoinForm from "@/components/cohort/cohort-join-form"
import CohortJoinNext from "@/components/cohort/cohort-join-next"

export const metadata: Metadata = {
  title: "Join a Cohort · Learnify",
  description:
    "Register for the first wave of Learnify cohorts — free to join as a learner, or apply to become a Founding Creator. Starts May 8 at UoJ.",
}

export default function CohortPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061A15] via-[#102D26] to-[#061A15] overflow-x-hidden">
      <Navbar />
      <CohortJoinHero />
      <CohortJoinForm />
      <CohortJoinNext />
      <Footer />
    </div>
  )
}
