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
  name: 'S P Lukumanul Hakeem',
  title: 'Full Stack web Developer & Aspiring data engineer',
  avatar: '/avatar.jpg',
  bio: 'Building scalable web today, data-driven systems tomorrow.',
  contact: {
    email: 'lukumanul.haqim@gmail.com',
    phone: '+91 7306417315',
    location: 'KERALA, INDIA',
  },
  social: {
    github: 'https://github.com/luk-man-ul',
    linkedin: 'https://www.linkedin.com/in/lukumanul-hakeem-1067883a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    twitter: '',
    website: '',
  },
}
