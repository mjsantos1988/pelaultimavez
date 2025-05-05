"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Download } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

// Modifique a função do componente para adicionar as funções de download
export default function TemplatesExemplosPage() {
  // Função para baixar o exemplo de histórias de usuário
  const handleDownloadUserStories = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Exemplo de Histórias de Usuário - Aplicativo de Fitness</title>
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
            <h1>Exemplo de Histórias de Usuário - Aplicativo de Fitness</h1>
          </div>
          
          <div class="story">
            <div class="story-header">História #1</div>
            <div class="story-content">
              <p><strong>Como</strong> usuário do aplicativo de fitness,</p>
              <p><strong>Eu quero</strong> registrar meus treinos diários,</p>
              <p><strong>Para que</strong> eu possa acompanhar meu progresso ao longo do tempo.</p>
            </div>
            <div>
              <strong>Critérios de Aceitação:</strong>
              <div class="criteria-list">
                <div class="criteria-item">
                  <strong>Dado que</strong> estou logado no aplicativo,<br />
                  <strong>Quando</strong> eu acessar a seção "Meus Treinos" e clicar em "Adicionar Treino",<br />
                  <strong>Então</strong> devo poder selecionar o tipo de exercício, duração, intensidade e data.
                </div>
                <div class="criteria-item">
                  <strong>Dado que</strong> preenchi os detalhes do meu treino,<br />
                  <strong>Quando</strong> eu clicar em "Salvar",<br />
                  <strong>Então</strong> o treino deve ser registrado e aparecer na minha lista de treinos.
                </div>
                <div class="criteria-item">
                  <strong>Dado que</strong> tenho treinos registrados,<br />
                  <strong>Quando</strong> eu visualizar meu histórico de treinos,<br />
                  <strong>Então</strong> devo ver um gráfico mostrando meu progresso ao longo do tempo.
                </div>
              </div>
            </div>
          </div>

          <div class="story">
            <div class="story-header">História #2</div>
            <div class="story-content">
              <p><strong>Como</strong> usuário do aplicativo de fitness,</p>
              <p><strong>Eu quero</strong> definir metas de exercícios semanais,</p>
              <p><strong>Para que</strong> eu possa me manter motivado e atingir meus objetivos de condicionamento físico.</p>
            </div>
            <div>
              <strong>Critérios de Aceitação:</strong>
              <div class="criteria-list">
                <div class="criteria-item">
                  <strong>Dado que</strong> estou na seção "Metas" do aplicativo,<br />
                  <strong>Quando</strong> eu clicar em "Definir Nova Meta",<br />
                  <strong>Então</strong> devo poder especificar o tipo de exercício, frequência semanal e duração.
                </div>
                <div class="criteria-item">
                  <strong>Dado que</strong> defini uma meta semanal,<br />
                  <strong>Quando</strong> eu completar um treino relacionado a essa meta,<br />
                  <strong>Então</strong> o aplicativo deve atualizar automaticamente meu progresso em relação à meta.
                </div>
                <div class="criteria-item">
                  <strong>Dado que</strong> estou próximo de atingir minha meta semanal,<br />
                  <strong>Quando</strong> eu atingir 80% da meta,<br />
                  <strong>Então</strong> devo receber uma notificação de incentivo.
                </div>
              </div>
            </div>
          </div>

          <div class="story">
            <div class="story-header">História #3</div>
            <div class="story-content">
              <p><strong>Como</strong> usuário do aplicativo de fitness,</p>
              <p><strong>Eu quero</strong> conectar meu dispositivo wearable ao aplicativo,</p>
              <p><strong>Para que</strong> meus dados de atividade física sejam sincronizados automaticamente.</p>
            </div>
            <div>
              <strong>Critérios de Aceitação:</strong>
              <div class="criteria-list">
                <div class="criteria-item">
                  <strong>Dado que</strong> estou na seção "Configurações" do aplicativo,<br />
                  <strong>Quando</strong> eu selecionar "Conectar Dispositivo",<br />
                  <strong>Então</strong> devo ver uma lista de dispositivos compatíveis.
                </div>
                <div class="criteria-item">
                  <strong>Dado que</strong> selecionei meu dispositivo na lista,<br />
                  <strong>Quando</strong> eu seguir as instruções de pareamento,<br />
                  <strong>Então</strong> meu dispositivo deve ser conectado com sucesso ao aplicativo.
                </div>
                <div class="criteria-item">
                  <strong>Dado que</strong> meu dispositivo está conectado,<br />
                  <strong>Quando</strong> eu completar uma atividade física usando o dispositivo,<br />
                  <strong>Então</strong> os dados devem ser sincronizados automaticamente com o aplicativo.
                </div>
              </div>
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

  // Função para baixar o exemplo de requisitos
  const handleDownloadRequirements = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Exemplo de Requisitos - Sistema de E-commerce</title>
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
          }
          .requirement-content {
            margin-bottom: 15px;
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
            <h1>Exemplo de Requisitos - Sistema de E-commerce</h1>
          </div>
          
          <div class="requirement functional">
            <div class="requirement-header">REQ-1: Funcional</div>
            <div class="requirement-content">
              <p><strong>Categoria:</strong> Usuário</p>
              <p><strong>Descrição:</strong> O sistema deve permitir que os usuários pesquisem produtos por nome, categoria, preço e avaliação.</p>
              <p><strong>Prioridade:</strong> Alta</p>
              <p><strong>Observações:</strong> A pesquisa deve retornar resultados em menos de 2 segundos e suportar filtros combinados.</p>
            </div>
          </div>

          <div class="requirement non-functional">
            <div class="requirement-header">REQ-2: Não-Funcional</div>
            <div class="requirement-content">
              <p><strong>Categoria:</strong> Desempenho</p>
              <p><strong>Descrição:</strong> O sistema deve suportar até 10.000 usuários simultâneos sem degradação de desempenho.</p>
              <p><strong>Prioridade:</strong> Alta</p>
              <p><strong>Observações:</strong> Deve ser implementado balanceamento de carga e cache para garantir a escalabilidade.</p>
            </div>
          </div>

          <div class="requirement functional">
            <div class="requirement-header">REQ-3: Funcional</div>
            <div class="requirement-content">
              <p><strong>Categoria:</strong> Carrinho de Compras</p>
              <p><strong>Descrição:</strong> O sistema deve permitir que os usuários adicionem produtos ao carrinho, atualizem quantidades e removam itens.</p>
              <p><strong>Prioridade:</strong> Alta</p>
              <p><strong>Observações:</strong> O carrinho deve persistir mesmo se o usuário fechar o navegador e retornar mais tarde.</p>
            </div>
          </div>

          <div class="requirement non-functional">
            <div class="requirement-header">REQ-4: Não-Funcional</div>
            <div class="requirement-content">
              <p><strong>Categoria:</strong> Segurança</p>
              <p><strong>Descrição:</strong> O sistema deve criptografar todos os dados de pagamento usando padrão PCI DSS.</p>
              <p><strong>Prioridade:</strong> Alta</p>
              <p><strong>Observações:</strong> Deve incluir proteção contra ataques de injeção SQL e XSS.</p>
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

  // Função para baixar o template de entrevista
  const handleDownloadInterview = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Template de Entrevista para Levantamento de Requisitos</title>
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
          .question {
            margin-bottom: 15px;
          }
          .answer-box {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            min-height: 60px;
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
            <h1>Template de Entrevista para Levantamento de Requisitos</h1>
          </div>
          
          <div class="section">
            <div class="section-title">Informações da Entrevista</div>
            <div class="grid">
              <div>
                <p><strong>Projeto:</strong></p>
                <div class="answer-box"></div>
              </div>
              <div>
                <p><strong>Data:</strong></p>
                <div class="answer-box"></div>
              </div>
              <div>
                <p><strong>Entrevistado:</strong></p>
                <div class="answer-box"></div>
              </div>
              <div>
                <p><strong>Entrevistador:</strong></p>
                <div class="answer-box"></div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Perguntas Introdutórias</div>
            <div class="question">
              <p><strong>1. Qual é o seu papel na empresa e suas principais responsabilidades?</strong></p>
              <div class="answer-box"></div>
            </div>
            <div class="question">
              <p><strong>2. Como você descreve o processo atual que estamos analisando?</strong></p>
              <div class="answer-box"></div>
            </div>
            <div class="question">
              <p><strong>3. Quais são os principais objetivos que você espera alcançar com este projeto?</strong></p>
              <div class="answer-box"></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Perguntas sobre Necessidades e Problemas</div>
            <div class="question">
              <p><strong>4. Quais são os principais desafios que você enfrenta no processo atual?</strong></p>
              <div class="answer-box"></div>
            </div>
            <div class="question">
              <p><strong>5. Quais funcionalidades você considera essenciais em um novo sistema?</strong></p>
              <div class="answer-box"></div>
            </div>
            <div class="question">
              <p><strong>6. Existe algum sistema ou solução que você conhece e admira? Por quê?</strong></p>
              <div class="answer-box"></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Perguntas sobre Expectativas e Métricas</div>
            <div class="question">
              <p><strong>7. Como você mediria o sucesso do novo sistema?</strong></p>
              <div class="answer-box"></div>
            </div>
            <div class="question">
              <p><strong>8. Quais são suas expectativas em termos de prazo para implementação?</strong></p>
              <div class="answer-box"></div>
            </div>
            <div class="question">
              <p><strong>9. Há alguma restrição ou limitação que devemos considerar?</strong></p>
              <div class="answer-box"></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Observações Adicionais</div>
            <div class="answer-box" style="min-height: 120px;"></div>
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

  // Função para baixar o template de refinamento
  const handleDownloadRefinement = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Template de Refinamento de Histórias</title>
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
          .story-box {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            margin-bottom: 15px;
          }
          .answer-box {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            min-height: 60px;
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
            <h1>Template de Refinamento de Histórias</h1>
          </div>
          
          <div class="section">
            <div class="section-title">Informações da Sessão de Refinamento</div>
            <div class="grid">
              <div>
                <p><strong>Projeto:</strong></p>
                <div class="answer-box"></div>
              </div>
              <div>
                <p><strong>Data:</strong></p>
                <div class="answer-box"></div>
              </div>
              <div>
                <p><strong>Participantes:</strong></p>
                <div class="answer-box"></div>
              </div>
              <div>
                <p><strong>Sprint Alvo:</strong></p>
                <div class="answer-box"></div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">História Original (Épico)</div>
            <div class="story-box">
              <p><strong>Como:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Eu quero:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Para que:</strong></p>
              <div class="answer-box"></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Análise e Refinamento</div>
            <p><strong>Clarificação do Valor para o Usuário:</strong></p>
            <div class="answer-box"></div>
            <p><strong>Questões Levantadas:</strong></p>
            <div class="answer-box"></div>
            <p><strong>Dependências Identificadas:</strong></p>
            <div class="answer-box"></div>
          </div>

          <div class="section">
            <div class="section-title">Histórias Refinadas</div>
            
            <div class="story-box">
              <p><strong>História 1:</strong></p>
              <p><strong>Como:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Eu quero:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Para que:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Critérios de Aceitação:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Estimativa:</strong></p>
              <div class="answer-box"></div>
            </div>
            
            <div class="story-box">
              <p><strong>História 2:</strong></p>
              <p><strong>Como:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Eu quero:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Para que:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Critérios de Aceitação:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Estimativa:</strong></p>
              <div class="answer-box"></div>
            </div>
            
            <div class="story-box">
              <p><strong>História 3:</strong></p>
              <p><strong>Como:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Eu quero:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Para que:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Critérios de Aceitação:</strong></p>
              <div class="answer-box"></div>
              <p><strong>Estimativa:</strong></p>
              <div class="answer-box"></div>
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <PageHeader
        title="Exemplos de Templates Preenchidos"
        description="Modelos completos para inspirar seus próprios documentos"
      />

      <main className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Link href="/semana4/templates">
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Templates
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Exemplo de Histórias de Usuário - Aplicativo de Fitness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-md p-4 mb-4">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">História #1</h3>
                  <div className="mt-2 bg-slate-50 p-3 rounded-md">
                    <p>
                      <strong>Como</strong> usuário do aplicativo de fitness,
                    </p>
                    <p>
                      <strong>Eu quero</strong> registrar meus treinos diários,
                    </p>
                    <p>
                      <strong>Para que</strong> eu possa acompanhar meu progresso ao longo do tempo.
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="font-medium">Critérios de Aceitação:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-2">
                      <li>
                        <strong>Dado que</strong> estou logado no aplicativo,
                        <br />
                        <strong>Quando</strong> eu acessar a seção "Meus Treinos" e clicar em "Adicionar Treino",
                        <br />
                        <strong>Então</strong> devo poder selecionar o tipo de exercício, duração, intensidade e data.
                      </li>
                      <li>
                        <strong>Dado que</strong> preenchi os detalhes do meu treino,
                        <br />
                        <strong>Quando</strong> eu clicar em "Salvar",
                        <br />
                        <strong>Então</strong> o treino deve ser registrado e aparecer na minha lista de treinos.
                      </li>
                      <li>
                        <strong>Dado que</strong> tenho treinos registrados,
                        <br />
                        <strong>Quando</strong> eu visualizar meu histórico de treinos,
                        <br />
                        <strong>Então</strong> devo ver um gráfico mostrando meu progresso ao longo do tempo.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium">História #2</h3>
                  <div className="mt-2 bg-slate-50 p-3 rounded-md">
                    <p>
                      <strong>Como</strong> usuário do aplicativo de fitness,
                    </p>
                    <p>
                      <strong>Eu quero</strong> definir metas de exercícios semanais,
                    </p>
                    <p>
                      <strong>Para que</strong> eu possa me manter motivado e atingir meus objetivos de condicionamento
                      físico.
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="font-medium">Critérios de Aceitação:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-2">
                      <li>
                        <strong>Dado que</strong> estou na seção "Metas" do aplicativo,
                        <br />
                        <strong>Quando</strong> eu clicar em "Definir Nova Meta",
                        <br />
                        <strong>Então</strong> devo poder especificar o tipo de exercício, frequência semanal e duração.
                      </li>
                      <li>
                        <strong>Dado que</strong> defini uma meta semanal,
                        <br />
                        <strong>Quando</strong> eu completar um treino relacionado a essa meta,
                        <br />
                        <strong>Então</strong> o aplicativo deve atualizar automaticamente meu progresso em relação à
                        meta.
                      </li>
                      <li>
                        <strong>Dado que</strong> estou próximo de atingir minha meta semanal,
                        <br />
                        <strong>Quando</strong> eu atingir 80% da meta,
                        <br />
                        <strong>Então</strong> devo receber uma notificação de incentivo.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">História #3</h3>
                  <div className="mt-2 bg-slate-50 p-3 rounded-md">
                    <p>
                      <strong>Como</strong> usuário do aplicativo de fitness,
                    </p>
                    <p>
                      <strong>Eu quero</strong> conectar meu dispositivo wearable ao aplicativo,
                    </p>
                    <p>
                      <strong>Para que</strong> meus dados de atividade física sejam sincronizados automaticamente.
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="font-medium">Critérios de Aceitação:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-2">
                      <li>
                        <strong>Dado que</strong> estou na seção "Configurações" do aplicativo,
                        <br />
                        <strong>Quando</strong> eu selecionar "Conectar Dispositivo",
                        <br />
                        <strong>Então</strong> devo ver uma lista de dispositivos compatíveis.
                      </li>
                      <li>
                        <strong>Dado que</strong> selecionei meu dispositivo na lista,
                        <br />
                        <strong>Quando</strong> eu seguir as instruções de pareamento,
                        <br />
                        <strong>Então</strong> meu dispositivo deve ser conectado com sucesso ao aplicativo.
                      </li>
                      <li>
                        <strong>Dado que</strong> meu dispositivo está conectado,
                        <br />
                        <strong>Quando</strong> eu completar uma atividade física usando o dispositivo,
                        <br />
                        <strong>Então</strong> os dados devem ser sincronizados automaticamente com o aplicativo.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button className="gap-2" onClick={handleDownloadUserStories}>
                  <Download className="h-4 w-4" />
                  Baixar Exemplo Completo (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exemplo de Requisitos - Sistema de E-commerce</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-md p-4 mb-4">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">REQ-1: Funcional</h3>
                  <div className="mt-2 bg-blue-50 p-3 rounded-md">
                    <p>
                      <strong>Categoria:</strong> Usuário
                    </p>
                    <p>
                      <strong>Descrição:</strong> O sistema deve permitir que os usuários pesquisem produtos por nome,
                      categoria, preço e avaliação.
                    </p>
                    <p>
                      <strong>Prioridade:</strong> Alta
                    </p>
                    <p>
                      <strong>Observações:</strong> A pesquisa deve retornar resultados em menos de 2 segundos e
                      suportar filtros combinados.
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium">REQ-2: Não-Funcional</h3>
                  <div className="mt-2 bg-pink-50 p-3 rounded-md">
                    <p>
                      <strong>Categoria:</strong> Desempenho
                    </p>
                    <p>
                      <strong>Descrição:</strong> O sistema deve suportar até 10.000 usuários simultâneos sem degradação
                      de desempenho.
                    </p>
                    <p>
                      <strong>Prioridade:</strong> Alta
                    </p>
                    <p>
                      <strong>Observações:</strong> Deve ser implementado balanceamento de carga e cache para garantir a
                      escalabilidade.
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium">REQ-3: Funcional</h3>
                  <div className="mt-2 bg-blue-50 p-3 rounded-md">
                    <p>
                      <strong>Categoria:</strong> Carrinho de Compras
                    </p>
                    <p>
                      <strong>Descrição:</strong> O sistema deve permitir que os usuários adicionem produtos ao
                      carrinho, atualizem quantidades e removam itens.
                    </p>
                    <p>
                      <strong>Prioridade:</strong> Alta
                    </p>
                    <p>
                      <strong>Observações:</strong> O carrinho deve persistir mesmo se o usuário fechar o navegador e
                      retornar mais tarde.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">REQ-4: Não-Funcional</h3>
                  <div className="mt-2 bg-pink-50 p-3 rounded-md">
                    <p>
                      <strong>Categoria:</strong> Segurança
                    </p>
                    <p>
                      <strong>Descrição:</strong> O sistema deve criptografar todos os dados de pagamento usando padrão
                      PCI DSS.
                    </p>
                    <p>
                      <strong>Prioridade:</strong> Alta
                    </p>
                    <p>
                      <strong>Observações:</strong> Deve incluir proteção contra ataques de injeção SQL e XSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button className="gap-2" onClick={handleDownloadRequirements}>
                  <Download className="h-4 w-4" />
                  Baixar Exemplo Completo (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Template de Entrevista para Levantamento de Requisitos</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Informações da Entrevista</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Projeto:</p>
                  <p className="text-sm">Sistema de Gestão de Vendas</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Data:</p>
                  <p className="text-sm">15/05/2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Entrevistado:</p>
                  <p className="text-sm">João Silva - Gerente de Vendas</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Entrevistador:</p>
                  <p className="text-sm">Maria Souza - Product Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Perguntas Introdutórias</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">
                    1. Qual é o seu papel na empresa e suas principais responsabilidades?
                  </p>
                  <p className="text-sm bg-white p-2 rounded mt-1">
                    Sou Gerente de Vendas, responsável por uma equipe de 12 vendedores. Minhas principais
                    responsabilidades incluem definir metas de vendas, acompanhar o desempenho da equipe, analisar
                    relatórios e identificar oportunidades de melhoria no processo de vendas.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">2. Como você descreve o processo atual de vendas?</p>
                  <p className="text-sm bg-white p-2 rounded mt-1">
                    Atualmente, usamos uma combinação de planilhas Excel e um sistema legado para registrar vendas. Os
                    vendedores preenchem formulários em papel que depois são digitados no sistema. Relatórios são
                    gerados manualmente ao final de cada semana.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Perguntas sobre Necessidades e Problemas</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">
                    3. Quais são os principais desafios que você enfrenta no processo atual?
                  </p>
                  <p className="text-sm bg-white p-2 rounded mt-1">
                    O processo atual é muito manual e propenso a erros. Perdemos muito tempo digitando dados, há
                    duplicação de informações e os relatórios não são gerados em tempo real. Também temos dificuldade em
                    acompanhar o histórico de interações com clientes e o pipeline de vendas.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    4. Quais funcionalidades você considera essenciais em um novo sistema?
                  </p>
                  <p className="text-sm bg-white p-2 rounded mt-1">
                    Precisamos de um dashboard em tempo real, registro automático de vendas, integração com nosso CRM,
                    histórico completo de clientes, alertas para oportunidades de up-selling e cross-selling, e
                    relatórios personalizáveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Perguntas sobre Expectativas e Métricas</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">5. Como você mediria o sucesso do novo sistema?</p>
                  <p className="text-sm bg-white p-2 rounded mt-1">
                    Redução de 50% no tempo gasto em tarefas administrativas, aumento de 20% na taxa de conversão de
                    leads, visibilidade completa do pipeline de vendas e capacidade de gerar relatórios em minutos em
                    vez de horas.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    6. Quais são suas expectativas em termos de prazo para implementação?
                  </p>
                  <p className="text-sm bg-white p-2 rounded mt-1">
                    Gostaríamos de ter o sistema básico funcionando em 3 meses, com funcionalidades adicionais sendo
                    implementadas nos 3 meses seguintes. É crucial que tenhamos o dashboard e o registro de vendas na
                    primeira fase.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button className="gap-2" onClick={handleDownloadInterview}>
              <Download className="h-4 w-4" />
              Baixar Template de Entrevista (PDF)
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Template de Refinamento de Histórias</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Informações da Sessão de Refinamento</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Projeto:</p>
                  <p className="text-sm">Aplicativo de Delivery de Comida</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Data:</p>
                  <p className="text-sm">22/05/2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Participantes:</p>
                  <p className="text-sm">Product Owner, Scrum Master, 3 Desenvolvedores, 1 Designer UX</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Sprint Alvo:</p>
                  <p className="text-sm">Sprint 8 (01/06 - 15/06)</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">História Original</h3>
              <div className="bg-white p-3 rounded-md border border-slate-200">
                <p className="italic">
                  "Como cliente, quero poder rastrear meu pedido em tempo real para saber quando ele chegará."
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Análise e Refinamento</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Clarificação do Valor para o Usuário:</p>
                  <p className="text-sm bg-white p-2 rounded mt-1">
                    O cliente quer reduzir a ansiedade sobre quando o pedido chegará, planejar seu tempo e estar
                    disponível para receber o entregador.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Questões Levantadas:</p>
                  <ul className="list-disc pl-6 text-sm bg-white p-2 rounded mt-1">
                    <li>Como será obtida a localização do entregador?</li>
                    <li>Com que frequência a localização será atualizada?</li>
                    <li>O cliente deve receber notificações de mudanças de status?</li>
                    <li>Quais status de pedido devem ser exibidos?</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">Dependências Identificadas:</p>
                  <ul className="list-disc pl-6 text-sm bg-white p-2 rounded mt-1">
                    <li>Integração com serviço de geolocalização</li>
                    <li>Sistema de notificações push</li>
                    <li>API do parceiro de entrega</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Histórias Refinadas</h3>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="font-medium">História 1:</p>
                  <p className="italic mt-1">
                    "Como cliente, quero visualizar o status atual do meu pedido (preparando, a caminho, entregue), para
                    que eu saiba em que etapa ele está."
                  </p>
                  <div className="mt-2">
                    <p className="text-xs font-medium">Critérios de Aceitação:</p>
                    <ul className="list-disc pl-5 text-xs mt-1">
                      <li>O status do pedido deve ser atualizado em tempo real</li>
                      <li>Cada status deve ter uma descrição clara e um ícone visual</li>
                      <li>O histórico de status deve ser visível</li>
                    </ul>
                  </div>
                  <p className="text-xs mt-2">
                    <strong>Estimativa:</strong> 3 pontos | <strong>Prioridade:</strong> Alta
                  </p>
                </div>

                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="font-medium">História 2:</p>
                  <p className="italic mt-1">
                    "Como cliente, quero ver a localização do entregador em um mapa, para que eu possa estimar quando
                    ele chegará."
                  </p>
                  <div className="mt-2">
                    <p className="text-xs font-medium">Critérios de Aceitação:</p>
                    <ul className="list-disc pl-5 text-xs mt-1">
                      <li>O mapa deve mostrar a localização do entregador e do cliente</li>
                      <li>A localização deve ser atualizada a cada 30 segundos</li>
                      <li>Deve haver uma estimativa de tempo de chegada</li>
                    </ul>
                  </div>
                  <p className="text-xs mt-2">
                    <strong>Estimativa:</strong> 5 pontos | <strong>Prioridade:</strong> Média
                  </p>
                </div>

                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="font-medium">História 3:</p>
                  <p className="italic mt-1">
                    "Como cliente, quero receber notificações push quando o status do meu pedido mudar, para que eu seja
                    informado mesmo quando não estiver com o aplicativo aberto."
                  </p>
                  <div className="mt-2">
                    <p className="text-xs font-medium">Critérios de Aceitação:</p>
                    <ul className="list-disc pl-5 text-xs mt-1">
                      <li>Notificações devem ser enviadas para cada mudança de status</li>
                      <li>O cliente deve poder ativar/desativar as notificações</li>
                      <li>Ao tocar na notificação, o aplicativo deve abrir na tela de rastreamento</li>
                    </ul>
                  </div>
                  <p className="text-xs mt-2">
                    <strong>Estimativa:</strong> 3 pontos | <strong>Prioridade:</strong> Baixa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button className="gap-2" onClick={handleDownloadRefinement}>
              <Download className="h-4 w-4" />
              Baixar Template de Refinamento (PDF)
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Template de Elicitação de Requisitos</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Informações do Projeto</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Nome do Projeto:</p>
                  <p className="text-sm">Sistema de Agendamento de Consultas Médicas</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Data de Início:</p>
                  <p className="text-sm">01/06/2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Stakeholders Principais:</p>
                  <p className="text-sm">Médicos, Pacientes, Recepcionistas, Administradores</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Product Owner:</p>
                  <p className="text-sm">Ana Rodrigues</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Técnicas de Elicitação Utilizadas</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="font-medium">1. Entrevistas com Stakeholders</p>
                  <p className="text-sm mt-1">
                    <strong>Data:</strong> 05/06/2023 - 10/06/2023
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Participantes:</strong> 3 médicos, 5 pacientes, 2 recepcionistas, 1 administrador
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Resultados Principais:</strong> Identificação de fluxos de trabalho atuais, pontos de dor e
                    expectativas de cada grupo de usuários.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="font-medium">2. Observação de Campo</p>
                  <p className="text-sm mt-1">
                    <strong>Data:</strong> 12/06/2023 - 14/06/2023
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Local:</strong> Clínica Médica Central
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Resultados Principais:</strong> Documentação do processo atual de agendamento, identificação
                    de gargalos e ineficiências.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="font-medium">3. Workshop de Requisitos</p>
                  <p className="text-sm mt-1">
                    <strong>Data:</strong> 20/06/2023
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Participantes:</strong> Representantes de todos os grupos de stakeholders
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Resultados Principais:</strong> Priorização de requisitos, resolução de conflitos entre
                    necessidades de diferentes stakeholders.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Requisitos Elicitados</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="font-medium">Requisitos Funcionais</p>
                  <table className="min-w-full text-sm mt-2">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="py-2 px-3 text-left">ID</th>
                        <th className="py-2 px-3 text-left">Descrição</th>
                        <th className="py-2 px-3 text-left">Fonte</th>
                        <th className="py-2 px-3 text-left">Prioridade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-3 border-t">RF-01</td>
                        <td className="py-2 px-3 border-t">
                          O sistema deve permitir que pacientes agendem consultas online
                        </td>
                        <td className="py-2 px-3 border-t">Entrevistas com pacientes</td>
                        <td className="py-2 px-3 border-t">Alta</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border-t">RF-02</td>
                        <td className="py-2 px-3 border-t">
                          Médicos devem poder visualizar sua agenda diária/semanal/mensal
                        </td>
                        <td className="py-2 px-3 border-t">Entrevistas com médicos</td>
                        <td className="py-2 px-3 border-t">Alta</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border-t">RF-03</td>
                        <td className="py-2 px-3 border-t">
                          O sistema deve enviar lembretes de consulta por e-mail/SMS
                        </td>
                        <td className="py-2 px-3 border-t">Workshop</td>
                        <td className="py-2 px-3 border-t">Média</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-white p-3 rounded-md border border-slate-200">
                  <p className="font-medium">Requisitos Não-Funcionais</p>
                  <table className="min-w-full text-sm mt-2">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="py-2 px-3 text-left">ID</th>
                        <th className="py-2 px-3 text-left">Descrição</th>
                        <th className="py-2 px-3 text-left">Fonte</th>
                        <th className="py-2 px-3 text-left">Prioridade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-3 border-t">RNF-01</td>
                        <td className="py-2 px-3 border-t">O sistema deve estar disponível 99.9% do tempo</td>
                        <td className="py-2 px-3 border-t">Administrador</td>
                        <td className="py-2 px-3 border-t">Alta</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border-t">RNF-02</td>
                        <td className="py-2 px-3 border-t">
                          Dados dos pacientes devem ser criptografados conforme LGPD
                        </td>
                        <td className="py-2 px-3 border-t">Requisitos legais</td>
                        <td className="py-2 px-3 border-t">Alta</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border-t">RNF-03</td>
                        <td className="py-2 px-3 border-t">Interface deve ser responsiva para dispositivos móveis</td>
                        <td className="py-2 px-3 border-t">Entrevistas com pacientes</td>
                        <td className="py-2 px-3 border-t">Média</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button className="gap-2" onClick={handleDownloadInterview}>
              <Download className="h-4 w-4" />
              Baixar Template de Elicitação (PDF)
            </Button>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/semana4/templates">
            <Button className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Templates
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
