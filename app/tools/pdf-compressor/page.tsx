import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PdfCompressorClient } from '@/components/tools/speechPdfTools'
import { PdfCompressorContent } from './content'

export const metadata: Metadata = buildToolMetadata('pdf-compressor')

export default function PdfCompressorPage() {
  const tool = getTool('pdf-compressor')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('pdf-compressor')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('pdf-compressor')}>
        <PdfCompressorClient />
        <PdfCompressorContent />
      </ToolLayout>
    </>
  )
}
