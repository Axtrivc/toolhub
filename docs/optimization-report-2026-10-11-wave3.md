# ToolHub 全站优化总报告 · 第三波(2026-10-11 ~ 10-12)

- **基线 → 终点**:`e02a8546`(第二波报告提交)→ `00687b3d`(即 `00687b3da6a21565c8b80ad67205fb447758cd33`)
- **覆盖范围**:共享组件 bug 修复(阅读时长公式、JSX 丢空格)→ 工具词典 chunk 懒加载瘦身(−43.41%)→ 德语引号统一 „…“ → 移动端与 es/de 视觉检测补全
- **性质**:无业务计算引擎/路由变更;含**展示层计算修正**(阅读时长公式 60 倍膨胀、年龄单位单复数)与用户可见的**文案排版变更**(丢空格修复使 213 页关键词不再粘连、德语引号 142 对、视觉修复 18 处);代码已全部推送远端
- **本轮遵守的既定设计边界**(有意不改,非遗漏):金额/日期/数字固定 en-US 格式;站点只有 en/zh/es/de 四语、无法语;`⚠️ …` 校验失败文案与 `—` 占位是合法输出;`toNum` 粘贴宽容化是特性;击键类工具输出区不加 aria-live 是已定决策;tui 缺译回退英文是既定设计;SEO 字段(title/description)英文稳定是静态导出下的有意取舍;博客页 H1/面包屑英文属已上报待产品决策项

> **数字来源说明**:提交清单与文件行数来自实测 `git log --oneline e02a8546..HEAD` 与 `git diff --stat e02a8546..HEAD`;过程统计(共享 bug 确认/驳回/落地数、bundle 前后数字、引号对数、视觉截图与问题数、token 消耗)来自编排方给定数据,文中逐处标注。本修订版另做了一批**独立复核**(标注"本次实测"),包括:文件数口径勾稽、`{' '}` 修复数可复现数法、101 个导入方去向勾稽、动态 slug 与 accessor 子表审计、改后 bundle 从 `out/` 构建产物复算、截图 manifest 覆盖矩阵。凡无法复核的,均如实标注,不做独立背书。

> **术语表**(首次出现的行话):
> - **独占清单**:编排方下发给每个质检批次的"本批只允许改这些文件"清单;清单外文件一律只上报不修(本波 FavoriteButton 未修的直接原因,见第九节第 1 条)。
> - **批级 concerns**:各批次结束时上报的遗留事项流水(本波 B01~B11 共 46 条,即第八节的原始材料)。
> - **落盘**:修改写入代码并提交(区别于"上报"=只记录不改代码)。
> - **截影师**:负责批量截图与 next build/性能验收的角色(按分工,本报告角色不运行 build)。
> - **上报口径**:只记录、不由本批落地的项;与"落盘修复"相对。
> - **首载 JS**:页面首屏需下载的 JS chunk 合计。给定数据的精确口径未注明(疑为构建 manifest 的静态导入闭包);本次复算采用的口径 = 页面 HTML 内 `<script src>` + `<link rel=modulepreload>` 可见引用(见第三节"独立复算")。
> - **KB/KiB**:本报告统一用 KiB(1 KiB=1024 B);给定数据原文有一处写作"1382.4KB",按同一数字转写为 KiB,测量是否 raw/gzip 未注明(见第三节)。

---

## 一、总览数字

| 维度 | 数字 | 来源 |
| --- | --- | --- |
| 提交数 | 4 个:`f2d7c142`(共享组件 bug 修复)/ `1d756317`(词典 chunk 懒加载瘦身)/ `011e7732`(德语引号统一)/ `00687b3d`(移动端与 es/de 视觉修复) | `git log --oneline e02a8546..HEAD` 实测 |
| 改动文件 | **548 个**(区间并集),+3,101 行 / −846 行。**口径说明**:四个提交逐提交文件数之和为 53+436+67+17 = **573**,大于 548——因为 25 个文件被 ≥2 个提交先后触及(如 `ToolInfoSection.tsx` 先后经 f2d7c142 与 1d756317),区间 diff 只计一次。增删行数两项口径恰好逐项加总吻合(173+2715+119+94=3,101;96+573+119+58=846) | `git diff --stat` 实测;逐提交文件数 `git show --name-only --format= <sha> \| wc -l` 实测;并集 `git show --name-only --format= <4 sha> \| sort -u \| wc -l` = 548 实测 |
| 共享 bug | 确认 **3** / 驳回 **5**(明细未随材料披露,见第二节末)/ 落地 **83** 处(给定口径;本次实测可复现数为 **93**,两个数的差异与数法见第二节"落地数勾稽") | 给定数据 + `git show f2d7c142`(53 文件,+173/−96)实测 |
| 词典 chunk 专项 | 261 页首载 JS 合计 **742,246.7 → 420,012.5 KiB(−322,234.2 KiB,−43.41%)**(给定数据,改后侧本次从 `out/` 构建产物部分复算,见第三节);239 工具页全部变好、0 页变差;22 个非工具页逐字节不变(给定,比较方法未附);提交 `1d756317`(436 文件,+2,715/−573) | 给定数据 + 提交 diff 实测 + `out/` 复算 |
| 德语引号 | **142 对** `„…“` 统一,67 文件(+119/−119),残留 **0**(给定;本次按同模式 grep 实测复核为 0,口径见第四节) | 给定数据 + 提交 diff 实测 + grep 复核 |
| 视觉补全 | 截图 **392** 张(与落盘 manifest 逐条一致,覆盖矩阵见第五节);发现问题 **48**;落盘修复 **18** 处(提交 `00687b3d`,17 文件,+94/−58);上报 **314**(三个数的漏斗关系给定材料未定义,见第五节"漏斗口径") | 给定数据 + `.zcode/visual-shots-w3/manifest.json` 实测 + 提交 diff 实测 |
| **验证覆盖率**(总览级声明) | ① 视觉:仅 **94/239 个工具页(39.3%)+ 4 个站点页**有截图,移动端仅首屏约 844px,折叠线以下未做像素验证(详见第八节 D 组);② bundle:改前侧数字**不可复核**(改前构建产物不在盘上),改后侧部分复算吻合;③ next build 本角色未复跑;④ tsc 与 smoke 本报告在最终 HEAD 实测通过 | 见第五、六、八节逐项 |
| next build | 通过 | 给定数据;本角色按分工未复跑。旁证:仓库 `out/` 目录时间戳 2026-10-12 20:24:14,晚于最终提交 00687b3d(20:22:31)约 2 分钟,与本波"最终构建"自洽;无构建日志可附 |
| 冒烟测试 | 绿(给定)+ 本报告撰写时实测复跑通过:`node scripts/tool-smoke.mjs` → **SMOKE PASSED,110 pass / 0 fail,77 文件 SKIP**。覆盖结构(工厂工具 110、SKIP 77 文件、工具页 239 三者的关系)见第六节 | 给定数据 + 本次实测 + `scripts/tool-smoke.mjs` 头注释 |
| TypeScript 检查 | 每步绿(各批 concerns 记录 `node node_modules/typescript/lib/tsc.js --noEmit` 退出码 0);本报告在最终 HEAD 复跑亦退出码 0 | 给定数据 + 本次实测 |
| git 提交与推送 | 已推送:`git log origin/main..HEAD --oneline` 实测 **0 条**,HEAD = `origin/main` = `00687b3da6a2…` | 本次实测 |
| 工作区 | 不干净:6 个未跟踪临时文件(`.tmp.b72-*` 5 个 + 1 个 `.zcodetsc` 日志,属并行会话产物)+ 本报告文档未提交(归宿见第八节 E 组);无任何已跟踪文件的未提交修改 | `git status --porcelain` 实测(与给定数据"工作区干净: false"一致) |
| token 消耗 | 本波数据**未随给定材料提供**,三波合计无法精确估算(见第七节累计账本) | 给定数据缺口,如实说明 |

---

## 二、共享 bug 修复明细(确认 3 · 驳回 5 · 落地 83/实测 93)

权威落点是提交 `f2d7c142`(53 文件,+173/−96;其中 51 个 `content.tsx` + `ToolInfoSection.tsx` + `makeTextTool.tsx`,文件数本次实测)。

### Bug 1:zh 阅读时长 60 倍膨胀(已修)

- **根因**:`components/tools/makeTextTool.tsx` 修前第 111-113 行为 `Math.round((locale === 'zh' ? charCount / 5 : wordCount / 200) * 60)`——`× 60`(分钟→秒换算)套在整个三元的**外面**,而 zh 分支 `charCount / 5` 按 300 字/分钟口径算出的**已经是秒数**,再乘 60 即 60 倍膨胀(如实际 10 秒读完显示 10 分钟)。
- **修法**:括号移入 en 分支——修后 `makeTextTool.tsx:116`:`Math.round(locale === 'zh' ? charCount / 5 : (wordCount / 200) * 60)`。zh 分支恢复秒语义,en 分支行为逐字节不变。

### Bug 2:`{mainKeyword}` 后前导空格被 JSX 编译丢弃,213 页关键词粘连(已修)

- **根因**:JSX 多行文本节点中,表达式 `{mainKeyword}` 换行后的前导空白按 JSX 规范被编译器丢弃,渲染成关键词与后文直接粘连。**构建产物(out/)证实 213 页损坏**,其中 68 页呈 `...online<!-- -->directl...` 模式(`<!-- -->` 是 React 相邻文本节点的分隔注释,两侧无空格)。
- **修法**:补显式空格表达式 `{mainKeyword}{' '}`。共享文件 `components/ToolInfoSection.tsx` 落地 4 处(修前 83/112/165/218 行;修后实测 86/115/168 行等),影响全部经该组件渲染的工具页。

### Bug 3:同类丢空格遍布全站 content.tsx,约 30 文件 45 处(扩展排查,已修)

- **根因**:与 Bug 2 同机制的扩散排查——全站 `app/tools/*/content.tsx` 的多行 JSX 文本节点普遍存在"源码有空格、产物被编译丢弃",**约 30 文件 45 处全部经 out 构建产物逐一证实损坏、源码均有空格**;含 HTML 实体的多行文本节点(`&mdash;`、`&apos;` 等)同样受累。
- **修法**:同款 `{' '}` 显式空格,合并入 `f2d7c142` 落地。

### 落地数勾稽(83 vs 93,本次实测)

给定口径"落地 83"**未附清点规则,本报告无法复现该数**。本次给出可复现数法:`git show f2d7c142 | grep -c "^+.*{' '}"` = **93**、`grep -c "^-.*{' '}"` = **0**——即该提交净新增 93 行含 `{' '}` 的代码行、没有删除任何已有标记行,按"每个新增标记 = 一处修复"数得 **93 处**(其中 ToolInfoSection 4 处、content.tsx 89 处;`makeTextTool.tsx` 0 处)。93 与给定 83 差 10,无法用现有材料勾稽(可能的差异来源:编排方按"问题点"而非"标记行"计数,或部分行属同一处修复的连带换行),两个数并列呈现,不宣称以哪个为准。93 处逐行 diff 可复核:`git show f2d7c142 -- components/ToolInfoSection.tsx app/tools`。

### 驳回 5 项:明细未披露

5 项驳回 bug 的逐项名册与驳回理由**未随给定材料披露**。站长视角提示:驳回比确认更需抽查(误杀真 bug 的代价在驳回侧)——建议向编排方调取名册(见第九节第 6 条),在此之前"确认 3 / 驳回 5"仅有给定口径背书。

---

## 三、词典 chunk 专项(261 页 Σ −43.41%)

### 根因(给定数据,本次实测勾稽)

client 组件静态 `import … from '@/lib/i18n/tool-l10n'`(整表注册表,聚合全部 239 份 tools-l10n 词典),把词典拖进同一个 **1382.4 KiB chunk**(`3pkrp8ixq5n__.js`,refs=239),进 239 个工具页首载;最大页 `/tools/bcrypt-hash-generator` 达 3395.3 KiB(23 chunks)。
——本次实测(两种引用写法都查):`git grep -l "i18n/tool-l10n'" f2d7c142 -- components app lib` = **101 个文件** = 99 个 components 文件(@别名引用)+ `lib/cron.ts` + `lib/faq-jsonld.ts`(相对路径引用)。给定口径"99 个 client 组件(含 lib/cron.ts、lib/faq-jsonld.ts 链)"中的 99 即 components 别名引用数,两 lib 文件是另外 2 个直接 importer,合计 101。
站点为 en-only 静态路由 + AppProviders 客户端 locale 切换(`lib/i18n` 无 `/zh` 路由),故每页自身 slug 的译文必须留在 client,**但无需带全表**。

### 方案(全部同步改造、零调用点语法变化)

1. **核心层** `lib/i18n/tool-l10n-core.ts`(新建):零注册表依赖——类型 + `l10nEntryFor`/`tuiFromEntry`/`makeRegistryTui` + `COMMON_CALC_UI`/`COMMON_UC_UI` 原样搬入,与原文逐字节一致(给定口径已校验)。查表行为与全量表的 `getToolL10n`/`tui` 逐字段一致(en 恒回退英文)。
2. **per-file 子表 accessor**:`lib/i18n/tool-l10n-accessors/**`,脚本生成 **89 个**(只含该文件 `tui()` 调用实际使用的 `<literal>` 字面量 slug,注释感知提取验证)——本次实测 `find lib/i18n/tool-l10n-accessors -name '*.ts' | wc -l` = **89**。
3. **服务端下沉**:239 个工具页 RSC(`app/tools/*/page.tsx`)改为 `<ToolLayout tool={tool} l10n={getToolL10nRecord('<slug>')} />`,经 ToolLayout 下发 ToolInfoSection / FormulaSection / VisibleFaqs 与 FAQ JSON-LD——全量表**只在 SSG 服务侧按 slug 消费**,不进客户端 chunk。

### 导入方去向勾稽(101 → 全部可追,0 丢失)

改造前 101 个直接 importer,改造后(HEAD)去向如下,本次实测逐类核验(`comm` 对比改造前后 importer 清单 + 逐文件查 import 语句):

| 去向 | 文件数 | 说明 |
| --- | --- | --- |
| 改用各自 per-file accessor | **88** | components 下客户端组件(99 个 components importer 中的 88 个) |
| 改用 core + `l10n` prop 注入 | **11** | 共享/工厂文件(`makeCalculatorClient`/`makeUnitConverter`/`makeTextTool`/`ScenarioCompare`/`EncoderDecoderTool`/`encoderTools`/`TextCleanerClient`/`TextScrubberClient`)与 SEO 区组件(`ToolInfoSection`/`FormulaSection`/`VisibleFaqs`)——这些文件服务多工具、无固定 slug 清单可建子表,改为接收服务端按页传入的单工具 entry |
| `lib/cron.ts` → 专用 accessor | **1** | `lib/i18n/tool-l10n-accessors/lib/cron.ts` |
| `lib/faq-jsonld.ts` → core | **1** | 改用 `l10nEntryFor`,记录经 ToolLayout prop 下发 |
| **新增** 239 个 page.tsx → 全量表 | — | 服务端 RSC,`getToolL10nRecord('<slug>')` 仅 SSG 时执行 |

合计 88+11+1+1 = 101,与改造前清单一一对应,无文件"消失"。

### 防"静默回退英文"审计(本次实测)

accessor 改造最大的回归面是:若子表漏配某 slug,按既定设计**静默回退英文、无报错**。本次做了三项静态审计(脚本方法:遍历 components/ 全部 tsx + lib/cron.ts,正则捕获 `tui(`/`tuiCalc(`/`tuiUc(` 调用点首参,与对应 accessor 注册表键比对;`tuiCalc`/`tuiUc` 首参是 COMMON 表 UI key、不是 slug,不计):

1. **动态 slug 调用点 = 0**:全仓 `tui(slug, …)` 调用共 **229 处,首参全部为字面量**;初扫疑似"非字面量"的 3 处(batch11Calculators.tsx:583、IpCheckerClient.tsx:519、BcryptHashGeneratorClient.tsx:31)经逐处核验**全部是注释行**。字面量提取不存在漏网。
2. **accessor 子表漏配 = 0**:每个 accessor 消费文件所用 slug ⊆ 该 accessor 注册表键,89 个 accessor 无一漏配(注:accessor 导入的词典模块与全量表导入的是**同一个** `tools-l10n/<slug>.ts` 文件,数据层天然一致)。
3. **page.tsx slug 一致性 = 239/239**:每页 `getToolL10nRecord('<slug>')` 实参与目录 slug 全部一致,无误传导致的整页英文回退。

**边界如实声明**:以上是静态审计;smoke 仅跑 `locale='en'`(脚本口径),SSR/静态 HTML 恒英文是设计使然——**zh/es/de 切换后的真实渲染未做端到端验证**(静态产物天然验不了,需浏览器截图管线),残余风险与建议见第八节 D-6、第九节第 3 条。

### 前后数字(给定数据)

| 指标 | 改造前 | 改造后 |
| --- | --- | --- |
| 261 页首载 JS 合计 | Σ=742,246.7 KiB | **Σ=420,012.5 KiB(−322,234.2 KiB,−43.41%)** |
| 1382.4 KiB 整表 chunk | 进 239 个工具页首载(refs=239) | **0/261 页引用** |
| 最大页 `/tools/bcrypt-hash-generator` | 3395.3 KiB(23 chunks) | **2025.7 KiB(22 chunks,−1369.6)** |
| `/tools/mortgage-calculator` | — | 1753.4 KiB(−1305.9) |
| 逐页方向 | — | **239 个工具页全部变好、0 页变差**;22 个非工具页(/404、/about、/blog、/tools 列表等)逐字节不变(给定数据,比较方法未附,见第八节 E-3) |

### 独立复算与 sanity check(本次实测)

- **合理性上界**:239 页 × 1382.4 KiB ≈ 330,393.6 KiB 是理论节省上限,实测节省 322,234.2 KiB,差约 8,159 KiB——方向合理(新增 per-slug 子表 chunk 本身占体积,且逐页简单相乘未计 chunk 共享效应,只是量级 sanity check,不是精确推演)。
- **改后侧部分复算**:仓库现存 `out/`(2026-10-12 20:24 构建,即本波产物)。以"页面 HTML 内 `<script src>` + `<link rel=modulepreload>` 可见引用"口径逐页加总:261 页 Σ=**394,915.7 KiB**;最大页 bcrypt **1929.4 KiB(20 refs)**、mortgage **1657.0 KiB(22 refs)**。与给定值(420,012.5 / 2025.7 / 1753.4)同量级、排序一致,给定值系统性高约 4–6%——口径差异(给定疑为构建 manifest 的静态导入闭包,比 HTML 可见引用集略大;两者精确口径均未注明,无法逐字节勾稽)。
- **死 chunk 验证(完全独立复核)**:`grep -rl "3pkrp8ixq5n__" out` = **0 个文件**——"原 1382.4KB chunk 0/261 页引用"实测成立。
- **改前侧不可复核**:742,246.7 KiB 对应的改前构建产物不在盘上,−43.41% 的分子分母中改前一半仅有给定口径背书。
- **残余量**:改后均值 ≈ **1,609 KiB/页**(给定口径),bcrypt 页仍 ≈ 2 MiB——本波只解决了词典整表这一单一根因,首载剩余大头(框架/runtime、图表库、搜索等)是下一轮性能专项的候选对象(见第九节第 7 条)。

---

## 四、德语引号统一(142 对 · 该模式内残留 0)

- **问题**:德语正字法开引号为 `„`(U+201E)、闭引号为 `“`(U+201C);修前部分字符串混搭成 `„…"`(德式开引号 + ASCII 直引号闭),如 `lib/i18n/tools-l10n/age-calculator.ts` 修前的 `'Das „Alter am Datum"'`。
- **修法**:提交 `011e7732` 统一为 `„…“`,**67 文件、142 对**(+119/−119,纯引号替换、无文案改动)。
- **残留口径(本次实测,如实限定)**:对"修法所针对的模式"——`„` 开引号后 120 字符内配 ASCII 直引号闭(`grep -rP "\x{201E}[^\x{201E}\x{201C}]{0,120}[\x{0022}]"` 对 `lib/i18n` 全目录)——**0 命中**,与给定"残留 0"一致。**该结论不覆盖**:① 反方向混搭(ASCII `"` 开引号配德语文本)与超过 120 字符的配对,未单独扫描;② 全库 U+201D(英式右引号)共 13 处,分布在 7 个文件,逐处抽验**均为中文文案的合法引号对**(zh 引号本就是 U+201C/U+201D,如 token-visualizer 的 "strawberry"),非德语字段。若需要"德语引号零异常"的全口径结论,需一次语块级扫描(列入第九节第 6 条调取)。

---

## 五、移动端与 es/de 视觉补全(392 张截图 · 48 问题 · 18 修复)

### 覆盖矩阵(本次实测,来自 `.zcode/visual-shots-w3/manifest.json`)

- manifest **392 条,与给定截图数逐条一致**;磁盘另有 35 张 `b70/b72-*` 前缀 PNG 与临时裁片,属并行会话产物,不在本波 manifest 内。
- **4 个语言×视口组合,各恰好 98 张**:es 1280×1600、de 1280×1600、en 390×844、zh 390×844。
- 覆盖 **98 个 URL = 94 个工具页 + 4 个站点页**(`/`、`/tools`、两篇支柱博客)——**工具页覆盖率 94/239 = 39.3%**,不是全量;哪些页拍了、哪些没拍,manifest 按批次(B01~B11)可逐条查询。
- 移动端为视口截图(首屏约 844px),**折叠线以下未做像素验证**(详见第八节 D-1)。

### 漏斗口径(48 / 18 / 314,给定材料未定义相互关系,如实说明)

48 = 视觉批**确认的问题数**;18 = 其中在本批独占文件内**落盘修复**的处数(提交 `00687b3d`);314 = **上报**条数(口径未注明)。18+314 ≠ 48,三者不是同一漏斗的三段:314 远大于 48,推测含对每张截图的逐项记录(含共享组件上报、非问题判定、覆盖度说明),但其与第八节 46 条批级 concerns 的映射**未随材料提供**,本报告不做臆测,建议编排方补口径(第九节第 6 条)。

### 典型问题与修复(**以下 8 条为概括**;来源:提交 `00687b3d` diff 逐文件走查。8 条按文件/主题归组,与"18 处"不是 1:1——如第 8 条一组就覆盖多个文件的多处改动;18 处的权威落点是提交本身,`git show 00687b3d` 可逐 hunk 复核):

1. **IP 查询头部移动端纵向堆叠**(`components/devtools/IpCheckerClient.tsx:636`):横向排列时 `flex-1(min-w-0)` 被按钮行挤压到 ~100px,15 字符 IP 被 `break-all` 逐字断行(390px 截图实测)→ 改 `flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center`,sm+ 恢复同行。
2. **flex 输入行补 `min-w-0`**(RegexTesterClient 等,与 IpChecker 同款处理):input 固有 min-content 宽度阻止 flex 收缩,≤390px 下整行溢出卡片、定宽 flags 输入框被推出屏幕外。
3. **TextCleaner「Join:」行移动端跨满整行**(`components/texttools/TextCleanerClient.tsx`):移动端 2 列网格下 label+select 自然宽度溢出卡片右缘、zh 标签被挤成逐字竖排 → 小屏 `col-span-2`,sm+ 回单列,标签加 `whitespace-nowrap`。
4. **发票明细表 de/es 长表头防溢出**(`components/calculators/FreelanceInvoiceGeneratorClient.tsx`):表格外包 `overflow-x-auto`——de/es 表头(BESCHREIBUNG/DESCRIPCIÓN)为不可断行单词,窄屏防溢出(桌面适配时零视觉差异);数量/单价窄输入框改 `w-16/w-20` + `sm:` 加宽。
5. **年龄单位单复数**(AgeCalculatorClient + `lib/i18n/tools-l10n/age-calculator.ts`):年/月/日缩写随数值取单复数(1 yr / 2 yrs),zh/es/de 三语补 `monthAbbr`/`dayAbbr`/`yrAbbr` 键,修 es「1 años」类语法错(该文件为 age-calculator 专属词典,slug 作用域消费,见第八节 E-1)。
6. **正则示例转义修正**(`app/tools/find-and-replace/content.tsx`,en/zh/es/de 四语 4 处,实测行号 21/60/100/141):**修前**源码为裸 JSX 文本 `<code>\d{4}</code>`——JSX 文本不处理反斜杠,坏的是 `{4}` 被当作 JSX 表达式求值为数字 4,**渲染成 `\d4`**(丢花括号);**修后**改为字符串表达式 `{'\\d{4}'}`(源码为双反斜杠,JS 求值为 `\d{4}`),**渲染 `\d{4}`**。本报告上一版把修法转写成了单反斜杠 `{'\d{4}'}`(那样会渲染成 `d{4}`),系转写笔误,已勘误;端到端证据:本波 `out/tools/find-and-replace/index.html` 实测含 `--> <code>\d{4}</code>`,渲染正确。
7. **Nginx 配置生成器三语文案修订**(`components/devtools/NginxConfigGeneratorClient.tsx` + `lib/i18n/tools-l10n/nginx-config-generator.ts`,21 行)。
8. **批量网格断点与文案微调**:ChmodCalculator / encoderTools / batch6/12b/13/14 工厂文件 / CssGradientGenerator 等按截图证据逐处补 `grid-cols-1 → sm:` 断点与短文案。

---

## 六、验收结果

| 检查项 | 结果 | 依据 |
| --- | --- | --- |
| TypeScript 类型检查(每步) | **绿** | 各批 concerns 记录 `node node_modules/typescript/lib/tsc.js --noEmit` 退出码 0(改动前后各跑一次);本报告在最终 HEAD 复跑同一命令,亦退出码 0(本次实测) |
| 冒烟测试(smoke) | **绿** | 给定数据 + 本报告撰写时实测复跑:`node scripts/tool-smoke.mjs` 退出码 0,**110 pass / 0 fail,77 文件 SKIP**,SMOKE PASSED。覆盖结构见下 |
| next build | **通过**(证据等级:编排方转述) | 给定数据;无日志可附,本角色按分工未复跑。旁证:`out/` 时间戳 2026-10-12 20:24:14 晚于最终提交(20:22:31)约 2 分钟,与本波"最终构建"自洽,且第三节基于该产物完成了改后侧复算 |
| git 提交 | 4 个提交,HEAD = `00687b3da6a21565c8b80ad67205fb447758cd33` | `git log --oneline e02a8546..HEAD` 实测 |
| git 推送 | **已推送**:`origin/main..HEAD` 为空(0 条) | `git log origin/main..HEAD --oneline` 本次实测 |
| 工作区 | 不干净,但仅 6 个未跟踪 `.tmp.b72-*` / 日志临时文件(并行会话产物)+ 本报告文档,**无任何已跟踪文件的未提交修改** | `git status --porcelain` 本次实测(与给定"工作区干净: false"一致) |

**冒烟覆盖结构**(读 `scripts/tool-smoke.mjs` 头注释与实现;回答"110 / 77 / 239 什么关系"):

- 239 个工具页的客户端分两类:三工厂(`makeCalculatorClient`/`makeUnitConverter`/`makeTextTool`)生成的工具,与手写交互组件。工厂 config 是纯数据+纯函数,可在 Node 无浏览器实跑;脚本的口径是**按文件捕获工厂 config**,批量文件一文件多工具。
- **110** = 本次捕获并实跑通过的工厂工具数(compute/transform 默认入参实算,断言无 NaN/undefined 泄漏等);**77** = 无工厂导出的手写组件文件数,记 SKIP 不判负;**239** = 工具页数(三口径分母不同,不可互除)。
- **如实声明:77 个 SKIP 文件没有任何自动化兜底**(无单测、无 e2e),它们的质量只由人工视觉批(且仅 94/239 页有截图)与代码审查覆盖。

---

## 七、累计账本(三波合计)

| 波次 | token | 修复数(各波报告口径) |
| --- | --- | --- |
| 第一波(→ `de68431b`) | **659,937,432**(给定,录于第二波报告第七节) | 审计修复 323 处(94 批)+ 博客改进 31 处 + 终检巡逻 41 处 |
| 第二波(→ `5a93063d`) | **644,499,822**(由给定两波累计 1,304,437,254 − 第一波 659,937,432 推导;第二波材料当时未附,本波给定数据补齐了累计值) | 四语精修 739 处 + 遗留清单落地 8 项 + 视觉修复 49 处;perf −36,011 KiB |
| 第三波(→ `00687b3d`) | **未随给定材料提供**(与前两波同缺口,如实说明) | 共享 bug 落地 83(实测可复现 93,见第二节)+ 德语引号 142 对 + 视觉修复 18 处;bundle −322,234.2 KiB |
| **三波合计** | **≥ 1,304,437,254**(= 前两波给定累计;本波缺失,无法精确合计) | 按各波口径简单加总 ≈ **1,434**(323+31+41+739+8+49+83+142+18;各波计数单位不一——处/项/对,仅供量级参考,不作精确口径背书) |

> **token 口径说明**:按编排方要求"前两波 13.0 亿 + 本波运行统计"合计,但本波运行统计未随材料提供——三波合计只能给到下界 1,304,437,254(前两波)。**连续三波缺本波数据,账本价值在递减**,流程缺口需闭环(第九节第 5 条)。

---

## 八、遗留事项(24 条,自 46 条批级 concerns 去重合并 + 本次复核新增;≤40 条口径)

### A. 共享组件待修(均不在本批独占清单,按批次作业规则只上报不修,需 owner 决策)

1. **[高优] FavoriteButton 移动端全宽空心条**(B01/B02/B03/B04/B06/B07/B08/B09/B10/B11 十个批次重复上报同一问题):`components/ToolLayout.tsx:184` header 为 `flex flex-col gap-4 sm:flex-row`,移动端默认 `align-items:stretch` 把按钮拉满整行;`components/FavoriteButton.tsx:57` 又以 `hidden sm:inline` 在 <640px 隐藏文字——390px 下渲染为只有左侧心形图标的整行描边条,极易误认输入框(桌面正常)。影响全部 261 个工具页。最小修法:按钮根元素加 `self-start`(或 header 移动端补 `items-start`),一行改动。
2. **es 统计对比条标签截断**(B01):`components/tools/makeTextTool.tsx:241`(旧批 `batchTextTools.tsx:409` 同款)`w-20 shrink-0 truncate` 80px 放不下 19 字符西语标签(Longitud de entrada/salida,`lib/i18n.ts:1094-1095`),两条截断后完全相同、无法区分输入/输出;de(Eingabelänge/Ausgabelänge,`lib/i18n.ts:1344-1345`)恰好放得下。建议标签列加宽(如 `w-24 sm:w-28`)或去掉定宽。
3. **滑杆轨道与 bg-subtle 面板同色不可见**(B07):`components/calculator/CalculatorField.tsx:199` + `makeUnitConverter.tsx:229`;`makeCalculatorClient.tsx:741` 同款面板,系全站统一既存现状。建议未填充段改用 `--border` 系颜色或容器改 `bg-card`。
4. **数值为 1 时无单数形态**(B07,设计变更仅记录):结果卡出现「1 Metros cuadrados (m²)」(es)/「1 Square meters (m²)」(en)——共享工厂按「数值 + 单位名字典标签」拼接(`lib/i18n/tools-l10n/area-converter.ts:42`),全站同模式;修复需引入单数标签键。本波 age-calculator 的单复数改造(第五节第 5 条)可作参照样板。
5. **[既定设计·辨析] 收藏按钮文字 <sm 隐藏本身是有意的**(B05):`hidden sm:inline` 图标化且保留 aria-label/title,勿单独当 bug;与第 1 条的 stretch 拉伸**叠加**才是全宽空条问题。

### B. 轻微未改(记录备查)

6. **摊销表明细展开按钮触控目标约 16px**(B04):`AmortizationTableClient.tsx:163` `text-xs` 无内边距链接式控件,低于 WCAG 2.5.8 的 24px 下限;属有意的链接式次要控件、全站无同款工厂先例,改动会引入风格漂移,保留待全站触控目标专项。
7. **比例预设 chips 触控高度约 28px**(B09):`AspectRatioClient.tsx:113` `px-2.5 py-1.5 text-xs`,高于 24px 下限、低于 44px 舒适建议;与全站 chip 样式一致,按"没把握的改动不改"保持原样。

### C. 已核对为非问题 / 既定设计(勿重复上报)

8. **de 正文「Es ist für die Momente gebaut…」**(B01):源头 `lib/i18n/tool-info-templates.ts:198` 语法正确,系截图缩放致误读;es/de FAQ 与 `app/tools/add-line-numbers/content.tsx:44-77` 逐字一致,无串味。
9. **es/de 周格图汇总行「1,397 / 3,283」**(B03):经 sharp 4× 放大裁片核验实为**逗号**千分位,`LifeInWeeksChart.tsx:149` 固定 en-US,符合数字 en-US 既定设计,已排除。
10. **es 桌面「INTERESES TOTALES 6493,09 US$」无千分位**(B10):CLDR es 的 minimumGroupingDigits=2 标准 Intl 行为(<10000 不分组),非 bug,数字格式既定设计。
11. **MagnitudeRuler 绿色结果标签截断**(B05):`components/charts/MagnitudeRuler.tsx:114` 与 `:85` 的 `max-w-32 truncate`——「1.570796 Radianes (r…」,系保护标尺布局的有意截断设计;该文件不在批内可写范围,未动。
12. **cookie 浮层遮底 / 广告位留白**(多批):cookie 浮层遮挡截图底部为已知正常态;AdSlot 未加载留白属防 CLS 设计,均未当 bug 处理。

### D. 覆盖度与验证口径(如实声明)

1. **移动端截图仅首屏约 844px**(B03/B04/B05/B06/B09/B10/B11 多批):折叠线以下(结果卡、周格图/余额曲线、摊销明细表、FAQ、SEO 长文)未在截影中出现,仅代码级核查——表格为受控盒内滚动(`AmortizationTableClient.tsx:168`,与工厂 `makeCalculatorClient.tsx:840` 同款 `overflow-x-auto` 模式)、图表自带窄屏适配(`LineAreaChart.tsx:52,137`)、content.tsx 无表格/裸 HTML/固定宽度元素。此项统一记为**「代码核查通过、截图未验证」**;建议截影师补移动端整页或滚动截图。
2. **工具页视觉覆盖率 39.3%**(94/239,本次实测 manifest):csv-to-json / json-formatter / json-minifier / json-to-csv / text-to-list(B01)、age-difference 等 7 页(B03)、unit-converter 兄弟 7 页(B05)、annuity 兄弟 7 页(B06)、area 兄弟 8 页(B07)、hmac 等 4 页(B08)等无截图——视觉结论仅覆盖有截图页面,其余为代码走查,未做视觉结论。
3. **body-fat-calculator flex-wrap 修复未经真实渲染复验**(B06):依据 de 标签宽度静态估算(≈345px vs 375px 视口可用 343px,临界);截图实际采用的 390px 视口本就放得下,该修复只影响 ≤约 380px 视口,且该页不在本批截图内。
4. **ascii-table 搜索占位符修复未重渲染验证**(B08):新文案 33 字符 × 约 7.5px ≈ 248px < 390px 视口输入框约 286px 可视宽(估算);建议下轮对 `/tools/ascii-table` en 390px 复拍确认完整可见。
5. **375-390px 适配修复未复验**(B11):浏览器桥接未连接(bb_status 返回 connected:false),静态 `out/` 亦无法截图;适配计算依据源码 CSS 实值(`globals.css:164` container-page px-4、`ToolLayout.tsx:229` tool-shell p-6、`globals.css:186` .btn px-4)+ 截图像素测量(按钮≈51px、label 槽≈160px);桌面端(≥sm)类名逐字未变,无回归面。
6. **【本次复核新增】zh/es/de 渲染端到端未验证**:accessor 改造的静态审计全部通过(第三节"防静默回退审计":动态 slug 0、子表漏配 0、page slug 239/239),但 zh/es/de 切换后的真实渲染无浏览器级验证(smoke 仅 en、SSR 恒英文)——若子表键名与消费键不一致仍会静默回退英文且无报警。风险已从"不可知"降至"静态审计通过、渲染未验证",建议截图管线补四语抽查。
7. **【本次复核新增】77 个 SKIP 文件无自动化兜底**:smoke 只覆盖三工厂工具(110 个),手写组件文件(77 个)仅靠人工视觉批(39.3% 覆盖)与代码审查,无单测/e2e。
8. **【本次复核新增】bundle 改前侧不可复核**:742,246.7 KiB 与 −43.41% 的改前一半仅有给定口径背书(改前构建产物不在盘);改后侧已部分复算吻合(第三节)。测量工具与 raw/gzip 口径未注明,逐页原始数据落盘位置未随材料提供。

### E. 流程与工作区

1. **B03 批次触及 `lib/i18n/tools-l10n/age-calculator.ts`(独占清单字面外)**:该文件是 age-calculator 专属词典,仅被本工具 slug 的 accessor(`AgeCalculatorClient.ts:9`)与全量表(`tool-l10n.ts:172`)以 slug 作用域消费(grep 证实无其他消费方),修 es 语法错误无法绕开,不可能影响其他工具;如需回滚仅 revert `00687b3d` 中该文件与 `AgeCalculatorClient.tsx` 两处即可。
2. **【扩充】并行质检员的在制品被吸收进 `00687b3d`**(B02/B03/B06):`batch6Calculators.tsx`、`encoderTools.tsx`、`batch12bTools.tsx`、`batch13Tools.tsx` 提交时点的未提交改动属并行的其他质检员——本次实测该 4 文件均已进 `00687b3d`。**是否与并行方核对过"提交的是完整意图而非半成品",仓库内无证据可查**,本报告不能背书这一点;建议编排方向四位并行方确认(第九节第 6 条)。当前工作区仅剩 6 个未跟踪临时文件,提交边界已闭合。
3. **"22 个非工具页逐字节不变"为给定数据**,比较方法(逐文件 hash?构建 manifest 对比?)未附,本报告无法独立复验(改前产物不在盘)。
4. **【本次复核新增】视觉漏斗 48/18/314 的口径未定义**:三数不是同一漏斗三段(18+314≠48),314 与第八节原始 46 条 concerns 的映射未随材料提供(见第五节)。
5. **token 运行统计缺口(连续三波)**:三波合计只能给前两波下界(第七节);建议编排方把运行统计作为批次材料固定字段。
6. **报告与临时文件的归宿**:本报告 `docs/optimization-report-2026-10-11-wave3.md` 落盘为本 ask 交付物,**尚未提交入库**("代码已全部推送"指四个代码提交);`.tmp.b72-*` 等 6 个临时文件属并行会话,非本波交付物,可清理——两者去留由编排方决定。

---

## 九、下一轮建议

1. **共享组件 FavoriteButton 显式立项**(第八节 A-1):一行修(`self-start` 或 header 移动端 `items-start`),本波 46 条 concerns 中 10 个批次重复上报。**为什么本波没修,如实说明**:波次作业规则是"批次只改独占清单内文件,清单外一律上报",而 ToolLayout/FavoriteButton 未划入任何批次——规则保证了不越界,代价是已知、已定位、有共识的全站问题无人落地,这正是重复劳动的最大宗来源。建议下一轮由编排方把该项**指定 owner 并给时间点**立项,而不是继续随批上报。
2. **makeTextTool 对比条标签列加宽或去定宽**(第八节 A-2):es 两标签截断后不可区分,属功能可读性问题,优先级高于纯观感项。
3. **截图管线补 zh/es/de 渲染抽查**(第八节 D-6):accessor 改造的静默回退风险已做静态审计(通过),建议对若干 slug 抽样做四语真实渲染对比,把最后一层风险也关掉;顺带补移动端整页/滚动截图、本波未覆盖的 145 个工具页(239−94)、`/tools/ascii-table` en 390px 复拍、body-fat ≤380px 复验(第八节 D-1/2/3/4)。
4. **沉淀跨批次「勿重复上报」清单**:把第八节 C 组(判定非问题/既定设计,含 es 千分位、en-US 数字、cookie 浮层、MagnitudeRuler 截断等)固化为共享文档,后续批次开工前先读。
5. **token 运行统计接入账本流程**(第八节 E-5):连续三波材料缺本波 token,累计账本只能给下界;建议编排方把运行统计作为批次材料固定字段。
6. **向编排方调取的材料缺口**:① 驳回 5 项的名册与理由(第八节第二节末);② 视觉漏斗 48/18/314 的清点口径与 46 条 concerns 的映射(第八节 E-4);③ 并行方 4 文件改动的完整性确认(第八节 E-2);④ "22 非工具页逐字节不变"的比较方法(第八节 E-3);⑤ bundle 测量工具与 raw/gzip 口径、逐页原始数据落盘位置(第八节 D-8);⑥ 德语引号全口径(反向混搭、语块级)扫描。
7. **下一轮性能专项候选**:词典整表根因已除,残余首载均值仍 ≈1,609 KiB/页(给定口径)、bcrypt ≈2 MiB——建议对首载剩余大头(框架 runtime、图表库、搜索等)做构成分析后立项,并考虑设立单页首载预算防回退。
8. **触控目标与控件可见性合并为一个全站 a11y/样式专项**:chips 高度、链接式控件 16px、滑杆轨道同色三案同类,统一处理可避免散点改动引入风格漂移(第八节 A-3/B-6/B-7)。
9. **单复数标签键设计变更评估**:以 age-calculator(提交 `00687b3d`)为样板,评估在共享工厂引入单数标签键的可行性与成本,需产品/组件 owner 决策(第八节 A-4)。

---

*报告撰写:优化总报告撰写员 · 2026-10-12 · 修订版(吸收独立读者 21 条意见:文件数口径、落地数可复现数法、101 导入方去向勾稽、静默回退静态审计、bundle 改后侧 out/ 复算、截图覆盖矩阵、冒烟覆盖结构、`\d{4}` 勘误、术语表、验证覆盖率前置声明等;除注明"给定数据"外的数字均可在本仓库以文中命令复核)*
