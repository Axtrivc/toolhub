import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { TipCalculatorClient } from '@/components/calculators/generatedClients'
import { TipCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('tip-calculator')

export default function TipCalculatorPage() {
  const tool = getTool('tip-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('tip-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('tip-calculator')}>
        <TipCalculatorClient />
        <TipCalculatorContent />
      </ToolLayout>
    </>
  )
}
