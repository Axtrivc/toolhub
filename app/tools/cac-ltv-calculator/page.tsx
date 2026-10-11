import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CacLtvCalculatorClient } from '@/components/calculators/batch19Calculators'
import { CacLtvCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('cac-ltv-calculator')

export default function Page() {
  const tool = getTool('cac-ltv-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('cac-ltv-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('cac-ltv-calculator')}>
        <CacLtvCalculatorClient />
        <CacLtvCalculatorContent />
      </ToolLayout>
    </>
  )
}
