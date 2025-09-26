"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { useRef, useState } from "react"

interface CardData {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  gradient: string
}

export function AppleCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const cards: CardData[] = [
    {
      id: 1,
      title: "Traditional Heritage",
      subtitle: "Timeless Elegance",
      description: "Where cultural heritage meets contemporary design. Handcrafted with premium materials.",
      image: "/fassiano-women-traditional.png",
      gradient: "from-amber-900/20 via-orange-800/10 to-amber-700/20"
    },
    {
      id: 2,
      title: "Executive Style",
      subtitle: "Professional Excellence",
      description: "Sophisticated design that elevates your professional presence with premium comfort.",
      image: "/fassiano-executive-model.png",
      gradient: "from-slate-900/20 via-gray-800/10 to-slate-700/20"
    },
    {
      id: 3,
      title: "Modern Minimalist",
      subtitle: "Clean Innovation",
      description: "Pure lines and contemporary aesthetics. Minimalism meets maximum comfort.",
      image: "/fassiano-modern-minimalist.png",
      gradient: "from-gray-900/20 via-black/10 to-gray-800/20"
    },
    {
      id: 4,
      title: "Cultural Fusion",
      subtitle: "Global Inspiration",
      description: "Celebrating diversity through design. Traditional craftsmanship with modern innovation.",
      image: "/fassiano-cultural-fusion.png",
      gradient: "from-blue-900/20 via-indigo-800/10 to-blue-700/20"
    },
    {
      id: 5,
      title: "Business Collection",
      subtitle: "Corporate Comfort",
      description: "Perfect for the modern professional. Comfort meets corporate sophistication.",
      image: "/fassiano-business-woman-updated.png",
      gradient: "from-purple-900/20 via-violet-800/10 to-purple-700/20"
    }
  ]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <div className="relative py-16">
      {/* Cards Container */}
      <div className="relative flex justify-center items-center min-h-[600px] overflow-hidden">
        <div className="flex gap-6 px-6">
          {cards.map((card, index) => {
            const offset = index - currentIndex
            const isActive = index === currentIndex
            
            return (
              <Card 
                key={card.id} 
                card={card} 
                offset={offset}
                isActive={isActive}
                onClick={() => setCurrentIndex(index)}
              />
            )
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevCard}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        ←
      </button>
      <button
        onClick={nextCard}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        →
      </button>
    </div>
  )
}

interface CardProps {
  card: CardData
  offset: number
  isActive: boolean
  onClick: () => void
}

function Card({ card, offset, isActive, onClick }: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative h-[500px] w-[350px] flex-shrink-0 cursor-pointer"
      onClick={onClick}
      animate={{
        x: offset * 100,
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.6,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Background */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} backdrop-blur-xl border border-white/10`}
        animate={{
          boxShadow: isHovered 
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
            : "0 10px 25px -3px rgba(0, 0, 0, 0.4)"
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex h-full flex-col p-8">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <motion.div
            className="relative w-full h-64 rounded-2xl overflow-hidden"
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <div>
            <motion.p 
              className="text-white/60 text-sm font-medium tracking-wider uppercase"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            >
              {card.subtitle}
            </motion.p>
            <motion.h3 
              className="text-white text-2xl font-bold mt-2"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            >
              {card.title}
            </motion.h3>
          </div>
          
          <motion.p 
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          >
            {card.description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium transition-all duration-300"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Collection
          </motion.button>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
    </motion.div>
  )
}
