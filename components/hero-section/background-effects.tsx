"use client"

import { motion } from "framer-motion"

export function BackgroundEffects() {
  return (
    <>
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-gray-900/20 to-black/90" />
      
      {/* Premium ambient lighting - Multiple layers for smoothness */}
      <motion.div 
        className="absolute top-1/5 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-white/8 via-gray-300/4 to-transparent rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-white/6 via-gray-200/3 to-transparent rounded-full blur-[80px]"
        animate={{ 
          scale: [1.2, 0.8, 1.2],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-white/5 via-gray-400/2 to-transparent rounded-full blur-[100px]"
        animate={{ 
          scale: [0.9, 1.4, 0.9],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 25, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Additional subtle layers for depth */}
      <motion.div 
        className="absolute top-2/3 right-1/5 w-[350px] h-[350px] bg-gradient-radial from-white/4 via-gray-300/2 to-transparent rounded-full blur-[60px]"
        animate={{ 
          scale: [1.1, 0.7, 1.1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Smooth overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      
      {/* Premium vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-black/20" />
      
      {/* Ultra-subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-gradient-to-br from-white via-gray-300 to-white mix-blend-soft-light pointer-events-none" />
    </>
  )
}
