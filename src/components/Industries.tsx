// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"

// const industries = [
//   {
//     title: "Automotive",
//     description:
//       "High-performance polymers enabling lightweight and durable vehicle components.",
//     image: "/industries/Automotive.jpg"
//   },
//   {
//     title: "Packaging",
//     description:
//       "Advanced materials powering sustainable and protective packaging solutions.",
//     image: "/industries/Packing.jpg"
//   },
//   {
//     title: "Energy",
//     description:
//       "Engineered polymers improving infrastructure durability and energy efficiency.",
//     image: "/industries/Energy.jpg"
//   }
// ]

// export default function Industries() {

//   const [active, setActive] = useState(0)

//   return (

//     <section className="py-32 bg-neutral-950 text-white">

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-6">

//         {/* Left Side */}

//         <div className="space-y-12">

//           {industries.map((item, index) => (

//             <div
//               key={index}
//               onMouseEnter={() => setActive(index)}
//               className="cursor-pointer"
//             >

//               <h3
//                 className={`text-3xl font-semibold transition ${
//                   active === index
//                     ? "text-white"
//                     : "text-neutral-500"
//                 }`}
//               >
//                 {item.title}
//               </h3>

//               {active === index && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="mt-4 text-neutral-400"
//                 >
//                   {item.description}
//                 </motion.p>
//               )}

//             </div>

//           ))}

//         </div>

//         {/* Right Side */}

//         <div className="relative h-[520px] rounded-xl overflow-hidden">

//           <img
//             src={industries[active].image}
//             className="absolute w-full h-full object-cover transition duration-700"
//           />

//         </div>

//       </div>

//     </section>
//   )
// }

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Industries() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

   const industries = [
    {
      title: "Automotive",
      image: "/industries/Automotive.jpg"
    },
    {
      title: "Packaging",
      image: "/industries/Packing.jpg"
    },
    {
      title: "Automotive",
      image: "/industries/Automotive.jpg"
    },
    {
      title: "Electronics",
      image: "/industries/Electronics.jpg"
    },
    {
      title: "Healthcare",
      image: "/industries/Healthcare.jpg"
    },
    {
      title: "Energy",
      image: "/industries/Energy.jpg"
    }
  ]


  return (

    <section
      ref={ref}
      className="relative h-[200vh] bg-black"
    >

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        <motion.div
          style={{ x }}
          className="flex gap-8 px-20"
        >

          {industries.map((industry, i) => (

         <div
  key={i}
  className="group relative w-[420px] h-[520px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer"
>

  {/* Image */}

  <img
    src={industry.image}
    className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* Gradient Overlay */}

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

  {/* Glass Overlay */}

  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-sm" />

  {/* Content */}

  <div className="absolute bottom-8 left-8 right-8 text-white">

    <h3 className="text-3xl font-semibold">
      {industry.title}
    </h3>

    <p className="mt-3 text-sm text-gray-300 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
      Advanced polymer materials engineered for high-performance
      industrial applications.
    </p>

    <div className="mt-4 flex items-center gap-2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700">

      <span className="text-sm font-medium">
        Explore Industry
      </span>

      <span className="text-lg">→</span>

    </div>

  </div>

  {/* Premium Border Glow */}

  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/40 transition" />

</div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}