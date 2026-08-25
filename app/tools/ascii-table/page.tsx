import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { AsciiTableClient } from '@/components/tools/batch12bTools'
import { AsciiTableContent } from './content'

export const metadata: Metadata = buildToolMetadata('ascii-table')

export default function AsciiTablePage() {
  const tool = getTool('ascii-table')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ascii-table')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <AsciiTableClient />
        <AsciiTableContent />
      </ToolLayout>
    </>
  )
}
