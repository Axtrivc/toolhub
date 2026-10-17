import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SocialSecurityBreakEvenCalculatorClient } from '@/components/calculators/batch24Calculators'
import { SocialSecurityBreakEvenCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('social-security-break-even-calculator')

export default function SocialSecurityBreakEvenCalculatorPage() {
  const tool = getTool('social-security-break-even-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('social-security-break-even-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('social-security-break-even-calculator')}>
        <SocialSecurityBreakEvenCalculatorClient />
        <SocialSecurityBreakEvenCalculatorContent />
      </ToolLayout>
    </>
  )
}
