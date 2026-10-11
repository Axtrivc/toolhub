import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ImageToBase64Client } from '@/components/devtools/ImageToBase64Client'
import { ImageToBase64Content } from './content'

export const metadata: Metadata = buildToolMetadata('image-to-base64')

export default function Page() {
  const tool = getTool('image-to-base64')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('image-to-base64')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('image-to-base64')}>
        <ImageToBase64Client />
        <ImageToBase64Content />
      </ToolLayout>
    </>
  )
}
