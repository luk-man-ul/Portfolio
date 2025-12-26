export interface WhatIDo {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export interface AboutData {
  intro: string
  whatIDo: WhatIDo[]
  testimonials: Testimonial[]
  clientLogos: string[]
}

export const about: AboutData = {
  intro: 'I am a passionate full-stack developer with experience building scalable web applications. I specialize in modern JavaScript frameworks and love creating intuitive user experiences.',
  whatIDo: [
    {
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks and best practices.',
      icon: 'code',
    },
    {
      title: 'Data Engineering',
      description: 'Creating beautiful and intuitive user interfaces that provide exceptional user experiences.',
      icon: 'palette',
    },
    {
      title: 'Backend Development',
      description: 'Designing and implementing robust server-side solutions and RESTful APIs.',
      icon: 'server',
    },
    {
      title: 'Data Analytics',
      description: 'Helping businesses improve their digital presence and solve complex technical challenges.',
      icon: 'lightbulb',
    },
  ],
  testimonials: [
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      company: 'Tech Corp',
      content: 'John delivered exceptional work on our project. His attention to detail and technical expertise exceeded our expectations.',
      avatar: '/testimonial-1.jpg',
    },
    {
      name: 'Mike Johnson',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'Working with John was a pleasure. He transformed our vision into reality with clean, maintainable code.',
      avatar: '/testimonial-2.jpg',
    },
    {
      name: 'Sarah Williams',
      role: 'Design Lead',
      company: 'Creative Agency',
      content: 'John\'s technical skills combined with his understanding of design make him an invaluable team member.',
      avatar: '/testimonial-3.jpg',
    },
  ],
  clientLogos: [
    '/client-1.png',
    '/client-2.png',
    '/client-3.png',
    '/client-4.png',
    '/client-5.png',
  ],
}
