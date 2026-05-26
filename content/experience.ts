export interface ExperienceItem {
  id: string
  type: 'work' | 'education'
  role: string
  org: string
  period: string
  description: string
  highlights?: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'edu-1',
    type: 'education',
    role: 'B.S. Computer Science',
    org: 'University of Wisconsin–Madison',
    period: '2019 — 2023',
    description:
      "Focus on what's relevant to product: any product design courses, capstone projects with real users, leadership in student orgs, or PM-adjacent coursework.",
  },
  {
    id: 'edu-2',
    type: 'education',
    role: 'Your Second Degree or Certificate',
    org: 'Another Institution',
    period: '2017 — 2019',
    description:
      'Describe any relevant coursework, projects, or achievements from this program.',
  },
  {
    id: 'work-2',
    type: 'work',
    role: 'Software Engineering Intern',
    org: 'Previous Company',
    period: 'Summer 2022',
    description:
      'Describe your internship impact here. Even small internships count — what did you own, what did you learn about how products are built?',
  },
  {
    id: 'work-1',
    type: 'work',
    role: 'Software Engineer',
    org: 'Your Company',
    period: '2023 — Present',
    description:
      'Replace this with what you actually did. Focus on impact: what shipped, how many users, what improved. PM interviewers care about outcomes more than technologies.',
    highlights: [
      'Led X initiative that resulted in Y outcome',
      'Collaborated with design and product to ship Z feature',
    ],
  },
]
