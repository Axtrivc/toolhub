import type { Metadata } from 'next'
import { HomeClient } from '@/components/HomeClient'
import { buildHomeMetadata, jsonLdStringify, websiteJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildHomeMetadata()

/** 首页服务端壳:元数据与结构化数据留在这里,交互渲染由 HomeClient 承担。 */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(websiteJsonLd) }}
      />
      <HomeClient />
    </>
  )
}
