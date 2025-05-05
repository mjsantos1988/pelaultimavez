"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Save, Download, Plus, Trash } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

interface Requirement {
  id: string
  type: "functional" | "non-functional"
  category: string
  description: string
  priority: string
  notes: string
}

export default function InteractiveRequirements() {
  // Referência para o elemento que será impresso
  const printRef = useRef(null)

  // Estado para controlar se os dados foram salvos
  const [saved, setSaved] = useState(false)

  // Estado para os requisitos
  const [requirements, setRequirements] = useState<Requirement[]>([
    {
      id: "req-1",
      type: "functional",
      category: "Usuário",
      description: "",
      priority: "Média",
      notes: "",
    },
  ])

  // Carregar dados salvos quando o componente montar
  useEffect(() => {
    const savedData = localStorage.getItem("requirements-data")
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        setRequirements(data)
      } catch (e) {
        console.error("Erro ao carregar dados salvos:", e)
      }
    }
  }, [])

  // Salvar automaticamente quando os dados mudarem
  useEffect(() => {
    const saveData = () => {
      localStorage.setItem("requirements-data", JSON.stringify(requirements))
    }

    // Usar um temporizador para não salvar a cada digitação
    const timer = setTimeout(() => {
      saveData()
    }, 500)

    return () => clearTimeout(timer)
  }, [requirements])

  // Função para salvar os dados manualmente
  const handleSave = () => {
    localStorage.setItem("requirements-data", JSON.stringify(requirements))
    setSaved(true)
    toast({
      title: "Salvo com sucesso!",
      description: "Seus requisitos foram salvos localmente.",
    })
    setTimeout(() => setSaved(false), 2000)
  }

  // Função para adicionar um novo requisito
  const addRequirement = () => {
    setRequirements([
      ...requirements,
      {
        id: `req-${requirements.length + 1}`,
        type: "functional",
        category: "Usuário",
        description: "",
        priority: "Média",
        notes: "",
      },
    ])
  }

  // Função para remover um requisito
  const removeRequirement = (index: number) => {
    const newRequirements = [...requirements]
    newRequirements.splice(index, 1)
    setRequirements(newRequirements)
  }

  // Função para atualizar um requisito
  const updateRequirement = (index: number, field: keyof Requirement, value: any) => {
    const newRequirements = [...requirements]
    newRequirements[index] = { ...newRequirements[index], [field]: value }
    setRequirements(newRequirements)
  }

  // Função para imprimir o template
  const handlePrint = () => {
    // Preparar o conteúdo HTML para impressão
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Requisitos do Produto</title>
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
          .requirement {
            margin-bottom: 30px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
          }
          .functional {
            background-color: #f0f7ff;
          }
          .non-functional {
            background-color: #fff0f7;
          }
          .requirement-header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
          }
          .requirement-content {
            margin-bottom: 15px;
          }
          .category {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            background-color: #e0e0e0;
            margin-right: 10px;
          }
          .priority {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
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
          .notes {
            background-color: #fffde7;
            padding: 10px;
            border-radius: 4px;
            font-style: italic;
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
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Requisitos do Produto</h1>
          </div>
          
          ${requirements
            .map(
              (req, index) => `
          <div class="requirement ${req.type}">
            <div class="requirement-header">
              <div>
                REQ-${index + 1}: ${req.type === "functional" ? "Funcional" : "Não-Funcional"}
                <span class="category">${req.category}</span>
              </div>
              <span class="priority priority-${req.priority}">${req.priority}</span>
            </div>
            <div class="requirement-content">
              <p>${req.description || "Descrição não definida"}</p>
            </div>
            ${
              req.notes
                ? `
            <div>
              <strong>Observações:</strong>
              <div class="notes">
                ${req.notes}
              </div>
            </div>
            `
                : ""
            }
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
    <div className="space-y-6" id="requirements-section">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold">Requisitos do Produto</h2>
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
          {requirements.map((req, reqIndex) => (
            <div
              key={req.id}
              className={`mb-8 border rounded-lg overflow-hidden p-6 ${
                req.type === "functional" ? "bg-blue-50" : "bg-pink-50"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">REQ-{reqIndex + 1}</h3>
                  <select
                    className="bg-white border rounded px-2 py-1 text-sm"
                    value={req.type}
                    onChange={(e) =>
                      updateRequirement(reqIndex, "type", e.target.value as "functional" | "non-functional")
                    }
                  >
                    <option value="functional">Funcional</option>
                    <option value="non-functional">Não-Funcional</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    className="bg-white border rounded px-2 py-1 text-sm"
                    value={req.priority}
                    onChange={(e) => updateRequirement(reqIndex, "priority", e.target.value)}
                  >
                    <option value="Alta">Alta Prioridade</option>
                    <option value="Média">Média Prioridade</option>
                    <option value="Baixa">Baixa Prioridade</option>
                  </select>
                  {requirements.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeRequirement(reqIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Categoria</label>
                  <Input
                    placeholder="ex: Usuário, Sistema, Segurança, Desempenho"
                    value={req.category}
                    onChange={(e) => updateRequirement(reqIndex, "category", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Descrição</label>
                  <Textarea
                    placeholder="Descreva o requisito de forma clara e específica"
                    value={req.description}
                    onChange={(e) => updateRequirement(reqIndex, "description", e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Observações (opcional)</label>
                  <Textarea
                    placeholder="Adicione informações complementares, restrições ou dependências"
                    value={req.notes}
                    onChange={(e) => updateRequirement(reqIndex, "notes", e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button onClick={addRequirement} className="gap-2">
            <Plus className="h-4 w-4" /> Adicionar Novo Requisito
          </Button>
        </div>
      </div>
    </div>
  )
}
