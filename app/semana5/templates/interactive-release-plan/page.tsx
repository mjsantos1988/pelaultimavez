"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import PageHeader from "@/components/page-header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Save, Download, Plus, Trash, ChevronLeft } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import Footer from "@/components/footer"

interface Feature {
  id: number
  name: string
  description: string
  priority: string
  status: string
}

interface Risk {
  id: number
  description: string
  impact: string
  mitigation: string
}

interface ReleasePlan {
  releaseName: string
  version: string
  releaseDate: string
  objectives: string
  features: Feature[]
  qualityCriteria: string
  testingStrategy: string
  risks: Risk[]
  stakeholders: string
  communicationPlan: string
  rollbackPlan: string
}

export default function InteractiveReleasePlan() {
  // Referência para o elemento que será impresso
  const printRef = useRef(null)

  // Estado para controlar se os dados foram salvos
  const [saved, setSaved] = useState(false)

  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState("basic")

  const [releasePlan, setReleasePlan] = useState<ReleasePlan>({
    releaseName: "",
    version: "",
    releaseDate: "",
    objectives: "",
    features: [{ id: 1, name: "", description: "", priority: "Medium", status: "Planned" }],
    qualityCriteria: "",
    testingStrategy: "",
    risks: [{ id: 1, description: "", impact: "Medium", mitigation: "" }],
    stakeholders: "",
    communicationPlan: "",
    rollbackPlan: "",
  })

  // Carregar dados salvos quando o componente montar
  useEffect(() => {
    const savedData = localStorage.getItem("release-plan-data")
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        setReleasePlan(data)
      } catch (e) {
        console.error("Erro ao carregar dados salvos:", e)
      }
    }
  }, [])

  // Salvar automaticamente quando os dados mudarem
  useEffect(() => {
    // Usar um temporizador para não salvar a cada digitação
    const timer = setTimeout(() => {
      try {
        localStorage.setItem("release-plan-data", JSON.stringify(releasePlan))
      } catch (e) {
        console.error("Erro ao salvar dados:", e)
      }
    }, 1000) // Aumentar o tempo para 1 segundo

    return () => clearTimeout(timer)
  }, [releasePlan])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setReleasePlan((prev) => ({ ...prev, [name]: value }))
  }

  const addFeature = () => {
    const newId = releasePlan.features.length > 0 ? Math.max(...releasePlan.features.map((f) => f.id)) + 1 : 1
    setReleasePlan((prev) => ({
      ...prev,
      features: [...prev.features, { id: newId, name: "", description: "", priority: "Medium", status: "Planned" }],
    }))
  }

  const updateFeature = (id: number, field: string, value: string) => {
    setReleasePlan((prev) => ({
      ...prev,
      features: prev.features.map((feature) => (feature.id === id ? { ...feature, [field]: value } : feature)),
    }))
  }

  const removeFeature = (id: number) => {
    setReleasePlan((prev) => ({
      ...prev,
      features: prev.features.filter((feature) => feature.id !== id),
    }))
  }

  const addRisk = () => {
    const newId = releasePlan.risks.length > 0 ? Math.max(...releasePlan.risks.map((r) => r.id)) + 1 : 1
    setReleasePlan((prev) => ({
      ...prev,
      risks: [...prev.risks, { id: newId, description: "", impact: "Medium", mitigation: "" }],
    }))
  }

  const updateRisk = (id: number, field: string, value: string) => {
    setReleasePlan((prev) => ({
      ...prev,
      risks: prev.risks.map((risk) => (risk.id === id ? { ...risk, [field]: value } : risk)),
    }))
  }

  const removeRisk = (id: number) => {
    setReleasePlan((prev) => ({
      ...prev,
      risks: prev.risks.filter((risk) => risk.id !== id),
    }))
  }

  // Função para salvar os dados manualmente
  const handleSave = () => {
    localStorage.setItem("release-plan-data", JSON.stringify(releasePlan))
    setSaved(true)
    toast({
      title: "Salvo com sucesso!",
      description: "Seu plano de release foi salvo localmente.",
    })
    setTimeout(() => setSaved(false), 2000)
  }

  // Função para imprimir o template
  const handlePrint = () => {
    // Preparar o conteúdo HTML para impressão
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Plano de Release - ${releasePlan.releaseName}</title>
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
          .feature {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 10px;
          }
          .risk {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 10px;
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
            <h1>Plano de Release</h1>
            <h2>${releasePlan.releaseName} - ${releasePlan.version}</h2>
          </div>
          
          <div class="section">
            <div class="section-title">Informações Gerais</div>
            <div class="grid">
              <div class="item">
                <div class="item-header">Nome do Release:</div>
                <div>${releasePlan.releaseName || "Não definido"}</div>
              </div>
              <div class="item">
                <div class="item-header">Versão:</div>
                <div>${releasePlan.version || "Não definida"}</div>
              </div>
              <div class="item">
                <div class="item-header">Data de Lançamento:</div>
                <div>${releasePlan.releaseDate || "Não definida"}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Objetivos</div>
            <div class="item">
              <div>${releasePlan.objectives || "Não definidos"}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Funcionalidades</div>
            ${releasePlan.features
              .map(
                (feature) => `
              <div class="feature">
                <div class="item">
                  <div class="item-header">Nome:</div>
                  <div>${feature.name || "Não definido"}</div>
                </div>
                <div class="item">
                  <div class="item-header">Descrição:</div>
                  <div>${feature.description || "Não definida"}</div>
                </div>
                <div class="grid">
                  <div class="item">
                    <div class="item-header">Prioridade:</div>
                  <div>${feature.priority}</div>
                  </div>
                  <div class="item">
                    <div class="item-header">Status:</div>
                    <div>${feature.status}</div>
                  </div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="section">
            <div class="section-title">Qualidade e Testes</div>
            <div class="item">
              <div class="item-header">Critérios de Qualidade:</div>
              <div>${releasePlan.qualityCriteria || "Não definidos"}</div>
            </div>
            <div class="item">
              <div class="item-header">Estratégia de Testes:</div>
              <div>${releasePlan.testingStrategy || "Não definida"}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Riscos e Mitigações</div>
            ${releasePlan.risks
              .map(
                (risk) => `
              <div class="risk">
                <div class="item">
                  <div class="item-header">Descrição:</div>
                  <div>${risk.description || "Não definida"}</div>
                </div>
                <div class="grid">
                  <div class="item">
                    <div class="item-header">Impacto:</div>
                  <div>${risk.impact}</div>
                  </div>
                  <div class="item">
                    <div class="item-header">Mitigação:</div>
                    <div>${risk.mitigation || "Não definida"}</div>
                  </div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="section">
            <div class="section-title">Comunicação e Contingência</div>
            <div class="item">
              <div class="item-header">Stakeholders:</div>
              <div>${releasePlan.stakeholders || "Não definidos"}</div>
            </div>
            <div class="item">
              <div class="item-header">Plano de Comunicação:</div>
              <div>${releasePlan.communicationPlan || "Não definido"}</div>
            </div>
            <div class="item">
              <div class="item-header">Plano de Rollback:</div>
              <div>${releasePlan.rollbackPlan || "Não definido"}</div>
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

  const loadExamples = () => {
    const exampleData: ReleasePlan = {
      releaseName: "App Mobile 2.0",
      version: "2.0.0",
      releaseDate: "2023-12-15",
      objectives:
        "Este release tem como objetivo principal melhorar a experiência do usuário e adicionar novas funcionalidades solicitadas pelos clientes. Também inclui correções de bugs críticos identificados na versão anterior.",
      features: [
        {
          id: 1,
          name: "Login com biometria",
          description: "Permitir que usuários façam login usando impressão digital ou reconhecimento facial",
          priority: "High",
          status: "Planned",
        },
        {
          id: 2,
          name: "Modo escuro",
          description: "Implementar tema escuro para melhorar a experiência de uso noturno e economizar bateria",
          priority: "Medium",
          status: "In Development",
        },
      ],
      qualityCriteria:
        "- Tempo de resposta máximo de 2 segundos para todas as operações\n- Taxa de erro menor que 0.1%\n- Compatibilidade com Android 10+ e iOS 14+\n- Testes de usabilidade com pontuação mínima de 4/5",
      testingStrategy:
        "1. Testes unitários para todos os componentes\n2. Testes de integração para fluxos críticos\n3. Testes de regressão automatizados\n4. Beta testing com 100 usuários selecionados\n5. Testes de performance em diferentes dispositivos",
      risks: [
        {
          id: 1,
          description: "Atraso na integração com o novo sistema de pagamentos",
          impact: "High",
          mitigation:
            "Iniciar integração com 3 semanas de antecedência e ter um plano B para usar o sistema atual caso necessário",
        },
        {
          id: 2,
          description: "Problemas de compatibilidade com dispositivos mais antigos",
          impact: "Medium",
          mitigation: "Realizar testes em uma ampla variedade de dispositivos e definir requisitos mínimos claros",
        },
      ],
      stakeholders:
        "- Equipe de Desenvolvimento\n- Equipe de QA\n- Gerentes de Produto\n- Representantes de Vendas\n- Suporte ao Cliente\n- Usuários beta",
      communicationPlan:
        "1. Reunião semanal de status com todas as equipes\n2. Relatório diário de progresso para gerentes\n3. Anúncio de beta testing 2 semanas antes do lançamento\n4. Comunicado de imprensa 1 semana antes do lançamento\n5. Email para todos os usuários no dia do lançamento",
      rollbackPlan:
        "Em caso de problemas críticos após o lançamento:\n1. Avaliar o impacto e a extensão do problema\n2. Se o problema afetar mais de 5% dos usuários, reverter para a versão anterior\n3. Comunicar aos usuários sobre o problema e a solução\n4. Corrigir o problema e lançar uma versão de emergência",
    }

    setReleasePlan(exampleData)
    toast({
      title: "Exemplos carregados",
      description: "Os exemplos foram carregados com sucesso. Você pode editá-los conforme necessário.",
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Template de Plano de Release"
        description="Crie um plano de release completo para seu produto"
      />

      <div className="container mx-auto px-4 mb-8">
        <Link href="/semana5/exercicios" className="text-blue-600 hover:underline flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Voltar para Exercícios
        </Link>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold">Plano de Release Interativo</h2>
              <p className="text-sm text-slate-600">
                Utilize este template para criar um plano de release completo para seu produto. Preencha todas as seções
                e exporte o documento final.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-md mb-6 border border-blue-200">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">Dica:</h3>
              <p className="text-sm text-blue-700">
                Você pode começar do zero ou usar o botão "Carregar Exemplos" para ver um plano de release preenchido
                como referência.
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
              <Button variant="secondary" onClick={loadExamples} className="gap-2">
                <Plus className="h-4 w-4" />
                Carregar Exemplos
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  if (confirm("Tem certeza que deseja limpar todos os campos e começar do zero?")) {
                    setReleasePlan({
                      releaseName: "",
                      version: "",
                      releaseDate: "",
                      objectives: "",
                      features: [{ id: 1, name: "", description: "", priority: "Medium", status: "Planned" }],
                      qualityCriteria: "",
                      testingStrategy: "",
                      risks: [{ id: 1, description: "", impact: "Medium", mitigation: "" }],
                      stakeholders: "",
                      communicationPlan: "",
                      rollbackPlan: "",
                    })
                    toast({
                      title: "Campos limpos",
                      description: "Todos os campos foram limpos. Você pode começar do zero agora.",
                    })
                  }
                }}
                className="gap-2"
              >
                <Trash className="h-4 w-4" />
                Limpar Campos
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <button
                onClick={() => setActiveTab("basic")}
                className={`py-2 px-4 text-center rounded-md transition-colors ${
                  activeTab === "basic" ? "bg-slate-200 font-medium" : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Informações Básicas
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`py-2 px-4 text-center rounded-md transition-colors ${
                  activeTab === "features" ? "bg-slate-200 font-medium" : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Funcionalidades
              </button>
              <button
                onClick={() => setActiveTab("quality")}
                className={`py-2 px-4 text-center rounded-md transition-colors ${
                  activeTab === "quality" ? "bg-slate-200 font-medium" : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Qualidade e Testes
              </button>
              <button
                onClick={() => setActiveTab("risks")}
                className={`py-2 px-4 text-center rounded-md transition-colors ${
                  activeTab === "risks" ? "bg-slate-200 font-medium" : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Riscos
              </button>
              <button
                onClick={() => setActiveTab("communication")}
                className={`py-2 px-4 text-center rounded-md transition-colors ${
                  activeTab === "communication" ? "bg-slate-200 font-medium" : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Comunicação
              </button>
            </div>
          </div>

          <div className="mt-6">
            {activeTab === "basic" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Release</label>
                  <Input
                    type="text"
                    name="releaseName"
                    value={releasePlan.releaseName}
                    onChange={handleChange}
                    placeholder="ex: Spring Release 2023"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Versão</label>
                    <Input
                      type="text"
                      name="version"
                      value={releasePlan.version}
                      onChange={handleChange}
                      placeholder="ex: 2.1.0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Data Prevista</label>
                    <Input type="date" name="releaseDate" value={releasePlan.releaseDate} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Objetivos do Release</label>
                  <Textarea
                    name="objectives"
                    value={releasePlan.objectives}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descreva os principais objetivos deste release..."
                  />
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Funcionalidades do Release</h3>
                  <Button variant="outline" size="sm" onClick={addFeature} className="gap-1">
                    <Plus className="h-3 w-3" /> Adicionar Funcionalidade
                  </Button>
                </div>

                {releasePlan.features.map((feature) => (
                  <div key={feature.id} className="border border-gray-200 rounded-md p-4 space-y-3">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Funcionalidade #{feature.id}</h4>
                      {releasePlan.features.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFeature(feature.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Funcionalidade</label>
                      <Input
                        type="text"
                        value={feature.name}
                        onChange={(e) => updateFeature(feature.id, "name", e.target.value)}
                        placeholder="ex: Login com Redes Sociais"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                      <Textarea
                        value={feature.description}
                        onChange={(e) => updateFeature(feature.id, "description", e.target.value)}
                        rows={3}
                        placeholder="Descreva a funcionalidade em detalhes..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Prioridade</label>
                        <select
                          value={feature.priority}
                          onChange={(e) => updateFeature(feature.id, "priority", e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="High">Alta</option>
                          <option value="Medium">Média</option>
                          <option value="Low">Baixa</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={feature.status}
                          onChange={(e) => updateFeature(feature.id, "status", e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="Planned">Planejada</option>
                          <option value="In Development">Em Desenvolvimento</option>
                          <option value="Testing">Em Teste</option>
                          <option value="Ready">Pronta</option>
                          <option value="Deferred">Adiada</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "quality" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Qualidade e Testes</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Critérios de Qualidade</label>
                  <Textarea
                    name="qualityCriteria"
                    value={releasePlan.qualityCriteria}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Defina os critérios de qualidade que devem ser atendidos antes do lançamento..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estratégia de Testes</label>
                  <Textarea
                    name="testingStrategy"
                    value={releasePlan.testingStrategy}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descreva a abordagem de testes para este release..."
                  />
                </div>
              </div>
            )}

            {activeTab === "risks" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Riscos e Mitigações</h3>
                  <Button variant="outline" size="sm" onClick={addRisk} className="gap-1">
                    <Plus className="h-3 w-3" /> Adicionar Risco
                  </Button>
                </div>

                {releasePlan.risks.map((risk) => (
                  <div key={risk.id} className="border border-gray-200 rounded-md p-4 space-y-3">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Risco #{risk.id}</h4>
                      {releasePlan.risks.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeRisk(risk.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Descrição do Risco</label>
                      <Textarea
                        value={risk.description}
                        onChange={(e) => updateRisk(risk.id, "description", e.target.value)}
                        rows={2}
                        placeholder="Descreva o risco potencial..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Impacto</label>
                        <select
                          value={risk.impact}
                          onChange={(e) => updateRisk(risk.id, "impact", e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="High">Alto</option>
                          <option value="Medium">Médio</option>
                          <option value="Low">Baixo</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estratégia de Mitigação</label>
                        <Textarea
                          value={risk.mitigation}
                          onChange={(e) => updateRisk(risk.id, "mitigation", e.target.value)}
                          rows={2}
                          placeholder="Como este risco será mitigado..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "communication" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Comunicação e Contingência</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stakeholders</label>
                  <Textarea
                    name="stakeholders"
                    value={releasePlan.stakeholders}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Liste os principais stakeholders envolvidos neste release..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plano de Comunicação</label>
                  <Textarea
                    name="communicationPlan"
                    value={releasePlan.communicationPlan}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descreva como e quando as informações sobre o release serão comunicadas..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plano de Rollback</label>
                  <Textarea
                    name="rollbackPlan"
                    value={releasePlan.rollbackPlan}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descreva o plano de contingência caso seja necessário reverter o release..."
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
