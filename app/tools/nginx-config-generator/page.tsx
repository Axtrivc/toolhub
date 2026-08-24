import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { NginxConfigGeneratorClient } from '@/components/devtools/NginxConfigGeneratorClient'
import { NginxConfigGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('nginx-config-generator')

export default function Page() {
  const tool = getTool('nginx-config-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('nginx-config-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <NginxConfigGeneratorClient />
        <NginxConfigGeneratorContent />
      </ToolLayout>
    </>
  )
}
