import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
  onClick?: () => void
  active?: boolean
}

export function Badge({
  children,
  variant = 'default',
  className,
  onClick,
  active = false,
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300'
  
  const variants = {
    default: 'bg-gray-700 dark:bg-gray-800 text-gray-900 dark:text-gray-50',
    accent: active
      ? 'bg-accent-500 text-white'
      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 hover:bg-accent-500/20',
    outline: active
      ? 'border-2 border-accent-500 text-accent-500'
      : 'border-2 border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-accent-500/50',
  }

  const clickableClasses = onClick ? 'cursor-pointer' : ''

  return (
    <span
      className={cn(baseClasses, variants[variant], clickableClasses, className)}
      onClick={onClick}
    >
      {children}
    </span>
  )
}
