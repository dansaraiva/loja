
'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Product } from '@/lib/types'

interface BuyBoxProps {
  product: Product
  selectedOptions?: { color?: string; size?: string }
}

interface QuantitySelectorProps {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

function QuantitySelector({ quantity, onDecrease, onIncrease }: QuantitySelectorProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark-gray mb-3">
        Quantidade
      </label>
      <div className="flex items-center border border-light-gray-2 rounded-lg bg-white">
        <button
          onClick={onDecrease}
          className="p-3 hover:bg-light-gray-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={quantity <= 1}
          aria-label="Diminuir quantidade"
        >
          <Minus className="w-4 h-4 text-dark-gray-2" />
        </button>
        <span className="flex-1 text-center py-3 font-medium text-dark-gray">
          {quantity}
        </span>
        <button
          onClick={onIncrease}
          className="p-3 hover:bg-light-gray-3 transition-colors"
          aria-label="Aumentar quantidade"
        >
          <Plus className="w-4 h-4 text-dark-gray-2" />
        </button>
      </div>
    </div>
  )
}

interface PriceSummaryProps {
  totalPrice: number
}

function PriceSummary({ totalPrice }: PriceSummaryProps) {
  return (
    <div className="text-center">
      <span className="text-sm text-dark-gray-3">Total:</span>
      <div className="text-2xl font-bold text-dark-gray">
        R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </div>
    </div>
  )
}

interface ActionButtonsProps {
  onBuyNow: () => void
  onAddToCart: () => void
}

function ActionButtons({ onBuyNow, onAddToCart }: ActionButtonsProps) {
  return (
    <div className="space-y-3">
      <button
        onClick={onBuyNow}
        className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-tertiary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        COMPRAR
      </button>

      <button
        onClick={onAddToCart}
        className="w-full bg-white border-2 border-primary text-primary font-bold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        ADICIONAR AO CARRINHO
      </button>
    </div>
  )
}

interface SelectedOptionsSummaryProps {
  selectedOptions?: { color?: string; size?: string }
}

function SelectedOptionsSummary({ selectedOptions }: SelectedOptionsSummaryProps) {
  if (!selectedOptions || (!selectedOptions.color && !selectedOptions.size)) {
    return null
  }

  return (
    <div className="pt-4 border-t border-light-gray-2">
      <p className="text-sm text-dark-gray-3 mb-2">Selecionado:</p>
      <div className="space-y-1">
        {selectedOptions.color && (
          <p className="text-sm text-dark-gray-2">
            <span className="font-medium">Cor:</span> {selectedOptions.color}
          </p>
        )}
        {selectedOptions.size && (
          <p className="text-sm text-dark-gray-2">
            <span className="font-medium">Tamanho:</span> {selectedOptions.size}
          </p>
        )}
      </div>
    </div>
  )
}

export default function BuyBox({ product, selectedOptions }: BuyBoxProps) {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const handleAddToCart = () => {
    const cartItem = {
      product: product.id,
      quantity,
      options: selectedOptions
    }

    console.log('Adicionando ao carrinho:', cartItem)
    alert(`${product.name} adicionado ao carrinho!`)
  }

  const handleBuyNow = () => {
    const purchaseItem = {
      product: product.id,
      quantity,
      options: selectedOptions
    }

    console.log('Comprando agora:', purchaseItem)
    alert('Redirecionando para o checkout...')
  }

  const finalPrice = product.priceDiscount || product.price
  const totalPrice = finalPrice * quantity

  return (
    <div className="bg-light-gray-3 p-6 rounded-lg">
      <div className="space-y-6">
        <QuantitySelector
          quantity={quantity}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
        />

        <PriceSummary totalPrice={totalPrice} />

        <ActionButtons
          onBuyNow={handleBuyNow}
          onAddToCart={handleAddToCart}
        />

        <SelectedOptionsSummary selectedOptions={selectedOptions} />
      </div>
    </div>
  )
}
