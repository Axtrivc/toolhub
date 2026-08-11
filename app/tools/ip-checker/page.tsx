import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { IpCheckerClient } from '@/components/devtools/IpCheckerClient'
import { IpCheckerContent } from './content'

export const metadata: Metadata = buildToolMetadata('ip-checker')

export default function Page() {
  const tool = getTool('ip-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ip-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <IpCheckerClient />
        <IpCheckerContent />
      </ToolLayout>
    </>
  )
}
