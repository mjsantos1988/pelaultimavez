"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { ChevronLeft, Save, Printer, AlertCircle, Download } from "lucide-react"
import Link from "next/link"

export default function InteractiveCaseAnalysis() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    caseName: "",
    companyName: "",
    releaseType: "",
    releaseDate: "",
    description: "",
    causes: "",
    response: "",
    userImpact: "",
    businessImpact: "",
    lessons: ["", "", "", "", ""],
    applicationAsProductOwner: "",
  })

  const [showSavedAlert, setShowSavedAlert] = useState(false)
  const [showClearAlert, setShowClearAlert] = useState(false)
  const [showLoadExampleAlert, setShowLoadExampleAlert] = useState(false)

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("interactiveCaseAnalysis")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleLessonChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const newLessons = [...prevData.lessons]
      newLessons[index] = value
      return {
        ...prevData,
        lessons: newLessons,
      }
    })
  }

  const handleSave = () => {
    localStorage.setItem("interactiveCaseAnalysis", JSON.stringify(formData))
    setShowSavedAlert(true)
  }

  const handleClear = () => {
    setFormData({
      caseName: "",
      companyName: "",
      releaseType: "",
      releaseDate: "",
      description: "",
      causes: "",
      response: "",
      userImpact: "",
      businessImpact: "",
      lessons: ["", "", "", "", ""],
      applicationAsProductOwner: "",
    })
    localStorage.removeItem("interactiveCaseAnalysis")
  }

  const handlePrint = () => {
    window.print()
  }

  const loadExample = () => {
    const exampleData = {
      caseName: "Falha no lançamento do Facebook Dating na Europa",
      companyName: "Facebook (Meta)",
      releaseType: "Lançamento de novo recurso",
      releaseDate: "Fevereiro de 2020",
      description:
        "O Facebook planejou lançar seu serviço de namoro 'Facebook Dating' na Europa no Dia dos Namorados de 2020. No entanto, dias antes do lançamento, a empresa teve que adiar indefinidamente o lançamento após uma inspeção da Comissão de Proteção de Dados da Irlanda (DPC), que alegou não ter recebido a documentação necessária sobre avaliações de impacto de privacidade e processamento de dados com antecedência suficiente.",
      causes:
        "1. Falha na comunicação com reguladores europeus\n2. Documentação insuficiente sobre proteção de dados\n3. Avaliação de Impacto de Proteção de Dados (DPIA) inadequada\n4. Cronograma agressivo sem considerar adequadamente requisitos regulatórios\n5. Subestimação da complexidade das leis de privacidade europeias (GDPR)",
      response:
        "O Facebook adiou o lançamento do recurso na Europa. A empresa emitiu um comunicado afirmando que estava 'tomando mais tempo para garantir que o produto estivesse pronto para o mercado europeu'. O Facebook trabalhou para resolver as preocupações levantadas pela DPC irlandesa, revisando suas políticas de privacidade e fornecendo documentação adicional. O recurso acabou sendo lançado na Europa apenas em outubro de 2020, mais de 8 meses após o planejado.",
      userImpact:
        "Os usuários europeus não puderam acessar o recurso Facebook Dating por vários meses, enquanto usuários em outras regiões já tinham acesso. Isso criou uma experiência inconsistente entre usuários globais da plataforma e potencialmente afetou a confiança dos usuários europeus na capacidade do Facebook de lidar com seus dados pessoais de forma adequada.",
      businessImpact:
        "1. Perda de oportunidade de mercado durante o período de adiamento\n2. Danos à reputação da empresa em relação à conformidade com regulamentações\n3. Custos adicionais para refazer o trabalho e ajustar o produto\n4. Atraso na estratégia de expansão de serviços\n5. Escrutínio regulatório aumentado para futuros lançamentos na região",
      lessons: [
        "Envolver reguladores desde o início do processo de desenvolvimento de produtos, especialmente em mercados com regulamentações rigorosas como a Europa.",
        "Realizar avaliações de impacto de privacidade completas com bastante antecedência ao lançamento, não apenas como uma formalidade de última hora.",
        "Adaptar cronogramas de lançamento para diferentes regiões, considerando as complexidades regulatórias específicas de cada mercado.",
        "Estabelecer canais de comunicação claros com autoridades reguladoras e responder prontamente às suas solicitações.",
        "Criar uma cultura de privacidade e conformidade desde o design (Privacy by Design), integrando considerações de privacidade em todo o ciclo de desenvolvimento do produto.",
      ],
      applicationAsProductOwner:
        "Como Product Owner, eu aplicaria essas lições implementando um processo de lançamento que inclui:\n\n1. Mapeamento regulatório no início do roadmap do produto, identificando requisitos específicos para cada região\n\n2. Inclusão de especialistas em privacidade e conformidade desde as fases iniciais do desenvolvimento\n\n3. Criação de um checklist de conformidade específico para cada região, com prazos claros para submissão de documentação\n\n4. Desenvolvimento de relacionamentos proativos com reguladores, não apenas respondendo quando solicitado\n\n5. Implementação de um processo de 'go/no-go' antes de lançamentos importantes, com verificações de conformidade como critérios obrigatórios\n\n6. Planejamento de contingência para possíveis atrasos regulatórios, com estratégias alternativas de lançamento\n\n7. Treinamento regular da equipe sobre requisitos de privacidade e conformidade para criar uma cultura onde esses aspectos são valorizados tanto quanto as funcionalidades do produto",
    }

    setFormData(exampleData)
    setShowLoadExampleAlert(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 print:bg-white print:from-white print:to-white">
      <div className="print:hidden">
        <PageHeader
          title="Análise de Caso - Falha de Release"
          description="Template interativo para análise de falhas em releases de software"
        />
      </div>

      <main className="container mx-auto py-8 px-4 print:py-0 print:px-8">
        <div className="print:hidden flex justify-between items-center mb-6">
          <Link href="/semana5/exercicios">
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Exercícios
            </Button>
          </Link>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2" onClick={() => setShowLoadExampleAlert(true)}>
              <Download className="h-4 w-4" />
              Carregar Exemplo
            </Button>
            <Button variant="outline" size="sm" className="gap-2" onClick={() => setShowClearAlert(true)}>
              <AlertCircle className="h-4 w-4" />
              Limpar Dados
            </Button>
            <Button variant="outline" size="sm" className="gap-2" onClick={handlePrint}>
              <Printer className="h-4 w-4" />
              Imprimir
            </Button>
            <Button variant="default" size="sm" className="gap-2" onClick={handleSave}>
              <Save className="h-4 w-4" />
              Salvar
            </Button>
          </div>
        </div>

        <Card className="mb-8 print:shadow-none print:border-none">
          <CardHeader className="print:pb-0">
            <CardTitle className="text-center print:text-2xl">Análise de Caso - Falha de Release</CardTitle>
            <p className="text-center text-gray-500 print:hidden">
              Preencha o template abaixo com sua análise do caso de falha em release
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 print:space-y-4">
              {/* Informações Básicas do Caso */}
              <div className="space-y-4 print:page-break-inside-avoid">
                <h3 className="font-bold text-lg border-b pb-2 print:text-xl">1. Informações Básicas do Caso</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="caseName">Nome do Caso</Label>
                    <Input
                      id="caseName"
                      name="caseName"
                      placeholder="Ex: Falha no lançamento do Windows 10 versão 2004"
                      value={formData.caseName}
                      onChange={handleChange}
                      className="print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                    />
                    <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">{formData.caseName}</div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">Empresa</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Ex: Microsoft"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                    />
                    <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">
                      {formData.companyName}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="releaseType">Tipo de Release</Label>
                    <Input
                      id="releaseType"
                      name="releaseType"
                      placeholder="Ex: Atualização de sistema operacional"
                      value={formData.releaseType}
                      onChange={handleChange}
                      className="print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                    />
                    <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">
                      {formData.releaseType}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="releaseDate">Data do Release</Label>
                    <Input
                      id="releaseDate"
                      name="releaseDate"
                      placeholder="Ex: Maio de 2020"
                      value={formData.releaseDate}
                      onChange={handleChange}
                      className="print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                    />
                    <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">
                      {formData.releaseDate}
                    </div>
                  </div>
                </div>
              </div>

              {/* O que aconteceu */}
              <div className="space-y-2 print:page-break-inside-avoid print:mt-8">
                <h3 className="font-bold text-lg border-b pb-2 print:text-xl">2. O que aconteceu?</h3>
                <Label htmlFor="description">Descreva detalhadamente o ocorrido</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Descreva o que aconteceu durante o release que resultou na falha..."
                  className="min-h-[120px] print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                  value={formData.description}
                  onChange={handleChange}
                />
                <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">{formData.description}</div>
              </div>

              {/* Causas Prováveis */}
              <div className="space-y-2 print:page-break-inside-avoid print:mt-8">
                <h3 className="font-bold text-lg border-b pb-2 print:text-xl">3. Quais foram as causas prováveis?</h3>
                <Label htmlFor="causes">Identifique e analise as causas que levaram à falha</Label>
                <Textarea
                  id="causes"
                  name="causes"
                  placeholder="Ex: Testes insuficientes, pressão por prazos, problemas de comunicação entre equipes..."
                  className="min-h-[120px] print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                  value={formData.causes}
                  onChange={handleChange}
                />
                <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">{formData.causes}</div>
              </div>

              {/* Resposta da Empresa */}
              <div className="space-y-2 print:page-break-inside-avoid print:mt-8">
                <h3 className="font-bold text-lg border-b pb-2 print:text-xl">4. Como a empresa respondeu?</h3>
                <Label htmlFor="response">
                  Descreva as ações tomadas pela empresa após a identificação do problema
                </Label>
                <Textarea
                  id="response"
                  name="response"
                  placeholder="Ex: Comunicação com usuários, rollback do release, correção emergencial..."
                  className="min-h-[120px] print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                  value={formData.response}
                  onChange={handleChange}
                />
                <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">{formData.response}</div>
              </div>

              {/* Impacto */}
              <div className="space-y-4 print:page-break-inside-avoid print:mt-8">
                <h3 className="font-bold text-lg border-b pb-2 print:text-xl">5. Qual foi o impacto?</h3>

                <div className="space-y-2">
                  <Label htmlFor="userImpact">Impacto para os usuários</Label>
                  <Textarea
                    id="userImpact"
                    name="userImpact"
                    placeholder="Ex: Perda de dados, tempo de inatividade, frustração com a marca..."
                    className="min-h-[100px] print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                    value={formData.userImpact}
                    onChange={handleChange}
                  />
                  <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">{formData.userImpact}</div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessImpact">Impacto para o negócio</Label>
                  <Textarea
                    id="businessImpact"
                    name="businessImpact"
                    placeholder="Ex: Prejuízo financeiro, danos à reputação, perda de confiança dos clientes..."
                    className="min-h-[100px] print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                    value={formData.businessImpact}
                    onChange={handleChange}
                  />
                  <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">
                    {formData.businessImpact}
                  </div>
                </div>
              </div>

              {/* Lições Aprendidas */}
              <div className="space-y-4 print:page-break-inside-avoid print:mt-8">
                <h3 className="font-bold text-lg border-b pb-2 print:text-xl">
                  6. Lições aprendidas e melhores práticas
                </h3>
                <p className="text-sm text-gray-600 print:mb-4">
                  Identifique pelo menos 5 lições aprendidas que poderiam ter evitado o problema
                </p>

                {formData.lessons.map((lesson, index) => (
                  <div key={index} className="space-y-2 print:mb-4">
                    <Label htmlFor={`lesson-${index}`}>Lição {index + 1}</Label>
                    <Textarea
                      id={`lesson-${index}`}
                      placeholder={`Ex: Lição ${index + 1} - Implementar testes mais abrangentes antes de cada release...`}
                      className="min-h-[80px] print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                      value={lesson}
                      onChange={(e) => handleLessonChange(index, e.target.value)}
                    />
                    <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">{lesson}</div>
                  </div>
                ))}
              </div>

              {/* Aplicação como Product Owner */}
              <div className="space-y-2 print:page-break-inside-avoid print:mt-8">
                <h3 className="font-bold text-lg border-b pb-2 print:text-xl">7. Aplicação como Product Owner</h3>
                <Label htmlFor="applicationAsProductOwner">
                  Como você aplicaria essas lições em seus próprios releases?
                </Label>
                <Textarea
                  id="applicationAsProductOwner"
                  name="applicationAsProductOwner"
                  placeholder="Descreva como você, como Product Owner, aplicaria essas lições em seus próprios releases..."
                  className="min-h-[150px] print:border-none print:shadow-none print:bg-transparent print:p-0 print:h-auto print:min-h-0"
                  value={formData.applicationAsProductOwner}
                  onChange={handleChange}
                />
                <div className="hidden print:block print:mt-1 print:whitespace-pre-wrap">
                  {formData.applicationAsProductOwner}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Saved Alert */}
        <AlertDialog open={showSavedAlert} onOpenChange={setShowSavedAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Análise salva com sucesso!</AlertDialogTitle>
              <AlertDialogDescription>
                Sua análise de caso foi salva no navegador e estará disponível quando você retornar a esta página.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Clear Data Alert */}
        <AlertDialog open={showClearAlert} onOpenChange={setShowClearAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Limpar dados?</AlertDialogTitle>
              <AlertDialogDescription>
                Tem certeza que deseja limpar todos os dados preenchidos? Esta ação não pode ser desfeita.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleClear}>Limpar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Load Example Alert */}
        <AlertDialog open={showLoadExampleAlert} onOpenChange={setShowLoadExampleAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Carregar exemplo?</AlertDialogTitle>
              <AlertDialogDescription>
                Isso substituirá todos os dados atuais com um exemplo pré-preenchido de análise de caso. Deseja
                continuar?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={loadExample}>Carregar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </main>
    </div>
  )
}
