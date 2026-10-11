import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CaffeineCalculatorClient } from '@/components/calculators/batch11Calculators'
import { CaffeineCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('caffeine-calculator')

export default function CaffeineCalculatorPage() {
  const tool = getTool('caffeine-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('caffeine-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('caffeine-calculator')}>
        <CaffeineCalculatorClient />
        <CaffeineCalculatorContent />
      </ToolLayout>
    </>
  )
}
