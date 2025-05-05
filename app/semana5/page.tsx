"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"
import Footer from "@/components/footer"
import Link from "next/link"
import ClientLayout from "@/components/client-layout"
import { useState } from "react"

export default function Semana5Page() {
  const [activeTab, setActiveTab] = useState("day1")

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="Semana 5: Qualidade de Software e Gestão de Releases" description="" />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Visão Geral da Semana</h2>
          <p className="text-gray-700 mb-4">
            Nesta semana, vamos explorar os conceitos fundamentais de qualidade de software, processos de teste e
            homologação, e estratégias eficazes para gestão de releases. Você aprenderá a garantir que seu produto
            atenda aos padrões de qualidade esperados e a planejar lançamentos de forma estruturada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/semana5/slides"
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Slides das Aulas
            </Link>
            <Link
              href="/semana5/templates"
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/semana5/examples"
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Exemplos
            </Link>
            <Link
              href="/semana5/quiz"
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Quiz
            </Link>
            <Link
              href="/semana5/exercicios"
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Exercícios
            </Link>
          </div>
        </div>

        <ClientLayout>
          <Tabs defaultValue="dia1" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="dia1">Dia 1: Qualidade de Software</TabsTrigger>
              <TabsTrigger value="dia2">Dia 2: Testes e Homologação</TabsTrigger>
              <TabsTrigger value="dia3">Dia 3: Gestão de Releases</TabsTrigger>
            </TabsList>

            <TabsContent value="dia1" className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Qualidade de Software</h3>
              <p className="mb-4">
                A qualidade de software é um aspecto crítico no desenvolvimento de produtos. Neste dia, vamos explorar:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Conceitos fundamentais de qualidade de software</li>
                <li>Métricas de qualidade e como utilizá-las</li>
                <li>Padrões e normas de qualidade (ISO, CMMI, etc.)</li>
                <li>O papel do Product Owner na garantia da qualidade</li>
                <li>Técnicas de revisão e inspeção de software</li>
              </ul>
              <p className="mb-4">
                Ao final deste dia, você compreenderá como a qualidade impacta o valor do produto e como incorporar
                práticas de qualidade no ciclo de desenvolvimento.
              </p>
            </TabsContent>

            <TabsContent value="dia2" className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Testes e Homologação</h3>
              <p className="mb-4">
                Testes adequados são essenciais para garantir que o produto atenda às expectativas dos usuários. Neste
                dia, abordaremos:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Tipos de testes: unitários, integração, sistema, aceitação</li>
                <li>Estratégias de teste para produtos ágeis</li>
                <li>Critérios de aceitação e sua relação com testes</li>
                <li>Processos de homologação e validação</li>
                <li>Ferramentas e automação de testes</li>
                <li>Gestão de bugs e defeitos</li>
              </ul>
              <p className="mb-4">
                Você aprenderá a colaborar efetivamente com equipes de QA e a definir critérios claros para a aceitação
                de funcionalidades.
              </p>
            </TabsContent>

            <TabsContent value="dia3" className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Gestão de Releases</h3>
              <p className="mb-4">
                Um plano de release bem estruturado é fundamental para entregar valor de forma consistente. Neste dia,
                vamos discutir:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Estratégias de versionamento e release</li>
                <li>Planejamento de releases e roadmaps</li>
                <li>Técnicas de priorização para releases</li>
                <li>Gestão de riscos em lançamentos</li>
                <li>Comunicação e documentação de releases</li>
                <li>Métricas de sucesso para releases</li>
              </ul>
              <p className="mb-4">
                Ao final deste dia, você será capaz de criar um plano de release eficaz e alinhado com os objetivos de
                negócio.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold mb-2">Exercício Prático</h4>
                <p>
                  Desenvolva um plano de release completo para um produto, considerando aspectos de qualidade, testes e
                  estratégias de lançamento.
                  <Link href="/semana5/exercicios" className="ml-2 text-blue-600 hover:underline">
                    Ver detalhes do exercício →
                  </Link>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ClientLayout>
      </main>

      <Footer />
    </div>
  )
}
