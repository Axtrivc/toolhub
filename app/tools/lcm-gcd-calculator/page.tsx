import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LCMGcdCalculatorClient } from '@/components/calculators/batch3Calculators'
import { LCMGcdCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('lcm-gcd-calculator')

export default function Page() {
  const tool = getTool('lcm-gcd-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('lcm-gcd-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('lcm-gcd-calculator')}>
        <LCMGcdCalculatorClient />
        <LCMGcdCalculatorContent />
      </ToolLayout>
    </>
  )
}
