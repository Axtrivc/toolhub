import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DockerRunToComposeClient } from '@/components/devtools/DockerRunToComposeClient'
import { DockerRunToComposeContent } from './content'

export const metadata: Metadata = buildToolMetadata('docker-run-to-compose')

export default function Page() {
  const tool = getTool('docker-run-to-compose')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('docker-run-to-compose')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('docker-run-to-compose')}>
        <DockerRunToComposeClient />
        <DockerRunToComposeContent />
      </ToolLayout>
    </>
  )
}
