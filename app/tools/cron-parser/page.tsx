import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CronParserClient } from '@/components/calculators/CronParserClient'
import { CronParserContent } from './content'

export const metadata: Metadata = buildToolMetadata('cron-parser')

export default function Page() {
  const tool = getTool('cron-parser')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('cron-parser')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CronParserClient />
        <CronParserContent />
      </ToolLayout>
    </>
  )
}
