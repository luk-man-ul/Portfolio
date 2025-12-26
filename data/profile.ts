export interface Profile {
  name: string
  title: string
  avatar: string
  bio: string
  contact: {
    email: string
    phone?: string
    location?: string
  }
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
}

export const profile: Profile = {
  name: 'Lukumanul Hakim',
  title: 'Full Stack Developer',
  avatar: '/avatar.jpg',
  bio: 'Passionate developer with expertise in modern web technologies. Building amazing digital experiences one line of code at a time.',
  contact: {
    email: 'lukumanul.haqim@gmail.com',
    phone: '+91 7306417315',
    location: 'KERALA, INDIA',
  },
  social: {
    github: 'https://github.com/luk-man-ul',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    website: 'https://johndoe.dev',
  },
}
