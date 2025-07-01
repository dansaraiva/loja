import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface SectionProps {
  title: string
  titleAlign?: 'left' | 'center'
  link?: {
    text: string
    href: string
  }
  children: React.ReactNode
  className?: string
}

export default function Section({ 
  title, 
  titleAlign = 'left', 
  link, 
  children, 
  className = '' 
}: SectionProps) {
  const isCenter = titleAlign === 'center'
  
  return (
    <section className={`py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between mb-8 ${isCenter ? 'text-center' : ''}`}>
          <h2 className={`text-2xl font-bold text-dark-gray ${isCenter ? 'w-full' : ''}`}>
            {title}
          </h2>
          {link && (
            <Link
              href={link.href}
              className="flex items-center text-primary hover:text-tertiary transition-colors font-medium"
            >
              {link.text}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          )}
        </div>
        
        <div>
          {children}
        </div>
      </div>
    </section>
  )
}