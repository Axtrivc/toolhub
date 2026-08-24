import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PngToWebpConverterClient } from '@/components/webtools/PngToWebpConverterClient'
import { PngToWebpConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('png-to-webp-converter')

export default function Page() {
  const tool = getTool('png-to-webp-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('png-to-webp-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PngToWebpConverterClient />
        <PngToWebpConverterContent />
      </ToolLayout>
    </>
  )
}
