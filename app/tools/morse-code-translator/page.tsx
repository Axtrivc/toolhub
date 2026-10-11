import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { MorseCodeTranslatorClient } from '@/components/tools/batch14FunTools'
import { MorseCodeTranslatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('morse-code-translator')

export default function MorseCodeTranslatorPage() {
  const tool = getTool('morse-code-translator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('morse-code-translator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('morse-code-translator')}>
        <MorseCodeTranslatorClient />
        <MorseCodeTranslatorContent />
      </ToolLayout>
    </>
  )
}
