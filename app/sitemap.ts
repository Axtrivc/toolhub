import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getPublishedTools } from '@/lib/tools'
import { publishedBlogPosts } from '@/lib/blog-posts'

/** Publish canonical URLs. Only specify lastModified for known article updates. */
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const latestBlogUpdate = publishedBlogPosts.reduce(
    (latest, post) => (post.modifiedAt && post.modifiedAt > latest ? post.modifiedAt : latest),
    publishedBlogPosts[0]?.date ?? '2026-09-05',
  )

  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/tools/` },
    { url: `${SITE_URL}/about/` },
    { url: `${SITE_URL}/contact/` },
    { url: `${SITE_URL}/privacy/` },
    { url: `${SITE_URL}/terms/` },
    { url: `${SITE_URL}/blog/`, lastModified: latestBlogUpdate },
    ...publishedBlogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: post.modifiedAt ?? post.date,
    })),
    ...getPublishedTools().map((tool) => ({
      url: `${SITE_URL}/tools/${tool.slug}/`,
    })),
  ]
}
