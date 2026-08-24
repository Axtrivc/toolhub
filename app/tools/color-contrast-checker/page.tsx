import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ColorContrastClient } from '@/components/webtools/ColorContrastClient'
import { ColorContrastContent } from './content'

export const metadata: Metadata = buildToolMetadata('color-contrast-checker')

export default function Page() {
  const tool = getTool('color-contrast-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('color-contrast-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ColorContrastClient />
        <ColorContrastContent />
      </ToolLayout>
    </>
  )
}
