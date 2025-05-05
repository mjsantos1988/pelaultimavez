import ClientLayout from "../../components/client-layout"
import type { ReactNode } from "react"

export default function TemplatesLayout({ children }: { children: ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}
