import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { UserAgentParserClient } from '@/components/devtools/UserAgentParserClient'
import { UserAgentParserClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('user-agent-parser')

export default function Page() {
  const tool = getTool('user-agent-parser')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('user-agent-parser')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <UserAgentParserClient />
        <UserAgentParserClientContent />
      </ToolLayout>
    </>
  )
}
