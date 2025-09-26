"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function LeatherWear() {
  const wearPatterns = useMemo(() => {
    const patterns = []
    
    // Create leather crease lines
    for (let i = 0; i < 12; i++) {
      patterns.push({
        id: i,
        type: 'crease',
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        width: Math.random() * 80 + 40,
        height: Math.random() * 3 + 1,
        rotation: Math.random() * 45 - 22.5,
        opacity: Math.random() * 0.15 + 0.05,
        delay: Math.random() * 4
      })
    }
    
    // Create leather scuff marks
    for (let i = 12; i < 20; i++) {
      patterns.push({
        id: i,
        type: 'scuff',
        x: Math.random() * 85 + 5,
        y: Math.random() * 85 + 5,
        width: Math.random() * 25 + 15,
        height: Math.random() * 15 + 8,
        rotation: Math.random() * 180,
        opacity: Math.random() * 0.1 + 0.03,
        delay: Math.random() * 6
      })
    }
    
    // Create worn edges/patches
    for (let i = 20; i < 28; i++) {
      patterns.push({
        id: i,
        type: 'patch',
        x: Math.random() * 70 + 15,
        y: Math.random() * 70 + 15,
        size: Math.random() * 40 + 30,
        opacity: Math.random() * 0.08 + 0.02,
        delay: Math.random() * 8
      })
    }
    
    return patterns
  }, [])
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {wearPatterns.map((pattern) => {
        if (pattern.type === 'crease') {
          return (
            <motion.div
              key={pattern.id}
              className="absolute bg-gradient-to-r from-transparent via-black/30 to-transparent"
              style={{
                left: `${pattern.x}%`,
                top: `${pattern.y}%`,
                width: `${pattern.width}px`,
                height: `${pattern.height}px`,
                transform: `rotate(${pattern.rotation}deg)`,
                borderRadius: '1px',
                boxShadow: '0 0 2px rgba(0,0,0,0.2)'
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1, 0.9, 1],
                opacity: [0, pattern.opacity, pattern.opacity * 0.7, pattern.opacity]
              }}
              transition={{
                duration: 5,
                delay: pattern.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          )
        }
        
        if (pattern.type === 'scuff') {
          return (
            <motion.div
              key={pattern.id}
              className="absolute bg-gradient-to-br from-black/20 via-gray-800/15 to-transparent"
              style={{
                left: `${pattern.x}%`,
                top: `${pattern.y}%`,
                width: `${pattern.width}px`,
                height: `${pattern.height}px`,
                transform: `rotate(${pattern.rotation}deg)`,
                borderRadius: '2px',
                filter: 'blur(0.5px)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.1, 0.9, 1],
                opacity: [0, pattern.opacity, pattern.opacity * 0.6, pattern.opacity]
              }}
              transition={{
                duration: 6,
                delay: pattern.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          )
        }
        
        if (pattern.type === 'patch') {
          return (
            <motion.div
              key={pattern.id}
              className="absolute bg-gradient-radial from-white/5 via-gray-600/8 to-transparent rounded-full"
              style={{
                left: `${pattern.x}%`,
                top: `${pattern.y}%`,
                width: `${pattern.size}px`,
                height: `${pattern.size}px`,
                filter: 'blur(1px)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 0.8, 1],
                opacity: [0, pattern.opacity, pattern.opacity * 0.5, pattern.opacity]
              }}
              transition={{
                duration: 8,
                delay: pattern.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          )
        }
        
        return null
      })}
      
      {/* Leather edge highlights */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`edge-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-amber-800/10 to-transparent"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 60 + 30}px`,
              height: '1px',
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 1, 0.8, 1],
              opacity: [0, 0.4, 0.2, 0.4]
            }}
            transition={{
              duration: 7,
              delay: i * 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}
