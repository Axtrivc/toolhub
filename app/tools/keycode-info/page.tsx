import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { KeycodeInfoClient } from '@/components/tools/batch12Tools'
import { KeycodeInfoContent } from './content'

export const metadata: Metadata = buildToolMetadata('keycode-info')

export default function KeycodeInfoPage() {
  const tool = getTool('keycode-info')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('keycode-info')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('keycode-info')}>
        <KeycodeInfoClient />
        <KeycodeInfoContent />
      </ToolLayout>
    </>
  )
}
