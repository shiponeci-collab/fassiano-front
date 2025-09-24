"use client"

import { useEffect, useRef } from "react"

interface TextHoverEffectProps {
  text: string
  className?: string
}

export function TextHoverEffect({ text, className = "" }: TextHoverEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const letters = container.querySelectorAll(".letter")

    letters.forEach((letter, index) => {
      letter.addEventListener("mouseenter", () => {
        letter.classList.add("hovered")
        setTimeout(() => {
          letter.classList.remove("hovered")
        }, 1000)
      })
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none ${className}`}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter inline-block transition-all duration-300 hover:scale-110 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:bg-clip-text cursor-pointer text-white"
          style={{
            transitionDelay: `${index * 50}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  )
}
