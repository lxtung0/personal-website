import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-neutral-900 mt-10 mb-4 scroll-mt-20">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-neutral-900 mt-8 mb-3 scroll-mt-20">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-neutral-700 leading-relaxed mb-5">{children}</p>
  ),
  a: ({ href, children }) => {
    const isInternal = href?.startsWith('/')
    if (isInternal) {
      return (
        <Link
          href={href!}
          className="text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
      >
        {children}
      </a>
    )
  },
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-5 mb-5 space-y-1.5 text-neutral-700">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-5 mb-5 space-y-1.5 text-neutral-700">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-neutral-300 pl-4 my-6 text-neutral-500 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm font-mono text-neutral-800">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="overflow-x-auto rounded-xl bg-neutral-950 p-5 my-6 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-neutral-200 my-10" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-neutral-900">{children}</strong>
  ),
}
