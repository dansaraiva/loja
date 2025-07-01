
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryProps {
  images: string[]
  alt: string
  className?: string
}

interface NavigationButtonProps {
  onClick: () => void
  direction: 'left' | 'right'
}

interface ThumbnailProps {
  image: string
  alt: string
  index: number
  isActive: boolean
  onClick: () => void
}

interface ImageCounterProps {
  current: number
  total: number
}

function NavigationButton({ onClick, direction }: NavigationButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight
  const position = direction === 'left' ? 'left-4' : 'right-4'

  return (
    <button
      onClick={onClick}
      className={`absolute ${position} top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity`}
      aria-label={`${direction === 'left' ? 'Imagem anterior' : 'Próxima imagem'}`}
    >
      <Icon className="w-5 h-5 text-dark-gray" />
    </button>
  )
}

function ImageCounter({ current, total }: ImageCounterProps) {
  return (
    <div className="absolute bottom-4 right-4 bg-dark-gray/80 text-white px-3 py-1 rounded-full text-sm">
      {current} / {total}
    </div>
  )
}

function Thumbnail({ image, alt, index, isActive, onClick }: ThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
        isActive
          ? 'border-primary'
          : 'border-light-gray-2 hover:border-primary/50'
      }`}
      aria-label={`Ver imagem ${index + 1}`}
    >
      <Image
        src={image}
        alt={`${alt} thumbnail ${index + 1}`}
        fill
        className="object-cover"
      />
    </button>
  )
}

function MainImage({ image, alt, index }: { image: string; alt: string; index: number }) {
  return (
    <div className="relative aspect-square bg-light-gray-3 rounded-lg overflow-hidden group">
      <Image
        src={image}
        alt={`${alt} - ${index + 1}`}
        fill
        className="object-cover"
        priority={index === 0}
      />
    </div>
  )
}

function ThumbnailGrid({ images, alt, currentIndex, onImageSelect }: {
  images: string[]
  alt: string
  currentIndex: number
  onImageSelect: (index: number) => void
}) {
  if (images.length <= 1) return null

  return (
    <div className="grid grid-cols-4 gap-2">
      {images.map((image, index) => (
        <Thumbnail
          key={index}
          image={image}
          alt={alt}
          index={index}
          isActive={index === currentIndex}
          onClick={() => onImageSelect(index)}
        />
      ))}
    </div>
  )
}

function EmptyState({ className }: { className: string }) {
  return (
    <div className={`aspect-square bg-light-gray-3 rounded-lg flex items-center justify-center ${className}`}>
      <span className="text-light-gray">Imagem não disponível</span>
    </div>
  )
}

export default function Gallery({ images, alt, className = '' }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const navigateToImage = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) => {
      if (direction === 'prev') {
        return prev > 0 ? prev - 1 : images.length - 1
      }
      return prev < images.length - 1 ? prev + 1 : 0
    })
  }

  const selectImage = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return <EmptyState className={className} />
  }

  const hasMultipleImages = images.length > 1

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative">
        <MainImage
          image={images[currentIndex]}
          alt={alt}
          index={currentIndex}
        />

        {hasMultipleImages && (
          <>
            <NavigationButton
              onClick={() => navigateToImage('prev')}
              direction="left"
            />
            <NavigationButton
              onClick={() => navigateToImage('next')}
              direction="right"
            />
            <ImageCounter
              current={currentIndex + 1}
              total={images.length}
            />
          </>
        )}
      </div>

      <ThumbnailGrid
        images={images}
        alt={alt}
        currentIndex={currentIndex}
        onImageSelect={selectImage}
      />
    </div>
  )
}
