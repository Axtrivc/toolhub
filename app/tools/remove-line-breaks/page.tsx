import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RemoveLineBreaksClient } from '@/components/texttools/batchTextTools'
import { RemoveLineBreaksContent } from './content'

export const metadata: Metadata = buildToolMetadata('remove-line-breaks')

export default function Page() {
  const tool = getTool('remove-line-breaks')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('remove-line-breaks')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('remove-line-breaks')}>
        <RemoveLineBreaksClient />
        <RemoveLineBreaksContent />
      </ToolLayout>
    </>
  )
}
