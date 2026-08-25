import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CookingConverterClient } from '@/components/tools/batch10Tools'
import { CookingConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('cooking-converter')

export default function CookingConverterPage() {
  const tool = getTool('cooking-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('cooking-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CookingConverterClient />
        <CookingConverterContent />
      </ToolLayout>
    </>
  )
}
