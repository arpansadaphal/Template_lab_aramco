"use client"

// import { motion } from "framer-motion"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }
const { scrollY } = useScroll()

const y = useTransform(scrollY, [0, 100], [0, 100])
  return (

    <section className="relative h-screen w-full overflow-hidden flex items-center">

      {/* Video Background */}

     <motion.div
  style={{ y }}
  className="absolute w-full h-full"
>

  <video
    autoPlay
    muted
    loop
    playsInline
    poster="/hero-poster.jpg"
    className="w-full h-full object-cover"
  >
    <source src="/hero-loop.mp4" type="video/mp4" />
  </video>

</motion.div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 text-white"
      >

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl"
        >
          Advanced Polymer
          <br />
          Solutions for
          <br />
          Tomorrow
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl"
        >
          Engineering high-performance materials that power industries,
          infrastructure, and innovation across the world.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex gap-4"
        >

          <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition">
            Explore Products
          </button>

          <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition">
            Learn More
          </button>

        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white text-sm">

        <span className="mb-2 opacity-80">Scroll</span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[2px] h-12 bg-white"
        />

      </div>

    </section>
  )
}