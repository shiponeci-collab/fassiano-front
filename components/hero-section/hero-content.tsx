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
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mb-4">
            <span className="block text-white">FASS</span>
            <span className="block text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text">IANO</span>
          </h1>
        </motion.div>

        {/* Product Information */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-3xl font-light text-white/90 tracking-wide">
            {PRODUCT_INFO.name}
          </h2>
          
          <p className="text-white/60 text-xl font-light max-w-lg">
            {PRODUCT_INFO.subtitle}
          </p>
          
          <div className="w-16 h-px bg-white/30" />
        </motion.div>

        {/* Pricing */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="text-4xl font-semibold text-white">
            From <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">$299</span>
          </p>
          <p className="text-white/50 text-sm">Available for pre-order worldwide</p>
        </motion.div>
      </div>

      {/* Premium CTA Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 1.6 }}
      >
        <motion.button
          className="group relative bg-white text-black px-8 py-3 text-sm font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300"
          whileHover={{ 
            y: -2,
            boxShadow: "0 10px 25px rgba(255,255,255,0.15)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">PRE-ORDER NOW</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        
        <motion.button
          className="group relative border border-white/20 text-white px-8 py-3 text-sm font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300"
          whileHover={{ 
            y: -2,
            borderColor: "rgba(255,255,255,0.4)",
            boxShadow: "0 10px 25px rgba(255,255,255,0.05)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">EXPLORE COLLECTION</span>
          <motion.div
            className="absolute inset-0 bg-white/5"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Premium Features */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 2.0 }}
      >
        <p className="text-white/40 text-xs tracking-wider uppercase max-w-lg">
          {PRODUCT_INFO.warranty}
        </p>
        
        <div className="flex flex-wrap gap-4 text-white/30 text-xs">
          {PRODUCT_INFO.features.map((feature, index) => (
            <span key={index} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white/40 rounded-full" />
              {feature}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
