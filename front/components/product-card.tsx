
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
  className?: string
}

interface DiscountBadgeProps {
  originalPrice: number
  discountPrice: number
}

interface PriceDisplayProps {
  price: number
  discountPrice?: number
}

interface StarRatingProps {
  rating: number
  reviews?: number
}

function DiscountBadge({ originalPrice, discountPrice }: DiscountBadgeProps) {
  const discountPercentage = Math.round(((originalPrice - discountPrice) / originalPrice) * 100)

  return (
    <div className="absolute top-3 left-3 bg-warning text-white px-2 py-1 rounded text-xs font-bold">
      {discountPercentage}% OFF
    </div>
  )
}

function PriceDisplay({ price, discountPrice }: PriceDisplayProps) {
  const formatPrice = (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`

  if (discountPrice) {
    return (
      <div className="flex items-center space-x-2">
        <span className="price-discount">
          {formatPrice(price)}
        </span>
        <span className="price-original">
          {formatPrice(discountPrice)}
        </span>
      </div>
    )
  }

  return (
    <span className="price-original">
      {formatPrice(price)}
    </span>
  )
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? 'text-warning' : 'text-light-gray-2'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating, reviews }: StarRatingProps) {
  return (
    <div className="flex items-center mt-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} filled={index < Math.floor(rating)} />
        ))}
      </div>
      {reviews && (
        <span className="text-sm text-light-gray ml-2">
          ({reviews})
        </span>
      )}
    </div>
  )
}

function ProductImage({ product }: { product: Product }) {
  return (
    <div className="relative aspect-[292/321] bg-light-gray-3">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {product.priceDiscount && (
        <DiscountBadge
          originalPrice={product.price}
          discountPrice={product.priceDiscount}
        />
      )}
    </div>
  )
}

function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="p-4">
      <h3 className="text-dark-gray-2 font-medium mb-2 group-hover:text-primary transition-colors">
        {product.name}
      </h3>

      <PriceDisplay
        price={product.price}
        discountPrice={product.priceDiscount}
      />

      {product.rating && (
        <StarRating
          rating={product.rating}
          reviews={product.reviews}
        />
      )}
    </div>
  )
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className={`block group ${className}`}>
      <div className="card overflow-hidden">
        <ProductImage product={product} />
        <ProductInfo product={product} />
      </div>
    </Link>
  )
}
