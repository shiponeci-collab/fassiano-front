"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PRODUCT_INFO } from "./constants"
import { PreorderButton } from "./preorder-button"
import { ModelId } from "./types"

interface HeroContentProps {
  selectedModel: ModelId
}

export function HeroContent({ selectedModel }: HeroContentProps) {
  const modelLabel = selectedModel === "x-red" ? "X-RED" : selectedModel === "majestic" ? "MAJESTIC" : "X-BLACK"
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
            <Image
              src="/brand-logohero.png"
              alt="FASSIANO"
              width={284}
              height={96}
              priority
              sizes="(max-width: 768px) 180px, 240px"
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
        <PreorderButton selectedModel={selectedModel} />
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
