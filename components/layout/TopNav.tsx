'use client'

import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface TopNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export function TopNav({ activeTab, onTabChange }: TopNavProps) {
  return (
    <nav className="lg:hidden sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex space-x-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
