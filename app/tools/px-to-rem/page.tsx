import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PxToRemClient } from '@/components/webtools/PxToRemClient'
import { PxToRemContent } from './content'

export const metadata: Metadata = buildToolMetadata('px-to-rem')

export default function Page() {
  const tool = getTool('px-to-rem')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('px-to-rem')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PxToRemClient />
        <PxToRemContent />
      </ToolLayout>
    </>
  )
}
