import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SrtSubtitleShiftClient } from '@/components/texttools/SrtSubtitleShiftClient'
import { SrtSubtitleShiftContent } from './content'

export const metadata: Metadata = buildToolMetadata('srt-subtitle-shift')

export default function Page() {
  const tool = getTool('srt-subtitle-shift')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('srt-subtitle-shift')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('srt-subtitle-shift')}>
        <SrtSubtitleShiftClient />
        <SrtSubtitleShiftContent />
      </ToolLayout>
    </>
  )
}
