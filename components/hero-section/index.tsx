"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react"
import { HeroContent } from "./hero-content"
import { Spotlight } from "../ui/spotlight-new"
export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoEnded, setVideoEnded] = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      setVideoEnded(true)
      // Title stays fixed - no replay
    }

    video.addEventListener('ended', handleVideoEnd)
    return () => video.removeEventListener('ended', handleVideoEnd)
  }, [])

  return (
    <>
      {/* Main Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-black text-white overflow-hidden"
      >
        {/* Full-screen Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        
        {/* Red Spotlight Effect - Left Side Only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
          <Spotlight 
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 85%, 70%, .12) 0, hsla(0, 85%, 60%, .04) 50%, hsla(0, 85%, 50%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 85%, 70%, .08) 0, hsla(0, 85%, 60%, .03) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 85%, 70%, .06) 0, hsla(0, 85%, 50%, .02) 80%, transparent 100%)"
          />
          {/* Clean spotlight on product area - original colors */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-30 scale-75">
            <Spotlight />
          </div>
        </div>
        
        {/* Hero Content Layout - Mobile-First Responsive */}
        <div className="relative z-10 h-full pt-16 md:pt-20 pb-8 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)]">
              
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                <HeroContent />
              </div>
              
              {/* Right Side - Premium Product Showcase */}
              <div className="flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0 mt-8 sm:mt-12 md:mt-16 lg:mt-0">
                {/* X-BLACK Title and PREMIUM EDITION - Shows after video ends */}
                {videoEnded && (
                  <motion.div
                    className="relative text-center pointer-events-none"
                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
                  >
                  {/* Main product name - Clean Apple style */}
                  <motion.h3 
                    className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                  >
                    X-RED
                  </motion.h3>
                  
                  {/* Subtitle - Clean and minimal */}
                  <motion.p
                    className="text-white/50 text-xs sm:text-sm md:text-base font-light tracking-wider mt-2 uppercase"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Premium Edition
                  </motion.p>

                  {/* Eye Icon - View Products */}
                  <motion.button
                    className="pointer-events-auto mt-6 flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    onClick={() => setShowProducts(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-6 h-6" />
                    <span className="text-sm font-light">View Product</span>
                  </motion.button>
                </motion.div>
                )}

                {/* Product Images Modal */}
                {showProducts && (
                  <motion.div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setShowProducts(false)}
                  >
                    <motion.div
                      className="relative max-w-6xl w-full"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close Button */}
                      <button
                        className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors cursor-pointer"
                        onClick={() => setShowProducts(false)}
                      >
                        <X className="w-8 h-8" />
                      </button>

                      {/* Product Images Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <motion.div
                            key={num}
                            className="aspect-square rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * num }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImage(num)}
                          >
                            <img
                              src={`/product-${num}.jpg`}
                              alt={`Product View ${num}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Zoomed Image View */}
                {selectedImage !== null && (
                  <motion.div
                    className="fixed inset-0 z-[60] bg-black/98 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedImage(null)}
                  >
                    <motion.div
                      className="relative max-w-2xl max-h-[70vh] w-full mx-auto"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close Button */}
                      <button
                        className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                      >
                        <X className="w-7 h-7" />
                      </button>

                      {/* Navigation Arrows */}
                      {selectedImage > 1 && (
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors bg-black/40 hover:bg-black/60 p-2 rounded-full cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImage(selectedImage - 1)
                          }}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                      )}

                      {selectedImage < 5 && (
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors bg-black/40 hover:bg-black/60 p-2 rounded-full cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImage(selectedImage + 1)
                          }}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}

                      {/* Large Image */}
                      <img
                        src={`/product-${selectedImage}.jpg`}
                        alt={`Product View ${selectedImage}`}
                        className="w-full h-full object-contain rounded-lg"
                      />

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full">
                        {selectedImage} / 5
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
              
            </div>
          </div>
          
          {/* Made in Morocco - Always Right Side */}
          <motion.div 
            className="absolute bottom-4 right-4 sm:right-6 lg:right-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-white/70 text-xs sm:text-sm font-normal tracking-wide uppercase" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
                Made in Morocco
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIDDEN SUB-SECTIONS - Comment out to show only main hero */}
      {/* 
      Traditional Section - Aceternity Carousel
      <TraditionalSection />

      Book Timeline Section - Brand History
      <BookTimelineSection />

      Image Six Section - Premium Innovation
      <ImageSixSection />
      */}
    </>
  )
}
