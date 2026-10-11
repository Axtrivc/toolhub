import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { TextDiffClient } from '@/components/texttools/batch4TextTools'
import { TextDiffContent } from './content'

export const metadata: Metadata = buildToolMetadata('text-diff')

export default function Page() {
  const tool = getTool('text-diff')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('text-diff')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('text-diff')}>
        <TextDiffClient />
        <TextDiffContent />
      </ToolLayout>
    </>
  )
}
