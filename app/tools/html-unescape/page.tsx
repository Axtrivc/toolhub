import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HTMLEscapeTool } from '@/components/devtools/encoderTools'
import { HTMLUnescapeContent } from './content'

export const metadata: Metadata = buildToolMetadata('html-unescape')

export default function Page() {
  const tool = getTool('html-unescape')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('html-unescape')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HTMLEscapeTool initialMode="decode" slug="html-unescape" />
        <HTMLUnescapeContent />
      </ToolLayout>
    </>
  )
}
