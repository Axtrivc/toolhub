import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BinaryToTextClient } from '@/components/texttools/batch5TextTools'
import { BinaryToTextContent } from './content'

export const metadata: Metadata = buildToolMetadata('binary-to-text')

export default function Page() {
  const tool = getTool('binary-to-text')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('binary-to-text')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('binary-to-text')}>
        <BinaryToTextClient />
        <BinaryToTextContent />
      </ToolLayout>
    </>
  )
}
