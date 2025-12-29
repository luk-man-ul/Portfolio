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
      { name: 'Node.js', level: 90, category: 'Backend' },
      { name: 'Python', level: 90, category: 'Backend' },
      { name: 'PostgreSQL', level: 75, category: 'Backend' },
      { name: 'MongoDB', level: 85, category: 'Backend' },
    ],
  },
  {
    name: 'Data Engineering',
    skills: [
      { name: 'Azure fabrics', level: 85, category: 'Backend' },
      { name: 'Python', level: 90, category: 'Backend' },
      { name: 'Data modeling', level: 75, category: 'Backend' },
      { name: 'Pipelines', level: 70, category: 'Backend' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git|GitHub', level: 99, category: 'Tools' },
      { name: 'Cursor Ai', level: 85, category: 'Tools' },
      { name: 'DataBricks', level: 70, category: 'Tools' },
    ],
  },
]
