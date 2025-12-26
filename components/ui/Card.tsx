import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className, hover = false, glass = false }: CardProps) {
  const baseClasses = glass 
    ? 'rounded-2xl p-6 glass transition-all duration-300'
    : 'rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300'
  const hoverClasses = hover ? 'hover:scale-[1.02] hover:shadow-xl cursor-pointer' : ''

  return (
    <motion.div
      className={cn(baseClasses, hoverClasses, className)}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
