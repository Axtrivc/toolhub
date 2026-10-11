import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CSVtoJSONClient } from '@/components/texttools/batch3TextTools'
import { CSVtoJSONContent } from './content'

export const metadata: Metadata = buildToolMetadata('csv-to-json')

export default function Page() {
  const tool = getTool('csv-to-json')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('csv-to-json')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('csv-to-json')}>
        <CSVtoJSONClient />
        <CSVtoJSONContent />
      </ToolLayout>
    </>
  )
}
