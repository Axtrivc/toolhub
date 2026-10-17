import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FaqSchemaGeneratorClient } from '@/components/tools/batch33Tools'
import { FaqSchemaGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('faq-schema-generator')

export default function FaqSchemaGeneratorPage() {
  const tool = getTool('faq-schema-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('faq-schema-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('faq-schema-generator')}>
        <FaqSchemaGeneratorClient />
        <FaqSchemaGeneratorContent />
      </ToolLayout>
    </>
  )
}
