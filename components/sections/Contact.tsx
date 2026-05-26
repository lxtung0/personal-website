const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/alext',
    handle: '@alext',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/alext',
    handle: 'Alex Tung',
  },
  {
    label: 'Email',
    href: 'mailto:alex@example.com',
    handle: 'alex@example.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="text-5xl font-bold tracking-tight text-neutral-900 mb-4 dark:text-neutral-50">
        Get in touch
      </h2>
      <p className="text-xl text-neutral-500 mb-12 max-w-lg dark:text-neutral-400">
        I&apos;m always open to interesting conversations — about product, engineering,
        or ideas worth building.
      </p>

      <div className="flex flex-col sm:flex-row gap-8">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="group flex flex-col gap-1"
          >
            <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wide dark:text-neutral-500">
              {s.label}
            </span>
            <span className="text-base font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors group-hover:underline underline-offset-4 dark:text-neutral-300 dark:group-hover:text-neutral-50">
              {s.handle}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
