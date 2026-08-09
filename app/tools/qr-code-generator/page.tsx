import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { QRCodeGeneratorContent } from './content'

// QR 生成器主体依赖 qrcode 库(较重)→ 动态导入,独立 chunk 按需加载,
// 不拖累工具页首屏 JS(静态导出下仍会在 build 时预渲染 HTML)。
const QRCodeGeneratorClient = dynamic(() =>
  import('@/components/tools/QRCodeGeneratorClient').then((m) => m.QRCodeGeneratorClient),
)

export const metadata: Metadata = buildToolMetadata('qr-code-generator')

export default function QRCodeGeneratorPage() {
  const tool = getTool('qr-code-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('qr-code-generator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout tool={tool}>
        <QRCodeGeneratorClient />
        <QRCodeGeneratorContent />
      </ToolLayout>
    </>
  )
}
