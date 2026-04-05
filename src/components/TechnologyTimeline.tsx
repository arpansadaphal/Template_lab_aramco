"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"

export default function TechnologyTimeline() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const [activeStep, setActiveStep] = useState(0)

    const steps = [
    {
      title: "Manufacturing Excellence",
      text: "State-of-the-art polymer manufacturing facilities delivering precision and consistency at scale.",
      image: "/timeline/Electronics.jpg"
    },
    {
      title: "Advanced Research",
      text: "Dedicated research laboratories focused on material innovation and polymer science.",
      image: "/timeline/Energy.jpg"
    },
    {
      title: "Material Engineering",
      text: "Engineering high-performance polymers tailored to demanding industrial environments.",
      image: "/timeline/Healthcare.jpg"
    },
    {
      title: "Global Distribution",
      text: "Reliable supply chain infrastructure delivering materials to industries worldwide.",
      image: "/timeline/Packaging.jpg"
    }
  ]

  useEffect(() => {

    return scrollYProgress.on("change", (latest) => {

      const step = Math.min(
        steps.length - 1,
        Math.floor(latest * steps.length)
      )

      setActiveStep(step)

    })

  }, [scrollYProgress])

  return (

    <section ref={ref} className="h-[300vh] bg-white">

      <div className="sticky top-0 h-screen flex items-center">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 px-6 items-center">

          {/* IMAGE */}

          <motion.img
            key={steps[activeStep].image}
            src={steps[activeStep].image}
            className="w-full h-[420px] object-cover rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* TEXT */}

          <div>

            <motion.h3
              key={steps[activeStep].title}
              className="text-4xl font-semibold text-gray-900"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {steps[activeStep].title}
            </motion.h3>

            <motion.p
              className="mt-6 text-gray-600 text-lg"
            >
              {steps[activeStep].text}
            </motion.p>

          </div>

        </div>

      </div>

    </section>
  )
}