import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PassphraseGeneratorClient } from '@/components/tools/batch34Tools'
import { PassphraseGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('passphrase-generator')

export default function PassphraseGeneratorPage() {
  const tool = getTool('passphrase-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('passphrase-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('passphrase-generator')}>
        <PassphraseGeneratorClient />
        <PassphraseGeneratorContent />
      </ToolLayout>
    </>
  )
}
