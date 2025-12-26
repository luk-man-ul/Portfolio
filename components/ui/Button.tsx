import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900'
  
  const variants = {
    primary: 'bg-accent-500 hover:bg-accent-600 text-white hover:shadow-glow',
    secondary: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-50',
    outline: 'border-2 border-gray-300 dark:border-gray-800 hover:border-accent-500 hover:text-accent-500 text-gray-900 dark:text-gray-50',
  }

  const variantClass = variants[variant]

  return (
    <motion.button
      className={cn(baseClasses, variantClass, className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
