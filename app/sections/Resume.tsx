'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/common/SectionHeader'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { resume } from '@/data/resume'
import { skills as skillsData } from '@/data/skills'

export function Resume() {
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
      className="space-y-12"
    >
      <SectionHeader title="Resume" />

      <motion.div variants={itemVariants}>
        <SectionHeader title="Education" description="My educational background" />
        <div className="relative">
          {resume.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {index !== resume.education.length - 1 && (
                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
              )}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent-500 border-4 border-gray-900 dark:border-white" />
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-accent-500 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {edu.location} • {edu.period}
                </p>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {edu.description}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SectionHeader title="Experience" description="My professional journey" />
        <div className="relative">
          {resume.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {index !== resume.experience.length - 1 && (
                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gray-800 dark:bg-gray-200" />
              )}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent-500 border-4 border-gray-900 dark:border-white" />
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-1">
                  {exp.title}
                </h3>
                <p className="text-accent-500 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {exp.location} • {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 flex items-start"
                    >
                      <span className="text-accent-500 mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SectionHeader title="Skills" description="Technologies and tools I work with" />
        <div className="space-y-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-6">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar
                      key={skillIndex}
                      label={skill.name}
                      value={skill.level}
                      showValue
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
