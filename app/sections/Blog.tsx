'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/common/SectionHeader'
import { blogPosts } from '@/data/blog'
import { Calendar, Clock } from 'lucide-react'

export function Blog() {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <SectionHeader title="Blog" description="Latest articles and thoughts" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <Card hover className="h-full flex flex-col">
              {post.image && (
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Blog Image</span>
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <Badge variant="outline" className="mb-3 self-start">
                  {post.category}
                </Badge>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
