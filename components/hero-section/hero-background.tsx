"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useHeroContext } from "./hero-context"
import { ModelId } from "./types"

// Each model "universe" — cinematic atmosphere definition
const MODEL_UNIVERSE: Record<ModelId, {
  // Primary orb: big glow behind the card
  primaryOrb: string
  primaryOrbPosition: string
  // Secondary orb: ambient fill on left side
  secondaryOrb: string
  secondaryOrbPosition: string
  // Accent floor reflection
  floorGlow: string
  // Top spotlight beam
  topBeam: string
  // Fine particle color class
  particleColor: string
  // Grid tint overlay
  gridTint: string
  // Noise texture tint
  noiseTint: string
}> = {
  "x-red": {
    primaryOrb: "radial-gradient(ellipse 700px 600px at center, rgba(220,38,38,0.22) 0%, rgba(185,28,28,0.10) 45%, transparent 75%)",
    primaryOrbPosition: "top-[-10%] right-[-5%]",
    secondaryOrb: "radial-gradient(ellipse 500px 500px at center, rgba(239,68,68,0.12) 0%, rgba(220,38,28,0.05) 50%, transparent 80%)",
    secondaryOrbPosition: "top-[20%] left-[-10%]",
    floorGlow: "radial-gradient(ellipse 800px 120px at center bottom, rgba(239,68,68,0.15) 0%, rgba(185,28,28,0.05) 50%, transparent 80%)",
    topBeam: "linear-gradient(180deg, rgba(239,68,68,0.12) 0%, transparent 60%)",
    particleColor: "#ef4444",
    gridTint: "rgba(239,68,68,0.03)",
    noiseTint: "rgba(185,28,28,0.08)",
  },
  "x-black": {
    primaryOrb: "radial-gradient(ellipse 700px 600px at center, rgba(161,161,170,0.14) 0%, rgba(113,113,122,0.06) 45%, transparent 75%)",
    primaryOrbPosition: "top-[-10%] right-[-5%]",
    secondaryOrb: "radial-gradient(ellipse 500px 500px at center, rgba(228,228,231,0.08) 0%, rgba(161,161,170,0.03) 50%, transparent 80%)",
    secondaryOrbPosition: "top-[20%] left-[-10%]",
    floorGlow: "radial-gradient(ellipse 800px 120px at center bottom, rgba(228,228,231,0.10) 0%, rgba(113,113,122,0.04) 50%, transparent 80%)",
    topBeam: "linear-gradient(180deg, rgba(228,228,231,0.07) 0%, transparent 60%)",
    particleColor: "#d4d4d8",
    gridTint: "rgba(228,228,231,0.025)",
    noiseTint: "rgba(113,113,122,0.06)",
  },
  "majestic": {
    primaryOrb: "radial-gradient(ellipse 700px 600px at center, rgba(217,119,6,0.22) 0%, rgba(180,83,9,0.10) 45%, transparent 75%)",
    primaryOrbPosition: "top-[-10%] right-[-5%]",
    secondaryOrb: "radial-gradient(ellipse 500px 500px at center, rgba(245,158,11,0.14) 0%, rgba(217,119,6,0.05) 50%, transparent 80%)",
    secondaryOrbPosition: "top-[20%] left-[-10%]",
    floorGlow: "radial-gradient(ellipse 800px 120px at center bottom, rgba(251,191,36,0.18) 0%, rgba(217,119,6,0.07) 50%, transparent 80%)",
    topBeam: "linear-gradient(180deg, rgba(245,158,11,0.12) 0%, transparent 60%)",
    particleColor: "#f59e0b",
    gridTint: "rgba(245,158,11,0.04)",
    noiseTint: "rgba(180,83,9,0.09)",
  },
}

// Static particle positions (avoids hydration issues)
const PARTICLES = [
  { x: 72, y: 28, size: 1.5, dur: 5.2, del: 0 },
  { x: 80, y: 45, size: 1,   dur: 6.8, del: 0.7 },
  { x: 65, y: 60, size: 2,   dur: 4.5, del: 1.2 },
  { x: 85, y: 32, size: 1.2, dur: 7.0, del: 0.3 },
  { x: 58, y: 25, size: 1,   dur: 5.8, del: 1.8 },
  { x: 90, y: 55, size: 1.5, dur: 6.2, del: 0.9 },
  { x: 78, y: 70, size: 1,   dur: 4.8, del: 2.1 },
  { x: 62, y: 40, size: 1.8, dur: 5.5, del: 0.5 },
  // Left side
  { x: 8,  y: 35, size: 1,   dur: 6.0, del: 1.5 },
  { x: 15, y: 55, size: 1.2, dur: 5.0, del: 0.8 },
  { x: 5,  y: 70, size: 1.5, dur: 7.2, del: 2.3 },
  // Center
  { x: 42, y: 18, size: 1,   dur: 5.3, del: 1.1 },
  { x: 50, y: 80, size: 1.3, dur: 6.5, del: 0.4 },
]

const transition = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
}

export function HeroBackground() {
  const { selectedModel } = useHeroContext()
  const u = MODEL_UNIVERSE[selectedModel]

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      
      {/* ── BASE DARK CANVAS ─────────────────────────────── */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* ── ANIMATED PRIMARY ORB ─────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`primary-${selectedModel}`}
          className={`absolute ${u.primaryOrbPosition} w-[900px] h-[900px]`}
          style={{ background: u.primaryOrb }}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={transition}
        />
      </AnimatePresence>

      {/* ── ANIMATED SECONDARY ORB ───────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`secondary-${selectedModel}`}
          className={`absolute ${u.secondaryOrbPosition} w-[700px] h-[700px]`}
          style={{ background: u.secondaryOrb }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ ...transition, duration: 1.4 }}
        />
      </AnimatePresence>

      {/* ── TOP BEAM (tinted light from ceiling) ─────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`beam-${selectedModel}`}
          className="absolute inset-x-0 top-0 h-[55%]"
          style={{ background: u.topBeam }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        />
      </AnimatePresence>

      {/* ── FLOOR GLOW REFLECTION ────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`floor-${selectedModel}`}
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: u.floorGlow }}
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0.5 }}
          transition={{ ...transition, duration: 1.3 }}
        />
      </AnimatePresence>

      {/* ── GRID PATTERN with tinted overlay ─────────────── */}
      <div
        className="absolute inset-0 opacity-[0.09] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <AnimatePresence mode="sync">
        <motion.div
          key={`grid-tint-${selectedModel}`}
          className="absolute inset-0"
          style={{ background: u.gridTint }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* ── VIGNETTE ─────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />

      {/* ── FLOATING PARTICLES ───────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`particles-${selectedModel}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                backgroundColor: u.particleColor,
                boxShadow: `0 0 ${p.size * 3}px ${u.particleColor}`,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [0, -18, -35],
                scale: [0.8, 1.4, 0.5],
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                delay: p.del,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── SPOTLIGHT CONE (dramatic top-right sweep) ─────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`cone-${selectedModel}`}
          className="absolute -top-24 -right-16 w-[720px] h-[720px] pointer-events-none"
          style={{
            background: `conic-gradient(
              from 225deg at 88% 12%,
              transparent 0deg,
              ${u.particleColor}28 28deg,
              ${u.particleColor}12 48deg,
              ${u.particleColor}06 72deg,
              transparent 100deg,
              transparent 360deg
            )`,
          }}
          initial={{ opacity: 0, rotate: 20, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: -15, scale: 0.7 }}
          transition={{ ...transition, duration: 1.5 }}
        />
      </AnimatePresence>

    </div>
  )
}
