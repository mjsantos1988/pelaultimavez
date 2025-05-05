import type React from "react"
export default function SlidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="slides-container">{children}</div>
}
