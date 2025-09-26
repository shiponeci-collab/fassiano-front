"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Microscope, Zap, Palette, Ruler, Star, Sparkles } from "lucide-react"

interface SpecCategory {
  title: string
  icon: React.ComponentType<any>
  image?: string
  specs: { label: string; value: string; highlight?: boolean }[]
}

export function TechnicalSpecsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const specCategories: SpecCategory[] = [
    {
      title: "Materials & Construction",
      icon: Microscope,
      image: "/materials/image.png",
      specs: [
        { label: "Upper Material", value: "Premium Italian Full-Grain Leather", highlight: true },
        { label: "Lining", value: "Moisture-Wicking Performance Textile" },
        { label: "Sole Technology", value: "Advanced EVA Composite with Carbon Fiber" },
        { label: "Reinforcement", value: "Triple-Stitched Seams with Kevlar Thread" },
        { label: "Water Resistance", value: "IPX4 Rated Protection" },
        { label: "Breathability Index", value: "95% Air Permeability" },
        { label: "Manufacturing", value: "Handcrafted in Morocco & Italy" }
      ]
    },
    {
      title: "Comfort & Performance",
      icon: Zap,
      image: "/materials/image-1.png",
      specs: [
        { label: "Cushioning System", value: "Adaptive Memory Foam Technology", highlight: true },
        { label: "Energy Return", value: "85% Efficiency Rating" },
        { label: "Arch Support", value: "Dynamic Response System" },
        { label: "Weight", value: "320g (Size 9)" },
        { label: "Break-in Period", value: "0 Days Required" },
        { label: "Durability Rating", value: "10,000+ Miles" },
        { label: "Temperature Range", value: "-10°C to 45°C" }
      ]
    },
    {
      title: "Design & Aesthetics",
      icon: Palette,
      image: "/materials/image-2.png",
      specs: [
        { label: "Design Heritage", value: "Moroccan Traditional Craftsmanship", highlight: true },
        { label: "Color Options", value: "12 Premium Variations" },
        { label: "Pattern Technology", value: "Hand-Carved Moroccan Motifs" },
        { label: "Logo Placement", value: "Subtle Embossed Branding" },
        { label: "Finish Options", value: "Matte, Satin, High-Gloss" },
        { label: "Customization", value: "Personal Monogramming Available" },
        { label: "Limited Editions", value: "Seasonal Exclusive Releases" }
      ]
    },
    {
      title: "Sizing & Fit",
      icon: Ruler,
      specs: [
        { label: "Size Range", value: "US 5-15 (Including Half Sizes)", highlight: true },
        { label: "Width Options", value: "Narrow, Standard, Wide" },
        { label: "Fit Technology", value: "3D Foot Mapping Compatible" },
        { label: "Adjustability", value: "Precision Lacing System" },
        { label: "Toe Box", value: "Anatomical Shape Design" },
        { label: "Heel Counter", value: "Ergonomic Support Structure" },
        { label: "Return Policy", value: "60-Day Perfect Fit Guarantee" }
      ]
    }
  ]

  return (
    <section id="specs" className="py-32 bg-gradient-to-b from-gray-900 via-slate-800 to-black relative overflow-hidden">
      {/* Apple-Style Dark Background Details */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Apple-style grid pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern id="apple-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="#6B7280" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#apple-grid)"/>
          </svg>
        </div>
        
        {/* Floating titanium particles */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-gray-400 rounded-full opacity-30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-1.5 h-1.5 bg-slate-300 rounded-full opacity-25"
          animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.25, 0.5, 0.25] }}  
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-gray-300 rounded-full opacity-20"
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        
        {/* Apple-style gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Titanium accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/80 to-slate-700/80 backdrop-blur-sm border border-gray-600/50 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-gray-300 animate-pulse" />
            <span className="text-gray-200 font-medium text-sm tracking-wide uppercase">Technical Excellence</span>
            <Sparkles className="w-4 h-4 text-gray-300 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Every Detail
            <span className="block text-transparent bg-gradient-to-r from-gray-300 via-slate-200 to-gray-400 bg-clip-text">
              Engineered to Perfection
            </span>
          </h2>
          
          {/* Apple-style decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-500"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-500"></div>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Where precision engineering meets premium materials - 
            every Fassiano sneaker represents the pinnacle of modern craftsmanship.
          </p>
        </motion.div>

        {/* Category Tabs - Apple Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {specCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 relative overflow-hidden ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-gray-700 to-slate-600 text-white shadow-xl shadow-gray-900/50 border border-gray-500/50'
                  : 'bg-gradient-to-r from-gray-800/50 to-slate-700/50 hover:from-gray-700/60 hover:to-slate-600/60 text-gray-300 border border-gray-600/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Apple-style inner glow */}
              {activeCategory === index && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 opacity-50"></div>
              )}
              
              <category.icon className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{category.title}</span>
              
              {/* Titanium accent for active tab */}
              {activeCategory === index && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-gray-400 to-slate-300 rounded-full"></div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Specifications Display */}
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Header with Material Image */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700/30 to-slate-600/30 rounded-2xl flex items-center justify-center border border-gray-600/50">
                    {React.createElement(specCategories[activeCategory].icon, { className: "w-8 h-8 text-gray-300" })}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {specCategories[activeCategory].title}
                  </h3>
                </div>
                
                {/* Apple-style description */}
                <div className="p-4 bg-gradient-to-br from-gray-800/60 to-slate-700/60 rounded-2xl border border-gray-600/30">
                  <p className="text-sm text-gray-300 font-medium">
                    "Engineered with precision and crafted for excellence"
                  </p>
                </div>
              </div>
              
              {/* Material Image */}
              {specCategories[activeCategory].image && (
                <motion.div
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-700/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={specCategories[activeCategory].image}
                    alt={`${specCategories[activeCategory].title} Materials`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                  
                  {/* Apple-style corner highlights */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-gray-400/60"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-gray-400/60"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-gray-400/60"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-gray-400/60"></div>
                  
                  {/* Titanium accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"></div>
                </motion.div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specCategories[activeCategory].specs.map((spec, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    spec.highlight
                      ? 'bg-gradient-to-br from-gray-800/60 to-slate-700/60 border-gray-600/60 shadow-lg'
                      : 'bg-gradient-to-br from-gray-800/30 to-slate-700/30 border-gray-700/40 hover:border-gray-600/60'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  {/* Apple-style highlight accent */}
                  {spec.highlight && (
                    <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                      <div className="absolute top-1 right-1 w-2 h-2 bg-gray-400 rounded-full opacity-60"></div>
                      <div className="absolute top-2 right-3 w-1 h-1 bg-slate-300 rounded-full opacity-40"></div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
                        {spec.label}
                        {spec.highlight && (
                          <Star className="w-3 h-3 text-gray-300 fill-current" />
                        )}
                      </div>
                      <div className={`font-semibold ${
                        spec.highlight ? 'text-gray-200' : 'text-gray-300'
                      }`}>
                        {spec.value}
                      </div>
                    </div>
                    {spec.highlight && (
                      <div className="w-3 h-3 bg-gradient-to-br from-gray-400 to-slate-500 rounded-full ml-3 mt-1 shadow-lg" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl border border-green-100">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Quality Certified</h4>
            <p className="text-black/70">ISO 9001 manufacturing standards with rigorous quality control.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Innovation First</h4>
            <p className="text-black/70">Cutting-edge technology integrated into traditional craftsmanship.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border border-orange-100">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Global Heritage</h4>
            <p className="text-black/70">Cultural design elements from seven traditional art forms worldwide.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="px-12 py-4 bg-black hover:bg-black/90 text-white font-semibold text-lg rounded-full shadow-2xl transition-all duration-500 hover:scale-105"
          >
            Download Full Specifications
          </Button>
          <p className="text-black/60 text-sm mt-4">Complete technical documentation available as PDF</p>
        </div>
      </div>
    </section>
  )
}
