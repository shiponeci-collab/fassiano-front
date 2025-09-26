"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Auto-open box after 2 seconds for premium reveal
    const timer = setTimeout(() => {
      setIsBoxOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const carouselItems = [
    {
      src: "/fassiano-product-hero.png",
      title: "Heritage Black",
      category: "Premium Collection",
      content: <p className="text-sm text-white/80">Timeless elegance in premium black leather</p>
    },
    {
      src: "/fassiano-cultural-fusion.png", 
      title: "Cultural Fusion",
      category: "Global Edition",
      content: <p className="text-sm text-white/80">Where tradition meets contemporary design</p>
    },
    {
      src: "/fassiano-modern-minimalist.png",
      title: "Modern Minimalist", 
      category: "Clean Collection",
      content: <p className="text-sm text-white/80">Pure lines, perfect form</p>
    },
    {
      src: "/fassiano-global-diversity.png",
      title: "Global Diversity",
      category: "World Edition", 
      content: <p className="text-sm text-white/80">Celebrating cultures through craftsmanship</p>
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
        {/* Premium Box Container */}
        <div className="relative z-10" style={{ perspective: "1200px" }}>
          
          {/* 3D Premium Box */}
          <motion.div
            className="relative mx-auto"
            style={{
              width: "600px",
              height: "400px",
              transformStyle: "preserve-3d"
            }}
            animate={{
              rotateY: isBoxOpen ? 15 : 0,
              rotateX: isBoxOpen ? -10 : 0,
              scale: isBoxOpen ? 1.1 : 1
            }}
            transition={{
              duration: 3.0,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.5
            }}
          >
            {/* Box Base */}
            <div
              className="absolute w-full h-full bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 shadow-2xl"
              style={{
                transform: "translateZ(150px)"
              }}
            >
              {/* Subtle FASSIANO branding */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-thin text-gray-800 tracking-[0.2em]">
                    FASSIANO
                  </h1>
                  <div className="w-24 h-px bg-gray-600 mx-auto mt-6"></div>
                  <p className="text-gray-600 text-sm mt-4 tracking-wider">
                    PREMIUM HERITAGE
                  </p>
                </div>
              </div>
            </div>

            {/* Box Sides */}
            <div
              className="absolute w-full h-full bg-gradient-to-r from-gray-200 to-gray-400 border border-gray-500"
              style={{
                width: "300px",
                transform: "rotateY(-90deg) translateZ(150px)"
              }}
            />
            <div
              className="absolute w-full h-full bg-gradient-to-l from-gray-200 to-gray-400 border border-gray-500"
              style={{
                width: "300px",
                transform: "rotateY(90deg) translateZ(450px)"
              }}
            />

            {/* Box Bottom */}
            <div
              className="absolute w-full bg-gradient-to-t from-gray-300 to-gray-200 border border-gray-500"
              style={{
                height: "300px",
                transform: "rotateX(90deg) translateZ(400px)"
              }}
            />

            {/* Box Lid - Opens upward */}
            <motion.div
              className="absolute w-full bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-400 shadow-xl"
              style={{
                height: "300px",
                transformOrigin: "bottom center",
                transform: "rotateX(-90deg) translateZ(400px)"
              }}
              animate={{
                rotateX: isBoxOpen ? -160 : -90,
                y: isBoxOpen ? -50 : 0
              }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.0
              }}
            >
              {/* Premium lid interior */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/60" />
              <div className="absolute inset-6 border border-gray-300/30 rounded" />
            </motion.div>

            {/* Premium Sneaker - Emerges from box */}
            <motion.div
              className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={isBoxOpen ? { 
                opacity: 1, 
                y: -30, 
                scale: 1,
                rotateY: 10
              } : {}}
              transition={{
                duration: 2.0,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 2.0
              }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-white/10 blur-3xl scale-150 rounded-full" />
              
              <img
                src="/fassiano-product-hero.png"
                alt="FASSIANO Premium Sneaker"
                className="relative z-10 w-64 h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Premium lighting when box opens */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: isBoxOpen ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              {/* Warm interior glow */}
              <div className="absolute inset-x-0 top-1/2 bottom-0 bg-gradient-to-t from-amber-100/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Premium Text Content */}
          <motion.div
            className="text-center mt-16 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3.5 }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-white/90 tracking-wide">
                Heritage Black
              </h2>
              <p className="text-white/60 text-lg font-light">
                Where tradition meets innovation
              </p>
              <div className="w-16 h-px bg-white/30 mx-auto"></div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-white text-black px-8 py-3 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                PRE-ORDER NOW
              </motion.button>
              <motion.button
                className="border border-white/20 text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-white/5 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                EXPLORE COLLECTION
              </motion.button>
            </div>

            <p className="text-white/40 text-xs tracking-wider">
              COMPLIMENTARY WORLDWIDE SHIPPING • LIFETIME CRAFTSMANSHIP WARRANTY
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Collection Section */}
      <section className="relative bg-black text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-black" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-5xl font-thin mb-8 tracking-wide">
              Four Stories.
              <br />
              One Legacy.
            </h2>
            <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              Four distinct expressions of craftsmanship, each representing a unique heritage.
            </p>
          </motion.div>

          {/* Product Carousel */}
          <div className="mt-16">
            {/* Note: AppleCardsCarousel will be implemented separately if needed */}
            <div className="text-center text-white/40 text-sm">
              Premium Collection Showcase Coming Soon
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
