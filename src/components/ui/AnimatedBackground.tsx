"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (

    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* gradient blob 1 */}

      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full top-[-100px] left-[-100px]"
      />

      {/* gradient blob 2 */}

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 60, -60, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-200px] right-[-200px]"
      />

    </div>
  )
}
