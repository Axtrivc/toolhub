import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { JwtGeneratorClient } from '@/components/tools/batch13Tools'
import { JwtGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('jwt-generator')

export default function JwtGeneratorPage() {
  const tool = getTool('jwt-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('jwt-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <JwtGeneratorClient />
        <JwtGeneratorContent />
      </ToolLayout>
    </>
  )
}
