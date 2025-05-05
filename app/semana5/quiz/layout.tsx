import type { ReactNode } from "react"

export default function QuizLayout({ children }: { children: ReactNode }) {
  return <div className="quiz-container">{children}</div>
}
