import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { WebpToPngConverterClient } from '@/components/webtools/WebpToPngConverterClient'
import { WebpToPngConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('webp-to-png-converter')

export default function Page() {
  const tool = getTool('webp-to-png-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('webp-to-png-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <WebpToPngConverterClient />
        <WebpToPngConverterContent />
      </ToolLayout>
    </>
  )
}
