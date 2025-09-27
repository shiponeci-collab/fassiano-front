"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { BackgroundEffects } from "./background-effects"
import { HeroContent } from "./hero-content"
import { TraditionalSection } from "./traditional-section"
import { ImageSixSection } from "./image-six-section"
import { BookTimelineSection } from "../book-timeline-section"
import { Spotlight } from "../ui/spotlight-new"
import { Product360Viewer } from "./product-360-viewer"
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
        
        {/* Red Spotlight Effect - Left Side Only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
          <Spotlight 
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 85%, 70%, .12) 0, hsla(0, 85%, 60%, .04) 50%, hsla(0, 85%, 50%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 85%, 70%, .08) 0, hsla(0, 85%, 60%, .03) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 85%, 70%, .06) 0, hsla(0, 85%, 50%, .02) 80%, transparent 100%)"
          />
          {/* Clean spotlight on product area - original colors */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-30 scale-75">
            <Spotlight />
          </div>
        </div>
        
        {/* Hero Content Layout - Mobile-First Responsive */}
        <div className="relative z-10 h-full pt-16 md:pt-20 pb-8 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)]">
              
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                <HeroContent />
              </div>
              
              {/* Right Side - Premium Product Showcase */}
              <div className="flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0">
                {/* 360° Product Display */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.0 }}
                >
                  <Product360Viewer />
                </motion.div>
              </div>
              
            </div>
          </div>
          
          {/* Made in Morocco - Always Right Side */}
          <motion.div 
            className="absolute bottom-4 right-4 sm:right-6 lg:right-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-white/70 text-xs sm:text-sm font-normal tracking-wide uppercase" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
                Made in Morocco
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIDDEN SUB-SECTIONS - Comment out to show only main hero */}
      {/* 
      Traditional Section - Aceternity Carousel
      <TraditionalSection />

      Book Timeline Section - Brand History
      <BookTimelineSection />

      Image Six Section - Premium Innovation
      <ImageSixSection />
      */}
    </>
  )
}
