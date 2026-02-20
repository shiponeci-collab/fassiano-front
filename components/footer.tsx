"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-20 py-16 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <span className="text-2xl sm:text-3xl font-bold tracking-[0.25em] text-white">FASSIANO</span>
            <p className="text-white/30 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-center md:text-left">Artisanal Excellence</p>
          </div>
          
          {/* Brand Promise Section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-3 bg-white/[0.03] border border-white/5 rounded-full px-5 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <span className="text-white/70 text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase">Made in Morocco</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Divider */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col items-center justify-center space-y-8">
          {/* Tagline Replaces Policy Links */}
          <div className="relative group cursor-default">
            <motion.p 
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-[9px] sm:text-[11px] tracking-[0.4em] uppercase text-white/40 text-center transition-all duration-300"
            >
              Where Heritage Meets Modern Design
            </motion.p>
            <div className="absolute -bottom-2 left-0 w-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-full transition-all duration-500" />
          </div>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-white/10 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-center">
              &copy; {currentYear} FASSIANO. Hand-numbered & Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
