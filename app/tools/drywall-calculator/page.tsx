import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DrywallCalculatorClient } from '@/components/calculators/batch28Calculators'
import { DrywallCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('drywall-calculator')

export default function DrywallCalculatorPage() {
  const tool = getTool('drywall-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('drywall-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('drywall-calculator')}>
        <DrywallCalculatorClient />
        <DrywallCalculatorContent />
      </ToolLayout>
    </>
  )
}
