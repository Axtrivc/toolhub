import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { BcryptHashGeneratorClient } from '@/components/securitytools/BcryptHashGeneratorClient'
import { BcryptHashGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('bcrypt-hash-generator')

export default function Page() {
  const tool = getTool('bcrypt-hash-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bcrypt-hash-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <BcryptHashGeneratorClient />
        <BcryptHashGeneratorContent />
      </ToolLayout>
    </>
  )
}
