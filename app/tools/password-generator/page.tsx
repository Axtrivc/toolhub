import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PasswordGeneratorClient } from '@/components/tools/PasswordGeneratorClient'
import { PasswordGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('password-generator')

export default function PasswordGeneratorPage() {
  const tool = getTool('password-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('password-generator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout tool={tool}>
        <PasswordGeneratorClient />
        <PasswordGeneratorContent />
      </ToolLayout>
    </>
  )
}
