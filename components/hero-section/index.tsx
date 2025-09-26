"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { BackgroundEffects } from "./background-effects"
import { HeroContent } from "./hero-content"
import { TraditionalSection } from "./traditional-section"
import { ImageSixSection } from "./image-six-section"
import { BookTimelineSection } from "../book-timeline-section"
import { Spotlight } from "../ui/spotlight-new"
import type { HeroSectionProps } from "./types"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <>
      {/* Main Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-black text-white overflow-hidden"
      >
        {/* Background Effects */}
        <BackgroundEffects />
        
        {/* Spotlight Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
          <Spotlight />
          {/* Additional focused spotlight on product area */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-40 scale-75">
            <Spotlight />
          </div>
        </div>
        
        {/* Hero Content Layout - Split Layout */}
        <div className="relative z-10 h-full pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full min-h-[calc(100vh-10rem)]">
              
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                <HeroContent />
              </div>
              
              {/* Right Side - Premium Product Showcase */}
              <div className="flex items-center justify-center order-1 lg:order-2">
                {/* Clean Product Display */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.0 }}
                >
                  {/* Main Product Image */}
                  <motion.img
                    src="/fassiano-product-hero.png"
                    alt="FASSIANO Premium Sneaker"
                    className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.6 }
                    }}
                  />
                </motion.div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Section - Aceternity Carousel */}
      <TraditionalSection />

      {/* Book Timeline Section - Brand History */}
      {/* <BookTimelineSection /> */}

      {/* Image Six Section - Premium Innovation */}
      <ImageSixSection />
    </>
  )
}
