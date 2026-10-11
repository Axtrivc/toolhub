import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RetirementCalculatorClient } from '@/components/generators/batchGenerators'
import { RetirementCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('retirement-calculator')

export default function Page() {
  const tool = getTool('retirement-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('retirement-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('retirement-calculator')}>
        <RetirementCalculatorClient />
        <RetirementCalculatorContent />
      </ToolLayout>
    </>
  )
}
