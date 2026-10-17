import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ShoeSizeConverterClient } from '@/components/tools/batch27Tools'
import { ShoeSizeConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('shoe-size-converter')

export default function ShoeSizeConverterPage() {
  const tool = getTool('shoe-size-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('shoe-size-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('shoe-size-converter')}>
        <ShoeSizeConverterClient />
        <ShoeSizeConverterContent />
      </ToolLayout>
    </>
  )
}
