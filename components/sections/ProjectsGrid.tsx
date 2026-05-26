'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { projects } from '@/content/projects'

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.604-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  )
}

export function ProjectsGrid() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24">
      <h2 className="text-5xl font-bold tracking-tight text-neutral-900 mb-4 dark:text-neutral-50">
        Projects
      </h2>
      <p className="text-xl text-neutral-500 mb-12 dark:text-neutral-400">Things I&apos;ve built and shipped.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ y: -3 }}
            className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide dark:text-neutral-500">
                  {project.role} · {project.year}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-1 dark:text-neutral-50">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 ml-4 shrink-0">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors dark:hover:text-neutral-50"
                    aria-label="GitHub"
                  >
                    <GithubIcon />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors dark:hover:text-neutral-50"
                    aria-label="Live demo"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed mb-4 dark:text-neutral-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            {project.links.caseStudy && (
              <Link
                href={project.links.caseStudy}
                className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors underline underline-offset-2 dark:hover:text-neutral-50"
              >
                Read case study →
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
