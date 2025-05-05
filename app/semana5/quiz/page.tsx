"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, CheckCircle, XCircle, Home } from "lucide-react"
import PageHeader from "@/components/page-header"
import Footer from "@/components/footer"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(10).fill(""))
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
      question: "Qual dos seguintes NÃO é um atributo de qualidade de software segundo a ISO 25010?",
      options: ["Confiabilidade", "Usabilidade", "Escalabilidade", "Portabilidade"],
      correctAnswer: "Escalabilidade",
      explanation:
        "Escalabilidade não é um atributo de qualidade específico na ISO 25010, embora seja um aspecto importante da eficiência de desempenho. Os atributos definidos na ISO 25010 incluem: funcionalidade, confiabilidade, usabilidade, eficiência, manutenibilidade, portabilidade, segurança e compatibilidade.",
    },
    {
      question: "Qual é a principal diferença entre testes de integração e testes unitários?",
      options: [
        "Testes unitários são mais rápidos que testes de integração",
        "Testes de integração verificam a interação entre componentes, enquanto testes unitários verificam componentes isolados",
        "Testes unitários são executados apenas por QAs, enquanto testes de integração são executados por desenvolvedores",
        "Testes de integração são automatizados, enquanto testes unitários são manuais",
      ],
      correctAnswer:
        "Testes de integração verificam a interação entre componentes, enquanto testes unitários verificam componentes isolados",
      explanation:
        "Testes unitários focam em verificar o funcionamento correto de componentes individuais isoladamente, geralmente usando mocks para simular dependências. Testes de integração verificam se diferentes componentes funcionam corretamente quando interagem entre si.",
    },
    {
      question: "O que é um plano de release?",
      options: [
        "Um documento que lista todos os bugs encontrados durante os testes",
        "Um cronograma detalhado para o desenvolvimento de todas as funcionalidades do produto",
        "Um documento que descreve o escopo, cronograma e recursos necessários para um lançamento de software",
        "Uma lista de todas as versões anteriores do software",
      ],
      correctAnswer:
        "Um documento que descreve o escopo, cronograma e recursos necessários para um lançamento de software",
      explanation:
        "Um plano de release é um documento estratégico que define quais funcionalidades serão incluídas em um lançamento específico, quando o lançamento ocorrerá e quais recursos serão necessários para desenvolvê-lo, testá-lo e implantá-lo.",
    },
    {
      question:
        "Qual das seguintes é uma estratégia de lançamento que minimiza riscos ao disponibilizar novas funcionalidades para um subconjunto de usuários primeiro?",
      options: ["Big Bang Release", "Canary Release", "Waterfall Release", "Monolithic Release"],
      correctAnswer: "Canary Release",
      explanation:
        "Canary Release (ou Lançamento Gradual) é uma estratégia onde novas funcionalidades são lançadas inicialmente para um pequeno grupo de usuários antes de serem disponibilizadas para todos. Isso permite identificar problemas com impacto limitado e fazer ajustes antes do lançamento completo.",
    },
    {
      question: "O que são feature flags (ou feature toggles)?",
      options: [
        "Marcadores visuais que destacam novas funcionalidades para os usuários",
        "Chaves de configuração que permitem ativar ou desativar funcionalidades sem reimplantar o código",
        "Indicadores de prioridade para funcionalidades no backlog",
        "Etiquetas usadas para categorizar funcionalidades por área de produto",
      ],
      correctAnswer: "Chaves de configuração que permitem ativar ou desativar funcionalidades sem reimplantar o código",
      explanation:
        "Feature flags são mecanismos que permitem ativar ou desativar funcionalidades em tempo de execução, sem necessidade de nova implantação. Isso permite separar o deploy do código da liberação da funcionalidade para os usuários, facilitando testes A/B, lançamentos graduais e rollbacks rápidos.",
    },
    {
      question: "Qual é o principal objetivo dos testes de aceitação do usuário (UAT)?",
      options: [
        "Verificar se o código está bem estruturado e segue as boas práticas",
        "Validar se o sistema atende aos requisitos de negócio e às necessidades dos usuários",
        "Identificar bugs de performance sob carga",
        "Garantir que o sistema funcione em diferentes navegadores e dispositivos",
      ],
      correctAnswer: "Validar se o sistema atende aos requisitos de negócio e às necessidades dos usuários",
      explanation:
        "Os testes de aceitação do usuário (UAT) são realizados para verificar se o sistema atende aos requisitos de negócio e às necessidades dos usuários finais. Eles são geralmente conduzidos por usuários reais ou representantes dos usuários para confirmar que o sistema funciona conforme esperado em cenários do mundo real.",
    },
    {
      question: "O que são notas de release (release notes)?",
      options: [
        "Anotações feitas durante reuniões de planejamento de release",
        "Documentos que descrevem as mudanças, melhorias e correções incluídas em um release",
        "Relatórios de bugs encontrados durante o ciclo de testes",
        "Instruções técnicas para a equipe de operações sobre como implantar o software",
      ],
      correctAnswer: "Documentos que descrevem as mudanças, melhorias e correções incluídas em um release",
      explanation:
        "Notas de release são documentos que comunicam aos usuários e stakeholders o que mudou em uma nova versão do software. Elas tipicamente incluem novas funcionalidades, melhorias, correções de bugs, problemas conhecidos e, quando aplicável, instruções de atualização.",
    },
    {
      question: "Qual é a diferença entre deploy e release?",
      options: [
        "Deploy é o processo técnico de implantar o software em um ambiente, enquanto release é a disponibilização do software para os usuários",
        "Deploy é para ambientes de teste, enquanto release é apenas para produção",
        "Deploy é feito por desenvolvedores, enquanto release é feito por operações",
        "Não há diferença, os termos são sinônimos",
      ],
      correctAnswer:
        "Deploy é o processo técnico de implantar o software em um ambiente, enquanto release é a disponibilização do software para os usuários",
      explanation:
        "Deploy refere-se ao processo técnico de implantar o código em um ambiente (seja de teste, homologação ou produção). Release refere-se à disponibilização de funcionalidades para os usuários, que pode ocorrer independentemente do deploy, especialmente quando se utilizam feature flags.",
    },
    {
      question: "Qual é o papel do Product Owner na gestão de releases?",
      options: [
        "Escrever o código para as funcionalidades do release",
        "Realizar testes de qualidade antes do lançamento",
        "Priorizar funcionalidades e definir o escopo do release com base no valor para o negócio e usuários",
        "Configurar a infraestrutura para o deploy",
      ],
      correctAnswer:
        "Priorizar funcionalidades e definir o escopo do release com base no valor para o negócio e usuários",
      explanation:
        "O Product Owner é responsável por priorizar as funcionalidades do backlog e definir o escopo do release, garantindo que ele entregue o máximo de valor possível para o negócio e para os usuários. Também participa da comunicação com stakeholders sobre o conteúdo e benefícios do release.",
    },
    {
      question: "O que é um critério de entrada (entry criteria) em um plano de release?",
      options: [
        "Condições que devem ser atendidas antes que um usuário possa acessar o sistema",
        "Requisitos mínimos de hardware para executar o software",
        "Condições que devem ser atendidas antes que uma fase do release possa começar",
        "Permissões necessárias para acessar o ambiente de produção",
      ],
      correctAnswer: "Condições que devem ser atendidas antes que uma fase do release possa começar",
      explanation:
        "Critérios de entrada são condições que devem ser satisfeitas antes que uma fase do processo de release (como testes, homologação ou implantação) possa ser iniciada. Por exemplo, antes de iniciar os testes de aceitação, todos os testes de sistema devem ter sido concluídos com sucesso.",
    },
  ]

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answer
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
      setShowResults(true)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let newScore = 0
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correctAnswer) {
        newScore++
      }
    }
    setScore(newScore)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(10).fill(""))
    setShowResults(false)
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <PageHeader
        title="Teste de Conhecimento"
        description="Avalie seu entendimento sobre qualidade de software e gestão de releases"
      />

      <main className="container mx-auto py-8 px-4">
        {/* Botão para voltar à página inicial */}
        <div className="mb-6">
          <Link href="/semana5">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              Voltar para Página Inicial
            </Button>
          </Link>
        </div>

        {!showResults ? (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>
                  Questão {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm text-slate-500">
                  Pontuação: {score}/{questions.length}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">{questions[currentQuestion].question}</h2>
                <RadioGroup value={selectedAnswers[currentQuestion]} onValueChange={handleAnswerSelect}>
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-slate-50 p-3 rounded-md">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
                Anterior
              </Button>
              <Button onClick={handleNextQuestion} disabled={!selectedAnswers[currentQuestion]}>
                {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Resultado do Teste</span>
                <Link href="/semana5">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    Página Inicial
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-6">
                <div className="rounded-full bg-slate-100 p-6 mb-3">
                  <div className="text-4xl font-bold">
                    {score}/{questions.length}
                  </div>
                </div>
                <p className="text-slate-600">
                  {score === questions.length
                    ? "Excelente! Você acertou todas as questões!"
                    : score >= questions.length * 0.7
                      ? "Bom trabalho! Você tem um bom entendimento do conteúdo."
                      : "Continue estudando para melhorar seu conhecimento."}
                </p>
              </div>

              <div className="space-y-6">
                {questions.map((q, index) => (
                  <div key={index} className="border rounded-md overflow-hidden">
                    <div className="bg-slate-50 p-4 flex justify-between items-start">
                      <div>
                        <span className="font-medium">Questão {index + 1}:</span> {q.question}
                      </div>
                      {selectedAnswers[index] === q.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="font-medium">Sua resposta:</span>{" "}
                        <span
                          className={selectedAnswers[index] === q.correctAnswer ? "text-green-600" : "text-red-600"}
                        >
                          {selectedAnswers[index]}
                        </span>
                      </div>
                      {selectedAnswers[index] !== q.correctAnswer && (
                        <div className="mb-2">
                          <span className="font-medium">Resposta correta:</span>{" "}
                          <span className="text-green-600">{q.correctAnswer}</span>
                        </div>
                      )}
                      <div className="mt-2 text-sm bg-slate-50 p-3 rounded-md">
                        <span className="font-medium">Explicação:</span> {q.explanation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={resetQuiz}>
                Refazer o Teste
              </Button>
              <Link href="/semana5">
                <Button>Voltar para o Início</Button>
              </Link>
            </CardFooter>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  )
}
