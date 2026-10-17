import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ImageCompressorClient } from '@/components/tools/batch34Tools'
import { ImageCompressorContent } from './content'

export const metadata: Metadata = buildToolMetadata('image-compressor')

export default function ImageCompressorPage() {
  const tool = getTool('image-compressor')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('image-compressor')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('image-compressor')}>
        <ImageCompressorClient />
        <ImageCompressorContent />
      </ToolLayout>
    </>
  )
}
