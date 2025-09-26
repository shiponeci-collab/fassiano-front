"use client"

import { motion } from "framer-motion"
import { BOX_CONFIG, ANIMATION_CONFIG } from "./constants"

interface PremiumBoxProps {
  isBoxOpen: boolean
}

export function PremiumBox({ isBoxOpen }: PremiumBoxProps) {
  return (
    <motion.div
      className="relative mx-auto"
      style={{
        width: `${Math.min(BOX_CONFIG.width, 500)}px`,
        height: `${Math.min(BOX_CONFIG.height, 350)}px`,
        transformStyle: "preserve-3d"
      }}
      animate={{
        rotateY: isBoxOpen ? 15 : 0,
        rotateX: isBoxOpen ? -15 : 0,
        scale: isBoxOpen ? 1.1 : 1
      }}
      transition={ANIMATION_CONFIG.boxOpen}
    >
      {/* Box Top Face - Front Facing (where FASSIANO branding is) */}
      <div
        className="absolute w-full h-full bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 shadow-2xl"
        style={{
          transform: "rotateX(-90deg) translateZ(200px)"
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
          transform: "rotateY(-90deg) translateZ(300px)"
        }}
      />
      <div
        className="absolute w-full h-full bg-gradient-to-l from-gray-200 to-gray-400 border border-gray-500"
        style={{
          width: "300px",
          transform: "rotateY(90deg) translateZ(300px)"
        }}
      />

      {/* Box Front Face */}
      <div
        className="absolute w-full h-full bg-gradient-to-b from-gray-300 to-gray-200 border border-gray-500"
        style={{
          transform: "translateZ(300px)"
        }}
      />

      {/* Box Back Face */}
      <div
        className="absolute w-full h-full bg-gradient-to-b from-gray-300 to-gray-200 border border-gray-500"
        style={{
          transform: "translateZ(0px)"
        }}
      />

      {/* Box Bottom */}
      <div
        className="absolute w-full bg-gradient-to-t from-gray-400 to-gray-300 border border-gray-500"
        style={{
          height: "300px",
          transform: "rotateX(90deg) translateZ(200px)"
        }}
      />

      {/* Box Lid - Opens upward from the top */}
      <motion.div
        className="absolute w-full bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-400 shadow-xl"
        style={{
          height: "300px",
          transformOrigin: "top center",
          transform: "rotateX(-90deg) translateZ(400px)"
        }}
        animate={{
          rotateX: isBoxOpen ? -180 : -90,
          z: isBoxOpen ? 100 : 0
        }}
        transition={ANIMATION_CONFIG.lidOpen}
      >
        {/* Premium lid interior */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/60" />
        <div className="absolute inset-6 border border-gray-300/30 rounded" />
      </motion.div>

      {/* Premium Sneaker - Emerges from top of box */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 150, scale: 0.7 }}
        animate={isBoxOpen ? { 
          opacity: 1, 
          y: -150, 
          scale: 1,
          rotateY: 15,
          rotateX: -10
        } : {}}
        transition={{
          duration: 2.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 2.2
        }}
      >
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-white/15 blur-3xl scale-150 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-200/20 to-white/10 blur-2xl scale-125 rounded-full" />
        
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
        transition={{ duration: 2.0, delay: 1.8 }}
      >
        {/* Warm interior glow from top */}
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-amber-100/30 via-white/10 to-transparent" />
        
        {/* Spotlight effect from lid opening */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32"
          animate={{
            background: isBoxOpen 
              ? "radial-gradient(ellipse at center top, rgba(255,255,255,0.25) 0%, rgba(255,220,150,0.15) 40%, transparent 80%)"
              : "transparent"
          }}
          transition={{ duration: 2.5, delay: 1.5 }}
        />
        
        {/* Box interior rim lighting */}
        <div className="absolute inset-2 border-2 border-white/8 rounded" />
      </motion.div>
    </motion.div>
  )
}
