import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ChevronLeft, Download, FileText, CheckCircle } from "lucide-react"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function ExerciciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <PageHeader
        title="Exercícios Práticos"
        description="Atividades para aplicar os conceitos aprendidos sobre requisitos e histórias de usuário"
      />

      <main className="container mx-auto py-8 px-4">
        {/* Introdução e Guia */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Como Realizar os Exercícios</h2>
          <p className="mb-4">
            Olá Luci! Estes exercícios foram criados para ajudar você a aplicar os conceitos que aprendemos sobre
            requisitos e histórias de usuário. Siga estas etapas para tirar o máximo proveito:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <span className="font-bold text-blue-700">1</span>
                </div>
                <h3 className="font-medium">Escolha um Exercício</h3>
              </div>
              <p className="text-sm">
                Comece pelo exercício que mais lhe interessa ou siga a ordem sugerida. Cada exercício tem um objetivo
                específico e instruções detalhadas.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-md">
              <div className="flex items-center mb-2">
                <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <span className="font-bold text-green-700">2</span>
                </div>
                <h3 className="font-medium">Use os Templates</h3>
              </div>
              <p className="text-sm">
                Utilize os templates interativos disponíveis na seção de Templates para criar suas histórias de usuário
                ou documentar requisitos.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-md">
              <div className="flex items-center mb-2">
                <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <span className="font-bold text-purple-700">3</span>
                </div>
                <h3 className="font-medium">Compartilhe Resultados</h3>
              </div>
              <p className="text-sm">
                Salve seu trabalho como PDF e compartilhe na próxima sessão de mentoria para discutirmos juntos e
                fornecermos feedback.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-md">
            <h3 className="font-medium flex items-center mb-2">
              <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
              Dica para Começar
            </h3>
            <p>
              Se você está em dúvida por onde começar, recomendo o{" "}
              <strong>Exercício 2: Escrita de Histórias de Usuário</strong>. Este exercício é mais prático e te ajudará
              a aplicar imediatamente o que aprendemos sobre o formato e critérios de histórias de usuário.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle>Exercício 1: Elicitação de Requisitos</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-white border rounded-md p-4 mb-4">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">1</span>
                  </div>
                  Objetivo
                </h3>
                <p className="mb-4">
                  Praticar técnicas de elicitação de requisitos através de entrevistas com stakeholders.
                </p>

                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">2</span>
                  </div>
                  Instruções
                </h3>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Escolha um produto:</strong> Selecione um aplicativo que você usa frequentemente (como
                    WhatsApp, Instagram ou um aplicativo de banco)
                  </li>
                  <li>
                    <strong>Identifique stakeholders:</strong> Liste 3 tipos diferentes de usuários desse aplicativo
                    (ex: usuário casual, usuário frequente, administrador)
                  </li>
                  <li>
                    <strong>Crie um roteiro:</strong> Prepare 5 perguntas para cada tipo de stakeholder
                  </li>
                  <li>
                    <strong>Simule entrevistas:</strong> Peça a um amigo ou familiar para responder como se fosse um dos
                    stakeholders
                  </li>
                  <li>
                    <strong>Documente requisitos:</strong> A partir das respostas, identifique pelo menos 5 requisitos
                    funcionais e 3 não-funcionais
                  </li>
                </ol>

                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Exemplo de Pergunta para Entrevista:</h4>
                  <p className="italic">
                    "Como você organiza suas conversas no WhatsApp? Você sente falta de alguma funcionalidade para
                    melhorar essa organização?"
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Possível requisito identificado:</strong> "O sistema deve permitir que o usuário crie pastas
                    para organizar diferentes tipos de conversas."
                  </p>
                </div>

                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">3</span>
                  </div>
                  Entregáveis
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Roteiro de entrevista para cada tipo de stakeholder</li>
                  <li>Lista de requisitos identificados e priorizados</li>
                  <li>Breve reflexão sobre o processo de elicitação (desafios e aprendizados)</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 bg-gray-50 pt-4">
              <Link href="/semana4/templates/exemplos">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Ver Exemplos
                </Button>
              </Link>
              <Link href="/semana4/templates">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Acessar Template
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle>Exercício 2: Escrita de Histórias de Usuário</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-white border rounded-md p-4 mb-4">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">1</span>
                  </div>
                  Objetivo
                </h3>
                <p className="mb-4">
                  Praticar a escrita de histórias de usuário eficazes com critérios de aceitação claros.
                </p>

                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">2</span>
                  </div>
                  Instruções
                </h3>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Escolha uma funcionalidade:</strong> Pense em uma funcionalidade que você gostaria de
                    adicionar a um aplicativo que você usa (ex: um filtro de fotos no Instagram)
                  </li>
                  <li>
                    <strong>Escreva 3 histórias:</strong> Crie 3 histórias de usuário relacionadas a essa funcionalidade
                    usando o formato "Como [persona], eu quero [ação], para que [benefício]"
                  </li>
                  <li>
                    <strong>Defina critérios:</strong> Para cada história, escreva 3 critérios de aceitação usando o
                    formato "Dado que [contexto], quando [ação], então [resultado]"
                  </li>
                  <li>
                    <strong>Avalie com INVEST:</strong> Verifique se suas histórias atendem aos critérios INVEST
                    (Independente, Negociável, Valiosa, Estimável, Pequena, Testável)
                  </li>
                  <li>
                    <strong>Priorize:</strong> Ordene suas histórias por prioridade (Alta, Média, Baixa)
                  </li>
                </ol>

                <div className="bg-green-50 p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Exemplo de História de Usuário:</h4>
                  <p className="italic">
                    "Como usuário do Instagram, eu quero poder aplicar filtros de cores vintage às minhas fotos, para
                    que eu possa dar um estilo retrô às minhas publicações."
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Critério de Aceitação:</strong> "Dado que estou na tela de edição de foto, quando eu
                    selecionar a opção 'Filtros Vintage', então devo ver uma prévia da minha foto com o filtro
                    aplicado."
                  </p>
                </div>

                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">3</span>
                  </div>
                  Entregáveis
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>3 histórias de usuário com seus critérios de aceitação</li>
                  <li>Avaliação de cada história com base nos critérios INVEST</li>
                  <li>Lista priorizada das histórias com justificativa</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 bg-gray-50 pt-4">
              <Link href="/semana4/examples">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Ver Exemplos
                </Button>
              </Link>
              <Link href="/semana4/templates#user-stories-section">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Acessar Template
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card>
            <CardHeader className="bg-purple-50">
              <CardTitle>Exercício 3: Refinamento de Histórias</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-white border rounded-md p-4 mb-4">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">1</span>
                  </div>
                  Objetivo
                </h3>
                <p className="mb-4">
                  Praticar o refinamento de histórias de usuário, quebrando épicos em histórias menores e mais
                  gerenciáveis.
                </p>

                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">2</span>
                  </div>
                  Instruções
                </h3>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Analise este épico:</strong> "Como usuário, quero um sistema de checkout completo para
                    finalizar minhas compras"
                  </li>
                  <li>
                    <strong>Divida em histórias menores:</strong> Identifique pelo menos 5 histórias de usuário menores
                    que compõem esse épico
                  </li>
                  <li>
                    <strong>Defina critérios:</strong> Para cada história, defina 2-3 critérios de aceitação
                  </li>
                  <li>
                    <strong>Identifique dependências:</strong> Crie um diagrama simples mostrando quais histórias
                    dependem de outras
                  </li>
                  <li>
                    <strong>Planeje a implementação:</strong> Sugira uma ordem de implementação que minimize
                    dependências
                  </li>
                </ol>

                <div className="bg-purple-50 p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Exemplo de Divisão:</h4>
                  <p className="italic mb-2">
                    <strong>Épico:</strong> "Como usuário, quero um sistema de checkout completo para finalizar minhas
                    compras"
                  </p>
                  <p className="italic">
                    <strong>História 1:</strong> "Como usuário, quero revisar os itens no meu carrinho antes de
                    finalizar a compra"
                  </p>
                  <p className="italic">
                    <strong>História 2:</strong> "Como usuário, quero inserir meu endereço de entrega para receber meus
                    produtos"
                  </p>
                </div>

                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">3</span>
                  </div>
                  Entregáveis
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>5 histórias de usuário derivadas do épico</li>
                  <li>Critérios de aceitação para cada história</li>
                  <li>Diagrama de dependências entre as histórias</li>
                  <li>Plano de implementação sugerido com justificativa</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 bg-gray-50 pt-4">
              <Link href="/semana4/estrategias-divisao">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Ver Estratégias
                </Button>
              </Link>
              <Link href="/semana4/templates#user-stories-section">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Acessar Template
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="bg-amber-50">
              <CardTitle>Exercício 4: Análise de Requisitos</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-white border rounded-md p-4 mb-4">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">1</span>
                  </div>
                  Objetivo
                </h3>
                <p className="mb-4">
                  Praticar a identificação e classificação de diferentes tipos de requisitos em um produto existente.
                </p>

                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">2</span>
                  </div>
                  Instruções
                </h3>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Escolha um aplicativo:</strong> Selecione um aplicativo que você usa frequentemente (ex:
                    Netflix, Spotify, aplicativo de banco)
                  </li>
                  <li>
                    <strong>Identifique requisitos:</strong> Liste 10 requisitos que você observa no aplicativo
                  </li>
                  <li>
                    <strong>Classifique os requisitos:</strong> Categorize cada requisito como funcional ou
                    não-funcional
                  </li>
                  <li>
                    <strong>Subcategorize:</strong> Para requisitos não-funcionais, especifique o tipo (desempenho,
                    segurança, usabilidade, etc.)
                  </li>
                  <li>
                    <strong>Analise prioridades:</strong> Sugira qual seria a prioridade de cada requisito e justifique
                  </li>
                </ol>

                <div className="bg-amber-50 p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Exemplo de Análise:</h4>
                  <p className="mb-2">
                    <strong>Aplicativo:</strong> Netflix
                  </p>
                  <p className="mb-1">
                    <strong>Requisito 1:</strong> "O sistema deve permitir que o usuário continue assistindo de onde
                    parou em qualquer dispositivo"
                  </p>
                  <p className="text-sm mb-2">
                    <strong>Classificação:</strong> Funcional | <strong>Prioridade:</strong> Alta |{" "}
                    <strong>Justificativa:</strong> Essencial para a experiência do usuário e diferencial competitivo
                  </p>
                  <p className="mb-1">
                    <strong>Requisito 2:</strong> "O streaming deve iniciar em menos de 3 segundos em conexões de banda
                    larga"
                  </p>
                  <p className="text-sm">
                    <strong>Classificação:</strong> Não-Funcional (Desempenho) | <strong>Prioridade:</strong> Alta |{" "}
                    <strong>Justificativa:</strong> Impacta diretamente a satisfação do usuário
                  </p>
                </div>

                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    <span className="text-sm">3</span>
                  </div>
                  Entregáveis
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lista de 10 requisitos identificados no aplicativo escolhido</li>
                  <li>Classificação e categorização de cada requisito</li>
                  <li>Análise de prioridade com justificativa</li>
                  <li>Reflexão sobre como esses requisitos contribuem para o sucesso do produto</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 bg-gray-50 pt-4">
              <Link href="/semana4/templates/exemplos">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Ver Exemplos
                </Button>
              </Link>
              <Link href="/semana4/templates#requirements-section">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Acessar Template
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Dicas para Completar os Exercícios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Comece com Exemplos Reais
              </h3>
              <p className="text-sm">
                Antes de criar suas próprias histórias ou requisitos, analise os exemplos fornecidos na seção de
                exemplos. Observe como eles seguem o formato recomendado e como os critérios de aceitação são escritos.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Use os Templates Interativos
              </h3>
              <p className="text-sm">
                Os templates interativos na seção de Templates foram criados para facilitar a criação de histórias de
                usuário e requisitos. Eles já estão formatados corretamente e permitem que você salve seu trabalho.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Pense na Perspectiva do Usuário
              </h3>
              <p className="text-sm">
                Ao escrever histórias de usuário, sempre pense na perspectiva de quem vai usar o produto. O que eles
                querem realizar? Qual o benefício para eles? Isso ajuda a manter o foco no valor para o usuário.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Não Se Preocupe com a Perfeição
              </h3>
              <p className="text-sm">
                O objetivo destes exercícios é praticar e aprender. Suas primeiras histórias e requisitos não precisam
                ser perfeitos. O importante é aplicar os conceitos e melhorar com o feedback.
              </p>
            </div>
          </div>
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
