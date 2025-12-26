export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn the fundamentals of Next.js 14 and how to build modern web applications with the App Router.',
    date: '2024-01-15',
    category: 'Web Development',
    readTime: '5 min read',
    image: '/blog-1.jpg',
  },
  {
    id: '2',
    title: 'Mastering TypeScript in 2024',
    excerpt: 'Deep dive into TypeScript advanced features and best practices for modern development.',
    date: '2024-01-10',
    category: 'Programming',
    readTime: '8 min read',
    image: '/blog-2.jpg',
  },
  {
    id: '3',
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: 'A comprehensive guide to creating beautiful, responsive user interfaces using Tailwind CSS.',
    date: '2024-01-05',
    category: 'Design',
    readTime: '6 min read',
    image: '/blog-3.jpg',
  },
]
