import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ToolsBuilderClient } from '@/components/tools/batch16AITools'
import { OpenaiToolsBuilderContent } from './content'

export const metadata: Metadata = buildToolMetadata('openai-tools-builder')

export default function OpenaiToolsBuilderPage() {
  const tool = getTool('openai-tools-builder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('openai-tools-builder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ToolsBuilderClient />
        <OpenaiToolsBuilderContent />
      </ToolLayout>
    </>
  )
}
