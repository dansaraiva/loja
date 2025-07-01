
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import Logo from './logo'

interface NavigationItem {
  name: string
  href: string
}

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  onSubmit: (e: React.FormEvent) => void
  className?: string
}

interface CartButtonProps {
  className?: string
}

interface NavigationProps {
  items: NavigationItem[]
  isActive: (href: string) => boolean
  isMobile?: boolean
  onItemClick?: () => void
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Produtos', href: '/products' },
]

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit, className = '' }: SearchBarProps) => (
  <form onSubmit={onSubmit} className={className}>
    <div className="relative">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-4 pr-10 py-2 border border-light-gray-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light-gray hover:text-primary"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  </form>
)

const CartButton = ({ className = '' }: CartButtonProps) => (
  <button className={`text-dark-gray-2 hover:text-primary transition-colors relative ${className}`}>
    <ShoppingCart className="w-6 h-6" />
    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      0
    </span>
  </button>
)

const Navigation = ({ items, isActive, isMobile = false, onItemClick }: NavigationProps) => (
  <nav className={isMobile ? "space-y-2" : "flex space-x-8"}>
    {items.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className={`
          ${isMobile ? 'block py-2' : ''}
          text-sm font-medium transition-colors
          ${isActive(item.href)
            ? `text-primary ${!isMobile ? 'border-b-2 border-primary pb-1' : ''}`
            : 'text-dark-gray-2 hover:text-primary'
          }
        `}
        onClick={onItemClick}
      >
        {item.name}
      </Link>
    ))}
  </nav>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?filter=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSubmit={handleSearch}
              className="w-full"
            />
          </div>

          <div className="hidden md:flex items-center">
            <CartButton />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-gray-2 hover:text-primary"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <nav className="hidden md:flex border-t border-light-gray-3 py-4">
          <Navigation items={navigation} isActive={isActive} />
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-light-gray-3">
          <div className="px-4 py-4 space-y-4">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSubmit={handleSearch}
            />

            <Navigation
              items={navigation}
              isActive={isActive}
              isMobile
              onItemClick={() => setIsMenuOpen(false)}
            />

            <div className="flex justify-end pt-4 border-t border-light-gray-3">
              <CartButton />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
