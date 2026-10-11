import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SlugGeneratorClient } from '@/components/tools/SlugGeneratorClient'
import { SlugGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('slug-generator')

export default function SlugGeneratorPage() {
  const tool = getTool('slug-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('slug-generator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }}
      />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('slug-generator')}>
        <SlugGeneratorClient />
        <SlugGeneratorContent />
      </ToolLayout>
    </>
  )
}
