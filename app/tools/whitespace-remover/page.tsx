import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TextCleanerClient } from '@/components/texttools/TextCleanerClient'
import { WhitespaceRemoverContent } from './content'

export const metadata: Metadata = buildToolMetadata('whitespace-remover')

export default function Page() {
  const tool = getTool('whitespace-remover')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('whitespace-remover')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        {/* 升级为 Text Cleaner:整合空白/空行/去重/排序的增强版组件,默认勾选 collapse+trim+dropEmpty */}
        <TextCleanerClient slug="whitespace-remover" />
        <WhitespaceRemoverContent />
      </ToolLayout>
    </>
  )
}
