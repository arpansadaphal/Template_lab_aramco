"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPreview() {

  return (

    <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}

      <img
        src="/about/factory.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}

      <div className="relative z-10 max-w-4xl text-center px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          We Don’t Just Manufacture Polymers.
          <br />
          We Engineer the Materials Shaping Tomorrow.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto"
        >
          From advanced material science to global-scale manufacturing,
          we power industries that define the modern world.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >

          <Link href="/about">
            <button className="mt-10 px-8 py-4 border border-white/40 rounded-full hover:bg-white hover:text-black transition">
              Discover Our Story →
            </button>
          </Link>

        </motion.div>

      </div>

    </section>
  )
}