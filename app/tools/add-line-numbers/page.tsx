import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { AddLineNumbersClient } from '@/components/texttools/batch3TextTools'
import { AddLineNumbersContent } from './content'

export const metadata: Metadata = buildToolMetadata('add-line-numbers')

export default function Page() {
  const tool = getTool('add-line-numbers')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('add-line-numbers')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('add-line-numbers')}>
        <AddLineNumbersClient />
        <AddLineNumbersContent />
      </ToolLayout>
    </>
  )
}
