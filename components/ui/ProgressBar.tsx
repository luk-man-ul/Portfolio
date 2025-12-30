'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number // 0-100
  label?: string
  className?: string
  showValue?: boolean
}

export function ProgressBar({
  value,
  label,
  className,
  showValue = false,
}: ProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={cn('w-full', className)}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {label}
          </span>
          {showValue && (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {value}%
            </span>
          )}
        </div>
      )}
      <div className="h-2 bg-gray-700/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${value}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
