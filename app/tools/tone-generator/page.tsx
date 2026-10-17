import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ToneGeneratorClient } from '@/components/tools/batch33Tools'
import { ToneGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('tone-generator')

export default function ToneGeneratorPage() {
  const tool = getTool('tone-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('tone-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('tone-generator')}>
        <ToneGeneratorClient />
        <ToneGeneratorContent />
      </ToolLayout>
    </>
  )
}
