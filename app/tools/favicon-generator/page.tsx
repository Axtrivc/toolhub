import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FaviconGeneratorClient } from '@/components/webtools/FaviconGeneratorClient'
import { FaviconGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('favicon-generator')

export default function Page() {
  const tool = getTool('favicon-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('favicon-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('favicon-generator')}>
        <FaviconGeneratorClient />
        <FaviconGeneratorContent />
      </ToolLayout>
    </>
  )
}
