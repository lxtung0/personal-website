import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 mt-24 dark:border-neutral-800">
      <Container>
        <p className="text-sm text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Alex Tung
        </p>
      </Container>
    </footer>
  )
}
