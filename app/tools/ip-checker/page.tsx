import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { IpCheckerClient } from '@/components/devtools/IpCheckerClient'
import { IpCheckerContent } from './content'

export const metadata: Metadata = buildToolMetadata('ip-checker')

export default function Page() {
  const tool = getTool('ip-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ip-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('ip-checker')}>
        <IpCheckerClient />
        <IpCheckerContent />
      </ToolLayout>
    </>
  )
}
