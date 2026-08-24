import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { WeightConverterClient } from '@/components/calculators/batch2Clients'
import { MassConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('mass-converter')

export default function Page() {
  const tool = getTool('mass-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('mass-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        {/* mass-converter 复用 weight-converter 的统一组件:
            两个工具共享同一套单位(mg~t、oz/lb/st、carat、grain),
            仅 SEO 文案/关键词各自独立,避免重复代码。 */}
        <WeightConverterClient />
        <MassConverterContent />
      </ToolLayout>
    </>
  )
}
