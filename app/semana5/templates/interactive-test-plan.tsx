"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Save, Download, Plus, Trash } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

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

export default function InteractiveTestPlan() {
  // Referência para o elemento que será impresso
  const printRef = useRef(null)

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
    <div className="space-y-6" id="test-plan-section">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold">Plano de Testes</h2>
            <p className="text-sm text-slate-600">
              Edite diretamente nos campos abaixo. Suas alterações são salvas automaticamente.
            </p>
          </div>
          <div className="flex gap-3">
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

        <div ref={printRef}>
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
    </div>
  )
}
