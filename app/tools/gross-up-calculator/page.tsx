import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { GrossUpCalculatorClient } from '@/components/calculators/batch23Calculators'
import { GrossUpCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('gross-up-calculator')

export default function GrossUpCalculatorPage() {
  const tool = getTool('gross-up-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('gross-up-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('gross-up-calculator')}>
        <GrossUpCalculatorClient />
        <GrossUpCalculatorContent />
      </ToolLayout>
    </>
  )
}
