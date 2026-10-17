import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DewPointCalculatorClient } from '@/components/calculators/batch31Calculators'
import { DewPointCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('dew-point-calculator')

export default function DewPointCalculatorPage() {
  const tool = getTool('dew-point-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('dew-point-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('dew-point-calculator')}>
        <DewPointCalculatorClient />
        <DewPointCalculatorContent />
      </ToolLayout>
    </>
  )
}
