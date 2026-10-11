import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LogFilterClient } from '@/components/tools/batch12bTools'
import { LogFilterToolContent } from './content'

export const metadata: Metadata = buildToolMetadata('log-filter-tool')

export default function LogFilterToolPage() {
  const tool = getTool('log-filter-tool')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('log-filter-tool')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('log-filter-tool')}>
        <LogFilterClient />
        <LogFilterToolContent />
      </ToolLayout>
    </>
  )
}
