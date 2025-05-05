import ClientLayout from "../../components/client-layout"
import type { ReactNode } from "react"

export default function ExamplesLayout({ children }: { children: ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}
