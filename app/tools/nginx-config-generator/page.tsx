import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { NginxConfigGeneratorClient } from '@/components/devtools/NginxConfigGeneratorClient'
import { NginxConfigGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('nginx-config-generator')

export default function Page() {
  const tool = getTool('nginx-config-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('nginx-config-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('nginx-config-generator')}>
        <NginxConfigGeneratorClient />
        <NginxConfigGeneratorContent />
      </ToolLayout>
    </>
  )
}
