import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ReverseStripeFeeCalculatorClient } from '@/components/calculators/ReverseStripeFeeCalculatorClient'
import { ReverseStripeFeeCalculatorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('reverse-stripe-fee-calculator')

export default function Page() {
  const tool = getTool('reverse-stripe-fee-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('reverse-stripe-fee-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('reverse-stripe-fee-calculator')}>
        <ReverseStripeFeeCalculatorClient />
        <ReverseStripeFeeCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
