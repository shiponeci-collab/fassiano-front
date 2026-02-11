"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PRODUCT_INFO } from "./constants"
import { NotifyMeForm } from "../notify-me-form"

type ModelId = "x-red" | "x-black"

interface HeroContentProps {
  selectedModel: ModelId
}

export function HeroContent({ selectedModel }: HeroContentProps) {
  const [showNotifyForm, setShowNotifyForm] = useState(false)
  const modelLabel = selectedModel === "x-red" ? "X-RED" : "X-BLACK"
  const heroFont = "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif"
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
          <div className="mb-3 md:mb-4">
            <img 
              src="/brand-logohero.png" 
              alt="FASSIANO" 
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain filter brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* Product Information - Teaser Version */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 tracking-wide" style={{ fontFamily: heroFont }}>
            Moroccan Heritage
          </h2>
          
          <p className="text-white/70 text-base sm:text-lg font-light max-w-lg" style={{ fontFamily: heroFont }}>
            Handcrafted by master artisans
          </p>
          
          <div className="w-16 h-px bg-gradient-to-r from-red-400 to-red-600" />
        </motion.div>

        {/* Selected Model */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Selected</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm font-semibold tracking-wide text-white">
            {modelLabel}
          </span>
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
          className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto cursor-pointer"
          style={{ fontFamily: heroFont }}
          onClick={() => setShowNotifyForm(true)}
          whileHover={{ 
            y: -2,
            boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Pre-order</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Notify Me Form Modal */}
      <NotifyMeForm
        isOpen={showNotifyForm}
        onClose={() => setShowNotifyForm(false)}
        selectedModel={selectedModel}
      />

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
