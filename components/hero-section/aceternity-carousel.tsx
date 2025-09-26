"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AceternityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const data = [
    {
      id: 1,
      category: "Traditional Heritage",
      title: "Timeless Elegance",
      src: "/image-1.png",
      gradient: "from-amber-900 via-orange-800 to-amber-700",
      description: "Where cultural heritage meets contemporary design. Handcrafted with premium materials.",
      features: ["Hand-selected premium materials", "Time-honored craftsmanship", "Cultural pattern details"]
    },
    {
      id: 2,
      category: "Executive Style",
      title: "Professional Excellence",
      src: "/image-2.png",
      gradient: "from-slate-900 via-gray-800 to-slate-700",
      description: "Sophisticated design that elevates your professional presence with premium comfort.",
      features: ["Corporate-appropriate styling", "All-day comfort technology", "Premium leather construction"]
    },
    {
      id: 3,
      category: "Modern Minimalist",
      title: "Clean Innovation",
      src: "/image-3.png",
      gradient: "from-gray-900 via-black to-gray-800",
      description: "Pure lines and contemporary aesthetics. Minimalism meets maximum comfort.",
      features: ["Clean, uncluttered design", "Premium material focus", "Functional beauty"]
    },
    {
      id: 4,
      category: "Cultural Fusion",
      title: "Global Inspiration",
      src: "/image-4.png",
      gradient: "from-blue-900 via-indigo-800 to-blue-700",
      description: "Celebrating diversity through design. Traditional craftsmanship with modern innovation.",
      features: ["International design influences", "Multicultural craftsmanship", "Traditional pattern integration"]
    },
    {
      id: 5,
      category: "Business Collection",
      title: "Corporate Comfort",
      src: "/image-5.png",
      gradient: "from-purple-900 via-violet-800 to-purple-700",
      description: "Perfect for the modern professional. Comfort meets corporate sophistication.",
      features: ["Professional appearance", "Extended wear comfort", "Versatile styling options"]
    },
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Full-Page Card Container */}
      <div className="relative w-full h-screen flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full max-w-6xl h-full max-h-[90vh] bg-gradient-to-br shadow-2xl"
            style={{
              background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              borderRadius: '1.5rem',
              overflow: 'hidden'
            }}
            initial={{ 
              opacity: 0,
              borderRadius: '1.5rem'
            }}
            animate={{ 
              opacity: 1,
              borderRadius: '1.5rem'
            }}
            exit={{ 
              opacity: 0,
              borderRadius: '1.5rem'
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            {/* Card Background with Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${data[currentIndex].gradient} opacity-90`} />
            
            {/* Card Content */}
            <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-12">
              
              {/* Left Side - Content */}
              <div className="flex flex-col justify-center space-y-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <p className="text-white/70 text-sm font-medium tracking-wider uppercase mb-4">
                    {data[currentIndex].category}
                  </p>
                  <h1 
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                  >
                    {data[currentIndex].title}
                  </h1>
                  <p 
                    className="text-xl text-white/90 leading-relaxed mb-8"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                  >
                    {data[currentIndex].description}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {data[currentIndex].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span 
                        className="text-white/80"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <motion.button
                    className="px-12 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium transition-all duration-300"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Collection
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Side - Image */}
              <div className="flex items-center justify-center h-full">
                <motion.div
                  className={`relative w-full overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm shadow-2xl flex items-center justify-center ${
                    [2, 5].includes(data[currentIndex].id) 
                      ? 'max-w-2xl h-[500px]' 
                      : [1].includes(data[currentIndex].id)
                      ? 'max-w-xl h-full'
                      : 'max-w-sm'
                  }`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.9, 
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{
                    aspectRatio: [2, 5].includes(data[currentIndex].id) ? 'auto' : [1].includes(data[currentIndex].id) ? 'auto' : '1/1'
                  }}
                >
                  <motion.img
                    src={data[currentIndex].src}
                    alt={data[currentIndex].title}
                    className={`w-full rounded-3xl drop-shadow-2xl ${
                      [2, 5].includes(data[currentIndex].id) 
                        ? 'h-auto object-contain' 
                        : [1].includes(data[currentIndex].id)
                        ? 'h-full object-cover object-center'
                        : 'h-full object-cover'
                    }`}
                    style={{ 
                      borderRadius: '1.5rem',
                      maxHeight: [2, 5].includes(data[currentIndex].id) ? '100%' : 'auto',
                      width: [2, 5].includes(data[currentIndex].id) ? '100%' : 'auto'
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay gradient (only for square images) */}
                  {![1, 2, 5].includes(data[currentIndex].id) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
                  )}
                  
                  {/* Border */}
                  <div className="absolute inset-0 border-2 border-white/10 rounded-3xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        {/* Dots */}
        <div className="flex space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <motion.button
        onClick={prevCard}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft 
          size={20} 
          className="transition-transform duration-200 group-hover:-translate-x-0.5" 
        />
      </motion.button>
      <motion.button
        onClick={nextCard}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight 
          size={20} 
          className="transition-transform duration-200 group-hover:translate-x-0.5" 
        />
      </motion.button>

      {/* Progress Bar */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden z-20">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
