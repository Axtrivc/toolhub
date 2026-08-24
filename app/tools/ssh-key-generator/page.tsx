import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SshKeyGeneratorClient } from '@/components/securitytools/SshKeyGeneratorClient'
import { SshKeyGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('ssh-key-generator')

export default function Page() {
  const tool = getTool('ssh-key-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ssh-key-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SshKeyGeneratorClient />
        <SshKeyGeneratorContent />
      </ToolLayout>
    </>
  )
}
