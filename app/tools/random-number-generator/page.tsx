import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RandomNumberGeneratorClient } from '@/components/devtools/batchDevTools'
import { RandomNumberGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('random-number-generator')

export default function Page() {
  const tool = getTool('random-number-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('random-number-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('random-number-generator')}>
        <RandomNumberGeneratorClient />
        <RandomNumberGeneratorContent />
      </ToolLayout>
    </>
  )
}
