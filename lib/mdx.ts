import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostFrontmatter } from '@/types'

const postsDir = path.join(process.cwd(), 'content/posts')

function slugFromFilename(filename: string): string {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx$/, '')
}

export function getAllPosts(): Omit<Post, 'content'>[] {
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = slugFromFilename(filename)
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data, content } = matter(raw)
      const fm = data as PostFrontmatter

      return {
        slug,
        title: fm.title,
        date: fm.date,
        excerpt: fm.excerpt,
        tags: fm.tags ?? [],
        published: fm.published ?? true,
        readingTime: readingTime(content).text,
        ogImage: fm.ogImage,
      }
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(postsDir)) return null

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'))
  const filename = files.find((f) => slugFromFilename(f) === slug)
  if (!filename) return null

  const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
  const { data, content } = matter(raw)
  const fm = data as PostFrontmatter

  if (fm.published === false) return null

  return {
    slug,
    title: fm.title,
    date: fm.date,
    excerpt: fm.excerpt,
    tags: fm.tags ?? [],
    published: fm.published ?? true,
    readingTime: readingTime(content).text,
    ogImage: fm.ogImage,
    content,
  }
}
