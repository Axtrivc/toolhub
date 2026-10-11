import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CodeBeautifierClient } from '@/components/devtools/CodeBeautifierClient'
import { CodeBeautifierContent } from './content'

export const metadata: Metadata = buildToolMetadata('code-beautifier')

export default function Page() {
  const tool = getTool('code-beautifier')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('code-beautifier')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('code-beautifier')}>
        <CodeBeautifierClient />
        <CodeBeautifierContent />
      </ToolLayout>
    </>
  )
}
