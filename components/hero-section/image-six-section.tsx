"use client"

import { motion } from "framer-motion"

export function ImageSixSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Hero Section Style Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Premium lighting effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/8 via-white/3 to-transparent rounded-full blur-[120px]"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-gray-200/6 via-gray-300/2 to-transparent rounded-full blur-[100px]"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1.1, 0.9, 1.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center min-h-screen w-full">
          
          {/* Large Full-Width Image Card */}
          <motion.div
            className="relative w-full max-w-6xl h-[85vh]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Large Card Container with Rounded Corners */}
            <motion.div
              className="relative w-full h-full bg-gradient-to-br from-white/8 via-gray-900/15 to-white/8 backdrop-blur-sm border border-white/15 rounded-3xl p-6 overflow-hidden shadow-2xl"
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 35px 80px rgba(0, 0, 0, 0.5)"
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Premium glow effects inside card */}
              <motion.div 
                className="absolute inset-0 bg-gradient-radial from-blue-900/25 via-purple-800/12 to-transparent rounded-3xl blur-[100px]"
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-radial from-white/12 via-gray-200/6 to-transparent rounded-3xl blur-[80px]"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1.2, 0.8, 1.2]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              />
              
              {/* Large Image Container with Perfect Rounded Corners */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl bg-white/5">
                <motion.img
                  src="/image-6.png"
                  alt="Fassiano Premium Innovation"
                  className="w-full h-full object-cover rounded-2xl drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.5 }
                  }}
                />
              </div>
              
              {/* Floating accent elements inside card */}
              <motion.div 
                className="absolute top-6 right-6 w-4 h-4 bg-gradient-radial from-blue-400/70 to-transparent rounded-full blur-sm"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-radial from-purple-400/60 to-transparent rounded-full blur-sm"
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1.4, 0.6, 1.4]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>
            </motion.div>
          </div>
          
        </div>
    </section>
  )
}
