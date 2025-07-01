
'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Gallery from '@/components/gallery'
import ProductDetails from '@/components/product-details'
import ProductOptions from '@/components/product-options'
import BuyBox from '@/components/buy-box'
import ProductListing from '@/components/product-listing'
import Section from '@/components/section'
import { getProductById, mockProducts } from '@/lib/mock-data'
import { Product } from '@/lib/types'

export default function ProductViewPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<{ color?: string; size?: string }>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundProduct = getProductById(params.id as string)
      setProduct(foundProduct || null)
      setLoading(false)
    }
  }, [params.id])

  const handleSelectionChange = (options: { color?: string; size?: string }) => {
    setSelectedOptions(options)
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-light-gray-3 rounded w-32 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-light-gray-3 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-light-gray-3 rounded w-3/4"></div>
              <div className="h-4 bg-light-gray-3 rounded w-1/2"></div>
              <div className="h-6 bg-light-gray-3 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-dark-gray mb-4">
            Produto não encontrado
          </h1>
          <p className="text-dark-gray-2 mb-6">
            O produto que você está procurando não existe ou foi removido.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-tertiary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos produtos
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-dark-gray-3 mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">Produtos</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category.toLowerCase()}`} className="hover:text-primary">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-dark-gray">{product.name}</span>
        </nav>

        <Link
          href="/products"
          className="inline-flex items-center text-primary hover:text-tertiary font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Gallery 
              images={product.images || [product.image]} 
              alt={product.name}
            />
          </div>

          <div className="space-y-8">
            <ProductDetails product={product} />
            
            <ProductOptions 
              product={product} 
              onSelectionChange={handleSelectionChange}
            />
            
            <BuyBox 
              product={product} 
              selectedOptions={selectedOptions}
            />
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <Section 
          title="Produtos relacionados"
          link={{ text: 'Ver todos', href: `/products?category=${product.category.toLowerCase()}` }}
          className="bg-light-gray-3"
        >
          <ProductListing products={relatedProducts} columns={4} />
        </Section>
      )}
    </div>
  )
}
