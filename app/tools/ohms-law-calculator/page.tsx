import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { OhmsLawCalculatorClient } from '@/components/calculators/batch33Calculators'
import { OhmsLawCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('ohms-law-calculator')

export default function OhmsLawCalculatorPage() {
  const tool = getTool('ohms-law-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ohms-law-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('ohms-law-calculator')}>
        <OhmsLawCalculatorClient />
        <OhmsLawCalculatorContent />
      </ToolLayout>
    </>
  )
}
