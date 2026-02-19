"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { NotifyMeForm } from "./notify-me-form"

const COLLECTION = [
  {
    id: "majestic",
    name: "MAJESTIC",
    category: "Signature Series",
    description: "The ultimate expression of luxury and artisanal mastery. Handcrafted with gold-toned accents and premium heritage leather.",
    image: "/majestic/Artboard 7.jpg",
    accent: "from-amber-200 via-yellow-400 to-orange-500",
    bgGradient: "from-amber-950/20 to-black",
    price: "1290 MAD"
  },
  {
    id: "x-red",
    name: "X-RED",
    category: "Artisan Edition",
    description: "Crimson heritage leather with a bold artisan glow. A statement of confidence and traditional craftsmanship.",
    image: "/x-red/Artboard 25.jpg",
    accent: "from-rose-200 via-red-300 to-amber-300",
    bgGradient: "from-red-950/20 to-black",
    price: "790 MAD"
  },
  {
    id: "x-black",
    name: "X-BLACK",
    category: "Heritage Noir",
    description: "Stealth heritage leather with deep noir finish. Timeless elegance for the modern minimalist.",
    image: "/x-black/Artboard 1.jpg",
    accent: "from-zinc-100 via-zinc-300 to-zinc-500",
    bgGradient: "from-zinc-900/20 to-black",
    price: "790 MAD"
  }
]

export function ProductCollectionSection() {
  const [selectedModel, setSelectedModel] = useState<"x-red" | "x-black" | "majestic" | null>(null)
  
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.4em] font-medium"
          >
            Artisanal Excellence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif" }}
          >
            The Collection
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-8" 
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {COLLECTION.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative"
            >
              <div className={`relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-b ${product.bgGradient} border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]`}>
                {/* Image overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                
                {/* Product Image */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-8 sm:p-10 flex flex-col items-start space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">
                      {product.category}
                    </span>
                    <h3 className={`text-2xl sm:text-3xl font-semibold mt-1 bg-gradient-to-r ${product.accent} bg-clip-text text-transparent`}>
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-white/70 text-sm font-light leading-relaxed line-clamp-2 sm:line-clamp-none opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {product.description}
                  </p>

                  <div className="w-full pt-4 flex items-center justify-between opacity-0 translate-y-4 transition-all duration-500 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-white font-medium">{product.price}</span>
                    <button
                      onClick={() => setSelectedModel(product.id as any)}
                      className="px-6 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-zinc-200 active:scale-95"
                    >
                      Pre-order
                    </button>
                  </div>
                </div>

                {/* Glass effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-white z-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedModel && (
        <NotifyMeForm
          isOpen={!!selectedModel}
          onClose={() => setSelectedModel(null)}
          selectedModel={selectedModel}
        />
      )}
    </section>
  )
}
