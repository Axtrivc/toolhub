import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { Rot13ConverterClient } from '@/components/tools/batch32Tools'
import { Rot13ConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('rot13-converter')

export default function Rot13ConverterPage() {
  const tool = getTool('rot13-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('rot13-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('rot13-converter')}>
        <Rot13ConverterClient />
        <Rot13ConverterContent />
      </ToolLayout>
    </>
  )
}
