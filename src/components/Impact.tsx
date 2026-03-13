"use client"

import CountUp from "react-countup"
import { motion } from "framer-motion"

export default function Impact() {

  const stats = [
    { number: 150, label: "Countries Served", suffix: "+" },
    { number: 80, label: "Manufacturing Facilities", suffix: "+" },
    { number: 5, label: "Million Tons Annual Production", suffix: "M+" },
    { number: 2500, label: "Employees Worldwide", suffix: "+" }
  ]

  return (

    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Global Impact
          </h2>

          <p className="mt-6 text-gray-600">
            Delivering advanced polymer solutions that power industries
            and infrastructure around the world.
          </p>

        </motion.div>

        {/* Stats Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 text-center">

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >

              <div className="text-4xl md:text-5xl font-bold text-gray-900">

                <CountUp
                  end={stat.number}
                  duration={2}
                />

                {stat.suffix}

              </div>

              <p className="mt-3 text-gray-500 text-sm">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}