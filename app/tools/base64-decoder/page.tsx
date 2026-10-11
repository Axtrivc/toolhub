import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { Base64CodecTool } from '@/components/devtools/encoderTools'
import { Base64DecoderContent } from './content'

export const metadata: Metadata = buildToolMetadata('base64-decoder')

export default function Page() {
  const tool = getTool('base64-decoder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('base64-decoder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('base64-decoder')}>
        <Base64CodecTool initialMode="decode" slug="base64-decoder" l10n={getToolL10nRecord('base64-decoder')} />
        <Base64DecoderContent />
      </ToolLayout>
    </>
  )
}
