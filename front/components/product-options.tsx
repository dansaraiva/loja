
'use client'

import { useState } from 'react'
import { Product } from '@/lib/types'

interface ProductOptionsProps {
  product: Product
  onSelectionChange?: (selection: { color?: string; size?: string }) => void
}

interface OptionSelectorProps {
  title: string
  selectedValue: string
  options: string[]
  onSelect: (value: string) => void
}

interface OptionButtonProps {
  value: string
  isSelected: boolean
  onClick: () => void
  className?: string
}

function OptionButton({ value, isSelected, onClick, className = '' }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
        isSelected
          ? 'border-primary bg-primary text-white'
          : 'border-light-gray-2 text-dark-gray-2 hover:border-primary'
      } ${className}`}
    >
      {value}
    </button>
  )
}

function OptionSelector({ title, selectedValue, options, onSelect }: OptionSelectorProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-dark-gray mb-3">
        {title}: {selectedValue && <span className="font-normal">{selectedValue}</span>}
      </h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <OptionButton
            key={option}
            value={option}
            isSelected={selectedValue === option}
            onClick={() => onSelect(option)}
            className={title === 'Tamanho' ? 'min-w-[50px]' : ''}
          />
        ))}
      </div>
    </div>
  )
}

function ColorSelector({ colors, selectedColor, onColorChange }: {
  colors: string[]
  selectedColor: string
  onColorChange: (color: string) => void
}) {
  return (
    <OptionSelector
      title="Cor"
      selectedValue={selectedColor}
      options={colors}
      onSelect={onColorChange}
    />
  )
}

function SizeSelector({ sizes, selectedSize, onSizeChange }: {
  sizes: string[]
  selectedSize: string
  onSizeChange: (size: string) => void
}) {
  return (
    <OptionSelector
      title="Tamanho"
      selectedValue={selectedSize}
      options={sizes}
      onSelect={onSizeChange}
    />
  )
}

export default function ProductOptions({ product, onSelectionChange }: ProductOptionsProps) {
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
    onSelectionChange?.({ color, size: selectedSize })
  }

  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
    onSelectionChange?.({ color: selectedColor, size })
  }

  const colors = product.colors || []
  const sizes = product.sizes || []
  const hasColors = colors.length > 0
  const hasSizes = sizes.length > 0

  return (
    <div className="space-y-6">
      {hasColors && (
        <ColorSelector
          colors={colors}
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
        />
      )}

      {hasSizes && (
        <SizeSelector
          sizes={sizes}
          selectedSize={selectedSize}
          onSizeChange={handleSizeChange}
        />
      )}
    </div>
  )
}
