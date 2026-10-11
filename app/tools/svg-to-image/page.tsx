import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SvgToImageClient } from '@/components/tools/SvgToImageClient'
import { SvgToImageContent } from './content'

export const metadata: Metadata = buildToolMetadata('svg-to-image')

export default function Page() {
  const tool = getTool('svg-to-image')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('svg-to-image')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('svg-to-image')}>
        <SvgToImageClient />
        <SvgToImageContent />
      </ToolLayout>
    </>
  )
}
