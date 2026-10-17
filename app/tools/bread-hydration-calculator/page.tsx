import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BreadHydrationCalculatorClient } from '@/components/calculators/batch29Calculators'
import { BreadHydrationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('bread-hydration-calculator')

export default function BreadHydrationCalculatorPage() {
  const tool = getTool('bread-hydration-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bread-hydration-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('bread-hydration-calculator')}>
        <BreadHydrationCalculatorClient />
        <BreadHydrationCalculatorContent />
      </ToolLayout>
    </>
  )
}