import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CommissionCalculatorClient } from '@/components/calculators/batch8Calculators'
import { CommissionCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('commission-calculator')

export default function Page() {
  const tool = getTool('commission-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('commission-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('commission-calculator')}>
        <CommissionCalculatorClient />
        <CommissionCalculatorContent />
      </ToolLayout>
    </>
  )
}
