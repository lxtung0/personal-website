import Link from 'next/link'
import { PostCard } from '@/components/blog/PostCard'
import { getAllPosts } from '@/lib/mdx'

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section id="writing" className="py-32 border-t border-neutral-200">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Writing
          </h2>
          <p className="text-xl text-neutral-500">Thinking out loud about engineering and product.</p>
        </div>
        <Link
          href="/blog"
          className="text-base font-medium text-neutral-500 hover:text-neutral-900 transition-colors shrink-0 ml-8"
        >
          All posts →
        </Link>
      </div>
      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  )
}
