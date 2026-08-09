import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SecretKeyGeneratorClient } from '@/components/securitytools/SecretKeyGeneratorClient'
import { SecretKeyGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('secret-key-generator')

export default function Page() {
  const tool = getTool('secret-key-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('secret-key-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SecretKeyGeneratorClient />
        <SecretKeyGeneratorContent />
      </ToolLayout>
    </>
  )
}
