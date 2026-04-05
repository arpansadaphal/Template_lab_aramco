"use client"

import { motion } from "framer-motion"

export default function Products() {

  const products = [
    {
      title: "Polyethylene",
      text: "High-performance polyethylene materials used in packaging and infrastructure.",
      image: "/products/polyethylene.jpg"
    },
    {
      title: "Polypropylene",
      text: "Lightweight and durable materials engineered for automotive and industrial use.",
      image: "/products/polypropylene.jpg"
    },
    {
      title: "Specialty Polymers",
      text: "Advanced polymer solutions designed for high-performance applications.",
      image: "/products/specialty.jpg"
    }
  ]

  return (

    <section className="py-32 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-5xl font-bold text-gray-900">
            Polymer Solutions
          </h2>

          <p className="mt-6 text-gray-600">
            Delivering advanced polymer materials that power industries worldwide.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {products.map((product, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[420px] rounded-xl overflow-hidden"
            >

              <img
                src={product.image}
                className="absolute w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">

                <h3 className="text-2xl font-semibold">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
                  {product.text}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}
