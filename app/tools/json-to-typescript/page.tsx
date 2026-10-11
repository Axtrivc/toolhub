import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { JsonToTypeScriptClient } from '@/components/devtools/JsonToTypeScriptClient'
import { JsonToTypeScriptContent } from './content'

export const metadata: Metadata = buildToolMetadata('json-to-typescript')

export default function Page() {
  const tool = getTool('json-to-typescript')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('json-to-typescript')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('json-to-typescript')}>
        <JsonToTypeScriptClient />
        <JsonToTypeScriptContent />
      </ToolLayout>
    </>
  )
}
