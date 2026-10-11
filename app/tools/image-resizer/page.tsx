import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ImageResizerClient } from '@/components/webtools/ImageResizerClient'
import { ImageResizerContent } from './content'

export const metadata: Metadata = buildToolMetadata('image-resizer')

export default function Page() {
  const tool = getTool('image-resizer')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('image-resizer')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('image-resizer')}>
        <ImageResizerClient />
        <ImageResizerContent />
      </ToolLayout>
    </>
  )
}
