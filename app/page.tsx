import { Container } from '@/components/layout/Container'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <Container>
      <Hero />
      <Experience />
      <ProjectsGrid />
      <Contact />
    </Container>
  )
}
