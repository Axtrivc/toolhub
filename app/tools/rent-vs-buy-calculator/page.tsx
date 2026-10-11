import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RentVsBuyCalculatorClient } from '@/components/calculators/batch6Calculators'
import { RentVsBuyCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('rent-vs-buy-calculator')

export default function Page() {
  const tool = getTool('rent-vs-buy-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('rent-vs-buy-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('rent-vs-buy-calculator')}>
        <RentVsBuyCalculatorClient />
        <RentVsBuyCalculatorContent />
      </ToolLayout>
    </>
  )
}
