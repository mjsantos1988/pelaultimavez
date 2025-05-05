"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, ExternalLink } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Ciclo de Vida de Desenvolvimento",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Ciclo de Vida de Desenvolvimento de Software</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Modelos de Ciclo de Vida</h2>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Modelo Cascata (Waterfall)</h3>
                  <p className="text-sm">
                    Abordagem sequencial onde cada fase deve ser concluída antes de iniciar a próxima.
                  </p>
                  <div className="mt-2 flex flex-col space-y-1">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs">Requisitos</div>
                    <div className="flex justify-center">↓</div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs">Design</div>
                    <div className="flex justify-center">↓</div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs">Implementação</div>
                    <div className="flex justify-center">↓</div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs">Verificação</div>
                    <div className="flex justify-center">↓</div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs">Manutenção</div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Modelo Ágil</h3>
                  <p className="text-sm">
                    Desenvolvimento iterativo e incremental, com entregas frequentes e adaptação contínua.
                  </p>
                  <div className="mt-2">
                    <div className="bg-white p-3 rounded-md border border-slate-200">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm font-medium">
                            Planejamento
                          </div>
                          <div className="h-8 flex items-center">→</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md text-sm font-medium">
                            Desenvolvimento
                          </div>
                          <div className="h-8 flex items-center">→</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md text-sm font-medium">
                            Testes
                          </div>
                          <div className="h-8 flex items-center">→</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-md text-sm font-medium">
                            Revisão
                          </div>
                          <div className="h-8 flex items-center">→</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md text-sm font-medium">
                            Lançamento
                          </div>
                          <div className="h-8 flex items-center">↩</div>
                        </div>
                      </div>
                      <p className="text-xs text-center mt-4 text-slate-600">
                        O ciclo se repete, permitindo melhorias contínuas e adaptação
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Fases do Ciclo de Vida</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Concepção e Ideação</h3>
                    <p className="text-sm text-slate-600">
                      Identificação do problema, definição de objetivos e escopo inicial.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Planejamento</h3>
                    <p className="text-sm text-slate-600">
                      Definição de requisitos, recursos necessários, cronograma e orçamento.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Desenvolvimento</h3>
                    <p className="text-sm text-slate-600">
                      Codificação, implementação das funcionalidades e integração de componentes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Testes</h3>
                    <p className="text-sm text-slate-600">
                      Verificação de qualidade, funcionalidade e conformidade com os requisitos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium">Implantação</h3>
                    <p className="text-sm text-slate-600">
                      Entrega do produto ao usuário final, configuração e migração de dados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="font-medium">Manutenção e Evolução</h3>
                    <p className="text-sm text-slate-600">
                      Correção de bugs, melhorias contínuas e adaptação a novos requisitos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Papel do Product Owner em Cada Fase</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Concepção e Planejamento</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Definir a visão do produto</li>
                  <li>Identificar stakeholders</li>
                  <li>Priorizar requisitos iniciais</li>
                  <li>Definir critérios de sucesso</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Desenvolvimento e Testes</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Esclarecer requisitos</li>
                  <li>Validar entregas incrementais</li>
                  <li>Gerenciar o backlog</li>
                  <li>Participar de revisões</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Implantação e Manutenção</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Coordenar lançamentos</li>
                  <li>Coletar feedback dos usuários</li>
                  <li>Definir melhorias futuras</li>
                  <li>Avaliar métricas de sucesso</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-md mt-4">
            <h3 className="font-medium mb-2">Comparação entre Metodologias</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="py-2 px-3 text-left">Característica</th>
                    <th className="py-2 px-3 text-left">Cascata</th>
                    <th className="py-2 px-3 text-left">Ágil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3 border-t">Flexibilidade</td>
                    <td className="py-2 px-3 border-t">Baixa</td>
                    <td className="py-2 px-3 border-t">Alta</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-t">Envolvimento do cliente</td>
                    <td className="py-2 px-3 border-t">Principalmente no início</td>
                    <td className="py-2 px-3 border-t">Contínuo</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-t">Entregas</td>
                    <td className="py-2 px-3 border-t">Ao final do projeto</td>
                    <td className="py-2 px-3 border-t">Incrementais</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-t">Documentação</td>
                    <td className="py-2 px-3 border-t">Extensa</td>
                    <td className="py-2 px-3 border-t">Mínima viável</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tipos de Requisitos",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Tipos de Requisitos</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Categorias de Requisitos</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2 text-blue-800">Requisitos Funcionais</h3>
                  <p className="text-sm">
                    Descrevem o que o sistema deve fazer, as funcionalidades e comportamentos específicos.
                  </p>
                  <div className="mt-3 bg-white p-3 rounded border border-blue-100">
                    <p className="text-xs font-medium">Exemplos:</p>
                    <ul className="list-disc pl-5 text-xs mt-1">
                      <li>O sistema deve permitir que usuários façam login com e-mail e senha</li>
                      <li>O usuário deve poder filtrar produtos por categoria e preço</li>
                      <li>O sistema deve enviar notificações por e-mail quando um pedido for enviado</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-pink-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2 text-pink-800">Requisitos Não-Funcionais</h3>
                  <p className="text-sm">
                    Descrevem qualidades do sistema, como desempenho, segurança, usabilidade e confiabilidade.
                  </p>
                  <div className="mt-3 bg-white p-3 rounded border border-pink-100">
                    <p className="text-xs font-medium">Exemplos:</p>
                    <ul className="list-disc pl-5 text-xs mt-1">
                      <li>O sistema deve carregar páginas em menos de 2 segundos</li>
                      <li>O sistema deve estar disponível 99,9% do tempo</li>
                      <li>O sistema deve ser acessível para usuários com deficiência visual</li>
                      <li>O sistema deve criptografar dados sensíveis dos usuários</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Outros Tipos de Requisitos</h2>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Requisitos de Negócio</h3>
                  <p className="text-sm">Objetivos organizacionais de alto nível que o sistema deve atender.</p>
                  <div className="mt-2 text-xs bg-white p-2 rounded border border-slate-200">
                    <p>
                      <strong>Exemplo:</strong> "O sistema deve reduzir o tempo de processamento de pedidos em 30%"
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Requisitos de Usuário</h3>
                  <p className="text-sm">Necessidades dos usuários finais expressas em linguagem natural.</p>
                  <div className="mt-2 text-xs bg-white p-2 rounded border border-slate-200">
                    <p>
                      <strong>Exemplo:</strong> "Como cliente, quero poder rastrear meu pedido em tempo real"
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Requisitos de Sistema</h3>
                  <p className="text-sm">
                    Especificações técnicas detalhadas que descrevem como o sistema deve funcionar.
                  </p>
                  <div className="mt-2 text-xs bg-white p-2 rounded border border-slate-200">
                    <p>
                      <strong>Exemplo:</strong> "O sistema deve atualizar a localização do pedido a cada 5 minutos
                      usando a API de rastreamento"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Técnicas de Levantamento de Requisitos</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Entrevistas</h3>
                <p className="text-sm">
                  Conversas estruturadas ou semiestruturadas com stakeholders para entender suas necessidades e
                  expectativas.
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Dicas:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Prepare perguntas com antecedência</li>
                    <li>Escute ativamente</li>
                    <li>Faça perguntas abertas</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Workshops</h3>
                <p className="text-sm">
                  Sessões colaborativas com múltiplos stakeholders para identificar e priorizar requisitos.
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Técnicas:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Brainstorming</li>
                    <li>Mapeamento de processos</li>
                    <li>Priorização em grupo</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Observação</h3>
                <p className="text-sm">
                  Observar usuários em seu ambiente natural para entender como realizam tarefas e usam sistemas
                  existentes.
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Benefícios:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Identifica necessidades não verbalizadas</li>
                    <li>Revela problemas reais de uso</li>
                    <li>Fornece contexto valioso</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Protótipos</h3>
                <p className="text-sm">
                  Criar representações visuais ou interativas do sistema para validar requisitos e obter feedback.
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Tipos:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Baixa fidelidade (wireframes)</li>
                    <li>Alta fidelidade (mockups)</li>
                    <li>Protótipos interativos</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Questionários</h3>
                <p className="text-sm">
                  Coletar informações de um grande número de stakeholders através de perguntas estruturadas.
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Quando usar:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Para validar hipóteses</li>
                    <li>Para coletar dados quantitativos</li>
                    <li>Para alcançar muitos usuários</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Análise de Documentos</h3>
                <p className="text-sm">
                  Revisar documentação existente, como processos, políticas e manuais, para entender o contexto e
                  requisitos.
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Fontes:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Manuais de usuário</li>
                    <li>Documentação de sistemas existentes</li>
                    <li>Relatórios de problemas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-md mt-4">
            <h3 className="font-medium mb-2">Exemplos de Requisitos em Produtos Reais</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-md border border-slate-200">
                <p className="font-medium">Netflix:</p>
                <ul className="list-disc pl-5 text-sm mt-1">
                  <li>
                    <span className="text-blue-600">Funcional:</span> O sistema deve permitir que o usuário continue
                    assistindo de onde parou em qualquer dispositivo
                  </li>
                  <li>
                    <span className="text-pink-600">Não-Funcional:</span> O streaming deve iniciar em menos de 3
                    segundos em conexões de banda larga
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-md border border-slate-200">
                <p className="font-medium">Tesla:</p>
                <ul className="list-disc pl-5 text-sm mt-1">
                  <li>
                    <span className="text-blue-600">Funcional:</span> O veículo deve ser capaz de atualizar seu software
                    remotamente
                  </li>
                  <li>
                    <span className="text-pink-600">Não-Funcional:</span> O sistema de piloto automático deve ter uma
                    taxa de falsos positivos menor que 0,01%
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-md border border-slate-200">
                <p className="font-medium">Nubank:</p>
                <ul className="list-disc pl-5 text-sm mt-1">
                  <li>
                    <span className="text-blue-600">Funcional:</span> O usuário deve poder bloquear temporariamente o
                    cartão pelo aplicativo
                  </li>
                  <li>
                    <span className="text-pink-600">Não-Funcional:</span> O sistema deve estar disponível 99,99% do
                    tempo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Histórias de Usuário",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Histórias de Usuário</h1>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">O que são Histórias de Usuário?</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="mb-4">
                  Histórias de usuário são descrições curtas e simples de uma funcionalidade, contadas da perspectiva do
                  usuário. Elas seguem um formato específico e são uma ferramenta fundamental no desenvolvimento ágil.
                </p>
                <div className="bg-emerald-50 p-4 rounded-md">
                  <p className="font-medium text-emerald-800">Formato:</p>
                  <p className="mt-2 italic">"Como [persona], eu quero [ação], para que [benefício]."</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex">
                      <span className="font-medium text-emerald-800 w-24">Persona:</span>
                      <span>Quem está realizando a ação</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-emerald-800 w-24">Ação:</span>
                      <span>O que o usuário quer fazer</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-emerald-800 w-24">Benefício:</span>
                      <span>Por que o usuário quer isso</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-slate-50 p-4 rounded-md mb-4">
                  <h3 className="font-medium mb-2">Benefícios das Histórias de Usuário</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Foco no valor para o usuário, não na implementação técnica</li>
                    <li>Facilita a comunicação entre equipe técnica e stakeholders</li>
                    <li>Promove colaboração e discussões produtivas</li>
                    <li>Permite entregas incrementais de valor</li>
                    <li>Flexibilidade para adaptar-se a mudanças</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Exemplo:</h3>
                  <div className="bg-white p-3 rounded-md border border-slate-200">
                    <p className="italic">
                      "Como cliente de e-commerce, eu quero poder salvar itens em uma lista de desejos, para que eu
                      possa lembrar e comprar esses itens posteriormente."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Critérios INVEST</h2>
            <p className="mb-6">
              INVEST é um acrônimo que representa as características de uma boa história de usuário:
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-slate-50 p-5 rounded-md">
                <div className="bg-slate-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <h2 className="text-2xl font-bold text-slate-700">I</h2>
                </div>
                <h2 className="text-center text-xl font-semibold mb-3">Independente</h2>
                <p className="text-sm mb-3">
                  A história deve ser autocontida e não depender fortemente de outras histórias para ser implementada.
                </p>
                <div className="bg-slate-50 p-3 rounded-md">
                  <p className="text-xs font-medium">Exemplo:</p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-red-500">❌ Ruim:</span> "Como usuário, quero ver recomendações baseadas em
                    meus favoritos" (depende da funcionalidade de favoritos)
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-green-500">✓ Bom:</span> "Como usuário, quero marcar produtos como favoritos"
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-md">
                <div className="bg-slate-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <h2 className="text-2xl font-bold text-slate-700">N</h2>
                </div>
                <h2 className="text-center text-xl font-semibold mb-3">Negociável</h2>
                <p className="text-sm mb-3">
                  A história não é um contrato rígido; detalhes podem ser discutidos e ajustados pela equipe.
                </p>
                <div className="bg-slate-50 p-3 rounded-md">
                  <p className="text-xs font-medium">Exemplo:</p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-red-500">❌ Ruim:</span> "O sistema deve usar PostgreSQL e Redis para
                    armazenar dados de sessão" (muito específico)
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-green-500">✓ Bom:</span> "Como usuário, quero que minhas sessões persistam
                    entre logins"
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-md">
                <div className="bg-slate-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <h2 className="text-2xl font-bold text-slate-700">V</h2>
                </div>
                <h2 className="text-center text-xl font-semibold mb-3">Valiosa</h2>
                <p className="text-sm mb-3">
                  A história deve entregar valor real para o usuário ou cliente, não apenas para desenvolvedores.
                </p>
                <div className="bg-slate-50 p-3 rounded-md">
                  <p className="text-xs font-medium">Exemplo:</p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-red-500">❌ Ruim:</span> "Como desenvolvedor, quero refatorar o código para
                    usar o padrão repository"
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-green-500">✓ Bom:</span> "Como cliente, quero poder filtrar produtos por
                    avaliação"
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-md">
                <div className="bg-slate-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <h2 className="text-2xl font-bold text-slate-700">E</h2>
                </div>
                <h2 className="text-center text-xl font-semibold mb-3">Estimável</h2>
                <p className="text-sm mb-3">
                  A equipe deve ser capaz de estimar o esforço necessário para implementar a história.
                </p>
                <div className="bg-slate-50 p-3 rounded-md">
                  <p className="text-xs font-medium">Exemplo:</p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-red-500">❌ Ruim:</span> "Como usuário, quero que o sistema seja intuitivo"
                    (muito vago)
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-green-500">✓ Bom:</span> "Como usuário, quero ver dicas contextuais ao passar
                    o mouse sobre elementos da interface"
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-md">
                <div className="bg-slate-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <h2 className="text-2xl font-bold text-slate-700">S</h2>
                </div>
                <h2 className="text-center text-xl font-semibold mb-3">Pequena (Small)</h2>
                <p className="text-sm mb-3">
                  A história deve ser pequena o suficiente para ser concluída em um sprint.
                </p>
                <div className="bg-slate-50 p-3 rounded-md">
                  <p className="text-xs font-medium">Exemplo:</p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-red-500">❌ Ruim:</span> "Como usuário, quero um sistema completo de
                    gerenciamento de pedidos"
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-green-500">✓ Bom:</span> "Como usuário, quero poder cancelar um pedido antes
                    do envio"
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-md">
                <div className="bg-slate-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <h2 className="text-2xl font-bold text-slate-700">T</h2>
                </div>
                <h2 className="text-center text-xl font-semibold mb-3">Testável</h2>
                <p className="text-sm mb-3">
                  Deve ser possível verificar se a história foi implementada corretamente através de testes.
                </p>
                <div className="bg-slate-50 p-3 rounded-md">
                  <p className="text-xs font-medium">Exemplo:</p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-red-500">❌ Ruim:</span> "Como usuário, quero que o sistema seja seguro" (como
                    testar?)
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="text-green-500">✓ Bom:</span> "Como usuário, quero ser notificado e bloqueado após
                    3 tentativas incorretas de login"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Técnicas para Escrita de Histórias Eficazes</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">User Story Mapping</h3>
                <p className="text-sm mb-3">
                  Técnica visual que organiza histórias de usuário em um mapa baseado na jornada do usuário, ajudando a
                  identificar lacunas e dependências.
                </p>
                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="text-xs font-medium">Passos:</p>
                  <ol className="list-decimal pl-5 text-xs mt-1">
                    <li>Identificar atividades principais do usuário (backbone)</li>
                    <li>Detalhar tarefas para cada atividade</li>
                    <li>Priorizar horizontalmente (valor) e verticalmente (complexidade)</li>
                    <li>Definir releases e MVPs</li>
                  </ol>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Splitting User Stories</h3>
                <p className="text-sm mb-3">
                  Técnicas para dividir histórias grandes em histórias menores e mais gerenciáveis.
                </p>
                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="text-xs font-medium">Estratégias de divisão:</p>
                  <ul className="list-disc pl-5 text-xs mt-1">
                    <li>Por operações (CRUD)</li>
                    <li>Por regras de negócio</li>
                    <li>Por passos do fluxo</li>
                    <li>Por variações de dados</li>
                    <li>Por plataformas ou dispositivos</li>
                    <li>Por qualidade de serviço</li>
                  </ul>
                  <div className="mt-2">
                    <Link href="/semana4/estrategias-divisao">
                      <Button variant="outline" size="sm" className="w-full text-xs flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" />
                        Ver explicação detalhada
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Níveis de Granularidade",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Níveis de Granularidade</h1>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-slate-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-700"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 10 10 0 0 0 0-18z"></path>
                  <path d="M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                  <path d="M12 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-center mb-3">Épicos</h2>
              <p className="text-sm mb-3">
                Histórias grandes que representam funcionalidades complexas e que precisam ser quebradas em histórias
                menores.
              </p>
              <div className="bg-slate-50 p-3 rounded-md">
                <p className="text-xs font-medium">Exemplo:</p>
                <p className="text-xs text-slate-600 mt-1">
                  "Como cliente, quero um sistema de checkout completo para finalizar minhas compras"
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-slate-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-700"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-center mb-3">Histórias</h2>
              <p className="text-sm mb-3">
                Unidades de trabalho que podem ser implementadas em um sprint e entregam valor ao usuário.
              </p>
              <div className="bg-slate-50 p-3 rounded-md">
                <p className="text-xs font-medium">Exemplo:</p>
                <p className="text-xs text-slate-600 mt-1">
                  "Como cliente, quero adicionar itens ao carrinho de compras para comprá-los posteriormente"
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-slate-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-700"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-center mb-3">Tarefas</h2>
              <p className="text-sm mb-3">
                Atividades técnicas específicas necessárias para implementar uma história de usuário.
              </p>
              <div className="bg-slate-50 p-3 rounded-md">
                <p className="text-xs font-medium">Exemplo:</p>
                <p className="text-xs text-slate-600 mt-1">
                  "Criar modelo de dados para o carrinho de compras"
                  <br />
                  "Implementar API para adicionar itens ao carrinho"
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Exemplo de Decomposição</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium">Épico:</h3>
                <p className="italic mt-1">
                  "Como cliente, quero um sistema de checkout completo para finalizar minhas compras"
                </p>
              </div>
              <div className="pl-6 space-y-4">
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium">História 1:</h3>
                  <p className="italic mt-1">
                    "Como cliente, quero revisar os itens no meu carrinho antes de finalizar a compra"
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium">História 2:</h3>
                  <p className="italic mt-1">
                    "Como cliente, quero inserir meu endereço de entrega para receber meus produtos"
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium">História 3:</h3>
                  <p className="italic mt-1">
                    "Como cliente, quero escolher entre diferentes métodos de pagamento para finalizar minha compra"
                  </p>
                  <div className="pl-6 mt-3 space-y-2">
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-xs">
                        <strong>Tarefa 1:</strong> Implementar integração com gateway de pagamento
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-xs">
                        <strong>Tarefa 2:</strong> Criar interface para seleção de método de pagamento
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-xs">
                        <strong>Tarefa 3:</strong> Implementar validação de dados de cartão de crédito
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Critérios de Aceitação",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Critérios de Aceitação</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">O que são Critérios de Aceitação?</h2>
              <p className="mb-4">
                Condições específicas e verificáveis que devem ser atendidas para que uma história de usuário seja
                considerada completa e aceita pelo Product Owner.
              </p>
              <div className="bg-slate-50 p-4 rounded-md">
                <p className="font-medium mb-2">Benefícios:</p>
                <ul className="list-disc pl-6 text-sm">
                  <li>Esclarecem expectativas para todos os envolvidos</li>
                  <li>Definem limites claros para a implementação</li>
                  <li>Servem como base para testes de aceitação</li>
                  <li>Ajudam a evitar o escopo indeterminado (scope creep)</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Formato Gherkin</h2>
              <p className="mb-4">
                Uma linguagem específica para descrever comportamentos de software de forma estruturada:
              </p>
              <div className="bg-slate-50 p-4 rounded-md">
                <p className="font-medium">Estrutura:</p>
                <div className="mt-2 space-y-2">
                  <p>
                    <strong className="text-green-600">Dado que</strong> [contexto inicial]
                  </p>
                  <p>
                    <strong className="text-blue-600">Quando</strong> [ação é realizada]
                  </p>
                  <p>
                    <strong className="text-purple-600">Então</strong> [resultado esperado]
                  </p>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Pode incluir "E" e "Mas" para estender cada uma das cláusulas acima.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Exemplo de História com Critérios de Aceitação</h2>
            <div className="bg-slate-50 p-4 rounded-md mb-4">
              <p className="font-medium">História de Usuário:</p>
              <p className="italic mt-2">
                "Como cliente, quero poder redefinir minha senha quando esquecê-la, para que eu possa recuperar o acesso
                à minha conta."
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r-md">
                <p className="font-medium">Critério 1:</p>
                <p className="mt-1">
                  <strong className="text-green-600">Dado que</strong> sou um usuário registrado
                  <br />
                  <strong className="text-blue-600">Quando</strong> eu clicar em "Esqueci minha senha" na tela de login
                  <br />
                  <strong className="text-purple-600">Então</strong> devo ser direcionado para uma página onde posso
                  inserir meu e-mail
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r-md">
                <p className="font-medium">Critério 2:</p>
                <p className="mt-1">
                  <strong className="text-green-600">Dado que</strong> estou na página de redefinição de senha
                  <br />
                  <strong className="text-blue-600">Quando</strong> eu inserir um e-mail registrado e clicar em "Enviar"
                  <br />
                  <strong className="text-purple-600">Então</strong> devo receber um e-mail com um link para redefinir
                  minha senha
                  <br />
                  <strong className="text-green-600">E</strong> devo ver uma mensagem de confirmação na tela
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r-md">
                <p className="font-medium">Critério 3:</p>
                <p className="mt-1">
                  <strong className="text-green-600">Dado que</strong> recebi um e-mail de redefinição de senha
                  <br />
                  <strong className="text-blue-600">Quando</strong> eu clicar no link e inserir uma nova senha
                  <br />
                  <strong className="text-purple-600">Então</strong> minha senha deve ser atualizada
                  <br />
                  <strong className="text-green-600">E</strong> devo ser redirecionado para a tela de login
                  <br />
                  <strong className="text-green-600">E</strong> devo conseguir fazer login com a nova senha
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Exemplos de Critérios de Aceitação em Produtos Reais</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Spotify - Recurso de Playlist Colaborativa</h3>
                <p className="italic text-sm mb-3">
                  "Como usuário, quero convidar amigos para colaborar em uma playlist, para que possamos criar listas de
                  músicas juntos."
                </p>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-md border border-slate-200">
                    <p className="text-xs">
                      <strong>Dado que</strong> estou visualizando uma playlist que criei
                      <br />
                      <strong>Quando</strong> clico na opção "Tornar colaborativa"
                      <br />
                      <strong>Então</strong> devo ver opções para convidar amigos por e-mail, link ou redes sociais
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-slate-200">
                    <p className="text-xs">
                      <strong>Dado que</strong> convidei um amigo para colaborar
                      <br />
                      <strong>Quando</strong> meu amigo aceita o convite
                      <br />
                      <strong>Então</strong> ele deve poder adicionar, remover e reordenar músicas na playlist
                      <br />
                      <strong>E</strong> devo ver seu nome como colaborador na playlist
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Uber - Recurso de Agendamento</h3>
                <p className="italic text-sm mb-3">
                  "Como passageiro, quero agendar uma viagem com antecedência, para garantir que terei um carro
                  disponível quando precisar."
                </p>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-md border border-slate-200">
                    <p className="text-xs">
                      <strong>Dado que</strong> estou na tela de solicitação de viagem
                      <br />
                      <strong>Quando</strong> seleciono a opção "Agendar"
                      <br />
                      <strong>Então</strong> devo poder selecionar data e hora para a viagem
                      <br />
                      <strong>E</strong> a data deve permitir agendamento entre 1 hora e 7 dias no futuro
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-slate-200">
                    <p className="text-xs">
                      <strong>Dado que</strong> agendei uma viagem
                      <br />
                      <strong>Quando</strong> faltam 15 minutos para o horário agendado
                      <br />
                      <strong>Então</strong> devo receber uma notificação confirmando que o motorista está a caminho
                      <br />
                      <strong>E</strong> devo poder cancelar sem custo até 5 minutos antes do horário agendado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Boas Práticas",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Boas Práticas para Histórias de Usuário</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Foco no Usuário</h2>
                    <p className="text-sm">
                      Mantenha o foco no valor para o usuário, não nas implementações técnicas. Use personas reais
                      sempre que possível.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Colaboração</h2>
                    <p className="text-sm">
                      Envolva toda a equipe na criação e refinamento de histórias. Lembre-se que histórias são
                      conversações, não apenas documentos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Refinamento Contínuo</h2>
                    <p className="text-sm">
                      Refine histórias regularmente, quebrando-as em partes menores quando necessário e adicionando
                      detalhes conforme o desenvolvimento se aproxima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Critérios de Aceitação Claros</h2>
                    <p className="text-sm">
                      Defina critérios de aceitação específicos, mensuráveis e testáveis para cada história. Use o
                      formato Gherkin quando apropriado.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Priorização Constante</h2>
                    <p className="text-sm">
                      Mantenha o backlog priorizado com base no valor para o negócio e para o usuário. Reavalie
                      prioridades regularmente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Mapeamento de Histórias</h2>
                    <p className="text-sm">
                      Use técnicas de mapeamento de histórias (story mapping) para visualizar o fluxo do usuário e
                      identificar lacunas no backlog.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Erros Comuns a Evitar</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-md">
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Histórias Muito Grandes</h3>
                    <p className="text-sm">
                      Histórias muito grandes são difíceis de estimar e implementar em um único sprint. Quebre-as em
                      histórias menores.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-md">
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Foco na Implementação Técnica</h3>
                    <p className="text-sm">
                      Histórias devem focar no valor para o usuário, não em como a funcionalidade será implementada
                      tecnicamente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-md">
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Falta de Critérios de Aceitação</h3>
                    <p className="text-sm">
                      Histórias sem critérios de aceitação claros levam a mal-entendidos e retrabalho. Sempre defina
                      como verificar se a história foi concluída.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-md">
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Dependências Não Identificadas</h3>
                    <p className="text-sm">
                      Não identificar dependências entre histórias pode causar bloqueios no desenvolvimento. Mapeie
                      dependências durante o refinamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Ferramentas e Técnicas Complementares</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Impact Mapping</h3>
                <p className="text-sm">
                  Técnica de planejamento que conecta objetivos de negócio a entregas específicas, ajudando a priorizar
                  histórias com base no impacto.
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Estrutura:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>
                      <strong>Por quê?</strong> (Objetivo)
                    </li>
                    <li>
                      <strong>Quem?</strong> (Atores)
                    </li>
                    <li>
                      <strong>Como?</strong> (Impactos)
                    </li>
                    <li>
                      <strong>O quê?</strong> (Entregas)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Behavior-Driven Development (BDD)</h3>
                <p className="text-sm">
                  Abordagem que usa linguagem natural para descrever o comportamento esperado do software, facilitando a
                  colaboração entre negócio e desenvolvimento.
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Benefícios:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Linguagem comum entre stakeholders</li>
                    <li>Testes automatizados alinhados com requisitos</li>
                    <li>Documentação viva e atualizada</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Definition of Ready/Done</h3>
                <p className="text-sm">
                  Critérios que definem quando uma história está pronta para ser desenvolvida (Ready) e quando está
                  concluída (Done).
                </p>
                <div className="mt-2 text-xs">
                  <p className="font-medium">Exemplos de DoR:</p>
                  <ul className="list-disc pl-4 mt-1">
                    <li>História segue formato padrão</li>
                    <li>Critérios de aceitação definidos</li>
                    <li>Dependências identificadas</li>
                    <li>Estimativa realizada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Exercício Prático",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Exercício Prático</h1>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Escrevendo Histórias de Usuário</h2>
            <p className="mb-6">
              Agora é hora de praticar! Escolha um produto digital que você usa frequentemente (ou o produto que está
              desenvolvendo) e escreva algumas histórias de usuário seguindo as boas práticas que aprendemos.
            </p>
            <div className="bg-emerald-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-emerald-800 mb-3">Instruções:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Identifique uma funcionalidade que você gostaria de adicionar ou melhorar no produto escolhido</li>
                <li>
                  Escreva 3-5 histórias de usuário relacionadas a essa funcionalidade, seguindo o formato "Como
                  [persona], eu quero [ação], para que [benefício]"
                </li>
                <li>
                  Para cada história, defina pelo menos 3 critérios de aceitação claros usando o formato Gherkin
                  (Dado/Quando/Então)
                </li>
                <li>Avalie suas histórias usando os critérios INVEST e faça ajustes se necessário</li>
                <li>Priorize suas histórias com base no valor para o usuário e no esforço de implementação</li>
              </ol>
              <div className="mt-4 bg-white p-4 rounded-md border border-emerald-200">
                <p className="text-sm text-emerald-800">
                  <strong>Dica:</strong> Use o template interativo disponível na seção de Templates para criar suas
                  histórias de usuário. Você pode salvar seu trabalho e exportá-lo como PDF.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Próximos Passos</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">1. Pratique</h3>
                <p className="text-sm">
                  Use o template interativo para criar histórias de usuário para um produto real ou hipotético.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">2. Compartilhe</h3>
                <p className="text-sm">
                  Na próxima sessão de mentoria, compartilhe suas histórias para receber feedback e sugestões de
                  melhoria.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">3. Aplique</h3>
                <p className="text-sm">
                  Comece a aplicar o formato de histórias de usuário e critérios de aceitação em seu trabalho diário
                  como Product Owner.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < slides.length - 1 ? prevSlide + 1 : slides.length - 1))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/semana4" className="flex items-center text-gray-800 hover:text-gray-600">
            <Home className="mr-2 h-5 w-5" />
            Início
          </Link>
          <h1 className="text-lg font-semibold">Semana 4: Product Owner</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <div>{slides[currentSlide].content}</div>
        </div>

        <div className="flex justify-between items-center">
          <Button onClick={goToPreviousSlide} disabled={currentSlide === 0}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>
          <span>
            Slide {currentSlide + 1} de {slides.length}
          </span>
          <Button onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>
            Próximo
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
