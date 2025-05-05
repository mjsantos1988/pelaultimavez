"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, FileText } from "lucide-react"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import InteractiveUserStories from "./interactive-user-stories"
import InteractiveRequirements from "./interactive-requirements"

export default function TemplatesPage() {
  const userStoriesRef = useRef<HTMLDivElement>(null)
  const requirementsRef = useRef<HTMLDivElement>(null)

  // Função para rolar até a seção de histórias de usuário
  const scrollToUserStories = () => {
    if (userStoriesRef.current) {
      userStoriesRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Função para rolar até a seção de requisitos
  const scrollToRequirements = () => {
    if (requirementsRef.current) {
      requirementsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Verificar se há um hash na URL e rolar para a seção correspondente
  useEffect(() => {
    const hash = window.location.hash
    if (hash === "#user-stories-section") {
      setTimeout(() => scrollToUserStories(), 100)
    } else if (hash === "#requirements-section") {
      setTimeout(() => scrollToRequirements(), 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <PageHeader title="Templates" description="Modelos e ferramentas para exercícios práticos" />

      <main className="container mx-auto py-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Templates Interativos</h2>
          <p className="text-slate-600 mb-6">
            Estes templates podem ser editados diretamente nos campos, com opção de salvar seu progresso e exportar como
            PDF.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Template de Histórias de Usuário</h3>
              <p className="text-sm text-slate-600 mb-4">
                Crie e organize histórias de usuário com seus critérios de aceitação, seguindo o formato recomendado.
              </p>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={scrollToUserStories}>
                  Editar Template
                </Button>
                <Link href="/semana4/templates/exemplos">
                  <Button variant="outline" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    Ver Exemplos
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Template de Requisitos</h3>
              <p className="text-sm text-slate-600 mb-4">
                Documente e categorize requisitos funcionais e não-funcionais para seu produto.
              </p>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={scrollToRequirements}>
                  Editar Template
                </Button>
                <Link href="/semana4/templates/exemplos">
                  <Button variant="outline" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    Ver Exemplos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Templates Adicionais</h2>
          <p className="text-slate-600 mb-6">
            Acesse templates específicos para diferentes atividades de Product Owner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Template de Entrevista</h3>
              <p className="text-sm text-slate-600 mb-4">
                Estrutura para conduzir entrevistas eficazes com stakeholders para elicitação de requisitos.
              </p>
              <div className="flex gap-2">
                <Link href="/semana4/templates/exemplos">
                  <Button className="flex-1">Ver Exemplo</Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Template de Refinamento</h3>
              <p className="text-sm text-slate-600 mb-4">
                Estrutura para sessões de refinamento de histórias, quebrando épicos em histórias menores.
              </p>
              <div className="flex gap-2">
                <Link href="/semana4/templates/exemplos">
                  <Button className="flex-1">Ver Exemplo</Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Template de Elicitação</h3>
              <p className="text-sm text-slate-600 mb-4">
                Estrutura para documentar requisitos elicitados através de diferentes técnicas.
              </p>
              <div className="flex gap-2">
                <Link href="/semana4/templates/exemplos">
                  <Button className="flex-1">Ver Exemplo</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div ref={userStoriesRef} className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6">Template de Histórias de Usuário</h2>
          <InteractiveUserStories />
        </div>

        <div ref={requirementsRef} className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6">Template de Requisitos</h2>
          <InteractiveRequirements />
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/semana4">
            <Button className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para a Página Inicial
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
