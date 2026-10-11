import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { StandardDeviationCalculatorClient } from '@/components/generators/batchGenerators'
import { StandardDeviationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('standard-deviation-calculator')

export default function Page() {
  const tool = getTool('standard-deviation-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('standard-deviation-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('standard-deviation-calculator')}>
        <StandardDeviationCalculatorClient />
        <StandardDeviationCalculatorContent />
      </ToolLayout>
    </>
  )
}
