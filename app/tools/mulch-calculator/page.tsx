import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { MulchCalculatorClient } from '@/components/calculators/batch28Calculators'
import { MulchCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('mulch-calculator')

export default function MulchCalculatorPage() {
  const tool = getTool('mulch-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('mulch-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('mulch-calculator')}>
        <MulchCalculatorClient />
        <MulchCalculatorContent />
      </ToolLayout>
    </>
  )
}
