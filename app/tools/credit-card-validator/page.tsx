import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CreditCardValidatorClient } from '@/components/tools/batch32Tools'
import { CreditCardValidatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('credit-card-validator')

export default function CreditCardValidatorPage() {
  const tool = getTool('credit-card-validator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('credit-card-validator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('credit-card-validator')}>
        <CreditCardValidatorClient />
        <CreditCardValidatorContent />
      </ToolLayout>
    </>
  )
}
