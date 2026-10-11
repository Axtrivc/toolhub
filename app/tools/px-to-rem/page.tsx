import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PxToRemClient } from '@/components/webtools/PxToRemClient'
import { PxToRemContent } from './content'

export const metadata: Metadata = buildToolMetadata('px-to-rem')

export default function Page() {
  const tool = getTool('px-to-rem')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('px-to-rem')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('px-to-rem')}>
        <PxToRemClient />
        <PxToRemContent />
      </ToolLayout>
    </>
  )
}
