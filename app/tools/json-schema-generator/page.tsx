import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { JsonSchemaGeneratorClient } from '@/components/devtools/JsonSchemaGeneratorClient'
import { JsonSchemaGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('json-schema-generator')

export default function Page() {
  const tool = getTool('json-schema-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('json-schema-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('json-schema-generator')}>
        <JsonSchemaGeneratorClient />
        <JsonSchemaGeneratorContent />
      </ToolLayout>
    </>
  )
}
