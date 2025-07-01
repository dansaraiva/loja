
import { Star } from 'lucide-react'
import { Product } from '@/lib/types'

interface ProductDetailsProps {
  product: Product
}

interface StarRatingProps {
  rating: number
  reviews?: number
}

interface PriceDisplayProps {
  price: number
  discountPrice?: number
}

interface ProductHeaderProps {
  name: string
  id: string
}

interface ProductDescriptionProps {
  description?: string
}

function ProductHeader({ name, id }: ProductHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-dark-gray mb-2">
        {name}
      </h1>
      <p className="text-dark-gray-3 mb-4">
        Referência: {id}
      </p>
    </div>
  )
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <Star
      className={`w-5 h-5 ${
        filled ? 'text-warning fill-current' : 'text-light-gray-2'
      }`}
    />
  )
}

function StarRating({ rating, reviews }: StarRatingProps) {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} filled={i < Math.floor(rating)} />
        ))}
      </div>
      <span className="text-dark-gray-3 ml-2">
        {rating} ({reviews} avaliações)
      </span>
    </div>
  )
}

function DiscountBadge({ originalPrice, discountPrice }: {
  originalPrice: number
  discountPrice: number
}) {
  const discountPercentage = Math.round(((originalPrice - discountPrice) / originalPrice) * 100)

  return (
    <span className="bg-warning text-white px-2 py-1 rounded text-sm font-bold">
      {discountPercentage}% OFF
    </span>
  )
}

function PriceDisplay({ price, discountPrice }: PriceDisplayProps) {
  const formatPrice = (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`

  if (discountPrice) {
    return (
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-2xl text-light-gray line-through">
          {formatPrice(price)}
        </span>
        <span className="text-3xl font-bold text-dark-gray">
          {formatPrice(discountPrice)}
        </span>
        <DiscountBadge originalPrice={price} discountPrice={discountPrice} />
      </div>
    )
  }

  return (
    <div className="mb-6">
      <span className="text-3xl font-bold text-dark-gray">
        {formatPrice(price)}
      </span>
    </div>
  )
}

function ProductDescription({ description }: ProductDescriptionProps) {
  if (!description) return null

  return (
    <div>
      <h3 className="text-lg font-semibold text-dark-gray mb-3">
        Descrição do produto
      </h3>
      <p className="text-dark-gray-2 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      <ProductHeader name={product.name} id={product.id} />

      {product.rating && (
        <StarRating rating={product.rating} reviews={product.reviews} />
      )}

      <PriceDisplay price={product.price} discountPrice={product.priceDiscount} />

      <ProductDescription description={product.description} />
    </div>
  )
}
