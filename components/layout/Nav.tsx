'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from './Container'
import { cn } from '@/lib/utils'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200',
        scrolled
          ? 'bg-neutral-50/80 backdrop-blur-md border-neutral-200 dark:bg-neutral-950/80 dark:border-neutral-800'
          : 'bg-transparent border-transparent'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-base font-bold text-neutral-900 tracking-tight hover:text-neutral-600 transition-colors dark:text-neutral-50 dark:hover:text-neutral-400"
          >
            Alex Tung
          </Link>
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors dark:text-neutral-400 dark:hover:text-neutral-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
