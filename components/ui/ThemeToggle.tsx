'use client'

import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
 
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-accent-500" />
        ) : (
          <Sun className="w-5 h-5 text-accent-500" />
        )}
      </motion.div>
    </button>
  )
}
