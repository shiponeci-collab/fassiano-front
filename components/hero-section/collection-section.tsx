"use client"

import { motion } from "framer-motion"
import { COLLECTION_ITEMS } from "./constants"
import { LeatherTexture } from "./leather-texture"
import { LeatherStitching } from "./leather-stitching"
import { LeatherWear } from "./leather-wear"

export function CollectionSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-32 overflow-hidden">
      {/* Detailed Leather Texture with actual elements */}
      <LeatherTexture />
      <LeatherStitching />
      <LeatherWear />
      
      {/* Enhanced leather background with subtle lighting */}
      <div className="absolute inset-0">
        {/* Base leather color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-800/90" />
        
        {/* Ambient lighting for depth */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-amber-900/8 via-amber-800/4 to-transparent rounded-full blur-[120px]"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-radial from-orange-900/6 via-orange-800/3 to-transparent rounded-full blur-[100px]"
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Collection Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTION_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative bg-gradient-to-b from-black/40 via-gray-900/30 to-black/60 backdrop-blur-sm border border-amber-900/20 rounded-2xl p-6 hover:border-amber-800/40 hover:bg-gradient-to-b hover:from-black/50 hover:via-gray-900/40 hover:to-black/70 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Product Info */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-white/40 text-xs uppercase tracking-wider">
                    {item.category}
                  </p>
                  <h3 className="text-white text-lg font-medium">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Action Button */}
                <motion.button
                  className="w-full mt-4 py-2 text-white/70 text-sm border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Collection Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-amber-900/15 via-orange-900/10 to-amber-900/15 backdrop-blur-sm border border-amber-800/30 text-white rounded-full font-medium tracking-wide overflow-hidden hover:border-amber-700/50"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(217, 119, 6, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View Complete Collection</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-800/20 via-orange-700/15 to-amber-800/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
