import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { URLCodecTool } from '@/components/devtools/encoderTools'
import { URLencoderContent } from './content'

export const metadata: Metadata = buildToolMetadata('url-encoder')

export default function Page() {
  const tool = getTool('url-encoder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('url-encoder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('url-encoder')}>
        <URLCodecTool initialMode="encode" slug="url-encoder" l10n={getToolL10nRecord('url-encoder')} />
        <URLencoderContent />
      </ToolLayout>
    </>
  )
}
