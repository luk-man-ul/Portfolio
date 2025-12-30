'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/common/SectionHeader'
import { projects, projectCategories } from '@/data/projects'
import { ExternalLink, Github } from 'lucide-react'

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

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
                <SectionHeader title="Portfolio" />

      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-3 mb-8">
          {projectCategories.map((category) => (
            <Badge
              key={category}
              variant="accent"
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <Card hover className="relative overflow-hidden group h-full flex flex-col">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400 text-sm">Project Image</span>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                    {project.title}
                  </h3>
                  <Badge variant="outline">{project.category}</Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-accent-500 hover:text-accent-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-accent-500 hover:text-accent-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div variants={itemVariants}>
          <Card>
            <p className="text-center text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </Card>
        </motion.div>
      )}
       </div>
      </Card>
    </motion.div>
    </motion.div>
  )
}
