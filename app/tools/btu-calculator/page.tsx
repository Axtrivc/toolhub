import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BtuCalculatorClient } from '@/components/calculators/batch29Calculators'
import { BtuCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('btu-calculator')

export default function BtuCalculatorPage() {
  const tool = getTool('btu-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('btu-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('btu-calculator')}>
        <BtuCalculatorClient />
        <BtuCalculatorContent />
      </ToolLayout>
    </>
  )
}