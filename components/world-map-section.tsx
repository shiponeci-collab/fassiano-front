"use client"

import { useEffect, useRef } from "react"

export function WorldMapSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Global locations where Fassiano is available
    const locations = [
      { x: 0.2, y: 0.3, name: "New York", active: true },
      { x: 0.15, y: 0.4, name: "London", active: true },
      { x: 0.25, y: 0.45, name: "Paris", active: true },
      { x: 0.55, y: 0.35, name: "Tokyo", active: true },
      { x: 0.45, y: 0.5, name: "Dubai", active: false },
      { x: 0.85, y: 0.7, name: "Sydney", active: false },
      { x: 0.1, y: 0.6, name: "São Paulo", active: false },
    ]

    const connections = [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 3],
      [3, 5],
      [1, 4],
    ]

    let animationFrame = 0

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrame += 0.02

      // Draw connections
      connections.forEach(([start, end], index) => {
        const startLoc = locations[start]
        const endLoc = locations[end]

        if (!startLoc.active || !endLoc.active) return

        const startX = startLoc.x * canvas.width
        const startY = startLoc.y * canvas.height
        const endX = endLoc.x * canvas.width
        const endY = endLoc.y * canvas.height

        // Animated line
        const progress = (Math.sin(animationFrame + index) + 1) / 2
        const currentX = startX + (endX - startX) * progress
        const currentY = startY + (endY - startY) * progress

        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
        gradient.addColorStop(0, "rgba(147, 51, 234, 0.8)")
        gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.8)")
        gradient.addColorStop(1, "rgba(147, 51, 234, 0.8)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()
      })

      // Draw locations
      locations.forEach((location, index) => {
        const x = location.x * canvas.width
        const y = location.y * canvas.height

        // Pulsing effect
        const pulse = Math.sin(animationFrame * 2 + index) * 0.3 + 0.7
        const radius = location.active ? 8 * pulse : 4

        // Outer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2)
        if (location.active) {
          gradient.addColorStop(0, "rgba(147, 51, 234, 0.8)")
          gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.4)")
          gradient.addColorStop(1, "rgba(147, 51, 234, 0)")
        } else {
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)")
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Inner dot
        ctx.fillStyle = location.active ? "#8b5cf6" : "#ffffff"
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Global{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Availability
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Fassiano is launching in select cities worldwide, with more locations coming soon
          </p>
        </div>

        <div className="relative bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <canvas ref={canvasRef} className="w-full h-96 rounded-2xl" style={{ background: "transparent" }} />

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto"></div>
              <p className="text-white font-medium">Available Now</p>
            </div>
            <div className="space-y-2">
              <div className="w-4 h-4 bg-white/30 rounded-full mx-auto"></div>
              <p className="text-white/70 font-medium">Coming Soon</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-white/70">Cities Live</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-white">12</p>
              <p className="text-white/70">More Coming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
