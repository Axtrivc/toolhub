import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { TomlToJsonClient } from '@/components/tools/batch13bTools'
import { TomlToJsonContent } from './content'

export const metadata: Metadata = buildToolMetadata('toml-to-json')

export default function TomlToJsonPage() {
  const tool = getTool('toml-to-json')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('toml-to-json')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('toml-to-json')}>
        <TomlToJsonClient />
        <TomlToJsonContent />
      </ToolLayout>
    </>
  )
}
