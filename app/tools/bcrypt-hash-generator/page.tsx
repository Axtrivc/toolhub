import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BcryptHashGeneratorClient } from '@/components/securitytools/BcryptHashGeneratorClient'
import { BcryptHashGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('bcrypt-hash-generator')

export default function Page() {
  const tool = getTool('bcrypt-hash-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bcrypt-hash-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('bcrypt-hash-generator')}>
        <BcryptHashGeneratorClient />
        <BcryptHashGeneratorContent />
      </ToolLayout>
    </>
  )
}
