import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ImageResizerClient } from '@/components/webtools/ImageResizerClient'
import { ImageResizerContent } from './content'

export const metadata: Metadata = buildToolMetadata('image-resizer')

export default function Page() {
  const tool = getTool('image-resizer')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('image-resizer')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ImageResizerClient />
        <ImageResizerContent />
      </ToolLayout>
    </>
  )
}
