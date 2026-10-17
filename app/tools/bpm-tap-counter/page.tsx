import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BpmTapCounterClient } from '@/components/tools/batch33Tools'
import { BpmTapCounterContent } from './content'

export const metadata: Metadata = buildToolMetadata('bpm-tap-counter')

export default function BpmTapCounterPage() {
  const tool = getTool('bpm-tap-counter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bpm-tap-counter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('bpm-tap-counter')}>
        <BpmTapCounterClient />
        <BpmTapCounterContent />
      </ToolLayout>
    </>
  )
}
