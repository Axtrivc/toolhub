import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CollegeSavingsCalculatorClient } from '@/components/calculators/batch24Calculators'
import { CollegeSavingsCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('college-savings-calculator')

export default function CollegeSavingsCalculatorPage() {
  const tool = getTool('college-savings-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('college-savings-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('college-savings-calculator')}>
        <CollegeSavingsCalculatorClient />
        <CollegeSavingsCalculatorContent />
      </ToolLayout>
    </>
  )
}
