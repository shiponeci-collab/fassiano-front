"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function LeatherStitching() {
  const stitches = useMemo(() => {
    const stitchLines = []
    
    // Create realistic leather stitching lines
    for (let i = 0; i < 8; i++) {
      const isVertical = Math.random() > 0.6
      stitchLines.push({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        length: Math.random() * 200 + 100,
        isVertical,
        stitches: Array.from({ length: Math.floor(Math.random() * 15) + 8 }, (_, j) => ({
          id: j,
          offset: (j / 15) * 100,
          size: Math.random() * 2 + 1
        }))
      })
    }
    
    return stitchLines
  }, [])
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stitches.map((line) => (
        <div
          key={line.id}
          className="absolute"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            width: line.isVertical ? '2px' : `${line.length}px`,
            height: line.isVertical ? `${line.length}px` : '2px',
          }}
        >
          {/* Stitch line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent"
            initial={{ opacity: 0, scaleX: line.isVertical ? 1 : 0, scaleY: line.isVertical ? 0 : 1 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0.3],
              scaleX: line.isVertical ? 1 : [0, 1, 0.9, 1],
              scaleY: line.isVertical ? [0, 1, 0.9, 1] : 1
            }}
            transition={{
              duration: 4,
              delay: line.id * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          {/* Individual stitches */}
          {line.stitches.map((stitch) => (
            <motion.div
              key={stitch.id}
              className="absolute w-1 h-1 bg-amber-700/40 rounded-full"
              style={{
                left: line.isVertical ? '50%' : `${stitch.offset}%`,
                top: line.isVertical ? `${stitch.offset}%` : '50%',
                transform: 'translate(-50%, -50%)',
                width: `${stitch.size}px`,
                height: `${stitch.size}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 0.8, 1],
                opacity: [0, 0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 2,
                delay: line.id * 0.5 + stitch.id * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
