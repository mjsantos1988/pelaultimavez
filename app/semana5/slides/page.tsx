"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, ExternalLink } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import { TestPyramid } from "@/components/test-pyramid"

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Efeito para rolar para o topo quando mudar de slide
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentSlide])

  const slides = [
    {
      title: "Qualidade de Software",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Qualidade de Software</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">O que é Qualidade de Software?</h2>
              <p className="mb-4">
                Qualidade de software refere-se ao grau em que um sistema, componente ou processo atende aos requisitos
                especificados e às expectativas do cliente ou usuário.
              </p>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Definições de Qualidade</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    <span className="font-medium">ISO 25010:</span> "Totalidade de características que determinam a
                    capacidade de um produto de software de satisfazer necessidades implícitas ou explícitas"
                  </li>
                  <li>
                    <span className="font-medium">Pressman:</span> "Conformidade com requisitos funcionais e de
                    performance explicitamente declarados"
                  </li>
                  <li>
                    <span className="font-medium">Gerald Weinberg:</span> "Qualidade é valor para alguma pessoa"
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Dimensões da Qualidade</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Qualidade Interna</h3>
                    <p className="text-sm text-slate-600">
                      Aspectos técnicos que afetam a manutenção e evolução do software (código limpo, arquitetura,
                      etc.).
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Qualidade Externa</h3>
                    <p className="text-sm text-slate-600">
                      Comportamento do software em execução (desempenho, segurança, confiabilidade, etc.).
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Qualidade em Uso</h3>
                    <p className="text-sm text-slate-600">
                      Como o software atende às necessidades do usuário em seu contexto específico (eficiência,
                      satisfação, etc.).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Atributos de Qualidade (ISO 25010)</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Adequação Funcional</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Completude funcional</li>
                  <li>Correção funcional</li>
                  <li>Adequação funcional</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Eficiência de Desempenho</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Comportamento temporal</li>
                  <li>Utilização de recursos</li>
                  <li>Capacidade</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Compatibilidade</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Coexistência</li>
                  <li>Interoperabilidade</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Usabilidade</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Reconhecimento de adequação</li>
                  <li>Apreensibilidade</li>
                  <li>Operacionalidade</li>
                  <li>Proteção contra erro</li>
                  <li>Estética da interface</li>
                  <li>Acessibilidade</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Confiabilidade</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Maturidade</li>
                  <li>Disponibilidade</li>
                  <li>Tolerância a falhas</li>
                  <li>Recuperabilidade</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Segurança</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Confidencialidade</li>
                  <li>Integridade</li>
                  <li>Não-repúdio</li>
                  <li>Responsabilização</li>
                  <li>Autenticidade</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Manutenibilidade</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Modularidade</li>
                  <li>Reusabilidade</li>
                  <li>Analisabilidade</li>
                  <li>Modificabilidade</li>
                  <li>Testabilidade</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Portabilidade</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Adaptabilidade</li>
                  <li>Instalabilidade</li>
                  <li>Substituibilidade</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-md mt-4">
            <h3 className="font-medium mb-2">Papel do Product Owner na Qualidade</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Responsabilidades</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Definir critérios de aceitação claros</li>
                  <li>Priorizar correções de bugs e dívida técnica</li>
                  <li>Balancear velocidade e qualidade</li>
                  <li>Validar entregas conforme requisitos</li>
                  <li>Representar a voz do cliente em decisões de qualidade</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Práticas Recomendadas</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Incluir requisitos não-funcionais no backlog</li>
                  <li>Participar de revisões de qualidade</li>
                  <li>Definir métricas de qualidade relevantes ao negócio</li>
                  <li>Estabelecer "Definition of Done" que inclua aspectos de qualidade</li>
                  <li>Promover cultura de qualidade na equipe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Métricas de Qualidade",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Métricas de Qualidade</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Por que Medir a Qualidade?</h2>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-md">
                  <p className="mb-2">"Você não pode melhorar o que não consegue medir"</p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Identificar áreas problemáticas</li>
                    <li>Tomar decisões baseadas em dados</li>
                    <li>Acompanhar tendências e progresso</li>
                    <li>Estabelecer níveis de qualidade esperados</li>
                    <li>Comunicar status do produto aos stakeholders</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Tipos de Métricas</h3>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="font-medium w-32">Estáticas:</span>
                      <span className="text-sm">Medidas sem executar o código (complexidade, tamanho)</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-32">Dinâmicas:</span>
                      <span className="text-sm">
                        Medidas durante a execução do código (performance, uso de memória)
                      </span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-32">De processo:</span>
                      <span className="text-sm">Medidas do processo de desenvolvimento (velocidade, lead time)</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-32">De produto:</span>
                      <span className="text-sm">Medidas do software em si (bugs, cobertura de testes)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Métricas Comuns de Qualidade</h2>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium">Defeitos e Bugs</h3>
                  <ul className="list-disc pl-5 text-sm mt-1">
                    <li>Densidade de defeitos (bugs por KLOC)</li>
                    <li>Taxa de escape de defeitos (bugs encontrados em produção)</li>
                    <li>Tempo médio de resolução de bugs</li>
                    <li>Bugs por severidade/prioridade</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium">Cobertura de Testes</h3>
                  <ul className="list-disc pl-5 text-sm mt-1">
                    <li>Cobertura de código (% do código testado)</li>
                    <li>Cobertura de requisitos (% de requisitos testados)</li>
                    <li>Cobertura de casos de uso (% de casos testados)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium">Manutenibilidade</h3>
                  <ul className="list-disc pl-5 text-sm mt-1">
                    <li>Complexidade ciclomática</li>
                    <li>Dívida técnica</li>
                    <li>Duplicação de código</li>
                    <li>Índice de manutenibilidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Métricas de Experiência do Usuário</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Usabilidade</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>System Usability Scale (SUS)</li>
                  <li>Taxa de completude de tarefas</li>
                  <li>Tempo para completar tarefas</li>
                  <li>Taxa de erro do usuário</li>
                  <li>Facilidade de aprendizado</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Satisfação</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Net Promoter Score (NPS)</li>
                  <li>Customer Satisfaction Score (CSAT)</li>
                  <li>Customer Effort Score (CES)</li>
                  <li>Feedback qualitativo</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Engajamento</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Frequência de uso</li>
                  <li>Duração da sessão</li>
                  <li>Taxa de retenção</li>
                  <li>Taxa de conversão</li>
                  <li>Taxa de abandono</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-md mt-4">
            <h3 className="font-medium mb-2">Implementando Métricas de Qualidade</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md border border-slate-200">
                <h4 className="font-medium text-blue-700 mb-2">Processo de Implementação</h4>
                <ol className="list-decimal pl-5 text-sm space-y-1">
                  <li>Identificar objetivos de qualidade</li>
                  <li>Selecionar métricas relevantes para esses objetivos</li>
                  <li>Estabelecer baselines e metas</li>
                  <li>Implementar coleta automática quando possível</li>
                  <li>Analisar resultados regularmente</li>
                  <li>Ajustar metas e métricas conforme necessário</li>
                </ol>
              </div>
              <div className="bg-white p-3 rounded-md border border-slate-200">
                <h4 className="font-medium text-blue-700 mb-2">Armadilhas Comuns</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Focar apenas em métricas quantitativas</li>
                  <li>Medir apenas o fácil de medir, não o importante</li>
                  <li>Estabelecer metas irrealistas</li>
                  <li>Ignorar o contexto ao interpretar métricas</li>
                  <li>Usar métricas para punir, não para melhorar</li>
                  <li>Coletar métricas sem plano de ação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Testes de Software",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Testes de Software</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Tipos de Testes</h2>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes Unitários</h3>
                  <p className="text-sm mt-1">
                    Verificam unidades isoladas de código (funções, métodos, classes) para garantir seu funcionamento
                    correto.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Executados por: Desenvolvedores</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes de Integração</h3>
                  <p className="text-sm mt-1">
                    Verificam se diferentes componentes ou serviços funcionam corretamente juntos.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Executados por: Desenvolvedores, QA</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes de Aceitação</h3>
                  <p className="text-sm mt-1">
                    Verificam se o sistema atende aos requisitos do negócio e às necessidades do usuário.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Executados por: QA, Product Owner, Stakeholders</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes E2E (End-to-End)</h3>
                  <p className="text-sm mt-1">
                    Testam o fluxo completo da aplicação, simulando interações reais do usuário.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Executados por: QA, Automação</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes Exploratórios</h3>
                  <p className="text-sm mt-1">
                    Testes não estruturados onde os testadores exploram o sistema de forma criativa, sem scripts
                    predefinidos.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Executados por: QA, Testadores, Usuários avançados</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Abordagens de Teste</h2>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes Funcionais</h3>
                  <p className="text-sm mt-1">
                    Verificam se o software realiza as funções conforme especificado nos requisitos.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Exemplo: Verificar se um formulário de cadastro salva os dados corretamente
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes Não-Funcionais</h3>
                  <p className="text-sm mt-1">
                    Avaliam aspectos como desempenho, segurança, usabilidade e confiabilidade.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Exemplo: Testes de carga para verificar quantos usuários o sistema suporta
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes Manuais</h3>
                  <p className="text-sm mt-1">
                    Executados por pessoas, sem automação. Úteis para exploração e validação de UX.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Exemplo: Explorar a interface para descobrir bugs não óbvios
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Testes Automatizados</h3>
                  <p className="text-sm mt-1">
                    Executados por scripts ou ferramentas. Ideais para testes repetitivos e regressão.
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Exemplo: Suite de testes que executa a cada commit no repositório
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Estratégias de Teste em Ambientes Ágeis</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="bg-slate-50 p-4 rounded-md mb-4">
                  <h3 className="font-medium mb-2">Teste Contínuo</h3>
                  <p className="text-sm mb-2">
                    Integração de testes automatizados no pipeline de CI/CD para feedback rápido.
                  </p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Execução automática de testes a cada commit</li>
                    <li>Feedback rápido para desenvolvedores</li>
                    <li>Detecção precoce de problemas</li>
                    <li>Garantia de qualidade constante</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Test-Driven Development (TDD)</h3>
                  <p className="text-sm mb-2">
                    Escrever testes antes do código de produção para guiar o desenvolvimento.
                  </p>
                  <div className="bg-white p-2 rounded-md border border-slate-200 text-xs">
                    <ol className="list-decimal pl-4 space-y-1">
                      <li>Escrever um teste que falha</li>
                      <li>Implementar o código mínimo para passar no teste</li>
                      <li>Refatorar o código mantendo o teste passando</li>
                      <li>Repetir o ciclo</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-slate-50 p-4 rounded-md mb-4">
                  <h3 className="font-medium mb-2">Behavior-Driven Development (BDD)</h3>
                  <p className="text-sm mb-2">
                    Foco no comportamento esperado do software usando linguagem natural estruturada.
                  </p>
                  <div className="bg-white p-2 rounded-md border border-slate-200 text-xs mb-2">
                    <p className="font-medium">Exemplo de cenário BDD:</p>
                    <p className="mt-1">
                      <strong className="text-green-600">Dado que</strong> sou um usuário logado
                      <br />
                      <strong className="text-blue-600">Quando</strong> eu adicionar um produto ao carrinho
                      <br />
                      <strong className="text-purple-600">Então</strong> devo ver o produto no meu carrinho
                      <br />
                      <strong className="text-green-600">E</strong> o valor total deve ser atualizado
                    </p>
                  </div>
                  <p className="text-xs">Ferramentas: Cucumber, SpecFlow, Behave</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Exploratory Testing</h3>
                  <p className="text-sm mb-2">
                    Testes não estruturados onde os testadores exploram o sistema, aprendendo e criando testes
                    simultaneamente.
                  </p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Foco na criatividade e experiência do testador</li>
                    <li>Útil para descobrir bugs inesperados</li>
                    <li>Complemento valioso para testes automáticos</li>
                    <li>Especialmente útil para testar UX e fluxos complexos</li>
                    <li>Identifica problemas que testes automatizados podem não detectar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <TestPyramid />
        </div>
      ),
    },
    {
      title: "Homologação e Validação",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Homologação e Validação</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Processo de Homologação</h2>
              <div className="bg-slate-50 p-4 rounded-md mb-4">
                <h3 className="font-medium mb-2">O que é Homologação?</h3>
                <p className="text-sm">
                  Processo formal de verificação e aprovação de um software antes de sua disponibilização para o
                  ambiente de produção. Busca garantir que o sistema atenda aos requisitos especificados e às
                  necessidades do usuário.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Preparação</h3>
                    <p className="text-sm text-slate-600">
                      Definição de critérios de aceitação, preparação de dados de teste, configuração do ambiente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Execução</h3>
                    <p className="text-sm text-slate-600">
                      Realização de testes de aceitação, validação de requisitos, registro de defeitos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Avaliação</h3>
                    <p className="text-sm text-slate-600">
                      Análise dos resultados, verificação do atendimento aos critérios, decisão sobre aprovação.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Aprovação</h3>
                    <p className="text-sm text-slate-600">
                      Formalização da aceitação, documentação, autorização para implantação em produção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Validação vs. Verificação</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="py-2 px-4 text-left">Aspecto</th>
                      <th className="py-2 px-4 text-left">Verificação</th>
                      <th className="py-2 px-4 text-left">Validação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t">Objetivo</td>
                      <td className="py-2 px-4 border-t">Confirmar se o software está sendo construído corretamente</td>
                      <td className="py-2 px-4 border-t">Confirmar se o software correto está sendo construído</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t">Foco</td>
                      <td className="py-2 px-4 border-t">Requisitos especificados e design</td>
                      <td className="py-2 px-4 border-t">Necessidades reais do usuário</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t">Questão</td>
                      <td className="py-2 px-4 border-t">"Estamos construindo o produto corretamente?"</td>
                      <td className="py-2 px-4 border-t">"Estamos construindo o produto correto?"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t">Momento</td>
                      <td className="py-2 px-4 border-t">Durante o desenvolvimento</td>
                      <td className="py-2 px-4 border-t">Final do desenvolvimento/iteração</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-t">Envolvidos</td>
                      <td className="py-2 px-4 border-t">Desenvolvedores, QA</td>
                      <td className="py-2 px-4 border-t">Usuários, Product Owner, stakeholders</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-slate-50 p-3 rounded-md">
                <p className="text-sm font-medium">Exemplos:</p>
                <ul className="list-disc pl-5 text-sm mt-1">
                  <li>
                    <span className="font-medium">Verificação:</span> Testes unitários, revisões de código, análise
                    estática
                  </li>
                  <li>
                    <span className="font-medium">Validação:</span> Testes de aceitação, beta testes
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Ambientes de Teste e Homologação</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Desenvolvimento</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Ambiente local dos desenvolvedores</li>
                  <li>Testes preliminares</li>
                  <li>Alterações frequentes</li>
                  <li>Dados simulados</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Integração</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Integração entre componentes</li>
                  <li>Testes automatizados</li>
                  <li>Verificação de compatibilidade</li>
                  <li>Build contínua</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">QA/Testes</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Testes formais</li>
                  <li>Verificação de requisitos</li>
                  <li>Testes de regressão</li>
                  <li>Identificação de bugs</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Homologação/UAT</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Validação pelo usuário final</li>
                  <li>Ambiente similar à produção</li>
                  <li>Testes de aceitação</li>
                  <li>Aprovação para produção</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-md border border-blue-200">
              <h3 className="font-medium mb-2">Práticas Recomendadas</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="list-disc pl-5 text-sm">
                  <li>Manter ambientes o mais próximos possível de produção</li>
                  <li>Automatizar o processo de implantação entre ambientes</li>
                  <li>Usar dados de teste representativos e anonimizados</li>
                  <li>Documentar configurações específicas de cada ambiente</li>
                </ul>
                <ul className="list-disc pl-5 text-sm">
                  <li>Implementar controle de acesso adequado para cada ambiente</li>
                  <li>Realizar testes de segurança em ambientes similares à produção</li>
                  <li>Monitorar desempenho em todos os ambientes</li>
                  <li>Manter registro de alterações entre ambientes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-md mt-4">
            <h3 className="font-medium mb-2">Papel do Product Owner na Homologação</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Responsabilidades</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Definir critérios de aceitação claros e mensuráveis</li>
                  <li>Participar ativamente das sessões de homologação</li>
                  <li>Validar se a entrega atende às necessidades do negócio</li>
                  <li>Priorizar correções de bugs identificados</li>
                  <li>Aprovar formalmente a implantação em produção</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Boas Práticas</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Envolver usuários reais no processo de homologação</li>
                  <li>Criar roteiros de teste baseados em casos de uso reais</li>
                  <li>Documentar o resultado da homologação com evidências</li>
                  <li>Estabelecer critérios objetivos para aprovação/rejeição</li>
                  <li>Realizar homologação incremental para funcionalidades complexas</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm mt-4">
              <h4 className="font-medium text-blue-700 mb-2">Uso de Planos de Teste</h4>
              <div className="flex items-start">
                <div className="flex-grow">
                  <p className="text-sm mb-2">
                    Um plano de teste bem estruturado é fundamental para garantir que a homologação seja abrangente e
                    eficaz.
                  </p>
                  <div className="bg-slate-50 p-2 rounded-md text-xs">
                    <p className="font-medium">Elementos de um bom plano de teste:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Escopo e objetivos</li>
                      <li>Casos de teste com passos detalhados</li>
                      <li>Dados de teste necessários</li>
                      <li>Critérios de aprovação</li>
                      <li>Responsáveis e cronograma</li>
                    </ul>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <Link href="/semana5/templates/interactive-test-plan">
                    <Button variant="outline" size="sm" className="w-full text-xs flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Ver template
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Gestão de Releases",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Gestão de Releases</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">O que é Gestão de Releases?</h2>
              <p className="mb-4">
                Gestão de releases é o processo de planejar, programar, coordenar e controlar a implantação de mudanças
                de software em ambientes de produção, garantindo entrega de valor aos usuários de forma controlada.
              </p>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Objetivos da Gestão de Releases</h3>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Entregar valor ao usuário de forma previsível e controlada</li>
                  <li>Minimizar riscos e impactos durante implantações</li>
                  <li>Garantir que todas as partes envolvidas estejam preparadas</li>
                  <li>Sincronizar entregas técnicas com necessidades do negócio</li>
                  <li>Manter a estabilidade do ambiente de produção</li>
                  <li>Facilitar comunicação entre equipes técnicas e de negócio</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Estratégias de Release</h2>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium mb-1">Release Tradicional</h3>
                  <p className="text-sm mb-1">Grandes entregas agendadas em intervalos fixos (ex: trimestrais)</p>
                  <div className="flex items-center text-xs">
                    <span className="w-20 font-medium">Prós:</span>
                    <span>Previsibilidade, tempo para testes extensivos</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-20 font-medium">Contras:</span>
                    <span>Feedback tardio, grandes implantações de alto risco</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium mb-1">Release Contínuo</h3>
                  <p className="text-sm mb-1">Pequenas entregas frequentes, às vezes várias vezes ao dia</p>
                  <div className="flex items-center text-xs">
                    <span className="w-20 font-medium">Prós:</span>
                    <span>Feedback rápido, menor risco por alteração, entrega ágil</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-20 font-medium">Contras:</span>
                    <span>Requer automação avançada, menos tempo para testes manuais</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-md">
                  <h3 className="font-medium mb-1">Release baseado em Train</h3>
                  <p className="text-sm mb-1">
                    Entregas em ciclos regulares, como um "trem" que parte em horários fixos
                  </p>
                  <div className="flex items-center text-xs">
                    <span className="w-20 font-medium">Prós:</span>
                    <span>Equilíbrio entre previsibilidade e agilidade</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-20 font-medium">Contras:</span>
                    <span>Funcionalidades podem precisar esperar o próximo "trem"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Plano de Release</h2>
            <div className="mb-4">
              <p className="text-sm">
                Um plano de release estruturado é essencial para coordenar todos os aspectos da entrega, desde
                desenvolvimento até comunicação com usuários.
              </p>
              <div className="flex items-center mt-2">
                <div className="flex-grow"></div>
                <Link href="/semana5/templates/interactive-release-plan">
                  <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Acessar template interativo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Conteúdo do Plano de Release</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Escopo da release (funcionalidades, correções)</li>
                    <li>Cronograma e marcos importantes</li>
                    <li>Requisitos técnicos e de infraestrutura</li>
                    <li>Estratégia de teste e validação</li>
                    <li>Plano de rollback em caso de problemas</li>
                    <li>Plano de comunicação com stakeholders</li>
                    <li>Treinamento e documentação necessários</li>
                    <li>Critérios de sucesso e métricas</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Tipo de Releases</h3>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-sm font-medium">Major Release (x.0.0)</p>
                      <p className="text-xs text-slate-600">
                        Grandes mudanças, novas funcionalidades significativas, potencialmente com breaking changes.
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-sm font-medium">Minor Release (0.x.0)</p>
                      <p className="text-xs text-slate-600">
                        Novas funcionalidades, melhorias, sem quebrar a compatibilidade.
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-sm font-medium">Patch Release (0.0.x)</p>
                      <p className="text-xs text-slate-600">
                        Correções de bugs e pequenos ajustes sem novas funcionalidades.
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-sm font-medium">Hotfix</p>
                      <p className="text-xs text-slate-600">Correção urgente de problemas críticos em produção.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Técnicas Modernas de Implantação</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Blue/Green Deployment</h3>
                <p className="text-sm mb-2">
                  Manter dois ambientes idênticos de produção, alternando o tráfego entre eles durante releases.
                </p>
                <div className="bg-white p-2 rounded-md border border-slate-200">
                  <p className="text-xs font-medium">Vantagens:</p>
                  <ul className="list-disc pl-4 text-xs mt-1">
                    <li>Zero downtime</li>
                    <li>Rollback instantâneo</li>
                    <li>Testes completos antes da implantação</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Canary Release</h3>
                <p className="text-sm mb-2">
                  Implantação gradual, direcionando uma pequena porcentagem dos usuários para a nova versão.
                </p>
                <div className="bg-white p-2 rounded-md border border-slate-200">
                  <p className="text-xs font-medium">Vantagens:</p>
                  <ul className="list-disc pl-4 text-xs mt-1">
                    <li>Redução de riscos</li>
                    <li>Teste real com usuários limitados</li>
                    <li>Identificação precoce de problemas</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Feature Toggles</h3>
                <p className="text-sm mb-2">
                  Código de novas funcionalidades é implantado desativado, podendo ser ativado via configuração.
                </p>
                <div className="bg-white p-2 rounded-md border border-slate-200">
                  <p className="text-xs font-medium">Vantagens:</p>
                  <ul className="list-disc pl-4 text-xs mt-1">
                    <li>Integração contínua</li>
                    <li>Testes A/B facilitados</li>
                    <li>Lançamentos controlados</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-md mt-4">
            <h3 className="font-medium mb-2">Papel do Product Owner na Gestão de Releases</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Responsabilidades</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Definir e priorizar o escopo das releases</li>
                  <li>Garantir que funcionalidades críticas para o negócio estejam incluídas</li>
                  <li>Validar que a release está pronta para lançamento</li>
                  <li>Analisar feedback pós-release para melhorias futuras</li>
                  <li>Coordenar comunicação com usuários e stakeholders</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">Boas Práticas</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Manter um roadmap claro e atualizado</li>
                  <li>Estabelecer métricas de sucesso para cada release</li>
                  <li>Balancear novas funcionalidades e correções de bugs em cada release</li>
                  <li>Documentar o que foi entregue em cada versão</li>
                  <li>Coletar feedback estruturado após cada lançamento</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mt-4">
              <h4 className="font-medium mb-2">Métricas para Avaliar Releases</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <p className="text-sm font-medium">Técnicas</p>
                  <ul className="list-disc pl-4 text-xs mt-1">
                    <li>Número de bugs pós-release</li>
                    <li>Tempo de recuperação de falhas</li>
                    <li>Incidentes em produção</li>
                    <li>Performance do sistema</li>
                  </ul>
                </div>
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <p className="text-sm font-medium">De Negócio</p>
                  <ul className="list-disc pl-4 text-xs mt-1">
                    <li>Impacto em KPIs de negócio</li>
                    <li>Adoção de novas funcionalidades</li>
                    <li>Retorno sobre investimento</li>
                    <li>Economia de custos ou tempo</li>
                  </ul>
                </div>
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <p className="text-sm font-medium">De Experiência</p>
                  <ul className="list-disc pl-4 text-xs mt-1">
                    <li>Satisfação do usuário (NPS)</li>
                    <li>Feedback qualitativo</li>
                    <li>Volume de suporte pós-release</li>
                    <li>Tempo de adoção</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Práticas Modernas",
      content: (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">Práticas Modernas de Qualidade e Releases</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">DevOps e Qualidade</h2>
              <div className="mb-4">
                <p className="text-sm">
                  DevOps é uma abordagem cultural e técnica que busca unificar desenvolvimento e operações,
                  automatizando processos e promovendo colaboração contínua, com foco em entregas rápidas sem
                  comprometer a qualidade.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Práticas DevOps para Qualidade</h3>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>
                    <span className="font-medium">Integração Contínua (CI):</span> Integração frequente de código para
                    detecção precoce de problemas
                  </li>
                  <li>
                    <span className="font-medium">Entrega Contínua (CD):</span> Pipeline automatizado para implantação
                    rápida e confiável
                  </li>
                  <li>
                    <span className="font-medium">Infraestrutura como Código:</span> Ambientes consistentes e
                    reproduzíveis
                  </li>
                  <li>
                    <span className="font-medium">Monitoramento Contínuo:</span> Detecção proativa de problemas em
                    produção
                  </li>
                  <li>
                    <span className="font-medium">Cultura de Responsabilidade Compartilhada:</span> Equipes responsáveis
                    pela qualidade end-to-end
                  </li>
                </ul>
              </div>
              <div className="mt-4 bg-blue-50 p-3 rounded-md border border-blue-200">
                <h4 className="font-medium mb-1">Benefícios para a Qualidade</h4>
                <div className="grid grid-cols-2 gap-2">
                  <ul className="list-disc pl-5 text-xs">
                    <li>Feedback mais rápido</li>
                    <li>Detecção precoce de defeitos</li>
                    <li>Ambiente de testes consistentes</li>
                  </ul>
                  <ul className="list-disc pl-5 text-xs">
                    <li>Redução de erros manuais</li>
                    <li>Maior colaboração entre equipes</li>
                    <li>Rastreabilidade de mudanças</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Shift Left Testing</h2>
              <div className="mb-4">
                <p className="text-sm">
                  "Shift Left Testing" significa mover atividades de teste para as fases iniciais do ciclo de
                  desenvolvimento, em vez de deixá-las apenas para o final. O objetivo é identificar e corrigir
                  problemas o mais cedo possível.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Implementando Shift Left</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded-md border border-slate-200">
                    <p className="text-sm font-medium">Testes desde a Concepção</p>
                    <p className="text-xs">
                      Envolver QA desde o planejamento de requisitos e design, identificando casos de teste antes mesmo
                      da codificação.
                    </p>
                  </div>
                  <div className="bg-white p-2 rounded-md border border-slate-200">
                    <p className="text-sm font-medium">Testes Automatizados no Pipeline</p>
                    <p className="text-xs">
                      Integrar testes unitários, de integração e funcionais diretamente no pipeline de CI/CD.
                    </p>
                  </div>
                  <div className="bg-white p-2 rounded-md border border-slate-200">
                    <p className="text-sm font-medium">Análise Estática de Código</p>
                    <p className="text-xs">
                      Utilizar ferramentas de análise estática para identificar problemas de qualidade antes da
                      execução.
                    </p>
                  </div>
                  <div className="bg-white p-2 rounded-md border border-slate-200">
                    <p className="text-sm font-medium">Testes como Requisitos</p>
                    <p className="text-xs">
                      Usar abordagens como TDD e BDD para transformar requisitos em testes executáveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Gestão de Releases Ágil em Escala</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="bg-slate-50 p-4 rounded-md mb-4">
                  <h3 className="font-medium mb-2">Scaled Agile Framework (SAFe)</h3>
                  <p className="text-sm mb-2">
                    Modelo para implementação de práticas ágeis em organizações grandes, incluindo gestão de releases
                    sincronizadas entre múltiplas equipes.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-xs font-medium">Program Increment (PI)</p>
                      <p className="text-xs text-slate-600">
                        Ciclo de planejamento e entrega de 8-12 semanas com múltiplos sprints
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-xs font-medium">Agile Release Train (ART)</p>
                      <p className="text-xs text-slate-600">
                        Grupo de equipes ágeis que desenvolvem, entregam e suportam um ou mais produtos ou serviços
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-slate-200">
                      <p className="text-xs font-medium">Release Management</p>
                      <p className="text-xs text-slate-600">
                        Função que coordena entregas entre múltiplas equipes para garantir coerência
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Desafios em Escala</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-medium">Dependências entre Equipes</p>
                        <p className="text-xs text-slate-600">
                          Coordenar releases quando múltiplas equipes precisam sincronizar entregas.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-medium">Arquitetura Complexa</p>
                        <p className="text-xs text-slate-600">
                          Gerenciar releases em sistemas com múltiplos componentes e integrações.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                        3
                      </div>
                      <div>
                        <p className="text-sm font-medium">Comunicação Efetiva</p>
                        <p className="text-xs text-slate-600">
                          Manter todas as partes informadas sobre mudanças, impactos e cronogramas.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                        4
                      </div>
                      <div>
                        <p className="text-sm font-medium">Gestão de Configuração</p>
                        <p className="text-xs text-slate-600">
                          Controlar versões de múltiplos componentes e suas interdependências.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-md border border-blue-200">
              <h3 className="font-medium mb-2">Soluções para Release em Escala</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="font-medium text-blue-700 mb-2">Arquitetural</h4>
                  <ul className="list-disc pl-5 text-xs">
                    <li>Arquitetura de microserviços</li>
                    <li>Desacoplamento de componentes</li>
                    <li>APIs versionadas</li>
                    <li>Contratos entre equipes</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="font-medium text-blue-700 mb-2">Processo</h4>
                  <ul className="list-disc pl-5 text-xs">
                    <li>Planejamento sincronizado</li>
                    <li>Cerimônias de coordenação</li>
                    <li>Roadmaps compartilhados</li>
                    <li>Gestão visual de dependências</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="font-medium text-blue-700 mb-2">Técnico</h4>
                  <ul className="list-disc pl-5 text-xs">
                    <li>Automação de pipeline end-to-end</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, slides.length - 1))
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-800 hover:text-gray-600">
            <Home className="h-5 w-5 mr-2" />
            Início
          </Link>
          <h1 className="text-xl font-semibold">Slides da Semana 5</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
        </div>

        {slides[currentSlide].content}
      </main>

      <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-t">
        <Button onClick={handlePrevSlide} disabled={currentSlide === 0} variant="outline" className="flex items-center">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Anterior
        </Button>
        <span>
          Slide {currentSlide + 1} de {slides.length}
        </span>
        <Button
          onClick={handleNextSlide}
          disabled={currentSlide === slides.length - 1}
          variant="outline"
          className="flex items-center"
        >
          Próximo
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <Footer />
    </div>
  )
}
