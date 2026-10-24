# ToolHub 全站优化总报告 · 第四波

- **基线 → 终点**:`ab758fa8`(上波 HEAD,编排方给定)→ `7a942b43`(即 `7a942b432764bfb478df24ffc5f33bde35f50032`,实测)
- **基线出处说明**:`ab758fa8` 与第三波报告终点 `00687b3d` 之间**只有一个提交**——`ab758fa8` 本身,提交信息 `docs: 第三波全站优化总报告(…)`(`git log --oneline 00687b3d..ab758fa8` 实测,仅此 1 条)。即基线 = 第三波终点 + 第三波报告文档落盘,两者代码状态完全一致,本波"9 提交/435 文件"区间的起点不受影响。
- **执行日**:2026-10-24(本波三个提交的提交日期均为当日,实测);报告文件名沿用编排方 `2026-10-12-wave4` 系列命名
- **覆盖范围**:共享组件移动端与 l10n 修复(确认 3 / 驳回 2 / 落地 3)→ 12 篇博客页可见文案四语本地化(36 条翻译,head SEO 未动)→ 移动端全页视觉验证(354 张截图,101 问题,修复 31)
- **性质**:全部为修复与本地化——无计算引擎/路由/构建行为变更;博客部分是**用户可见文案的功能新增**(H1、面包屑 Home/Blog 两节、返回链接、阅读时长随 locale 切换;面包屑末节本波以 en 值占位、暂不切换,见第三节),`metadata`/JSON-LD/head 保持英文不动;代码已全部推送远端
- **本轮遵守的既定设计边界**(有意不改,非遗漏):金额/日期/数字格式固定 en-US(如按揭演示格金额仍写 `$400,000`);站点只有 en/zh/es/de 四语;工具名/品牌名/代码示例回退英文是既定设计;**博客页 head 的 metadata(title/description/OG/canonical)英文稳定是 SEO 有意取舍,本波绝对未动**;`⚠️ …` 校验失败文案与 `—` 占位是合法输出;cookie 同意浮层遮底是正常态

> **数字来源说明**:提交清单、文件与行数、推送状态、工作区状态来自本报告撰写时实测的 `git log --oneline ab758fa8..HEAD`、`git diff --stat ab758fa8..HEAD` 及逐提交 `git show`;过程统计(确认/驳回/落地数、翻译条数、截图与问题数、token 消耗)来自编排方给定数据,文中逐处标注。本报告另做了一批**独立复核**(标注"本次实测"):波次区间拆分、62 文件并集勾稽、修复数与提交文件数勾稽、12 篇博客页 metadata 块前后逐字节比对、36 条翻译口径复核、`tsc --noEmit` 与 `tool-smoke.mjs` 复跑、最终构建产物(`out/`)对三项共享修复的落盘验证。凡无法复核的,均如实标注,不做独立背书。

> **修订说明(v2,2026-10-24,回应独立读者评审)**:① 更正本报告 v1 的两处计数错误——批级 concerns 实为 **40 条**(v1 误写 38,B08 实为 5 条/B11 实为 4 条)、三批独占工具合计 **21 个**(v1 误写 20);② 收窄概览句"面包屑随 locale 切换"的口径(实测末节暂不切换);③ 补基线 `ab758fa8` 与 `00687b3d` 的关系实证;④ 标注 B01 建议译值缺 `%` 的矛盾;⑤ Related Tools 取证链补齐同页双证;⑥ 新增 40→18 遗留映射表、构建产物回访证据、跨视口未验声明、101 问题去向缺口、两项补充建议。评审其余各条(B2/B4/B5/B6 为催闭环)在正文对应位置以"口径未附/未披露"自标。

> **术语表**(沿用第三波报告定义,详见 `docs/optimization-report-2026-10-11-wave3.md`):**独占清单** = 每批只允许改的文件清单,清单外只上报不修;**批级 concerns** = 各批次上报的遗留事项流水(本波 B01~B12 共 **40 条**,与第七节 18 条的逐条映射见第七节附表);**「≤40 条」口径** = 编排方对本报告的任务要求原文(「遗留事项(下方 concerns ≤40 条)」),非本报告自设;**落盘/上报** = 改代码提交 / 只记录不改;**截影师** = 负责 next build 与批量截图的角色(本角色按分工不运行 build)。

---

## 一、总览数字

| 维度 | 数字 | 来源 |
| --- | --- | --- |
| 区间提交 | `ab758fa8..HEAD` 共 **9 个提交**,435 文件,+43,034/−227。**口径拆分(重要)**:其中 6 个(`fdc807bb`→`14ef9e16`,2026-10-17/18)提交信息与日期表明属「111 新工具」工程波,**不属于本优化波**;本波为 2026-10-24 的 **3 个提交**。6 个工具波提交的完整名单:`fdc807bb`、`6316fb10`、`e03db34c`、`63d45567`、`377910a9`、`14ef9e16`(`git log` 实测;第七节第 16 条追责 `.mimosa` 时引用的 `6316fb10`/`e03db34c` 即在其中) | `git log --oneline ab758fa8..HEAD` 实测;波次归属按提交信息/日期 + 给定数据三工作流对应关系判定 |
| 本波提交 | ① `9fba848a` 共享组件修复:**3 文件,+13/−6**;② `f5097d27` 博客本地化:**26 文件,+489/−123**;③ `7a942b43` 视觉验证修复:**34 文件,+604/−38** | 逐提交 `git show --stat` 实测 |
| 本波并集 | **62 文件,+1,106/−167**。该数**取自区间命令净差**(`git diff --stat 14ef9e16..HEAD`,实测输出),非逐提交加总;它与逐提交之和(+1,106/−167)恰好相等,本次实测解释了原因:唯一重叠文件 `lib/i18n.ts` 的两段改动互不重叠——`9fba848a` 为 +9/−4(词典键改动),`f5097d27` 为 +11/−0(纯新增博客键),`git show --numstat` 逐提交与区间 numstat(+20/−4)勾稽吻合 | `git diff --stat`/`--numstat` 实测 |
| 共享组件修复 | 确认 **3** / 驳回 **2** / 落地 **3**(落盘于 `9fba848a`,三项与提交三个文件一一对应,见第二节;**候选池规模与提出方未随材料披露**,见第二节末) | 给定数据 + 提交 diff 实测 |
| 博客本地化 | 四语架构接通 **12** 篇;翻译 **36** 条(本次实测勾稽 = 每篇 articleTitle 的 zh/es/de 三语 × 12 篇,见第三节);改动 **26 文件**(12 page.tsx + 12 数据文件 + `BlogArticleBody.tsx` + `lib/i18n.ts`,与给定口径一致);head SEO **0 处变更**(证明方式见第三节) | 给定数据 + `git show f5097d27` 实测 |
| 视觉验证 | 截图 **354** 张(移动端全页 en/zh 全量 + es/de 抽样 + 博客 zh/es/de;**语种/页面分布未随材料提供**,manifest 本角色未持有,逐张清单不可复核);发现问题 **101**,其中落盘修复 **31**(与提交中修复涉及文件 31 个 = 7 代码文件 + 24 词典文件数字吻合,口径是否同一未在材料说明),**其余 70 个的处置去向未随材料分解**(101 = 31 + 70 的"70"侧无 a+b+c+d 对账,类别只能定性举例,见第四节);上报 **438**(给定原值,**口径未附——在口径披露前该数无法与 101/38 之外的任何数勾稽,仅存档不作依据**) | 给定数据 + `git show 7a942b43` 实测勾稽 |
| next build | 通过 | 给定数据;本角色按分工未复跑,无构建日志可附。**旁证(本次实测)**:仓库 `out/` 构建产物时间戳 2026-10-24 15:18,晚于最终提交 `7a942b43`(15:16)约 2 分钟,与本波"最终构建"自洽;且产物内可验证本波三项共享修复已落盘(见第二节"修后证据") |
| 冒烟测试 | 绿(给定)+ 本次实测复跑通过:`node scripts/tool-smoke.mjs` → **SMOKE PASSED**,退出码 0 | 给定数据 + 本次实测 |
| TypeScript 检查 | 本次实测复跑通过:`node node_modules/typescript/lib/tsc.js --noEmit` → 退出码 **0**(最终 HEAD) | 本次实测 |
| git 提交与推送 | 已推送:`git rev-parse HEAD origin/main` 实测两者均为 `7a942b432764…`,与给定最终 HEAD `7a942b4327` 一致 | 本次实测 |
| 工作区 | 不干净(与给定一致):实测 **0 个已跟踪文件修改、92 个未跟踪条目**——全部为并行批次截图切片(`.tmp.vqc-*`)与 `.mimosa/` 等工作产物,非本波代码;另发现 **7 个 `.mimosa` hook-state 文件已被历史提交误入库**(见第七节第 16 条) | `git status --porcelain`、`git ls-files` 实测 |
| token 消耗 | **第四波数据未随给定材料提供**(这是当前唯一的缺口——第一波 token 录于第二波报告、第二/三波可由给定三波累计推导回填,唯独第四波无法参与合计,见第六节) | 给定数据缺口,如实说明 |

---

## 二、共享组件修复明细(确认 3 · 驳回 2 · 落地 3)

权威落点是提交 `9fba848a`(3 文件,+13/−6,实测)。三项确认与三个落盘文件一一对应:

### 修复 1:es 统计对比条标签 w-20 截断,输入/输出两行截后相同不可区分(已修)

- **现象**:文本工具统计对比条的标签列,es 标签「Longitud de entrada/salida」(输入/输出)超过 80px 定宽,truncate 后两行都成「Longitud de …」,无法区分哪条是输入、哪条是输出。
- **根因**:`components/tools/makeTextTool.tsx:241`(修前)标签容器写死 `w-20 shrink-0 truncate`。同款问题旧批 `batchTextTools` 侧已修为 w-32,工厂侧漏改(给定明细)。
- **修法**:`w-20` → `w-32`,并在源码留注释说明原因(修后 `makeTextTool.tsx:240-243`,实测 diff)。

### 修复 2:首页 LiveBento 按揭演示格参数行硬编码英文,es/de/zh 界面串味(已修)

- **现象**:首页 Bento 按揭演示格的参数行硬编码 `'$400,000 · 20% down · 30 yrs'`,在 es/de/zh 界面出现英文 "down"/"yrs"。
- **根因**:`components/home/LiveBento.tsx:226`(修前)字面量直出,未走词典。
- **修法**:改为 `{t(locale, 'bentoMortgageParams')}`(实测 `LiveBento.tsx:226`);`lib/i18n.ts` 新增 `bentoMortgageParams` 键四语值——en `$400,000 · 20% down · 30 yrs` / zh `$400,000 · 20% 首付 · 30 年` / es `$400,000 · 20% entrada · 30 años` / de `$400,000 · 20% Anzahlung · 30 Jahre`(实测 diff)。金额 `$400,000` 按既定设计保持 en-US 数字格式,只本地化单位词。

### 修复 3:首页搜索占位符过长,390px 移动端被 input 原生硬截断成残句(已修)

- **现象**:zh 占位符在 390px 移动端被截成残句且无省略号;核查发现 en 同样过长,而原报告"es/de 放得下"的前提不成立——即四语都有风险(给定明细的确认过程)。
- **根因**:`lib/i18n.ts` 四语 `searchPlaceholder` 均带示例括号段(如 en `Search {count} tools... (e.g. "loan", "json", "kg to lb")`),超出 390px 输入框可视宽度;input 原生截断不产生省略号。
- **修法**:四语统一去掉括号示例段——en `Search {count} tools...` / zh `搜索 {count} 个工具...` / es `Buscar {count} herramientas...` / de `{count} Werkzeuge durchsuchen...`(实测 diff)。
- **取舍说明(v2 补)**:示例词(loan/json/kg to lb)本身有检索引导价值,删除是"可见完整句 > 示例引导"的产品权衡。该依据即给定明细的确认理由(「过长被硬截断成残句」),权衡本身未在材料中记录为正式产品决策,建议补记(见第八节第 5 条)。

### 修后证据(本次实测,构建产物级)

`out/` 构建产物(2026-10-24 15:18,晚于最终提交 2 分钟)逐项验证三项修复已落盘:

1. **修复 3**:`out/index.html` 中 `placeholder="Search 239 tools..."` 存在、旧示例串 `e.g. "loan"` 为 **0 次命中**(`grep -o 'placeholder="[^"]*"' out/index.html` 与 `grep -c 'e\.g\. .loan.' out/index.html` 实测)。
2. **修复 1**:`w-32 shrink-0` 出现在构建 chunk 中(`grep -rl "w-32 shrink-0" out/_next/static/chunks/` 命中 ≥2 个 chunk;统计条为客户端渲染,SSR HTML 中不可见,故以 chunk 为证)。
3. **修复 2**:`out/index.html` 含 `20% down · 30 yrs`(en 值,字典化后 en 输出与修前逐字节一致,系既定设计)。

**边界如实说明**:以上是代码+构建产物证据;**本波材料未包含针对这三项修复的独立截图回访**,视觉级确认(如 zh 页占位符完整显示)未随材料提供。另:**三项修复的 CSS 改动作用于全部视口,本波验证仅覆盖移动端 390px,桌面端布局回归未验**(w-32 加宽标签列、flex-auto/flex-wrap/nowrap 在宽屏的表现未做截影,见第四节覆盖声明)。

### 驳回 2 项:明细与候选池均未披露

2 项驳回的逐项名册与驳回理由**未随给定材料披露**(与第三波"驳回 5 项未披露"同款缺口);此外**确认/驳回的候选池从何而来、共几条、由谁提出**,给定材料同样未载。站长视角提示:驳回比确认更需抽查——误杀真 bug 的代价在驳回侧,建议向编排方调取名册与候选池清单(见第八节第 5 条)。在此之前"确认 3 / 驳回 2"仅有给定口径背书。

---

## 三、博客可见文案本地化(12 篇 · 36 条 · head SEO 0 变更)

权威落点是提交 `f5097d27`(26 文件,+489/−123,实测;与给定"共 26 文件"一致)。

**本波覆盖的 12 篇 slug(实测自提交 name-only)**:`canine-nutrition-and-calorie-guide`、`client-side-cryptography-web-crypto-guide`、`fire-movement-retire-early-playbook`、`home-flooring-and-renovation-math`、`how-i-built-toolhub`、`hysa-vs-cd-wealth-building-guide`、`llm-api-pricing-and-tokenomics`、`metabolism-fasting-and-calorie-deficit`、`mortgage-loan-calculators`、`mortgage-piti-and-amortization-guide`、`pricing-strategies-margin-vs-markup`、`saas-unit-economics-cac-ltv-churn`。

### 架构(四层,数据一次回填、渲染按 locale 切换)

1. **数据层**:`lib/i18n/blog-articles.ts` 新增类型 `LocalizedText = Record<Locale, string>`;`ArticleContent` 接口新增 `articleTitle` / `breadcrumbTitle` 两个四语字段与 `readMinutes: number`(实测 diff,字段注释明示「metadata/JSON-LD 的英文 SEO 标题仍由 page.tsx 管理,不在此列」)。12 个数据文件(`blog-articles.ts` + 11 个 `blog-article-*.ts`)的每篇四个 locale 块各回填同一组三元组。
2. **渲染层**:`components/BlogArticleBody.tsx` 新增 6 个客户端组件(实测新增导出):`BlogArticleTitle` / `BlogCrumbTitle`(按 articleKey 查数据层的四语标题)、`BlogCrumbHome`(渲染既有词典键 `toolHome`:en Home / zh 首页 / es Inicio / de Startseite,`lib/i18n.ts` 实测四语齐备)、`BlogCrumbBlog`(渲染 `navBlog`:en Blog / zh 博客 / …)、`BlogBackLabel`(新键 `blogBackToSite`)、`BlogReadTime`(新键 `blogArticleReadTime`,如 zh `'{count} 分钟阅读'`)。
3. **页面层**:12 个 `app/blog/*/page.tsx` 把可见 H1、面包屑、返回链接、阅读时长替换为上述组件;页面保持 server component,`metadata` 导出与 JSON-LD 不动(页面顶部注释同步改写为「正文与页框文案四语,SEO 字段英文稳定」,实测)。
4. **词典层**:`lib/i18n.ts` 为页框文案新增 `blogBackToSite`、`blogArticleReadTime` 两键 × 四语(实测 diff)。

**切换范围的精确口径(v2 更正,v1 概览句措辞过宽)**:本波实际随 locale 切换的是——H1(`articleTitle`,三语已回填)、面包屑**前两节** Home/Blog(既有词典键,本波接入组件化)、返回链接、阅读时长;**面包屑末节(`breadcrumbTitle`)12 篇全部以 en 值占位、任何语言下暂显示英文短标题**(实测 0 偏离),切换留待后续补译。

一处已声明的偏离(给定说明"按方案,一处偏离需说明"+ 实测印证):**breadcrumbTitle 12 篇全部暂以 en 值占位**(如 `breadcrumbTitle: { en: EN_CRUMB_TITLE, zh: EN_CRUMB_TITLE, … }`);实测 `grep 'breadcrumbTitle: {'` 的 48 行中 0 行偏离 en 占位。机制回退安全(en 值占位即英文原文),后续可单独补译。

### 36 条翻译的口径勾稽(本次实测)

给定"翻译条数 36"。实测:`articleTitle` 每篇回填 zh/es/de 三语译名 × 12 篇 = **36 条**,与给定数吻合(`blog-articles.ts` 与抽样的 `blog-article-web-crypto.ts` 均为每 locale 块 1 行四语 articleTitle、内容逐块相同)。`readMinutes`(如 how-i-built-toolhub 9 分钟)由页面硬编码常量(如 `READ_TIME = '9 min read'`)下沉数据层,按 locale 格式化,不计入翻译条数。

### head SEO 未动的证明方式(本次实测,两层)

1. **逐字节比对**:对 12 篇 page.tsx,提取修前(`f5097d27^`)与修后(`f5097d27`)的 `export const metadata` 导出块(`sed -n '/^export const metadata/,/^}/p'`),`git hash-object --stdin` 哈希两两对比——**12/12 全部 SAME**。
2. **提交 hunk 扫描**:`git show f5097d27 -- 'app/blog/*/page.tsx'` 的全部 ±行中,匹配 `metadata|title:|description:|openGraph|canonical|alternates|jsonLd|twitter` 的只有 **2 行注释改写**(架构注释提及"metadata + JSON-LD"字样),**零字段变更**。

---

## 四、移动端全页视觉验证(354 张 · 101 问题 · 修复 31)

### 截图规模与覆盖

给定数据:截图 **354** 张,覆盖「移动端全页 en/zh 全量 + es/de 抽样 + 博客 zh/es/de」。**语种/页面维度的分布数字未随材料提供**,manifest 本角色未持有,逐张清单不可复核,按给定口径转述。各批 concerns 印证覆盖形态:en/zh 为全页长图(逐屏切片核验,如 B02 记录 4 张截图逐张切片放大、临时切片已清理),es/de 多为首屏 390×844 视口图(折叠线以下覆盖缺口见第七节第 11 条)。**视口维度声明(v2 补)**:本波验证仅移动端;所有修复的 CSS 改动作用于全部视口,桌面端无截影回归(第二节"修后证据"同款边界)。

### 修复落盘(提交 `7a942b43`:34 文件,+604/−38,实测)

给定"修复 31"与提交构成勾稽:**7 个代码/内容文件 + 24 个 `lib/i18n/tools-l10n/*.ts` 词典文件 = 31 个修复涉及文件**(另有 3 个 `.mimosa` hook-state 文件误入该提交,见第七节第 16 条)。"31 处修复"与"31 个文件"是否同一计数口径未在材料说明(与第二波 49/49 同款并列呈现)。

7 个代码/内容文件完整名单与代表修法(逐 hunk 实测):

1. `app/tools/json-to-typescript/content.tsx`(en/zh/es/de 四语处):`interface Foo {` 内联代码后的多余空格剔除。
2. `app/tools/svg-minifier/content.tsx`(四语处):`<strong>` 强调词与后接括号之间补 `{' '}` 显式空格,防 JSX 编译丢空格导致粘连(第三波同类机制的本波个案)。
3. `app/tools/amortization-table-generator/content.tsx`(v2 补名单,v1 漏具名):英文单文块改造为**四语 dispatcher**——`'use client'` + en 分支保持原 JSX 逐字节不变,新增 zh/es/de 分支;头部注释明示「SSR/预渲染时 locale 恒为 'en' → 渲染 en 分支(与改造前字节一致,Google 索引不变)」。
4. `components/tools/batch13Tools.tsx:254-258`(BaseConverter):结果行 `flex-1` → `flex-auto`——es/de 的 Copiar/Kopieren 按钮更宽,`flex-1` 会把数值列挤到约 60px 令 `11111111` 这类短结果中途断行;改后空间不足时按钮整颗换行,数值保持一行(源码留注释)。
5. `components/devtools/DockerRunToComposeClient.tsx:717-718`:标题行加 `flex-wrap` + 间距,右侧操作簇 `shrink-0 whitespace-nowrap`,窄屏不再挤压。
6. `components/calculators/AutoLoanCalculatorClient.tsx:344`:链接补 `shrink-0 whitespace-nowrap`,防 390px 下断行。
7. `components/webtools/CssClampCalculatorClient.tsx:189,210`:表格 th/td 补 `whitespace-nowrap`,防窄屏断行错位。

另 24 个工具 l10n 词典:补 zh/es/de 界面词条(如 `shoe-size-converter.ts` +25 行、`word-counter.ts` +33 行)。

### 修复验证结论与前轮回归

各批 concerns 记录:上一轮(377910a9)的收藏按钮修复在本波 4 张截图中全语种回归通过(en ♡ Save / zh ♡ 收藏 / es ♡ Guardar / de ♡ Merken 均为紧凑胶囊,无挤压标题、无换行异常,B07);es/de 首屏德语长词(Winkel-Umrechner / Flächen-Umrechner / Zeilennummern hinzufügen 等)全部正常换行无溢出;结果卡、统计卡、FAQ、长文、页脚 sitemap 无溢出/横向滚动/截断/错位;未发现裂图、裸 HTML、错误边界或 locale 串味(B02)。本波自身三项共享修复的视觉级回访截图未随材料提供(构建产物级证据见第二节"修后证据")。

### 问题去向(给定数据的缺口,v2 补)

给定三数:发现问题 101、落盘修复 31、上报 438(口径未附)。**101 − 31 = 70 个未修复问题的处置名册未随材料分解**——按批级 concerns 只能定性举例其去向类别(截图伪影/共享组件与共享数据只上报/既定回退设计/覆盖率受限无法判定),给不出 a+b+c+d 的对账。本报告第七节收录的 40 条批级 concerns 是其中"上报未修"部分的可追溯子集(40→18 映射见第七节附表);438 与 101/70/40 的关系在口径披露前无法建立。

### 新发现(以下 8 条为概括,来源:B01~B12 批级 concerns + 本次 git 实测)

1. **「Related Tools」卡片在全页长图中呈空白带**(**九个批次** B02/B03/B04/B06/B08/B09/B10/B11/B12 一致上报,本波最高频观察):标题与页脚之间约 700–950px 空带。已取证为**截图伪影**而非布局 bug——同页双证(以 add-line-numbers 页为例,两条证据腿均出自本报告会话):数据腿 `npx tsx -e "import {getRelatedToolsLite} from './lib/related-tools'; …('add-line-numbers',4)"` 返回 `["word-counter","character-frequency","csv-to-markdown-table","email-extractor"]`;静态腿对 `out/tools/add-line-numbers/index.html` 的 related-tools 段(`sed -n '/related-tools-heading/,…'`)提取 href 恰为同名 4 条。成因:卡片包在 `AnimatedToolCard`/`StaggerGroup` 的 `whileInView` 入场动画里(`components/motion/MotionPrimitives.tsx:48-66, 267-272`,初始 opacity:0),整页截图不滚动故 IntersectionObserver 不触发。跨页同构佐证:`getRelatedToolsLite('aes-encrypt-decrypt',4)` 返回 bcrypt-hash-generator/hash-comparator/hmac-generator/password-entropy-checker(B03 批对应页面),`RelatedTools.tsx`/`MotionPrimitives.tsx` 在本波区间**零改动**(`git log ab758fa8..HEAD -- <两文件>` 为空,实测)。与 377910a9/63d45567 既有「页脚空带=截图伪影不予盲改」裁定同类;真实滚动正常入场,SEO 内链在 SSR HTML 中。属共享组件,按作业规则只上报未修。
2. **公式区 variables/explain/example 散文英文回退**(7 个批次上报):zh/es/de 页「公式与原理」段标题已本地化,但变量说明、解释段、算例正文为英文。取证为**共享层既定回退设计**:`components/FormulaSection.tsx:23-25` 注释明示缺译回退英文;各 bundle 头注(如 `lib/i18n/tools-l10n/401k-match-calculator.ts:3`)自述仅覆盖 faqs/useCases 或 formula+explain;全站共享注册表 `lib/tool-formulas.ts`(225 个工具统一英文)覆盖 350 工具行为一致。单改会破坏一致性,未动。
3. **共享组件三处上报**(均不在独占清单,只上报;定性 v2 统一):① en 页 Scale 标尺结果标签 `10.7639 Square feet (…` 被截断——`components/charts/MagnitudeRuler.tsx:85,114` 写死 `max-w-32 truncate`。**定性:防标签重叠的有意上限,但该上限产生了真实用户可见的截断代价**——是否维持属"防重叠 vs 长标签完整性"的权衡,需 owner 二选一定夺,本报告不预设结论;② en 页 About 模板病句「The Area Converter converts area converter from one unit to another」——`components/ToolInfoSection.tsx:115` 把 registry `keywords[0]` 直填模板,而各 converter 的 `keywords[0]` 恰为工具名本身(`lib/tools.ts:2620`),系统性影响所有 converter 页;③ 公式区 Variables 多行 `\n` 渲染进 `<p>` 换行折叠粘连成一句(`lib/tool-formulas.ts:657` + `components/FormulaSection.tsx:49`),建议加 `whitespace-pre-line`。
4. **滑杆未填充段不可见**(B05):`CalculatorField.tsx:199` 未填充色与 `:282` 面板背景同为 `bg-subtle`,滑杆在灰底上看似"短一小截";`globals.css:437-439` 注释表明是明示设计取舍,全站计算器共有,未动。
5. **l10n 补译缺口**:① `inSuffix.matchLimitPct`("% of pay")未译,机制已支持且同站有先例(`makeCalculatorClient.tsx:178`、`tools-l10n/cd-calculator.ts:47`);② angle-converter 等 8 个 bundle 的 formula 散文缺四语覆盖(同期 86 个工具已有,修法参照 `tools-l10n/average-calculator.ts:39`);③ 全站约 **115/350** 个工具 `content.tsx` 为纯英文长文(B06),zh/es/de 页中部出现英文块,属全站内容工程。
6. **覆盖率限制**:es/de 截图多为 390×844 首屏,折叠线以下(结果卡/FAQ/相关工具/页脚)仅 en/zh 全页可验、es/de 未实际目视;B04 批 es/de 首屏统计标签区恰被 cookie 浮层遮住(正常态),该项以 en/zh 全页替代验证通过;3 个批次(B05/B08/B10)的 **21 个**独占工具中仅 3 个获得截图,其余仅静态审读。
7. **误入库文件(本次实测新发现)**:`lib/i18n/tools-l10n/.mimosa/**` 下 **7 个** hook-state 工作文件已被提交进仓库(3 个随本波 `7a942b43`,4 个随 111 工具波的 `6316fb10`(3 个)/`e03db34c`(1 个),逐提交 `git show --name-only` 实测;两提交均在上文 6 个工具波提交名单内),属编排工具的工作产物,不应入库。
8. **文案风格观察(不属缺陷)**:zh 长文通篇半角逗号(全站风格问题,B01);401k-match zh 预设胶囊保留英文公式术语「50% up to 6%」(zh bundle 全文一致将其当引用术语,判定有意风格,B01);annuity 页 About 模板句 slug 直填措辞生硬(共享 aboutIntro 模板,B08)。

---

## 五、验收结果

| 检查项 | 结果 | 证据 |
| --- | --- | --- |
| next build | 通过 | 给定数据;本角色按分工**未复跑**(由截影师负责)。旁证:`out/` 产物时间戳(2026-10-24 15:18)晚于最终提交(15:16)约 2 分钟,且产物内含本波修复的落盘痕迹(第二节,本次实测) |
| 冒烟测试 | **绿,本次实测复跑通过** | `node scripts/tool-smoke.mjs` → `SMOKE PASSED — all captured factory configs computed cleanly at locale 'en'`,退出码 0(本次实测) |
| TypeScript | **通过,本次实测复跑通过** | `node node_modules/typescript/lib/tsc.js --noEmit` → 退出码 0(最终 HEAD,本次实测) |
| 推送状态 | **已推送** | `git rev-parse HEAD origin/main` 均为 `7a942b432764…`(本次实测),与给定最终 HEAD `7a942b4327` 一致 |
| 工作区 | 不干净(给定一致),但**零已跟踪文件修改** | `git status --porcelain` 实测:92 个未跟踪条目全为 `.tmp.vqc-*` 截图切片、`.mimosa/` 等并行会话产物 |
| 博客 head SEO 不变性 | **12/12 页通过** | metadata 导出块前后哈希逐字节相同 + 提交 hunk 扫描零字段变更(第三节,本次实测) |
| 桌面端回归 | **未验证** | 本波验证材料仅移动端;修复的 CSS 改动作用于全视口,桌面截影未随材料提供(如实标注) |
| 零改动批次的验证边界 | B04 批独占范围内零缺陷故未跑 tsc 作为改动验证;B06/B07/B11 批各自记录 `tsc --noEmit` 退出码 0 | 批级 concerns 原文 |

---

## 六、累计账本(四波合计)

| 波次 | token | 修复数(各波报告口径) |
| --- | --- | --- |
| 第一波(→ `de68431b`) | **659,937,432**(给定,录于第二波报告) | 审计修复 323 处(94 批)+ 博客改进 31 处 + 终检巡逻 41 处 |
| 第二波(→ `5a93063d`) | **644,499,822**(推导 = 前两波累计 1,304,437,254 − 第一波) | 四语精修 739 处 + 遗留清单落地 8 项 + 视觉修复 49 处;perf −36,011 KiB |
| 第三波(→ `00687b3d`) | **163,699,288**(本波推导 = 给定三波累计 1,468,136,542 − 前两波 1,304,437,254;第三波材料当时未附,本波给定数据补齐了累计值) | 共享 bug 落地 83(给定;第三波报告实测可复现 93,两数差 10 至今未裁决——本次复跑 `git show f2d7c142 \| grep -c "^+.*{' '}"` 仍为 **93**;账本按给定 83 计,93 并列备考)+ 德语引号 142 对 + 视觉修复 18 处;bundle −322,234.2 KiB |
| 第四波(→ `7a942b43`) | **未随给定材料提供**(当前唯一缺口,见第一节) | 共享组件修复落地 3 处 + 视觉验证修复 31(**处/文件口径未定**,见第四节) = **34(口径继承,可加性存疑)**;另:博客可见文案四语化 **36 条翻译 + 2 词典键**(功能新增,不计入修复) |
| **四波合计** | **≥ 1,468,136,542**(= 给定三波累计;第四波缺失,精确合计不可得) | 按各波口径简单加总 ≈ **1,468**(1,434 + 34;各波计数单位不一——处/项/对,且 31/34 的口径未定、83/93 未裁决,合计仅供量级参考,不作精确口径背书) |

> **token 口径说明(v2 精确化)**:第一波 token 有给定记录(经第二波报告转存),第二、三波可由给定累计值推导回填,**唯一缺失的是第四波**——v1「连续第四波缺口」表述不准,已更正。四波合计只能给到下界(给定三波累计 1,468,136,542)。推导值(第二波 644,499,822、第三波 163,699,288)引用时请注明非直接给定。账本价值因缺口递减,流程闭环见第八节第 5 条。

---

## 七、遗留事项(18 条,自 40 条批级 concerns B01~B12 去重合并 + 本次复核新增;≤40 条口径,出处见术语表)

### A. 截图伪影(已取证,非代码 bug,需 owner 决策)

1. **[高频] Related Tools 卡片全页长图空白带**(B02/B03/B04/B06/B08/B09/B10/B11/B12 九批一致):en/zh 全页长图中「相关工具/Related Tools」标题与页脚之间约 700–950px 空带(空带高度与单列 4 卡吻合)。取证链(以 add-line-numbers 页为例,双证同页,均出自本报告会话,见第四节新发现 1):数据存在 + 静态导出内链在(`components/RelatedTools.tsx:40-42` 仅空数组返回 null)→ 成因是 `AnimatedToolCard`/`StaggerGroup` 的 `whileInView` 入场动画(`components/motion/MotionPrimitives.tsx:64` hidden `{opacity:0,y:32,scale:0.96}`、`:267-272` viewport once margin −48px),整页截图(captureBeyondViewport 不滚动)下 IntersectionObserver 不点火,卡片以 opacity:0 占位。同页非动画内容(FAQ、Embed、页脚 sitemap)全部正常,与机制吻合;与 377910a9/63d45567 既有「页脚空带=截图伪影不予盲改」裁定同类。真实用户滚动时正常入场。若要长图/打印场景也完整:可给 motion 组件加静态 SSR 首帧不透明兜底,或截图管线先逐屏滚动稳定后拼接/截图时禁用入场动画——均属行为变更,需共享组件 owner 决策,本波未动。

### B. 共享 l10n 回退与补译缺口(既定设计的已知边界)

2. **formula 变量说明/解释/算例散文英文回退**(B01/B04/B05/B06/B07/B08/B11):zh/es/de 页公式区段标题已本地化、正文英文。取证:`components/FormulaSection.tsx:15-16,23-27` 注释明示缺译字段回退英文原值;`lib/tool-formulas.ts:55-59,657,771-778` 为全站共享英文注册表(225 个工具);各 bundle 头注自述覆盖范围(`401k-match-calculator.ts:3` 等 8 个同批 bundle 仅 faqs+useCases;`amortization-table-generator.ts`、`annuity-calculator.ts` 只覆盖 formula+explain 等)。全站 350 工具行为一致,单改破坏一致性,且 `lib/i18n` 不在各批独占清单,均未修。若要覆盖:参照 `tools-l10n/average-calculator.ts:39` 的 formula 四语结构,按 bundle **整批**补译(建议 ≥8 个同批 bundle 一起),由 lib/i18n 归属方执行。
3. **`inSuffix.matchLimitPct` 单位后缀未译,且批次建议译值疑漏 `%`**(B01;v2 补矛盾标注):401k-match 页输入单位后缀 "% of pay" 非 en 保持英文。机制已支持 l10n 键 `inSuffix.<key>`(`components/calculator/makeCalculatorClient.tsx:178`),en 现值为 `suffix: '% of pay'`(`components/calculators/batch24Calculators.tsx:131`,**带 %**),同站先例 `tools-l10n/cd-calculator.ts:45-47`('$'、'%'、'% 期限',**均带符号**)。B01 批建议补键 zh '占工资比例' / es 'del salario' / de 'des Gehalts'——**三个建议值均不含 `%`**,照录落地界面将从「6 % of pay」变「6 del salario」。本文按原建议转述并如实标注矛盾;% 的位置(如 zh '占工资 %')须由归属方裁决后再落键,本报告不代裁。
4. **公式区 Variables 列表连成一句 + example 文案**(B09):`lib/tool-formulas.ts:657` variables 以 `\n` 分行,但 `components/FormulaSection.tsx:49` 渲染进 `<p>`,HTML 换行折叠为空格,产出「square kilometers ha = hectares…」粘连;同库 example「m² = 2 × 10,000…」缺 ha 符号、读起来突兀。修法建议 FormulaSection 变量行加 `whitespace-pre-line` 并顺带核对 example 文案。共享组件+共享数据,未改。
5. **全站约 115/350 工具 `content.tsx` 纯英文**(B06):非四语 dispatcher,zh/es/de 页面中部出现英文长文块。属全站内容工程,不属单批,已仅修本批工具。

### C. 共享组件上报项(不在独占清单,只上报;定性逐条给出)

6. **en 页 About 模板病句**(B08/B09):「The Area Converter converts area converter from one unit to another」/「The Annuity Calculator lets you figure out annuity calculator instantly…」。根因:`components/ToolInfoSection.tsx:115` 模板把 registry `keywords[0]` 直填,而各 converter 的 `keywords[0]` 即工具名本身(`lib/tools.ts:2620`);annuity 页同类来自共享 `aboutIntro` 模板 slug 直填。系统性影响所有 converter 页 en 文案,共享组件+注册表数据均不在独占清单,未改。
7. **en 页 MagnitudeRuler 标签截断**(B09):`components/charts/MagnitudeRuler.tsx:85,114` 对标签写死 `max-w-32 truncate`,长单位标签超 128px 即省略(「10.7639 Square feet (…」)。定性(v2 统一):**有意设计(防近点标签重叠),但产生了真实可见截断**——是否调整属权衡决策,需 owner 权衡"防重叠回归 vs 长标签完整性"后定夺;zh 页因标签短不受影响。建议归共享组件轮处理。
8. **滑杆未填充段在灰底面板上不可见**(B05):`components/calculator/CalculatorField.tsx:199` 未填充色 `bg-subtle` 与 `:282` 面板背景同色,滑杆只剩填充段+thumb 可见、看似"短一小截"。`globals.css:437-439` 注释表明是明示设计取舍,全站 `makeCalculatorClient` 计算器共有、非本波引入;改色需动共享组件/全局 CSS,按"只准改进不准变差"未动。

### D. 文案风格判定(不改)

9. **zh 预设胶囊保留英文公式术语**(B01):401k-match zh「典型:50% up to 6%」保留英文短语而 es/de 已译。判定为**有意风格**:zh bundle 全文一致地把「50% up to 6%」当作引用的公式术语(zh FAQ 标题与 note 同样保留),与代码/公式回退英文的既定设计一致。
10. **zh 长文通篇半角逗号**(B01):全站 zh 文案风格问题而非页面渲染缺陷,不属视觉修复范围,未动;排期归属建议见第八节第 4 条。

### E. 覆盖率与验证限制(如实记录)

11. **es/de 折叠线以下未覆盖**(B03/B04/B07/B09/B11):es/de 截图多为 390×844 首屏视口图,结果卡/图表/表格/FAQ/页脚仅经 en/zh 全页长图验证,es/de 未实际目视(B11 明示"按 zh 全页同构推断,未逐屏验证")。B04 批 es/de 首屏统计标签区恰被 cookie 浮层遮住(合法正常态),「统计标签不再截断」以 en/zh 全页替代验证(TOTAL DAYS 9,793 / TOTAL HOURS 235,032、总天数/总小时数完整可读);es/de 首屏其余项(收藏胶囊、表单标签、德语长词、面包屑)均通过。B06 批无 es/de 首屏统计图带,该检查项不适用。**桌面端视口全站未验**(见第四/五节)。
12. **多工具本波无截图**(B05/B08/B10,合计 21 个独占工具 = 8+8+5,其中仅 3 个有截影):B05 批 8 个仅 amazon-seller-fee 有截影(conversion-rate/etsy-fee/gym-cost-per-visit/nps/paypal-fee/square-fee/youtube-money 与 batch25Calculators 仅静态审读 + tsc);B08 批 8 个仅 annuity(body-fat/capital-gains/macro/net-worth/pregnancy/rent-vs-buy/savings-goal 未获渲染截图);B10 批 5 个仅 ascii-table(hmac-generator/log-filter-tool/reading-level-checker/screen-time-calculator 未核验)。均如实说明,未推断。
13. **零改动/验证通过批次**(B02/B04/B07/B08):B02 批 4 张截图在独占文件内未发现可修缺陷(收藏按钮 4 语紧凑胶囊、es/de 长词正常换行、无溢出/裂图/裸 HTML/串味);B04 批 age-calculator 独占范围内零缺陷,保持零修改(无改动故未跑 tsc 作为改动验证);B07 批收藏按钮 4 语回归通过;B08 批零代码改动。均为按"没把握的改动一律不改"的正常结果,非遗漏。

### F. 流程与仓库卫生(本报告复核新增)

14. **驳回明细与候选池未披露**(第二节):2 项驳回的名册/理由、确认与驳回的候选池规模及提出方,均未随给定材料提供,建议调取。
15. **第四波 token 未提供**(第六节):当前唯一缺口(v2 精确化表述),四波合计只能给下界。
16. **`.mimosa` 工作文件误入库**(本次实测新发现):`git ls-files` 实测 **7 个** `lib/i18n/tools-l10n/.mimosa/**` hook-state/status 文件已被跟踪(3 个随本波 `7a942b43`,4 个随 111 工具波的 `6316fb10` 3 个 + `e03db34c` 1 个,逐提交 name-only 实测;两提交均属第一节列明的 6 个工具波提交)。属编排工具工作产物,建议下轮 `git rm -r --cached lib/i18n/tools-l10n/.mimosa` 并补 `.gitignore` 规则(连同根 `.mimosa/`)。
17. **「上报 438」与「101−31=70」两个口径缺口**(第一节/第四节):438 的计数口径未附(在披露前不可用于勾稽);70 个未修复问题的处置名册未分解。两者均需编排方补口径。
18. **本报告未运行 next build**(按分工由截影师负责):build「通过」仅有给定数据背书;旁证为 `out/` 产物时间戳与产物内修复痕迹、本次实测的 `tsc --noEmit` 与 `tool-smoke.mjs` 复跑(均通过)。

### 附表:40 条批级 concerns → 18 条遗留的逐条映射(回应评审 B3)

| 批次(条目序号) | 去向 |
| --- | --- |
| B01①②③④ | 遗留 2 / 遗留 3 / 遗留 9 / 遗留 10 |
| B02①②③ | 遗留 1 / 遗留 13 / 第五节(本报告已复跑 tsc/smoke)+ 遗留 18 |
| B03①② | 遗留 1 / 遗留 11 |
| B04①②③④ | 遗留 1 / 遗留 2 / 遗留 11 / 遗留 13 |
| B05①②③ | 遗留 8 / 遗留 2 / 遗留 12 |
| B06①②③④ | 遗留 1 / 遗留 2 / 遗留 5 / 第五节 + 遗留 18 |
| B07①②③ | 遗留 2 / 遗留 11 / 遗留 13 |
| B08①②③④⑤ | 遗留 1 / 遗留 2 / 遗留 6 / 遗留 12 / 遗留 13 |
| B09①②③④⑤ | 遗留 1 / 遗留 7 / 遗留 6 / 遗留 4 / 遗留 11 |
| B10①② | 遗留 1 / 遗留 12 |
| B11①②③④ | 遗留 1 / 遗留 2 / 遗留 11 / 第五节 + 遗留 18 |
| B12① | 遗留 1 |

> 映射合计:40 条全部有去向——遗留 1×9、2×7、3×1、4×1、5×1、6×2、7×1、8×1、9×1、10×1、11×5、12×3、13×4(以上 37 条),另 3 条纯验证记录(B02③/B06④/B11④)归第五节与遗留 18。v1 曾写"38 条",系 B08(实为 5 条)与 B11(实为 4 条)漏计,已更正。

---

## 八、下一轮建议

1. **清理误入库/临时产物**:① `git rm -r --cached lib/i18n/tools-l10n/.mimosa` + `.gitignore` 规则(第七节第 16 条,本波与 111 工具波均已发生);② 92 个未跟踪条目的大头 `.tmp.vqc-*` 截图切片目录,建议编排方统一裁决——属并行会话工作产物,批量清理前需确认无批次仍在引用,至少补 `.gitignore` 防再入库。
2. **裁决 Related Tools 截图伪影的根治方案**(**九个批次**重复上报,成本最高的一类重复观察):由共享组件 owner 在「motion 组件加静态 SSR 首帧不透明兜底」与「截图管线先滚动后拼接」之间二选一;无论选哪个,均应先在全站回归入场动画体验。
3. **formula 散文补译立项**:按 `tools-l10n/average-calculator.ts:39` 的既有结构,整批补齐 8+ 个 bundle 的 formula 四语覆盖,并顺手处理 FormulaSection 的 `whitespace-pre-line`(第七节第 4 条,一处改动消除整类粘连);中期把 115/350 纯英文 `content.tsx` 与 **zh 半角标点风格统一**(第七节第 10 条)一并纳入全站内容工程排期,给出归属与节奏。
4. **共享组件上报项逐一裁决**:ToolInfoSection 模板对 `keywords[0]` 的直填(converter 全军病句)、MagnitudeRuler 标签宽度(有意上限 vs 可见截断的权衡)、滑杆未填充段配色、`inSuffix.matchLimitPct` 补键(**先裁决 % 的位置再落值**,第七节第 3 条)——四者均需 owner 决策,不宜搭车修改。
5. **流程闭环**:① 驳回明细与候选池清单随波披露(连续两波缺口);② 第四波 token 纳入给定数据,恢复累计账本可加性;③ 「上报 438」类数字附计数口径,并给出 101−31=70 的去向分解;④ 修复类产品权衡(如本波删除占位符示例词的"完整句 > 检索引导"取舍)记入正式决策记录,便于后续回看;⑤ 本波三项共享修复安排一次桌面端+移动端截图回访,补齐视觉级证据。
