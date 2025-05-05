import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function ReleasePlanExemplo() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Exemplo de Plano de Release"
        description="Um exemplo completo de plano de release para um aplicativo móvel"
      />

      <div className="container mx-auto px-4 mb-8">
        <Link href="/semana5/templates/exemplos" className="text-blue-600 hover:underline flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Voltar para Exemplos
        </Link>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Plano de Release - App Mobile 2.0</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Informações Gerais</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Nome do Release</p>
                  <p>App Mobile 2.0</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Versão</p>
                  <p>2.0.0</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Data de Lançamento</p>
                  <p>15/12/2023</p>
                </div>
              </div>
            </section>

            <section className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Objetivos</h3>
              <p>
                Este release tem como objetivo principal melhorar a experiência do usuário e adicionar novas
                funcionalidades solicitadas pelos clientes. Também inclui correções de bugs críticos identificados na
                versão anterior.
              </p>
            </section>

            <section className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Funcionalidades</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Login com biometria</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Alta Prioridade</span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    Permitir que usuários façam login usando impressão digital ou reconhecimento facial
                  </p>
                  <p className="mt-1 text-sm text-gray-500">Status: Planejada</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Modo escuro</h4>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Média Prioridade
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    Implementar tema escuro para melhorar a experiência de uso noturno e economizar bateria
                  </p>
                  <p className="mt-1 text-sm text-gray-500">Status: Em Desenvolvimento</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Notificações personalizáveis</h4>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Baixa Prioridade</span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    Permitir que usuários escolham quais tipos de notificações desejam receber e com qual frequência
                  </p>
                  <p className="mt-1 text-sm text-gray-500">Status: Planejada</p>
                </div>
              </div>
            </section>

            <section className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Qualidade e Testes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Critérios de Qualidade</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Tempo de resposta máximo de 2 segundos para todas as operações</li>
                    <li>Taxa de erro menor que 0.1%</li>
                    <li>Compatibilidade com Android 10+ e iOS 14+</li>
                    <li>Testes de usabilidade com pontuação mínima de 4/5</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Estratégia de Testes</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Testes unitários para todos os componentes</li>
                    <li>Testes de integração para fluxos críticos</li>
                    <li>Testes de regressão automatizados</li>
                    <li>Beta testing com 100 usuários selecionados</li>
                    <li>Testes de performance em diferentes dispositivos</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Riscos e Mitigações</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Atraso na integração com o novo sistema de pagamentos</h4>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Alto Impacto</span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    <strong>Mitigação:</strong> Iniciar integração com 3 semanas de antecedência e ter um plano B para
                    usar o sistema atual caso necessário
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Problemas de compatibilidade com dispositivos mais antigos</h4>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Médio Impacto</span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    <strong>Mitigação:</strong> Realizar testes em uma ampla variedade de dispositivos e definir
                    requisitos mínimos claros
                  </p>
                </div>
              </div>
            </section>

            <section className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Comunicação e Contingência</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Stakeholders</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Equipe de Desenvolvimento</li>
                    <li>Equipe de QA</li>
                    <li>Gerentes de Produto</li>
                    <li>Representantes de Vendas</li>
                    <li>Suporte ao Cliente</li>
                    <li>Usuários beta</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Plano de Comunicação</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Reunião semanal de status com todas as equipes</li>
                    <li>Relatório diário de progresso para gerentes</li>
                    <li>Anúncio de beta testing 2 semanas antes do lançamento</li>
                    <li>Comunicado de imprensa 1 semana antes do lançamento</li>
                    <li>Email para todos os usuários no dia do lançamento</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Plano de Rollback</h4>
                  <p className="mb-2">Em caso de problemas críticos após o lançamento:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Avaliar o impacto e a extensão do problema</li>
                    <li>Se o problema afetar mais de 5% dos usuários, reverter para a versão anterior</li>
                    <li>Comunicar aos usuários sobre o problema e a solução</li>
                    <li>Corrigir o problema e lançar uma versão de emergência</li>
                  </ol>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
