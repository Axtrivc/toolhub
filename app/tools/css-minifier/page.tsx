import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CssMinifierClient } from '@/components/tools/batch32Tools'
import { CssMinifierContent } from './content'

export const metadata: Metadata = buildToolMetadata('css-minifier')

export default function CssMinifierPage() {
  const tool = getTool('css-minifier')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('css-minifier')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('css-minifier')}>
        <CssMinifierClient />
        <CssMinifierContent />
      </ToolLayout>
    </>
  )
}
