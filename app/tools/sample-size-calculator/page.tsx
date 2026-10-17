import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SampleSizeCalculatorClient } from '@/components/calculators/batch31Calculators'
import { SampleSizeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('sample-size-calculator')

export default function SampleSizeCalculatorPage() {
  const tool = getTool('sample-size-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('sample-size-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('sample-size-calculator')}>
        <SampleSizeCalculatorClient />
        <SampleSizeCalculatorContent />
      </ToolLayout>
    </>
  )
}
