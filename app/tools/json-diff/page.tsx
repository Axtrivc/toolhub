import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { JsonDiffClient } from '@/components/tools/batch10Tools'
import { JsonDiffContent } from './content'

export const metadata: Metadata = buildToolMetadata('json-diff')

export default function JsonDiffPage() {
  const tool = getTool('json-diff')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('json-diff')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('json-diff')}>
        <JsonDiffClient />
        <JsonDiffContent />
      </ToolLayout>
    </>
  )
}
