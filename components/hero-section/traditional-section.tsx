"use client"

import { motion } from "framer-motion"
import { AceternityCarousel } from "./aceternity-carousel"

export function TraditionalSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section Style Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Premium lighting effects like hero section */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/10 via-white/3 to-transparent rounded-full blur-[120px]"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-gray-200/8 via-gray-300/3 to-transparent rounded-full blur-[100px]"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1.1, 0.9, 1.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>


      <div className="relative z-10 h-full">
        {/* Section Header */}
        <div className="container mx-auto px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <span className="block text-white">Traditional</span>
              <span className="block text-transparent bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text">
                Heritage Collection
              </span>
            </motion.h1>
            
            {/* Decorative line */}
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 rounded-full mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
            
            <motion.p 
              className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              Five distinctive collections celebrating heritage, innovation, and timeless style.
              <br />
              <span className="text-white/60">Swipe to explore each unique story.</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Aceternity Card Carousel */}
        <AceternityCarousel />
      </div>
    </section>
  )
}
