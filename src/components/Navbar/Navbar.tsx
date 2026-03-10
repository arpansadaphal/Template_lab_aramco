"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  
  return (

    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <div className="text-xl font-semibold">
          POLYMERCO
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">

          {/* Products with mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >

            <div className="flex items-center gap-1 cursor-pointer group">
              Products
              <ChevronDown size={16} />

              <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
            </div>
<AnimatePresence>
{megaOpen && (

<motion.div
initial={{ opacity:0, y:20 }}
animate={{ opacity:1, y:0 }}
exit={{ opacity:0, y:20 }}
transition={{ duration:0.25 }}
className="absolute left-0 top-full w-screen bg-white shadow-xl border-t"
>

<div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 py-12">

{/* Column 1 */}
<div>
<h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
Polymer Types
</h4>

<ul className="space-y-3 text-gray-600 text-sm">
<li className="hover:text-black cursor-pointer">Polyethylene</li>
<li className="hover:text-black cursor-pointer">Polypropylene</li>
<li className="hover:text-black cursor-pointer">Elastomers</li>
<li className="hover:text-black cursor-pointer">Specialty Materials</li>
</ul>
</div>

{/* Column 2 */}
<div>
<h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
Applications
</h4>

<ul className="space-y-3 text-gray-600 text-sm">
<li>Packaging</li>
<li>Automotive</li>
<li>Healthcare</li>
<li>Consumer Goods</li>
</ul>
</div>

{/* Column 3 */}
<div>
<h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
Industries
</h4>

<ul className="space-y-3 text-gray-600 text-sm">
<li>Construction</li>
<li>Electronics</li>
<li>Energy</li>
<li>Transportation</li>
</ul>
</div>

{/* Column 4 Featured */}
<div className="bg-gray-100 p-6">

<h4 className="font-semibold mb-3">
Advanced Polymer Solutions
</h4>

<p className="text-sm text-gray-600 mb-4">
Explore our high-performance materials designed for next-generation industries.
</p>

<button className="text-sm border px-4 py-2">
Explore Products
</button>

</div>

</div>

</motion.div>
)}
</AnimatePresence>

          </div>

          <a className="relative group cursor-pointer">
            Industries
            <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
          </a>

          <a className="relative group cursor-pointer">
            Innovation
            <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
          </a>

          <a className="relative group cursor-pointer">
            Sustainability
            <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
          </a>

          <a className="relative group cursor-pointer">
            Insights
            <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
          </a>

          <a className="relative group cursor-pointer">
            About
            <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
          </a>

        </nav>

        {/* Contact Button */}
        <button className="hidden md:block px-5 py-2 border border-black text-sm hover:bg-black hover:text-white transition">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

    <AnimatePresence>
{mobileOpen && (

<motion.div
initial={{ x:"100%" }}
animate={{ x:0 }}
exit={{ x:"100%" }}
transition={{ duration:0.35 }}
className="fixed inset-0 bg-white z-50 p-8 md:hidden"
>

{/* Header */}

<div className="flex justify-between items-center mb-12">

<h2 className="text-xl font-semibold">
POLYMERCO
</h2>

<button onClick={()=>setMobileOpen(false)}>
<X size={32}/>
</button>

</div>

{/* Links */}

<motion.div
initial="hidden"
animate="visible"
variants={{
visible:{
transition:{ staggerChildren:0.08 }
}
}}
className="flex flex-col gap-8 text-2xl font-medium"
>

{["Products","Industries","Innovation","Sustainability","Insights","About"].map((item)=>(

<motion.a
key={item}
variants={{
hidden:{ opacity:0, y:20 },
visible:{ opacity:1, y:0 }
}}
className="border-b pb-4"
>
{item}
</motion.a>

))}

<button className="mt-10 border p-4 text-lg">
Contact
</button>

</motion.div>

</motion.div>

)}
</AnimatePresence>

    </header>
  )
}