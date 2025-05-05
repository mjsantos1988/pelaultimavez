import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">© 2025 Mentoria de Gestão de Projeto e Produto</p>
        <nav className="flex gap-4">
          <Link href="/semana5" className="text-sm text-muted-foreground hover:text-foreground">
            Início
          </Link>
          <Link href="/semana5/slides" className="text-sm text-muted-foreground hover:text-foreground">
            Slides
          </Link>
          <Link href="/semana5/quiz" className="text-sm text-muted-foreground hover:text-foreground">
            Quiz
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
