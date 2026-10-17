import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { HouseFlipCalculatorClient } from '@/components/calculators/batch21Calculators'
import { HouseFlipCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('house-flip-calculator')

export default function HouseFlipCalculatorPage() {
  const tool = getTool('house-flip-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('house-flip-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('house-flip-calculator')}>
        <HouseFlipCalculatorClient />
        <HouseFlipCalculatorContent />
      </ToolLayout>
    </>
  )
}
