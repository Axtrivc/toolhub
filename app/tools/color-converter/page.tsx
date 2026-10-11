import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ColorConverterClient } from '@/components/colortools/ColorConverterClient'
import { ColorConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('color-converter')

export default function Page() {
  const tool = getTool('color-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('color-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('color-converter')}>
        <ColorConverterClient />
        <ColorConverterContent />
      </ToolLayout>
    </>
  )
}
