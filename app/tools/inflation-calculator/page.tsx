import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { InflationCalculatorClient } from '@/components/generators/batchGenerators'
import { InflationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('inflation-calculator')

export default function Page() {
  const tool = getTool('inflation-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('inflation-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('inflation-calculator')}>
        <InflationCalculatorClient />
        <InflationCalculatorContent />
      </ToolLayout>
    </>
  )
}
