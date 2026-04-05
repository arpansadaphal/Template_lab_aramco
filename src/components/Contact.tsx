"use client"

import { motion } from "framer-motion"

export default function Contact() {

  return (

    <section className="py-32 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-20">

          <h2 className="text-5xl font-bold text-gray-900">
            Get in Touch
          </h2>

          <p className="mt-6 text-gray-600">
            Partner with us to deliver high-performance polymer
            solutions tailored to your industry needs.
          </p>

        </div>

        {/* Layout */}

        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE */}

          <div className="bg-black text-white rounded-2xl p-10 relative overflow-hidden">

            {/* Gradient Overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90" />

            <div className="relative z-10">

              <h3 className="text-3xl font-semibold">
                Contact Information
              </h3>

              <p className="mt-4 text-gray-300">
                Our global team is ready to support your
                business with advanced polymer solutions.
              </p>

              <div className="mt-10 space-y-6 text-gray-300">

                <p>📍 Pune, India</p>
                <p>📞 +91 98765 43210</p>
                <p>✉ info@polymerco.com</p>

              </div>

              {/* Decorative Glow */}

              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 blur-3xl rounded-full" />

            </div>

          </div>

          {/* RIGHT SIDE (FORM) */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-xl"
          >

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}
