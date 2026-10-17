import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SlopeCalculatorClient } from '@/components/calculators/batch31Calculators'
import { SlopeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('slope-calculator')

export default function SlopeCalculatorPage() {
  const tool = getTool('slope-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('slope-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('slope-calculator')}>
        <SlopeCalculatorClient />
        <SlopeCalculatorContent />
      </ToolLayout>
    </>
  )
}
