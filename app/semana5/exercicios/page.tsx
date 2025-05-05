"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import PageHeader from "@/components/page-header"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Exercicios() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState<React.ReactNode | null>(null)
  const [dialogTitle, setDialogTitle] = useState("")
  const [downloadFilename, setDownloadFilename] = useState("")

  // Função para preparar o conteúdo do modelo e abrir o diálogo
  const handleShowTemplate = (exerciseType: string) => {
    let title = ""
    let content: React.ReactNode = null
    let filename = ""

    if (exerciseType === "release-plan") {
      title = "Modelo de Plano de Release"
      filename = "modelo-plano-release.html"
      content = (
        <div className="text-left space-y-6 max-h-[70vh] overflow-y-auto p-4">
          <section>
            <h2 className="text-xl font-bold mb-3">Informações Gerais</h2>
            <ul className="list-none space-y-2">
              <li>
                <strong>Nome do Release:</strong> [Nome]
              </li>
              <li>
                <strong>Versão:</strong> [Número da Versão]
              </li>
              <li>
                <strong>Data de Lançamento:</strong> [Data]
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Objetivos</h2>
            <p>[Descreva os objetivos principais deste release]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Funcionalidades</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>[Funcionalidade 1] - Prioridade: [Alta/Média/Baixa]</li>
              <li>[Funcionalidade 2] - Prioridade: [Alta/Média/Baixa]</li>
              <li>[Funcionalidade 3] - Prioridade: [Alta/Média/Baixa]</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Critérios de Qualidade</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>[Critério 1]</li>
              <li>[Critério 2]</li>
              <li>[Critério 3]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Estratégia de Testes</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>[Etapa de teste 1]</li>
              <li>[Etapa de teste 2]</li>
              <li>[Etapa de teste 3]</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Riscos e Mitigações</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Risco 1:</strong> [Descrição] - <strong>Mitigação:</strong> [Estratégia]
              </li>
              <li>
                <strong>Risco 2:</strong> [Descrição] - <strong>Mitigação:</strong> [Estratégia]
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Plano de Comunicação</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>[Estratégia de comunicação 1]</li>
              <li>[Estratégia de comunicação 2]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Plano de Rollback</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>[Etapa de rollback 1]</li>
              <li>[Etapa de rollback 2]</li>
            </ol>
          </section>
        </div>
      )
    } else if (exerciseType === "test-plan") {
      title = "Modelo de Plano de Testes"
      filename = "modelo-plano-testes.html"
      content = (
        <div className="text-left space-y-6 max-h-[70vh] overflow-y-auto p-4">
          <section>
            <h2 className="text-xl font-bold mb-3">Informações Gerais</h2>
            <ul className="list-none space-y-2">
              <li>
                <strong>Nome do Projeto:</strong> [Nome]
              </li>
              <li>
                <strong>Versão:</strong> [Número da Versão]
              </li>
              <li>
                <strong>Data de Início dos Testes:</strong> [Data]
              </li>
              <li>
                <strong>Data de Conclusão dos Testes:</strong> [Data]
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Escopo</h2>
            <p>[Descreva o escopo dos testes]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Funcionalidades a Serem Testadas</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>[Funcionalidade 1]</li>
              <li>[Funcionalidade 2]</li>
              <li>[Funcionalidade 3]</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Tipos de Testes</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <input type="checkbox" id="unit" className="mr-2" />
                <label htmlFor="unit">Testes Unitários</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="integration" className="mr-2" />
                <label htmlFor="integration">Testes de Integração</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="system" className="mr-2" />
                <label htmlFor="system">Testes de Sistema</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="acceptance" className="mr-2" />
                <label htmlFor="acceptance">Testes de Aceitação</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="regression" className="mr-2" />
                <label htmlFor="regression">Testes de Regressão</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="performance" className="mr-2" />
                <label htmlFor="performance">Testes de Performance</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="security" className="mr-2" />
                <label htmlFor="security">Testes de Segurança</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="usability" className="mr-2" />
                <label htmlFor="usability">Testes de Usabilidade</label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Casos de Teste</h2>

            <div className="border p-4 rounded-md mb-4">
              <h3 className="font-bold">Caso de Teste 1</h3>
              <ul className="list-none space-y-2 mt-2">
                <li>
                  <strong>ID:</strong> TC001
                </li>
                <li>
                  <strong>Descrição:</strong> [Descrição]
                </li>
                <li>
                  <strong>Pré-condições:</strong> [Pré-condições]
                </li>
                <li>
                  <strong>Passos:</strong> [Passos]
                </li>
                <li>
                  <strong>Resultado Esperado:</strong> [Resultado]
                </li>
                <li>
                  <strong>Prioridade:</strong> [Alta/Média/Baixa]
                </li>
              </ul>
            </div>

            <div className="border p-4 rounded-md">
              <h3 className="font-bold">Caso de Teste 2</h3>
              <ul className="list-none space-y-2 mt-2">
                <li>
                  <strong>ID:</strong> TC002
                </li>
                <li>
                  <strong>Descrição:</strong> [Descrição]
                </li>
                <li>
                  <strong>Pré-condições:</strong> [Pré-condições]
                </li>
                <li>
                  <strong>Passos:</strong> [Passos]
                </li>
                <li>
                  <strong>Resultado Esperado:</strong> [Resultado]
                </li>
                <li>
                  <strong>Prioridade:</strong> [Alta/Média/Baixa]
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Critérios de Aceitação</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>[Critério 1]</li>
              <li>[Critério 2]</li>
              <li>[Critério 3]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Ambiente de Testes</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>[Requisitos de hardware]</li>
              <li>[Requisitos de software]</li>
              <li>[Configurações necessárias]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Cronograma</h2>
            <ul className="list-none space-y-2">
              <li>
                <strong>Preparação:</strong> [Datas]
              </li>
              <li>
                <strong>Execução:</strong> [Datas]
              </li>
              <li>
                <strong>Análise de Resultados:</strong> [Datas]
              </li>
              <li>
                <strong>Correções:</strong> [Datas]
              </li>
              <li>
                <strong>Reteste:</strong> [Datas]
              </li>
            </ul>
          </section>
        </div>
      )
    } else if (exerciseType === "case-analysis") {
      title = "Modelo de Análise de Caso - Falha de Release"
      filename = "modelo-analise-caso.html"
      content = (
        <div className="text-left space-y-6 max-h-[70vh] overflow-y-auto p-4">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Informações Básicas do Caso</h2>
            <ul className="list-none space-y-2">
              <li>
                <strong>Nome do Caso:</strong> [Nome]
              </li>
              <li>
                <strong>Empresa:</strong> [Nome da Empresa]
              </li>
              <li>
                <strong>Tipo de Release:</strong> [Tipo]
              </li>
              <li>
                <strong>Data do Release:</strong> [Data]
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. O que aconteceu?</h2>
            <p>[Descreva detalhadamente o ocorrido durante o release que resultou na falha]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Quais foram as causas prováveis?</h2>
            <p>[Identifique e analise as causas que levaram à falha]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Como a empresa respondeu?</h2>
            <p>[Descreva as ações tomadas pela empresa após a identificação do problema]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Qual foi o impacto?</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold">Impacto para os usuários</h3>
                <p>[Descreva o impacto para os usuários]</p>
              </div>
              <div>
                <h3 className="font-bold">Impacto para o negócio</h3>
                <p>[Descreva o impacto para o negócio]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Lições aprendidas e melhores práticas</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>[Lição 1]</li>
              <li>[Lição 2]</li>
              <li>[Lição 3]</li>
              <li>[Lição 4]</li>
              <li>[Lição 5]</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Aplicação como Product Owner</h2>
            <p>[Descreva como você, como Product Owner, aplicaria essas lições em seus próprios releases]</p>
          </section>
        </div>
      )
    }

    setDialogTitle(title)
    setDialogContent(content)
    setDownloadFilename(filename)
    setDialogOpen(true)
  }

  // Função para baixar o modelo como HTML
  const handleDownload = () => {
    if (!dialogContent) return

    // Criar o HTML completo com estilos
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${dialogTitle}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            text-align: center;
            color: #2563eb;
            margin-bottom: 30px;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 10px;
          }
          h2 {
            color: #1e40af;
            margin-top: 25px;
            margin-bottom: 15px;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 5px;
          }
          h3 {
            color: #1e3a8a;
            margin-top: 20px;
          }
          section {
            margin-bottom: 30px;
          }
          ul, ol {
            margin-bottom: 20px;
          }
          li {
            margin-bottom: 8px;
          }
          strong {
            color: #1e3a8a;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .footer {
            text-align: center;
            margin-top: 50px;
            font-size: 0.8em;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
            padding-top: 20px;
          }
          @media print {
            body {
              font-size: 12pt;
            }
            section {
              page-break-inside: avoid;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${dialogTitle}</h1>
          <p>Mentoria de Gestão de Projeto e Produto</p>
        </div>
        ${document.querySelector(".max-h-\\[70vh\\]")?.innerHTML || ""}
        <div class="footer">
          <p>© ${new Date().getFullYear()} Mentoria de Gestão de Projeto e Produto</p>
        </div>
      </body>
      </html>
    `

    // Criar um blob com o conteúdo HTML
    const blob = new Blob([htmlContent], { type: "text/html" })

    // Criar um URL para o blob
    const url = URL.createObjectURL(blob)

    // Criar um elemento de link para download
    const a = document.createElement("a")
    a.href = url
    a.download = downloadFilename

    // Adicionar o link ao documento, clicar nele e depois removê-lo
    document.body.appendChild(a)
    a.click()

    // Limpar
    setTimeout(() => {
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, 100)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader
        title="Exercícios Práticos"
        description="Atividades para aplicar os conceitos aprendidos sobre qualidade de software e gestão de releases"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Plano de Release</CardTitle>
            <CardDescription>Crie um plano de release para um produto digital</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Desenvolva um plano de release completo para um produto digital de sua escolha, incluindo funcionalidades,
              critérios de qualidade, riscos e planos de comunicação.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => handleShowTemplate("release-plan")}>
              <FileText className="h-4 w-4 mr-2" />
              Ver Modelo de Resposta
            </Button>
            <Link href="/semana5/templates/interactive-release-plan">
              <Button>Iniciar</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plano de Testes</CardTitle>
            <CardDescription>Elabore um plano de testes para um e-commerce</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Crie um plano de testes detalhado para um site de e-commerce, incluindo casos de teste, critérios de
              aceitação e cronograma.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => handleShowTemplate("test-plan")}>
              <FileText className="h-4 w-4 mr-2" />
              Ver Modelo de Resposta
            </Button>
            <Link href="/semana5/templates/interactive-test-plan">
              <Button>Iniciar</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise de Caso</CardTitle>
            <CardDescription>Analise um caso de falha em release de software</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Escolha um caso real de falha em release de software e faça uma análise detalhada, identificando causas,
              impactos e lições aprendidas.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => handleShowTemplate("case-analysis")}>
              <FileText className="h-4 w-4 mr-2" />
              Ver Modelo de Resposta
            </Button>
            <Link href="/semana5/templates/interactive-case-analysis">
              <Button>Iniciar</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Diálogo para exibir e baixar o modelo */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>Visualize o modelo e baixe-o para usar como referência</DialogDescription>
          </DialogHeader>

          {dialogContent}

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Fechar
            </Button>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="h-4 w-4" />
              Baixar Modelo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
