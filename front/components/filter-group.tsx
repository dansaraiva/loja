
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FilterOption {
  id: string
  name: string
  value: string
  count?: number
}

interface FilterGroupProps {
  title: string
  options: FilterOption[]
  selectedValues: string[]
  onSelectionChange: (values: string[]) => void
  isCollapsible?: boolean
  defaultOpen?: boolean
}

interface FilterHeaderProps {
  title: string
  isCollapsible: boolean
  isOpen: boolean
  onToggle: () => void
}

function FilterHeader({ title, isCollapsible, isOpen, onToggle }: FilterHeaderProps) {
  if (isCollapsible) {
    return (
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left p-4 border-b border-light-gray-2 hover:bg-light-gray-3 transition-colors"
      >
        <h3 className="font-semibold text-dark-gray">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-dark-gray-3" />
        ) : (
          <ChevronDown className="w-5 h-5 text-dark-gray-3" />
        )}
      </button>
    )
  }

  return (
    <div className="p-4 border-b border-light-gray-2">
      <h3 className="font-semibold text-dark-gray">{title}</h3>
    </div>
  )
}

interface FilterOptionItemProps {
  option: FilterOption
  isSelected: boolean
  onToggle: (value: string) => void
}

function FilterOptionItem({ option, isSelected, onToggle }: FilterOptionItemProps) {
  return (
    <label className="flex items-center cursor-pointer group hover:bg-light-gray-3 p-2 rounded transition-colors">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(option.value)}
        className="w-4 h-4 text-primary border-light-gray-2 rounded focus:ring-primary focus:ring-2"
      />
      <span className="ml-3 text-dark-gray-2 group-hover:text-dark-gray">
        {option.name}
        {option.count !== undefined && (
          <span className="text-light-gray ml-1">({option.count})</span>
        )}
      </span>
    </label>
  )
}

interface FilterContentProps {
  options: FilterOption[]
  selectedValues: string[]
  onSelectionChange: (value: string) => void
}

function FilterContent({ options, selectedValues, onSelectionChange }: FilterContentProps) {
  return (
    <div className="p-4">
      <div className="space-y-1">
        {options.map((option) => (
          <FilterOptionItem
            key={option.id}
            option={option}
            isSelected={selectedValues.includes(option.value)}
            onToggle={onSelectionChange}
          />
        ))}
      </div>
    </div>
  )
}

export default function FilterGroup({
  title,
  options,
  selectedValues,
  onSelectionChange,
  isCollapsible = true,
  defaultOpen = true
}: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const handleCheckboxChange = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value]

    onSelectionChange(newValues)
  }

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="border border-light-gray-2 rounded-lg bg-white shadow-sm">
      <FilterHeader
        title={title}
        isCollapsible={isCollapsible}
        isOpen={isOpen}
        onToggle={toggleOpen}
      />

      {isOpen && (
        <FilterContent
          options={options}
          selectedValues={selectedValues}
          onSelectionChange={handleCheckboxChange}
        />
      )}
    </div>
  )
}

// Filter Groups for ProductListingPage
export const filterGroups = [
  {
    id: 'category',
    title: 'Categorias',
    options: [
      { id: 'tenis', name: 'Tênis', value: 'tenis', count: 12 },
      { id: 'camisetas', name: 'Camisetas', value: 'camisetas', count: 8 },
      { id: 'calcas', name: 'Calças', value: 'calcas', count: 6 },
      { id: 'jaquetas', name: 'Jaquetas', value: 'jaquetas', count: 4 },
      { id: 'bones', name: 'Bonés', value: 'bones', count: 3 },
    ]
  },
  {
    id: 'brand',
    title: 'Marcas',
    options: [
      { id: 'nike', name: 'Nike', value: 'nike', count: 15 },
      { id: 'adidas', name: 'Adidas', value: 'adidas', count: 12 },
      { id: 'puma', name: 'Puma', value: 'puma', count: 8 },
      { id: 'levis', name: 'Levi\'s', value: 'levis', count: 5 },
    ]
  },
  {
    id: 'color',
    title: 'Cores',
    options: [
      { id: 'preto', name: 'Preto', value: 'preto', count: 18 },
      { id: 'branco', name: 'Branco', value: 'branco', count: 15 },
      { id: 'azul', name: 'Azul', value: 'azul', count: 10 },
      { id: 'vermelho', name: 'Vermelho', value: 'vermelho', count: 7 },
      { id: 'cinza', name: 'Cinza', value: 'cinza', count: 6 },
    ]
  },
  {
    id: 'size',
    title: 'Tamanhos',
    options: [
      { id: 'p', name: 'P', value: 'p', count: 8 },
      { id: 'm', name: 'M', value: 'm', count: 12 },
      { id: 'g', name: 'G', value: 'g', count: 10 },
      { id: 'gg', name: 'GG', value: 'gg', count: 6 },
      { id: '38', name: '38', value: '38', count: 5 },
      { id: '39', name: '39', value: '39', count: 8 },
      { id: '40', name: '40', value: '40', count: 10 },
      { id: '41', name: '41', value: '41', count: 8 },
      { id: '42', name: '42', value: '42', count: 6 },
    ]
  }
]
