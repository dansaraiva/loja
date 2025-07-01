
'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductListing from '@/components/product-listing'
import FilterGroup, { filterGroups } from '@/components/filter-group'
import { mockProducts, searchProducts } from '@/lib/mock-data'
import { Product } from '@/lib/types'
import { Filter, X } from 'lucide-react'

function ProductListingContent() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts)
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Get search query from URL params
  useEffect(() => {
    const filter = searchParams.get('filter')
    if (filter) {
      setSearchQuery(filter)
      const searchResults = searchProducts(filter)
      setProducts(searchResults)
      setFilteredProducts(searchResults)
    }
  }, [searchParams])

  // Apply filters
  useEffect(() => {
    let filtered = products

    // Apply each filter group
    Object.entries(activeFilters).forEach(([filterType, selectedValues]) => {
      if (selectedValues.length > 0) {
        filtered = filtered.filter(product => {
          switch (filterType) {
            case 'category':
              return selectedValues.some(value =>
                product.category.toLowerCase().includes(value.toLowerCase())
              )
            case 'brand':
              return selectedValues.some(value =>
                product.name.toLowerCase().includes(value.toLowerCase())
              )
            case 'color':
              return product.colors?.some(color =>
                selectedValues.some(value =>
                  color.toLowerCase().includes(value.toLowerCase())
                )
              )
            case 'size':
              return product.sizes?.some(size =>
                selectedValues.includes(size.toLowerCase())
              )
            default:
              return true
          }
        })
      }
    })

    setFilteredProducts(filtered)
  }, [activeFilters, products])

  const handleFilterChange = (filterType: string, values: string[]) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: values
    }))
  }

  const clearAllFilters = () => {
    setActiveFilters({})
  }

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).reduce((count, values) => count + values.length, 0)
  }

  const pageTitle = searchQuery
    ? `Resultados para "${searchQuery}"`
    : 'Produtos'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-dark-gray mb-2">
            {pageTitle}
          </h1>
          <p className="text-dark-gray-2">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden flex items-center bg-primary text-white px-4 py-2 rounded-lg"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filtros
          {getActiveFilterCount() > 0 && (
            <span className="ml-2 bg-white text-primary px-2 py-1 rounded-full text-xs font-bold">
              {getActiveFilterCount()}
            </span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar - Filters */}
        <aside className={`
          md:col-span-1 space-y-6
          ${isSidebarOpen ? 'block' : 'hidden md:block'}
          ${isSidebarOpen ? 'fixed inset-0 z-50 bg-white p-4 overflow-y-auto' : ''}
        `}>
          {/* Mobile Header */}
          {isSidebarOpen && (
            <div className="flex items-center justify-between border-b border-light-gray-2 pb-4 mb-6 md:hidden">
              <h2 className="text-xl font-bold text-dark-gray">Filtros</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-dark-gray-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Clear Filters */}
          {getActiveFilterCount() > 0 && (
            <button
              onClick={clearAllFilters}
              className="w-full text-left text-primary hover:text-tertiary font-medium text-sm"
            >
              Limpar todos os filtros ({getActiveFilterCount()})
            </button>
          )}

          {/* Filter Groups */}
          {filterGroups.map((group) => (
            <FilterGroup
              key={group.id}
              title={group.title}
              options={group.options}
              selectedValues={activeFilters[group.id] || []}
              onSelectionChange={(values) => handleFilterChange(group.id, values)}
            />
          ))}

          {/* Mobile Apply Button */}
          {isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg md:hidden"
            >
              Aplicar Filtros
            </button>
          )}
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3">
          {filteredProducts.length > 0 ? (
            <ProductListing products={filteredProducts} columns={3} />
          ) : (
            <div className="text-center py-12">
              <p className="text-light-gray text-lg mb-4">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
              <button
                onClick={clearAllFilters}
                className="text-primary hover:text-tertiary font-medium"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default function ProductListingPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-light-gray-3 rounded w-48 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="h-32 bg-light-gray-3 rounded"></div>
              <div className="h-32 bg-light-gray-3 rounded"></div>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-light-gray-3 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      <ProductListingContent />
    </Suspense>
  )
}
