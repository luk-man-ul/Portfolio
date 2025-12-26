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
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with cart functionality, payment integration, and admin dashboard.',
    category: 'Web App',
    image: '/project-1.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example',
    },
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    category: 'Web App',
    image: '/project-2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example',
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
      live: 'https://example.com',
      github: 'https://github.com/example',
    },
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
    category: 'Web App',
    image: '/project-4.jpg',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example',
    },
  },
]

export const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
