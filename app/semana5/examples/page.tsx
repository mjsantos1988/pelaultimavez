import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <PageHeader
        title="Exemplos de Planos de Release"
        description="Casos reais para inspirar a criação do seu plano"
      />

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Aplicativo de E-commerce - Plano de Release v2.0
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-md p-4 mb-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Informações Gerais</h3>
                    <div className="mt-2 bg-slate-50 p-3 rounded-md">
                      <p>
                        <strong>Projeto:</strong> ShopEasy E-commerce
                      </p>
                      <p>
                        <strong>Versão:</strong> 2.0
                      </p>
                      <p>
                        <strong>Data de Lançamento:</strong> 15/06/2023
                      </p>
                      <p>
                        <strong>Descrição:</strong> Esta versão introduz um novo sistema de carrinho de compras,
                        melhorias no processo de checkout e integração com novos métodos de pagamento.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Objetivos</h3>
                    <ul className="list-disc pl-6 mt-2 text-slate-600">
                      <li>Reduzir a taxa de abandono de carrinho em 20%</li>
                      <li>Aumentar a conversão de checkout em 15%</li>
                      <li>Oferecer mais opções de pagamento para os clientes</li>
                      <li>Melhorar a experiência do usuário no processo de compra</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Funcionalidades Principais</h3>
                    <div className="space-y-3 mt-2">
                      <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r-md">
                        <p className="font-medium">Carrinho Persistente</p>
                        <p className="text-sm text-slate-600">
                          O carrinho de compras será salvo mesmo quando o usuário sair do aplicativo, permitindo
                          continuar a compra posteriormente.
                        </p>
                        <p className="text-sm mt-1">
                          <strong>Prioridade:</strong> Alta | <strong>Status:</strong> Em Desenvolvimento
                        </p>
                      </div>

                      <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
                        <p className="font-medium">Checkout em Uma Página</p>
                        <p className="text-sm text-slate-600">
                          Redesign do processo de checkout para consolidar todas as etapas em uma única página,
                          simplificando o processo.
                        </p>
                        <p className="text-sm mt-1">
                          <strong>Prioridade:</strong> Alta | <strong>Status:</strong> Em Teste
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-300 pl-4 py-2 bg-purple-50 rounded-r-md">
                        <p className="font-medium">Integração com Novos Métodos de Pagamento</p>
                        <p className="text-sm text-slate-600">
                          Adição de suporte para Apple Pay, Google Pay e PayPal como métodos de pagamento.
                        </p>
                        <p className="text-sm mt-1">
                          <strong>Prioridade:</strong> Média | <strong>Status:</strong> Planejada
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Marcos (Milestones)</h3>
                    <div className="mt-2 bg-slate-50 p-3 rounded-md">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="bg-slate-100">
                            <th className="py-2 px-3 text-left">Data</th>
                            <th className="py-2 px-3 text-left">Marco</th>
                            <th className="py-2 px-3 text-left">Entregáveis</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-3 border-t">01/05/2023</td>
                            <td className="py-2 px-3 border-t">Início do Desenvolvimento</td>
                            <td className="py-2 px-3 border-t">Planejamento detalhado, ambiente configurado</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-t">20/05/2023</td>
                            <td className="py-2 px-3 border-t">Alpha Release</td>
                            <td className="py-2 px-3 border-t">Versão para testes internos</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-t">05/06/2023</td>
                            <td className="py-2 px-3 border-t">Beta Release</td>
                            <td className="py-2 px-3 border-t">Versão para testes com usuários selecionados</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-t">15/06/2023</td>
                            <td className="py-2 px-3 border-t">Lançamento</td>
                            <td className="py-2 px-3 border-t">Versão final disponível para todos os usuários</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Aplicativo de Gestão de Tarefas - Plano de Release v3.5
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-md p-4 mb-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Informações Gerais</h3>
                    <div className="mt-2 bg-slate-50 p-3 rounded-md">
                      <p>
                        <strong>Projeto:</strong> TaskMaster Pro
                      </p>
                      <p>
                        <strong>Versão:</strong> 3.5
                      </p>
                      <p>
                        <strong>Data de Lançamento:</strong> 30/07/2023
                      </p>
                      <p>
                        <strong>Descrição:</strong> Esta versão foca em melhorias de colaboração em equipe, introduzindo
                        recursos de comentários em tarefas, notificações em tempo real e integração com calendários.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Estratégia de Lançamento</h3>
                    <div className="mt-2 bg-slate-50 p-3 rounded-md">
                      <p className="font-medium">Lançamento Gradual (Canary Release)</p>
                      <p className="text-sm text-slate-600 mt-1">
                        As novas funcionalidades serão lançadas gradualmente para diferentes grupos de usuários:
                      </p>
                      <ol className="list-decimal pl-6 text-sm mt-2">
                        <li>
                          <strong>Fase 1 (Dia 1):</strong> 5% dos usuários (principalmente early adopters e contas
                          premium)
                        </li>
                        <li>
                          <strong>Fase 2 (Dia 3):</strong> 20% dos usuários (se não houver problemas na Fase 1)
                        </li>
                        <li>
                          <strong>Fase 3 (Dia 7):</strong> 50% dos usuários
                        </li>
                        <li>
                          <strong>Fase 4 (Dia 14):</strong> 100% dos usuários
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Plano de Comunicação</h3>
                    <div className="space-y-3 mt-2">
                      <div className="border-l-4 border-amber-300 pl-4 py-2 bg-amber-50 rounded-r-md">
                        <p className="font-medium">Comunicação Interna</p>
                        <ul className="list-disc pl-6 text-sm">
                          <li>Reunião de alinhamento com equipe de suporte (27/07)</li>
                          <li>Treinamento sobre novas funcionalidades para equipe de vendas (28/07)</li>
                          <li>Distribuição de documentação técnica para todos os times (25/07)</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-amber-300 pl-4 py-2 bg-amber-50 rounded-r-md">
                        <p className="font-medium">Comunicação Externa</p>
                        <ul className="list-disc pl-6 text-sm">
                          <li>Anúncio no blog da empresa (30/07)</li>
                          <li>E-mail para todos os usuários (30/07)</li>
                          <li>Notificação in-app para usuários (gradual, conforme o rollout)</li>
                          <li>Posts em redes sociais (30/07 - 06/08)</li>
                          <li>Webinar demonstrando novas funcionalidades (02/08)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Plano de Contingência</h3>
                    <div className="mt-2 bg-slate-50 p-3 rounded-md">
                      <p className="text-sm text-slate-600">
                        Em caso de problemas críticos após o lançamento, seguiremos este plano:
                      </p>
                      <ol className="list-decimal pl-6 text-sm mt-2">
                        <li>
                          <strong>Problemas de Severidade Baixa:</strong> Corrigir no próximo patch regular (planejado
                          para 06/08)
                        </li>
                        <li>
                          <strong>Problemas de Severidade Média:</strong> Lançar hotfix em até 48 horas
                        </li>
                        <li>
                          <strong>Problemas de Severidade Alta:</strong> Pausar o rollout e lançar hotfix imediatamente
                        </li>
                        <li>
                          <strong>Problemas Críticos:</strong> Reverter para a versão anterior (v3.4.2) e comunicar aos
                          usuários
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/semana5">
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
