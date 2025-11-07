"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface GlobalLocation {
  id: string
  city: string
  country: string
  continent: string
  status: 'available' | 'coming-soon' | 'waitlist'
  launchDate?: string
  coordinates: { x: number; y: number }
  timezone: string
  flagship?: boolean
  stores: number
}

export function EnhancedGlobalAvailability() {
  const [selectedLocation, setSelectedLocation] = useState<GlobalLocation | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const locations: GlobalLocation[] = [
    {
      id: 'nyc',
      city: 'New York',
      country: 'United States',
      continent: 'North America',
      status: 'available',
      coordinates: { x: 20, y: 35 },
      timezone: 'America/New_York',
      flagship: true,
      stores: 3
    },
    {
      id: 'london',
      city: 'London',
      country: 'United Kingdom',
      continent: 'Europe',
      status: 'available',
      coordinates: { x: 50, y: 30 },
      timezone: 'Europe/London',
      flagship: true,
      stores: 2
    },
    {
      id: 'tokyo',
      city: 'Tokyo',
      country: 'Japan',
      continent: 'Asia',
      status: 'available',
      coordinates: { x: 85, y: 38 },
      timezone: 'Asia/Tokyo',
      flagship: true,
      stores: 4
    },
    {
      id: 'paris',
      city: 'Paris',
      country: 'France',
      continent: 'Europe',
      status: 'available',
      coordinates: { x: 52, y: 32 },
      timezone: 'Europe/Paris',
      stores: 1
    },
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'UAE',
      continent: 'Asia',
      status: 'coming-soon',
      launchDate: '2024-Q2',
      coordinates: { x: 65, y: 42 },
      timezone: 'Asia/Dubai',
      flagship: true,
      stores: 0
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'Singapore',
      continent: 'Asia',
      status: 'coming-soon',
      launchDate: '2024-Q3',
      coordinates: { x: 80, y: 55 },
      timezone: 'Asia/Singapore',
      stores: 0
    },
    {
      id: 'sydney',
      city: 'Sydney',
      country: 'Australia',
      continent: 'Oceania',
      status: 'waitlist',
      launchDate: '2024-Q4',
      coordinates: { x: 88, y: 75 },
      timezone: 'Australia/Sydney',
      stores: 0
    },
    {
      id: 'sao-paulo',
      city: 'São Paulo',
      country: 'Brazil',
      continent: 'South America',
      status: 'waitlist',
      launchDate: '2025-Q1',
      coordinates: { x: 30, y: 70 },
      timezone: 'America/Sao_Paulo',
      stores: 0
    }
  ]

  const availableLocations = locations.filter(loc => loc.status === 'available')
  const comingSoonLocations = locations.filter(loc => loc.status === 'coming-soon')
  const waitlistLocations = locations.filter(loc => loc.status === 'waitlist')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2)
      
      animationFrame += 0.01

      // Draw connections between available locations
      availableLocations.forEach((loc1, i) => {
        availableLocations.slice(i + 1).forEach(loc2 => {
          const x1 = (loc1.coordinates.x / 100) * (canvas.width / 2)
          const y1 = (loc1.coordinates.y / 100) * (canvas.height / 2)
          const x2 = (loc2.coordinates.x / 100) * (canvas.width / 2)
          const y2 = (loc2.coordinates.y / 100) * (canvas.height / 2)

          // Animated connection line
          const pulse = Math.sin(animationFrame * 2) * 0.3 + 0.7
          
          const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
          gradient.addColorStop(0, `rgba(239, 68, 68, ${pulse * 0.3})`)
          gradient.addColorStop(0.5, `rgba(249, 115, 22, ${pulse * 0.5})`)
          gradient.addColorStop(1, `rgba(239, 68, 68, ${pulse * 0.3})`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1
          ctx.setLineDash([5, 10])
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()
          ctx.setLineDash([])
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [availableLocations])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500'
      case 'coming-soon': return 'bg-orange-500'
      case 'waitlist': return 'bg-gray-400'
      default: return 'bg-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available Now'
      case 'coming-soon': return 'Coming Soon'
      case 'waitlist': return 'Join Waitlist'
      default: return 'Status Unknown'
    }
  }

  return (
    <section id="global" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white/80 font-medium text-sm tracking-wide uppercase">Global Expansion</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Available
            <span className="block text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text">
              Worldwide
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Experience Fassiano in flagship stores across major cities, with more locations launching every quarter.
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <canvas 
              ref={canvasRef} 
              className="w-full h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30" 
            />
            
            {/* Location Markers */}
            {locations.map((location) => (
              <motion.button
                key={location.id}
                className={`absolute w-4 h-4 rounded-full border-2 border-white/30 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${getStatusColor(location.status)} shadow-lg`}
                style={{
                  left: `${location.coordinates.x}%`,
                  top: `${location.coordinates.y}%`,
                }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredLocation(location.id)}
                onHoverEnd={() => setHoveredLocation(null)}
                onClick={() => setSelectedLocation(location)}
              >
                {location.flagship && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full" />
                )}
                
                {hoveredLocation === location.id && (
                  <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-xl p-3 min-w-48 z-20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <h4 className="text-white font-semibold text-sm mb-1">{location.city}</h4>
                    <p className="text-white/70 text-xs mb-2">{location.country}</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(location.status)}`} />
                      <span className="text-white/80 text-xs">{getStatusText(location.status)}</span>
                    </div>
                    {location.launchDate && (
                      <p className="text-orange-400 text-xs mt-1">{location.launchDate}</p>
                    )}
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-white/80">Available Now</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="text-white/80">Coming Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full" />
              <span className="text-white/80">Join Waitlist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="text-white/80">Flagship Store</span>
            </div>
          </div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border border-green-500/20">
            <div className="text-4xl font-bold text-green-400 mb-2">{availableLocations.length}</div>
            <div className="text-white/70 font-medium">Cities Live</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl border border-orange-500/20">
            <div className="text-4xl font-bold text-orange-400 mb-2">{comingSoonLocations.length}</div>
            <div className="text-white/70 font-medium">Coming Soon</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">
              {availableLocations.reduce((sum, loc) => sum + loc.stores, 0)}
            </div>
            <div className="text-white/70 font-medium">Stores Open</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl border border-blue-500/20">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-white/70 font-medium">Online Store</div>
          </div>
        </motion.div>

        {/* Featured Locations */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {availableLocations.filter(loc => loc.flagship).map((location, index) => (
            <motion.div
              key={location.id}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{location.city}</h3>
                      <p className="text-white/60 text-sm">{location.country}</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white/70">Stores</span>
                    <span className="text-white font-semibold">{location.stores}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Status</span>
                    <span className="text-green-400 font-semibold">Available Now</span>
                  </div>
                </div>

                <motion.button
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-2xl transition-all duration-300 group-hover:scale-105"
                  whileTap={{ scale: 0.95 }}
                >
                  Find Store
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-12 border border-red-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Coming to Your City Soon?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join our global waitlist to be the first to know when Fassiano launches in your area. 
              Early access members get exclusive previews and launch discounts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-12 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold text-lg rounded-full shadow-2xl shadow-red-500/25 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Global Waitlist
              </motion.button>
              
              <motion.button
                className="px-12 py-4 border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg rounded-full transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Your City
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Selected Location Modal */}
      {selectedLocation && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedLocation(null)}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-md w-full border border-white/20"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedLocation.city}</h3>
              <button
                onClick={() => setSelectedLocation(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-white/70">Country</span>
                <span className="text-white">{selectedLocation.country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Continent</span>
                <span className="text-white">{selectedLocation.continent}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Status</span>
                <span className="text-green-400">{getStatusText(selectedLocation.status)}</span>
              </div>
              {selectedLocation.flagship && (
                <div className="flex justify-between">
                  <span className="text-white/70">Store Type</span>
                  <span className="text-yellow-400">Flagship Store</span>
                </div>
              )}
            </div>

            <button
              className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-2xl transition-all duration-300"
              onClick={() => setSelectedLocation(null)}
            >
              Visit Store
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
