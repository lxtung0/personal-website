'use client'

import { motion } from 'framer-motion'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  }
}

export function Hero() {
  return (
    <section id="about" className="pt-48 pb-32 text-center">
      <motion.h1
        {...fadeUp(0.08)}
        className="text-7xl md:text-8xl font-bold tracking-tight text-neutral-900 mb-8 leading-[1.05] dark:text-neutral-50"
      >
        Hi, I&apos;m Alex.
      </motion.h1>

      <motion.p
        {...fadeUp(0.16)}
        className="text-2xl font-medium text-neutral-500 leading-relaxed max-w-xl mx-auto dark:text-neutral-400"
      >
        I spent years building things. Now I care just as much about
        which things are worth building.
      </motion.p>
    </section>
  )
}
