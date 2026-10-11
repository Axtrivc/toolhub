import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WaterIntakeCalculatorClient } from '@/components/calculators/batch3Calculators'
import { WaterIntakeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('water-intake-calculator')

export default function Page() {
  const tool = getTool('water-intake-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('water-intake-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('water-intake-calculator')}>
        <WaterIntakeCalculatorClient />
        <WaterIntakeCalculatorContent />
      </ToolLayout>
    </>
  )
}
