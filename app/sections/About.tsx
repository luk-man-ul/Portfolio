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
      {about.clientLogos.map((logo, index) => {
        // AltezzAI logo — first slot
        if (index === 0) {
          return (
            <div
              key={index}
              className="
                flex-shrink-0
                w-24 h-24
                bg-gray-200 dark:bg-gray-800
                rounded-lg
                flex items-center justify-center
                overflow-hidden
                p-2
              "
            >
              <img
                src="/altezzai-logo.png"
                alt="AltezzAI"
                className="w-full h-full object-contain"
              />
            </div>
          )
        }

        // Star Sports-inspired star symbol — second slot
        if (index === 1) {
          return (
            <div
              key={index}
              className="
                flex-shrink-0
                w-24 h-24
                bg-gray-200 dark:bg-gray-800
                rounded-lg
                flex items-center justify-center
                overflow-hidden
                p-2
              "
            >
              {/* Star broadcast icon — no copyrighted wordmarks */}
              <svg
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16"
                aria-label="Star Sports brand icon"
              >
                {/* Outer glow ring */}
                <circle cx="40" cy="40" r="36" fill="none" stroke="#e8b800" strokeWidth="2.5" opacity="0.4" />
                {/* Five-pointed star */}
                <polygon
                  points="40,6 49.5,31.5 77,31.5 54.5,48 63,73.5 40,57 17,73.5 25.5,48 3,31.5 30.5,31.5"
                  fill="#e8b800"
                  stroke="#c99a00"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                {/* Inner highlight dot */}
                <circle cx="40" cy="40" r="5" fill="#fff" opacity="0.55" />
              </svg>
            </div>
          )
        }

        // Remaining placeholder slots — unchanged
        return (
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
        )
      })}
    </div>
  </div>
</motion.div>



       </div>
      </Card>
    </motion.div>
    </motion.div>
  )
}
