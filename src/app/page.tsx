import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero"
import Impact from "@/components/Impact"
import Industries from "@/components/Industries"
import TechnologyTimeline from "@/components/TechnologyTimeline"
import Products from "@/components/Products"
import Sustainability from "@/components/Sustainability"

import Features from "@/components/Features"
// import Innovation from "@/components/innovation/Innovation"
// import CaseStudies from "@/components/caseStudies/CaseStudies"
// import Sustainability from "@/components/sustainability/Sustainability"
import AboutPreview from "@/components/AboutPreview"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'POLYMERCO',
}

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Features/>
      <Impact/>  
      {/* <TechnologyTimeline/> */}
      {/* <Industries/> */}
      <AboutPreview/>
      <Products/>
      <Sustainability/>
      
      <Contact/>
      <Footer/>
    </div>
  )
}