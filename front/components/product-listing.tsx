
import { Product } from '@/lib/types'
import ProductCard from './product-card'

interface ProductListingProps {
  products: Product[]
  className?: string
  columns?: 2 | 3 | 4
}

export default function ProductListing({ 
  products, 
  className = '', 
  columns = 4 
}: ProductListingProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-light-gray text-lg">Nenhum produto encontrado.</p>
      </div>
    )
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
