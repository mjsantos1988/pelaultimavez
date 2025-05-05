import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Análise de Caso - Falha de Release | Curso Product Owner",
  description: "Template interativo para análise de casos de falha em releases de software",
}

export default function InteractiveCaseAnalysisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
