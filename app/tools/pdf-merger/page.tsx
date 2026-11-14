import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PdfMergerClient } from '@/components/tools/speechPdfTools'
import { PdfMergerContent } from './content'

export const metadata: Metadata = buildToolMetadata('pdf-merger')

export default function PdfMergerPage() {
  const tool = getTool('pdf-merger')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('pdf-merger')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('pdf-merger')}>
        <PdfMergerClient />
        <PdfMergerContent />
      </ToolLayout>
    </>
  )
}
