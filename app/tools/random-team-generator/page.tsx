import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RandomTeamGeneratorClient } from '@/components/tools/batch14FunTools'
import { RandomTeamGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('random-team-generator')

export default function RandomTeamGeneratorPage() {
  const tool = getTool('random-team-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('random-team-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RandomTeamGeneratorClient />
        <RandomTeamGeneratorContent />
      </ToolLayout>
    </>
  )
}
