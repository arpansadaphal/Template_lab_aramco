"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "High-Performance Materials",
    description:
      "Engineered polymer solutions optimized for extreme durability, chemical resistance, and structural integrity.",
  },
  {
    title: "Research & Development",
    description:
      "Advanced material innovation driven by in-house laboratories and continuous performance testing.",
  },
  {
    title: "Sustainable Manufacturing",
    description:
      "Eco-conscious production processes aligned with global environmental standards and compliance.",
  },
  {
    title: "Global Distribution",
    description:
      "Seamless logistics network serving industrial partners across 40+ international markets.",
  },
]

export default function Features() {
  return (
    <section className="relative  text-[#E6E8EC] py-32 px-8 lg:px-24 overflow-hidden">

      {/* ✅ Lightweight Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0F] via-[#0E1116] to-[#0B0C0F]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Core Capabilities
          </p>

          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight">
            Engineering Polymers That Power Industries
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            From material researchC0F] to global-scale manufacturing, our expertise
            spans the complete polymer lifecycle.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {features.map((feature, index) => (
       <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}

  whileHover={{ y: -6 }}
  
  className="group relative p-10 rounded-xl
  bg-[#111318]
  border border-white/10
  hover:border-white/30
  transition duration-300 overflow-hidden"
>

  {/* Mouse glow (cheap effect) */}
  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-10">

    <h3 className="text-2xl font-medium">
      {feature.title}
    </h3>

    <p className="mt-6 text-gray-400 leading-relaxed">
      {feature.description}
    </p>

    {/* Interactive underline */}
    <div className="mt-8 h-[2px] bg-white/10 overflow-hidden">
      <div className="h-full w-0 bg-white group-hover:w-full transition-all duration-500" />
    </div>

  </div>

</motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}
