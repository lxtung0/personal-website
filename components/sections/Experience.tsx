'use client'

import { motion } from 'framer-motion'
import { experience } from '@/content/experience'
import { cn } from '@/lib/utils'

export function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="text-5xl font-bold tracking-tight text-neutral-900 mb-4 dark:text-neutral-50">
        Experience
      </h2>
      <p className="text-xl text-neutral-500 mb-16 dark:text-neutral-400">
        Where I&apos;ve been and what I&apos;ve learned.
      </p>

      <div className="flex flex-col gap-0">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 pb-12 mb-12 border-b border-neutral-100 dark:border-neutral-900 last:border-0 last:mb-0 last:pb-0"
          >
            {/* Left column — period + type badge */}
            <div className="flex md:flex-col md:items-start items-center gap-3 md:pt-0.5">
              <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 shrink-0">
                {item.period}
              </span>
              <span
                className={cn(
                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold shrink-0',
                  item.type === 'work'
                    ? 'bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900'
                    : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
                )}
              >
                {item.type === 'work' ? 'Work' : 'Education'}
              </span>
            </div>

            {/* Right column — content */}
            <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-0.5">
                {item.role}
              </h3>
              <p className="text-base font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                {item.org}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
                {item.description}
              </p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {item.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors dark:text-neutral-400 dark:hover:text-neutral-50"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  )
}
