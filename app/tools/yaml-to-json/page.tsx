import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { YamlToJsonClient } from '@/components/devtools/YamlToJsonClient'
import { YamlToJsonContent } from './content'

export const metadata: Metadata = buildToolMetadata('yaml-to-json')

export default function Page() {
  const tool = getTool('yaml-to-json')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('yaml-to-json')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <YamlToJsonClient />
        <YamlToJsonContent />
      </ToolLayout>
    </>
  )
}
