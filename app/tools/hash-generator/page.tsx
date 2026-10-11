import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { HashGeneratorClient } from '@/components/texttools/batch5TextTools'
import { HashGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('hash-generator')

export default function Page() {
  const tool = getTool('hash-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('hash-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('hash-generator')}>
        <HashGeneratorClient />
        <HashGeneratorContent />
      </ToolLayout>
    </>
  )
}
