"use client"

import { useEffect, useRef } from "react"

export function Spotlight() {
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

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create radial gradient spotlight
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 400)
      gradient.addColorStop(0, "rgba(220, 38, 38, 0.15)")
      gradient.addColorStop(0.3, "rgba(220, 38, 38, 0.08)")
      gradient.addColorStop(0.6, "rgba(220, 38, 38, 0.03)")
      gradient.addColorStop(1, "rgba(220, 38, 38, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add secondary spotlight
      const gradient2 = ctx.createRadialGradient(
        canvas.width - mouseX,
        canvas.height - mouseY,
        0,
        canvas.width - mouseX,
        canvas.height - mouseY,
        300,
      )
      gradient2.addColorStop(0, "rgba(255, 255, 255, 0.05)")
      gradient2.addColorStop(0.5, "rgba(255, 255, 255, 0.02)")
      gradient2.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
}
