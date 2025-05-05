import type { ReactNode } from "react"

export default function Semana5Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-3">{children}</main>
    </div>
  )
}
