import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CryptoProfitCalculatorClient } from '@/components/calculators/batch22Calculators'
import { CryptoProfitCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('crypto-profit-calculator')

export default function CryptoProfitCalculatorPage() {
  const tool = getTool('crypto-profit-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('crypto-profit-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('crypto-profit-calculator')}>
        <CryptoProfitCalculatorClient />
        <CryptoProfitCalculatorContent />
      </ToolLayout>
    </>
  )
}
