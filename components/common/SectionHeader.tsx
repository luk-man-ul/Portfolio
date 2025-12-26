import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  children?: ReactNode
}

export function SectionHeader({
  title,
  description,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-8', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
