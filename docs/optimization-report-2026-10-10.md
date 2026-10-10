# ToolHub 全站优化总报告(2026-10-10)

- **基线 → 终点**:`318a2cf8` → `de68431b`(即 `de68431b5c`)
- **覆盖范围**:全站 239 个工具逐批深度审计修复(前段)→ 三语字典补齐与客户端界面文案本地化(前段)→ 12 篇支柱博客事实核查加固(续跑段)→ 全站终检巡逻(续跑段)
- **性质**:全部为修复与加固——除确证错误修复(如 runway 小数月计算 bug)外,未引入任何行为变更;验收结果中 next build 为编排方给定结果(证据等级见第七节),tsc 与冒烟经本报告撰写时实测复核通过;代码已全部推送远端
- **本轮遵守的既定设计边界**(有意不改,非遗漏):金额/日期/数字固定 en-US 格式;站点仅 en/zh/es/de 四语;`⚠️ …` 校验失败文案与 `—` 占位为合法输出;`toNum` 对 `$1,200`/`18%` 粘贴的宽容化是特性;击键类工具输出区不加 aria-live 是已定决策。

> **数字来源说明**:提交清单与文件行数来自本报告撰写时实测的 `git log --oneline 318a2cf8..HEAD` 与 `git diff --stat 318a2cf8..HEAD`;过程统计(批次数、修复数、concerns 数、token 消耗)来自本轮编排方给定数据,文中逐处标注;凡无法从 git 实测复核的计数,均按给定口径转述、不做独立背书。

---

## 一、总览数字

| 维度 | 数字 | 来源 |
| --- | --- | --- |
| 提交数 | 5 个:`25290dac` / `52d10c15` / `e5e4b4b0` / `16d51a7f` / `de68431b` | `git log --oneline 318a2cf8..HEAD` 实测 |
| 改动文件 | 286 个 | `git diff --stat 318a2cf8..HEAD` 实测 |
| 插入 / 删除 | +6,237 行 / −2,031 行 | 同上 |
| 工具总数 | 239 个 | 给定数据 |
| 第一波批次数 | 94 批(失败 0 批) | 给定数据 |
| 第一波修复数 | 323 处 | 给定数据 |
| 公式实算核验数 | 289 处 | 给定数据 |
| 三语字典 | zh +3/润 5,es +0/润 14,de +0/润 18;共享文件请求落地 89 条 | 给定数据(89 条的计数单位说明见第三节) |
| 客户端本地化 | 21 个文件 | 给定数据 |
| 博客核查 | 改进 31 处,concerns 32 条 | 给定数据 |
| 终检巡逻 | 修复 41 处,非 clean 批次 28 个,concerns 58 条 | 给定数据 |
| next build | 通过 | 给定数据(无日志/退出码/CI 链接可附,证据等级见第七节) |
| 冒烟测试 | 绿 | 给定数据 + 本报告撰写时实测复跑通过(`node scripts/tool-smoke.mjs`:110 工具全过、0 fail,见第七节) |
| git 提交与推送 | 5 提交已全部推送;`main` 与 `origin/main` 同步,`origin/main..HEAD` 为空 | 给定数据 + 本次 `git status -sb` 实测 |
| 工作区 | 不干净:25 个未跟踪 `.patrol-*` 巡逻临时文件,无任何已跟踪文件的未提交修改 | 给定数据 + 本次 `git status --short` 实测 |
| 依赖 / 配置变更 | **零**(package.json、lockfile、next.config、tsconfig 等均未动) | 本次 `git diff --name-only 318a2cf8..HEAD` 过滤实测:286 个文件中无任何包管理/构建配置文件(唯一含 "config" 字样的是组件 `NginxConfigGeneratorClient.tsx`) |
| 单元测试 | 仓库无测试脚本与测试文件,本轮亦未新增 | 本次实测 `package.json` scripts(仅 dev/build/start/lint/submit-urls/smoke)与 diff 文件清单(无 `*.test.*` / `*.spec.*` / `__tests__`) |

**token 消耗口径**:前段(工具审计 + 字典 + 客户端本地化,对应提交 `25290dac`/`52d10c15`/`e5e4b4b0`)累计约 **5.06 亿(505,995,772)token**,为编排方对前段全部子代理的累计消耗统计;续跑段(博客 `16d51a7f` + 终检巡逻 `de68431b`)的 token 数据未在给定材料中提供,未纳入合计,**两段合计成本因此无法从本材料估算**。token 计数无法从 git 实测复核,按编排方口径如实转述。

---

## 二、第一波审计修复(94 批次 · 323 处修复 · 289 处公式实算)

**以下 8 条为概括**,来源:提交 `25290dac` 的提交信息、`git diff --stat 318a2cf8..HEAD` 的文件与行数分布、以及对 `components/calculators/batch20Calculators.tsx` 的逐 hunk 抽查。第一波 94 个批次的逐工具修复明细不在本报告材料内,323 处修复与 289 处公式实算的计数为编排方给定数据。

1. **239 个工具全量过审**:94 批次逐批深度审计、0 批失败,共落盘修复 323 处;其中 289 处公式类断言经 node 实算核验后再修正或确认(给定数据 + 提交信息)。
2. **runway-calculator 现金流跑道计算修复**(本次逐 hunk 抽查实证,`components/calculators/batch20Calculators.tsx`):耗尽当月的小数月计算整体重写——旧式 `month + (balance + 净烧)/(净烧)` 改为基于当月净烧 `breakNet = burn − currentRev` 的当月已消耗比例,并修正了增长折算的取值时点;同时新增 `growth < 0` 入参校验(负增长率直接返回 null)、`defaultAlive` 文案补 `{month}` 占位符替换。
3. **计算器批量组件加固**:`components/calculators/` 下 `batch7` ~ `batch20` 系列批量计算器文件 7 个被触及,另有 12 个独立 `*Client.tsx` 计算器组件修复(如 `AmortizationTableClient` 26 行、`CronParserClient` 22 行、`ReadingSpeakingTimeClient` 18 行、`AutoLoanCalculatorClient` 等)(diff --stat 实测)。
4. **devtools 深度修复**:18 个 devtools 组件文件改动,大头顶是 `CodeBeautifierClient`(272 行变更)、`YamlToJsonClient`(188 行)、`DockerRunToComposeClient`(118 行)、`RegexTesterClient`(107 行)、`MarkdownToHtmlClient`(63 行)、`SqlFormatterClient`(62 行)(diff --stat 实测)。
5. **英文 SEO 文案全面加固**:122 个 `app/tools/*/content.tsx` 被触及(逐一清点 diff --stat,另有 `app/tools/page.tsx` 5 行),大量 +74 ~ +220 的块状改动(FAQ、示例与用例扩充的典型形态);共享 FAQ/示例库 `lib/tool-faqs.ts`(32 行)、`lib/tool-samples.ts`(8 行)同步修正(diff --stat 实测)。
6. **共享库修正**:`lib/tool-formulas.ts` 66 行、`lib/tools.ts` 48 行——属第一波审计共享文件请求的落地(给定数据称共享请求共落地 89 条)(diff --stat 实测)。
7. **安全类工具修复**:`BcryptHashGeneratorClient`(+12 行)、`SecretKeyGeneratorClient`(+8 行)、`SshKeyGeneratorClient`(2 行)及 `PasswordStrengthChecker`/`PasswordGenerator` 的 content 文案修正(38/26 行)(diff --stat 实测)。
8. **转换器/文本/网页/工具类广覆盖**:`batch2Converters`、`batch5TextTools`、`batchTextTools`、`WordleSolverClient`、`SrtSubtitleShiftClient`、`SvgMinifierClient`、`WebpToPngConverterClient`、`IpCheckerClient`(59 行)、`IpSubnetCalculatorClient`(38 行)、`batch12Tools`(66 行)、`batch13bTools`(63 行)等近 30 个组件文件被触及(diff --stat 实测)。

> **关于 364 处修复(第一波 323 + 巡逻 41)的逐条明细**:逐条改动的权威落点就是 5 个提交的 diff 本身——`git show 25290dac`、`git show de68431b` 等可逐 hunk 复核每一处改动(286 个文件、+6,237/−2,031 为本次实测总量);但"哪处修复出自哪个批次"的工作台账不在本报告给定材料内。仓库根目录的 `.patrol-*` 脚本是巡逻过程的临时验证脚本(过程产物、非交付物),不应作为修复清单的来源。批级台账需向编排方调取(见第九节第 2 项)。

---

## 三、三语字典与客户端本地化

对应提交 `52d10c15`(fix(i18n):三语字典补齐缺失 slug 并落地审计共享文件请求)与 `e5e4b4b0`(feat(i18n):自定义客户端界面文案接入四语本地化机制,21 个文件)。

- **三语字典**(给定数据):zh 新增 3 处 / 润色 5 处;es 新增 0 / 润色 14 处;de 新增 0 / 润色 18 处;审计中提出的共享文件请求落地 89 条(该计数的计数单位——请求数、字典条目数还是 key 数——未在给定材料中说明,故无法与具体文件的行数做数量勾稽)。diff --stat 实测:`tools.zh.ts` 24 行、`tools.es.ts` 30 行、`tools.de.ts` 38 行变更。
- **客户端界面文案本地化**:21 个文件的自定义客户端 UI 文案接入四语本地化机制;核心机制文件 `lib/i18n/tool-l10n.ts` +12 行,`lib/i18n/tools-l10n/` 目录下 **71 个**字典文件被触及(本次 `git diff --name-only` 精确计数)。
- 该机制落地后,`tui` 缺译回退英文是既定设计(本轮多篇 concerns 原文反复确认),已知欠账见第六节 B12/B28/B43 条目。

---

## 四、12 篇支柱博客事实核查(改进 31 处 · concerns 32 条)

对应提交 `16d51a7f`(fix(blog):12 篇支柱文章事实核查与内容质量提升,重做加固)。

- **落盘位置**(diff --stat 实测):12 个博客内容文件(`lib/i18n/blog-article-*.ts` 11 个 + `lib/i18n/blog-articles.ts`,合计约 600 行变更),另 `lib/blog-posts.ts` 2 行与 2 个 `app/blog/*/page.tsx` 外壳(7 行)。
- **核查方法**(据各组 concerns 原文汇总):全部数字断言用 `node -e` 实算重验(如 `70×20^0.75=662.0`、`60000×(4.3%−0.5%)=2,280`、`LTV 50×0.8/0.02=$2,000`、`$2,347` 月供实算 `2346.93` 等);站内工具内链逐一验证 `app/tools/<slug>/page.tsx` 路由存在;metadata/JSON-LD/READ_TIME 与全站 12 篇惯例比对。
- **关键事实**(本次实测补证):博客正文不在 `app/blog/<slug>/page.tsx`(那里只是 metadata 壳),而是集中映射在 `components/BlogArticleBody.tsx:41-55` 的 ARTICLES 表中——12 篇里 **11 篇**的正文在各自专属 `lib/i18n/blog-article-*.ts`,唯独 `how-i-built-toolhub` 的正文在聚合文件 `lib/i18n/blog-articles.ts` 内;另注意 `hysa-vs-cd-wealth-building-guide` 的正文文件是 `lib/i18n/blog-article-cash-allocation.ts`(**文件名与 slug 不对应**,易误判为范围外文件)。因此 `git diff -- app/blog/<slug>` 为空属预期,各组均按真实路径复核了落盘。
- **原则执行**:未确证为错的软性断言一律按"没把握不改"保留(如 'tracking beats guessing by 20–30%'、'宽缝小砖可让勾缝用量翻三倍'等);共落盘改进 31 处、上报 concerns 32 条(给定数据)。
- **32 条 concerns 的分诊**(报告方归类,供分配处置优先级;原文见第六节):**11 条**(第 1/2/7/11/12/18/19/22/24/25/29 条)是"核查通过、无需改动"的正向记录;**9 条**(第 5/6/9/15/17/23/27/28/32 条)是落盘位置/验证命令/既有惯例的流程说明;真正需要维护者知悉或决策的是 **12 条**(第 3/4/8/10/13/14/16/20/21/26/30/31 条)。另注:第 13 条与第 20 条对 READ_TIME 的结论差异,源于所据词数(1578 词 vs 608/712 词)与阅读速度假设区间不同——两案的一致结论是"单独改会破坏全站一致性,应统一口径后再动"。

---

## 五、终检巡逻结论

对应提交 `de68431b`(chore:终检巡逻修复与最终验收收尾)。

- 终检巡逻中,**28 个批次检出非 clean 状态**,共落巡逻修复 **41 处**,上报 concerns **58 条**(给定数据)。第一波审计为 94 个批次(给定数据);巡逻遗留条目的批次标注(B07~B48)沿用同一套批次号体系,工作区遗留的巡逻临时脚本最大编号到 `.patrol-b92-*`——**由此推断**巡逻按第一波的批次划分逐批复核、覆盖同一套划分,但"同一划分"的明示确认不在给定材料中(见第九节第 5 项)。
- 巡逻修复的覆盖面按遗留条目与临时脚本编号计为 B07 ~ B92(含共享组件、计算器、devtools、字典等),修复均经 `node node_modules/typescript/lib/tsc.js --noEmit` 验证(concerns 原文多处记录 exit 0)。
- 巡逻中确认的代表性修复:`batch20Calculators.tsx` 的 fractionalMonth 修复核验(见第二节第 2 条)、`makeCalculatorClient.tsx` 的 `reset` 键入共享表(该 1 行改动经本次 `git log` 实测归属提交 `52d10c15`,用户可见行为无变化)、`css-gradient-generator` 正文 Drag→Move 措辞对齐等。
- **结论**:无阻塞项。58 条巡逻 concerns 中随材料交付遗留原文的 28 条(见第六节),全部为"上报知悉 / 低危 / 存量非本轮引入 / 产品决策类",无一影响构建、类型检查与冒烟;其余 30 条的原文与处置状态(已即时修复、重复上报、还是被筛除)均未随给定材料提供,本报告无法列名、不臆测,需向编排方调取名册(见第九节第 1 项)。

---

## 六、遗留事项(60 条,含批次标注)

> 以下为编排方交付的 concerns **原文**逐条收录,仅对 Markdown 会吞掉的尖括号做了转义,其余未作改写。编号为报告统一加注,便于引用。
>
> **收录范围说明**:本报告任务约定遗留事项收录上限 60 条,给定材料恰好交付 60 条原文(博客组 32 + 终检巡逻 28),因此**不存在截断**。巡逻全程上报 58 条 concerns,与进入遗留清单的 28 条之间相差 30 条——这 30 条是未随材料交付(材料本身只附了 60 条原文),并非从总池中删减,其名册与处置需向编排方调取(见第九节第 1 项)。条目下方如出现"**报告注**",为本报告撰写时(2026-10-10)补充的实测考证,不属于 concerns 原文。

### 6.1 博客组(32 条)

**组 1:canine-nutrition + client-side-cryptography-web-crypto(5 条)**

1. **[app/blog/canine-nutrition-and-calorie-guide/+app/blog/client-side-cryptography-web-crypto-guide/]** 核查通过、无需改动的数字(均有据):RER=70×kg^0.75 与系数表 1.6/1.8/3.0(0-4月)/2.0(4-12月)/1.0(减重)/1.4(老年)/2.0-5.0(工作犬)均为标准兽医参考值;node -e 复算 70*20^0.75=662.0、×1.6=1059.2≈文中1,060、1060/3800=278.9g≈文中280g、10%预算=106 vs 零食60-90+5×8=100-130kcal、log2(150000)=17.19≈2¹⁷、40+17.19=57.2≈文中57bits、128bit=32hex、GCM 96bit/12字节与 2³²≈43亿条生日界、GCM 128bit 认证标签、盐16字节、'5个随机词胜过10个人类拧巴字符'(人类自选≠均匀分布,成立)。
2. **[app/blog/canine-nutrition-and-calorie-guide/+app/blog/client-side-cryptography-web-crypto-guide/]** 卡片对自家工具的其余描述均核实无误:aes-encrypt-decrypt 确为 150,000 次迭代(app/tools/aes-encrypt-decrypt/content.tsx:11);dog-age-calculator 确为 15/+9/+小4/中5/大6.5 加体型输入与生命阶段输出(batch11Calculators.tsx:536-576);6 个既有内链 + 新增 hmac-generator 共 7 条 /tools/ 路由全部存在。
3. **[app/blog/canine-nutrition-and-calorie-guide/+app/blog/client-side-cryptography-web-crypto-guide/]** 文章系数表 vs 狗粮工具下拉存在有意的产品化差异:工具把 weight loss/senior 合并为 ×1.2、工作犬给 ×2.5,文章引用的是教科书值 1.0/1.4 与 2.0-5.0。文章数值本身正确,工具(batch19Calculators.tsx,共享文件)是简化设计,未改动、仅上报知悉。
4. **[app/blog/canine-nutrition-and-calorie-guide/+app/blog/client-side-cryptography-web-crypto-guide/]** OWASP 现行建议 PBKDF2-HMAC-SHA256 用 600k 次迭代,文章/工具为 150k、清单下限 ≥100k:文章如实描述了工具实现,150k 不是事实错误,未改动;如需对齐 OWASP 属产品决策。
5. **[app/blog/canine-nutrition-and-calorie-guide/+app/blog/client-side-cryptography-web-crypto-guide/]** 两篇正文位于 lib/i18n/blog-article-canine-nutrition.ts 与 blog-article-web-crypto.ts(均为本文专属文件、不在共享清单),app/blog/&lt;slug&gt;/page.tsx 外壳的 metadata/JSON-LD 核对无误无需改,故 git diff -- app/blog/&lt;slug&gt; 为空属预期;实际改动已用 git diff -- lib/i18n/blog-article-*.ts 确认 12 处全部在盘,node node_modules/typescript/lib/tsc.js --noEmit 退出码 0。未运行 next build(按约定留给流水线)。

**组 2:fire-playbook + renovation-math(4 条)**

6. **[app/blog/fire-movement-retire-early-playbook/+app/blog/home-flooring-and-renovation-math/]** 硬性要求 #5 的验证命令按字面运行 `git diff -- app/blog/<slug>` 为空:两篇文章正文实际存放于 lib/i18n/blog-article-fire-playbook.ts 与 blog-article-renovation-math.ts(与 slug 一一对应,仅被 components/BlogArticleBody.tsx 导入),slug 目录下的 page.tsx 只是 metadata 包装。两个包装页已完整核查(TITLE/DESC 数字、日期、JSON-LD、READ_TIME 格式与全站 12 篇一致)确无可改,未为凑改动而硬改;已改内容的落盘用 `git diff` 于真实路径复核(67 插入/11 删除)。
7. **[app/blog/fire-movement-retire-early-playbook/+app/blog/home-flooring-and-renovation-math/]** 两篇文章的数字断言经 node -e 重算全部正确,未发现需要修正的数字错误;落盘的改进为内链补充与表达修复(每篇多处),非数字纠错。
8. **[app/blog/fire-movement-retire-early-playbook/+app/blog/home-flooring-and-renovation-math/]** 保留未改的软性断言(无单一可靠来源、不构成错误):FIRE 篇 'tracking beats guessing by 20–30%'、'401(k) 匹配=即时 100% 回报'(按 1:1 匹配成立,为通行表述);装修篇 '宽缝小砖可让勾缝用量翻三倍'(行业经验值,与用量随缝宽缩放的方向一致)。
9. **[app/blog/fire-movement-retire-early-playbook/+app/blog/home-flooring-and-renovation-math/]** es/es 数字使用逗号小数(10,764 / 4,32)与 de 一致,是本仓库博客四语既有 i18n 模式(es/de 按本语习惯、en/zh 按 en-US),未改动。
   > 报告注(实测):原文"es/es"疑为笔误(应指 es 译文);两个例证均在盘——`lib/i18n/blog-article-renovation-math.ts:190`(es 块)`1 m² = 10,764 ft²` 与 `lib/i18n/blog-article-fire-playbook.ts:227`(es 块)`$4,32`,其中 10,764 与 4,32 均为**小数逗号**(即 10.764 ft²、$4.32,数值均正确),de 块为同款写法(renovation-math.ts:271 / fire-playbook.ts:320)。

**组 3:how-i-built-toolhub + hysa-vs-cd(7 条)**

10. **[app/blog/how-i-built-toolhub/+app/blog/hysa-vs-cd-wealth-building-guide/]** how-i-built-toolhub 的 '169 tools' 与发布日 2026-08-04 存在张力:发布时仓库实际 138 个工具(git show c364c41b:lib/tools.ts 实数 138);'169' 写入于 2026-08-13(acb12ef6),当时恰好 169 个。结论:是末次修订时点的准确快照、非错误,未改数字;已用 dateModified 消除结构化数据层面的失真,正文/标题数字请维护者知悉(标题 169-Tool 同时存在于 lib/blog-posts.ts 三语标题,若要改须连 blog-articles.ts 四语正文与 676+ 一并改,超出我的授权)。
   > 报告注(实测):①"三语标题"指 zh/es/de 翻译,站点共四语(en 为原文另存);②"676+"指该文另一组数字断言"**169 页 × 4 schema = 676+ 结构化数据块**",四语正文均在 `lib/i18n/blog-articles.ts`(:197/:341/:485/:629 一带)——若改 169,则 676+ 需联动,此即原文"与 676+ 一并改"的含义。
11. **[app/blog/how-i-built-toolhub/+app/blog/hysa-vs-cd-wealth-building-guide/]** hysa 文 '$60,000 → roughly $2,300 more per year':node 实算 60000×(4.3%−0.5%)=2,280,与 2,300 差 0.9%;原文自带 'roughly' 与 '~4.3%/~0.5%' 近似值,属可接受近似,未改。
12. **[app/blog/how-i-built-toolhub/+app/blog/hysa-vs-cd-wealth-building-guide/]** hysa 文实际收益率 1.5% 用的是简单减法(精确 Fisher 为 1.456%);该节标题本身就是 'real = nominal − inflation' 的定义,内部自洽,未改。
13. **[app/blog/how-i-built-toolhub/+app/blog/hysa-vs-cd-wealth-building-guide/]** how-i-built 文 READ_TIME '9 min':实测 1578 英文词,@200-225wpm 为 7-8 分钟;但含 3 个代码块的技术长文按 ~175wpm 计约 8.6 分钟,9 min 属可辩护,且与 lib/blog-posts.ts 的 '9 min' 一致,未改(避免与共享索引不一致)。
14. **[app/blog/how-i-built-toolhub/+app/blog/hysa-vs-cd-wealth-building-guide/]** 透明声明:lib/i18n/blog-article-cash-allocation.ts 是我负责文章的专属内容文件(非任务点名的两个禁改共享文件),为满足'每篇至少一处落盘改进'直接编辑了它;若编排方认为该文件也算共享,请按 sharedRequests 里的同等改动执行/回退。
   > 报告注(实测):`blog-article-cash-allocation.ts` 确为 12 篇支柱文章之一的专属正文文件——slug `hysa-vs-cd-wealth-building-guide` 在 `components/BlogArticleBody.tsx:46` 映射到 `cashAllocationGuideArticle`(文件名与 slug 不对应是历史命名,并非越权改共享文件);该文件改动已随提交 `16d51a7f` 落盘。原文末尾"请按 sharedRequests 执行/回退"的最终裁决结果未在给定材料中,本报告无法确认(见第九节第 4 项)。
15. **[app/blog/how-i-built-toolhub/+app/blog/hysa-vs-cd-wealth-building-guide/]** 未运行 next build(任务与仓库约定由流水线统一把关);已运行 node node_modules/typescript/lib/tsc.js --noEmit(exit 0)作为静态验证。
16. **[app/blog/how-i-built-toolhub/+app/blog/hysa-vs-cd-wealth-building-guide/]** hysa 文利率断言(4.4% HYSA、0.01% 传统行、3% 通胀)为 2026-09 文章时点的示意性利率,领域知识核对无生理/数学错误,但无法联网核实 2026 年真实市场利率。
   > 报告注:"生理"二字疑为同批代谢文核查措辞的复制残留(原文如此,未改写);该条实际核对的是利率断言的数学合理性。

**组 4:llm-pricing + metabolism(7 条)**

17. **[llm-api-pricing-and-tokenomics+metabolism-fasting-and-calorie-deficit]** 文章正文实际不在 app/blog/&lt;slug&gt;/page.tsx(那只是元数据壳,通读确认无正文、与 lib/blog-posts.ts:145-200 条目一致无需改),而在 lib/i18n/blog-article-llm-pricing.ts / blog-article-metabolism.ts(经 grep 全仓确认仅被 BlogArticleBody.tsx 引用、专属于这两篇文章,非受保护的共享文件),因此改动落盘于这两个内容文件;已按要求跑 git diff -- app/blog/llm-api-pricing-and-tokenomics app/blog/metabolism-fasting-and-calorie-deficit lib/i18n/blog-article-*.ts 确认全部 22 处改动在盘(app/blog 目录本身零 diff 属预期)。
18. **[llm-api-pricing-and-tokenomics+metabolism-fasting-and-calorie-deficit]** 核查无误故未改的数字清单——LLM 文:~4 字符/token 英文经验值、输出/输入 3–5× 价差(GPT-4o 4×/Sonnet 5×/Haiku 5×)、缓存读 10–50% 标价(Anthropic 10%/OpenAI 50%/Gemini 25%,与标题'50–90% 折扣'自洽)、Batch 约 5 折(OpenAI/Anthropic/Google 均为 50% off)、嵌入 $0.02–$0.13/M 恰为 text-embedding-3-small/large 实价、代码块 30.44 天/月(node 算 365.25/12=30.4375)、中文贵 30%+(保守成立)、2000/200=十倍(node 验证);代谢文:Mifflin-St Jeor 男女公式逐项与 1990 原式核对无误、活动系数 1.2/1.375/1.55/1.725 为标准值、7,700 kcal/kg 与 500×7/7700=0.4545kg≈0.45kg/周(node 验证)、BMR 占 60–75%、蛋白 1.6–2.2 g/kg、适应产热 5–15%、缺口 10–25%、16:8 热量等同时与普通限食等效(NEJM 2022 Liu 等/TREAT 试验)、早窗变体胰岛素敏感性改善(Sutton 2018)、孕期/进食障碍史/一日两练不适宜人群,均与文献一致。
19. **[llm-api-pricing-and-tokenomics+metabolism-fasting-and-calorie-deficit]** 高估一档活动系数虚增 200–300 kcal/日:档位步长 0.175,node 算典型 BMR 1150–1750 → 201–306 kcal,断言成立(MSJ 抽查 60kg/165cm/30y 女=1320、80kg/178cm/35y 男=1743)。
20. **[llm-api-pricing-and-tokenomics+metabolism-fasting-and-calorie-deficit]** READ_TIME 未改:LLM 文 en 正文 608 词、代谢文 712 词(node 统计),按 200–265 wpm 实读约 3–4 分钟,'10/11 min read' 偏高约 3 倍;但 12 篇博客全站同惯例(web-crypto 705 词标 12 min、712 词标 11 min,grep 全部 READ_TIME 确认 7–12 min 区间统一),判为站点既定风格而非本文事实错误,单独改我这两篇会破坏一致性——如需修正应全站统一改。
21. **[llm-api-pricing-and-tokenomics+metabolism-fasting-and-calorie-deficit]** '手环与健身器械高估消耗 15–30%' 未改:文献区间更宽且器械间差异大(跑步机 +13%、椭圆机 +42%,可穿戴设备能量消耗误差有高有低),该表述是带对冲的经验启发值,未能确证为错,按'没把握不改'原则保留。
22. **[llm-api-pricing-and-tokenomics+metabolism-fasting-and-calorie-deficit]** '参数相同的两人 BMR 相差 ±10% 以内' 未改:带 roughly 对冲,与方程预测精度文献相符。
23. **[llm-api-pricing-and-tokenomics+metabolism-fasting-and-calorie-deficit]** git status 里另有 7 个 blog-article-*.ts 被改(canine-nutrition/cash-allocation/fire-playbook/mortgage-piti/pricing-math/renovation-math/web-crypto),为并行其他组代理所改,我未触碰;验证 tsc 时它们已在工作区,exit 0 覆盖了含其改动的全仓类型检查。

**组 5:mortgage-loan-calculators + mortgage-piti(4 条)**

24. **[mortgage-loan-calculators+mortgage-piti-and-amortization-guide]** 已核无误、未改的断言(抽样列举):$2,347 月供(实算 2346.93)、首月 $2,040/$307(实算 2040.00/306.93)、87%/13%(86.9%/13.1%)、PITI≈$3,050 且托管层占 30%(税1.1%+保险$2k/年+PMI0.5% 实算 $3,031,3050/2347=1.300)、PMI $150–$300/月=贷款额 0.5–1%、PMI 78% 自动终止/80% 可申请(HPA 法案)、房产税 0.5–2.5%、保险 $1,500–$3,500/年、过户费 2–5%/佣金 5–6%、$5,000@20% 最低还款 18.8 年/利息 $7,317(>'15年以上且成本翻倍')、首年还款 86.9% 是利息、26 半月供=13 月供、'头5年仅~15%还款变净值'(实算 15.5%,修辞容差内)——全部 node -e 实算或领域知识核对通过。
25. **[mortgage-loan-calculators+mortgage-piti-and-amortization-guide]** 全部 10 个工具内链(mortgage/rent-vs-buy/loan/auto-loan/credit-card-minimum/credit-card-payoff/compound-interest/retirement/amortization-table-generator/down-payment-calculator)均验证存在 app/tools/&lt;slug&gt;/page.tsx,锚文本自然;lib/blog-posts.ts 与两 page.tsx 的日期/标题/描述一致(只读核对,无需改)。
26. **[mortgage-loan-calculators+mortgage-piti-and-amortization-guide]** 未改的措辞权衡:①文章1'便宜市场第2年交叉' vs 文章2'第2–3年'——两句各自成立,不属错误;②zh 卡片'摊销表生成器'与注册名'摊还计划表生成器'用词不同,但文章通篇用'摊销',为文内一致保留;③'7/11 min read'偏宽裕,属编辑性元数据未动;④shared 文件中 'saves five figures'(blog-posts.ts:13、page.tsx DESC)对 $10k 一次性还款($52k)仍字面为真,未申请改动。
27. **[mortgage-loan-calculators+mortgage-piti-and-amortization-guide]** 验证命令:node node_modules/typescript/lib/tsc.js --noEmit(退出码 0);git diff -- lib/i18n/blog-article-{finance,mortgage-piti}.ts(50 insertions/22 deletions,全部落盘);未运行 next build(按要求留给流水线)。

**组 6:pricing-math + saas-economics(5 条)**

28. **[app/blog/pricing-strategies-margin-vs-markup/+app/blog/saas-unit-economics-cac-ltv-churn/]** 改动落盘位置说明:两篇正文不在 app/blog/&lt;slug&gt;/page.tsx(该处仅 metadata,本就无误),而在各自专属内容文件 lib/i18n/blog-article-pricing-math.ts 与 blog-article-saas-economics.ts(grep 证实仅被 components/BlogArticleBody.tsx:48,52 引用、分别映射到这两个 slug,非共享文件);已按要求运行 git diff -- app/blog/&lt;两个slug&gt; 为空(page.tsx 无需改),并 git diff 两内容文件逐 hunk 核对(158+/15−),node node_modules/typescript/lib/tsc.js --noEmit 于全部改动之后运行 exit 0;未运行 next build(遵守流水线统一把关约定)。
29. **[app/blog/pricing-strategies-margin-vs-markup/+app/blog/saas-unit-economics-cac-ltv-churn/]** 核查通过、未改动的数字(逐项 node -e 实算):pricing 文 50% markup→33.33% margin、$40→$60 为 33.3%/50%、keystone=50% margin、25÷0.6=$41.67 vs $35 差 $6.67、$30 订单费率 (0.87+0.30)/30=3.90%、净收 $100 反解 (100+0.30)/0.971=$103.2956→$103.30 vs 朴素 $102.90、40% margin 打 9 折利润降 25.00%/需销量 +33.33%、25% margin 需 +66.67%→67%,DESC/blog-posts.ts 摘要中同组数字一致;saas 文 CAC 120000/200=$600、LTV 50×0.8/0.02=$2000、3% 月→年 30.62%(四舍五入 31% 成立)、5% 月→45.96%→46%、盈亏平衡 100000/40=2500、LTV/CAC=2000/600=3.33 与 ≥3 叙事一致;lib/blog-posts.ts 两文四语列表项与 page.tsx 的 PUBLISH_DATE(2026-09-05)一致,故无需 sharedRequests。
30. **[app/blog/pricing-strategies-margin-vs-markup/+app/blog/saas-unit-economics-cac-ltv-churn/]** Stripe 费率 '2.9% + $0.30':与本站自带 reverse-stripe-fee-calculator 工具页四语口径完全一致(app/tools/reverse-stripe-fee-calculator/content.tsx:38,80,123,168),站内一致优先故未动;但我在本环境无法核实 Stripe 2026 年现行挂牌费率,若站方日后统一更新费率口径,两处需联动。
31. **[app/blog/pricing-strategies-margin-vs-markup/+app/blog/saas-unit-economics-cac-ltv-churn/]** saas §4 行业基准(消费订阅 5–7% 月流失、SMB<3%、企业年 logo 流失个位数)与 §3/§5 阈值(≥3、≤12 个月、>5 欠投入)为通行业界经验值,无算术错误,未改;30–50%→a third to half 的取舍:两者都是业界常见口径,我改区间而非改 $90–120,因价格是读者会动手复算的具体数。
32. **[app/blog/pricing-strategies-margin-vs-markup/+app/blog/saas-unit-economics-cac-ltv-churn/]** 工作区中另有其他分组正在修改的文件(how-i-built 等),我未触碰;es/de 千位空格('$120 000'、'2 500')经与兄弟文章(llm-pricing/fire-playbook)比对确认为本站既定惯例,未按 en-US 改写。

### 6.2 终检巡逻组(28 条)

33. **[B07]** mass-converter 的 l10n 字典(lib/i18n/tools-l10n/mass-converter.ts)里的 ui 块(unit.* 各 key)目前是死数据:没有任何 client 以 slug 'mass-converter' 调 tui(mass 页面复用 slug 为 weight-converter 的 WeightConverterClient),该字典实际只服务 faqs/useCases。属先前已存在、无行为影响,按「不重构」原则未动,仅上报。
34. **[B07]** git status 显示工作树另有并行巡逻批次的改动(htaccess-redirect-generator.ts、json-to-zod.ts、.patrol-*.mjs)——非本批文件、未触碰,本结论不覆盖它们。
35. **[B08]** 预存观察(非本批引入,未改动):Flesch ease 原始分可超 100(样例短句实算 117.7,components/tools/batch12bTools.tsx:283/289 未截断),而 content 文案称量表 0-100;属既有行为且原始公式输出不截断亦可辩护,仅记录。
36. **[B08]** 工作树当前另有 3 个本批范围外的未提交修改(lib/i18n/tools-l10n/date-difference-calculator.ts、htaccess-redirect-generator.ts、json-to-zod.ts),疑似其他批次并行工作中的文件,已保持原样未触碰。
   > 报告注(实测):第 34/36 条所述并行批次的未提交修改均已随后续批次落盘——`git diff --stat 318a2cf8..HEAD` 包含这三个文件(date-difference-calculator.ts 12 行、htaccess-redirect-generator.ts 3 行、json-to-zod.ts 12 行),且本次 `git status --short` 实测工作区已无任何已跟踪文件的未提交修改。条目所述"未提交"状态仅代表巡逻当时时点。
37. **[B11]** cron hourly 预设的 describeCron('MM * * * *') 未实际运行验证(lib/cron 为 TS 模块,node 无法直跑);依据为该调用有 try/catch 回退(batch13Tools.tsx:290-296,异常时显示原表达式)且格式与既有 daily 预设 'MM H * * *' 同构,风险极低。
38. **[B11]** base-converter 组件引用的 base32/base36 两个 key 在 zh/es/de 字典无定义,tui 回退英文 'Base32'/'Base36'(lib/i18n/tool-l10n.ts:548-551 机制保证,非裸奔);因回退值即四语惯用写法(zh FAQ 自身亦用原文),补字典为纯冗余,有意未加。
39. **[B12]** [低危/存量/非本轮引入] i18n key `invalidInput`(EncoderDecoderTool.tsx:113,Base64/URL/HTML 六件套共用组件)在全部 6 个 slug 的 zh/es/de 字典(lib/i18n/tools-l10n/{base64-encoder,base64-decoder,url-encoder,url-decoder,html-escape,html-unescape}.ts)中均无定义,非英语用户在该路径会看到英文回退 '⚠️ Invalid input for this direction'。可达但罕见:URL 编码方向粘贴孤立代理对使 encodeURIComponent 抛异常时触发。架构上 tui 缺译回退英文是既定设计(tool-l10n.ts:11),不破图;字典文件不在本批独占路径内,故未改动,建议后续批次补 18 条翻译(6 slug × 3 语)。
40. **[B13]** 非阻塞备忘:新报错文案回退英文写作 "(0-9, a-f)" 但正则实际也接受大写 A-F——与既有 hexToBytes 报错措辞逐字一致,属沿袭既有文案而非本轮引入,按"无把握不改"原则未动。
41. **[B17]** 非阻塞观察:roth-ira 四语长文沿用原文的「$7,000 limit (2025: $8,000 if 50+)」表述,当前已是 2026 年,年份标签显旧。这是改造前就存在的英文原文、按本批「en 分支与改造前一致」的契约原样保留,不属于本轮回归,故未改动;若要更新应作为独立内容决策处理。
42. **[B18]** 非阻塞:仓库根目录有两个其他批次巡逻遗留的未跟踪临时脚本 .patrol-check-b08.mjs 与 .patrol-tmp.mjs(会话开始前即存在,不属本批),若有人 git add -A 可能误提交;我自己的两个临时脚本已删除,这两个归属其他批次,未动。
   > 报告注(实测):本报告撰写时工作区实有 25 个未跟踪文件,全部形如 `.patrol-bXX-*.mjs/.tsx/.json`(编号 b38~b92,完整清单见第八节第 6 条),**不含**本条所述 `.patrol-check-b08.mjs` 与 `.patrol-tmp.mjs`——这两个应已被清理。
43. **[B19]** 非阻塞观察(预先存在,非本轮引入,无需处理):electricity-cost-calculator 英文基准 FAQ 为 3 条(lib/tool-faqs.ts:1886-1902),而 zh/es/de 各覆盖 4 条——第 4 条"待机功耗"含 ¥0.55/kWh 等中国本地化定价,是整组覆盖机制下的有意语种定制(tool-l10n.ts:16-17 注释明确允许按需覆盖)。
44. **[B23]** 非阻塞观察:dice-roller 三语 FAQ 新文案称可「从最近掷骰记录自行验证」频数收敛,而历史仅保留最近 6 条(components/tools/batch14FunTools.tsx:54 slice(0,6))——声明偏软但非虚假(记录确实逐条可见每颗点数),英文同款措辞亦如此,未改动。
45. **[B27]** 本批相对 318a2cf8 零改动(git diff 对五个工具目录与 components/calculators/generatedClients.tsx 均无输出,暂存区与提交历史亦无),按 ask 第 1 条走无改动快速通过路径,故无改动质量可评。
46. **[B27]** components/calculator/makeCalculatorClient.tsx 相对 318a2cf8 有 1 行新增('reset' 加入 COMMON_CALC_KEYS,属其他批次工作):经核 COMMON_CALC_UI 三语均有 reset 且 typing-speed-test.ts bundle 的自定义 reset 值与共享表完全相同,无用户可见变化;但该 bundle 条目现已成死键,可在日后卫生清理中移除(不在本批范围,未动)。
   > 报告注(实测):该 1 行新增最终归属提交 `52d10c15`(fix(i18n)),经 `git log --oneline 318a2cf8..HEAD -- components/calculator/makeCalculatorClient.tsx` 确认。
47. **[B27]** next build 未运行(按指令留给流水线);已运行 node node_modules/typescript/lib/tsc.js --noEmit,退出码 0。
48. **[B28]** cooking-converter 的单位下拉(7 个 unit.* 键)与食材下拉(20 个 ing.* 键)在 zh/es/de 仍回退英文:lib/i18n/tools-l10n/cooking-converter.ts 的 ui 块没有任何 unit.*/ing.* 条目,而代码注释(batch10Tools.tsx:714)声明的先例 volume-converter 实际上把全部 unit.* 键翻了三语(lib/i18n/tools-l10n/volume-converter.ts:11-70)。这是已声明的回退而非破图,但属本地化欠账(约 81 条食材/单位翻译,超出巡逻小修范畴且翻译出错风险高,铁律下不动),建议单独批次补齐。
49. **[B28]** epoch 文案中「约 27 个闰秒」为事实性陈述,与公开数据(1972 年以来共 27 个,最后一个 2016-12)一致,但非公式、未用 node 重算,以人工核对为准。
50. **[B30]** 非行动项备注:i18n key 名 enterWidthAbove 与新英文值 'enter a valid viewport width' 语义不再对应,但 key 名是不透明标识符,重命名纯属 churn 且会同时触碰组件与字典,已刻意不动。
51. **[B31]** [信息性/预存,非本批引入,文件不在本批独占范围] lib/i18n/tools-l10n/css-gradient-generator.ts:60(zh)、:120(es)、:180(de) 的 FAQ 仍称在预览条上『拖动/arrastralos/zur Position ziehen』定位色标,但 UI 实际用数字输入框调位置(client 经 grep 确认无任何 drag/pointer handler)。本批已把正文的 Drag 改为 Move,FAQ 的同一失准表述未同步。低危;因该文件不在本批清单内且三语改写有语义偏移风险,按铁律未动,仅上报。
52. **[B33]** lib/tool-faqs.ts 中 embedding-price-calculator 的英文 FAQ(约 :2870)称 'the tool projects daily and monthly spend from your documents-per-day ... figures',但实际 UI 输入是 Documents / Avg tokens / Re-embed runs per month(batch17AITools.tsx:316-318),并无 documents-per-day 输入;属共享文件中的既有文案漂移(非本轮引入),该文件不在本批独占路径内且其他巡逻员在并行改共享文件,未动——建议由持有 lib/tool-faqs.ts 的批次跟进。
53. **[B33]** 图表标签细微差异(既有设计,未改):表格按 monthly 升序把 Gemini($0 免费档)排第一并标 'cheapest'(batch17AITools.tsx:343-346),图表按 monthly>0 过滤后首个付费条(OpenAI small)也标 'cheapest'(:324-326)——两者各自成立(全场最便宜 vs 最便宜付费),仅提示存在该语义并置。
54. **[B33]** 本批改动仅触及 embedding-price-calculator/content.tsx 英文 SEO 文案(2 处),csv-to-finetune-jsonl、token-visualizer 的 content.tsx 及 batch17AITools.tsx 本轮零改动,其状态为 318a2cf8 前已提交的旧有状态,本巡逻按旧有状态核验通过。
55. **[B34]** es UI 标签 delimiterAuto: 'Detectar auto'(lib/i18n/tools-l10n/csv-to-markdown-table.ts:74)本身略生硬,更地道的写法是 'Detección automática';但该字典自 318a2cf8 起未改、且为共享文件,本轮把散文对齐到现有 UI 标签是正确取舍,故仅记录不建议在本批顺手改。
56. **[B43]** 任务给的 diff 命令 pathspec '@/components/calculators/batch20Calculators'(无 .tsx 后缀)实测会漏掉该文件的改动:我首跑 `git diff 318a2cf8 -- ... components/calculators/batch20Calculators` 只返回两个 content.tsx,补跑 `git diff 318a2cf8 -- components/calculators/batch20Calculators.tsx` 才显示出 10 行(7+/3−)的实质改动(包含 fractionalMonth bug 修复)。后续批次巡逻命令应写全 `.tsx` 后缀。
57. **[B43]** runway-calculator 的 compute(components/calculators/batch20Calculators.tsx:48-106)引用的 tui key 中 9 个在 lib/i18n/tools-l10n/runway-calculator.ts 无定义:infinite / never / alreadyProfitable / neverBreakeven / breakevenIn / breakevenTooLate / notProfitableInRunway / zeroGrowth / profitWord。为 pre-existing 状态(318a2cf8 版代码即引用相同 key,字典文件本轮无 diff)。tui 实现(lib/i18n/tool-l10n.ts:548-551)有英文 inline fallback,不会裸奔崩溃,但 zh/es/de 用户在这些状态行(如 'Profitable'、'Never (Cash-flow positive)'、'Breakeven in 5 months')看到英文。字典文件不在本批独占清单,未擅自扩写 27 条翻译,建议后续批次补齐。
58. **[B43]** lib/i18n/tools-l10n/runway-calculator.ts 中 defaultDead / profitNotice 两个 key 有定义但计算器代码未引用(pre-existing 冗余,无害,未动)。
59. **[B47]** lib/tool-formulas.ts:759 的 ip-checker 公式示例权重(W_type=40, W_tz=20, W_bl=40,数据中心 IP 得 40 分)与实现不符:IpCheckerClient.tsx:398-401 实际为 base 6 + 机房 52 + 时区 20 + 代理 22(仅机房 = 58 分)。风险层级一致(均为 medium)但数字不同。已核实为存量问题:该条目自 318a2cf8 起未变(git diff 该文件的 diff 中 ip-checker 出现 0 次),且 tool-formulas.ts 为共享文件、不在本批独占范围内,故只上报不改动。
60. **[B48]** 非阻塞观察(非本轮引入、不在本批 diff 内):lib/i18n/tools-l10n/ip-subnet-calculator.ts 的 zh/es/de noteF5/noteF6 用 ASCII 直引号包裹 /32 从句(如『而 "/32 标识单个主机。"』),而英文回退无引号、正文 content.tsx 用「」/«»/„"。引号成对、语义清楚,系早前批次遗留风格,按铁律不动,仅记录。

---

## 七、验收结果

| 检查项 | 结果 | 依据 |
| --- | --- | --- |
| TypeScript 类型检查(每波) | **绿** | 各批次 concerns 原文多处记录 `node node_modules/typescript/lib/tsc.js --noEmit` 退出码 0(如第 5/15/23/27/28/47 条);本报告撰写时在最终 HEAD 上复跑同一命令,亦退出码 0(实测) |
| 冒烟测试(smoke) | **绿** | 给定数据 + 本报告撰写时实测复跑:`node scripts/tool-smoke.mjs`(即仓库自带 `npm run smoke`)退出码 0,**110 个工厂工具全部通过(110 pass / 0 fail)、0 个模块加载错误、77 个文件 SKIP**(手写交互组件不在工厂覆盖内)。覆盖面(读 `scripts/tool-smoke.mjs` 头注释与实现确认):扫描 components/ 下 calculators、generators、converters、texttools、tools、devtools、webtools、colortools 八个目录,捕获 makeCalculatorClient / makeUnitConverter / makeTextTool 三类工厂生成的工具,以默认入参实跑 compute/deriveNow/transform,断言结果为 string、无 NaN/undefined/null/[object 泄漏、sample/presets 不引用未声明的 input key;手写交互组件与 DOM 依赖型工具记 SKIP 不判负 |
| next build | **通过**(证据等级:编排方转述) | 给定数据;无日志、退出码或 CI 链接可附。各执行批次按约定未在批次级运行 build,由最终验收统一运行;本报告亦未复跑(按约定 next build 留给流水线把关) |
| git 提交 | 5 个提交,HEAD = `de68431b`(`de68431b5c`) | `git log --oneline 318a2cf8..HEAD` 实测,与给定数据一致 |
| git 推送 | **已全部推送**:`main` 与 `origin/main` 同步,`origin/main..HEAD` 为空 | 给定数据 + 本次 `git status -sb` / `git log origin/main..HEAD` 实测 |
| 工作区 | 不干净,但仅 25 个未跟踪 `.patrol-*` 巡逻临时脚本/数据文件,**无任何已跟踪文件的未提交修改** | 本次 `git status --short` 实测(与给定数据"工作区干净: false"一致) |
| 依赖 / 配置 / 测试面 | **零变更、无测试可跑** | 本次实测:286 个改动文件中无 package.json / lockfile / next.config / tsconfig 等任何包管理与构建配置文件(`git diff --name-only` 过滤,唯一含 "config" 字样的是组件 `NginxConfigGeneratorClient.tsx`);`package.json` scripts 仅 dev/build/start/lint/submit-urls/smoke,无 test 脚本,diff 中亦无 `*.test.*` / `*.spec.*` / `__tests__` 文件。因此除 tsc / 冒烟 / build 外,本仓库没有其他可运行的检查 |

---

## 八、下一轮建议

按优先级与性质归类,均为遗留 concerns 的直接转化,无新增臆测:

1. **三语字典欠账集中补齐**(建议单开一个翻译批次,勿混入巡逻小修):cooking-converter 约 81 条 unit.*/ing.* 键(第 48 条,B28)+ runway-calculator 9 个状态 key × 3 语 = 27 条(第 57 条,B43)+ Base64/URL/HTML 六件套 invalidInput 18 条(第 39 条,B12),合计约 126 条;补齐后跑 tsc 与冒烟即可。
2. **共享文件文案漂移跟进**:lib/tool-faqs.ts 中 embedding-price-calculator 的 "documents-per-day" 表述与实际 UI 输入不符(第 52 条,B33);lib/tool-formulas.ts 中 ip-checker 公式示例权重与实现不符(第 59 条,B47)。两者均为存量、共享文件,建议由持有对应文件的批次统一处理。
3. **content 与 UI 失准同步**:css-gradient-generator 三语 FAQ 的"拖动"措辞与数字输入框 UI 不符(第 51 条,B31),可趁下一次触碰该字典时顺带对齐(正文已改为 Move)。
4. **维护者内容决策类**(不属代码修复,建议单列清单拍板):roth-ira 的 "(2025: $8,000 if 50+)" 年份标签(第 41 条,B17);how-i-built-toolhub 标题 "169-Tool" 与发布时点的数字张力(第 10 条,涉及三语标题 + 四语正文联动,且正文另有 676+ 结构化数据块断言需同步);博客 READ_TIME 全站口径偏宽(第 20 条按实读速度偏高约 3 倍;第 13 条对 1578 词技术长文判 9 min 可辩护——两案差异在词数与阅读速度假设,一致结论是应全站统一口径后再动,勿单篇修改);OWASP PBKDF2 600k 迭代对齐(第 4 条);狗粮工具简化系数表与文章教科书值是否统一(第 3 条)。
5. **费率口径联动**:若日后更新 Stripe 费率,文章组与 reverse-stripe-fee-calculator 工具页两处需联动(第 30 条)。
6. **卫生清理批次**:删除仓库根目录 25 个未跟踪 `.patrol-*` 临时文件,防止 `git add -A` 误提交。本次 `git status --short` 实测全列名:`.patrol-b38-check.mjs`、`.patrol-b49-check.mjs`、`.patrol-b49-diff.mjs`、`.patrol-b49-keys.mjs`、`.patrol-b56-check.mjs`、`.patrol-b56-old.tsx`、`.patrol-b62-check.mjs`、`.patrol-b62-formulas.mjs`、`.patrol-b63-check.mjs`、`.patrol-b64-bcd.json`、`.patrol-b64-check.mjs`、`.patrol-b73-check.mjs`、`.patrol-b74-check.mjs`、`.patrol-b74-keys.mjs`、`.patrol-b76-check.mjs`、`.patrol-b79-check.mjs`、`.patrol-b81-check.mjs`、`.patrol-b82-check.mjs`、`.patrol-b85-check.mjs`、`.patrol-b87-check.mjs`、`.patrol-b88-check.mjs`、`.patrol-b90-keys.mjs`、`.patrol-b91-keys.mjs`、`.patrol-b92-keys.mjs`、`.patrol-b92-unused.mjs`(实测列表中**没有**第 42 条 B18 所述 `.patrol-check-b08.mjs` / `.patrol-tmp.mjs`,该两个应已被清理,删除前按此清单核对即可)。另:typing-speed-test 的 reset 死键(第 46 条,B27)、runway-calculator 的 defaultDead/profitNotice 死键(第 58 条,B43)、mass-converter 字典 ui 死块(第 33 条,B07)。
7. **流程改进**:后续巡逻/审计任务的 diff 命令 pathspec 务必写全 `.tsx` 后缀,避免漏检实质改动(第 56 条,B43 的实测教训)。

---

## 九、材料边界(无法从本材料补齐、需向编排方调取的信息)

以下缺口在本报告给定材料与仓库实测中均无法补齐,如实列出——以免把"报告没写"误当"不存在"。各项编号即站长审阅时最关心的追问顺序:

1. **未交付的 30 条巡逻 concerns 名册与处置**:巡逻全程上报 58 条,材料仅附 28 条遗留原文;其余 30 条是已即时修复、重复上报还是被筛除,材料未说明,本报告无法列名。
2. **364 处修复(第一波 323 + 巡逻 41)的批级台账**:逐条改动的权威落点是 5 个提交的 diff(`git show <sha>` 可复核),但"哪处修复出自哪个批次"的工作台账不在材料内。
3. **next build 的日志 / 退出码 / CI 链接,以及验收时点冒烟的原始输出**:本报告只能给出编排方的结论性转述 + 本报告撰写时点的冒烟实测复跑(110/110 通过),无法回放验收时点的证据。
4. **第 14 条 sharedRequests 的最终裁决**:cash-allocation 文件的改动已随 `16d51a7f` 提交在盘(实测事实),缺的是编排方对该"透明声明/越权疑虑"的裁决记录(维持落地还是要求回退)。
5. **第一波 94 批与巡逻批次是否同一套划分的明示确认**:现仅有 B 系列编号沿用 + `.patrol-bXX` 脚本(最大 b92)旁证,属推断。
6. **续跑段(博客 + 终检巡逻)的 token 消耗**:材料未提供,前段 + 续跑段的合计成本无法估算。

---

*报告生成:2026-10-10;同日据独立读者审读意见修订(v2):冒烟升级为实测复跑(110/110)、补博客正文文件映射与 cash-allocation 角色、补依赖/配置/测试面实测、补 60 条收录口径与材料边界说明、修正 B18 临时文件核对结论。提交范围 `318a2cf8..de68431b`,全部数字以文中所注来源为准。*
