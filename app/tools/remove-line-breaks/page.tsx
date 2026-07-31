import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RemoveLineBreaksClient } from '@/components/texttools/batchTextTools'
import { RemoveLineBreaksContent } from './content'

export const metadata: Metadata = buildToolMetadata('remove-line-breaks')

export default function Page() {
  const tool = getTool('remove-line-breaks')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('remove-line-breaks')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RemoveLineBreaksClient />
        <RemoveLineBreaksContent />
      </ToolLayout>
    </>
  )
}
