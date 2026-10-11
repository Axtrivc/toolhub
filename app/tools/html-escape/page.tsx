import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { HTMLEscapeTool } from '@/components/devtools/encoderTools'
import { HTMLEscapeContent } from './content'

export const metadata: Metadata = buildToolMetadata('html-escape')

export default function Page() {
  const tool = getTool('html-escape')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('html-escape')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('html-escape')}>
        <HTMLEscapeTool initialMode="encode" slug="html-escape" l10n={getToolL10nRecord('html-escape')} />
        <HTMLEscapeContent />
      </ToolLayout>
    </>
  )
}
