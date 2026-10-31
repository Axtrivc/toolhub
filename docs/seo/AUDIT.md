# ToolHub 全站 SEO 审计与验证 — 2026-10-31

## 基线与结论

起点及核对后的远程 main：`d465717`，PR #3 已合并；工作区初始无用户改动。现有移除模板填充、标题策略、canonical 语言处理、sitemap 日期和静态校验保留。独立分支 `seo/incident-recovery-2026-10-31`，没有推送、部署或合并。

本轮确认并修复的是当前产品/渲染缺陷，不能把它们倒推为 8 月事故原因。[事故报告](INCIDENT-2026-08-18.md)区分 Confirmed、Probable、Possible、Not Supported；算法因果未证实，人工处罚没有支持证据。

## 全站覆盖和内容分级

最终 `python3 scripts/seo-audit.py` 扫描 372 份 HTML：369 个正常页面、3 份框架错误文档；350 个工具、12 篇博客文章、7 个站点/目录页面。sitemap369 个唯一URL。

- 规范地址、robots、H1、metadata、JSON-LD 语法、已发布工具映射、内部目标和 sitemap 检查：0 硬错误、0 报告级提醒。
- 基线 369 个页面隐藏H1/流式正文；最终两项均为 0。
- 正常页面均可从首页到达，最大点击深度 2，无孤立页/死链；个别工具只有 1 个不同来源页面入链，不能把全目录覆盖等同强任务关联。
- 正文五词shingle最高Jaccard相似度 0.1848；当前数据不支持“PR #3 后仍全站高度近似正文”。算法不是语义审稿，也不能排除无价值或事实错误。
- 全站暂定分级A327/B42/C0/D0；工具单独为 **A309/B41/C0/D0**。A=有较充分差异化解释、仍须功能审查；B=解释/独特性需复核。D不自动赋值。不是“309 个工具已经人工证明可靠”。CSV含每个URL、理由、优先级和最近相似页。

[页面清单CSV](../../reports/seo/page-inventory.csv)、[完整JSON](../../reports/seo/page-inventory.json)、[审计方法](AUDIT-METHOD.md)。离线扫描的HTTP status、X-Robots-Tag均为未测量，静态eligible不是Google已索引。

## 已修复发现

| 优先级 / 状态 | 证据及范围 | 实施与验证 |
|---|---|---|
| P1 Confirmed / fixed | 全局Loading边界使 369 个静态页面的正文等待React脚本揭示；无JS移动端 4 页H1 不可见；目录footer先在首屏、再移走 | 删除`app/loading.tsx`，保留全部路由/交互；新构建 369 页消除隐藏正文，移动端 4 页无JS可见，目录CLS由 0.342417 降为 0 |
| P1 Confirmed / fixed | JSON Repair修复尾逗号时将字符串undefined变null，也可能修改字符串内标点/单引号 | 字符串感知修复管线；11 个保真/边界样例。NaN/Infinity改null而非编造 0，四语明确修复不等于恢复原始数据 |
| P2 Confirmed / fixed | Wordle绿+黄重复字母最少数量错误；字数统计将独立标点计词且漏句尾；QR四周静区只有 2 模块 | 纯函数提取/修正，二维码统一 4 模块，独立 7 项旗舰测试；贷款 0 利率与摊销守恒验证；Wordle/Word Counter四语例子 |
| P2 Confirmed / fixed | token计数的 10–20%精度与特定tokenizer暗示无校准支持 | 四语正文、FAQ、复制摘要准确标记启发式估算和未知误差；算法保持不变 |
| P2 Confirmed / fixed | 相关工具忽略已存在nextTools，任务衔接弱 | 显式任务链优先；72 组推荐变化，350 组目标及生成索引一致性测试 |
| P2 Confirmed / fixed | SW读取错误缓存、RSC离线收到HTML、删除其它应用缓存 | 导航专用shell fallback、命名空间清理，5 项行为测试 |
| P2 Confirmed / fixed | 可选featureList实际填搜索关键词；残留未调用的通用HowTo和hash评分代码存在误用风险 | 删除无依据可选声明和休眠代码；基线本就无实际假评分输出，不把此称为再次移除线上评分 |
| P4 Confirmed / fixed | 缺全站静态审计、功能/无JS回归和可复用GSC对比 | 新增脚本、fixtures、JSON/CSV证据、CI质量门禁与监测指南 |

每项范围、副作用与回滚见[CHANGES](CHANGES.md)。不改变slug、不批量noindex/301、不删除工具、不伪造日期或评论、不增加目录复制页。

## 当前生产响应（尚未部署本轮修复）

取证见`reports/seo/production-curl.json`与`production-client-comparison.json`：普通curl首页、robots、sitemap、贷款含lang参数页 200；无尾斜杠 308 到规范页；随机不存在URL404。查询参数页canonical仍为无参数地址。生产robots含Cloudflare管理段，禁止Google-Extended/GoogleOther不等于禁止Googlebot。测试客户端并未被验证为Googlebot。

同一curl传输仅换成Python-urllib UA即 403，说明当前存在客户端差异，不证明真实Googlebot被拦，也不能解释 8 月。www子域代理隧道请求失败，未确认生产www重定向。错误页继承首页canonical但状态真实 404 且noindex，暂无证据构成索引阻断，属于后续低优先级清理。线上响应不是完整历史日志。

## 浏览器与性能实验

Chromium390×844、localhost未压缩静态服务器、每页新context、单次无节流样本，阻止外部广告/统计请求。保留baseline/final JSON，可复查而不能视为CrUX现场p75。

| 页面 | LCP基线→最终(ms) | CLS基线→最终 |
|---|---:|---:|
| 首页 | 820→636 | 0.0116→0.0116 |
| 工具目录 | 540→184 | 0.342417→0 |
| Loan | 516→204 | 0→0 |
| Word Counter | 368→168 | 0→0 |

最有力证据是目录位移来源消失及无JS正文可见。LCP单次值有噪声。JS下载含Next预取，不能当首屏bundle：目录约 2.13MB→2.08MB，Word Counter略增；没有声称全面瘦身。INP与真实广告填充情景未测。

17/17 浏览器检查通过：页面初始/水合canonical、四语切换时canonical/title稳定、移动输入/无横向溢出、贷款计算/CSV下载、百分比计算、字数/剪贴板、收藏/最近使用、搜索/分类、目录 350 链接、无JS正文以及无未捕获页面错误。详见`browser-final.json`具体检查项。

## 实际验证

| 命令 | 结果 |
|---|---|
| `npm ci --no-audit --no-fund` | 按锁文件安装 142 包，无依赖声明变更 |
| `npm run build` | 退出 0，静态导出完成；内部TypeScript通过 |
| `npm run lint` | 退出 0 |
| `node scripts/verify-seo-export.mjs` | 350 工具页 / 369 sitemap URL通过 |
| `npm run smoke` | 203 通过、0 失败、0 加载错误、81 跳过条目；不是全部 350 工具功能覆盖 |
| `node scripts/test-flagship.mjs` | 7 通过 |
| `node scripts/test-json-repair.mjs` | 11 通过 |
| `node scripts/test-service-worker.mjs` | 5 通过 |
| `node scripts/test-related-tools.mjs` | 4 通过，包含 350 组全量映射 |
| `python3 scripts/seo-audit.test.py` | 6 通过 |
| `python3 scripts/test-gsc-analysis.py` | 9 通过，合成输入仅测试，不是GSC数据 |
| `python3 scripts/seo-audit.py` | 372 文档，0 错误 |
| `node scripts/seo-browser.mjs reports/seo/browser-final.json` | 17 通过、0 失败、0 未捕获页面错误 |
| `node scripts/check-samples.mjs` | 退出 0，但 3 字段不匹配、38 独立组件未自动匹配，不能记为全通过 |
| `git diff --check` | 通过 |

CI工作流已加入上述相关门禁和Chromium安装，GitHub托管CI未在本任务远程运行。构建本地成功不等于Cloudflare发布成功。

## 仍需外部证据/后续产品工作

1. GSC原始A/B query/page/country/device/search-type和URL检查，以及人工处置/安全页面；用于验证掉曝光范围、位置变化、Google选择canonical。监测脚本无需API，参见MONITORING.md。
2. 8 月生产部署ID/日志及经过身份验证Googlebot记录；Git时间不等于部署时间。当前UA差异需要站主结合WAF事件确认影响对象。
3. 现场CWV、带真实广告的移动测试、邮件可投递性、供应商模型价格来源与核验日期；价格文件注释日期有矛盾，不能编造核验。
4. 功能审查未穷尽 350 工具。41 个B类工具先按用户任务与GSC数据复核，不能直接删除。没有可靠真实query数据来做SERP竞争者优劣归因；本轮选择JSON数据质量/可复现浏览器工具为增长方向属于产品假设，详见ARCHITECTURE.md。
5. 三个现有样例不匹配（concrete、lottery-odds、confidence-interval）涉及模式特定字段；未因脚本差异盲目改算法，需逐模式验证。

部署后 7/14/28/56 天比较同口径GSC数据；排名/点击恢复需Google重抓与评估，不能由本次测试保证。
