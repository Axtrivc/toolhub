import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ConcreteCalculatorClient } from '@/components/calculators/batch28Calculators'
import { ConcreteCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('concrete-calculator')

export default function ConcreteCalculatorPage() {
  const tool = getTool('concrete-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('concrete-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('concrete-calculator')}>
        <ConcreteCalculatorClient />
        <ConcreteCalculatorContent />
      </ToolLayout>
    </>
  )
}
