import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DividendCalculatorClient } from '@/components/calculators/batch22Calculators'
import { DividendCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('dividend-calculator')

export default function DividendCalculatorPage() {
  const tool = getTool('dividend-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('dividend-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('dividend-calculator')}>
        <DividendCalculatorClient />
        <DividendCalculatorContent />
      </ToolLayout>
    </>
  )
}
