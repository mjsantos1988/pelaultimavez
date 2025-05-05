import type { ReactNode } from "react"

export default function ExerciciosLayout({ children }: { children: ReactNode }) {
  // Removendo o ClientLayout que está causando a duplicação do cabeçalho
  // já que o cabeçalho já está sendo renderizado em outro nível
  return <>{children}</>
}
