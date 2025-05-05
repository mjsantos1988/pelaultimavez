import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download } from "lucide-react"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function EstrategiasDivisaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <PageHeader
        title="Estratégias de Divisão de Histórias"
        description="Técnicas para dividir histórias grandes em histórias menores e mais gerenciáveis"
      />

      <main className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Link href="/semana4/slides">
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Slides
            </Button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Por que dividir histórias?</h2>
          <p className="mb-4">
            Histórias de usuário muito grandes (também chamadas de épicos) são difíceis de estimar, implementar em um
            único sprint e testar adequadamente. Dividir histórias grandes em histórias menores traz diversos
            benefícios:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Facilita a estimativa e o planejamento</li>
            <li>Permite entregas incrementais de valor</li>
            <li>Melhora a visibilidade do progresso</li>
            <li>Reduz riscos e complexidade</li>
            <li>Facilita o desenvolvimento paralelo</li>
          </ul>
          <p>
            A seguir, apresentamos seis estratégias eficazes para dividir histórias grandes em histórias menores e mais
            gerenciáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-blue-700">1. Por Operações (CRUD)</h2>
            <p className="mb-4">
              Divide uma história com base nas operações básicas de manipulação de dados: Criar (Create), Ler (Read),
              Atualizar (Update) e Deletar (Delete).
            </p>
            <div className="bg-slate-50 p-4 rounded-md mb-4">
              <h3 className="font-medium mb-2">História Original (Épico):</h3>
              <p className="italic">
                "Como administrador, eu quero gerenciar usuários no sistema para controlar quem tem acesso."
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium text-blue-800">Dividida em:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>
                    <strong>Criar:</strong> "Como administrador, eu quero adicionar novos usuários ao sistema para dar
                    acesso a novos membros da equipe."
                  </li>
                  <li>
                    <strong>Ler:</strong> "Como administrador, eu quero visualizar a lista de usuários e seus detalhes
                    para auditar quem tem acesso ao sistema."
                  </li>
                  <li>
                    <strong>Atualizar:</strong> "Como administrador, eu quero editar informações e permissões de
                    usuários existentes para manter seus dados atualizados."
                  </li>
                  <li>
                    <strong>Deletar:</strong> "Como administrador, eu quero remover usuários do sistema para revogar
                    acesso quando necessário."
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Quando usar:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>Histórias relacionadas a gerenciamento de entidades ou recursos</li>
                  <li>Funcionalidades administrativas</li>
                  <li>Quando diferentes operações têm complexidades distintas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-purple-700">2. Por Regras de Negócio</h2>
            <p className="mb-4">
              Divide uma história com base em diferentes regras de negócio ou casos especiais que precisam ser
              implementados.
            </p>
            <div className="bg-slate-50 p-4 rounded-md mb-4">
              <h3 className="font-medium mb-2">História Original (Épico):</h3>
              <p className="italic">
                "Como cliente, eu quero aplicar descontos na minha compra para economizar dinheiro."
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-md">
                <p className="font-medium text-purple-800">Dividida em:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>
                    "Como cliente, eu quero aplicar cupons de desconto no carrinho para obter redução no valor total."
                  </li>
                  <li>
                    "Como cliente, eu quero receber desconto por volume quando comprar mais de 5 itens do mesmo
                    produto."
                  </li>
                  <li>
                    "Como cliente fidelidade, eu quero receber descontos automáticos baseados no meu nível de
                    fidelidade."
                  </li>
                  <li>
                    "Como cliente, eu quero combinar diferentes tipos de desconto, respeitando as regras de aplicação."
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Quando usar:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>Quando a história envolve múltiplas regras de negócio complexas</li>
                  <li>Quando há exceções ou casos especiais a serem tratados</li>
                  <li>Quando diferentes regras têm prioridades distintas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-amber-700">3. Por Passos do Fluxo</h2>
            <p className="mb-4">
              Divide uma história com base nas etapas sequenciais de um processo ou fluxo de trabalho.
            </p>
            <div className="bg-slate-50 p-4 rounded-md mb-4">
              <h3 className="font-medium mb-2">História Original (Épico):</h3>
              <p className="italic">
                "Como cliente, eu quero completar o processo de checkout para finalizar minha compra."
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-amber-50 p-3 rounded-md">
                <p className="font-medium text-amber-800">Dividida em:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>"Como cliente, eu quero revisar os itens no meu carrinho antes de prosseguir com a compra."</li>
                  <li>"Como cliente, eu quero inserir meu endereço de entrega para receber meus produtos."</li>
                  <li>"Como cliente, eu quero selecionar um método de envio baseado em custo e prazo."</li>
                  <li>"Como cliente, eu quero escolher um método de pagamento para completar minha compra."</li>
                  <li>"Como cliente, eu quero receber uma confirmação do pedido após a finalização."</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Quando usar:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>Processos com múltiplas etapas sequenciais</li>
                  <li>Fluxos de trabalho complexos</li>
                  <li>Quando cada etapa pode ser entregue e testada independentemente</li>
                  <li>Quando diferentes etapas envolvem diferentes equipes ou especialidades</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-green-700">4. Por Variações de Dados</h2>
            <p className="mb-4">
              Divide uma história com base em diferentes tipos ou formatos de dados que precisam ser processados.
            </p>
            <div className="bg-slate-50 p-4 rounded-md mb-4">
              <h3 className="font-medium mb-2">História Original (Épico):</h3>
              <p className="italic">
                "Como usuário, eu quero importar meus contatos para o sistema para não precisar adicioná-los
                manualmente."
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Dividida em:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>
                    "Como usuário, eu quero importar contatos de um arquivo CSV para adicionar múltiplos contatos."
                  </li>
                  <li>
                    "Como usuário, eu quero importar contatos do Google Contacts para sincronizar com minha conta
                    Google."
                  </li>
                  <li>
                    "Como usuário, eu quero importar contatos do Outlook para migrar de plataforma sem perder dados."
                  </li>
                  <li>
                    "Como usuário, eu quero importar contatos de um arquivo vCard para compatibilidade com outros
                    sistemas."
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Quando usar:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>Funcionalidades que lidam com múltiplos formatos de dados</li>
                  <li>Integrações com diferentes sistemas externos</li>
                  <li>Quando diferentes formatos requerem lógicas de processamento distintas</li>
                  <li>Quando há prioridades diferentes para cada formato</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-indigo-700">5. Por Plataformas ou Dispositivos</h2>
            <p className="mb-4">
              Divide uma história com base nas diferentes plataformas ou dispositivos em que a funcionalidade será
              implementada.
            </p>
            <div className="bg-slate-50 p-4 rounded-md mb-4">
              <h3 className="font-medium mb-2">História Original (Épico):</h3>
              <p className="italic">
                "Como usuário, eu quero acessar meu perfil em qualquer dispositivo para gerenciar minhas informações."
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-indigo-50 p-3 rounded-md">
                <p className="font-medium text-indigo-800">Dividida em:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>
                    "Como usuário desktop, eu quero acessar meu perfil no navegador para gerenciar minhas informações em
                    uma tela grande."
                  </li>
                  <li>
                    "Como usuário mobile, eu quero acessar meu perfil no aplicativo iOS para gerenciar minhas
                    informações em movimento."
                  </li>
                  <li>
                    "Como usuário mobile, eu quero acessar meu perfil no aplicativo Android para gerenciar minhas
                    informações em movimento."
                  </li>
                  <li>
                    "Como usuário tablet, eu quero uma interface adaptada para telas médias para melhor experiência de
                    uso."
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Quando usar:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>Aplicações multiplataforma</li>
                  <li>Quando a experiência do usuário varia significativamente entre dispositivos</li>
                  <li>Quando diferentes plataformas requerem implementações técnicas distintas</li>
                  <li>Quando há prioridades diferentes para cada plataforma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-red-700">6. Por Qualidade de Serviço</h2>
            <p className="mb-4">
              Divide uma história separando a funcionalidade básica dos requisitos não-funcionais ou atributos de
              qualidade.
            </p>
            <div className="bg-slate-50 p-4 rounded-md mb-4">
              <h3 className="font-medium mb-2">História Original (Épico):</h3>
              <p className="italic">
                "Como usuário, eu quero fazer upload de vídeos para compartilhar com meus seguidores."
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded-md">
                <p className="font-medium text-red-800">Dividida em:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>
                    "Como usuário, eu quero fazer upload de vídeos em formato básico para compartilhar com meus
                    seguidores."
                  </li>
                  <li>
                    "Como usuário, eu quero ver uma barra de progresso durante o upload para acompanhar o status."
                  </li>
                  <li>"Como usuário, eu quero que meus uploads continuem mesmo se eu navegar para outra página."</li>
                  <li>
                    "Como usuário, eu quero que meus vídeos sejam otimizados automaticamente para diferentes velocidades
                    de conexão."
                  </li>
                  <li>"Como usuário, eu quero retomar uploads interrompidos sem precisar começar do zero."</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Quando usar:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>Quando a funcionalidade básica pode ser entregue antes dos refinamentos</li>
                  <li>Quando há requisitos não-funcionais complexos</li>
                  <li>Para separar a funcionalidade essencial (MVP) das melhorias de experiência</li>
                  <li>Quando diferentes atributos de qualidade têm prioridades distintas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Dicas para Divisão Eficaz de Histórias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Boas Práticas</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mantenha o foco no valor para o usuário em cada história dividida</li>
                <li>Certifique-se de que cada história atende aos critérios INVEST</li>
                <li>Priorize histórias que desbloqueiam outras ou reduzem riscos</li>
                <li>Combine diferentes estratégias de divisão quando apropriado</li>
                <li>Envolva a equipe de desenvolvimento no processo de divisão</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Erros Comuns a Evitar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dividir por camadas técnicas (frontend/backend) em vez de funcionalidades</li>
                <li>Criar histórias que não entregam valor por si só</li>
                <li>Dividir em histórias tão pequenas que aumentam a sobrecarga de gerenciamento</li>
                <li>Perder o contexto e o objetivo original ao dividir excessivamente</li>
                <li>Criar dependências desnecessárias entre histórias divididas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Exercício Prático</h2>
          <p className="mb-4">Pratique suas habilidades de divisão de histórias com o seguinte épico:</p>
          <div className="bg-slate-50 p-4 rounded-md mb-6">
            <p className="italic font-medium">
              "Como usuário, eu quero um sistema de notificações para me manter informado sobre atividades relevantes."
            </p>
          </div>
          <p className="mb-4">
            Tente dividir este épico usando pelo menos três das estratégias apresentadas. Para cada história dividida,
            defina critérios de aceitação claros.
          </p>
          <div className="flex justify-center mt-6">
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Baixar Template para o Exercício
            </Button>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/semana4/slides">
            <Button className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Slides
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
