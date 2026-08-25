import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TokenVisualizerClient } from '@/components/tools/batch17AITools'
import { TokenVisualizerContent } from './content'

export const metadata: Metadata = buildToolMetadata('token-visualizer')

export default function TokenVisualizerPage() {
  const tool = getTool('token-visualizer')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('token-visualizer')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TokenVisualizerClient />
        <TokenVisualizerContent />
      </ToolLayout>
    </>
  )
}
