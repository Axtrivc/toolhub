import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TextToListClient } from '@/components/texttools/batch3TextTools'
import { TextToListContent } from './content'

export const metadata: Metadata = buildToolMetadata('text-to-list')

export default function Page() {
  const tool = getTool('text-to-list')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('text-to-list')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TextToListClient />
        <TextToListContent />
      </ToolLayout>
    </>
  )
}
