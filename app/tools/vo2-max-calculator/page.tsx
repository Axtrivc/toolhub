import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { Vo2MaxCalculatorClient } from '@/components/calculators/batch26Calculators'
import { Vo2MaxCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('vo2-max-calculator')

export default function Vo2MaxCalculatorPage() {
  const tool = getTool('vo2-max-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('vo2-max-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('vo2-max-calculator')}>
        <Vo2MaxCalculatorClient />
        <Vo2MaxCalculatorContent />
      </ToolLayout>
    </>
  )
}
