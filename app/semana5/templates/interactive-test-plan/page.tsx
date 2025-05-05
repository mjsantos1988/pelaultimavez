"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Save, Download, Plus, Trash, BookOpen, ChevronLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import Link from "next/link"

interface TestCase {
  id: string
  name: string
  description: string
  preconditions: string
  steps: string
  expectedResults: string
  priority: string
  status: string
  assignedTo: string
}

interface TestPlan {
  projectName: string
  releaseVersion: string
  testScope: string
  testApproach: string
  testEnvironment: string
  entryCriteria: string
  exitCriteria: string
  testCases: TestCase[]
  risksMitigations: string
  resources: string
  schedule: string
}

// Exemplos pré-definidos de planos de teste
const testPlanExamples = {
  ecommerce: {
    projectName: "Sistema de E-commerce",
    releaseVersion: "v2.1.0",
    testScope:
      "Este plano de testes cobre a funcionalidade de pagamento e checkout do sistema de e-commerce, incluindo processamento de cartão de crédito, integração com PayPal e geração de boletos. Não serão testados nesta fase: cadastro de usuários, sistemas de recomendação e integrações com redes sociais.",
    testApproach:
      "Será utilizada uma combinação de testes manuais e automatizados. Testes de unidade para validações de formulário, testes de integração para API de pagamentos, testes end-to-end para o fluxo completo de checkout e testes de carga para simular picos de transações.",
    testEnvironment:
      "Ambiente de staging com cópia da base de produção anonimizada. Sistemas de pagamento configurados em modo sandbox/teste. Será usado Docker para garantir consistência entre os ambientes de teste.",
    entryCriteria:
      "- Ambiente de staging configurado e estável\n- Código de funcionalidades de pagamento completo e em branch de homologação\n- API de pagamentos disponível em modo de teste\n- Documentação técnica atualizada\n- Casos de teste revisados e aprovados pela equipe",
    exitCriteria:
      "- 100% dos testes críticos executados e aprovados\n- Pelo menos 95% de cobertura em testes automatizados\n- Sem bugs críticos ou bloqueantes abertos\n- Performance de pagamento dentro dos limites aceitáveis (< 3s)\n- Aprovação formal do Product Owner",
    testCases: [
      {
        id: "tc-pay-01",
        name: "Pagamento com Cartão de Crédito Válido",
        description: "Verificar se o processamento de pagamento com cartão de crédito válido é concluído com sucesso",
        preconditions: "- Usuário logado\n- Produtos adicionados ao carrinho\n- Endereço de entrega já cadastrado",
        steps:
          "1. Navegar até a página de checkout\n2. Selecionar método 'Cartão de Crédito'\n3. Preencher com dados válidos (4242424242424242, validade futura, CVV 123)\n4. Clicar em 'Finalizar Compra'",
        expectedResults:
          "- Transação processada com sucesso\n- Página de confirmação exibida com número do pedido\n- Email de confirmação enviado\n- Pedido salvo no banco de dados com status 'Pagamento Aprovado'",
        priority: "Alta",
        status: "Não Executado",
        assignedTo: "Equipe de QA",
      },
      {
        id: "tc-pay-02",
        name: "Pagamento com Cartão Expirado",
        description: "Verificar se o sistema rejeita adequadamente cartões com data de validade expirada",
        preconditions: "- Usuário logado\n- Produtos adicionados ao carrinho",
        steps:
          "1. Navegar até a página de checkout\n2. Selecionar método 'Cartão de Crédito'\n3. Preencher número válido mas com data de validade expirada\n4. Clicar em 'Finalizar Compra'",
        expectedResults:
          "- Mensagem de erro específica sobre cartão expirado\n- Transação não processada\n- Pedido não finalizado\n- Log de erro registrado",
        priority: "Média",
        status: "Não Executado",
        assignedTo: "Equipe de QA",
      },
      {
        id: "tc-pay-03",
        name: "Integração com PayPal",
        description: "Verificar se a integração com PayPal funciona corretamente",
        preconditions: "- Usuário logado\n- Produtos adicionados ao carrinho\n- Conta de teste PayPal disponível",
        steps:
          "1. Navegar até a página de checkout\n2. Selecionar método 'PayPal'\n3. Clicar em 'Continuar para PayPal'\n4. Fazer login na conta de teste do PayPal\n5. Confirmar pagamento no PayPal\n6. Ser redirecionado de volta para a loja",
        expectedResults:
          "- Redirecionamento correto para PayPal\n- Retorno adequado após confirmação\n- Transação registrada corretamente\n- Pedido salvo com status 'Pagamento Aprovado via PayPal'",
        priority: "Alta",
        status: "Não Executado",
        assignedTo: "Equipe de Integração",
      },
    ],
    risksMitigations:
      "1. Risco: Indisponibilidade da API de pagamentos\n   Mitigação: Implementar mecanismo de retry e fila de processamento para tentativas posteriores\n\n2. Risco: Lentidão em horários de pico\n   Mitigação: Testes de carga prévia simulando até 200% do tráfego máximo histórico\n\n3. Risco: Problemas de segurança em dados de cartão\n   Mitigação: Utilizar tokenização e não armazenar dados sensíveis, seguir padrões PCI-DSS",
    resources:
      "- 2 QAs dedicados\n- 1 Desenvolvedor de suporte\n- Ambiente de staging com capacidade similar à produção\n- 5 dispositivos para testes em diferentes plataformas\n- Licenças de ferramentas de teste automatizado",
    schedule:
      "- Preparação do ambiente: 2 dias\n- Execução dos testes: 5 dias\n- Correção de bugs e reteste: 3 dias\n- Validação final e relatório: 1 dia\n- Total: 11 dias úteis",
  },
  mobileApp: {
    projectName: "Aplicativo Mobile de Banco",
    releaseVersion: "v3.4.0",
    testScope:
      "Este plano abrange o teste da nova funcionalidade de transferência instantânea via Pix, incluindo cadastro de chaves, transferências, recebimentos e comprovantes. Não inclui o teste de outras funcionalidades bancárias existentes como extrato, pagamentos de contas e investimentos.",
    testApproach:
      "Combinação de testes manuais, automatizados e de segurança. Foco especial em testes de segurança, conformidade bancária e experiência do usuário em diferentes dispositivos. Haverá testes beta com um grupo selecionado de usuários antes do lançamento geral.",
    testEnvironment:
      "Ambiente de homologação isolado da produção com dados fictícios. Testes em dispositivos iOS e Android, cobrindo as 5 versões mais recentes de cada sistema operacional. Uso de emuladores e dispositivos físicos.",
    entryCriteria:
      "- Funcionalidade de Pix completamente implementada\n- API do Banco Central em ambiente de homologação disponível\n- Documentação de requisitos aprovada\n- Certificados de segurança atualizados\n- Design e fluxo de UX finalizados e aprovados",
    exitCriteria:
      "- 100% dos casos de teste críticos executados com sucesso\n- Verificação de compliance bancário aprovada\n- Testes de segurança sem vulnerabilidades críticas\n- Aprovação do grupo de usuários beta\n- Confirmação da equipe de experiência do cliente",
    testCases: [
      {
        id: "pix-01",
        name: "Cadastro de Chave Pix - CPF",
        description: "Verificar se é possível cadastrar CPF como chave Pix",
        preconditions: "- Usuário autenticado no app\n- CPF do usuário não cadastrado como chave",
        steps:
          "1. Acessar a seção Pix\n2. Selecionar 'Cadastrar chave'\n3. Escolher tipo 'CPF'\n4. Confirmar com senha de transação\n5. Verificar mensagem de sucesso",
        expectedResults:
          "- Chave cadastrada com sucesso\n- Exibição na lista de chaves cadastradas\n- Notificação enviada ao usuário\n- Registro correto na base de dados",
        priority: "Alta",
        status: "Não Executado",
        assignedTo: "Equipe Mobile",
      },
      {
        id: "pix-02",
        name: "Transferência via Pix - Chave Aleatória",
        description: "Verificar se é possível realizar transferência usando chave aleatória (EVP)",
        preconditions: "- Usuário autenticado\n- Saldo disponível\n- Chave aleatória válida para teste",
        steps:
          "1. Acessar a seção Pix\n2. Selecionar 'Transferir'\n3. Inserir chave aleatória de teste\n4. Definir valor de R$ 1,00\n5. Adicionar descrição 'Teste'\n6. Confirmar com senha",
        expectedResults:
          "- Transferência processada corretamente\n- Comprovante gerado e disponível\n- Valor debitado da conta\n- Histórico de transações atualizado\n- Notificação enviada",
        priority: "Alta",
        status: "Não Executado",
        assignedTo: "Equipe Mobile",
      },
      {
        id: "pix-03",
        name: "Recebimento via QR Code",
        description: "Verificar se é possível gerar e receber via QR Code",
        preconditions: "- Usuário com chave Pix cadastrada\n- Segundo dispositivo para simular pagamento",
        steps:
          "1. Acessar 'Receber com Pix'\n2. Definir valor de R$ 10,00\n3. Gerar QR Code\n4. Com segundo dispositivo, simular leitura e pagamento\n5. Verificar recebimento",
        expectedResults:
          "- QR Code gerado corretamente\n- QR Code contém informações corretas ao ser lido\n- Valor recebido na conta\n- Notificação de recebimento\n- Transação listada no histórico",
        priority: "Alta",
        status: "Não Executado",
        assignedTo: "Equipe Mobile",
      },
      {
        id: "pix-04",
        name: "Consulta de Limites de Transferência",
        description: "Verificar se os limites de transferência são exibidos corretamente",
        preconditions: "- Usuário autenticado no app\n- Limites configurados no perfil de teste",
        steps:
          "1. Acessar a seção Pix\n2. Selecionar 'Limites'\n3. Verificar limites diurno e noturno\n4. Tentar editar limites",
        expectedResults:
          "- Limites exibidos corretamente\n- Valores consistentes com configuração do perfil\n- Opção de edição funcionando\n- Alterações salvas corretamente após confirmação",
        priority: "Média",
        status: "Não Executado",
        assignedTo: "Equipe Mobile",
      },
    ],
    risksMitigations:
      "1. Risco: Falha na comunicação com o sistema do Banco Central\n   Mitigação: Implementar sistema de filas e retry, além de notificação clara ao usuário\n\n2. Risco: Vazamento de dados financeiros\n   Mitigação: Auditoria de segurança independente e testes de penetração antes do lançamento\n\n3. Risco: Inconsistência entre plataformas iOS e Android\n   Mitigação: Testes comparativos específicos e matriz de compatibilidade",
    resources:
      "- 3 QAs especialistas em mobile\n- 1 Especialista em segurança bancária\n- 20 dispositivos para testes (10 iOS, 10 Android)\n- Ambiente de simulação do Banco Central\n- Ferramentas: Appium, OWASP ZAP, Charles Proxy",
    schedule:
      "- Configuração de ambiente: 3 dias\n- Testes funcionais: 7 dias\n- Testes de segurança: 5 dias\n- Testes de performance: 3 dias\n- Testes beta com usuários: 5 dias\n- Regressão final: 2 dias\n- Total: 25 dias",
  },
  software: {
    projectName: "Sistema de Gestão Empresarial",
    releaseVersion: "v4.2.0",
    testScope:
      "Este plano cobre os testes do novo módulo de Recursos Humanos, incluindo cadastro de funcionários, folha de pagamento, controle de ponto e gestão de benefícios. Não serão testados os módulos existentes de Financeiro, Estoque e Vendas, exceto por testes de integração.",
    testApproach:
      "Será utilizada uma abordagem de testes baseada em comportamento (BDD) para validação de requisitos, combinada com testes de integração para garantir a comunicação entre módulos. Testes de regressão automatizados serão executados para as funcionalidades existentes.",
    testEnvironment:
      "Ambiente de testes dedicado em nuvem com banco de dados segregado. Dados de teste gerados sinteticamente seguindo padrões trabalhistas brasileiros. Conexão com sistemas simulados de bancos para testes de folha de pagamento.",
    entryCriteria:
      "- Desenvolvimento do módulo de RH concluído\n- Documentação técnica e funcional atualizada\n- Ambientes de teste configurados\n- Dados de teste preparados\n- Equipe de testes treinada nas novas funcionalidades",
    exitCriteria:
      "- 100% dos testes planejados executados\n- Pelo menos 90% dos testes automatizados funcionando\n- Sem defeitos críticos ou de alta prioridade abertos\n- Validação da performance (tempo de resposta < 2s)\n- Conformidade com leis trabalhistas verificada",
    testCases: [
      {
        id: "rh-01",
        name: "Cadastro de Novo Funcionário",
        description: "Verificar se o cadastro completo de um novo funcionário é processado corretamente",
        preconditions:
          "- Usuário com permissão de RH\n- Cargo e departamento já cadastrados\n- Tabela salarial configurada",
        steps:
          "1. Acessar módulo RH\n2. Selecionar 'Cadastro de Funcionários'\n3. Preencher dados pessoais completos\n4. Preencher dados contratuais (cargo, salário, etc)\n5. Anexar documentos digitalizados\n6. Salvar cadastro",
        expectedResults:
          "- Funcionário cadastrado com sucesso\n- Matrícula gerada automaticamente\n- Documentos anexados corretamente\n- Histórico de auditoria registrado\n- Notificação enviada para aprovadores",
        priority: "Alta",
        status: "Não Executado",
        assignedTo: "Equipe de QA",
      },
      {
        id: "rh-02",
        name: "Cálculo de Folha de Pagamento",
        description:
          "Verificar se o cálculo da folha de pagamento considera corretamente salário, benefícios e descontos",
        preconditions:
          "- Funcionários cadastrados\n- Tabela de impostos atualizada\n- Registro de ponto do mês completo\n- Parâmetros de cálculo configurados",
        steps:
          "1. Acessar módulo 'Folha de Pagamento'\n2. Selecionar o mês de referência\n3. Iniciar processamento da folha\n4. Verificar prévia de cálculos\n5. Aprovar processamento\n6. Gerar relatórios",
        expectedResults:
          "- Cálculos de salário bruto corretos\n- Descontos de INSS e IR conforme legislação\n- Benefícios calculados conforme política\n- Horas extras computadas corretamente\n- Relatórios gerados com totalizadores consistentes",
        priority: "Alta",
        status: "Não Executado",
        assignedTo: "Equipe Fiscal",
      },
      {
        id: "rh-03",
        name: "Registro de Ponto via Mobile",
        description: "Verificar se o registro de ponto via aplicativo mobile funciona corretamente",
        preconditions:
          "- Funcionário cadastrado com acesso mobile\n- GPS ativado no dispositivo\n- Parâmetros de jornada configurados",
        steps:
          "1. Fazer login no app mobile\n2. Acessar função 'Registrar Ponto'\n3. Confirmar localização\n4. Registrar entrada, almoço e saída\n5. Visualizar espelho de ponto",
        expectedResults:
          "- Pontos registrados com timestamp correto\n- Localização registrada para auditoria\n- Cálculo automático de horas trabalhadas\n- Sincronização com sistema central\n- Espelho de ponto atualizado e acessível",
        priority: "Média",
        status: "Não Executado",
        assignedTo: "Equipe Mobile",
      },
      {
        id: "rh-04",
        name: "Integração com Financeiro",
        description: "Verificar se os dados da folha de pagamento são corretamente enviados para o módulo Financeiro",
        preconditions:
          "- Folha de pagamento calculada e aprovada\n- Módulo Financeiro configurado\n- Contas contábeis mapeadas",
        steps:
          "1. Finalizar folha de pagamento\n2. Executar integração com Financeiro\n3. Verificar lançamentos contábeis\n4. Validar provisionamentos\n5. Verificar fluxo de caixa",
        expectedResults:
          "- Lançamentos contábeis gerados corretamente\n- Valores consistentes entre os módulos\n- Centros de custo corretamente atribuídos\n- Provisionamentos de férias e 13º corretos\n- Log de integração sem erros",
        priority: "Alta",
        status: "Não Executado",
        assignedTo: "Equipe de Integração",
      },
    ],
    risksMitigations:
      "1. Risco: Cálculos incorretos de impostos trabalhistas\n   Mitigação: Testes específicos com especialista fiscal validando os cálculos\n\n2. Risco: Performance degradada com grande volume de funcionários\n   Mitigação: Testes de carga simulando empresas com até 10.000 funcionários\n\n3. Risco: Incompatibilidade com navegadores/dispositivos específicos\n   Mitigação: Matriz de compatibilidade e testes em múltiplas plataformas",
    resources:
      "- 2 Analistas de teste funcionais\n- 1 Especialista em automação\n- 1 Consultor fiscal/trabalhista\n- Ambiente de testes escalável\n- Dados de teste anonimizados de clientes reais",
    schedule:
      "- Setup e configuração inicial: 3 dias\n- Testes funcionais do módulo RH: 10 dias\n- Testes de integração: 5 dias\n- Testes de regressão: 3 dias\n- Correções e retestes: 7 dias\n- Testes de aceitação com usuários: 2 dias",
  },
}

export default function InteractiveTestPlanPage() {
  // Estado para controlar se os dados foram salvos
  const [saved, setSaved] = useState(false)

  // Estado para o plano de testes
  const [testPlan, setTestPlan] = useState<TestPlan>({
    projectName: "",
    releaseVersion: "",
    testScope: "",
    testApproach: "",
    testEnvironment: "",
    entryCriteria: "",
    exitCriteria: "",
    testCases: [
      {
        id: "testcase-1",
        name: "",
        description: "",
        preconditions: "",
        steps: "",
        expectedResults: "",
        priority: "Média",
        status: "Não Executado",
        assignedTo: "",
      },
    ],
    risksMitigations: "",
    resources: "",
    schedule: "",
  })

  // Estado para controlar o diálogo de confirmação
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [selectedExample, setSelectedExample] = useState<keyof typeof testPlanExamples | null>(null)

  // Função para carregar exemplo selecionado
  const loadExample = (exampleKey: keyof typeof testPlanExamples) => {
    setSelectedExample(exampleKey)
    setShowConfirmDialog(true)
  }

  // Função para confirmar carregamento do exemplo
  const confirmLoadExample = () => {
    if (selectedExample) {
      setTestPlan(testPlanExamples[selectedExample])
      toast({
        title: "Exemplo carregado!",
        description: `O plano de testes para "${testPlanExamples[selectedExample].projectName}" foi carregado.`,
      })
      setShowConfirmDialog(false)
    }
  }

  // Carregar dados salvos quando o componente montar
  useEffect(() => {
    const savedData = localStorage.getItem("test-plan-data")
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        setTestPlan(data)
      } catch (e) {
        console.error("Erro ao carregar dados salvos:", e)
      }
    }
  }, [])

  // Salvar automaticamente quando os dados mudarem
  useEffect(() => {
    const saveData = () => {
      localStorage.setItem("test-plan-data", JSON.stringify(testPlan))
    }

    // Usar um temporizador para não salvar a cada digitação
    const timer = setTimeout(() => {
      saveData()
    }, 500)

    return () => clearTimeout(timer)
  }, [testPlan])

  // Função para salvar os dados manualmente
  const handleSave = () => {
    localStorage.setItem("test-plan-data", JSON.stringify(testPlan))
    setSaved(true)
    toast({
      title: "Salvo com sucesso!",
      description: "Seu plano de testes foi salvo localmente.",
    })
    setTimeout(() => setSaved(false), 2000)
  }

  // Função para atualizar campos gerais do plano
  const updateField = (field: keyof TestPlan, value: string) => {
    setTestPlan({ ...testPlan, [field]: value })
  }

  // Funções para gerenciar casos de teste
  const addTestCase = () => {
    const newTestCases = [
      ...testPlan.testCases,
      {
        id: `testcase-${testPlan.testCases.length + 1}`,
        name: "",
        description: "",
        preconditions: "",
        steps: "",
        expectedResults: "",
        priority: "Média",
        status: "Não Executado",
        assignedTo: "",
      },
    ]
    setTestPlan({ ...testPlan, testCases: newTestCases })
  }

  const removeTestCase = (index: number) => {
    const newTestCases = [...testPlan.testCases]
    newTestCases.splice(index, 1)
    setTestPlan({ ...testPlan, testCases: newTestCases })
  }

  const updateTestCase = (index: number, field: keyof TestCase, value: string) => {
    const newTestCases = [...testPlan.testCases]
    newTestCases[index] = { ...newTestCases[index], [field]: value }
    setTestPlan({ ...testPlan, testCases: newTestCases })
  }

  // Função para imprimir o template
  const handlePrint = () => {
    // Preparar o conteúdo HTML para impressão
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Plano de Testes - ${testPlan.projectName}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            padding: 20px; 
            margin: 0;
            color: #333;
          }
          .container { 
            max-width: 800px; 
            margin: 0 auto; 
          }
          .header { 
            text-align: center; 
            margin-bottom: 20px; 
          }
          .section {
            margin-bottom: 30px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .section-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .item {
            margin-bottom: 15px;
          }
          .item-header {
            font-weight: bold;
            margin-bottom: 5px;
          }
          .test-case {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 10px;
          }
          .test-case-header {
            font-weight: bold;
            margin-bottom: 8px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
          .print-buttons {
            text-align: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .print-button {
            padding: 8px 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
            font-size: 14px;
          }
          .close-button {
            padding: 8px 16px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Plano de Testes</h1>
            <h2>${testPlan.projectName} - ${testPlan.releaseVersion}</h2>
          </div>
          
          <div class="section">
            <div class="section-title">Informações Gerais</div>
            <div class="grid">
              <div class="item">
                <div class="item-header">Projeto:</div>
                <div>${testPlan.projectName || "Não definido"}</div>
              </div>
              <div class="item">
                <div class="item-header">Versão:</div>
                <div>${testPlan.releaseVersion || "Não definida"}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Escopo e Abordagem</div>
            <div class="item">
              <div class="item-header">Escopo de Testes:</div>
              <div>${testPlan.testScope || "Não definido"}</div>
            </div>
            <div class="item">
              <div class="item-header">Abordagem de Testes:</div>
              <div>${testPlan.testApproach || "Não definida"}</div>
            </div>
            <div class="item">
              <div class="item-header">Ambiente de Testes:</div>
              <div>${testPlan.testEnvironment || "Não definido"}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Critérios</div>
            <div class="item">
              <div class="item-header">Critérios de Entrada:</div>
              <div>${testPlan.entryCriteria || "Não definidos"}</div>
            </div>
            <div class="item">
              <div class="item-header">Critérios de Saída:</div>
              <div>${testPlan.exitCriteria || "Não definidos"}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Casos de Teste</div>
            ${testPlan.testCases
              .map(
                (testCase, index) => `
              <div class="test-case">
                <div class="test-case-header">${testCase.name || `Caso de Teste ${index + 1}`}</div>
                <div class="grid">
                  <div class="item">
                    <div class="item-header">Descrição:</div>
                    <div>${testCase.description || "Não definida"}</div>
                  </div>
                  <div class="item">
                    <div class="item-header">Prioridade:</div>
                    <div>${testCase.priority}</div>
                  </div>
                  <div class="item">
                    <div class="item-header">Status:</div>
                    <div>${testCase.status}</div>
                  </div>
                  <div class="item">
                    <div class="item-header">Responsável:</div>
                    <div>${testCase.assignedTo || "Não definido"}</div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-header">Pré-condições:</div>
                  <div>${testCase.preconditions || "Nenhuma"}</div>
                </div>
                <div class="item">
                  <div class="item-header">Passos:</div>
                  <div>${testCase.steps || "Não definidos"}</div>
                </div>
                <div class="item">
                  <div class="item-header">Resultados Esperados:</div>
                  <div>${testCase.expectedResults || "Não definidos"}</div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="section">
            <div class="section-title">Riscos e Recursos</div>
            <div class="item">
              <div class="item-header">Riscos e Mitigações:</div>
              <div>${testPlan.risksMitigations || "Não definidos"}</div>
            </div>
            <div class="item">
              <div class="item-header">Recursos Necessários:</div>
              <div>${testPlan.resources || "Não definidos"}</div>
            </div>
            <div class="item">
              <div class="item-header">Cronograma:</div>
              <div>${testPlan.schedule || "Não definido"}</div>
            </div>
          </div>
            
          <div class="print-buttons">
            <button class="print-button" onclick="window.print()">Imprimir / Salvar como PDF</button>
            <button class="close-button" onclick="window.close()">Fechar</button>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e9; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #2e7d32;">Como salvar como PDF:</h3>
            <ol style="padding-left: 20px; margin-bottom: 0;">
              <li>Clique no botão "Imprimir / Salvar como PDF" acima</li>
              <li>Na janela de impressão que aparecer, procure por "Destino" ou "Impressora"</li>
              <li>Selecione a opção "Salvar como PDF" (ou similar, dependendo do seu navegador)</li>
              <li>Clique em "Salvar" e escolha onde salvar o arquivo</li>
            </ol>
          </div>
        </div>
      </body>
      </html>
    `

    // Abrir uma nova janela para impressão
    const printWindow = window.open("", "_blank")
    if (!printWindow) {
      alert("Por favor, permita pop-ups para imprimir o documento.")
      return
    }

    // Escrever o conteúdo na nova janela
    printWindow.document.open()
    printWindow.document.write(printContent)
    printWindow.document.close()

    // Mostrar instruções para salvar como PDF
    toast({
      title: "Janela de impressão aberta",
      description: "Na janela de impressão, selecione 'Salvar como PDF' no menu de destino da impressora.",
      duration: 5000,
    })
  }

  return (
    <div className="container mx-auto py-6">
      <PageHeader
        title="Template Interativo: Plano de Testes"
        description="Crie um plano de testes completo para seu projeto. Preencha os campos abaixo e use o botão de impressão para exportar seu plano."
      />
      <div className="mb-8">
        <Link href="/semana5/templates" className="text-blue-600 hover:underline flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Voltar para Templates
        </Link>
      </div>

      <div className="space-y-6 mt-6" id="test-plan-section">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold">Plano de Testes</h2>
              <p className="text-sm text-slate-600">
                Edite diretamente nos campos abaixo. Suas alterações são salvas automaticamente.
              </p>
            </div>
            <div className="flex gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Carregar Exemplo
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Selecione um exemplo</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => loadExample("ecommerce")}>
                    E-commerce (Checkout e Pagamento)
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => loadExample("mobileApp")}>
                    App Mobile Bancário (Pix)
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => loadExample("software")}>Sistema ERP (Módulo RH)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                {saved ? "Salvo!" : "Salvar"}
              </Button>
              <Button onClick={handlePrint} className="gap-2">
                <Download className="h-4 w-4" />
                Visualizar / Imprimir
              </Button>
            </div>
          </div>

          {/* Informações Gerais */}
          <div className="mb-8 border rounded-lg overflow-hidden bg-slate-50 p-6">
            <h3 className="text-lg font-semibold mb-4">Informações Gerais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nome do Projeto</label>
                <Input
                  placeholder="Ex: Sistema de E-commerce"
                  value={testPlan.projectName}
                  onChange={(e) => updateField("projectName", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Versão do Release</label>
                <Input
                  placeholder="Ex: v1.2.0"
                  value={testPlan.releaseVersion}
                  onChange={(e) => updateField("releaseVersion", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Escopo e Abordagem */}
          <div className="mb-8 border rounded-lg overflow-hidden bg-slate-50 p-6">
            <h3 className="text-lg font-semibold mb-4">Escopo e Abordagem</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Escopo de Testes</label>
                <Textarea
                  placeholder="Descreva o que será testado e o que não será testado"
                  value={testPlan.testScope}
                  onChange={(e) => updateField("testScope", e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Abordagem de Testes</label>
                <Textarea
                  placeholder="Descreva a estratégia e os tipos de testes que serão realizados"
                  value={testPlan.testApproach}
                  onChange={(e) => updateField("testApproach", e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ambiente de Testes</label>
                <Textarea
                  placeholder="Descreva o ambiente onde os testes serão executados"
                  value={testPlan.testEnvironment}
                  onChange={(e) => updateField("testEnvironment", e.target.value)}
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Critérios */}
          <div className="mb-8 border rounded-lg overflow-hidden bg-slate-50 p-6">
            <h3 className="text-lg font-semibold mb-4">Critérios</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Critérios de Entrada</label>
                <Textarea
                  placeholder="Condições que devem ser atendidas antes de iniciar os testes"
                  value={testPlan.entryCriteria}
                  onChange={(e) => updateField("entryCriteria", e.target.value)}
                  className="min-h-[80px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Critérios de Saída</label>
                <Textarea
                  placeholder="Condições que devem ser atendidas para considerar os testes concluídos"
                  value={testPlan.exitCriteria}
                  onChange={(e) => updateField("exitCriteria", e.target.value)}
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Casos de Teste */}
          <div className="mb-8 border rounded-lg overflow-hidden bg-slate-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Casos de Teste</h3>
              <Button variant="outline" size="sm" onClick={addTestCase} className="gap-1">
                <Plus className="h-3 w-3" /> Adicionar Caso de Teste
              </Button>
            </div>

            {testPlan.testCases.map((testCase, index) => (
              <div key={testCase.id} className="mb-6 bg-white p-4 rounded-md border">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Caso de Teste {index + 1}</h4>
                  {testPlan.testCases.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTestCase(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nome</label>
                    <Input
                      placeholder="Ex: Login com Credenciais Válidas"
                      value={testCase.name}
                      onChange={(e) => updateTestCase(index, "name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Responsável</label>
                    <Input
                      placeholder="Ex: Equipe de QA"
                      value={testCase.assignedTo}
                      onChange={(e) => updateTestCase(index, "assignedTo", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Prioridade</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={testCase.priority}
                      onChange={(e) => updateTestCase(index, "priority", e.target.value)}
                    >
                      <option value="Alta">Alta</option>
                      <option value="Média">Média</option>
                      <option value="Baixa">Baixa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={testCase.status}
                      onChange={(e) => updateTestCase(index, "status", e.target.value)}
                    >
                      <option value="Não Executado">Não Executado</option>
                      <option value="Passou">Passou</option>
                      <option value="Falhou">Falhou</option>
                      <option value="Bloqueado">Bloqueado</option>
                      <option value="Em Progresso">Em Progresso</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Descrição</label>
                    <Textarea
                      placeholder="Descreva o objetivo do caso de teste"
                      value={testCase.description}
                      onChange={(e) => updateTestCase(index, "description", e.target.value)}
                      className="min-h-[60px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Pré-condições</label>
                    <Textarea
                      placeholder="Condições que devem existir antes da execução do teste"
                      value={testCase.preconditions}
                      onChange={(e) => updateTestCase(index, "preconditions", e.target.value)}
                      className="min-h-[60px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Passos</label>
                    <Textarea
                      placeholder="Liste os passos para executar o teste"
                      value={testCase.steps}
                      onChange={(e) => updateTestCase(index, "steps", e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Resultados Esperados</label>
                    <Textarea
                      placeholder="Descreva o comportamento esperado do sistema"
                      value={testCase.expectedResults}
                      onChange={(e) => updateTestCase(index, "expectedResults", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Riscos e Recursos */}
          <div className="mb-8 border rounded-lg overflow-hidden bg-slate-50 p-6">
            <h3 className="text-lg font-semibold mb-4">Riscos e Recursos</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Riscos e Mitigações</label>
                <Textarea
                  placeholder="Identifique os principais riscos e estratégias de mitigação"
                  value={testPlan.risksMitigations}
                  onChange={(e) => updateField("risksMitigations", e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Recursos Necessários</label>
                <Textarea
                  placeholder="Liste os recursos humanos, hardware e software necessários"
                  value={testPlan.resources}
                  onChange={(e) => updateField("resources", e.target.value)}
                  className="min-h-[80px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cronograma</label>
                <Textarea
                  placeholder="Defina o cronograma para execução dos testes"
                  value={testPlan.schedule}
                  onChange={(e) => updateField("schedule", e.target.value)}
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Diálogo de confirmação para carregar exemplo */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Substituir plano atual?</AlertDialogTitle>
            <AlertDialogDescription>
              Isso substituirá todos os dados do seu plano de testes atual pelo exemplo selecionado. Os dados não salvos
              serão perdidos. Deseja continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmLoadExample}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
