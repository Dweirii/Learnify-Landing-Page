"use client"

import React from "react"
import { motion } from "framer-motion"
import { Cpu, Zap, Shield, Globe } from "lucide-react"
import Image from "next/image"

export default function NvidiaSupport() {
    return (
        <section className="relative py-24 px-4 overflow-hidden">
            {/* Background Decor - very subtle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0BA94C]/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    {/* Left Side: Visual/Branding */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-5/12 relative"
                    >
                        <div className="relative aspect-square max-w-sm mx-auto flex items-center justify-center">
                            {/* Central NVIDIA Badge */}
                            <div className="relative bg-[#102D26]/40 backdrop-blur-md border border-white/5 p-12 rounded-[2.5rem] transition-all duration-300 flex flex-col items-center">
                                <div className="w-48 h-48 relative mb-6">
                                    <Image
                                        src="/nvidia-image-logo.svg"
                                        alt="NVIDIA Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-[#ABAEB6] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Incubated by</p>
                                    <p className="text-white text-3xl font-black tracking-tighter uppercase leading-none">NVIDIA</p>
                                    <p className="text-[#ABAEB6] text-xs font-bold uppercase tracking-widest mt-1">Inception Program</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-7/12 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0BA94C]/10 border border-white/5 text-[#0BA94C] text-[11px] font-bold uppercase tracking-widest">
                                <Cpu className="w-3.5 h-3.5" />
                                Global Inception Member
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                                AI-Powered <span className="text-[#0BA94C]">Scale</span>
                            </h2>
                            <p className="text-[#ABAEB6] text-lg md:text-xl leading-relaxed max-w-2xl">
                                Learnify is proud to be part of the <span className="text-white font-bold">NVIDIA Inception Program</span>. This strategic incubation accelerates our AI integration, providing elite access to computational infrastructure and deep technical expertise.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Zap,
                                    title: "Compute Speed",
                                    desc: "Optimizing video encoding and real-time interaction using NVIDIA architecture."
                                },
                                {
                                    icon: Shield,
                                    title: "Secure Edge",
                                    desc: "Deploying high-performance localized streaming across the MENA region."
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="p-8 rounded-2xl bg-[#102D26]/40 border border-white/5 hover:border-[#0BA94C]/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#0BA94C]/10 flex items-center justify-center text-[#0BA94C] mb-6 group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-[#ABAEB6] text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-4 text-[#0BA94C] font-bold text-sm tracking-widest uppercase"
                        >
                            <Globe className="w-4 h-4" />
                            <span>Fueling Innovations with NVIDIA</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0BA94C]" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
