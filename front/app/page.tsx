
import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/section'
import ProductListing from '@/components/product-listing'
import { mockProducts, mockCollections } from '@/lib/mock-data'

interface HeroBannerProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonHref: string
  imageUrl: string
  imageAlt: string
}

function HeroBanner({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  imageUrl,
  imageAlt
}: HeroBannerProps) {
  return (
    <section className="relative bg-light-gray-3 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray leading-tight">
              {title}
            </h1>
            <p className="text-lg text-dark-gray-2 leading-relaxed">
              {subtitle}
            </p>
            <p className="text-dark-gray-3">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-tertiary transition-colors"
            >
              {buttonText}
            </Link>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface CollectionCardProps {
  collection: {
    id: string
    name: string
    image: string
    href: string
  }
}

function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={collection.href} className="group block">
      <div className="card overflow-hidden">
        <div className="relative aspect-[16/9] bg-light-gray-3">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-xl font-bold">
              {collection.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

interface CollectionsSectionProps {
  collections: Array<{
    id: string
    name: string
    image: string
    href: string
  }>
}

function CollectionsSection({ collections }: CollectionsSectionProps) {
  return (
    <Section
      title="Coleções em destaque"
      titleAlign="center"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </Section>
  )
}

interface SpecialOfferProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonHref: string
  imageUrl: string
  imageAlt: string
}

function SpecialOffer({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  imageUrl,
  imageAlt
}: SpecialOfferProps) {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {title}
            </h2>
            <p className="text-xl">
              {subtitle}
            </p>
            <p className="text-white/90">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-block bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-light-gray-3 transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const featuredProducts = mockProducts.slice(0, 8)

  const heroData = {
    title: "Melhores ofertas personalizadas",
    subtitle: "Queima de estoque Nike 🔥",
    description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    buttonHref: "/products",
    imageUrl: "https://i.pinimg.com/736x/67/24/f2/6724f25b8002c3a78f27ef71a2c96e0f.jpg",
    imageAlt: "Oferta especial Nike"
  }

  const specialOfferData = {
    title: "Oferta especial",
    subtitle: "Air Jordan edição de colecionador com 33% OFF",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Ver Oferta",
    buttonHref: "/products/1",
    imageUrl: "https://i.pinimg.com/originals/a5/80/c3/a580c3270cc19c8ea4c033e648de4d43.jpg",
    imageAlt: "Oferta especial Air Jordan"
  }

  return (
    <div>
      <HeroBanner {...heroData} />

      <CollectionsSection collections={mockCollections} />

      <Section
        title="Produtos em alta"
        link={{ text: 'Ver todos', href: '/products' }}
        className="bg-light-gray-3"
      >
        <ProductListing products={featuredProducts} columns={4} />
      </Section>

      <SpecialOffer {...specialOfferData} />
    </div>
  )
}
