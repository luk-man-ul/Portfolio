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
    title: 'Star',
    description: 'A modern tailoring management platform for handling bookings, order tracking, and customer interactions.',
    category: 'Progressive Web App',
    image: '/project-1.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase '],
    links: {
      live: 'https://star-eta-nine.vercel.app/',
      github: 'https://github.com/luk-man-ul/STAR',
    },
  },
  {
    id: '2',
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
    id: '3',
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
    id: '4',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills with modern design.',
    category: 'Website',
    image: '/project-3.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    links: {
      live: 'https://portfolio-s-p-lukumanul-hakeems-projects.vercel.app/',
      github: 'https://github.com/luk-man-ul/Portfolio',
    },
  },
  {
    id: '5',
    title: 'ERP System',
    description: 'Developed an integrated system for employee management, project tracking, and financial operations with real-time reporting and cross-module workflows.',
    category: 'Website',
    image: '/project-5.jpg',
    technologies: ['Nest.js', 'React.js', 'Tailwind CSS', 'TypeScript'],
    links: {
      live: 'https://epms-frontend-alpha.vercel.app/',
      github: 'https://github.com/luk-man-ul/EPMS_Backend',
    },
  },
  {
    id: '6',
    title: 'EnterpriseIQ',
    description: 'Built an enterprise AI knowledge platform using RAG for intelligent document search, semantic retrieval, and citation-backed AI responses.',
    category: 'AI / Full Stack Web',
    image: '/project-6.jpg',
    technologies: [
    'Next.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'pgvector',
    'LangChain',
    'Gemini',
    'Docker'
  ],
    links: {
      live: 'https://enterprise-iq-frontend-eight.vercel.app/',
      github: 'https://github.com/luk-man-ul/EnterpriseIQ',
    },
  },
]

export const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
