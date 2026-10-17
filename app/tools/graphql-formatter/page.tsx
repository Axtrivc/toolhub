import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { GraphqlFormatterClient } from '@/components/tools/batch32Tools'
import { GraphqlFormatterContent } from './content'

export const metadata: Metadata = buildToolMetadata('graphql-formatter')

export default function GraphqlFormatterPage() {
  const tool = getTool('graphql-formatter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('graphql-formatter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('graphql-formatter')}>
        <GraphqlFormatterClient />
        <GraphqlFormatterContent />
      </ToolLayout>
    </>
  )
}
