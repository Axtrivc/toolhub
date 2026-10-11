import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { AgeCalculatorClient } from '@/components/calculators/AgeCalculatorClient'
import { AgeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('age-calculator')

export default function AgeCalculatorPage() {
  const tool = getTool('age-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('age-calculator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }}
      />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('age-calculator')}>
        <AgeCalculatorClient />
        <AgeCalculatorContent />
      </ToolLayout>
    </>
  )
}
