import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FenceCalculatorClient } from '@/components/calculators/batch28Calculators'
import { FenceCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('fence-calculator')

export default function FenceCalculatorPage() {
  const tool = getTool('fence-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('fence-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('fence-calculator')}>
        <FenceCalculatorClient />
        <FenceCalculatorContent />
      </ToolLayout>
    </>
  )
}
