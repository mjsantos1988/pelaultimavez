import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function TemplatesExemplos() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="Exemplos de Templates" description="Exemplos preenchidos dos templates disponíveis" />

      <div className="container mx-auto px-4 mb-8">
        <Link href="/semana5/templates" className="text-blue-600 hover:underline flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Voltar para Templates
        </Link>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Plano de Release</CardTitle>
              <CardDescription>Exemplo de um plano de release completo para um aplicativo móvel</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Este exemplo mostra um plano de release para a versão 2.0 de um aplicativo móvel, incluindo
                funcionalidades, critérios de qualidade, riscos e planos de comunicação.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/semana5/templates/exemplos/release-plan-exemplo" className="text-blue-600 hover:underline">
                Ver exemplo completo
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plano de Testes</CardTitle>
              <CardDescription>Exemplo de um plano de testes para um e-commerce</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Este exemplo demonstra um plano de testes completo para um site de e-commerce, incluindo casos de teste,
                critérios de aceitação e cronograma.
              </p>
            </CardContent>
            <CardFooter>
              <span className="text-gray-400 text-sm">Em breve</span>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Análise de Caso</CardTitle>
              <CardDescription>Exemplo de análise de caso para um produto digital</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Este exemplo mostra uma análise detalhada de um caso de produto digital, incluindo contexto, problemas,
                soluções e resultados.
              </p>
            </CardContent>
            <CardFooter>
              <span className="text-gray-400 text-sm">Em breve</span>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
