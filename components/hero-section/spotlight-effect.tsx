"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function SpotlightEffect() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Predefined particle positions to avoid Math.random() hydration issues
  const particleData = [
    { right: 25, top: 30, duration: 5, delay: 0.2, moveX: [-25, -45], moveY: [-5, -15] },
    { right: 45, top: 50, duration: 6, delay: 0.8, moveX: [-30, -55], moveY: [5, 15] },
    { right: 35, top: 25, duration: 4.5, delay: 1.2, moveX: [-20, -40], moveY: [0, -10] },
    { right: 55, top: 60, duration: 7, delay: 0.5, moveX: [-35, -60], moveY: [10, 25] },
    { right: 30, top: 45, duration: 5.5, delay: 1.5, moveX: [-25, -50], moveY: [-8, 8] },
    { right: 50, top: 35, duration: 6.5, delay: 0.3, moveX: [-40, -65], moveY: [2, 18] },
    { right: 40, top: 55, duration: 4.8, delay: 1.8, moveX: [-22, -42], moveY: [-12, -2] },
    { right: 28, top: 40, duration: 5.8, delay: 0.7, moveX: [-28, -48], moveY: [8, 20] },
    { right: 48, top: 28, duration: 6.2, delay: 1.0, moveX: [-32, -58], moveY: [-6, 12] },
    { right: 38, top: 65, duration: 5.2, delay: 1.6, moveX: [-26, -46], moveY: [15, 30] },
    { right: 42, top: 38, duration: 6.8, delay: 0.4, moveX: [-38, -62], moveY: [-10, 5] },
    { right: 32, top: 52, duration: 4.2, delay: 1.3, moveX: [-24, -44], moveY: [3, 22] }
  ]

  useEffect(() => {
    setIsMounted(true)
    // Simulate page load completion
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Don't render on server to avoid hydration issues
  if (!isMounted) return null

  return (
    <>
      {/* Main Spotlight Beam */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Spotlight Cone Effect */}
        <motion.div
          className="absolute -top-20 -right-20 w-[800px] h-[800px]"
          style={{
            background: `conic-gradient(from 225deg at 90% 10%, 
              transparent 0deg, 
              rgba(255, 255, 255, 0.3) 30deg,
              rgba(255, 255, 255, 0.15) 45deg,
              rgba(255, 255, 255, 0.08) 60deg,
              rgba(255, 255, 255, 0.02) 90deg,
              transparent 120deg,
              transparent 360deg
            )`,
            clipPath: 'polygon(90% 10%, 40% 50%, 90% 90%, 100% 90%, 100% 10%)'
          }}
          initial={{ 
            opacity: 0,
            scale: 0.5,
            rotate: 15
          }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 0.5,
            rotate: isLoaded ? 0 : 15
          }}
          transition={{ 
            duration: 3,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.5
          }}
        />

        {/* Secondary Spotlight Layer for Depth */}
        <motion.div
          className="absolute -top-10 -right-10 w-[600px] h-[600px]"
          style={{
            background: `conic-gradient(from 225deg at 85% 15%, 
              transparent 0deg, 
              rgba(255, 255, 255, 0.2) 35deg,
              rgba(255, 255, 255, 0.1) 50deg,
              rgba(255, 255, 255, 0.04) 65deg,
              transparent 80deg,
              transparent 360deg
            )`,
            clipPath: 'polygon(85% 15%, 45% 55%, 85% 85%, 100% 85%, 100% 15%)'
          }}
          initial={{ 
            opacity: 0,
            scale: 0.7
          }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 0.7
          }}
          transition={{ 
            duration: 2.5,
            ease: "easeOut",
            delay: 1
          }}
        />

        {/* Ambient Light Scatter */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px]"
          style={{
            background: `radial-gradient(ellipse 200px 300px at center, 
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0.05) 40%,
              rgba(255, 255, 255, 0.02) 70%,
              transparent 100%
            )`,
            transform: 'rotate(-15deg)'
          }}
          initial={{ 
            opacity: 0,
            scale: 0.3
          }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 0.3
          }}
          transition={{ 
            duration: 4,
            ease: "easeOut",
            delay: 1.5
          }}
        />
      </motion.div>

      {/* Volumetric Light Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 3, delay: 2 }}
      >
        {/* Light Particles in the beam */}
        {particleData.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              right: `${particle.right}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
              x: [0, particle.moveX[0], particle.moveX[1]],
              y: [0, particle.moveY[0], particle.moveY[1]],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Floor Light Reflection */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-32"
        style={{
          background: `radial-gradient(ellipse 400px 80px at center, 
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            transparent 100%
          )`
        }}
        initial={{ 
          opacity: 0,
          scaleX: 0.5
        }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scaleX: isLoaded ? 1 : 0.5
        }}
        transition={{ 
          duration: 3,
          ease: "easeOut",
          delay: 2.5
        }}
      />

      {/* Subtle Room Atmosphere */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, 
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.7) 30%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.8) 100%
          )`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.3 : 0 }}
        transition={{ duration: 4, delay: 1 }}
      />
    </>
  )
}
