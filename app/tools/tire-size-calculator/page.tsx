import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { TireSizeCalculatorClient } from '@/components/calculators/batch30Calculators'
import { TireSizeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('tire-size-calculator')

export default function TireSizeCalculatorPage() {
  const tool = getTool('tire-size-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('tire-size-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('tire-size-calculator')}>
        <TireSizeCalculatorClient />
        <TireSizeCalculatorContent />
      </ToolLayout>
    </>
  )
}
