import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CssGradientGeneratorClient } from '@/components/webtools/CssGradientGeneratorClient'
import { CssGradientGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('css-gradient-generator')

export default function Page() {
  const tool = getTool('css-gradient-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('css-gradient-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('css-gradient-generator')}>
        <CssGradientGeneratorClient />
        <CssGradientGeneratorContent />
      </ToolLayout>
    </>
  )
}
