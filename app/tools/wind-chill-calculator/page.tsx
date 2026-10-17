import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WindChillCalculatorClient } from '@/components/calculators/batch30Calculators'
import { WindChillCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('wind-chill-calculator')

export default function WindChillCalculatorPage() {
  const tool = getTool('wind-chill-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('wind-chill-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('wind-chill-calculator')}>
        <WindChillCalculatorClient />
        <WindChillCalculatorContent />
      </ToolLayout>
    </>
  )
}
