"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel-clean"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showBadge, setShowBadge] = useState(false)
  const [placardOpen, setPlacardOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Ensure badge starts hidden
    setShowBadge(false)
    
    // Auto-open closet when user first arrives on the page
    setTimeout(() => {
      setPlacardOpen(true)
      setHasAutoOpened(true)
    }, 800) // Delay for dramatic entrance effect
    
    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)
      
      // Show badge only after user scrolls down significantly
      setShowBadge(newScrollY > 200)
      
      // Close closet when user starts scrolling
      if (newScrollY > 50 && hasAutoOpened) {
        setPlacardOpen(false)
      }
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    
    // Intersection Observer for reopening closet when user returns to hero
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && hasAutoOpened) {
            if (entry.isIntersecting && scrollY < 50) {
              // Reopen closet only if user scrolls back to top (near beginning)
              setPlacardOpen(true)
            }
          }
        })
      },
      {
        threshold: 0.6, // Trigger when 60% of hero section is visible
        rootMargin: "0px" // No margin for precise control
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
    
    // Initial scroll check in case page is already scrolled
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [hasAutoOpened, scrollY]) // Re-run when dependencies change

  const scrollToNext = () => {
    const nextSection = document.querySelector("#next-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const parallaxOffset = scrollY * 0.3

  // Carousel data for product showcase
  const carouselItems = [
    {
      src: "/fassiano-product-hero.png",
      title: "Heritage Black",
      category: "Premium Collection",
      content: <p className="text-sm text-white/80">Timeless elegance in premium black leather</p>
    },
    {
      src: "/fassiano-cultural-fusion.png", 
      title: "Cultural Fusion",
      category: "Heritage Series",
      content: <p className="text-sm text-white/80">Global traditions meet modern design</p>
    },
    {
      src: "/fassiano-executive-model.png",
      title: "Executive Elite",
      category: "Business Collection",
      content: <p className="text-sm text-white/80">Professional sophistication redefined</p>
    },
    {
      src: "/fassiano-minimalist-woman.png",
      title: "Pure Minimalist",
      category: "Clean Series",
      content: <p className="text-sm text-white/80">Understated luxury for the modern individual</p>
    }
  ]

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      <div className="relative h-screen flex flex-col">
        <Spotlight />

        {/* Cinematic Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black" />
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.15), transparent 50%)`
            }}
          />
          {/* Additional ambient lighting */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Closet Container with Opening Effect */}
        <div className="relative z-10 h-full flex items-center justify-center">
          
          {/* Premium Sneaker Box - Completely Opaque */}
          <motion.div
            className="absolute inset-0 z-20 bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: placardOpen ? 0 : 1 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeInOut",
              delay: placardOpen ? 3.0 : 0 // Fade out after complete unboxing
            }}
          >
            {/* Box Lid (Top) - Completely Solid */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-orange-600 via-orange-700 to-orange-800 border-b-4 border-orange-900 overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)"
              }}
              animate={{
                y: placardOpen ? "-100%" : "0%",
                rotateX: placardOpen ? -25 : 0,
                z: placardOpen ? 50 : 0
              }}
              transition={{
                duration: 3.5,
                ease: [0.16, 1, 0.3, 1],
                delay: placardOpen ? 0.5 : 0
              }}
            >
              {/* Premium Logo Design */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                {/* Main Logo */}
                <div className="mb-4">
                  <div className="text-white font-black text-4xl md:text-5xl tracking-wider drop-shadow-lg">
                    FASSIANO
                  </div>
                  <div className="text-orange-200 text-sm font-medium tracking-[0.3em] mt-1">
                    PREMIUM COLLECTION
                  </div>
                </div>
                
                {/* Logo Decorative Elements */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-0.5 bg-white/60"></div>
                  <div className="w-3 h-3 border-2 border-white/60 rotate-45"></div>
                  <div className="w-8 h-0.5 bg-white/60"></div>
                </div>
                
                {/* Product Info */}
                <div className="text-white/80 text-xs font-medium">
                  <div>HERITAGE • PREMIUM • GLOBAL</div>
                  <div className="mt-1 text-orange-200">EST. 2025</div>
                </div>
              </div>
              
              {/* Box Lid Texture & Details */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 opacity-60"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg"></div>
              <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-orange-800 to-orange-900 shadow-inner"></div>
              
              {/* Corner Details */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/30"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/30"></div>
            </motion.div>

            {/* Box Base (Bottom) - Completely Solid */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-orange-800 via-orange-700 to-orange-600 overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)"
              }}
              animate={{
                y: placardOpen ? "50%" : "0%"
              }}
              transition={{
                duration: 3.5,
                ease: [0.16, 1, 0.3, 1],
                delay: placardOpen ? 0.8 : 0
              }}
            >
              {/* Box Interior - Premium Lining */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-orange-300/30 to-orange-400/20 shadow-inner">
                <div className="absolute inset-x-4 top-2 h-8 bg-white/10 rounded-t-lg border-t border-white/20"></div>
              </div>
              
              {/* Box Bottom Details */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <div className="text-white/60 text-xs font-medium tracking-wider">
                  HANDCRAFTED EXCELLENCE
                </div>
                <div className="text-orange-200/60 text-[10px] mt-1">
                  MADE WITH PRECISION
                </div>
              </div>
              
              {/* Box Base Texture */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg"></div>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-orange-900 to-orange-800 shadow-inner"></div>
              
              {/* Corner Reinforcements */}
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-white/20"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/20"></div>
            </motion.div>


          </motion.div>

          {/* Dynamic Lighting System */}
          <motion.div
            className="absolute inset-0 z-10"
            animate={{
              opacity: placardOpen ? 1 : 0.3
            }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
          >
            {/* Box Interior Light (when closed) */}
            <motion.div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-radial from-orange-200/15 via-orange-100/8 to-transparent rounded-full blur-2xl"
              animate={{
                opacity: placardOpen ? 0 : 0.8,
                scale: placardOpen ? 0.3 : 1
              }}
              transition={{ 
                duration: 2.5, 
                ease: [0.25, 1, 0.5, 1],
                delay: placardOpen ? 0 : 0.5
              }}
            />
            
            {/* Unboxing Reveal Light (when open) */}
            <motion.div
              className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-red-500/25 to-orange-500/20 rounded-full blur-3xl"
              animate={{
                opacity: placardOpen ? 1 : 0,
                scale: placardOpen ? 1.2 : 0.3,
                y: placardOpen ? 0 : 100
              }}
              transition={{ 
                duration: 2.8, 
                ease: [0.25, 1, 0.5, 1], 
                delay: placardOpen ? 2.0 : 0 // Wait for unboxing to complete
              }}
            />
            
            {/* Ambient Fashion Lighting */}
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-purple-500/15 to-blue-500/10 rounded-full blur-2xl"
              animate={{
                opacity: placardOpen ? 0.6 : 0,
                scale: placardOpen ? 1 : 0.3,
                y: placardOpen ? 0 : 50
              }}
              transition={{ 
                duration: 2.0, 
                ease: [0.25, 1, 0.5, 1], 
                delay: placardOpen ? 2.0 : 0 // Final lighting effect
              }}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-8">
            
            {/* Left Content Column */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8 py-20 sm:py-24 lg:py-0">
            
            {/* Scroll-triggered Badge - Appears on scroll */}
            <AnimatePresence mode="wait">
              {showBadge && scrollY > 200 && (
                <motion.div 
                  initial={{ opacity: 0, y: -30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.1
                  }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full w-fit"
                >
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-400 rounded-full animate-pulse" />
                  <span className="text-red-100 font-medium text-xs sm:text-sm tracking-wide uppercase">Now Available</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Headline with Cinematic Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.85]">
                <motion.span 
                  className="block text-white drop-shadow-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  FASS
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  IANO
                </motion.span>
              </h1>
              
              <motion.h2 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white/90 leading-relaxed max-w-xl mt-4 sm:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Where heritage meets the future of footwear
              </motion.h2>
            </motion.div>

            {/* Pricing with Apple-style emphasis */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <p className="text-4xl lg:text-5xl font-semibold text-white">
                From <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">$299</span>
              </p>
              <p className="text-white/60 text-sm font-medium">Available for pre-order worldwide</p>
            </motion.div>

            {/* CTA Buttons with Apple-style design */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Button
                size="lg"
                className="px-12 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold text-lg rounded-full shadow-2xl shadow-red-500/25 transition-all duration-500 hover:scale-105 hover:shadow-red-500/40 border-0"
              >
                Pre-order Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-4 border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm font-semibold text-lg rounded-full transition-all duration-500 hover:border-white/40"
              >
                Explore Collection
              </Button>
            </motion.div>


          </div>

          {/* Right Content Column - Product Showcase */}
          <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 order-1 lg:order-2 pb-8 lg:pb-0">
            <motion.div
              className="relative w-full max-w-2xl"
              style={{ 
                transform: `translateY(${parallaxOffset}px) translateX(${scrollY * 0.1}px)` 
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              {/* Main Product Showcase */}
              <div className="relative">
                {/* Enhanced Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/15 rounded-full blur-3xl scale-150 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/15 to-transparent rounded-full blur-2xl scale-125" />
                
                <motion.img
                  src="/fassiano-product-hero.png"
                  alt="Fassiano Premium Sneaker"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full blur-xl"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-white/20 to-red-300/30 rounded-full blur-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>


            </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-3 text-white/60 hover:text-white transition-all duration-300 group"
          >
            <span className="text-xs font-medium uppercase tracking-wider opacity-80">Discover Collection</span>
            <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2 group-hover:border-white/40 transition-colors">
              <motion.div 
                className="w-1 h-2 bg-white/60 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="relative bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <motion.div 
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                <div className="w-6 h-6 bg-white/20 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Heritage</h3>
              <p className="text-white/60">Timeless craftsmanship meets modern innovation</p>
            </motion.div>

            <motion.div 
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium</h3>
              <p className="text-white/60">Luxury materials sourced from around the world</p>
            </motion.div>

            <motion.div 
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-white/30"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global</h3>
              <p className="text-white/60">Worldwide excellence in every step</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Apple Cards Carousel Section */}
      <div className="relative bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Explore the 
              <span className="block text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
                Collection
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Four distinct styles, each crafted with obsessive attention to detail and cultural heritage.
            </p>
          </motion.div>

          <AppleCardsCarousel items={carouselItems} initialScroll={0} />
        </div>
      </div>
    </section>
  )
}
