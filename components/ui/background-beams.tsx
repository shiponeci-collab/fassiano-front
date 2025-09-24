"use client"

import { useEffect, useRef } from "react"

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const beams: Array<{
      x: number
      y: number
      angle: number
      speed: number
      length: number
      opacity: number
    }> = []

    // Create beams
    for (let i = 0; i < 50; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
        length: 100 + Math.random() * 200,
        opacity: 0.1 + Math.random() * 0.3,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        // Update position
        beam.x += Math.cos(beam.angle) * beam.speed
        beam.y += Math.sin(beam.angle) * beam.speed

        // Wrap around screen
        if (beam.x < 0) beam.x = canvas.width
        if (beam.x > canvas.width) beam.x = 0
        if (beam.y < 0) beam.y = canvas.height
        if (beam.y > canvas.height) beam.y = 0

        // Draw beam
        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length,
        )
        gradient.addColorStop(0, `rgba(147, 51, 234, ${beam.opacity})`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${beam.opacity * 0.5})`)
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(beam.x, beam.y)
        ctx.lineTo(beam.x + Math.cos(beam.angle) * beam.length, beam.y + Math.sin(beam.angle) * beam.length)
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ background: "transparent" }} />
  )
}
