import { getBlogPost } from '@/lib/blog-posts'
import { getFeaturedTools, getPublishedTools } from '@/lib/tools'
import { BlogArticleNavigation } from './BlogArticleNavigation'
import { BlogToolsBanner, type BannerTool } from './BlogToolsBanner'

/** 服务端投影文章策展字段,完整工具注册表不会进入博客客户端 chunk。 */
export function BlogArticleFooter({ articleKey }: { articleKey: string }) {
  const post = getBlogPost(articleKey)
  if (!post) return null

  const publishedTools = getPublishedTools()
  const toolsBySlug = new Map(publishedTools.map((tool) => [tool.slug, tool]))
  const selectedSlugs = post.featuredToolSlugs ?? getFeaturedTools().slice(0, 6).map((tool) => tool.slug)
  const bannerTools: BannerTool[] = selectedSlugs.map((slug) => {
    const tool = toolsBySlug.get(slug)
    if (!tool) throw new Error(`Blog post "${articleKey}" references unknown tool "${slug}"`)
    const { name, shortIntro, category, icon } = tool
    return { slug, name, shortIntro, category, icon }
  })
  const bannerCount = Math.floor(publishedTools.length / 10) * 10

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <BlogArticleNavigation currentSlug={articleKey} />
      <BlogToolsBanner tools={bannerTools} publishedCount={bannerCount} />
    </div>
  )
}
