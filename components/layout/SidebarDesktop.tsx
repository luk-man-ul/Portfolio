'use client'

import { Avatar } from '@/components/common/Avatar'
import { Card } from '@/components/ui/Card'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { profile } from '@/data/profile'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe } from 'lucide-react'
import Link from 'next/link'

interface SidebarDesktopProps {
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

export function SidebarDesktop({ activeTab, onTabChange }: SidebarDesktopProps) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 lg:left-0 lg:p-6 lg:border-r border-gray-200 dark:border-gray-800">
      <Card className="flex flex-col h-full">
        <div className="flex flex-col items-center mb-6">
          <Avatar src={profile.avatar} alt={profile.name} size="lg" className="mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-1">
            {profile.name}
          </h1>
          <p className="text-accent-500 text-sm">{profile.title}</p>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 text-center">
          {profile.bio}
        </p>

        <nav className="flex-1 mb-6">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => onTabChange(tab.id)}
                  className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-accent-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-6">
          <ThemeToggle />
        </div>

        <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-2 text-sm">
            {profile.contact.email && (
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <a href={`mailto:${profile.contact.email}`} className="hover:text-accent-500">
                  {profile.contact.email}
                </a>
              </div>
            )}
            {profile.contact.phone && (
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>{profile.contact.phone}</span>
              </div>
            )}
            {profile.contact.location && (
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{profile.contact.location}</span>
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            {profile.social.github && (
              <Link
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
            )}
            {profile.social.linkedin && (
              <Link
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            )}
            {profile.social.twitter && (
              <Link
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            )}
            {profile.social.website && (
              <Link
                href={profile.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </Card>
    </aside>
  )
}
