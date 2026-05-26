import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Alex Tung',
    template: '%s · Alex Tung',
  },
  description:
    'Software engineer transitioning into product management. I build things and think about why they should be built.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alextung.dev',
    siteName: 'Alex Tung',
    title: 'Alex Tung',
    description:
      'Software engineer transitioning into product management. I build things and think about why they should be built.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Tung',
    description:
      'Software engineer transitioning into product management. I build things and think about why they should be built.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <ThemeProvider>
          <Nav />
          <main className="relative z-10">{children}</main>
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
