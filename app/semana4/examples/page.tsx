import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <PageHeader
        title="Exemplos de Histórias de Usuário"
        description="Casos reais para inspirar a criação das suas histórias"
      />

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/spotify-logo.jpg" alt="Spotify" width={40} height={40} className="object-cover" />
                </div>
                Spotify - Recomendações Personalizadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-md p-4 mb-4">
                <div className="w-full rounded-md h-48 relative overflow-hidden">
                  <Image
                    src="/spotify-recommendations.jpg"
                    alt="Interface de Recomendações do Spotify"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-lg font-medium">Histórias de Usuário</h3>
                    <div className="space-y-3 mt-2">
                      <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r-md">
                        <p className="italic">
                          "Como usuário do Spotify, eu quero receber recomendações de músicas baseadas no meu histórico
                          de reprodução, para que eu possa descobrir novas músicas que provavelmente gostarei."
                        </p>
                        <div className="mt-2 text-sm">
                          <p className="font-medium">Critérios de Aceitação:</p>
                          <ul className="list-disc pl-6 text-slate-600">
                            <li>O sistema deve analisar as últimas 50 músicas reproduzidas pelo usuário</li>
                            <li>As recomendações devem ser atualizadas semanalmente</li>
                            <li>O usuário deve poder salvar músicas recomendadas em suas playlists</li>
                            <li>O usuário deve poder dar feedback sobre as recomendações (gostei/não gostei)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
                        <p className="italic">
                          "Como usuário premium, eu quero poder baixar minhas playlists de recomendações para ouvir
                          offline, para que eu possa acessar novas músicas mesmo sem conexão com a internet."
                        </p>
                        <div className="mt-2 text-sm">
                          <p className="font-medium">Critérios de Aceitação:</p>
                          <ul className="list-disc pl-6 text-slate-600">
                            <li>Deve haver um botão de download claramente visível na playlist de recomendações</li>
                            <li>O download deve funcionar apenas para usuários com assinatura premium</li>
                            <li>O usuário deve receber uma notificação quando o download for concluído</li>
                            <li>As músicas baixadas devem ser acessíveis na seção "Sua Biblioteca"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Por que são boas histórias?</h3>
                    <ul className="list-disc pl-6 text-sm text-slate-600">
                      <li>Seguem o formato "Como [persona], eu quero [ação], para que [benefício]"</li>
                      <li>São centradas no usuário e no valor que ele recebe</li>
                      <li>Têm critérios de aceitação claros e testáveis</li>
                      <li>São independentes e podem ser implementadas separadamente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/airbnb-logo.jpg" alt="Airbnb" width={40} height={40} className="object-cover" />
                </div>
                Airbnb - Filtros de Busca
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-md p-4 mb-4">
                <div className="w-full rounded-md h-48 relative overflow-hidden">
                  <Image src="/airbnb-filters.png" alt="Interface de filtros do Airbnb" fill className="object-cover" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Histórias de Usuário</h3>
                  <div className="space-y-3 mt-2">
                    <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r-md">
                      <p className="italic">
                        "Como viajante, eu quero filtrar acomodações por comodidades específicas (como piscina, Wi-Fi,
                        ar condicionado), para que eu possa encontrar lugares que atendam às minhas necessidades."
                      </p>
                      <div className="mt-2 text-sm">
                        <p className="font-medium">Critérios de Aceitação:</p>
                        <ul className="list-disc pl-6 text-slate-600">
                          <li>Os filtros devem ser acessíveis a partir da página de resultados de busca</li>
                          <li>O usuário deve poder selecionar múltiplas comodidades simultaneamente</li>
                          <li>Os resultados devem ser atualizados em tempo real conforme os filtros são aplicados</li>
                          <li>
                            As comodidades selecionadas devem ser exibidas como tags na parte superior dos resultados
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
                      <p className="italic">
                        "Como viajante com orçamento limitado, eu quero definir um intervalo de preço para minha busca,
                        para que eu possa encontrar acomodações dentro do meu orçamento."
                      </p>
                      <div className="mt-2 text-sm">
                        <p className="font-medium">Critérios de Aceitação:</p>
                        <ul className="list-disc pl-6 text-slate-600">
                          <li>Deve haver um controle deslizante para definir o preço mínimo e máximo</li>
                          <li>Os valores devem ser exibidos em tempo real enquanto o usuário ajusta o controle</li>
                          <li>O usuário deve poder inserir valores específicos manualmente</li>
                          <li>Os preços devem ser exibidos na moeda local do usuário</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Por que são boas histórias?</h3>
                  <ul className="list-disc pl-6 text-sm text-slate-600">
                    <li>Descrevem funcionalidades específicas e bem delimitadas</li>
                    <li>Têm um valor claro para o usuário</li>
                    <li>Os critérios de aceitação são mensuráveis e verificáveis</li>
                    <li>
                      Atendem aos critérios INVEST (Independente, Negociável, Valiosa, Estimável, Pequena, Testável)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/trello-logo.jpg" alt="Trello" width={40} height={40} className="object-cover" />
                </div>
                Trello - Gerenciamento de Tarefas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-md p-4 mb-4">
                <div className="w-full rounded-md h-48 relative overflow-hidden">
                  <Image src="/trello-boards.png" alt="Interface do Trello" fill className="object-cover" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Histórias de Usuário</h3>
                  <div className="space-y-3 mt-2">
                    <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r-md">
                      <p className="italic">
                        "Como gerente de projeto, eu quero poder atribuir tarefas a membros específicos da equipe, para
                        que fique claro quem é responsável por cada item de trabalho."
                      </p>
                      <div className="mt-2 text-sm">
                        <p className="font-medium">Critérios de Aceitação:</p>
                        <ul className="list-disc pl-6 text-slate-600">
                          <li>Deve ser possível atribuir um ou mais membros a um cartão</li>
                          <li>Os avatares dos membros atribuídos devem aparecer no cartão</li>
                          <li>Os membros atribuídos devem receber uma notificação</li>
                          <li>Deve ser possível filtrar cartões por membro atribuído</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
                      <p className="italic">
                        "Como membro da equipe, eu quero poder adicionar checklists aos meus cartões, para que eu possa
                        dividir tarefas complexas em etapas menores e acompanhar o progresso."
                      </p>
                      <div className="mt-2 text-sm">
                        <p className="font-medium">Critérios de Aceitação:</p>
                        <ul className="list-disc pl-6 text-slate-600">
                          <li>Deve ser possível adicionar múltiplas checklists a um cartão</li>
                          <li>Cada checklist deve permitir adicionar, editar e excluir itens</li>
                          <li>O progresso da checklist deve ser exibido visualmente (porcentagem concluída)</li>
                          <li>Deve ser possível marcar itens como concluídos diretamente no cartão</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Por que são boas histórias?</h3>
                  <ul className="list-disc pl-6 text-sm text-slate-600">
                    <li>Identificam claramente a persona e seu papel</li>
                    <li>Especificam uma funcionalidade concreta</li>
                    <li>Explicam o benefício ou valor para o usuário</li>
                    <li>Os critérios de aceitação são específicos e verificáveis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/slack-logo.jpg" alt="Slack" width={40} height={40} className="object-cover" />
                </div>
                Slack - Notificações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-md p-4 mb-4">
                <div className="w-full rounded-md h-48 relative overflow-hidden">
                  <Image
                    src="/slack-notifications.png"
                    alt="Configurações de notificações do Slack"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Histórias de Usuário</h3>
                  <div className="space-y-3 mt-2">
                    <div className="border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r-md">
                      <p className="italic">
                        "Como usuário do Slack, eu quero personalizar minhas notificações por canal, para que eu possa
                        priorizar mensagens de canais importantes e reduzir distrações de canais menos relevantes."
                      </p>
                      <div className="mt-2 text-sm">
                        <p className="font-medium">Critérios de Aceitação:</p>
                        <ul className="list-disc pl-6 text-slate-600">
                          <li>O usuário deve poder acessar configurações de notificação específicas para cada canal</li>
                          <li>As opções devem incluir: todas as mensagens, apenas menções, ou nenhuma notificação</li>
                          <li>As configurações devem ser salvas automaticamente</li>
                          <li>As configurações devem ser sincronizadas entre dispositivos</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
                      <p className="italic">
                        "Como gerente de equipe, eu quero ser notificado quando novos membros se juntarem aos canais que
                        gerencio, para que eu possa dar as boas-vindas e fornecer orientações iniciais."
                      </p>
                      <div className="mt-2 text-sm">
                        <p className="font-medium">Critérios de Aceitação:</p>
                        <ul className="list-disc pl-6 text-slate-600">
                          <li>Uma notificação deve ser enviada ao gerente quando um novo membro entrar no canal</li>
                          <li>A notificação deve incluir o nome do novo membro e quando ele se juntou</li>
                          <li>Deve haver uma opção para desativar este tipo de notificação</li>
                          <li>A notificação deve ser enviada apenas para administradores e proprietários do canal</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Por que são boas histórias?</h3>
                  <ul className="list-disc pl-6 text-sm text-slate-600">
                    <li>Abordam necessidades específicas de diferentes tipos de usuários</li>
                    <li>Têm escopo bem definido e gerenciável</li>
                    <li>Os critérios de aceitação cobrem diferentes aspectos da funcionalidade</li>
                    <li>O valor para o usuário é claro e significativo</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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
