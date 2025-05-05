"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, FileText, Users, PresentationIcon, Download, BookOpen } from "lucide-react"
import Footer from "@/components/footer"

export default function Semana4Page() {
  const [activeTab, setActiveTab] = useState("day1")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Mentoria de Gestão de Projeto e Produto</h1>
              <p className="text-slate-600 mt-1">
                Materiais e recursos para a Semana 4: Requisitos e Histórias de Usuário
              </p>
            </div>
            <nav>
              <div className="flex space-x-2">
                <Link href="/semana4/slides">
                  <Button variant="outline" size="sm">
                    <PresentationIcon className="h-4 w-4 mr-2" />
                    Slides
                  </Button>
                </Link>
                <Link href="/semana4/templates">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Templates
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-8">
          <h2 className="text-lg font-medium text-emerald-800">Mentoria Personalizada para Luci</h2>
          <p className="mt-2">
            Bem-vinda à quarta semana da sua jornada como Product Owner! Este material foi preparado especialmente para
            você, com foco nos fundamentos de requisitos e histórias de usuário que discutiremos nesta semana.
          </p>
          <p className="mt-2">
            Explore os recursos, faça os exercícios práticos e não se esqueça de trazer suas dúvidas para nossa próxima
            sessão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-slate-500" />
                Cronograma
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="font-medium">Dia 1</span>
                  <span className="text-slate-500">Ciclo de Vida de Desenvolvimento</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Dia 2</span>
                  <span className="text-slate-500">Tipos de Requisitos</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Dia 3</span>
                  <span className="text-slate-500">Histórias de Usuário e Critérios</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-slate-500" />
                Materiais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/semana4/slides" className="text-slate-900 hover:text-slate-700 flex items-center gap-2">
                    <PresentationIcon className="h-4 w-4" />
                    <span>Slides sobre requisitos e histórias</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/semana4/examples"
                    className="text-slate-900 hover:text-slate-700 flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Exemplos de histórias de usuário</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/semana4/templates"
                    className="text-slate-900 hover:text-slate-700 flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Templates para exercícios</span>
                  </Link>
                </li>
                <li>
                  <Link href="/semana4/quiz" className="text-slate-900 hover:text-slate-700 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Teste de conhecimento (10 questões)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/semana4/templates/exemplos"
                    className="text-slate-900 hover:text-slate-700 flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Templates preenchidos com exemplos</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-slate-500" />
                Próximos Passos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="font-medium">Exercício 1</span>
                  <span className="text-slate-500">Elicitação de Requisitos</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Exercício 2</span>
                  <span className="text-slate-500">Escrita de Histórias de Usuário</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Exercício 3</span>
                  <span className="text-slate-500">Refinamento de Histórias</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Próxima Mentoria</span>
                  <span className="text-slate-500">Discussão dos Exercícios</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/semana4/exercicios">
                <Button variant="outline" size="sm">
                  Acessar Exercícios
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Substituir o componente Tabs por uma implementação mais simples */}
        <div className="w-full mt-8">
          <div className="grid w-full grid-cols-3 bg-slate-100 p-1 rounded-md">
            <button
              onClick={() => {
                setActiveTab("day1")
                setTimeout(() => {
                  document.getElementById("day1-content")?.scrollIntoView({ behavior: "smooth" })
                }, 100)
              }}
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeTab === "day1" ? "bg-white shadow-sm" : "hover:bg-slate-200"}`}
              id="day1-tab"
            >
              Dia 1: Ciclo de Vida de Desenvolvimento
            </button>
            <button
              onClick={() => {
                setActiveTab("day2")
                setTimeout(() => {
                  document.getElementById("day2-content")?.scrollIntoView({ behavior: "smooth" })
                }, 100)
              }}
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeTab === "day2" ? "bg-white shadow-sm" : "hover:bg-slate-200"}`}
              id="day2-tab"
            >
              Dia 2: Tipos de Requisitos
            </button>
            <button
              onClick={() => {
                setActiveTab("day3")
                setTimeout(() => {
                  document.getElementById("day3-content")?.scrollIntoView({ behavior: "smooth" })
                }, 100)
              }}
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeTab === "day3" ? "bg-white shadow-sm" : "hover:bg-slate-200"}`}
              id="day3-tab"
            >
              Dia 3: Histórias de Usuário
            </button>
          </div>

          {activeTab === "day1" && (
            <div className="p-6 bg-white rounded-md shadow-sm mt-4 scroll-mt-24" id="day1-content">
              <h2 className="text-2xl font-bold mb-4">Ciclo de Vida de Desenvolvimento de Software</h2>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-2">Objetivos de Aprendizagem</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Compreender as diferentes fases do ciclo de vida de desenvolvimento de software</li>
                    <li>Identificar as principais metodologias de desenvolvimento</li>
                    <li>Entender o papel do Product Owner em cada fase do ciclo</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-2">Conteúdo</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium">1. Modelos de Ciclo de Vida</h4>
                      <ul className="list-disc pl-6">
                        <li>Modelo Cascata (Waterfall): fases sequenciais e bem definidas</li>
                        <li>Modelo Iterativo: desenvolvimento em ciclos com feedback</li>
                        <li>Modelo Ágil: adaptação contínua e entregas incrementais</li>
                        <li>DevOps: integração entre desenvolvimento e operações</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium">2. Fases do Ciclo de Vida</h4>
                      <ul className="list-disc pl-6">
                        <li>Concepção e ideação: definição do problema e solução</li>
                        <li>Planejamento: escopo, recursos, cronograma</li>
                        <li>Desenvolvimento: codificação e implementação</li>
                        <li>Testes: verificação de qualidade e funcionalidade</li>
                        <li>Implantação: entrega ao usuário final</li>
                        <li>Manutenção e evolução: melhorias contínuas</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-2">Reflexão para Luci</h3>
                  <div className="bg-emerald-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2 text-emerald-800">Perguntas para reflexão:</h4>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Qual modelo de ciclo de vida é utilizado na sua empresa atualmente?</li>
                      <li>Quais são os principais desafios que você enfrenta em cada fase do ciclo?</li>
                      <li>Como você poderia otimizar sua participação em cada fase do ciclo?</li>
                    </ul>
                    <p className="mt-4 text-sm text-emerald-700">
                      Anote suas reflexões para discutirmos na próxima sessão de mentoria!
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab === "day2" && (
            <div className="p-6 bg-white rounded-md shadow-sm mt-4 scroll-mt-24" id="day2-content">
              <h2 className="text-2xl font-bold mb-4">Tipos de Requisitos</h2>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-2">Objetivos de Aprendizagem</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Entender os diferentes tipos de requisitos de software</li>
                    <li>Aprender a identificar e documentar requisitos de forma eficaz</li>
                    <li>Compreender a importância da priorização de requisitos</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-2">Conteúdo</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium">1. Categorias de Requisitos</h4>
                      <ul className="list-disc pl-6">
                        <li>Requisitos Funcionais: o que o sistema deve fazer</li>
                        <li>Requisitos Não-Funcionais: qualidades do sistema (desempenho, segurança, usabilidade)</li>
                        <li>Requisitos de Negócio: objetivos organizacionais de alto nível</li>
                        <li>Requisitos de Usuário: necessidades dos usuários finais</li>
                        <li>Requisitos de Sistema: especificações técnicas detalhadas</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium">2. Técnicas de Levantamento de Requisitos</h4>
                      <ul className="list-disc pl-6">
                        <li>Entrevistas com stakeholders</li>
                        <li>Workshops e sessões de brainstorming</li>
                        <li>Observação de usuários</li>
                        <li>Análise de documentos existentes</li>
                        <li>Protótipos e mockups</li>
                        <li>Questionários e pesquisas</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-2">Exercício Prático para Luci</h3>
                  <div className="bg-emerald-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2 text-emerald-800">Identificando tipos de requisitos:</h4>
                    <ol className="list-decimal pl-6 mt-2 space-y-2">
                      <li>Escolha um produto digital que você utiliza frequentemente</li>
                      <li>Identifique pelo menos 3 requisitos funcionais desse produto</li>
                      <li>Identifique pelo menos 3 requisitos não-funcionais</li>
                      <li>Reflita sobre como esses requisitos contribuem para o valor do produto</li>
                      <li>Pense em como você priorizaria esses requisitos se fosse o PO</li>
                    </ol>
                    <p className="mt-4 text-sm text-emerald-700">
                      Use o template disponível na seção de Templates para documentar seus requisitos.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab === "day3" && (
            <div className="p-6 bg-white rounded-md shadow-sm mt-4 scroll-mt-24" id="day3-content">
              <h2 className="text-2xl font-bold mb-4">Histórias de Usuário</h2>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-2">Objetivos de Aprendizagem</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Compreender o conceito e formato de histórias de usuário</li>
                    <li>Aprender a escrever histórias de usuário eficazes</li>
                    <li>Entender como definir critérios de aceitação claros</li>
                    <li>Praticar o refinamento e divisão de histórias</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-2">Conteúdo</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium">1. Formato de Histórias de Usuário</h4>
                      <div className="bg-slate-50 p-4 rounded-md mt-2">
                        <p className="font-medium">Como [persona], eu quero [ação], para que [benefício].</p>
                        <ul className="list-disc pl-6 mt-2 text-sm">
                          <li>
                            <strong>Persona:</strong> Quem se beneficia da funcionalidade (papel ou tipo de usuário)
                          </li>
                          <li>
                            <strong>Ação:</strong> O que o usuário quer fazer (funcionalidade)
                          </li>
                          <li>
                            <strong>Benefício:</strong> Por que o usuário quer isso (valor)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium">2. Critérios INVEST</h4>
                      <p className="mt-1 mb-2">Uma boa história de usuário deve ser:</p>
                      <ul className="list-disc pl-6">
                        <li>
                          <strong>I</strong>ndependente: pode ser desenvolvida sem depender de outras histórias
                        </li>
                        <li>
                          <strong>N</strong>egociável: detalhes podem ser discutidos e ajustados
                        </li>
                        <li>
                          <strong>V</strong>aliosa: entrega valor real para o usuário
                        </li>
                        <li>
                          <strong>E</strong>stimável: a equipe consegue estimar o esforço necessário
                        </li>
                        <li>
                          <strong>S</strong>mall (Pequena): pode ser implementada em um sprint
                        </li>
                        <li>
                          <strong>T</strong>estável: pode ser verificada através de testes
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium">3. Critérios de Aceitação</h4>
                      <p className="mt-1 mb-2">
                        Condições que devem ser atendidas para que a história seja considerada completa.
                      </p>
                      <div className="bg-slate-50 p-4 rounded-md">
                        <p className="font-medium">Formato Gherkin:</p>
                        <ul className="list-none pl-0 mt-2">
                          <li>
                            <strong>Dado que</strong> [contexto inicial]
                          </li>
                          <li>
                            <strong>Quando</strong> [ação é realizada]
                          </li>
                          <li>
                            <strong>Então</strong> [resultado esperado]
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-2">Exercício Prático para Luci</h3>
                  <div className="bg-emerald-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2 text-emerald-800">Escrevendo histórias de usuário:</h4>
                    <ol className="list-decimal pl-6 mt-2 space-y-2">
                      <li>Escolha uma funcionalidade que você gostaria de adicionar a um aplicativo</li>
                      <li>Escreva 3 histórias de usuário relacionadas a essa funcionalidade</li>
                      <li>Para cada história, defina pelo menos 3 critérios de aceitação</li>
                      <li>Avalie suas histórias usando os critérios INVEST</li>
                      <li>Priorize suas histórias (Alta, Média, Baixa)</li>
                    </ol>
                    <p className="mt-4 text-sm text-emerald-700">
                      Use o template interativo de histórias de usuário para este exercício.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
