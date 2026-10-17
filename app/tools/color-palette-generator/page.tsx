import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ColorPaletteGeneratorClient } from '@/components/tools/batch34Tools'
import { ColorPaletteGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('color-palette-generator')

export default function ColorPaletteGeneratorPage() {
  const tool = getTool('color-palette-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('color-palette-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('color-palette-generator')}>
        <ColorPaletteGeneratorClient />
        <ColorPaletteGeneratorContent />
      </ToolLayout>
    </>
  )
}
