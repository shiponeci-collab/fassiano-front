"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold tracking-tight text-white">
              FASS<span className="text-red-500">IANO</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("next-section")}
                className="text-white/70 hover:text-white transition-colors font-medium"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/70 hover:text-white transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("innovation")}
                className="text-white/70 hover:text-white transition-colors font-medium"
              >
                Innovation
              </button>
              <button
                onClick={() => scrollToSection("global")}
                className="text-white/70 hover:text-white transition-colors font-medium"
              >
                Global
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-semibold px-6">
              Pre-order
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/10"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  {isMobileMenuOpen ? (
                    <div className="relative w-4 h-4">
                      <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-white transform rotate-45 -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-white transform -rotate-45 -translate-y-1/2"></div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="w-4 h-0.5 bg-white"></div>
                      <div className="w-4 h-0.5 bg-white"></div>
                      <div className="w-4 h-0.5 bg-white"></div>
                    </div>
                  )}
                </div>
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-b border-white/10">
              <button
                onClick={() => scrollToSection("next-section")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("innovation")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors"
              >
                Innovation
              </button>
              <button
                onClick={() => scrollToSection("global")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors"
              >
                Global
              </button>
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">Pre-order</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
