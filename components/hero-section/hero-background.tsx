"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useHeroContext } from "./hero-context"
import { ModelId } from "./types"
import { Spotlight } from "@/components/ui/spotlight-new"

// ─────────────────────────────────────────────────────────────────────────────
// Aceternity Spotlight — whisper-soft HSL gradients per model
// ─────────────────────────────────────────────────────────────────────────────
const SPOTLIGHT_COLORS: Record<ModelId, {
  gradientFirst: string
  gradientSecond: string
  gradientThird: string
}> = {
  "x-red": {
    gradientFirst:  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 80%, 65%, .06) 0, hsla(0, 70%, 50%, .015) 50%, transparent 80%)",
    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(0, 80%, 60%, .04) 0, transparent 80%, transparent 100%)",
    gradientThird:  "radial-gradient(50% 50% at 50% 50%, hsla(0, 70%, 55%, .025) 0, transparent 80%, transparent 100%)",
  },
  "x-black": {
    gradientFirst:  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 8%, 82%, .05) 0, hsla(220, 4%, 62%, .015) 50%, transparent 80%)",
    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(220, 8%, 78%, .035) 0, transparent 80%, transparent 100%)",
    gradientThird:  "radial-gradient(50% 50% at 50% 50%, hsla(220, 5%, 72%, .02) 0, transparent 80%, transparent 100%)",
  },
  "majestic": {
    gradientFirst:  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(38, 90%, 62%, .08) 0, hsla(38, 75%, 42%, .025) 50%, transparent 80%)",
    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(38, 90%, 58%, .055) 0, transparent 80%, transparent 100%)",
    gradientThird:  "radial-gradient(50% 50% at 50% 50%, hsla(38, 80%, 52%, .035) 0, transparent 80%, transparent 100%)",
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Per-model ambient colours
// KEY INSIGHT: use inset-0 + full-size gradients so the colour
// mathematically covers every pixel. No positional orbs that cut off.
// ─────────────────────────────────────────────────────────────────────────────
const MODEL_UNIVERSE: Record<ModelId, {
  // Layer 1: a full-bleed very low-opacity tint across the whole section
  ambientTint: string
  // Layer 2: a right-biased warmer core (behind the card)
  warmCore: string
  // Layer 3: a faint top edge glow
  topEdge: string
  // Layer 4: floor shimmer
  floorShimmer: string
  // Particle colour hex
  particleColor: string
}> = {
  "x-red": {
    // Full-section ambient — very faint so it just barely tints the whole canvas
    ambientTint:  "linear-gradient(135deg, rgba(200,28,28,0.09) 0%, rgba(180,20,20,0.06) 40%, rgba(150,15,15,0.03) 100%)",
    // Right-side warmer core — blends into left via large ellipse at 60% X
    warmCore:     "radial-gradient(ellipse 180% 130% at 60% 45%, rgba(215,35,35,0.16) 0%, rgba(180,25,25,0.07) 45%, transparent 70%)",
    topEdge:      "linear-gradient(180deg, rgba(200,28,28,0.09) 0%, transparent 48%)",
    floorShimmer: "radial-gradient(ellipse 100% 60px at 50% 100%, rgba(200,30,30,0.09) 0%, transparent 100%)",
    particleColor: "#ef4444",
  },
  "x-black": {
    ambientTint:  "linear-gradient(135deg, rgba(140,140,155,0.07) 0%, rgba(110,110,125,0.04) 40%, rgba(80,80,95,0.02) 100%)",
    warmCore:     "radial-gradient(ellipse 180% 130% at 60% 45%, rgba(170,170,185,0.12) 0%, rgba(130,130,145,0.05) 45%, transparent 70%)",
    topEdge:      "linear-gradient(180deg, rgba(150,150,165,0.07) 0%, transparent 48%)",
    floorShimmer: "radial-gradient(ellipse 100% 60px at 50% 100%, rgba(160,160,175,0.07) 0%, transparent 100%)",
    particleColor: "#d4d4d8",
  },
  "majestic": {
    ambientTint:  "linear-gradient(135deg, rgba(180,100,0,0.11) 0%, rgba(155,80,0,0.07) 40%, rgba(120,60,0,0.04) 100%)",
    warmCore:     "radial-gradient(ellipse 180% 130% at 60% 45%, rgba(210,115,0,0.18) 0%, rgba(175,90,0,0.08) 45%, transparent 70%)",
    topEdge:      "linear-gradient(180deg, rgba(195,110,0,0.11) 0%, transparent 48%)",
    floorShimmer: "radial-gradient(ellipse 100% 60px at 50% 100%, rgba(210,130,0,0.11) 0%, transparent 100%)",
    particleColor: "#f59e0b",
  },
}

// Particles — right column only on desktop, hidden on mobile
const PARTICLES = [
  { x: 74, y: 22, size: 1.2, dur: 5.2, del: 0.0 },
  { x: 82, y: 42, size: 0.9, dur: 6.8, del: 0.7 },
  { x: 88, y: 30, size: 1.0, dur: 7.0, del: 0.3 },
  { x: 78, y: 68, size: 0.8, dur: 4.8, del: 2.1 },
  { x: 92, y: 52, size: 1.0, dur: 6.2, del: 0.9 },
  { x: 66, y: 58, size: 1.3, dur: 5.5, del: 1.5 },
]

const transition = {
  duration: 1.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
}

export function HeroBackground() {
  const { selectedModel } = useHeroContext()
  const u = MODEL_UNIVERSE[selectedModel]
  const sc = SPOTLIGHT_COLORS[selectedModel]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* ── BASE ────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* ── LAYER 1: Full-section ambient tint ──────────
           A diagonal linear-gradient covers every pixel
           so the leftmost corner gets at least 0.09 opacity.
           This is the "anchor" that makes the left side feel
           colour-connected to the rest of the scene.             */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`ambient-${selectedModel}`}
          className="absolute inset-0"
          style={{ background: u.ambientTint }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, duration: 2.0 }}
        />
      </AnimatePresence>

      {/* ── LAYER 2: Right-biased warm core ─────────────
           Large ellipse at 60% X — its 180% width means
           the gradient still reaches 0% X (left edge)
           before going transparent at 70% of radius.            */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`core-${selectedModel}`}
          className="absolute inset-0"
          style={{ background: u.warmCore }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={transition}
        />
      </AnimatePresence>

      {/* ── LAYER 3: Top edge glow ───────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`top-${selectedModel}`}
          className="absolute inset-x-0 top-0 h-[55%]"
          style={{ background: u.topEdge }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, duration: 1.3 }}
        />
      </AnimatePresence>

      {/* ── LAYER 4: Floor shimmer ───────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`floor-${selectedModel}`}
          className="absolute inset-x-0 bottom-0 h-28"
          style={{ background: u.floorShimmer }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        />
      </AnimatePresence>

      {/* ── ACETERNITY SPOTLIGHT ─────────────────────
           Wrapped in an opacity cap of 0.65 so it never
           overpowers. Larger translateY pushes beams higher
           so they're barely kissing the top of the viewport.    */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`spotlight-${selectedModel}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Spotlight
            gradientFirst={sc.gradientFirst}
            gradientSecond={sc.gradientSecond}
            gradientThird={sc.gradientThird}
            translateY={-400}
            width={480}
            height={1380}
            smallWidth={180}
            duration={12}
            xOffset={55}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── GRID — very faint ────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── VIGNETTE — vertical ONLY, no horizontal ──
           We deliberately removed the left/right black
           gradients so they don't block the colour bleed.       */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* ── PARTICLES — desktop only, right side ─────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`particles-${selectedModel}`}
          className="absolute inset-0 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
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
                boxShadow: `0 0 ${p.size * 4}px ${u.particleColor}70`,
              }}
              animate={{
                opacity: [0, 0.45, 0],
                y: [0, -12, -24],
                scale: [0.8, 1.2, 0.5],
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

    </div>
  )
}
