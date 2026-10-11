import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CronGeneratorClient } from '@/components/tools/batch13Tools'
import { CronExpressionGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('cron-expression-generator')

export default function CronExpressionGeneratorPage() {
  const tool = getTool('cron-expression-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('cron-expression-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('cron-expression-generator')}>
        <CronGeneratorClient />
        <CronExpressionGeneratorContent />
      </ToolLayout>
    </>
  )
}
