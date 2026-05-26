export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  tags: string[]
  published: boolean
  ogImage?: string
}

export interface Post extends PostFrontmatter {
  slug: string
  readingTime: string
  content: string
}

export interface Project {
  id: string
  title: string
  description: string
  role: 'Built' | 'Led' | 'Designed' | 'Contributed'
  status: 'Live' | 'Archived' | 'In Progress'
  tech: string[]
  links: {
    demo?: string
    github?: string
    caseStudy?: string
  }
  featured: boolean
  year: number
  image?: string
}
