interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
            <p className="text-slate-600 mt-1">{description}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
