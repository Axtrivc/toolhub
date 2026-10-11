import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { URLCodecTool } from '@/components/devtools/encoderTools'
import { URLdecoderContent } from './content'

export const metadata: Metadata = buildToolMetadata('url-decoder')

export default function Page() {
  const tool = getTool('url-decoder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('url-decoder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('url-decoder')}>
        <URLCodecTool initialMode="decode" slug="url-decoder" l10n={getToolL10nRecord('url-decoder')} />
        <URLdecoderContent />
      </ToolLayout>
    </>
  )
}
