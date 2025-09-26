"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function LeatherTexture() {
  // Generate random leather texture elements
  const leatherDetails = useMemo(() => {
    const details = []
    
    // Create leather pores/grain points
    for (let i = 0; i < 150; i++) {
      details.push({
        id: i,
        type: 'pore',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1, // 1-4px
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
        delay: Math.random() * 5
      })
    }
    
    // Create leather creases/lines
    for (let i = 150; i < 200; i++) {
      details.push({
        id: i,
        type: 'crease',
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: Math.random() * 20 + 10, // 10-30px
        height: Math.random() * 2 + 1, // 1-3px
        rotation: Math.random() * 180,
        opacity: Math.random() * 0.2 + 0.05, // 0.05-0.25
        delay: Math.random() * 8
      })
    }
    
    // Create small leather bumps/imperfections
    for (let i = 200; i < 280; i++) {
      details.push({
        id: i,
        type: 'bump',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2, // 2-6px
        opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2
        delay: Math.random() * 6
      })
    }
    
    // Create leather fiber lines
    for (let i = 280; i < 320; i++) {
      details.push({
        id: i,
        type: 'fiber',
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: Math.random() * 15 + 5, // 5-20px
        height: 0.5,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.1 + 0.02, // 0.02-0.12
        delay: Math.random() * 10
      })
    }
    
    return details
  }, [])
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leatherDetails.map((detail) => {
        if (detail.type === 'pore') {
          return (
            <motion.div
              key={detail.id}
              className="absolute rounded-full bg-black/40"
              style={{
                left: `${detail.x}%`,
                top: `${detail.y}%`,
                width: `${detail.size}px`,
                height: `${detail.size}px`,
                opacity: detail.opacity,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0.8, 1],
                opacity: [0, detail.opacity, detail.opacity * 0.7, detail.opacity]
              }}
              transition={{
                duration: 3,
                delay: detail.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          )
        }
        
        if (detail.type === 'crease') {
          return (
            <motion.div
              key={detail.id}
              className="absolute bg-black/30"
              style={{
                left: `${detail.x}%`,
                top: `${detail.y}%`,
                width: `${detail.width}px`,
                height: `${detail.height}px`,
                transform: `rotate(${detail.rotation}deg)`,
                opacity: detail.opacity,
                borderRadius: '1px'
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1, 0.9, 1],
                opacity: [0, detail.opacity, detail.opacity * 0.8, detail.opacity]
              }}
              transition={{
                duration: 4,
                delay: detail.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          )
        }
        
        if (detail.type === 'bump') {
          return (
            <motion.div
              key={detail.id}
              className="absolute rounded-full bg-white/10"
              style={{
                left: `${detail.x}%`,
                top: `${detail.y}%`,
                width: `${detail.size}px`,
                height: `${detail.size}px`,
                opacity: detail.opacity,
                boxShadow: '0 0 2px rgba(0,0,0,0.3)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 0.9, 1],
                opacity: [0, detail.opacity, detail.opacity * 0.6, detail.opacity]
              }}
              transition={{
                duration: 5,
                delay: detail.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          )
        }
        
        if (detail.type === 'fiber') {
          return (
            <motion.div
              key={detail.id}
              className="absolute bg-white/5"
              style={{
                left: `${detail.x}%`,
                top: `${detail.y}%`,
                width: `${detail.width}px`,
                height: `${detail.height}px`,
                transform: `rotate(${detail.rotation}deg)`,
                opacity: detail.opacity,
                borderRadius: '0.5px'
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1, 0.7, 1],
                opacity: [0, detail.opacity, detail.opacity * 0.5, detail.opacity]
              }}
              transition={{
                duration: 6,
                delay: detail.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          )
        }
        
        return null
      })}
      
      {/* Additional organic leather patterns */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`pattern-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0.05, 0.1],
              scale: [0, 1, 0.9, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {/* Organic leather cell pattern */}
            <div className="w-full h-full border border-black/20 rounded-full bg-black/10" />
            <div className="absolute inset-1 border border-white/5 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
