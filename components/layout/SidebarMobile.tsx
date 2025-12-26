'use client'

import { useState } from 'react'
import { Avatar } from '@/components/common/Avatar'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export function SidebarMobile() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <div className="lg:hidden mb-6">
      <Card>
        <div className="flex flex-col items-center">
          <Avatar src={profile.avatar} alt={profile.name} size="lg" className="mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-1">
            {profile.name}
          </h1>
          <p className="text-accent-500 text-sm mb-4">{profile.title}</p>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">
            {profile.bio}
          </p>

          <Button
            variant="outline"
            onClick={() => setShowContacts(!showContacts)}
            className="mb-4"
          >
            {showContacts ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Hide Contacts
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show Contacts
              </>
            )}
          </Button>

          {showContacts && (
            <div className="w-full space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
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

              <div className="flex space-x-4 justify-center">
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
          )}
        </div>
      </Card>
    </div>
  )
}
