import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { UserAgentParserClient } from '@/components/devtools/UserAgentParserClient'
import { UserAgentParserClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('user-agent-parser')

export default function Page() {
  const tool = getTool('user-agent-parser')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('user-agent-parser')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('user-agent-parser')}>
        <UserAgentParserClient />
        <UserAgentParserClientContent />
      </ToolLayout>
    </>
  )
}
