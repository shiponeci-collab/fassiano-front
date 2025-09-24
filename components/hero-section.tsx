"use client"

import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#next-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <Spotlight />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-full blur-3xl scale-150" />
          <img
            src="/fassiano-product-hero.png"
            alt="Fassiano Premium Sneaker"
            className="relative z-10 w-[600px] h-[500px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="mb-6">
            <p className="text-red-500 font-semibold text-sm tracking-[0.2em] uppercase">Premium Footwear</p>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance mb-8 leading-none">
            <span className="text-white">FASS</span>
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">IANO</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-light text-white/90 text-balance mb-10 leading-relaxed">
            Where Heritage Meets Modern Design
          </h2>

          <p className="text-xl text-white/70 text-balance mb-10 max-w-xl leading-relaxed">
            Premium sneakers crafted for the global citizen. Honoring tradition while embracing innovation.
          </p>

          <div className="mb-10">
            <p className="text-2xl text-white mb-2">
              Starting at <span className="font-bold text-red-500">$299</span>
            </p>
            <p className="text-white/50">Pre-order available worldwide</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button
              size="lg"
              className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Pre-order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold text-lg transition-all duration-300"
            >
              Explore Collection
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-2">Heritage</div>
              <div className="text-white/60 text-sm">Cultural Design</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-2">Premium</div>
              <div className="text-white/60 text-sm">Quality Materials</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-2">Global</div>
              <div className="text-white/60 text-sm">Universal Appeal</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-6 flex items-center justify-center animate-bounce group-hover:scale-110 transition-transform">
            <div className="w-3 h-3 border-r-2 border-b-2 border-white transform rotate-45 -translate-y-1"></div>
          </div>
        </button>
      </div>
    </section>
  )
}
