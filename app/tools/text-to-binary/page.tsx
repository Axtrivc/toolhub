import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TextToBinaryClient } from '@/components/texttools/batch5TextTools'
import { TextToBinaryContent } from './content'

export const metadata: Metadata = buildToolMetadata('text-to-binary')

export default function Page() {
  const tool = getTool('text-to-binary')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('text-to-binary')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TextToBinaryClient />
        <TextToBinaryContent />
      </ToolLayout>
    </>
  )
}
