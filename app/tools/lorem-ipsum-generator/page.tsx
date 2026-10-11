import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LoremIpsumGeneratorClient } from '@/components/generators/batchGenerators'
import { LoremIpsumGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('lorem-ipsum-generator')

export default function Page() {
  const tool = getTool('lorem-ipsum-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('lorem-ipsum-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('lorem-ipsum-generator')}>
        <LoremIpsumGeneratorClient />
        <LoremIpsumGeneratorContent />
      </ToolLayout>
    </>
  )
}
