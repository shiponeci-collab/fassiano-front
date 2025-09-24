"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Card {
  src: string
  title: string
  category: string
  content: React.ReactNode
}

interface AppleCardsCarouselProps {
  items: Card[]
  initialScroll?: number
}

export function AppleCardsCarousel({ items, initialScroll = 0 }: AppleCardsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (containerRef.current && initialScroll > 0) {
      containerRef.current.scrollLeft = initialScroll
    }
  }, [initialScroll])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto overscroll-x-auto py-10 md:py-20 px-6 gap-6 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar:none]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {items.map((item, index) => (
          <motion.div
            key={`${item.src}-${index}`}
            data-card
            className="relative h-80 w-72 md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-96 shrink-0 rounded-3xl overflow-hidden cursor-pointer group"
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.02, y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/80 transition-all duration-500" />
            
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <p className="text-white/90 text-xs font-medium uppercase tracking-wider">
                    {item.category}
                  </p>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <div className="text-white/80 text-sm md:text-base leading-relaxed">
                  {item.content}
                </div>

                {/* Call to action */}
                <motion.button
                  className="mt-4 inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Explore
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </motion.div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
        
        {/* Spacer for smooth scrolling */}
        <div className="w-20 shrink-0" />
      </div>

      {/* Scroll indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-300"
            onClick={() => {
              if (containerRef.current) {
                const cardWidth = 400 // Approximate card width
                containerRef.current.scrollTo({
                  left: cardWidth * index,
                  behavior: 'smooth'
                })
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}


