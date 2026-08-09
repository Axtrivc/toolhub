import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CodeBeautifierClient } from '@/components/devtools/CodeBeautifierClient'
import { CodeBeautifierContent } from './content'

export const metadata: Metadata = buildToolMetadata('code-beautifier')

export default function Page() {
  const tool = getTool('code-beautifier')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('code-beautifier')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CodeBeautifierClient />
        <CodeBeautifierContent />
      </ToolLayout>
    </>
  )
}
