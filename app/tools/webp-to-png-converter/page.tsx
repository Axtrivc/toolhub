import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WebpToPngConverterClient } from '@/components/webtools/WebpToPngConverterClient'
import { WebpToPngConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('webp-to-png-converter')

export default function Page() {
  const tool = getTool('webp-to-png-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('webp-to-png-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('webp-to-png-converter')}>
        <WebpToPngConverterClient />
        <WebpToPngConverterContent />
      </ToolLayout>
    </>
  )
}
