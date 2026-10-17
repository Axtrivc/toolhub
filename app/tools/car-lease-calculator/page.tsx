import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CarLeaseCalculatorClient } from '@/components/calculators/batch24Calculators'
import { CarLeaseCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('car-lease-calculator')

export default function CarLeaseCalculatorPage() {
  const tool = getTool('car-lease-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('car-lease-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('car-lease-calculator')}>
        <CarLeaseCalculatorClient />
        <CarLeaseCalculatorContent />
      </ToolLayout>
    </>
  )
}
