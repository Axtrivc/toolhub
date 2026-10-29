import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getPublishedTools } from '@/lib/tools'
import { publishedBlogPosts } from '@/lib/blog-posts'

/**
 * 自动生成的 sitemap.xml
 * Next.js 在 build 时把此文件输出为 /sitemap.xml,提交给 Google Search Console。
 * 加新工具后(在 lib/tools.ts 标记 published: true)会自动出现在 sitemap。
 */

// 静态导出模式(output: 'export')下,metadata 文件需显式声明为静态
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // 固定日期只在本轮真实内容/共享模板修改时更新;绝不使用构建时间。
  const contentReviewDate = '2026-10-29'
  const latestBlogUpdate = publishedBlogPosts.reduce(
    (latest, post) => (post.modifiedAt && post.modifiedAt > latest ? post.modifiedAt : latest),
    publishedBlogPosts[0]?.date ?? contentReviewDate,
  )
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: contentReviewDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/tools/`, lastModified: contentReviewDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about/`, lastModified: contentReviewDate, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/contact/`, lastModified: contentReviewDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy/`, lastModified: contentReviewDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified: contentReviewDate, changeFrequency: 'yearly', priority: 0.3 },
    // 博客(注册表驱动:新文章登记进 lib/blog-posts.ts 后自动收录)
    { url: `${SITE_URL}/blog/`, lastModified: latestBlogUpdate, changeFrequency: 'weekly', priority: 0.7 },
    ...publishedBlogPosts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}/`,
      lastModified: p.modifiedAt ?? p.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  const toolPages: MetadataRoute.Sitemap = getPublishedTools().map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}/`,
    lastModified: contentReviewDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [...staticPages, ...toolPages]
}
