'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Send } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Failed')

      alert('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card floating>
          <div className="space-y-12">
            <SectionHeader title="Contact Me" description="Get in touch" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
                    Location
                  </h3>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      Google Map Placeholder
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Dark-themed Google Map embed placeholder
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-6">
                    Send a Message
                  </h3>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                        placeholder="Your message..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      <Send className="w-4 h-4 mr-2 inline" />
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}
