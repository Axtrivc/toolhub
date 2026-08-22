# ToolHub — Free Online Tools

一个基于 Next.js 16 静态导出的工具站,零服务器成本,部署到 Cloudflare Pages 免费。
定位:英文为主、四语言 i18n(en/zh/es/de)的多工具集合站,通过 SEO 获取流量 + AdSense 变现。

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

在 `.env.local` / Cloudflare Pages 环境变量加 `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX`,重新部署即可——脚本注入、`google-adsense-account` 验证 meta、广告位渲染均已就绪(`components/AdSlot.tsx`)。投放受 Cookie 同意横幅门控:用户选择"接受全部"后才加载。

## 访客统计

分两层,相互独立:

### A. 站内访客计数器(Footer 可见,Pages Functions + D1)

代码已内置:Footer 底栏显示"总访问 / 今日访问 / 今日访客",整刷与站内路由切换各计一次 PV,按匿名访客 ID(每日轮换哈希,无 cookie)去重 UV。只差一步绑定 D1 数据库:

1. Cloudflare Dashboard → **Storage & Databases → D1 → Create**,名字随意(如 `toolhub-stats`),区域默认
2. Pages 项目 → **Settings → Functions → D1 database bindings** → 添加:Variable name 填 **`DB`**,选择刚建的库(Production + Preview 都加)
3. Deployments → Retry deploy

首次请求会自动建表(`functions/api/stats.ts` 里的幂等 DDL),无需手工执行 SQL。表结构:`counters`(累计 PV,只增不减)+ `visits`(180 天滚动的访问明细,支撑今日/按工具聚合)。想直接看 SQL:Dashboard → D1 → toolhub-stats → Console。

未绑定 D1 时(本地 `next dev`、其它静态托管)接口 404/503,前台计数器自动隐藏,页面零残留。防刷:同一访客 2 秒内重复上报只记一次。

### B. Cloudflare Web Analytics(面板分析,免费可选)

Dashboard 里看 PV/UV、来源国家、热门路径(SPA 路由自动上报),与 A 互补:

1. Cloudflare Dashboard → **Analytics & Logs → Web Analytics → Add a site**,填 `toolhub.axtrivc.com`
2. 复制给出的 **JS beacon token**
3. Pages → Settings → Environment variables 添加 `NEXT_PUBLIC_CF_ANALYTICS_TOKEN=你的token`
4. Deployments → Retry deploy(静态导出时 `NEXT_PUBLIC_*` 在构建期内联进产物,改变量必须重新 build)

无 cookie、无跨站追踪、不做个人识别,与隐私政策"privacy-friendly, aggregate analytics"承诺一致,不经同意横幅门控。

可选:GA4(可与 AdSense 联动看收益归因)。加 `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` 重新部署即可。GA4 依赖 cookie,合规起见仅在用户对横幅选择"接受全部"后才加载,SPA 路由切换也会补发 page_view。

## 技术栈

| 组件 | 选择 |
|---|---|
| 框架 | Next.js 16 App Router + TypeScript |
| 样式 | Tailwind CSS + 语义化设计 token(明暗主题) |
| 动效 | Framer Motion(按列交错入场、卡片悬浮、reduce-motion 降级) |
| 部署 | Cloudflare Pages(静态导出) |
| PWA | Service Worker(惰性缓存 + network-first HTML + SWR 静态资源) |
| i18n | 四语言(en/zh/es/de),客户端组件随语言切换 |
| 分析 | Cloudflare Analytics + Google Search Console |

## 项目结构

```
app/                  # Next.js App Router 页面
  layout.tsx          # 根布局(SEO meta、结构化数据)
  page.tsx            # 首页
  sitemap.ts          # 自动生成 sitemap.xml
  robots.ts           # 自动生成 robots.txt
  about/ contact/ privacy/ terms/   # 合规必备页
  blog/               # 技术博客(架构复盘等长文)
  tools/              # 169 个工具页(每个 <slug>/page.tsx)
    slug-generator/   # 示例工具
components/           # 复用组件(Header/Footer/AdSlot/CalculatorField 等)
  motion/             # FramerMotion 动效原语(AnimatedToolCard/StaggerGroup 等)
lib/                  # 工具元数据、SEO/JSON-LD 函数、cron、slug、i18n
public/sw.js          # Service Worker(PWA 离线)
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
