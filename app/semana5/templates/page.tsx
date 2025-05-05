import PageHeader from "@/components/page-header"
import Link from "next/link"

export default function Templates() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="Templates - Semana 5: Qualidade de Software e Gestão de Releases" description="" />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/semana5" className="text-blue-600 hover:underline flex items-center">
            ← Voltar para Semana 5
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Template 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Plano de Release</h2>
            <p className="text-gray-600 mb-4">
              Template interativo para criar um plano de release completo, incluindo cronograma, funcionalidades,
              critérios de aceitação e estratégia de lançamento.
            </p>
            <Link
              href="/semana5/templates/interactive-release-plan"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Acessar Template
            </Link>
          </div>

          {/* Template 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Plano de Testes</h2>
            <p className="text-gray-600 mb-4">
              Template para documentar estratégias de teste, casos de teste, critérios de aceitação e processos de
              homologação.
            </p>
            <Link
              href="/semana5/templates/interactive-test-plan"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Acessar Template
            </Link>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-2">Templates para Download</h2>
          <p className="text-gray-700 mb-4">
            Além dos templates interativos, disponibilizamos versões para download que podem ser utilizadas em suas
            ferramentas preferidas.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Plano de Release (XLSX)
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Plano de Testes (DOCX)
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Checklist de Qualidade (PDF)
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Modelo de Documentação de Release (DOCX)
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Template de Relatório de Bugs (XLSX)
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Exemplos Preenchidos</h2>
          <p className="text-gray-700 mb-4">
            Para ajudar na compreensão de como utilizar os templates, disponibilizamos exemplos preenchidos baseados em
            casos reais.
          </p>
          <Link
            href="/semana5/templates/exemplos"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Ver Exemplos
          </Link>
        </div>
      </main>
    </div>
  )
}
