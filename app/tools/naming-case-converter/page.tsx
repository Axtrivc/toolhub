import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { NamingCaseConverterClient } from '@/components/devtools/NamingCaseConverterClient'
import { NamingCaseConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('naming-case-converter')

export default function Page() {
  const tool = getTool('naming-case-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('naming-case-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('naming-case-converter')}>
        <NamingCaseConverterClient />
        <NamingCaseConverterContent />
      </ToolLayout>
    </>
  )
}
