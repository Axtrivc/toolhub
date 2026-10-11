import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
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
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }}
      />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('password-generator')}>
        <PasswordGeneratorClient />
        <PasswordGeneratorContent />
      </ToolLayout>
    </>
  )
}
