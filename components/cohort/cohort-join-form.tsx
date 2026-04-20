"use client"

import { useState, FormEvent } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2, CheckCircle2, Rocket, Palette } from "lucide-react"

type Role = "viewer" | "streamer"
type FormState = "idle" | "loading" | "success" | "error"

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

const creatorCategories = [
  { id: "business", label: "Business", icon: Rocket },
  { id: "design", label: "Design", icon: Palette },
]

export default function CohortJoinForm() {
  const [role, setRole] = useState<Role>("viewer")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [state, setState] = useState<FormState>("idle")
  const [message, setMessage] = useState("")

  function toggleCategory(id: string) {
    setCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  function switchRole(next: Role) {
    if (next === role) return
    setRole(next)
    setCategories([])
    setState("idle")
    setMessage("")
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (role === "streamer" && categories.length === 0) {
      setState("error")
      setMessage("Pick at least one category you want to teach.")
      return
    }

    setState("loading")
    setMessage("")

    try {
      const res = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          role,
          streamerCategories: role === "streamer" ? categories : undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setState("error")
        setMessage(data.error || "Something went wrong. Try again.")
        return
      }

      setState("success")
      setMessage(
        role === "streamer"
          ? "Application received. We'll be in touch within 48 hours."
          : "You're in. We'll email you before May 8."
      )
      setName("")
      setEmail("")
      setPhone("")
      setCategories([])
    } catch {
      setState("error")
      setMessage("Could not reach the server. Check your connection and try again.")
    }
  }

  return (
    <section className="relative w-full pb-24 lg:pb-28">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal role toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex items-center p-1 rounded-full bg-[#061A15]/70 border border-[#ABAEB6]/10 mb-10"
          role="tablist"
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-[#0BA94C] shadow-lg shadow-[#0BA94C]/25"
            animate={{ x: role === "viewer" ? 0 : "calc(100% + 0px)" }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
          <button
            type="button"
            role="tab"
            aria-selected={role === "viewer"}
            onClick={() => switchRole("viewer")}
            className={`relative z-10 flex-1 py-3 px-4 text-sm font-semibold rounded-full transition-colors ${
              role === "viewer" ? "text-white" : "text-[#ABAEB6] hover:text-white"
            }`}
          >
            Learner
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={role === "streamer"}
            onClick={() => switchRole("streamer")}
            className={`relative z-10 flex-1 py-3 px-4 text-sm font-semibold rounded-full transition-colors ${
              role === "streamer" ? "text-white" : "text-[#ABAEB6] hover:text-white"
            }`}
          >
            Founding Creator
          </button>
        </motion.div>

        {/* Role hint */}
        <AnimatePresence mode="wait">
          <motion.p
            key={role}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="text-center text-sm text-[#ABAEB6] mb-10"
          >
            {role === "viewer"
              ? "Free to join. Show up May 8, ship a real project by June 5."
              : "Lead a cohort. 90% of subs, full asset pack, UoJ distribution."}
          </motion.p>
        </AnimatePresence>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-[#6B7A74] mb-2">
              Full name
            </label>
            <input
              id="name"
              type="text"
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              disabled={state === "loading" || state === "success"}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#ABAEB6]/15 text-white placeholder-[#4a554f] focus:outline-none focus:border-[#0BA94C] transition-colors disabled:opacity-60"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-[#6B7A74] mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={state === "loading" || state === "success"}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#ABAEB6]/15 text-white placeholder-[#4a554f] focus:outline-none focus:border-[#0BA94C] transition-colors disabled:opacity-60"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-[#6B7A74] mb-2">
              Phone{" "}
              <span className="text-[#4a554f] normal-case tracking-normal">
                {role === "streamer" ? "(recommended)" : "(optional)"}
              </span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+962 ..."
              disabled={state === "loading" || state === "success"}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#ABAEB6]/15 text-white placeholder-[#4a554f] focus:outline-none focus:border-[#0BA94C] transition-colors disabled:opacity-60"
            />
          </div>

          <AnimatePresence>
            {role === "streamer" && (
              <motion.div
                key="creator-cat"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-2">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#6B7A74] mb-3">
                    Category you want to teach
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {creatorCategories.map((cat) => {
                      const Icon = cat.icon
                      const active = categories.includes(cat.id)
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleCategory(cat.id)}
                          disabled={state === "loading" || state === "success"}
                          className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all text-left disabled:opacity-60 ${
                            active
                              ? "bg-[#0BA94C]/15 border-[#0BA94C]/50 text-white"
                              : "bg-transparent border-[#ABAEB6]/15 text-[#ABAEB6] hover:border-[#0BA94C]/30"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${active ? "text-[#0BA94C]" : "text-[#ABAEB6]"}`} />
                          <span className="text-sm font-medium">{cat.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={state === "loading" || state === "success"}
              className="group w-full bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold py-6 h-auto text-base rounded-full shadow-lg shadow-[#0BA94C]/20 disabled:opacity-60"
            >
              {state === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : state === "success" ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Got it
                </>
              ) : (
                <>
                  {role === "streamer" ? "Submit application" : "Register for free"}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </Button>
          </div>

          {message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm text-center ${state === "success" ? "text-[#0BA94C]" : "text-red-400"}`}
              role={state === "error" ? "alert" : "status"}
            >
              {message}
            </motion.p>
          )}

          <p className="text-xs text-center text-[#4a554f]">
            By submitting you agree to be contacted by Learnify. No spam.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
