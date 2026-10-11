import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SaasLtvChurnCalculatorClient } from '@/components/calculators/SaasLtvChurnCalculatorClient'
import { SaasLtvChurnCalculatorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('saas-ltv-churn-calculator')

export default function Page() {
  const tool = getTool('saas-ltv-churn-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('saas-ltv-churn-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('saas-ltv-churn-calculator')}>
        <SaasLtvChurnCalculatorClient />
        <SaasLtvChurnCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
