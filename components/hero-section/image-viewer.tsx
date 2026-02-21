"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import Image from "next/image"

import { ModelId } from "./types"

interface ImageViewerProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  selectedIndex: number
  setSelectedIndex: (index: number) => void
  modelName: string
  modelId: ModelId
}

const buildImageSrc = (model: ModelId, fileName: string) => `/${model}/${encodeURIComponent(fileName)}`

export default function ImageViewer({
  isOpen,
  onClose,
  images,
  selectedIndex,
  setSelectedIndex,
  modelName,
  modelId,
}: ImageViewerProps) {
  const [zoomLevel, setZoomLevel] = useState(1)
  
  const activeImageSrc = buildImageSrc(modelId, images[selectedIndex])

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 1))
  
  const handlePrevImage = () => {
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    setZoomLevel(1)
  }
  
  const handleNextImage = () => {
    setSelectedIndex((selectedIndex + 1) % images.length)
    setZoomLevel(1)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl animate-scaleIn my-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{modelName}</p>
            <p className="text-sm text-white/70">Angle {selectedIndex + 1}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
          <div className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
            <Image
              src={activeImageSrc}
              alt={`${modelName} full view ${selectedIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            />
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 p-2 text-white/80 hover:text-white hover:border-white/30 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 p-2 text-white/80 hover:text-white hover:border-white/30 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-white/60">
            <span>{selectedIndex + 1} / {images.length}</span>
            <span className="hidden sm:inline">Zoom {Math.round(zoomLevel * 100)}%</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleZoomOut}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:border-white/30 transition"
            >
              <ZoomOut className="h-4 w-4" />
              <span className="text-xs">Zoom out</span>
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:border-white/30 transition"
            >
              <ZoomIn className="h-4 w-4" />
              <span className="text-xs">Zoom in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
