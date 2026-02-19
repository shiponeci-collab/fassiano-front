"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { ModelId } from "./types"

const ImageViewer = lazy(() => import("./image-viewer"))
const NotifyMeForm = lazy(() => import("../notify-me-form").then(mod => ({ default: mod.NotifyMeForm })))

interface ImageGalleryProps {
  modelData: Record<ModelId, { name: string; description: string; accent: string; dot: string; price: string; originalPrice: string; images: string[] }>
}

const buildImageSrc = (model: ModelId, fileName: string) => `/${model}/${encodeURIComponent(fileName)}`

export function ImageGallery({ modelData }: ImageGalleryProps) {
  const [selectedModel, setSelectedModel] = useState<ModelId>("x-red")
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [showPreorder, setShowPreorder] = useState(false)
  
  const activeModel = modelData[selectedModel]
  const activeImages = activeModel.images
  const activeImageSrc = buildImageSrc(selectedModel, activeImages[selectedImageIndex])

  useEffect(() => {
    setSelectedImageIndex(0)
  }, [selectedModel])

  const handlePrevImage = () => {
    setSelectedImageIndex(prev => (prev - 1 + activeImages.length) % activeImages.length)
  }
  
  const handleNextImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % activeImages.length)
  }

  // Dynamic card colors based on selected model
  const cardColors = selectedModel === "x-red" 
    ? "border-red-500/40 border-t-red-400/60 bg-gradient-to-b from-red-950/50 to-black/80" 
    : selectedModel === "majestic"
    ? "border-amber-500/40 border-t-amber-400/60 bg-gradient-to-b from-amber-950/40 to-black/90"
    : "border-zinc-600/50 border-t-zinc-400/70 bg-gradient-to-b from-zinc-900/70 to-black/90"

  return (
    <>
      <div className={`rounded-[2rem] ${cardColors} backdrop-blur-3xl p-6 sm:p-8 shadow-[0_-25px_60px_rgba(0,0,0,0.55),0_25px_60px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-200 ease-out`}>
        <div className="flex items-start justify-between gap-3 sm:gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">Limited Edition</p>
            <h3 className={`mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight bg-gradient-to-b ${activeModel.accent} bg-clip-text text-transparent`}>
              {activeModel.name}
            </h3>
          </div>
          <div className="flex flex-col items-end text-right flex-shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="text-xs sm:text-sm text-white/40 line-through">{activeModel.originalPrice}</span>
              <div className="flex items-start gap-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{activeModel.price.split(' ')[0]}</span>
                <span className="text-[9px] sm:text-[10px] text-white/60 font-medium mt-0.5">{activeModel.price.split(' ')[1]}</span>
              </div>
            </div>
            <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-green-400 whitespace-nowrap">-20% Off</span>
          </div>
        </div>

        {/* Description - Full Width */}
        <p className="mt-3 text-xs sm:text-sm text-white/60 leading-tight">{activeModel.description}</p>

        {/* Model Selector */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {(["x-red", "x-black", "majestic"] as const).map((modelId) => {
            const model = modelData[modelId]
            const isActive = modelId === selectedModel
            return (
              <button
                key={modelId}
                type="button"
                onClick={() => setSelectedModel(modelId)}
                aria-label={`Select ${model.name} model`}
                aria-pressed={isActive}
                style={isActive ? { border: '2px solid #e5e4e2' } : undefined}
                className={`group flex flex-col items-center justify-center rounded-2xl px-2 py-3 text-center transition-all duration-150 ease-out ${
                  isActive
                    ? "bg-white/10"
                    : "border-2 border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                <div className={`h-3 w-3 rounded-full mb-2 ${model.dot}`} aria-hidden="true" />
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold text-white truncate">{model.name}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Main Image */}
        <div className="mt-6 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 aspect-[4/3]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
          <button
            type="button"
            onClick={() => setIsViewerOpen(true)}
            className="relative z-10 w-full h-full cursor-zoom-in block"
            aria-label={`View ${activeModel.name} in full screen`}
          >
            <Image
              key={activeImageSrc}
              src={activeImageSrc}
              alt={`${activeModel.name} premium sneaker - view ${selectedImageIndex + 1} of ${activeImages.length}`}
              fill
              priority={selectedImageIndex === 0}
              quality={selectedImageIndex === 0 ? 75 : 60}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 40vw"
              className="object-cover transition-opacity duration-300"
              loading={selectedImageIndex === 0 ? "eager" : "lazy"}
              fetchPriority={selectedImageIndex === 0 ? "high" : "low"}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3oAA//9k="
            />
          </button>
          <button
            type="button"
            onClick={handlePrevImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2 text-white/80 hover:text-white hover:border-white/40 transition"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2 text-white/80 hover:text-white hover:border-white/40 transition"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Image Counter & Thumbnails */}
        <div className="mt-4 flex items-center justify-between text-xs text-white/50">
          <span>Angles</span>
          <span>{selectedImageIndex + 1} / {activeImages.length}</span>
        </div>

        <div className="mt-2 flex gap-2 overflow-x-auto pb-0.5">
          {activeImages.map((fileName, index) => {
            const src = buildImageSrc(selectedModel, fileName)
            const isActive = index === selectedImageIndex
            return (
              <button
                key={`${selectedModel}-${fileName}`}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                aria-label={`View angle ${index + 1} of ${activeImages.length}`}
                aria-current={isActive}
                className={`relative h-8 w-12 flex-shrink-0 overflow-hidden rounded-md border transition-all duration-300 ${
                  isActive ? "border-white/60" : "border-white/10 hover:border-white/30"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  width={96}
                  height={64}
                  sizes="48px"
                  loading="lazy"
                  quality={60}
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                />
                {isActive && <span className="absolute inset-0 bg-white/10" aria-hidden="true" />}
              </button>
            )
          })}
        </div>

        {/* Pre-order Button */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40" aria-hidden="true">Limited pre-order</div>
          <button
            type="button"
            onClick={() => setShowPreorder(true)}
            aria-label={`Pre-order ${activeModel.name} sneakers`}
            className="rounded-full bg-gradient-to-r from-red-600 to-red-700 border border-red-500/50 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-all duration-200 hover:from-red-500 hover:to-red-600 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            Pre-order
          </button>
        </div>
      </div>

      {/* Lazy Load Image Viewer */}
      {isViewerOpen && (
        <Suspense fallback={null}>
          <ImageViewer
            isOpen={isViewerOpen}
            onClose={() => setIsViewerOpen(false)}
            images={activeImages}
            selectedIndex={selectedImageIndex}
            setSelectedIndex={setSelectedImageIndex}
            modelName={activeModel.name}
            modelId={selectedModel}
          />
        </Suspense>
      )}

      {/* Lazy Load Preorder Form */}
      {showPreorder && (
        <Suspense fallback={null}>
          <NotifyMeForm
            isOpen={showPreorder}
            onClose={() => setShowPreorder(false)}
            selectedModel={selectedModel}
          />
        </Suspense>
      )}
    </>
  )
}
