import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { JSONMinifierClient } from '@/components/texttools/batch3TextTools'
import { JSONMinifierContent } from './content'

export const metadata: Metadata = buildToolMetadata('json-minifier')

export default function Page() {
  const tool = getTool('json-minifier')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('json-minifier')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('json-minifier')}>
        <JSONMinifierClient />
        <JSONMinifierContent />
      </ToolLayout>
    </>
  )
}
