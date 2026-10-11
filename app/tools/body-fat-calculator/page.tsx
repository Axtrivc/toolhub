import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BodyFatCalculatorClient } from '@/components/calculators/batch6Calculators'
import { BodyFatCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('body-fat-calculator')

export default function Page() {
  const tool = getTool('body-fat-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('body-fat-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('body-fat-calculator')}>
        <BodyFatCalculatorClient />
        <BodyFatCalculatorContent />
      </ToolLayout>
    </>
  )
}
