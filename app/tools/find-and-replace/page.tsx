import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FindReplaceClient } from '@/components/texttools/batchTextTools'
import { FindAndReplaceContent } from './content'

export const metadata: Metadata = buildToolMetadata('find-and-replace')

export default function Page() {
  const tool = getTool('find-and-replace')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('find-and-replace')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('find-and-replace')}>
        <FindReplaceClient />
        <FindAndReplaceContent />
      </ToolLayout>
    </>
  )
}
