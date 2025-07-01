
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Logo from './logo'

interface FooterLink {
  name: string
  href: string
}

interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface FooterSectionProps {
  title: string
  links: FooterLink[]
}

const footerData = {
  categorias: [
    { name: 'Camisetas', href: '/products?category=camisetas' },
    { name: 'Calças', href: '/products?category=calcas' },
    { name: 'Bonés', href: '/products?category=bones' },
    { name: 'Tênis', href: '/products?category=tenis' },
  ],
  contato: [
    { name: 'Av. Santos Dumont, 1510 - 1° andar - Aldeota, Fortaleza - CE, 60150-161', href: '#' },
    { name: '(85) 3051-3411', href: 'tel:+558530513411' },
  ],
}

const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
]

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4 capitalize">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-white hover:text-secondary transition-colors text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CompanyInfo() {
  return (
    <div className="lg:col-span-1">
      <Logo variant="white" className="mb-6" />
      <p className="text-white text-sm leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <div className="flex space-x-4">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.name}
              href={social.href}
              className="text-white hover:text-secondary transition-colors"
              aria-label={social.name}
            >
              <Icon className="w-6 h-6" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function FooterContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CompanyInfo />
      <FooterSection title="Categorias" links={footerData.categorias} />
      <FooterSection title="Contato" links={footerData.contato} />
    </div>
  )
}

function Copyright() {
  return (
    <div className="border-t border-dark-gray-2 mt-12 pt-8">
      <p className="text-center text-white text-sm">
        © 2024 Digital Store. Todos os direitos reservados.
      </p>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FooterContent />
        <Copyright />
      </div>
    </footer>
  )
}
