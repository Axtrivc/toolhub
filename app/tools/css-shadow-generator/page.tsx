import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CssShadowGeneratorClient } from '@/components/webtools/CssShadowGeneratorClient'
import { CssShadowGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('css-shadow-generator')

export default function Page() {
  const tool = getTool('css-shadow-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('css-shadow-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CssShadowGeneratorClient />
        <CssShadowGeneratorContent />
      </ToolLayout>
    </>
  )
}
