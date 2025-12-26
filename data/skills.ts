export interface Skill {
  name: string
  level: number // 0-100
  category: string
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90, category: 'Frontend' },
      { name: 'Next.js', level: 85, category: 'Frontend' },
      { name: 'TypeScript', level: 88, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'Python', level: 80, category: 'Backend' },
      { name: 'PostgreSQL', level: 75, category: 'Backend' },
      { name: 'MongoDB', level: 70, category: 'Backend' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90, category: 'Tools' },
      { name: 'Docker', level: 75, category: 'Tools' },
      { name: 'AWS', level: 70, category: 'Tools' },
    ],
  },
]
