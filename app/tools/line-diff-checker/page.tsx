import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LineDiffCheckerClient } from '@/components/tools/batch10Tools'
import { LineDiffCheckerContent } from './content'

export const metadata: Metadata = buildToolMetadata('line-diff-checker')

export default function LineDiffCheckerPage() {
  const tool = getTool('line-diff-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('line-diff-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('line-diff-checker')}>
        <LineDiffCheckerClient />
        <LineDiffCheckerContent />
      </ToolLayout>
    </>
  )
}
