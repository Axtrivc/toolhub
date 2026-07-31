# ToolHub — Free Online Tools

一个基于 Next.js 15 静态导出的工具站,零服务器成本,部署到 Cloudflare Pages 免费。
定位:英文为主的多工具集合站,通过 SEO 获取流量 + AdSense 变现。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发预览

```bash
npm run dev
```

浏览器打开 http://localhost:3000

### 3. 生产构建

```bash
npm run build
```

构建产物在 `out/` 目录,这是纯静态文件(HTML/CSS/JS),可直接上传任意静态托管。

## 配置(必做)

部署前修改 `next.config.ts` 第 7 行的 `SITE_URL`:

```ts
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://你的域名.com'
```

这个值会影响:
- sitemap.xml 里所有 URL
- canonical 标签
- Open Graph / 结构化数据中的链接

同时修改 `app/contact/page.tsx` 里的邮箱 `hello@example.com` 为你的真实邮箱。

## 部署到 Cloudflare Pages(免费,推荐)

### 方式 A:Git 连接(自动部署)

1. 把项目推到 GitHub
2. 登录 Cloudflare Dashboard → Pages → Create a project → Connect to Git
3. 选择仓库,构建配置填:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. 在 Environment variables 里加:
   - `NEXT_PUBLIC_SITE_URL` = `https://你的域名.com`
5. 点 Deploy,以后每次 push 自动部署

### 方式 B:Wrangler CLI 手动上传

```bash
npm run build
npx wrangler pages deploy out --project-name=toolhub
```

### 绑定域名

1. 在腾讯云 / Cloudflare 买好 `.com` 域名
2. Cloudflare Pages 项目 → Custom domains → 添加你的域名
3. 按提示把域名 NS 改到 Cloudflare(或加 CNAME),等待 SSL 自动签发

## 加新工具(3 步)

1. 在 `app/tools/<工具名>/` 新建目录,写 `page.tsx` 和(可选)`content.tsx`
2. 在 `lib/tools.ts` 加一条配置,把 `published` 设为 `true`
3. 首页、Footer、sitemap 自动更新

参考 `app/tools/slug-generator/` 的实现作为模板。

## 接入 AdSense(账号审核通过后)

1. 在 `.env.local` 加:
   ```
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
   ```
2. 取消 `components/AdSlot.tsx` 里 `AdSenseScript` 的注释
3. 在 `app/layout.tsx` 的 `<head>` 里调用 `<AdSenseScript />`
4. 把 `AdSlot.tsx` 里 production 分支的 `return null` 替换为真实的 `<ins className="adsbygoogle">` 代码

## 技术栈

| 组件 | 选择 |
|---|---|
| 框架 | Next.js 15 App Router + TypeScript |
| 样式 | Tailwind CSS |
| 部署 | Cloudflare Pages(静态导出) |
| 分析 | Cloudflare Analytics + Google Search Console |

## 项目结构

```
app/                  # Next.js App Router 页面
  layout.tsx          # 根布局(SEO meta、结构化数据)
  page.tsx            # 首页
  sitemap.ts          # 自动生成 sitemap.xml
  robots.ts           # 自动生成 robots.txt
  about/ contact/ privacy/ terms/   # AdSense 审核必备页
  tools/
    slug-generator/   # 第一个工具
components/           # 复用组件(Header/Footer/AdSlot 等)
lib/                  # 工具元数据、SEO 函数、slug 逻辑
next.config.ts        # 静态导出配置
```

## 成本

| 项目 | 费用 |
|---|---|
| 域名(.com) | ~¥23-35/年(腾讯云新用户) |
| 托管 | 免费(Cloudflare Pages) |
| SSL/CDN | 免费(Cloudflare) |
| 分析 | 免费(GSC + CF Analytics) |
| **总计** | **~¥30/年** |
