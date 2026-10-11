import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { AnnuityCalculatorClient } from '@/components/calculators/batch6Calculators'
import { AnnuityCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('annuity-calculator')

export default function Page() {
  const tool = getTool('annuity-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('annuity-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('annuity-calculator')}>
        <AnnuityCalculatorClient />
        <AnnuityCalculatorContent />
      </ToolLayout>
    </>
  )
}
