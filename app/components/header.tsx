import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900">Mentoria de Gestão de Projeto e Produto</h1>
          <nav>
            <div className="flex space-x-6">
              <Link href="/semana5" className="text-sm text-slate-600 hover:text-slate-900">
                Início
              </Link>
              <Link href="/semana5/slides" className="text-sm text-slate-600 hover:text-slate-900">
                Slides
              </Link>
              <Link href="/semana5/quiz" className="text-sm text-slate-600 hover:text-slate-900">
                Quiz
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
