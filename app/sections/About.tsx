'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/common/SectionHeader'
import { about } from '@/data/about'
import { Code, Palette, Server, Lightbulb } from 'lucide-react'

const iconMap: Record<string, any> = {
  code: Code,
  palette: Palette,
  server: Server,
  lightbulb: Lightbulb,
}

export function About() {
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
      <motion.div variants={itemVariants}>
      <Card floating>
        <div className="space-y-12">

      <SectionHeader title="About Me" className="mb-2" />

      <motion.div variants={itemVariants}>
        <Card>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {about.intro}
          </p>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SectionHeader title="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {about.whatIDo.map((item, index) => {
            const Icon = iconMap[item.icon] || Code
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <Card hover>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent-500/20 rounded-xl">
                      <Icon className="w-6 h-6 text-accent-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SectionHeader title="Testimonials" />
        <div className="overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
          <div className="flex space-x-6 min-w-max">
            {about.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex-shrink-0 w-80"
              >
                <Card>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-50">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
  <SectionHeader title="Clients" />

  <div className="overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
    <div
      className="
        flex items-center
        justify-between
        gap-8
        min-w-full
        opacity-60
      "
    >
      {about.clientLogos.map((logo, index) => (
        <div
          key={index}
          className="
            flex-shrink-0
            w-24 h-24
            bg-gray-200 dark:bg-gray-800
            rounded-lg
            flex items-center justify-center
          "
        >
          <span className="text-gray-600 dark:text-gray-400 text-xs">
            Logo
          </span>
        </div>
      ))}
    </div>
  </div>
</motion.div>



       </div>
      </Card>
    </motion.div>
    </motion.div>
  )
}
