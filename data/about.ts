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
  intro: 'I am a passionate full-stack developer with experience building scalable web applications and an aspiring data engineer. I specialize in modern JavaScript frameworks and love solving data driven solutions.',
  whatIDo: [
    {
      title: 'Full Stack Web Development',
      description: 'Building responsive, performant web applications using modern frameworks and best practices.',
      icon: 'code',
    },
    {
      title: 'Frontend Development',
      description: 'Building beautiful and intuitive user interfaces that provide exceptional user experiences.',
      icon: 'palette',
    },
    {
      title: 'Data Engineering',
      description: 'Building scalable, efficient data pipelines & architectures to collect, process, & analyze data.',
      icon: 'database',
    }, 
    {
      title: 'Backend Development',
      description: 'Designing and implementing robust server-side solutions and RESTful APIs.',
      icon: 'server',
    },
  ],
  testimonials: [
    {
      name: 'Sundar',
      role: 'CEO',
      company: 'Alphabet inc.',
      content: 'Working with lukman was a pleasure. He transformed our vision into reality with clean, maintainable code.',
      avatar: '/testimonial-2.jpg',
    },
    {
      name: 'Arvind',
      role: 'Lead Executive',
      company: 'International Business Machines',
      content: 'lukman\'s technical skills combined with his understanding of design make him an invaluable team member.',
      avatar: '/testimonial-3.jpg',
    },
    {
      name: 'Mukesh',
      role: 'chairman',
      company: 'Reliance Industries',
      content: 'lukman delivered exceptional work on our project. His attention to detail and technical expertise exceeded our expectations.',
      avatar: '/testimonial-1.jpg',
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
