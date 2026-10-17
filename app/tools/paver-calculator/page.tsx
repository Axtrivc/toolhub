import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PaverCalculatorClient } from '@/components/calculators/batch28Calculators'
import { PaverCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('paver-calculator')

export default function PaverCalculatorPage() {
  const tool = getTool('paver-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('paver-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('paver-calculator')}>
        <PaverCalculatorClient />
        <PaverCalculatorContent />
      </ToolLayout>
    </>
  )
}
