"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Save, Download, Plus, Trash } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

interface UserStory {
  id: string
  persona: string
  action: string
  benefit: string
  acceptanceCriteria: string[]
  priority: string
}

export default function InteractiveUserStories() {
  // Referência para o elemento que será impresso
  const printRef = useRef(null)

  // Estado para controlar se os dados foram salvos
  const [saved, setSaved] = useState(false)

  // Estado para as histórias de usuário
  const [userStories, setUserStories] = useState<UserStory[]>([
    {
      id: "story-1",
      persona: "",
      action: "",
      benefit: "",
      acceptanceCriteria: [""],
      priority: "Média",
    },
  ])

  // Carregar dados salvos quando o componente montar
  useEffect(() => {
    const savedData = localStorage.getItem("user-stories-data")
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        setUserStories(data)
      } catch (e) {
        console.error("Erro ao carregar dados salvos:", e)
      }
    }
  }, [])

  // Salvar automaticamente quando os dados mudarem
  useEffect(() => {
    const saveData = () => {
      localStorage.setItem("user-stories-data", JSON.stringify(userStories))
    }

    // Usar um temporizador para não salvar a cada digitação
    const timer = setTimeout(() => {
      saveData()
    }, 500)

    return () => clearTimeout(timer)
  }, [userStories])

  // Função para salvar os dados manualmente
  const handleSave = () => {
    localStorage.setItem("user-stories-data", JSON.stringify(userStories))
    setSaved(true)
    toast({
      title: "Salvo com sucesso!",
      description: "Suas histórias de usuário foram salvas localmente.",
    })
    setTimeout(() => setSaved(false), 2000)
  }

  // Função para adicionar uma nova história
  const addUserStory = () => {
    setUserStories([
      ...userStories,
      {
        id: `story-${userStories.length + 1}`,
        persona: "",
        action: "",
        benefit: "",
        acceptanceCriteria: [""],
        priority: "Média",
      },
    ])
  }

  // Função para remover uma história
  const removeUserStory = (index: number) => {
    const newStories = [...userStories]
    newStories.splice(index, 1)
    setUserStories(newStories)
  }

  // Função para atualizar uma história
  const updateUserStory = (index: number, field: keyof UserStory, value: any) => {
    const newStories = [...userStories]
    newStories[index] = { ...newStories[index], [field]: value }
    setUserStories(newStories)
  }

  // Função para adicionar um critério de aceitação
  const addAcceptanceCriteria = (storyIndex: number) => {
    const newStories = [...userStories]
    newStories[storyIndex].acceptanceCriteria.push("")
    setUserStories(newStories)
  }

  // Função para remover um critério de aceitação
  const removeAcceptanceCriteria = (storyIndex: number, criteriaIndex: number) => {
    const newStories = [...userStories]
    newStories[storyIndex].acceptanceCriteria.splice(criteriaIndex, 1)
    setUserStories(newStories)
  }

  // Função para atualizar um critério de aceitação
  const updateAcceptanceCriteria = (storyIndex: number, criteriaIndex: number, value: string) => {
    const newStories = [...userStories]
    newStories[storyIndex].acceptanceCriteria[criteriaIndex] = value
    setUserStories(newStories)
  }

  // Função para imprimir o template
  const handlePrint = () => {
    // Preparar o conteúdo HTML para impressão
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Histórias de Usuário</title>
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
          .story {
            margin-bottom: 30px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .story-header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
          }
          .story-content {
            margin-bottom: 15px;
          }
          .criteria-list {
            margin-top: 15px;
          }
          .criteria-item {
            margin-bottom: 8px;
            padding: 8px;
            background-color: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
          }
          .priority {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            margin-left: 10px;
          }
          .priority-Alta {
            background-color: #ffebee;
            color: #d32f2f;
          }
          .priority-Média {
            background-color: #fff8e1;
            color: #ff8f00;
          }
          .priority-Baixa {
            background-color: #e8f5e9;
            color: #388e3c;
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
            <h1>Histórias de Usuário</h1>
          </div>
          
          ${userStories
            .map(
              (story, index) => `
          <div class="story">
            <div class="story-header">
              História #${index + 1}
              <span class="priority priority-${story.priority}">${story.priority}</span>
            </div>
            <div class="story-content">
              <p><strong>Como</strong> ${story.persona || "[persona]"},</p>
              <p><strong>Eu quero</strong> ${story.action || "[ação]"},</p>
              <p><strong>Para que</strong> ${story.benefit || "[benefício]"}.</p>
            </div>
            <div>
              <strong>Critérios de Aceitação:</strong>
              <div class="criteria-list">
                ${story.acceptanceCriteria
                  .map(
                    (criteria, i) => `
                <div class="criteria-item">
                  ${criteria || "Critério não definido"}
                </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
          `,
            )
            .join("")}
            
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
    <div className="space-y-6" id="user-stories-section">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold">Histórias de Usuário</h2>
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
          {userStories.map((story, storyIndex) => (
            <div key={story.id} className="mb-8 border rounded-lg overflow-hidden bg-slate-50 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">História #{storyIndex + 1}</h3>
                <div className="flex items-center gap-2">
                  <select
                    className="bg-white border rounded px-2 py-1 text-sm"
                    value={story.priority}
                    onChange={(e) => updateUserStory(storyIndex, "priority", e.target.value)}
                  >
                    <option value="Alta">Alta Prioridade</option>
                    <option value="Média">Média Prioridade</option>
                    <option value="Baixa">Baixa Prioridade</option>
                  </select>
                  {userStories.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeUserStory(storyIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Como</label>
                  <Input
                    placeholder="[persona] - ex: usuário do aplicativo, gerente de projeto, cliente premium"
                    value={story.persona}
                    onChange={(e) => updateUserStory(storyIndex, "persona", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Eu quero</label>
                  <Input
                    placeholder="[ação] - ex: poder filtrar produtos por categoria, receber notificações"
                    value={story.action}
                    onChange={(e) => updateUserStory(storyIndex, "action", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Para que</label>
                  <Input
                    placeholder="[benefício] - ex: encontre produtos mais rapidamente, me mantenha informado"
                    value={story.benefit}
                    onChange={(e) => updateUserStory(storyIndex, "benefit", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium">Critérios de Aceitação</label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addAcceptanceCriteria(storyIndex)}
                    className="gap-1"
                  >
                    <Plus className="h-3 w-3" /> Adicionar Critério
                  </Button>
                </div>
                {story.acceptanceCriteria.map((criteria, criteriaIndex) => (
                  <div key={`${story.id}-criteria-${criteriaIndex}`} className="flex gap-2 mb-2">
                    <Textarea
                      placeholder="Descreva um critério de aceitação específico e testável"
                      value={criteria}
                      onChange={(e) => updateAcceptanceCriteria(storyIndex, criteriaIndex, e.target.value)}
                      className="min-h-[60px]"
                    />
                    {story.acceptanceCriteria.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAcceptanceCriteria(storyIndex, criteriaIndex)}
                        className="flex-shrink-0 text-red-500 hover:text-red-700"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button onClick={addUserStory} className="gap-2">
            <Plus className="h-4 w-4" /> Adicionar Nova História
          </Button>
        </div>
      </div>
    </div>
  )
}
