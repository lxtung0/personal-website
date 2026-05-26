# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (also serves as type-check / lint since there's no separate lint script)
- `npm start` — serve production build

No test runner is configured.

## Architecture

Personal website for Alex Tung built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, and **TypeScript**.

### Key directories

- `app/` — Next.js App Router pages. Single-page site with `page.tsx` as the homepage.
- `components/` — React components organized by role: `layout/` (Nav, Footer, Container), `sections/` (Hero, Experience, ProjectsGrid, Contact, BlogPreview), `ui/` (ThemeToggle, Badge), `blog/` (PostCard, MDXComponents).
- `content/posts/` — MDX blog posts. Filenames use `YYYY-MM-DD-slug.mdx` format; the date prefix is stripped to derive the slug.
- `lib/mdx.ts` — reads and parses MDX posts from the filesystem using gray-matter + reading-time.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) and `formatDate()`.
- `types/index.ts` — shared TypeScript interfaces (`Post`, `PostFrontmatter`, `Project`).

### Styling & theming

- Tailwind CSS v4 with `@import "tailwindcss"` syntax and `@plugin` / `@theme` directives in `globals.css`.
- Class-based dark mode via `next-themes` (`ThemeProvider` wraps the app). Custom variant: `@custom-variant dark (&:where(.dark, .dark *))`.
- Fonts: Geist Sans + Geist Mono loaded via `next/font/google`, exposed as CSS variables.

### Conventions

- Path alias `@/*` maps to project root.
- Client components use `'use client'` directive; animations use framer-motion.
- Blog post frontmatter fields: `title`, `date`, `excerpt`, `tags`, `published`, optional `ogImage`.
