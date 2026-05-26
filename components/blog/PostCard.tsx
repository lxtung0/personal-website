import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/types'

type PostCardProps = Omit<Post, 'content'>

export function PostCard({ slug, title, date, excerpt, tags, readingTime }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block py-8 border-b border-neutral-200 last:border-0">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-medium text-neutral-400">{formatDate(date)}</span>
        <span className="text-neutral-200">·</span>
        <span className="text-sm font-medium text-neutral-400">{readingTime}</span>
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors mb-3">
        {title}
      </h3>
      <p className="text-base text-neutral-500 leading-relaxed mb-4">{excerpt}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Link>
  )
}
