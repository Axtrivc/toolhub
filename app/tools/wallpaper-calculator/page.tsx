import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WallpaperCalculatorClient } from '@/components/calculators/batch29Calculators'
import { WallpaperCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('wallpaper-calculator')

export default function WallpaperCalculatorPage() {
  const tool = getTool('wallpaper-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('wallpaper-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('wallpaper-calculator')}>
        <WallpaperCalculatorClient />
        <WallpaperCalculatorContent />
      </ToolLayout>
    </>
  )
}