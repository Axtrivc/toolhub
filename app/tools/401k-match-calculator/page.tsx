import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { Match401kCalculatorClient } from '@/components/calculators/batch24Calculators'
import { Match401kCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('401k-match-calculator')

export default function Match401kCalculatorPage() {
  const tool = getTool('401k-match-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('401k-match-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('401k-match-calculator')}>
        <Match401kCalculatorClient />
        <Match401kCalculatorContent />
      </ToolLayout>
    </>
  )
}
