import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { OpenGraphGeneratorClient } from '@/components/webtools/OpenGraphGeneratorClient'
import { OpenGraphGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('open-graph-generator')

export default function Page() {
  const tool = getTool('open-graph-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('open-graph-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <OpenGraphGeneratorClient />
        <OpenGraphGeneratorContent />
      </ToolLayout>
    </>
  )
}
