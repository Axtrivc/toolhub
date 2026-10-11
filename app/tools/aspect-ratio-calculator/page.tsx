import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { AspectRatioClient } from '@/components/webtools/AspectRatioClient'
import { AspectRatioContent } from './content'

export const metadata: Metadata = buildToolMetadata('aspect-ratio-calculator')

export default function Page() {
  const tool = getTool('aspect-ratio-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('aspect-ratio-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('aspect-ratio-calculator')}>
        <AspectRatioClient />
        <AspectRatioContent />
      </ToolLayout>
    </>
  )
}
