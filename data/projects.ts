export interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  technologies: string[]
  links?: {
    live?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'SmartBin',
    description: 'IoT + AI powered smart bin that detects plastic bottle disposal and incentivizes users through a secure web platform.',
    category: 'Web App',
    image: '/project-1.jpg',
    technologies: ['React', 'Node.js', 'Python', 'C','MongoDB'],
    links: {
      live: 'smartbin-project.netlify.app',
      github: 'https://github.com/luk-man-ul/SmartBin_frontend',
    },
  },
  {
    id: '2',
    title: 'Gym Management System',
    description: 'A web-based system for managing gym members, trainers, fees, and attendance.',
    category: 'Web App',
    image: '/project-2.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Php','MySQL'],
    links: {
      live: '',
      github: '',
    },
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills with modern design.',
    category: 'Website',
    image: '/project-3.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    links: {
      live: '',
      github: 'https://github.com/luk-man-ul/Portfolio',
    },
  },
]

export const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
