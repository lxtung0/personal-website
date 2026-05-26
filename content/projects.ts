import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    description:
      'A short description of what this project does, the problem it solves, and the outcome. Replace this with your actual project.',
    role: 'Built',
    status: 'Live',
    tech: ['TypeScript', 'React', 'PostgreSQL'],
    links: {
      github: 'https://github.com/alext',
      demo: 'https://example.com',
    },
    featured: true,
    year: 2025,
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description:
      'Another project description. Focus on the impact and what you learned — this helps with the product management angle.',
    role: 'Led',
    status: 'Live',
    tech: ['Python', 'FastAPI', 'Redis'],
    links: {
      github: 'https://github.com/alext',
    },
    featured: true,
    year: 2024,
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description:
      'A third project. Even side projects and experiments belong here — they show range and curiosity.',
    role: 'Built',
    status: 'In Progress',
    tech: ['Next.js', 'Vercel', 'MDX'],
    links: {
      github: 'https://github.com/alext',
      caseStudy: '/blog/building-my-website',
    },
    featured: true,
    year: 2026,
  },
]
