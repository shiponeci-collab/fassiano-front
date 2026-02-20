"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useHeroContext } from "./hero-context"
import { ModelId } from "./types"
import { Spotlight } from "@/components/ui/spotlight-new"

// ─────────────────────────────────────────────────────────────────────────────
// Aceternity Spotlight — very subtle HSL gradients per model
// Kept extremely soft so beams feel like ambient light, not stage lights
// ─────────────────────────────────────────────────────────────────────────────
const SPOTLIGHT_COLORS: Record<ModelId, {
  gradientFirst: string
  gradientSecond: string
  gradientThird: string
}> = {
  "x-red": {
    gradientFirst:  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 80%, 65%, .07) 0, hsla(0, 70%, 50%, .02) 50%, transparent 80%)",
    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(0, 80%, 60%, .05) 0, hsla(0, 70%, 45%, .01) 80%, transparent 100%)",
    gradientThird:  "radial-gradient(50% 50% at 50% 50%, hsla(0, 70%, 55%, .03) 0, transparent 80%, transparent 100%)",
  },
  "x-black": {
    gradientFirst:  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 10%, 85%, .06) 0, hsla(220, 5%, 65%, .02) 50%, transparent 80%)",
    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(220, 10%, 80%, .04) 0, hsla(220, 5%, 60%, .01) 80%, transparent 100%)",
    gradientThird:  "radial-gradient(50% 50% at 50% 50%, hsla(220, 5%, 75%, .02) 0, transparent 80%, transparent 100%)",
  },
  "majestic": {
    gradientFirst:  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(38, 90%, 65%, .09) 0, hsla(38, 80%, 45%, .03) 50%, transparent 80%)",
    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(38, 90%, 60%, .06) 0, hsla(38, 75%, 40%, .02) 80%, transparent 100%)",
    gradientThird:  "radial-gradient(50% 50% at 50% 50%, hsla(38, 80%, 55%, .04) 0, transparent 80%, transparent 100%)",
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Per-model ambient universe
// Strategy: ONE huge ultra-soft center orb that bleeds evenly in all
// directions. No secondaryOrb — that was creating the hard-edge blob.
// All intensities reduced ~50% from before so the effect is whisper-soft.
// ─────────────────────────────────────────────────────────────────────────────
const MODEL_UNIVERSE: Record<ModelId, {
  // Single large center-right orb — soft, very large, no hard edge
  centerOrb: string
  // Ultra-wide full-screen tint — carries colour ALL the way left
  fullTint: string
  // Subtle top bleed
  topBleed: string
  // Subtle floor
  floorGlow: string
  // Particle dot colour
  particleColor: string
}> = {
  "x-red": {
    centerOrb: "radial-gradient(ellipse 140% 120% at 75% 40%, rgba(200,30,30,0.16) 0%, rgba(160,20,20,0.06) 50%, transparent 75%)",
    fullTint:  "radial-gradient(ellipse 200% 160% at 50% 50%, rgba(220,38,38,0.07) 0%, transparent 70%)",
    topBleed:  "linear-gradient(180deg, rgba(200,30,30,0.10) 0%, transparent 50%)",
    floorGlow: "radial-gradient(ellipse 120% 80px at 50% 100%, rgba(200,30,30,0.10) 0%, transparent 80%)",
    particleColor: "#ef4444",
  },
  "x-black": {
    centerOrb: "radial-gradient(ellipse 140% 120% at 75% 40%, rgba(150,150,165,0.12) 0%, rgba(100,100,115,0.05) 50%, transparent 75%)",
    fullTint:  "radial-gradient(ellipse 200% 160% at 50% 50%, rgba(200,200,215,0.05) 0%, transparent 70%)",
    topBleed:  "linear-gradient(180deg, rgba(160,160,175,0.07) 0%, transparent 50%)",
    floorGlow: "radial-gradient(ellipse 120% 80px at 50% 100%, rgba(160,160,175,0.08) 0%, transparent 80%)",
    particleColor: "#d4d4d8",
  },
  "majestic": {
    centerOrb: "radial-gradient(ellipse 140% 120% at 75% 40%, rgba(200,110,0,0.18) 0%, rgba(160,80,0,0.07) 50%, transparent 75%)",
    fullTint:  "radial-gradient(ellipse 200% 160% at 50% 50%, rgba(230,140,0,0.08) 0%, transparent 70%)",
    topBleed:  "linear-gradient(180deg, rgba(200,120,0,0.11) 0%, transparent 50%)",
    floorGlow: "radial-gradient(ellipse 120% 80px at 50% 100%, rgba(220,150,0,0.12) 0%, transparent 80%)",
    particleColor: "#f59e0b",
  },
}

// Static particle positions — right side only (away from card on mobile)
const PARTICLES = [
  { x: 74, y: 22, size: 1.2, dur: 5.2, del: 0.0 },
  { x: 82, y: 42, size: 0.9, dur: 6.8, del: 0.7 },
  { x: 68, y: 58, size: 1.5, dur: 4.5, del: 1.2 },
  { x: 88, y: 30, size: 1.0, dur: 7.0, del: 0.3 },
  { x: 78, y: 68, size: 0.8, dur: 4.8, del: 2.1 },
  { x: 64, y: 38, size: 1.3, dur: 5.5, del: 0.5 },
  { x: 92, y: 52, size: 1.0, dur: 6.2, del: 0.9 },
  // Far left — very sparse
  { x: 6,  y: 40, size: 0.8, dur: 6.5, del: 1.8 },
  { x: 12, y: 62, size: 1.0, dur: 5.8, del: 2.4 },
]

const transition = {
  duration: 1.4,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
}

export function HeroBackground() {
  const { selectedModel } = useHeroContext()
  const u = MODEL_UNIVERSE[selectedModel]
  const sc = SPOTLIGHT_COLORS[selectedModel]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* ── BASE ───────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* ── FULL-SCREEN TINT — ultra-soft, covers 100% width ─
           This is the "left column" colour — stays very subtle  */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`tint-${selectedModel}`}
          className="absolute inset-0"
          style={{ background: u.fullTint }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, duration: 1.8 }}
        />
      </AnimatePresence>

      {/* ── CENTER-RIGHT ORB — the main glow source ──────────
           Positioned at 75% X so it's behind the card on desktop
           but the ellipse is so large it bleeds left naturally    */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`orb-${selectedModel}`}
          className="absolute inset-0"
          style={{ background: u.centerOrb }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={transition}
        />
      </AnimatePresence>

      {/* ── TOP BLEED ─────────────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`top-${selectedModel}`}
          className="absolute inset-x-0 top-0 h-[60%]"
          style={{ background: u.topBleed }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, duration: 1.2 }}
        />
      </AnimatePresence>

      {/* ── FLOOR GLOW ────────────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`floor-${selectedModel}`}
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: u.floorGlow }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, duration: 1.5 }}
        />
      </AnimatePresence>

      {/* ── ACETERNITY SPOTLIGHT (subtle beam from corners) ──
           Heavily reduced opacity wrapper + simplified params
           so beams are barely there — just a whisper of light   */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`spotlight-${selectedModel}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Spotlight
            gradientFirst={sc.gradientFirst}
            gradientSecond={sc.gradientSecond}
            gradientThird={sc.gradientThird}
            translateY={-380}
            width={500}
            height={1380}
            smallWidth={200}
            duration={11}
            xOffset={60}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── SUBTLE GRID ───────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── VIGNETTE — only vertical, no left blocking ────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/75" />
      {/* Very minimal right edge darkening — no left-side gradient */}
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/30 to-transparent" />

      {/* ── PARTICLES — right column only on desktop ──────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`particles-${selectedModel}`}
          className="absolute inset-0 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
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
                boxShadow: `0 0 ${p.size * 4}px ${u.particleColor}80`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                y: [0, -14, -28],
                scale: [0.8, 1.3, 0.5],
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
