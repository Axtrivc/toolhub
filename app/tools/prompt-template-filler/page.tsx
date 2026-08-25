import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PromptTemplateFillerClient } from '@/components/tools/batch16AITools'
import { PromptTemplateFillerContent } from './content'

export const metadata: Metadata = buildToolMetadata('prompt-template-filler')

export default function PromptTemplateFillerPage() {
  const tool = getTool('prompt-template-filler')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('prompt-template-filler')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PromptTemplateFillerClient />
        <PromptTemplateFillerContent />
      </ToolLayout>
    </>
  )
}
