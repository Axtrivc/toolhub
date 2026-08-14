import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HTMLEscapeTool } from '@/components/devtools/encoderTools'
import { HTMLEscapeContent } from './content'

export const metadata: Metadata = buildToolMetadata('html-escape')

export default function Page() {
  const tool = getTool('html-escape')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('html-escape')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HTMLEscapeTool initialMode="encode" slug="html-escape" />
        <HTMLEscapeContent />
      </ToolLayout>
    </>
  )
}
