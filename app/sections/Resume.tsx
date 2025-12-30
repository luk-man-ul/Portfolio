'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/common/SectionHeader'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { resume } from '@/data/resume'
import { skills as skillsData } from '@/data/skills'
import { BookOpen, Briefcase, Code } from 'lucide-react'

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
      className="space-y-8"
    >
      

      {/* Resume Card */}
      <motion.div variants={itemVariants}>
        <Card floating>
        <div className="space-y-12">
          <SectionHeader title="Resume" />

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-accent-500" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100
">Education</h3>
            </div>
            <div className="relative">
              {resume.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {index !== resume.education.length - 1 && (
                    <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
                  )}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent-500 border-4 border-gray-900 dark:border-gray-800" />
                  <div className="bg-gray-100 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-200 dark:border-gray-700/30">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-accent-500" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100
">Experience</h3>
            </div>
            <div className="relative">
              {resume.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {index !== resume.experience.length - 1 && (
                    <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
                  )}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent-500 border-4 border-gray-900 dark:border-gray-800" />
                  <div className="bg-gray-100 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-200 dark:border-gray-700/30">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50
 mb-1">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-5 h-5 text-accent-500" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100
">Skills</h3>
            </div>
            <div className="space-y-8">
              {skillsData.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={itemVariants}>
                  <div className=" bg-gray-100 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-200 dark:border-gray-700/30">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 border-b pb-2 mb-6">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Card>
      </motion.div>
    </motion.div>
  )
}
