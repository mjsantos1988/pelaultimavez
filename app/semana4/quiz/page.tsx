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
      question: "Qual das seguintes NÃO é uma fase típica do ciclo de vida de desenvolvimento de software?",
      options: ["Planejamento", "Desenvolvimento", "Monetização", "Testes"],
      correctAnswer: "Monetização",
      explanation:
        "Monetização é uma estratégia de negócios, não uma fase do ciclo de vida de desenvolvimento de software. As fases típicas incluem planejamento, análise de requisitos, design, desenvolvimento, testes, implantação e manutenção.",
    },
    {
      question: "Qual é a principal diferença entre o modelo Cascata e o modelo Ágil?",
      options: [
        "O modelo Cascata é mais rápido que o Ágil",
        "O modelo Ágil permite entregas incrementais e feedback contínuo",
        "O modelo Cascata não inclui fase de testes",
        "O modelo Ágil não requer documentação",
      ],
      correctAnswer: "O modelo Ágil permite entregas incrementais e feedback contínuo",
      explanation:
        "O modelo Ágil se diferencia do Cascata principalmente por permitir entregas incrementais e incorporar feedback contínuo ao longo do desenvolvimento, enquanto o Cascata segue uma abordagem sequencial e linear.",
    },
    {
      question: "O que são requisitos funcionais?",
      options: [
        "Requisitos relacionados ao desempenho do sistema",
        "Requisitos que descrevem o que o sistema deve fazer",
        "Requisitos relacionados à segurança do sistema",
        "Requisitos que descrevem como o sistema deve ser implementado",
      ],
      correctAnswer: "Requisitos que descrevem o que o sistema deve fazer",
      explanation:
        "Requisitos funcionais descrevem as funcionalidades e comportamentos específicos que o sistema deve ter - o que o sistema deve fazer. Eles definem as ações que um sistema deve ser capaz de realizar.",
    },
    {
      question: "Qual das seguintes é uma característica de requisitos não-funcionais?",
      options: [
        "Descrevem funcionalidades específicas do sistema",
        "São sempre mais importantes que requisitos funcionais",
        "Especificam critérios de qualidade e restrições do sistema",
        "São sempre fáceis de medir e testar",
      ],
      correctAnswer: "Especificam critérios de qualidade e restrições do sistema",
      explanation:
        "Requisitos não-funcionais especificam critérios de qualidade, restrições e propriedades do sistema, como desempenho, segurança, usabilidade, confiabilidade, entre outros.",
    },
    {
      question: "Qual técnica de levantamento de requisitos envolve observar os usuários em seu ambiente de trabalho?",
      options: ["Entrevistas", "Questionários", "Observação", "Brainstorming"],
      correctAnswer: "Observação",
      explanation:
        "A técnica de observação envolve observar os usuários em seu ambiente natural de trabalho para entender como eles realizam suas tarefas e interagem com sistemas existentes, identificando necessidades que podem não ser expressas verbalmente.",
    },
    {
      question: "O que significa o acrônimo INVEST no contexto de histórias de usuário?",
      options: [
        "Importante, Necessário, Valioso, Estimável, Simples, Testável",
        "Independente, Negociável, Valioso, Estimável, Pequeno, Testável",
        "Integrado, Novo, Verificável, Eficiente, Seguro, Tangível",
        "Inovador, Notável, Viável, Escalável, Sustentável, Técnico",
      ],
      correctAnswer: "Independente, Negociável, Valioso, Estimável, Pequeno, Testável",
      explanation:
        "INVEST é um acrônimo que representa as características de uma boa história de usuário: Independente, Negociável, Valioso (Valuable), Estimável, Pequeno (Small) e Testável.",
    },
    {
      question: "Qual é o formato recomendado para escrever histórias de usuário?",
      options: [
        "Se [condição], então [resultado]",
        "O sistema deve [ação] quando [evento]",
        "Como [persona], eu quero [ação], para que [benefício]",
        "Quando [evento], o usuário pode [ação]",
      ],
      correctAnswer: "Como [persona], eu quero [ação], para que [benefício]",
      explanation:
        "O formato recomendado para histórias de usuário é 'Como [persona], eu quero [ação], para que [benefício]'. Este formato coloca o foco no usuário, na ação que ele deseja realizar e no valor que ele espera obter.",
    },
    {
      question: "O que são critérios de aceitação no contexto de histórias de usuário?",
      options: [
        "Regras que determinam se um desenvolvedor pode trabalhar em uma história",
        "Condições que devem ser atendidas para que a história seja considerada completa",
        "Métricas para avaliar o desempenho da equipe de desenvolvimento",
        "Requisitos mínimos de hardware para executar o software",
      ],
      correctAnswer: "Condições que devem ser atendidas para que a história seja considerada completa",
      explanation:
        "Critérios de aceitação são condições específicas e verificáveis que devem ser atendidas para que uma história de usuário seja considerada completa e aceita pelo Product Owner.",
    },
    {
      question: "Qual formato é frequentemente usado para escrever critérios de aceitação?",
      options: ["Se/Então", "Quem/O quê/Quando", "Dado/Quando/Então", "Por quê/Como/O quê"],
      correctAnswer: "Dado/Quando/Então",
      explanation:
        "O formato Dado/Quando/Então (ou Given/When/Then), também conhecido como formato Gherkin, é frequentemente usado para escrever critérios de aceitação. Este formato especifica o contexto inicial, a ação realizada e o resultado esperado.",
    },
    {
      question: "Qual é o papel do Product Owner na definição de requisitos?",
      options: [
        "Implementar os requisitos no código",
        "Testar se os requisitos foram implementados corretamente",
        "Priorizar requisitos com base no valor para o negócio e usuários",
        "Definir a arquitetura técnica para implementar os requisitos",
      ],
      correctAnswer: "Priorizar requisitos com base no valor para o negócio e usuários",
      explanation:
        "O Product Owner é responsável por priorizar os requisitos com base no valor que eles entregam para o negócio e para os usuários, garantindo que a equipe trabalhe primeiro nos itens mais importantes.",
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
        description="Avalie seu entendimento sobre requisitos e histórias de usuário"
      />

      <main className="container mx-auto py-8 px-4">
        {/* Botão para voltar à página inicial */}
        <div className="mb-6">
          <Link href="/semana4">
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
                <Link href="/semana4">
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
              <Link href="/semana4">
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
