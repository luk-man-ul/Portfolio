'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SidebarDesktop } from '@/components/layout/SidebarDesktop'
import { SidebarMobile } from '@/components/layout/SidebarMobile'
import { TopNav } from '@/components/layout/TopNav'
import { About } from './sections/About'
import { Resume } from './sections/Resume'
import { Portfolio } from './sections/Portfolio'
import { Blog } from './sections/Blog'
import { Contact } from './sections/Contact'
import { config } from '@/data/config'

type TabId = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact'

const sections: Record<TabId, React.ComponentType> = {
  about: About,
  resume: Resume,
  portfolio: Portfolio,
  blog: Blog,
  contact: Contact,
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('about')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as TabId)
  }

  const ActiveSection = sections[activeTab]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <SidebarDesktop activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="lg:pl-[22rem] lg:pr-6">
        <TopNav activeTab={activeTab} onTabChange={handleTabChange} />

        <main className="p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <SidebarMobile />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {(activeTab !== 'blog' || config.blogEnabled) && ActiveSection && (
                  <ActiveSection />
                )}
                {activeTab === 'blog' && !config.blogEnabled && (
                  <div className="text-center py-12">
                    <p className="text-gray-600 dark:text-gray-400">
                      Blog section is currently disabled.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}
