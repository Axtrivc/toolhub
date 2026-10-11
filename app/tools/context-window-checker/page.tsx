import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ContextWindowCheckerClient } from '@/components/tools/batch15Tools'
import { ContextWindowCheckerContent } from './content'

export const metadata: Metadata = buildToolMetadata('context-window-checker')

export default function ContextWindowCheckerPage() {
  const tool = getTool('context-window-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('context-window-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('context-window-checker')}>
        <ContextWindowCheckerClient />
        <ContextWindowCheckerContent />
      </ToolLayout>
    </>
  )
}
