# ToolHub 全站优化总报告 · 第二波(2026-10-10)

- **基线 → 终点**:`de68431b` → `5a93063d`(即 `5a93063d8a98`)
- **覆盖范围**:全站四语内容深度精修与平价核验(272 工具)→ 第一波遗留清单落地 → 视觉检测(216 张截图)与问题修复 → client bundle 性能专项(注册表赶出全站首载)
- **性质**:全部为修复、精修与瘦身——未引入**逻辑/路由/计算行为**变更(性能专项的元数据下沉改造按给定口径"无行为/路由/输出变化");但存在**用户可见的文案与排版变更**,包括 zh 单位标签"梯度"→"百分度"、es/de 数字与日期排版统一、视觉修复 49 处(+1,815/−472 行,样式与文案兼有);代码已全部推送远端
- **本轮遵守的既定设计边界**(有意不改,非遗漏):金额/日期/数字固定 en-US 格式(本波 B03 批次的【判定说明】已澄清:该约束针对程序化输出,静态译文按各语排版是仓库既有惯例,见第八节第 22 条);站点只有 en/zh/es/de 四语、无法语;`⚠️ …` 校验失败文案与 `—` 占位是合法输出;`toNum` 对 `$1,200`/`18%` 的粘贴宽容化是特性;击键类工具输出区不加 aria-live 是已定决策;tui 缺译回退英文是既定设计。

> **数字来源说明**:提交清单与文件行数来自本报告撰写时实测的 `git log --oneline de68431b..HEAD` 与 `git diff --stat de68431b..HEAD`;过程统计(精修修复数、核验工具数、遗留清单确认/驳回/落地数、视觉截图与问题数、token 消耗)来自编排方给定数据,文中逐处标注;凡无法从 git 实测复核的计数,均按给定口径转述、不做独立背书。

---

## 一、总览数字

| 维度 | 数字 | 来源 |
| --- | --- | --- |
| 提交数 | 4 个:`74351950`(docs 第一波报告)/ `6489ff8a`(四语精修 + 遗留清单落地)/ `d534f721`(视觉修复)/ `5a93063d`(perf bundle);**第二波实质提交为后 3 个** | `git log --oneline de68431b..HEAD` 实测 |
| 改动文件 | 478 个,+10,787 行 / −3,894 行;其中含第一波报告 `docs/optimization-report-2026-10-10.md`(+227/−0),剔除后第二波实质为 **477 个文件、+10,560 / −3,894** | `git diff --stat de68431b..HEAD` 实测 |
| 四语精修 | 修复 **739 处**;平价核验 **272 工具**;失败批次 **0**;双眼睛复核 | 给定数据 + 提交 `6489ff8a` 提交信息(272 与全站 239 工具的口径差异未在材料中说明,如实转述) |
| 遗留清单落地 | 确认 **8** 项 / 驳回 **2** 项 / 落地 **8** 项、0 项跳过;改动 16 文件(+136/−37) | 给定数据(明细见第二节) |
| 视觉检测 | 截图 **216** 张;发现问题 **70**;落盘修复 **49**;暗色成功 | 给定数据 + 提交 `d534f721`(详见第四节) |
| 性能专项 | 261 页每页首载 JS 合计 **−36,011 KiB(−4.8%)**;首页 −64.1 KiB;最大页 −144.7 KiB | 给定数据 + 提交 `5a93063d` 提交信息(两者逐字一致;详见第五节) |
| next build | 通过(perf 提交信息记录 exit 0、262/262 页);该 262 与性能 Σ 口径 261 页的差额构成未说明——修订时实测 `out/` 现存 260 个 index.html + 404.html(260 页全部含 _next 引用、无零引用页),但 `out/` 时间戳 2026-10-11 17:26、已非报告时点产物,无法据以勾稽 | 给定数据;本报告按约定未复跑;差额列入第九节调取(第 10 项⑦) |
| 冒烟测试 | 绿(给定)+ 本报告撰写时实测复跑通过 | `node scripts/tool-smoke.mjs`:SMOKE PASSED,OK=110 / FAIL=0 / 77 文件 SKIP(见第七节) |
| TypeScript 检查 | 每波绿:各批次 concerns 记录 `node node_modules/typescript/lib/tsc.js --noEmit` 退出码 0;本报告在最终 HEAD 复跑亦退出码 0 | 给定数据 + 本次实测 |
| git 提交与推送 | 已推送:HEAD = `origin/main` = `5a93063d8a982a1708762306d5aa02880f04db48` | 本次 `git rev-parse HEAD` / `git log -1 --format=%H origin/main` 实测 |
| 工作区 | 不干净:2 个未跟踪文件——`_pytest.txt`(实测 0 字节空文件,2026-10-11 15:22 生成,晚于本波推送,非本波交付物)与本报告 `docs/optimization-report-2026-10-10-wave2.md`;无任何已跟踪文件的未提交修改 | 本次 `git status --porcelain` 实测(与给定数据"工作区干净: false"一致;初稿写于本报告落盘前故记 1 个,修订时更新为 2 个) |
| token 消耗 | 第二波数据**未在给定材料中提供**,两波合计无法估算(见第七节累计账本) | 给定数据缺口,如实说明 |

---

## 二、遗留清单落地(确认 8 · 驳回 2 · 落地 8)

- **账面**(给定数据):第一波遗留清单**确认 8 项、驳回 2 项;确认的 8 项全部落地,0 项跳过**;原文说明称"被驳回项 7/8 未触碰"——"7/8"的确切指代(第 7、8 两项,还是 8 项中的 7 项)未在材料中明示,原文照录,不臆测。落地改动 **16 文件(+136/−37)**,`node node_modules/typescript/lib/tsc.js --noEmit` 退出码 0。
- **各项结果**:给定材料仅披露第【1】项明细,原文如下(**原文在句中截断**,以"……zh/es/de 各 unit.*=7、in"处为截止,后半未能获得):

  > 【1】cooking-converter.ts 三语 ui 块各补 27 键(unit.\* 7 + ing.\* 20,共 81 条),键名经 node 脚本与 batch10Tools.tsx:626-657 的 VOLUME_TO_CUP/INGREDIENT_DENSITY 逐字核对(含 unit.fluid-oz 非 floz),脚本输出 zh/es/de 各 unit.\*=7、in……

- **本报告实测佐证【1】**(在最终 HEAD 上运行 node 脚本):`lib/i18n/tools-l10n/cooking-converter.ts` 中 `unit.*` 键引用 21 处(= 7 键 × 3 语)、`ing.*` 键引用 60 处(= 20 键 × 3 语),合计 **81 条**,与给定口径吻合;`unit.fluid-oz` 在盘、`'unit.floz'` 不存在,与"含 unit.fluid-oz 非 floz"的核对说明一致。
- **其余各项的明细未随材料披露**。但第一波报告第八节建议清单中的下列项,经本次在最终 HEAD 实测**可见落地痕迹**,且相关文件均归属提交 `6489ff8a`(`git log --oneline de68431b..HEAD -- <files>` 实测只命中该提交):

| 第一波遗留项 | 本次实测结果(最终 HEAD) |
| --- | --- |
| runway-calculator 9 个状态 key 三语缺译(第一波 B43) | `lib/i18n/tools-l10n/runway-calculator.ts` 中 infinite / never / alreadyProfitable / neverBreakeven / breakevenIn / breakevenTooLate / notProfitableInRunway / zeroGrowth / profitWord **9/9 全部在盘** |
| Base64/URL/HTML 六件套 `invalidInput` 18 条缺译(第一波 B12) | 6 个字典文件(base64-encoder / base64-decoder / url-encoder / url-decoder / html-escape / html-unescape)**6/6 均含 `invalidInput`** |
| lib/tool-formulas.ts 的 ip-checker 公式权重与实现不符(第一波 B47) | 现文为 `min(100, 6 + W_type×S_datacenter + W_tz×S_timezone_diff + W_bl×S_proxy)`,W_type=**52**、W_tz=**20**、W_bl=**22**、base=**6**——与第一波核实的实现值(6/52/20/22)一致 |
| css-gradient-generator 三语 FAQ"拖动"措辞与数字输入框 UI 不符(第一波 B31) | 该字典全文已检索不到"拖动"字样 |

  > 注:上表四项与"确认 8 项"的逐项对应关系为本次实测推断(痕迹在盘 + 文件归属 `6489ff8a`);官方认定的 8 项名册与 2 项驳回理由不在给定材料中,需向编排方调取(见第九节第 10 项)。

---

## 三、四语精修成果(272 工具 · 739 处)

**以下 8 条为概括**,来源:提交 `6489ff8a` 提交信息、编排方给定数据与各批 concerns 原文(第八节)。739 处修复的逐条明细不在材料内,权威落点是提交 diff 本身(`git show 6489ff8a` 可逐 hunk 复核;该提交在 `de68431b..HEAD` 范围内触及约 470 个文件,含约 300 个 l10n 字典与 content 文件——`git diff --stat` 实测)。

1. **272 个工具四语平价核验、0 失败批次**:四语(en/zh/es/de)逐工具平价核对,双眼睛复核,共落盘精修 739 处(给定数据 + 提交信息)。
2. **es/de 数字排版按语种惯例统一**:es/de FAQ 千分位改为 `7.000`/`30.000`、小数点改为逗号(如 pressure `1,01325 bar`、speed `0,621371 mph` 风格)、es/de 核对日期 `08-2026`→`2026-08` 与 en/zh 对齐(llm-cost 共 4 处);消除了同文件内 FAQ(7000)与正文(10.000)的格式分裂(B03/B05 批次,含【判定说明】:en-US 约束的是程序化输出如 `AgeCalculatorClient.tsx:116` 的 `toLocaleString('en-US')`,静态译文按语种排版是仓库既有惯例——area-converter、dog-food-calculator 等存量在案)。
3. **术语修正**:zh 单位标签"梯度"→"百分度"(gradian 的标准中文译名;梯度指 gradient,另一概念)——属用户可见文案变更,精修员自评把握较大并上报备案(B05)。
4. **数字断言 node 实算核验后才定稿**:llm-cost 长文" hobby app 100 请求/日通常低于 $30/月"按默认输入实算四模型(Terra≈$41.4 / Sonnet≈$36.5 / Haiku≈$18.3 / GLM≈$19.2),因有 typically 兜底且无跨语冲突而保留并上报;amortization-table-generator 的 en 三处数字断言(m1 拆分 $1,733/$289、拐点 12.8 年@4%、19.4 年@6.5%)实算全部正确(B02/B04)。
5. **换算系数逐项核对**:batchConverters.tsx 全部 en note/label/系数核对无误(fuel 235.215 与 0.832674、torr=101325/760、time 2629800 s=30.44 天均值、BTU/eV 的 SI 精确值),8 个 slug 均已在注册表登记(B05)。
6. **三语"本地化扩展 FAQ"设计逐条核对后判定为设计而非缺陷**:rent-vs-buy(三语各 5 条 vs en 3 条)、weight/mass(en 3 条/1 条 vs 三语各 4 条)、body-fat/macro/pregnancy(1→4)、孕期 IVF 条目等,扩展 FAQ 内数字逐条实算无误、互不矛盾(B06/B07;对照第一波 B19 的 electricity 同款判定,系全站既有模式)。
7. **德语语法与引号在所辖字典内规范**:如 aes-encrypt-decrypt 等逐文件精修;本批所辖字典 de 块按引号风格统一——给定原文自述"统一到 „…“(德语规范)"(B03),但**该码位描述与落盘不符**,修订实测见第八节第 18 条报告注:落盘实为 „…”(U+201E+U+0022)直引号收尾款(与同文件既有风格一致);全仓引号分裂现状两批给出过两套数字(„…“ 86 / „…” 60,B01;„…“ 66 / «» 20,B03),修订时以最终 HEAD 实测为准:**„…“ 配对 89 文件、„…” 直引号收尾 66 文件、仅 «» 24 文件**(扫描 lib+app+components+scripts 下 ts/tsx/js/jsx/md/json/css 共 955 文件,node 脚本实测)。
8. **遗留欠账随手落地**:cooking-converter 三语 ui 块 81 条 unit/ing 键补齐(第一波 B28 遗留),键名与 `batch10Tools.tsx:626-657` 的 VOLUME_TO_CUP/INGREDIENT_DENSITY 逐字核对(含 `unit.fluid-oz` 非 floz)——本报告实测确认在盘(见第二节)。

---

## 四、视觉检测(216 截图 · 发现 70 · 落盘 49)

- **产出**(给定数据):完成 **216 张 PNG**(98 路径 × en/zh = 196,另前 20 工具页 zh-dark = 20),全部在 `.zcode/visual-shots/`;`manifest.json` 216 条已写入;batch 映射抽查 B01/B60/B94 正确,site×8 = `/`、`/tools`,2 博客 × 2 语(给定原文如此;"site×8"的 8 从何而来不可解,列入第九节调取)。**本次实测**:`manifest.json` 恰为 216 条 ✓;目录现存 PNG 245 张(22 张 dark + 223 张非 dark),为给定口径的超集,多出的 29 张来源未在材料中说明(其中 dark 22 张 vs 给定 zh-dark 20 张的 2 张差额亦未单独说明),如实备案、不臆测。
- **覆盖面缺口**(修订新增,据独立读者审读):98 路径仅截 **en/zh**,es/de 全程无截图、dark 仅 zh × 20 页——es/de(尤其德语长复合词)恰是排版溢出高危语种,视觉 QA 未含 de 的覆盖依据需编排方说明(第九节第 10 项⑪)。
- **暗色模式**:成功(给定数据)。
- **问题与修复**:发现问题 **70** 处,落盘修复 **49** 处(给定数据),对应提交 `d534f721`(fix(visual): 视觉检测发现的问题修复(49 处))。本次 `git show --stat d534f721` 实测:该提交改动 **49 个文件(+1,815/−472)**——"49 处修复"与"49 个文件"数字巧合,两个计数是否同口径未在材料中说明。**70 − 49 = 21 处的处置结果**(已驳回/转遗留/待办)名册未随材料提供,需向编排方调取(见第九节第 10 项)。
- **站壳上报**(给定"备注"原文,**句末截断**):

  > 机制:next.config.ts:13 为 output:'export' 静态导出 → next build 成功后自写 node http 静态服务器(trailingSlash 映射 \<dir\>/index.html,404 回退 out/404.html),监听 127.

---

## 五、性能专项结果(Σ −36,011 KiB · −4.8%)

对应提交 `5a93063d`(perf(bundle))。**结论:确认结构性问题并将 lib/tools.ts 注册表赶出全站首载。**

- **根因与引用链**(给定数据,与提交信息逐字一致):`'use client'` 文件里静态 import lib/tools 运行时数据的只有 `app/not-found.tsx`(getFeaturedTools)、`app/page.tsx`(getPublishedTools)、SearchPalette 与 workspace/QuickAccessPanel(后两者均为 dynamic 懒 chunk);其余 `app/tools/*`、`app/layout.tsx` 等全是 server component。含注册表的 213KB chunk(11dtckxjyvos_.js)因此以 `<script async>` 进入全部 261 页;另一个 1382KB chunk(zh/es/de i18n 词典+搜索引擎)进 239 个工具页(**本专项未处理,仍在**——如实转述)。
- **最小改造 8 文件,无行为/路由/输出变化**(给定口径;文件清单与行数经 `git show --stat 5a93063d` 实测吻合,合计 +354/−272):`app/not-found.tsx` 7 / `app/page.tsx` 7 / `components/HomeSitemap.tsx` 4 / `components/workspace/ToolHubExplorer.tsx` 6 / `components/workspace/hubThemes.ts` 10 / `lib/related-tools.ts` 506 / `lib/tool-search.ts` 32 / `scripts/gen-related-index.mjs` 54。改造要点(给定):gen-related-index 生成物扩展轻量投影(h1/keywords/longTailKeywords/featured 四字段)+ 新增 featuredLite(与 lib/tools.ts#get… 同源),供 not-found/page 改用,注册表随之退出路由首载。
- **before → after**(给定数据;Next 16 路由表已不输出 Size/First Load JS 列,尺寸按同一口径实测——遍历 out/\*\*/index.html 的 `<script>`/`<link>` _next 引用并累加 chunk 文件字节,即路由表同源数据;before 的 next build exit 0、262/262 页):

| 指标 | before | after | 变化 |
| --- | --- | --- | --- |
| 首页 `/` | 1221.6 KiB(19 chunks) | 1157.5 KiB(19 chunks) | **−64.1 KiB** |
| `/404` | 1132.0 KiB(16 chunks) | 1067.9 KiB(16 chunks) | **−64.1 KiB** |
| 最大页 `/tools/bcrypt-hash-generator` | 3445.8 KiB(23 chunks) | 3301.1 KiB(22 chunks) | **−144.7 KiB** |
| 261 页每页首载 JS 合计 Σ | 753,669 KiB | 717,658 KiB | **−36,011 KiB(−4.8%)** |

- **改造后状态**(给定数据):含注册表的 213KB chunk **0/261 页 HTML 引用**(仅 ⌘K SearchPalette / 工作台 QuickAccessPanel 懒加载可达)——本报告实测 `components/Header.tsx:37` 处注释在盘:"工具清单由 SearchPalette 自取(它本身是懒加载 chunk,注册表随之离开首载)",与既有设计一致;239 个工具页各 −144.7 KiB(−213KB 注册表,换取 LITE 块 81→149KB 仍在低优先级 preload);博客/关于/404 等 22 页各净减 213KB(给定原文,口径更正见下)。
  > **报告注(修订,据独立读者审读更正口径)**:"22 页各净减 213KB"与本节上表矛盾——/404 实减 64.1 KiB;Σ 交叉验证同样否定 213:若 22 页各 −213,则 239×144.7 + 22×213 ≈ 39,269 KiB ≠ 36,011;按 22 页各 −64.1 计,则 239×144.7 + 22×64.1 ≈ 35,994 ≈ 36,011(页级四舍五入内吻合)。自洽解释:22 页(博客/关于/404 等)原本不引用 81KB 旧 LITE 块,改造后新增 149KB 新 LITE → 净减 213−149 ≈ 64;239 个工具页原本已有 81KB 旧 LITE → 净减 213−(149−81) ≈ 145,两组均与表格相符。**故"净减 213KB"应读作"毛减 213KB 注册表",22 页净减约 64.1 KiB。**
- **验证方式**(修订新增):本报告未获得 before/after 的 `out/` HTML diff 等产物级对比证据,"无行为/路由/输出变化"的口径仅有给定数据与 perf 提交信息背书;产物级对比证据列入第九节第 10 项⑧。
- **量级观感**(修订新增,据独立读者审读):Σ 717,658 KiB ÷ 261 页 ≈ **每页均摊 ~2,749 KiB 首载 JS**,最大页 3,301.1 KiB——本波 −4.8% 方向正确,但量级上只是开场;本波已知最大余量 1382KB chunk(zh/es/de 词典+搜索引擎,进 239 个工具页)本专项未处理,行动项见第九节第 2 项;bcrypt 最大页中 1382KB 之外约 800KB 的构成无逐页分解(第九节第 10 项⑩)。

---

## 六、验收结果

| 检查项 | 结果 | 依据 |
| --- | --- | --- |
| TypeScript 类型检查(每波) | **绿** | 各批次 concerns 原文记录 `node node_modules/typescript/lib/tsc.js --noEmit` 退出码 0(B01"EXIT=0 零错误"、B03"B03 批 exit 0"、B05 两批次 exit 0,见第八节第 4/21/34/37 条);本报告撰写时在最终 HEAD `5a93063d` 上复跑同一命令,**退出码 0**(实测) |
| 冒烟测试(smoke) | **绿** | 给定数据"冒烟: 绿" + 本报告撰写时实测复跑:`node scripts/tool-smoke.mjs` → **SMOKE PASSED,OK=110 / FAIL=0**,77 个文件 SKIP(状态表与末尾清单各 77 行;与第一波报告实测口径 110/0/77 一致)。覆盖率口径同第一波:扫描 components/ 下 8 个目录的 94 个文件中的工厂生成工具,以默认入参实跑 compute/transform 并断言输出合法;手写交互组件记 SKIP 不判负。**覆盖面说明(修订新增)**:110+77=187 的分母与 239 工具页/272 核验工具口径不同(工厂工具数 ≠ 工具页数),且 perf 专项改动的 `app/page.tsx`、`app/not-found.tsx`、`lib/related-tools.ts`、`lib/tool-search.ts` 均不在 smoke 扫描范围(components/ 8 目录)——perf 改动的把关依赖 tsc 与 next build(exit 0) |
| next build | **通过**(证据等级:编排方给定 + perf 提交信息记录) | 给定数据"build: 通过";提交 `5a93063d` 信息记录 before 口径 next build exit 0、262/262 页(262 与 Σ 口径 261 的差额见第一节同项与第九节第 10 项⑦)。本报告**未复跑**(按约定 next build 留给流水线统一把关) |
| git 提交 | 4 个提交(第二波实质 3 个),HEAD = `5a93063d`(`5a93063d8a98`) | `git log --oneline de68431b..HEAD` / `git rev-parse HEAD` 实测,与给定数据"最终HEAD: 5a93063d8a"一致 |
| git 推送 | **已推送**:`origin/main` 与 HEAD 同指 `5a93063d8a982a17…` | 本次 `git log -1 --format=%H origin/main` 实测,与给定数据"已推送: true"一致 |
| 工作区 | 不干净,但仅 2 个未跟踪文件:`_pytest.txt`(实测 0 字节空文件,2026-10-11 15:22 生成)与本报告 `docs/optimization-report-2026-10-10-wave2.md`,**无任何已跟踪文件的未提交修改** | 本次 `git status --porcelain` 实测(与给定数据"工作区干净: false"一致;初稿写于本报告落盘前故记 1 个,修订时更新为 2 个) |

---

## 七、累计账本(两波合计)

| 维度 | 第一波(截至 `de68431b`) | 第二波(`de68431b..5a93063d`) | 两波合计 |
| --- | --- | --- | --- |
| 落盘修复 | 323 处(94 批审计)+ 41 处(终检巡逻)= **364 处** | 739 处(四语精修)+ 8 项(遗留清单落地)+ 49 处(视觉修复)= **796 处/项** | **1,160 处/项**(分类相加口径:三类的计数单位分别为"修复处/落地项/修复处",合计仅作量级参考) |
| 核验 | 公式实算 289 处;博客数字断言逐项 node 实算 | 四语平价核验 272 工具(0 失败批次);批内数字断言 node 实算(第八节多条) | 公式/数字实算 + 平价核验双轨 |
| 字典与本地化 | 三语字典 zh +3/润 5、es +0/润 14、de +0/润 18;共享文件请求落地 89 条;客户端本地化 21 文件 | cooking-converter 81 条 unit/ing 键、runway 27 条、六件套 invalidInput 18 条等遗留落地(8 项,16 文件 +136/−37);es/de 数字/日期排版统一 | 见两波报告第二/三节 |
| 博客 | 12 篇支柱文章核查加固,改进 31 处 | —(本波未触及博客,除视觉截图覆盖 2 篇) | 31 处 |
| 性能 | — | 261 页首载 JS Σ −36,011 KiB(−4.8%);首页 −64.1;最大页 −144.7;213KB 注册表 chunk 退出全站首载 | 同第二波 |
| 视觉 | — | 216 张截图;发现 70;修复 49 | 同第二波 |
| 提交 | 5 个(`25290dac`/`52d10c15`/`e5e4b4b0`/`16d51a7f`/`de68431b`)+ 1 个 docs(`74351950`) | 3 个(`6489ff8a`/`d534f721`/`5a93063d`) | 9 个,全部已推送 |
| token | **659,937,432**(截至第一波完成,给定) | **未在给定材料中提供** | **无法合计**——第二波 token 缺口如实说明,两波总成本无法从本材料估算 |

---

## 八、遗留事项(50 条,含批次标注)

> 以下为编排方交付的 concerns **原文**逐条收录,仅对 Markdown 会吞掉的尖括号做了转义,其余未作改写。批次标注([B01]~[B07])为原文自带。收录上限 50 条,给定材料恰好交付 50 条原文,**不存在截断**。多条为原文自带【判定说明】/【跨批观察】/【备案】/【信息项】/【流程说明】性质的条目,照录。
>
> **横向观察**(报告方归纳):50 条中 5 条是"未运行 next build(留给流水线)"的流程说明(第 4/21/34/37/42 条);5 条指向同一主题"德语引号全仓分裂"(第 6/18/23/46/50 条,其中第 18 与第 23 条的码位表述互相矛盾,已由修订实测裁决,见第 18 条报告注);另有 es/de 数字排版方向(第 8/19/22/30/35 条)多批从不同工具得出一致结论——均已在第九节归并,避免重复处置。

### 8.1 B01 批次(9 条)

1. **[B01]** 共享文件 makeTextTool.tsx:95 的 en 兜底文案 "Trim the input to compute." 偏生硬(zh/es 都是「裁剪后再计算」,de 只说裁剪)。属共享全站文本工具的 chrome 文案,不属我批,且不算错误 → 未列 sharedRequest,仅报备。
2. **[B01]** json-minifier 的 de "Leerzeichen"/es "espacios" 严格说只指空格,不覆盖制表符/换行(whitespace);这是德/西开发语境的通行宽泛用法,改动收益低、风格扰动大,保持原样。
3. **[B01]** en json-to-csv content "exporting application data to spreadsheets, data analysis tools, or database imports" 中 "to database imports" 搭配微歪;按「en 只修 typo 与明显笨拙、不重构」原则保持原样。
4. **[B01]** 未运行 next build(按批次指令由流水线统一把关);已运行 node node_modules/typescript/lib/tsc.js --noEmit,EXIT=0 零错误。
5. **[B01]** git 工作区还有其它批次代理修改的文件(age-calculator、ascii-table 等),与本批无关,我未触碰;上述 12 个文件的 git diff 已逐行复核,全部为预期内的纯文案改动。
6. **[B01]** [既有,非本批引入] 德语引号风格在仓库内本就分裂:全仓含 „ 的文件中 86 个用 „…“ 配对、60 个用 „…" (低开引号+直引号收尾),本批文件 lib/i18n/tools-l10n/add-line-numbers.ts:50 与 lib/i18n/tools-l10n/text-to-list.ts:56 属后者,且 git show HEAD 确认本次未改动这两行。因仓库无统一惯例、非精修员引入,按铁律未改动,建议后续统一排版时一并处理。
   > 报告注(修订实测):本条 86/60 与 B03 第 18 条的 66/20 为两套并存数字、口径均未说明。修订时在最终 HEAD 重数(扫描 lib+app+components+scripts 下 ts/tsx/js/jsx/md/json/css 共 955 个文本文件,node 脚本按 „…对 的右引号码位分类):**„…“(U+201E+U+201C)配对 89 文件、„…”(U+201E+U+0022)直引号收尾 66 文件、仅 «» 24 文件、混合 0**——与 86/60 量级吻合(差额来自扫描范围/时点),而 B03 的"66"恰等于直引号收尾数,提示第 18 条的 „…“ 写法疑为转录失真(详见第 18 条报告注)。拍板请以本实测为准。
7. **[B01]** [备案] app/tools/csv-to-json/ 目录无任何未提交改动(git diff 为空)——与批次文件清单一致,精修员未触及该目录,非遗漏。
8. **[B01]** [备案] l10n inputTooLarge 的数字排版 es『200 000』/de『200.000』/zh『20 万』与 en-US『200,000』不同,属既有的按语种排版设计(工具计算输出仍固定 en-US),非本批改动,不算问题。
9. **[B01]** [流程说明] 首轮 git diff 因 pathspec 漏写 .tsx 后缀(components/texttools/batch3TextTools)未显示该文件改动,已用完整路径补看并核对全部 2 处 en note 改动——均为正确修复,无回归。

### 8.2 B02 批次(8 条)

10. **[B02]** en 长文 llm-cost content.tsx:15 「hobby app 100 请求/日在中端模型下通常低于 $30/月」按默认输入(2K/800 token×100 次/日)实算:Terra≈$41.4、Sonnet≈$36.5、Haiku≈$18.3、GLM≈$19.2——该句有 typically 兜底且无跨语冲突,未改;若想更稳可改『多个中端模型低于 $30』。
11. **[B02]** es/de 的核对日期我按 en-US 日期格式统一规则把『08-2026』改成『2026-08』与 en/zh 一致(llm-cost es FAQ4+note、de FAQ4+note 共 4 处);若 es/de 有意用 mm-yyyy 顺序,回退这 4 处即可。
    > 报告注(修订,据独立读者审读):『2026-08』实为 **ISO 年-月序**,并非"en-US 日期格式"(en-US 惯例为 mm/dd/yyyy)——本条"按 en-US 日期格式统一规则"的理由表述不准确;但改向本身(与 en/zh 写法对齐)成立,站长意见为**维持 2026-08**。
12. **[B02]** context-window 的精度数字改动方向完全由『以 en 为准』规则驱动(5%→±10%),领域上 5-10% 均为常见说法;若维护者认为字典重写版(≤5%)更贴近组件实测而想反向统一,需先改共享 en FAQ(见 sharedRequests 第 3 条)。
13. **[B02]** tui slug 核对:组件四处 tui() 调用 slug(aes-encrypt-decrypt/context-window-checker/json-to-zod/llm-cost-calculator,batch15Tools.tsx:25/138/242/333)与注册表(tool-l10n.ts:493-497)及页面 slug 完全一致,无 mass 页式复用,无需额外共享请求。
14. **[B02]** 本批四个 content.tsx 均为纯 en 单语文件(文件头注明『SSR 恒英文』),与 reading-level-checker 那类四语 dispatcher 不同;四语精修因此集中在 ui/useCases/faqs 三张字典,符合机制设计。
15. **[B02]** de faq 复数动词 'Manipulierter Chiffretext oder ein falsches Passwort schlagen … fehl' (lib/i18n/tools-l10n/aes-encrypt-decrypt.ts:96):严格德语两个单数主语用 oder 连接时动词宜用单数,但复数式是改动前既有写法 (旧文 'scheitern' 同为复数),非本批引入,按最小改动原则未动。
16. **[B02]** es aes note 用 '150 000' 全写而 de note 用 '150k'、zh note 用 '15 万' (aes-encrypt-decrypt.ts:61/100/117/22/39):数值相等 (150,000,与 batch15Tools.tsx:310 PBKDF2_ITERATIONS=150_000 一致),写法差异为语种自然习惯且系既有,未统一。
17. **[B02]** l10n bundle 文件头仍写 'zh / es / de(2025-08 扩张批次)',本批后未更新日期——纯注释,不影响运行,未动。

### 8.3 B03 批次(7 条)

18. **[B03]** de 引号风格:本仓库 de 块 „…“(66 文件)与 «»(20 文件)并存,无绝对多数;我把本工具 de 块统一到 „…“(德语规范 + 与同文件 faqs 一致 + 与兄弟文件 date-difference-calculator 同款)。若流水线另有全站引号规范(如统一 «»),需要反向回调。
    > 报告注(修订实测,裁决与第 23 条的矛盾):本条自述"统一到 „…“(德语规范)",第 23 条却称"本批 de 用 „…"(U+201E+U+0022)"——两条必有一处失真。修订时实测 B03 所辖的 `lib/i18n/tools-l10n/age-calculator.ts`:de 块含 **5 个 U+201E 开引号、0 个 U+201C、5 个 U+0022**,抽出的引号对全部是 „Alter am Datum" / „Geburtsdatum" 形态——**落盘实为 U+201E+U+0022 直引号收尾,第 23 条与实测一致,本条的 „…“(配对)写法与最终代码不符**("统一"属实、与同文件既有风格一致属实;"德语规范"仅对下开引号 U+201E 成立,右引号非规范 U+201C)。全仓修订实测:„…“ 89 / „…” 66 / 仅 «» 24(见第 6 条报告注)——本条"66"恰为直引号收尾数,疑为转录时把 „…” 误写为 „…“;«» 20 vs 实测 24 为口径差。全站统一拍板请以实测码位清单为准。
19. **[B03]** es/de FAQ 千分位改为 7.000/30.000、zh 保持 7000/30000:数值不变、纯排版,依据是各语言 content.tsx 既有写法(es/de 用 10.000,zh 不加分隔符);若全站要求正文数字一律 en-US 格式(7,000),此处需再统一,但那样反而违背各语种排版习惯,未取。
20. **[B03]** AgeCalculatorClient.tsx 与 page.tsx 零改动:核对后无 typo、无事实错误、22 个 UI key 全覆盖字典、日期/天数展示 fmt 为 en-US 属既定设计,故未动。
21. **[B03]** 未运行 next build(按指令由流水线统一把关);仅运行了 tsc --noEmit(exit 0)与 node 结构/平价校验脚本(输出见上)。
22. **[B03]** 【判定说明,非缺陷】es/de FAQ 千分位由 7000→7.000 表面上触及『数字格式固定 en-US』设计,但该设计约束的是程序化输出(AgeCalculatorClient.tsx:116 `fmt = n => n.toLocaleString('en-US')`,本批未动);静态译文正文按各语排版是仓库既有惯例(area-converter.ts:54/78 '10.000 m²'、dog-food-calculator.ts:129/191 '1.000'、本文件未改动的 content.tsx:189 es '10.000 días'/content.tsx:251 de '10.000 Tage')。此改动反而消除了同文件内 FAQ(7000)与正文(10.000)的格式分裂,予以保留。
23. **[B03]** 【跨批观察,未改】德语右引号码位全仓不统一:本批 de 用 „…"(U+201E+U+0022,与本文件未改动的 content.tsx:221 一致),而 screen-time-calculator.ts:61 用 „…“(U+201E+U+201C)。属其他批次文件的既有风格混杂,非本批引入,不属本批修改范围,仅上报。
24. **[B03]** 【跨批观察,未改】freelance-rate-calculator 四语数字抽样中,15.3%(FICA)仅 en FAQ 含有,zh/es/de 为概要式翻译未提及;所有各语共有数字(2,080/2.080、40h、20-25h、10%-20%、8×)完全一致,无矛盾,未改动(该文件非本批独占)。

### 8.4 B04 批次(5 条)

25. **[B04]** 本工具的 content.tsx 长文仍是纯英文(文件头注释自述 'SSR 恒英文' 为有意设计)。但全站 239 个 content.tsx 中 204 个已是四语 client dispatcher(grep 计数),同批兄弟工具两者皆有(ascii-table/base-converter/epoch-converter 为 dispatcher;coin-flip/dice-roller/hysa/cd 为 en-only),且 roth-ira-calculator 本轮已被别的批次改为 dispatcher——该页在 UI 全四语后正文仍是 4 段英文。我没动它:把 SSR 组件改写为 client dispatcher 属渲染机制变更,超出'只改语言质量'的授权。en 三处数字断言我已用 node 实算验证全部正确(m1 拆分 $1,733/$289、拐点 12.8 年@4%、19.4 年@6.5%),若后续要做四语 dispatcher 可放心作为翻译底稿。
    > 报告注(修订实测):"204"为批次进行中的 grep 时点数,不等于终态。修订时在最终 HEAD 重数(node 脚本按文件头 200 字符内 'use client' 判定):**239 个 content.tsx = 224 个四语 dispatcher + 15 个非 dispatcher**——204 与 224 的差 20 个为并行批次推进的时点差(如 roth-ira-calculator 即本波被改造);第 9 节原稿"余 15 个 en-only"与 204 相加不成立,系初稿账目错误,以本注为准。15 个非 dispatcher 名单(实测):amortization-table-generator、car-cost-calculator、context-window-checker、dice-roller、electricity-cost-calculator、json-to-zod、llm-cost-calculator、morse-code-translator、pace-calculator、password-entropy-checker、protein-intake-calculator、random-team-generator、roman-numeral-converter、typing-speed-test、wheel-spinner。本条提及的 coin-flip/hysa/cd 已不在名单(批次后被改造),amortization-table-generator/dice-roller 在列。
26. **[B04]** 本工具在 lib/tool-formulas.ts 中无 en 公式条目(grep 'amortization-table-generator' 零命中),故 bundle 缺 formula 字段无翻译对象,非缺陷。
27. **[B04]** de 的 thBalance/csvBalance/chartBalance 三键同为 'Restschuld'(en 区分 Balance/Remaining Balance):Restschuld 本义即'剩余债务',德语再加 'verbleibend' 属冗余,且与 loan-calculator/mortgage-calculator 的 de 既有术语一致,故未拆分。
28. **[B04]** 信息项(非缺陷,超出本批范围): cube-calculator 的 zh 用中文数字「二维/三维」对应 en 的 2D/3D,纯数字提取脚本会误报数字不平价,需按语义核对;后续审计请勿当缺陷修。
29. **[B04]** 信息项: lib/tool-faqs.ts(英文基线)存在本批以外的未提交改动(roth-ira 2026 数字、dice/embedding 文案等),属其他批次,未核对其内容,仅确认 amortization 条目未被改动。

### 8.5 B05 批次(8 条)

30. **[B05]** 数字格式约定已按仓库既有惯例处理并请人工复核:8 个 content 的 es/de 段落里混着 en-US 数字格式(pressure 的 '1.01325 bar'、frequency 的 '0.0167 Hz' 等,在 es/de 会被误读成 101325/1.0167),我按站点主流惯例(speed-converter '0,621371 mph'、volume-converter '1.000 litros',以及同页 FAQ 字典里的 '6,283 rad/s')统一为 es/de 本地格式;若团队实际约定是全站数字一律 en-US,则本批这些改动及存量 es/de 小数点写法需反向统一——这个方向性判断建议人工拍板。
31. **[B05]** energy/frequency 的 zh/es/de 额外 FAQ 含区域化示例且数字各语不同但各自算术正确:电价 zh ¥0.55/度、es €0.15、de €0.40(¥198≈200 元/€54/€44 均核算无误);zh 空调 FAQ 有 '1.5 匹' 本土说法、es 提拉美标签、de 提德国标签。判断为有意的区域化本地化而非平价错误,未改动。
32. **[B05]** zh '梯度'→'百分度' 会改变用户可见单位标签(gradian 的标准中文译名是百分度/冈,梯度指 gradient 另一概念),把握较大但仍属可见文案变更。
33. **[B05]** batchConverters.tsx 审读后未改:所有 en note/label/换算系数逐一核对无误(fuel 的 235.215 与 0.832674、torr=101325/760、time 的 2629800 s=30.44 天均值、BTU/eV 的 SI 精确值均正确),8 个 slug 均已在 lib/i18n/tool-l10n.ts 注册,无 sharedRequest 需求(COMMON_UC_UI chrome 文案完整)。
34. **[B05]** 已运行 node node_modules/typescript/lib/tsc.js --noEmit → 退出码 0(在全部编辑之后);按指示未运行 next build。
35. **[B05]** 低风险备忘(未改动):numeral-system-converter content.tsx es/de 将 RGB 三元组写作 #FFFFFF = 255.255.255(en/zh 为 255,255,255)。这是精修员为规避 es/de 逗号小数歧义的有意取舍,值不变;但德语里点号也可读作千位分隔,严格说两种写法都有歧义。回退会重新引入逗号小数歧义,故保留,仅备案。
36. **[B05]** 逐文件全读复核了 7 个有改动的内容文件与全部 8 个 l10n 文件;energy-converter/content.tsx 与 components/converters/batchConverters 在本批无未提交改动(git status --porcelain 输出为空),无内容可复核——批次清单与实际改动面存在此差异,非遗漏。
37. **[B05]** 按指示未运行 next build;已运行 node node_modules/typescript/lib/tsc.js --noEmit(exit 0)作为类型层验证,构建/渲染验证由流水线统一把关。

### 8.6 B06 批次(10 条)

38. **[B06]** rent-vs-buy-calculator 三语 l10n 各有 5 条 FAQ,而英文(lib/tool-faqs.ts:158,共享文件)只有 3 条:zh/es/de 各多出 2 条本地化 FAQ(买房隐性成本、利率影响)。第 4 条三语同主题(各国交易成本:zh 3%–6%、es 西班牙 8–12%、de 德国 >10%);第 5 条 de 主题不同(de 讲德国 10 年 Zinsbindung 续贷,zh/es 讲利率敏感性)。三语 FAQ 数学各自验证正确、互不矛盾,判定为按语区定制的设计而非缺陷,未动;若要英文侧同享这 2 条需改共享 lib/tool-faqs.ts。
39. **[B06]** zh 租买 FAQ5 用人民币示例(¥100万/¥400/14万,数学已验证)+ LPR、es FAQ5 用欧元示例(843→1,013 €,已验证),而工具输出为 USD:与全语区定制模式一致(es 用 €、de 讲德国专项),未改。
40. **[B06]** body-fat(1→4)、macro(1→4)、pregnancy(1→4)英文 FAQ 条数少于三语 l10n,为全站既有的 l10n 增强模式,未动,也不算缺译。
41. **[B06]** zh body-fat FAQ 区间用 en-dash(2–5)而 es/de 用连字符(2-5),纯排版差异、数值一致,按最小改动原则未统一。
42. **[B06]** 未运行 next build(按指令留给流水线);已运行的检查仅为 tsc --noEmit 与 node 转译/校验脚本。
43. **[B06]** [既有,非本批引入] macro 词典三语均缺 outSub.protein/carbs/fat,'4 cal/g'/'9 cal/g' 子标签三语一致回退英文(outSub.total 却已译)——属既定缺译回退设计,仅轻微不一致,未动
44. **[B06]** [既有,非本批引入] es annuity: content 现用 'pago único',es 词典 useCases 用 'suma única',同义漂移,两者均正确西语,未动
45. **[B06]** [边缘风格,存疑不改] rent-vs-buy de FAQ 'Jedes zusätzliche Jahr verdünnt die Abschlusskosten' 为侧向改写(原 'verteilt dünner' 亦别扭),无明确劣化,保留
46. **[B06]** [既有,非本批引入] net-worth de useCases „anlagefähigem“ 后接直引号 U+0022 而非德语关闭引号,批前已有,未动
47. **[B06]** en FAQ 库(lib/tool-faqs.ts)无孕期 IVF 条目,该 FAQ 仅存在于 zh/es/de 词典(l10n 超集),故 −17 修正无 en 同步问题——已核实非缺陷,仅备案

### 8.7 B07 批次(3 条)

48. **[B07]** zh/es/de 各自比 en 多出第 4 条 FAQ(weight: en 3 条 vs 三语各 4 条;mass: en 仅 1 条 vs 三语各 4 条),且 zh 第 4 条讲市斤/两、es/de 讲 stone——这是既有的『三语共享前三条 + 各语本地化扩展第 4 条』设计(es/de 同选 stone 主题,zh 选中国单位主题),已逐条核对扩展 FAQ 内数字无误,未当 bug 修
49. **[B07]** date-diff en 正文写一年≈365.2422 天(回归年)而同工具 en FAQ 写 365.2425 天(格里高利 400 年周期均值)——两个数字各自正确、四语逐节镜像一致,属 en 自身两种口径并存,未改
50. **[B07]** 德语 „x“(„+ASCII 直引号收尾)问题在全仓库大量 l10n 文件中存在(如 find-and-replace、password-entropy-checker 等),本批只修了自己 9 个字典;其余批次可同样处理

---

## 九、下一轮建议

**站长拍板意见**(据独立读者审读转达,本报告如实记录、不代为执行):① 德语引号——先澄清矛盾(已由修订实测裁决,见第八节第 18 条报告注)再拍板,方向倾向 „…“;② es/de 数字/日期——倾向采纳"程序化输出 en-US、静态译文按语种排版"并写入仓库约定文档,B02 日期 4 处维持 2026-08;③ llm-cost——倾向直接改为"多个中端模型低于 $30"(依据:给定实算 4 模型中 2 个高于 $30,"通常低于"已有 2/4 反例);④ 共享文件 3 项与 dispatcher 化——待正式授权范围。

均为第八节遗留 concerns 的直接转化、本次实测发现与站长意见,按优先级归类,无新增臆测:

1. **德语引号全站统一(已具备拍板条件)**:修订实测(最终 HEAD,扫描 lib+app+components+scripts 955 文件):„…“ 配对 89 / „…” 直引号收尾 66 / 仅 «» 24 / 混合 0;码位矛盾已裁决——B03#18 的落盘实为 U+201E+U+0022(第八节第 18 条报告注)。按站长倾向 „…“ 执行时:目标码位 U+201E+U+201C,排查 66 个 „…” 文件与 24 个 «» 文件;**注意执行清单须按码位生成**,不能沿用 B03#18 的文字自述(其 „…“ 表述与落盘不符,按字面执行会漏掉/重复处理其已改字典)。
2. **1382KB 词典 chunk 立项(新增,本波最大已知余量)**:zh/es/de i18n 词典+搜索引擎 chunk(1382KB)仍进 239 个工具页,本专项未处理(第五节)且原建议清单漏列行动项。建议与 LITE 块 149KB"低优先级 preload → 按需加载"的决策复核(第九节第 10 项⑫)一并立项,统筹代码分割与词典按需加载——背景:Σ 717,658 KiB ÷ 261 页 ≈ 每页均摊 ~2.7MB 首载 JS、最大页 3.3MB,−4.8% 只是开场。
3. **content.tsx 四语 dispatcher 化欠账(账目更正)**:终态实测 **239 = 224 dispatcher + 15 非 dispatcher**(名单见第八节第 25 条报告注);B04 的 204 为批次时点数。属渲染机制变更、超出语言精修授权,建议单开批次并明确授权;amortization 的 en 数字断言已实算验证,可作翻译底稿(第 25 条)。
4. **共享文件联动决策**:rent-vs-buy 若要 en 侧同享 2 条本地化 FAQ 需改共享 lib/tool-faqs.ts(第 38 条);context-window 精度若反向统一(±10%→≤5%)需先改共享 en FAQ(第 12 条);llm-cost『低于 $30/月』——站长已倾向直接改"多个中端模型低于 $30"(第 10 条)。三项均需授权后由持有共享文件的批次执行。
5. **es/de 数字与日期排版方向**:按站长倾向采纳"程序化输出 en-US、静态译文按语种排版"(B03 判定说明,第 22 条),写入仓库约定文档,杜绝后续批次反复纠结;B02 日期 4 处维持 2026-08(理由按 ISO 序更正,第 11 条报告注)。关联备案:numeral-system `#FFFFFF = 255.255.255`(第 35 条)、inputTooLarge 按语种排版(第 8 条)。
6. **视觉检测跟进**:① 剩余 21 处(70−49)处置名册调取后把待办列入下一轮;② 覆盖缺口补课评估:es/de 无截图、dark 仅 zh×20(德语长复合词为溢出高危)、"site×8"含义澄清(第 10 项⑪);③ 49 处修复(+1,815/−472 行)的样式/逻辑分类并入批级台账(第 10 项②)。
7. **下一轮审计注意事项(勿当缺陷修)**:cube-calculator zh「二维/三维」中文数字会被纯数字提取脚本误报不平价(第 28 条);macro 缺 outSub 三键、tui 缺译回退英文、net-worth de 直引号等均为既有状态或既定设计(第 43/44/46 条);date-diff en 正文与 FAQ 的 365.2422/365.2425 双口径各自正确(第 49 条)。
8. **工作区卫生**:① 处置 `_pytest.txt`——实测 0 字节空文件、2026-10-11 15:22 生成(晚于本波推送),疑似误产物,建议删除;② 本报告 `docs/optimization-report-2026-10-10-wave2.md` 比照第一波先例(提交 `74351950`)入库;两者均为未跟踪文件,防 `git add -A` 误提交/漏入库。
9. **注释卫生**:l10n bundle 文件头 'zh / es / de(2025-08 扩张批次)' 日期未更新(第 17 条),可在下次触碰该文件时顺带。
10. **向编排方调取的材料缺口**(本报告无法从给定材料与 git 实测补齐,如实列出):① 第二波 token 消耗(两波合计成本无法估算);② 739 处精修与 70 处视觉问题的批级台账,及 49 处修复(+1,815 行)的样式/逻辑分类(权威落点为三个提交的 diff,`git show 6489ff8a / d534f721 / 5a93063d` 可逐 hunk 复核);③ 遗留清单"确认 8 / 驳回 2"的逐项名册、2 项驳回理由,以及"被驳回项 7/8 未触碰"的确切指代;④ 遗留清单落地"说明"原文的截断后半段(脚本输出 zh/es/de 各 unit.\*=7、in……);⑤ 视觉站壳备注"监听 127."的截断后半段;⑥ `.zcode/visual-shots/` 245 张现存 PNG 与 manifest 216 条的 29 张差额来源(含 dark 22 vs 给定 zh-dark 20 的 2 张);⑦ build 262/262 与 Σ 口径 261 页的差额构成(哪一页、为何不进 Σ;修订时实测 out/ 已被 2026-10-11 17:26 重建、现存 260 个 index.html,无法据以勾稽);⑧ perf 专项 before/after 产物级对比证据(out/ HTML diff 或等价)——"无行为/路由/输出变化"目前仅有给定口径背书;⑨ 272 平价核验工具数的清点口径(与 239 工具页的关系);⑩ bcrypt 最大页 3301.1 KiB 中 1382KB 之外约 800KB 的构成(逐 chunk 分解);⑪ 视觉覆盖依据(en/zh only、dark 仅 zh、"site×8"含义);⑫ LITE 块 149KB 选低优先级 preload 而非按需加载的决策依据。

---

*报告生成:2026-10-11;提交范围 `de68431b..5a93063d`(5a93063d8a982a1708762306d5aa02880f04db48),全部数字以文中所注来源为准——git 实测者注明命令,给定数据者标注"给定",缺口如实说明、未以推测填充。*
*同日据独立读者审读意见修订(v3):①"22 页各净减 213KB"经 Σ 交叉验证更正为"毛减 213KB、净减约 64.1 KiB"(第五节报告注);②德语引号码位实测裁决(age-calculator.ts de 块 5 对全为 U+201E+U+0022,B03#23 与实测一致、#18 表述失真;全仓 89/66/24)并更新第三节/第八节/第九节;③content.tsx 账目更正:终态实测 239 = 224 dispatcher + 15 非 dispatcher(原稿"204+余 15"不成立);④262/261/260 页三方数字勾稽说明与 out/ 时点声明;⑤"未引入行为变更"表述收窄为"逻辑/路由/计算行为";⑥`_pytest.txt` 实测(0 字节)与工作区实况更新(2 个未跟踪文件);⑦smoke 覆盖面说明(187 ≠ 239/272 系口径不同;perf 四文件不在扫描范围);⑧新增 1382KB chunk 立项、量级观感、perf 验证证据缺口;⑨记录站长四项拍板意见;⑩材料缺口由 6 项扩充为 12 项。*
