import type { MetadataRoute } from 'next'
import { SITE_URL } from '../next.config'

/**
 * robots.txt - 控制爬虫访问
 * 默认全部允许,并指向 sitemap。
 * 如果某些页面不想被收录(如管理后台),在此加 Disallow。
 */

// 静态导出模式(output: 'export')下,metadata 文件需显式声明为静态
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // 无需屏蔽的页面留空;未来如有不想收录的页面在此加,例如:
        // disallow: ['/admin/', '/draft/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
