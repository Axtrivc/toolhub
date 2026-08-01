import Link from 'next/link'
import { getPublishedTools } from '@/lib/tools'

export default function NotFound() {
  const tools = getPublishedTools()
  const popular = tools.slice(0, 6)

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-7xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-3xl font-bold" style={{ color: 'rgb(var(--text))' }}>Page not found</h1>
      <p className="mt-3 max-w-md" style={{ color: 'rgb(var(--text-muted))' }}>
        We couldn&apos;t find that page. It may have been moved or never existed. Try one of our
        popular tools instead:
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {popular.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}/`}
            className="group rounded-lg border p-4 text-left transition hover:border-brand-300"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundColor: 'rgb(var(--bg-card))',
            }}
          >
            <div className="font-semibold group-hover:text-brand-600" style={{ color: 'rgb(var(--text))' }}>
              {tool.name}
            </div>
            <div className="mt-1 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
              {tool.shortIntro}
            </div>
          </Link>
        ))}
      </div>

      <Link href="/" className="btn btn-primary mt-8">
        ← Back to all tools
      </Link>
    </div>
  )
}
