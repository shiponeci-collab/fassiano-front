"use client"

import { motion } from "framer-motion"
import { PRODUCT_INFO, ANIMATION_CONFIG } from "./constants"

export function HeroContent() {
  return (
    <motion.div
      className="text-left space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
            {/* Brand Title & Product Information */}
      <div className="space-y-6">
        {/* Main Brand Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mb-3 md:mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
            <span className="text-white">FASS</span><span className="text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text">IANO</span>
          </h1>
        </motion.div>

        {/* Product Information - Teaser Version */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 tracking-wide" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
            Moroccan Heritage
          </h2>
          
          <p className="text-white/70 text-base sm:text-lg font-light max-w-lg" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
            Handcrafted by master artisans
          </p>
          
          <div className="w-16 h-px bg-gradient-to-r from-red-400 to-red-600" />
        </motion.div>

        {/* Pricing - Minimal */}
        <motion.div 
          className="space-y-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="text-2xl sm:text-3xl font-semibold text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
            <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">Coming Soon</span>
          </p>
        </motion.div>
      </div>

      {/* Single CTA - Teaser */}
      <motion.div 
        className="flex items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 1.5 }}
      >
        <motion.button
          className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}
          whileHover={{ 
            y: -2,
            boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">NOTIFY ME</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Minimal Features - Teaser */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.8 }}
      >
        <div className="flex flex-wrap gap-6 text-white/50 text-xs">
          {PRODUCT_INFO.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-red-400 rounded-full" />
              {feature}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
