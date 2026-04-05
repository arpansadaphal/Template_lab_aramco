"use client"

import Lenis from '@studio-freight/lenis'
import { useEffect } from "react"
import "./globals.css"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }) {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  )
}