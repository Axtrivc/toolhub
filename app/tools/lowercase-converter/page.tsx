import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { LowercaseConverterClient } from '@/components/texttools/batchTextTools'
import { LowercaseConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('lowercase-converter')

export default function Page() {
  const tool = getTool('lowercase-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('lowercase-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <LowercaseConverterClient />
        <LowercaseConverterContent />
      </ToolLayout>
    </>
  )
}
