'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '@/components/common/Avatar'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { profile } from '@/data/profile'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export function ProfileHero() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <Card floating className="relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-6">
          <Avatar src={profile.avatar} alt={profile.name} size="lg" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-50 mb-2">
              {profile.name}
            </h1>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-700/50 text-gray-300 text-sm font-medium">
              {profile.title}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() => setShowContacts(!showContacts)}
          className="md:absolute md:top-6 md:right-6 border-accent-500/50 hover:border-accent-500 text-gray-300 bg-gray-700/30 hover:bg-gray-700/50"
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
      </div>

      <AnimatePresence>
        {showContacts && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-6 border-t border-gray-700 overflow-hidden"
          >
            <div className="space-y-4">
              <div className="space-y-2 text-sm">
                {profile.contact.email && (
                  <div className="flex items-center text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${profile.contact.email}`} className="hover:text-accent-500">
                      {profile.contact.email}
                    </a>
                  </div>
                )}
                {profile.contact.phone && (
                  <div className="flex items-center text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{profile.contact.phone}</span>
                  </div>
                )}
                {profile.contact.location && (
                  <div className="flex items-center text-gray-400">
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
                    className="text-gray-400 hover:text-accent-500 transition-colors"
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
                    className="text-gray-400 hover:text-accent-500 transition-colors"
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
                    className="text-gray-400 hover:text-accent-500 transition-colors"
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
                    className="text-gray-400 hover:text-accent-500 transition-colors"
                    aria-label="Website"
                  >
                    <Globe className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

