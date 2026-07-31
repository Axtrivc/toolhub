import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ColorConverterClient } from '@/components/colortools/ColorConverterClient'
import { ColorConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('color-converter')

export default function Page() {
  const tool = getTool('color-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('color-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ColorConverterClient />
        <ColorConverterContent />
      </ToolLayout>
    </>
  )
}
