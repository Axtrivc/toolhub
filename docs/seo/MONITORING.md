# 搜索效果监测与 CSV 导入

本指南及分析程序不会连接 GSC、提交 URL 或修改站点。没有收到真实 GSC CSV，因而本次没有生成虚构查询、排名或流量恢复报告。历史数字仅引用所有者提供的快照，不是实时 API 结果。

## 基线与采集

事故比较窗口 A：2026-08-10–17；B：2026-08-18–25，都是 8 天。GSC 日期按 Pacific Time 解读，不与 Git 的 +08:00 提交日直接等同。Google 更新公告也需核对其时区。另保留 8 月 26 日以后连续日数据，判断是否持续。不要把 8 月已索引数、10 月索引数、最近 28 天表现当同一时刻的观测。

部署本次修改前，保存当前至少 56 天的最终（非初步）Web 搜索数据和采集时间、property、搜索类型、国家/设备/查询/网页筛选条件。工具输出会保留用户声明的上下文，但无法验证它是否与导出条件一致。记录实际部署时间和提交 SHA，这才是后续观察起点；代码提交日期不等于部署日期。

每个时间窗口分别从 GSC 导出 Dates、Queries、Pages、Countries、Devices、Search appearance 表。分别分析同类型的表，不能把日期总表与查询总表拼接成“查询 × 日期”数据。获取多维交叉表需要 API 导出时明确请求联合维度；API 可因隐私和行数限制省略查询。保留页面维度导出的完整 URL，不自动合并参数 URL（可用于诊断重复 URL）。

将原始文件放在仓库外或忽略目录中，不提交私人搜索词。纯 UTF-8/BOM CSV，逗号分隔；英文和常用中文标题可识别。必须包含 Clicks、Impressions、Position；CTR 从点击/曝光重新计算。数字使用小数点；千位逗号须由 CSV 正确引用。日期用 YYYY-MM-DD。可选维度：Query/Top queries、Page/Top pages、Country、Device、Search Appearance。不要把百分比、NA 或空值填入数值列；零曝光时 Position 可填 0，输出对应 CTR/排名为 null。

## 命令

从仓库根执行。下面的文件名是用户需提供的输入，不是已存在的真实数据：

```bash
# 单个含 Date 的表；默认比较上述事故 A/B 窗口
python3 scripts/gsc-analysis.py --input /tmp/gsc-dates.csv \
  --property https://toolhub.axtrivc.com/ --search-type web \
  --output /tmp/toolhub-gsc-incident.json

# 两个在 GSC 内分别筛好日期的无 Date 聚合表
python3 scripts/gsc-analysis.py --before /tmp/queries-A.csv --after /tmp/queries-B.csv \
  --property https://toolhub.axtrivc.com/ --filters 'country=all;device=all' \
  --output /tmp/toolhub-gsc-queries.json

# 其他等长窗口；记录实际条件，勿混用过滤后的快照
python3 scripts/gsc-analysis.py --input /tmp/pages-by-date.csv \
  --period-a 2026-10-03:2026-10-16 --period-b 2026-10-17:2026-10-30 \
  --property https://toolhub.axtrivc.com/ --output /tmp/toolhub-gsc-pages.json

# 单独检查一种 Search Appearance；不同类别可能重叠，不允许直接相加
python3 scripts/gsc-analysis.py --input /tmp/appearance-by-date.csv \
  --appearance 'Product snippets' --property https://toolhub.axtrivc.com/ \
  --output /tmp/toolhub-gsc-appearance.json

# 合成测试数据仅在临时目录内生成，不代表任何真实流量
python3 scripts/test-gsc-analysis.py
```

无 Date 的 A/B 文件必须由操作者明确保证筛选日期准确；程序将此限制写入 warnings。有 Date 时缺失日不会补成零，报告会标记 coverage 不完整。日期重叠、周期不等长、维度不一致、重复维度行和无穷/非法数字会报错。不能比较零行时期；请提供明确零曝光日期行，避免把“未导出”误判成“无曝光”。

输出 JSON 含：来源、采集条件、覆盖率、总曝光/点击/CTR、曝光加权平均排名、绝对变化、百分比变化，以及每个现有维度的变化明细。Query 表另外输出品牌/非品牌组（默认 `tool\s*hub|axtrivc`，可用 `--brand-pattern` 修改）和获得曝光的查询数；Page 表输出旗舰/其他页面组和获得曝光的页面数。没有对应列时不会伪造分组。所有分组都是导出中观测到的行，不是完整索引或全站查询总体。

## 观察节奏与判断

| 相对部署日 | 检查与证据 | 决策 |
| --- | --- | --- |
| 0 | 记录部署 SHA/时间、全量 HTML 审计、robots/canonical/状态码；保留 GSC 快照；代表性 URL Inspection | 建立可追溯基线，确认部署版本 |
| 7 | 复查代表性 URL 抓取时间、Google 选择的 canonical；移动交互及真实错误；完整 7 天曝光页面数 | 修复技术回归，不依据低样本平均排名决定删页 |
| 14 | 对等长完整窗口比较非品牌查询、旗舰/其他页面曝光与点击、设备/国家分布 | 确认变化是广泛、局部还是由少数查询驱动；继续检查覆盖率 |
| 28 | 比较 28 天窗口与前一窗口，检查既有 URL 群和新发布 URL 群；索引原因快照；URL Inspection 抽样 | 评估价值改进方向；排名变化仍不是算法处罚解除证明 |
| 56 | 比较至少两轮 28 天窗口、季节/需求背景、查询结构与维护成本 | 根据可复现产品价值迭代，避免批量扩 URL |

另外单独记录：已索引 URL 数、已发现尚未索引 URL 数、已抓取尚未索引 URL 数、canonical/重定向/404 原因及 URL 清单。Search performance CSV 本身没有这些字段，不能从曝光为零推导未索引。Cloudflare/抓取统计记录真实 Googlebot 请求频率、状态、资源与时间范围；仅改 User-Agent 不是身份验证。CWV 使用 CrUX/GSC 真实用户 28 天窗口，与本地实验室指标分开；低流量可能没有字段数据，不能拿本地测量冒充 INP。

人工操作/安全问题面板、代表性 URL Inspection、历史部署日志和 GSC 查询/页面交叉明细是事故判断的外部证据需求。前期曝光是否来自极低排名的长尾尝试，需要查询级排名与曝光分布验证；索引稳定且曝光下降只能证明二者不是同步变化，不能直接证明惩罚。

## 增长取舍

优先投入两个方向：可复现的 JSON/开发者数据处理，以及可验证的金融计算。它们可通过边界测试、输入输出例子、算法解释、格式兼容性和真实失败案例积累独立价值。AI/LLM 估算可纳入开发者方向，但必须公开 tokenizer/价格版本及估算误差，不能把估算宣传为精确账单。下一轮产品投资须结合真实查询与用户任务数据，而不是此处虚构“低竞争关键词”。

可引用资产优先为公开测试向量、格式支持矩阵、算法实现说明和维护记录。发布真实案例与技术文章，避免流水线生成同质化页面、自动外链与虚构评价。搜索表现恢复需 Google 重新抓取和评估；代码质量及验证结果可以立即核验，排名无法保证。
