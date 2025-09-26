"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Palette, Sparkles } from "lucide-react";

export function SneakerCustomizationSection() {
  const [selectedColor, setSelectedColor] = useState("midnight-black");
  const [selectedMaterial, setSelectedMaterial] = useState("premium-leather");

  const colorOptions = [
    {
      id: "midnight-black",
      name: "Midnight Black",
      color: "#0F0F0F",
      gradient: "from-gray-900 via-black to-gray-800",
    //   image: "/premium-black-futuristic-sneaker-with-glowing-acce.jpg",
      description: "Sophisticated and timeless"
    },
    {
      id: "pearl-white",
      name: "Pearl White",
      color: "#F8FAFC",
      gradient: "from-gray-100 via-white to-gray-50",
    //   image: "/white-minimalist-futuristic-sneaker-with-clean-lin.jpg",
      description: "Clean and modern",
      textColor: "text-gray-900"
    },
    {
      id: "gold-luxury",
      name: "Gold Luxury",
      color: "#D4AF37",
      gradient: "from-yellow-600 via-amber-500 to-yellow-400",
    //   image: "/gold-premium-futuristic-sneaker-with-luxury-finish.jpg",
      description: "Premium and exclusive"
    },
    {
      id: "space-edition",
      name: "Space Edition",
      color: "#4A5568",
      gradient: "from-gray-700 via-slate-600 to-gray-500",
    //   image: "/futuristic-premium-sneaker-floating-in-space-with-.jpg",
      description: "Futuristic and bold"
    },
    {
      id: "tech-noir",
      name: "Tech Noir",
      color: "#1A202C",
      gradient: "from-gray-900 via-slate-800 to-gray-700",
    //   image: "/futuristic-sneaker-3d-render-floating-dark-backgro.jpg",
      description: "Advanced and sleek"
    },
    {
      id: "signature-model",
      name: "Signature Model",
      color: "#2D3748",
      gradient: "from-blue-900 via-indigo-800 to-slate-700",
     image: "/futuristic-sneaker-3d-render-floating-dark-backgro.jpg",
      description: "Our flagship design"
    }
  ];

  const materialOptions = [
    {
      id: "premium-leather",
      name: "Premium Leather",
      description: "Hand-selected Italian leather",
      price: "+$0",
      texture: "Smooth grain"
    },
    {
      id: "carbon-fiber",
      name: "Carbon Fiber",
      description: "Aerospace-grade material",
      price: "+$150",
      texture: "Technical weave"
    },
    {
      id: "suede-finish",
      name: "Suede Finish",
      description: "Luxurious soft texture",
      price: "+$75",
      texture: "Brushed surface"
    }
  ];

  const currentColor = colorOptions.find(color => color.id === selectedColor);
  const currentMaterial = materialOptions.find(material => material.id === selectedMaterial);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-100/30 via-purple-50/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-orange-100/25 via-amber-50/15 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Palette className="w-4 h-4 text-black/60" />
            <span className="text-black/80 font-medium text-sm tracking-wide uppercase">Customization Studio</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Make It
            <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text">
              Uniquely Yours
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose from premium materials and colors to create your perfect sneaker
          </motion.p>
        </div>

        {/* Main Customization Interface */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Product Visualization */}
          <div className="relative">
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Dynamic Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentColor?.gradient} opacity-10`} />
              
              {/* Product Image */}
              <div className="relative z-10 flex items-center justify-center min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedColor}
                    src={currentColor?.image || "/fassiano-product-hero.png"}
                    alt={`Fassiano Sneaker in ${currentColor?.name}`}
                    className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.4 }
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Product Info Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-900">Your Design</span>
                </div>
                <div className="text-xs text-gray-600">
                  {currentColor?.name} • {currentMaterial?.name}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Customization Options */}
          <div className="space-y-12">
            
            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-black mb-2">Choose Your Color</h3>
              <p className="text-gray-600 mb-6">{currentColor?.description}</p>
              
              <div className="grid grid-cols-3 gap-4">
                {colorOptions.map((color) => (
                  <motion.button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                      selectedColor === color.id 
                        ? 'border-blue-500 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Color Circle */}
                    <div 
                      className="w-12 h-12 rounded-full mx-auto mb-3 shadow-md border-2 border-white/50"
                      style={{ backgroundColor: color.color }}
                    />
                    
                    {/* Color Name */}
                    <div className={`text-sm font-medium ${color.textColor || 'text-gray-900'}`}>
                      {color.name}
                    </div>
                    
                    {/* Selected Indicator */}
                    {selectedColor === color.id && (
                      <motion.div
                        className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Material Selection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-black mb-2">Select Material</h3>
              <p className="text-gray-600 mb-6">{currentMaterial?.description}</p>
              
              <div className="space-y-3">
                {materialOptions.map((material) => (
                  <motion.button
                    key={material.id}
                    onClick={() => setSelectedMaterial(material.id)}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                      selectedMaterial === material.id 
                        ? 'border-blue-500 bg-blue-50/50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-semibold text-gray-900">{material.name}</span>
                          <span className="text-sm text-blue-600 font-medium">{material.price}</span>
                        </div>
                        <div className="text-sm text-gray-600">{material.description}</div>
                        <div className="text-xs text-gray-500 mt-1">{material.texture}</div>
                      </div>
                      
                      {selectedMaterial === material.id && (
                        <motion.div
                          className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center ml-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Add to Cart Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className={`w-full py-4 px-8 bg-gradient-to-r ${currentColor?.gradient} text-white rounded-2xl font-semibold text-lg shadow-lg`}
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart - $399
              </motion.button>
              
              <p className="text-center text-sm text-gray-500 mt-3">
                Free shipping • 30-day returns • 2-year warranty
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
