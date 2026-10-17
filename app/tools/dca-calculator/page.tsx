import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DcaCalculatorClient } from '@/components/calculators/batch22Calculators'
import { DcaCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('dca-calculator')

export default function DcaCalculatorPage() {
  const tool = getTool('dca-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('dca-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('dca-calculator')}>
        <DcaCalculatorClient />
        <DcaCalculatorContent />
      </ToolLayout>
    </>
  )
}
