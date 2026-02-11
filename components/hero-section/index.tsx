"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react"
import { HeroContent } from "./hero-content"
import { Spotlight } from "../ui/spotlight-new"

type ModelId = "x-red" | "x-black"

const MODEL_DATA: Record<ModelId, { name: string; description: string; accent: string; dot: string; images: string[] }> = {
  "x-black": {
    name: "X-BLACK",
    description: "Stealth heritage leather with deep noir finish.",
    accent: "from-zinc-100 via-zinc-300 to-zinc-500",
    dot: "bg-black shadow-[0_0_12px_rgba(255,255,255,0.4)]",
    images: [
      "Artboard 1.jpg",
      "Artboard 4.jpg",
      "Artboard 10.jpg",
      "Artboard 12.jpg",
      "Artboard 14.jpg",
      "Artboard 15.jpg",
      "Artboard 16.jpg",
      "Artboard 17.jpg",
      "Artboard 18.jpg"
    ]
  },
  "x-red": {
    name: "X-RED",
    description: "Crimson heritage leather with a bold artisan glow.",
    accent: "from-rose-200 via-red-300 to-amber-300",
    dot: "bg-red-400",
    images: [
      "Artboard 6.jpg",
      "Artboard 8.jpg",
      "Artboard 10.jpg",
      "Artboard 22.jpg",
      "Artboard 24.jpg",
      "Artboard 25.jpg",
      "Artboard 26.jpg",
      "Artboard 27.jpg",
      "Artboard 28.jpg"
    ]
  }
}

const buildImageSrc = (model: ModelId, fileName: string) => `/${model}/${encodeURIComponent(fileName)}`

export function HeroSection() {
  const [selectedModel, setSelectedModel] = useState<ModelId>("x-black")
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const activeModel = MODEL_DATA[selectedModel]
  const activeImages = activeModel.images
  const activeImageSrc = buildImageSrc(selectedModel, activeImages[selectedImageIndex])

  useEffect(() => {
    setSelectedImageIndex(0)
    setZoomLevel(1)
  }, [selectedModel])

  const openViewer = (index: number) => {
    setSelectedImageIndex(index)
    setZoomLevel(1)
    setIsViewerOpen(true)
  }

  const closeViewer = () => {
    setIsViewerOpen(false)
    setZoomLevel(1)
  }

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 1))
  const handlePrevImage = () => {
    setSelectedImageIndex(prev => (prev - 1 + activeImages.length) % activeImages.length)
    setZoomLevel(1)
  }
  const handleNextImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % activeImages.length)
    setZoomLevel(1)
  }

  return (
    <>
      <section className="relative min-h-screen bg-[#080808] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.12),_transparent_60%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(239,68,68,0.18),_transparent_45%)]" />
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-screen"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.18) 12.5%, transparent 12.5%, transparent 50%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.18) 62.5%, transparent 62.5%, transparent), linear-gradient(45deg, rgba(255,255,255,0.18) 12.5%, transparent 12.5%, transparent 50%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.18) 62.5%, transparent 62.5%, transparent)",
              backgroundSize: "48px 48px",
              backgroundPosition: "0 0, 24px 24px"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 85%, 70%, .12) 0, hsla(0, 85%, 60%, .04) 50%, hsla(0, 85%, 50%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 85%, 70%, .08) 0, hsla(0, 85%, 60%, .03) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 85%, 70%, .06) 0, hsla(0, 85%, 50%, .02) 80%, transparent 100%)"
          />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-30 scale-75">
            <Spotlight />
          </div>
        </div>

        <div className="relative z-10 h-full pt-16 md:pt-20 pb-8 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-12 items-center h-full min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)]">
              <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                <HeroContent selectedModel={selectedModel} />
              </div>

              <div className="flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0 mt-8 sm:mt-12 md:mt-16 lg:mt-0">
                <motion.div
                  className="w-full max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.3 }}
                >
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-white/45">Signature Models</p>
                        <h3
                          className={`mt-2 text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-b ${activeModel.accent} bg-clip-text text-transparent`}
                        >
                          {activeModel.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/60 max-w-sm">{activeModel.description}</p>
                      </div>
                      <div className="hidden sm:flex flex-col items-end text-right">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Limited Drop</span>
                        <span className="mt-2 text-xs text-white/60">Hand-numbered pairs</span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {Object.entries(MODEL_DATA).map(([key, model]) => {
                        const modelId = key as ModelId
                        const isActive = modelId === selectedModel
                        return (
                          <button
                            key={modelId}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => setSelectedModel(modelId)}
                            className={`group flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                              isActive
                                ? "border-white/40 bg-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                                : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
                            }`}
                          >
                            <div>
                              <p className="text-sm font-semibold text-white">{model.name}</p>
                              <p className="text-xs text-white/50">{modelId === "x-red" ? "Crimson Heritage" : "Obsidian Noir"}</p>
                            </div>
                            <div className={`h-3 w-3 rounded-full ${model.dot} shadow-[0_0_12px_rgba(255,255,255,0.4)]`} />
                          </button>
                        )
                      })}
                    </div>

                    <div className="mt-6 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
                      <motion.img
                        key={activeImageSrc}
                        src={activeImageSrc}
                        alt={`${activeModel.name} view ${selectedImageIndex + 1}`}
                        className="relative z-10 h-full w-full object-cover aspect-[4/3] cursor-zoom-in"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => openViewer(selectedImageIndex)}
                      />
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white/70 hover:text-white hover:border-white/30 transition"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white/70 hover:text-white hover:border-white/30 transition"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                      <span>Angles</span>
                      <span>
                        {selectedImageIndex + 1} / {activeImages.length}
                      </span>
                    </div>

                    <div className="mt-2 flex gap-3 overflow-x-auto pb-1">
                      {activeImages.map((fileName, index) => {
                        const src = buildImageSrc(selectedModel, fileName)
                        const isActive = index === selectedImageIndex
                        return (
                          <button
                            key={`${selectedModel}-${fileName}`}
                            type="button"
                            onClick={() => setSelectedImageIndex(index)}
                            onDoubleClick={() => openViewer(index)}
                            className={`relative h-12 w-16 flex-shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${
                              isActive ? "border-white/60" : "border-white/10 hover:border-white/30"
                            }`}
                            aria-label={`Select angle ${index + 1}`}
                          >
                            <img src={src} alt="" className="h-full w-full object-cover" />
                            {isActive && <span className="absolute inset-0 bg-white/10" />}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {isViewerOpen && (
            <motion.div
              className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onClick={closeViewer}
            >
              <motion.div
                className="relative w-full max-w-4xl"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">{activeModel.name}</p>
                    <p className="text-sm text-white/70">Angle {selectedImageIndex + 1}</p>
                  </div>
                  <button
                    type="button"
                    onClick={closeViewer}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label="Close viewer"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
                  <div className="relative h-[60vh] w-full overflow-hidden">
                    <img
                      src={activeImageSrc}
                      alt={`${activeModel.name} full view ${selectedImageIndex + 1}`}
                      className="h-full w-full object-contain transition-transform duration-200"
                      style={{ transform: `scale(${zoomLevel})` }}
                    />
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 p-2 text-white/80 hover:text-white hover:border-white/30 transition"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 p-2 text-white/80 hover:text-white hover:border-white/30 transition"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <span>
                      {selectedImageIndex + 1} / {activeImages.length}
                    </span>
                    <span className="hidden sm:inline">Zoom {Math.round(zoomLevel * 100)}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:border-white/30 transition"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="h-4 w-4" />
                      <span className="text-xs">Zoom out</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:border-white/30 transition"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="h-4 w-4" />
                      <span className="text-xs">Zoom in</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          <motion.div
            className="absolute bottom-4 right-4 sm:right-6 lg:right-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#e5e4e2] shadow-[0_0_10px_rgba(229,228,226,0.5)]"></div>
              <span
                className="text-[#e5e4e2] text-[10px] sm:text-xs font-normal tracking-[0.3em] uppercase"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif" }}
              >
                Made in Morocco
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
