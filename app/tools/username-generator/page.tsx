import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { UsernameGeneratorClient } from '@/components/tools/batch34Tools'
import { UsernameGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('username-generator')

export default function UsernameGeneratorPage() {
  const tool = getTool('username-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('username-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('username-generator')}>
        <UsernameGeneratorClient />
        <UsernameGeneratorContent />
      </ToolLayout>
    </>
  )
}
