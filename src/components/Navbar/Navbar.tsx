"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (

<header
  className={`fixed top-0 w-full z-50 transition-all duration-300
  ${scrolled
    ? "bg-white/90 backdrop-blur-xl border-b text-black"
    : "bg-transparent text-white"
  }`}
>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        {/* Logo */}

        <Link href="/" className="text-xl font-semibold tracking-wide">
          POLYMERCO
        </Link>

        {/* Desktop Navigation */}

        <NavigationMenu className="hidden md:flex">

          <NavigationMenuList className="gap-8">

            <NavigationMenuItem>

              <NavigationMenuTrigger className="bg-white text-black shadow-xl rounded-lg">

                Products
              </NavigationMenuTrigger>

              <NavigationMenuContent>

                <div className="grid grid-cols-2 gap-10 p-10 w-[640px]">

                  <div>
                    <h4 className="font-semibold mb-3">
                      Polymer Types
                    </h4>

                    <ul className="space-y-2 text-sm text-muted-foreground">

                      <li>Polyethylene</li>
                      <li>Polypropylene</li>
                      <li>Elastomers</li>
                      <li>Specialty Polymers</li>

                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Applications
                    </h4>

                    <ul className="space-y-2 text-sm text-muted-foreground">

                      <li>Automotive</li>
                      <li>Packaging</li>
                      <li>Construction</li>
                      <li>Electronics</li>

                    </ul>
                  </div>

                </div>

              </NavigationMenuContent>

            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#">Industries</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#">Innovation</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#">Sustainability</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#">Insights</Link>
            </NavigationMenuItem>

          </NavigationMenuList>

        </NavigationMenu>

        {/* Desktop CTA */}

        <Button className="hidden md:flex">
          Contact
        </Button>

        {/* Mobile Hamburger */}

        <Sheet>

          <SheetTrigger asChild>

            <button className="md:hidden">
              <Menu size={28} />
            </button>

          </SheetTrigger>

         <SheetContent side="right" className="w-[320px] px-8">

  <div className="flex flex-col justify-center items-center flex-1">

    <nav className="flex flex-col items-center space-y-8 text-lg font-medium w-full">

      <Link href="#" className="w-full text-center border-b pb-4">
        Products
      </Link>

      <Link href="#" className="w-full text-center border-b pb-4">
        Industries
      </Link>

      <Link href="#" className="w-full text-center border-b pb-4">
        Innovation
      </Link>

      <Link href="#" className="w-full text-center border-b pb-4">
        Sustainability
      </Link>

      <Link href="#" className="w-full text-center border-b pb-4">
        Insights
      </Link>

      <Button className="mt-6 w-full">
        Contact
      </Button>

    </nav>

  </div>

</SheetContent>

        </Sheet>

      </div>

    </header>
  )
}