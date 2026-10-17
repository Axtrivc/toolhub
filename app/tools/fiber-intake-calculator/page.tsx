import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FiberIntakeCalculatorClient } from '@/components/calculators/batch26Calculators'
import { FiberIntakeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('fiber-intake-calculator')

export default function FiberIntakeCalculatorPage() {
  const tool = getTool('fiber-intake-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('fiber-intake-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('fiber-intake-calculator')}>
        <FiberIntakeCalculatorClient />
        <FiberIntakeCalculatorContent />
      </ToolLayout>
    </>
  )
}
