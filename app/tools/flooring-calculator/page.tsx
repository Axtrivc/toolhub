import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FlooringCalculatorClient } from '@/components/calculators/batch19Calculators'
import { FlooringCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('flooring-calculator')

export default function Page() {
  const tool = getTool('flooring-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('flooring-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('flooring-calculator')}>
        <FlooringCalculatorClient />
        <FlooringCalculatorContent />
      </ToolLayout>
    </>
  )
}
