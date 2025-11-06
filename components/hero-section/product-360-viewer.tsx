"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"

export function Product360Viewer() {
  // 360° rotation with showcase images
  const totalFrames = 5 // 5 key showcase angles
  const showcaseImages = [
    "/fassiano-sneaker-product.png",
    "/fassiano-product-hero.png",
    "/fassiano-sneaker-product.png",
    "/fassiano-product-hero.png",
    "/fassiano-sneaker-product.png"
  ];
  
  const productImages = Array.from({ length: totalFrames }, (_, index) => {
    return {
      src: showcaseImages[index],
      rotation: (index * (360 / totalFrames)) % 360,
    };
  })

  const [currentFrame, setCurrentFrame] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(false) // Start with no auto rotation
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [velocity, setVelocity] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)
  const lastMouseX = useRef(0)
  const lastTime = useRef(0)
  
  // Motion values for smooth interactions
  const x = useMotionValue(0)
  const rotateY = useSpring(0, { stiffness: 100, damping: 20 })
  const scale = useSpring(1, { stiffness: 300, damping: 30 })

  // Auto rotation only when hovering
  useEffect(() => {
    if (isAutoRotating && isHovering && !isDragging) {
      autoRotateRef.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % totalFrames)
      }, 120) // Smooth rotation when hovering
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }
  }, [isAutoRotating, isDragging, isHovering, totalFrames])

  // Enhanced drag handling with momentum (Mouse + Touch)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setIsAutoRotating(false)
    lastMouseX.current = e.clientX
    lastTime.current = Date.now()
    setVelocity(0)
  }, [])

  // Touch support for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setIsAutoRotating(false)
    lastMouseX.current = e.touches[0].clientX
    lastTime.current = Date.now()
    setVelocity(0)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return

    const currentTime = Date.now()
    const deltaX = e.clientX - lastMouseX.current
    const deltaTime = currentTime - lastTime.current
    const currentVelocity = deltaTime > 0 ? deltaX / deltaTime : 0
    
    setVelocity(currentVelocity)
    
    const sensitivity = 50 // Slower, more controlled rotation
    const frameChange = Math.round(deltaX / sensitivity)

    if (frameChange !== 0) {
      setCurrentFrame((prev) => {
        let newFrame = prev + frameChange
        if (newFrame < 0) newFrame = totalFrames + newFrame
        if (newFrame >= totalFrames) newFrame = newFrame - totalFrames
        return newFrame
      })
      lastMouseX.current = e.clientX
      lastTime.current = currentTime
    }
  }, [isDragging, totalFrames])

  // Touch move support for mobile
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const currentTime = Date.now()
    const deltaX = e.touches[0].clientX - lastMouseX.current
    const deltaTime = currentTime - lastTime.current
    const currentVelocity = deltaTime > 0 ? deltaX / deltaTime : 0
    
    setVelocity(currentVelocity)
    
    const sensitivity = 60 // Slower for touch control
    const frameChange = Math.round(deltaX / sensitivity)

    if (frameChange !== 0) {
      setCurrentFrame((prev) => {
        let newFrame = prev + frameChange
        if (newFrame < 0) newFrame = totalFrames + newFrame
        if (newFrame >= totalFrames) newFrame = newFrame - totalFrames
        return newFrame
      })
      lastMouseX.current = e.touches[0].clientX
      lastTime.current = currentTime
    }
  }, [isDragging, totalFrames])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    
    // Add momentum after drag ends
    if (Math.abs(velocity) > 0.5) {
      let currentVel = velocity * 0.95 // Damping factor
      const momentumInterval = setInterval(() => {
        if (Math.abs(currentVel) < 0.1) {
          clearInterval(momentumInterval)
          setIsAutoRotating(true)
          return
        }
        
        const frameChange = Math.round(currentVel * 2)
        if (frameChange !== 0) {
          setCurrentFrame((prev) => {
            let newFrame = prev + frameChange
            if (newFrame < 0) newFrame = totalFrames + newFrame
            if (newFrame >= totalFrames) newFrame = newFrame - totalFrames
            return newFrame
          })
        }
        currentVel *= 0.95 // Reduce velocity
      }, 16) // 60fps
    } else {
      // Only resume auto rotation if still hovering
      if (isHovering) {
        setTimeout(() => setIsAutoRotating(true), 1000)
      }
    }
  }, [velocity, totalFrames])

  // Enhanced hover effects - Start rotation on hover
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
    setIsAutoRotating(true) // Start rotation when mouse enters
    scale.set(1.08) // Slightly larger scale
  }, [scale])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setIsAutoRotating(false) // Stop rotation when mouse leaves
    scale.set(1)
    if (!isDragging) {
      setIsDragging(false)
    }
  }, [isDragging, scale])

  // Safe access to current rotation with bounds checking
  const safeCurrentFrame = Math.max(0, Math.min(currentFrame, totalFrames - 1))
  const currentRotation = productImages[safeCurrentFrame]?.rotation || 0
  
  // Update motion values
  useEffect(() => {
    rotateY.set(currentRotation)
  }, [currentRotation, rotateY])

  return (
    <div className="relative group perspective-1000">
      {/* Enhanced 360° Product Container */}
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-lg select-none pt-8 sm:pt-12"
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          scale,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {/* Enhanced lighting effects */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          {/* Primary spotlight */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary accent light */}
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl"
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Main Product Image with enhanced effects */}
        <motion.div
          className="relative z-10"
          style={{ 
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="relative w-full" style={{ aspectRatio: '1/1', maxWidth: '600px', maxHeight: '600px', margin: '0 auto' }}>
            <motion.img
              src={productImages[safeCurrentFrame]?.src || "/fassiano-product-hero.png"}
              alt="FASSIANO Premium Sneaker - 360° View"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                filter: `drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(${isHovering ? 1.1 : 1}) contrast(${isHovering ? 1.05 : 1})`,
              }}
              animate={{
                filter: `drop-shadow(0 25px 50px rgba(0,0,0,0.${isHovering ? '4' : '3'})) brightness(${isHovering ? 1.1 : 1}) contrast(${isHovering ? 1.05 : 1})`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>



        {/* Fantastic Product Name Presentation - Responsive for all screens */}
        <motion.div
          className="absolute -top-8 sm:-top-12 md:-top-8 lg:-top-16 left-1/2 transform -translate-x-1/2 text-center pointer-events-none"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 1.2, type: "spring", bounce: 0.4 }}
        >
          {/* Glowing background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-600/30 to-red-500/20 rounded-full blur-xl scale-150"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1.2, 1.8, 1.2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main product name with effects */}
          <motion.h3 
            className="relative z-10 text-xl sm:text-2xl font-bold tracking-wider"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #ff4444 50%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 68, 68, 0.5)'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            X-RED
          </motion.h3>
          
          {/* Subtitle with premium feel */}
          <motion.p
            className="text-white/60 text-xs sm:text-sm font-light tracking-widest mt-1 uppercase"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Premium Edition
          </motion.p>
          
          {/* Animated underline */}
          <motion.div
            className="w-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mt-2 mx-auto"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>

        {/* Floating particles effect */}
        {isHovering && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full pointer-events-none"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [-10, -30, -10],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* 360° Interactive Indicator */}
      <motion.div
        className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        {/* 360° Icon and Text */}
        <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm font-medium mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
          <motion.div
            className="relative w-6 h-6 sm:w-8 sm:h-8 border border-white/40 rounded-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-xs sm:text-sm font-bold">360°</span>
            <motion.div
              className="absolute w-1 h-1 bg-red-400 rounded-full"
              style={{ top: 2, right: 2 }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Desktop: Drag to rotate | Mobile: Swipe to rotate */}
            <span className="hidden sm:inline">Drag to rotate</span>
            <span className="sm:hidden">Swipe to rotate</span>
          </motion.span>
        </div>

        {/* Animated arrows showing swipe direction */}
        <div className="flex items-center gap-1">
          <motion.div
            className="text-white/40 text-lg"
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ←
          </motion.div>
          <motion.div
            className="text-white/40 text-lg"
            animate={{ x: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle rotation speed indicator (when auto-rotating) */}
      <motion.div
        className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAutoRotating && !isDragging ? 0.3 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-white/60 to-transparent w-8"
          animate={{ x: [-32, 32] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  )
}
