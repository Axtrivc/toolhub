import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { IbanValidatorClient } from '@/components/tools/batch32Tools'
import { IbanValidatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('iban-validator')

export default function IbanValidatorPage() {
  const tool = getTool('iban-validator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('iban-validator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('iban-validator')}>
        <IbanValidatorClient />
        <IbanValidatorContent />
      </ToolLayout>
    </>
  )
}
