import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getPublishedTools } from '@/lib/tools'

/**
 * 自动生成的 sitemap.xml
 * Next.js 在 build 时把此文件输出为 /sitemap.xml,提交给 Google Search Console。
 * 加新工具后(在 lib/tools.ts 标记 published: true)会自动出现在 sitemap。
 */

// 静态导出模式(output: 'export')下,metadata 文件需显式声明为静态
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/tools/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    // 技术博客(英文长文,面向 HN/极客社区 + SEO 拓展)
    { url: `${SITE_URL}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${SITE_URL}/blog/how-i-built-toolhub/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  const toolPages: MetadataRoute.Sitemap = getPublishedTools().map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [...staticPages, ...toolPages]
}
