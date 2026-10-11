import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PrimeFactorizationCalculatorClient } from '@/components/calculators/batch7Calculators'
import { PrimeFactorizationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('prime-factorization-calculator')

export default function Page() {
  const tool = getTool('prime-factorization-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('prime-factorization-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('prime-factorization-calculator')}>
        <PrimeFactorizationCalculatorClient />
        <PrimeFactorizationCalculatorContent />
      </ToolLayout>
    </>
  )
}
