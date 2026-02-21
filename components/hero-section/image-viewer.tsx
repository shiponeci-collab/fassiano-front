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
      className="fixed inset-0 z-[70] bg-black/98 backdrop-blur-md flex items-center justify-center p-3 animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full sm:w-[94%] max-w-4xl max-h-[90vh] animate-scaleIn my-auto flex flex-col" 
        onClick={(e) => e.stopPropagation()}
        style={{ boxSizing: "border-box" }}
      >
        {/* Header - Compact & constrained */}
        <div className="flex items-center justify-between mb-2 sm:mb-3 px-1 w-full flex-shrink-0">
          <div className="flex flex-col min-w-0">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/50 truncate">{modelName}</p>
            <p className="text-xs sm:text-sm text-white/70">Angle {selectedIndex + 1} / {images.length}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Close viewer"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Main Image Container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl w-full flex-grow min-h-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
          
          <div className="relative h-[38vh] sm:h-[60vh] w-full overflow-hidden flex items-center justify-center">
            <Image
              src={activeImageSrc}
              alt={`${modelName} full view ${selectedIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 90vw"
              className="object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
              priority
            />
            
            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/10 bg-black/50 p-1.5 sm:p-2.5 text-white/70 hover:text-white hover:border-white/30 transition-all active:scale-90"
              aria-label="Previous angle"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/10 bg-black/50 p-1.5 sm:p-2.5 text-white/70 hover:text-white hover:border-white/30 transition-all active:scale-90"
              aria-label="Next angle"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>

        {/* Footer - Stackable for very small screens */}
        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-1 w-full flex-shrink-0">
          <div className="flex items-center gap-3 text-[10px] sm:text-xs text-white/40">
            <span className="hidden xs:inline">Navigation Arrows or Click to Close</span>
            <div className="hidden xs:block h-3 w-px bg-white/10" />
            <span>Zoom: {Math.round(zoomLevel * 100)}%</span>
            <span className="xs:hidden ml-auto">1/{images.length}</span>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleZoomOut}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-2 sm:py-2.5 px-4 text-white/80 hover:text-white hover:border-white/30 transition-all active:scale-95 touch-manipulation"
            >
              <ZoomOut className="h-4 w-4" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-medium">Zoom out</span>
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-2 sm:py-2.5 px-4 text-white/80 hover:text-white hover:border-white/30 transition-all active:scale-95 touch-manipulation"
            >
              <ZoomIn className="h-4 w-4" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-medium">Zoom in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
