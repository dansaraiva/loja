
import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'white'
  className?: string
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-lg">D</span>
        </div>
        <span className={`text-xl font-bold ${
          variant === 'white' ? 'text-white' : 'text-dark-gray'
        }`}>
          Digital Store
        </span>
      </div>
    </Link>
  )
}
