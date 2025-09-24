"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AppleStyleHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.querySelector("#next-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-black">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          {/* Dynamic Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black" />
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.1), transparent 60%)`
            }}
          />
          
          {/* Ambient Light Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen">
              
              {/* Left Content - 7 columns */}
              <motion.div 
                className="lg:col-span-7 space-y-8 lg:space-y-12"
                style={{ y: textY }}
              >
                
                {/* Apple-style Product Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
                >
                  <div className="relative">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                  </div>
                  <span className="text-white/90 font-medium text-sm tracking-wider uppercase">
                    Premium Collection 2025
                  </span>
                </motion.div>

                {/* Main Headlines */}
                <div className="space-y-6 lg:space-y-8">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold tracking-tight leading-[0.8]"
                  >
                    <motion.span 
                      className="block text-white drop-shadow-2xl"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      FASS
                    </motion.span>
                    <motion.span 
                      className="block text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      IANO
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90 leading-relaxed max-w-4xl"
                  >
                    Where heritage meets the future of footwear
                  </motion.p>
                </div>

                {/* Feature Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex flex-wrap gap-8 lg:gap-12"
                >
                  {[
                    { name: "Premium Materials", color: "bg-red-500" },
                    { name: "Cultural Design", color: "bg-orange-500" },
                    { name: "Global Heritage", color: "bg-red-300" }
                  ].map((feature, index) => (
                    <div key={feature.name} className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 ${feature.color} rounded-full`} />
                      <span className="text-white/80 font-medium text-base lg:text-lg">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Pricing */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="space-y-4"
                >
                  <p className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
                    From{" "}
                    <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
                      $299
                    </span>
                  </p>
                  <p className="text-white/60 text-lg font-medium">
                    Available for pre-order worldwide
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="flex flex-col sm:flex-row gap-4 lg:gap-6"
                >
                  <Button
                    size="lg"
                    className="px-12 py-4 lg:px-16 lg:py-5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold text-lg lg:text-xl rounded-full shadow-2xl shadow-red-500/25 transition-all duration-500 hover:scale-105 hover:shadow-red-500/40 border-0"
                  >
                    Pre-order Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-12 py-4 lg:px-16 lg:py-5 border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm font-semibold text-lg lg:text-xl rounded-full transition-all duration-500 hover:border-white/40"
                  >
                    Explore Collection
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Content - Product Showcase - 5 columns */}
              <motion.div 
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <div className="relative aspect-square max-w-2xl mx-auto">
                  
                  {/* Product Glow Effects */}
                  <div className="absolute inset-0 scale-150">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/15 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-500/15 to-transparent rounded-full blur-2xl" />
                  </div>

                  {/* Main Product Image */}
                  <motion.div
                    className="relative z-10 w-full h-full"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: -2
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      src="/fassiano-product-hero.png"
                      alt="Fassiano Premium Sneaker"
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-12 -right-12 w-20 h-20 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full blur-xl"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-12 -left-12 w-16 h-16 bg-gradient-to-r from-white/20 to-red-300/30 rounded-full blur-lg"
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 0.9, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  />

                  {/* Product Info Card */}
                  <motion.div
                    className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/20 shadow-2xl"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                  >
                    <div className="text-white text-lg font-bold">Heritage Black</div>
                    <div className="text-white/70 text-sm">Premium Collection</div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-medium">Available</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-4 text-white/60 hover:text-white transition-all duration-300 group"
          >
            <span className="text-sm font-medium uppercase tracking-wider">
              Discover Collection
            </span>
            <div className="w-8 h-12 border border-white/30 rounded-full flex justify-center pt-2 group-hover:border-white/50 transition-colors backdrop-blur-sm">
              <motion.div
                className="w-1.5 h-4 bg-white/80 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
