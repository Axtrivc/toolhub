import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SecretSantaGeneratorClient } from '@/components/tools/batch34Tools'
import { SecretSantaGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('secret-santa-generator')

export default function SecretSantaGeneratorPage() {
  const tool = getTool('secret-santa-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('secret-santa-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('secret-santa-generator')}>
        <SecretSantaGeneratorClient />
        <SecretSantaGeneratorContent />
      </ToolLayout>
    </>
  )
}
