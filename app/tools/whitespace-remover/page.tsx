import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { WhitespaceRemoverClient } from '@/components/texttools/batchTextTools'
import { WhitespaceRemoverContent } from './content'

export const metadata: Metadata = buildToolMetadata('whitespace-remover')

export default function Page() {
  const tool = getTool('whitespace-remover')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('whitespace-remover')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <WhitespaceRemoverClient />
        <WhitespaceRemoverContent />
      </ToolLayout>
    </>
  )
}
