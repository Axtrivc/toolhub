import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RobotsTxtGeneratorClient } from '@/components/tools/batch10Tools'
import { RobotsTxtGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('robots-txt-generator')

export default function RobotsTxtGeneratorPage() {
  const tool = getTool('robots-txt-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('robots-txt-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('robots-txt-generator')}>
        <RobotsTxtGeneratorClient />
        <RobotsTxtGeneratorContent />
      </ToolLayout>
    </>
  )
}
