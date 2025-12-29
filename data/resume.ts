export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  description?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

export interface ResumeData {
  education: Education[]
  experience: Experience[]
}

export const resume: ResumeData = {
  education: [
    {
      id: '1',
      degree: 'Master of Computer Applications',
      institution: 'Kannur University',
      location: 'Kannur, Kerala',
      period: '2024 - 2026',
      description: 'Build hands on experience in WEB,AI,Data Engineering and Data Analytics through various projects and internships.',
    },
    {
      id: '2',
      degree: 'Bachelor of Computer Applications',
      institution: 'St Aloysius College',
      location: 'Mangalore, Karnataka',
      period: '2021 - 2024',
      description: 'I build a strong foundation in computer science and a passion for building scalable and efficient applications.Focused on software engineering and web technologies. ',
    },
    {
      id: '3',
      degree: 'High School Diploma',
      institution: 'Chemnad Jama-ath Higher Secondary School',
      location: 'Chemnad, Kerala',
      period: '2019 - 2021',
    },
    {
      id: '4',
      degree: 'High School ',
      institution: 'Wintouch International School',
      location: 'Kerala, India',
      period: '2007 - 2019',
    },
  ],
  experience: [
    {
      id: '1',
      title: 'Junior Web Developer',
      company: 'Altezzai Technologies',
      location: 'Kannur, Kerala',
      period: '2026 - present',
      description: [
        'Updatinging and maintaining the kannur university website',
        'Working on the next.js,tailwind css,type script,node.js,mongodb,express.js',

      ],
    },
    {
      id: '2',
      title: 'MCA Project',
      company: 'SmartBin',
      location: 'kannur, Kerala',
      period: '2025 - 2026',
      description: [
        'Developed a AI based Smart Bin integrating IoT and web applications',
        'Developed the whole web application and implemented RESTful APIs and database schemas',
        'Worked with modern JavaScript frameworks and libraries',
        'Participated in agile development processes',
      ],
    },
    {
      id: '3',
      title: 'Intern Full Stack Developer',
      company: 'Zephyr Technologies Pvt Ltd',
      location: 'Mangalore, Karnataka',
      period: '2024',
      description: [
        'Supported in development of multiple web applications using React, Next.js, and Node.js for the client',
        'Mentored college students and conducted code reviews',
        'Improved application performance through optimization and best practices',
      ],
    },
    {
      id: '4',
      title: 'BCA Project',
      company: 'Gym Management System',
      location: 'Mangalore ,Karnataka',
      period: '2022 - 2023',
      description: [
        'Developed a web-based Gym Management System to handle membership registration, renewals, and subscription tracking.',
        'Implemented admin dashboards for managing members, gym services, and personalized product offerings.',
        'Integrated authentication and role-based access for secure admin and user management.',
        'Followed agile development practices, including iterative development and feature-based enhancements.',
      ],
    },
    
  ],
}
