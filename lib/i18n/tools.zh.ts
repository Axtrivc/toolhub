/**
 * 工具卡片文案 - 中文翻译(zh)
 *
 * 结构:Record<slug, { name, shortIntro }>
 * - slug 与 lib/tools.ts 的 slug 字段一一对应(共 239 个)
 * - 缺失的 slug 自动回退到英文原值(见 lib/i18n.ts getToolName/getToolShortIntro)
 * - 此文件只翻译首页/卡片展示用的 name + shortIntro,
 *   不碰 SEO 字段(title/description/h1/keywords 等保持英文)
 *
 * 更新工具翻译时:对照 lib/tools.ts 对应 slug 的 name + shortIntro 翻译即可。
 */

export const zhTools: Record<string, { name: string; shortIntro: string }> = {
  // ─────────── 💳 金融计算器 ───────────
  'loan-calculator': {
    name: '贷款计算器',
    shortIntro: '计算任意贷款的月供、总利息和全部成本。',
  },
  'mortgage-calculator': {
    name: '房贷计算器',
    shortIntro: '计算房贷月供和总利息。',
  },
  'compound-interest-calculator': {
    name: '复利计算器',
    shortIntro: '见证复利如何让你的储蓄增长。',
  },
  'apy-calculator': {
    name: 'APY 计算器',
    shortIntro: '按计息频率将 APR 换算为 APY。',
  },
  'roi-calculator': {
    name: '投资回报率计算器',
    shortIntro: '计算总投资回报和年化回报率。',
  },
  'credit-card-minimum-payment-calculator': {
    name: '信用卡最低还款计算器',
    shortIntro: '查看最低还款额在利息与本金之间如何分配。',
  },
  'cash-back-calculator': {
    name: '返现计算器',
    shortIntro: '计算扣除年费后返现奖励的真实价值。',
  },
  'down-payment-calculator': {
    name: '首付计算器',
    shortIntro: '算出首付金额,并判断是否需要 PMI。',
  },
  'dti-calculator': {
    name: '债务收入比计算器',
    shortIntro: '计算 DTI 比率,判断贷款机构是否批贷。',
  },
  'commission-calculator': {
    name: '佣金计算器',
    shortIntro: '计算销售佣金加底薪。',
  },
  'bill-split-calculator': {
    name: 'AA 分账计算器',
    shortIntro: '含小费,把账单均匀分摊给每人。',
  },
  'savings-goal-calculator': {
    name: '储蓄目标计算器',
    shortIntro: '算出达到任意储蓄目标所需月存金额。',
  },
  'net-worth-calculator': {
    name: '净资产计算器',
    shortIntro: '计算你的净资产 —— 资产减去负债。',
  },
  'annuity-calculator': {
    name: '年金计算器',
    shortIntro: '计算本金在 N 年内的年/月领取额。',
  },
  'capital-gains-tax-estimator': {
    name: '资本利得税估算器',
    shortIntro: '估算投资的资本利得税(短期 vs 长期税率)。',
  },
  'rent-vs-buy-calculator': {
    name: '租房 vs 买房计算器',
    shortIntro: '比较一段时间内买房与租房的总成本。',
  },
  'inflation-calculator': {
    name: '通胀计算器',
    shortIntro: '查看通胀如何随时间侵蚀货币价值。',
  },
  'retirement-calculator': {
    name: '退休计算器',
    shortIntro: '按复利增长预测你的退休储蓄。',
  },
  'simple-interest-calculator': {
    name: '单利计算器',
    shortIntro: '用 I = Prt 公式计算单利。',
  },
  'unit-price-calculator': {
    name: '单价计算器',
    shortIntro: '比较单位价格,找出真正最划算的交易。',
  },
  'markup-calculator': {
    name: '加价率计算器',
    shortIntro: '由成本和加价率求售价与利润率。',
  },
  'hourly-to-salary-calculator': {
    name: '时薪转年薪计算器',
    shortIntro: '把时薪换算为年薪。',
  },
  'credit-card-payoff-calculator': {
    name: '信用卡还清计算器',
    shortIntro: '查看还清信用卡欠款需要多久。',
  },
  'income-tax-estimator': {
    name: '所得税估算器',
    shortIntro: '估算美国联邦所得税和到手收入。',
  },
  'salary-converter': {
    name: '薪资换算器',
    shortIntro: '在年薪、月薪、双周薪、时薪之间换算。',
  },
  'sales-tax-calculator': {
    name: '销售税计算器',
    shortIntro: '即时为任意价格加上或去除销售税。',
  },
  'tip-calculator': {
    name: '小费计算器',
    shortIntro: '计算合适的小费,并在任意人数间分摊。',
  },
  'discount-calculator': {
    name: '折扣计算器',
    shortIntro: '查询折扣后的最终价格和省下的金额。',
  },
  'auto-loan-calculator': {
    name: '汽车贷款计算器',
    shortIntro: '含首付、置换抵扣和税费,计算车贷月供。',
  },
  'ebay-fee-calculator': {
    name: 'eBay 费用计算器',
    shortIntro: '算清扣除 eBay 或 Etsy 费用后的实际净收入。',
  },
  'reverse-stripe-fee-calculator': {
    name: 'Stripe 手续费反算器',
    shortIntro: '反推应收金额,让扣除手续费后的净收入正好是你要的数。',
  },
  'electricity-cost-calculator': {
    name: '电费计算器',
    shortIntro: '算出任何电器每天、每月、每年的真实电费。',
  },
  'fuel-cost-calculator': {
    name: '油费计算器',
    shortIntro: '算出任意行程的油钱——单程、往返、人均分摊。',
  },
  'subscription-cost-calculator': {
    name: '订阅费用计算器',
    shortIntro: '汇总所有订阅,看清一年要花多少钱。',
  },
  'overtime-calculator': {
    name: '加班费计算器',
    shortIntro: '按 1.5 倍、2 倍或自定义倍数计算周薪与加班费。',
  },
  'take-home-pay-calculator': {
    name: '税后工资计算器',
    shortIntro: '估算扣除联邦税、FICA 和税前抵扣后的净工资。',
  },
  'wedding-budget-calculator': {
    name: '婚礼预算计算器',
    shortIntro: '按典型占比把总预算拆分到各个类别。',
  },
  'amortization-table-generator': {
    name: '摊还计划表生成器',
    shortIntro: '逐期还款明细与余额变化,支持导出 CSV。',
  },
  'car-cost-calculator': {
    name: '养车成本计算器',
    shortIntro: '算出总持有成本:油费、保险、保养与折旧。',
  },

  // ─────────── ⚙️ 开发者工具 ───────────
  'json-formatter': {
    name: 'JSON 格式化',
    shortIntro: '按正确缩进格式化并校验 JSON。',
  },
  'jwt-decoder': {
    name: 'JWT 解码器',
    shortIntro: '本地解码 JWT,查看 header、payload 与签名。',
  },
  'base64-encoder': {
    name: 'Base64 编码器',
    shortIntro: '即时把文本编码为 Base64,正确支持 UTF-8。',
  },
  'base64-decoder': {
    name: 'Base64 解码器',
    shortIntro: '即时把 Base64 解码回可读文本。',
  },
  'regex-tester': {
    name: '正则测试器与说明器',
    shortIntro: '实时高亮匹配结果,附语法速查表。',
  },
  'uuid-generator': {
    name: 'UUID 生成器',
    shortIntro: '为数据库、会话和 API 生成随机 v4 UUID。',
  },
  'curl-converter': {
    name: 'curl 转代码',
    shortIntro: '把 curl 命令转成 JavaScript(Fetch/Axios)和 Python requests 代码。',
  },
  'markdown-to-html': {
    name: 'Markdown 转 HTML',
    shortIntro: '带实时预览,把 Markdown 转为干净的 HTML。',
  },
  'hash-generator': {
    name: '哈希生成器(SHA-256)',
    shortIntro: '由文本生成 SHA-256 与 SHA-1 哈希。',
  },
  'binary-to-text': {
    name: '二进制转文本',
    shortIntro: '把二进制解码回可读文本。',
  },
  'text-to-binary': {
    name: '文本转二进制',
    shortIntro: '把文本字符转换为二进制表示。',
  },
  'url-query-parser': {
    name: 'URL 查询参数解析器',
    shortIntro: '把 URL 查询参数提取为 JSON 对象。',
  },
  'text-size-estimator': {
    name: '文本体积估算器',
    shortIntro: '估算文本在各种格式下的字节大小。',
  },
  'json-minifier': {
    name: 'JSON 压缩器',
    shortIntro: '移除全部空白,最小化 JSON 体积。',
  },
  'csv-to-json': {
    name: 'CSV 转 JSON',
    shortIntro: '以表头作为键,把 CSV 转为 JSON 数组。',
  },
  'json-to-csv': {
    name: 'JSON 转 CSV',
    shortIntro: '把 JSON 对象数组转换为 CSV 格式。',
  },
  'lorem-ipsum-generator': {
    name: 'Lorem Ipsum 生成器',
    shortIntro: '为原型和设计生成占位文本。',
  },
  'random-number-generator': {
    name: '随机数生成器',
    shortIntro: '在任意区间生成随机数,可选去重。',
  },
  'html-escape': {
    name: 'HTML 转义',
    shortIntro: '转义 HTML 特殊字符以防 XSS 攻击。',
  },
  'html-unescape': {
    name: 'HTML 反转义',
    shortIntro: '把 HTML 实体还原为可读字符。',
  },
  'url-encoder': {
    name: 'URL 编码器',
    shortIntro: '把文本编码为可安全用于 URL 的形式。',
  },
  'url-decoder': {
    name: 'URL 解码器',
    shortIntro: '把百分号编码的 URL 解码回可读文本。',
  },
  'slug-generator': {
    name: 'Slug 生成器',
    shortIntro: '即时把标题转为干净、对 SEO 友好的 URL slug。',
  },
  'json-to-typescript': {
    name: 'JSON 转 TypeScript',
    shortIntro: '粘贴 JSON,即时生成干净的嵌套 TS 接口。',
  },
  'yaml-to-json': {
    name: 'YAML 转 JSON',
    shortIntro: '粘贴 YAML,即时得到干净的格式化 JSON。',
  },
  'sql-formatter': {
    name: 'SQL 格式化',
    shortIntro: '用清晰的缩进和大写关键字美化 SQL。',
  },
  'image-to-base64': {
    name: '图片转 Base64',
    shortIntro: '把图片转为 Base64 data URI,用于内联嵌入。',
  },
  'ip-checker': {
    name: 'IP 质量与欺诈检测',
    shortIntro: '检测 IP 质量、ASN 类型、欺诈评分与时区一致性。',
  },
  'chmod-calculator': {
    name: 'Chmod 权限计算器',
    shortIntro: '在八进制 755 与符号式 rwxr-xr-x 权限之间互转。',
  },
  'code-beautifier': {
    name: '代码美化器',
    shortIntro: '格式化并缩进压缩过的 HTML、CSS、JS 和 JSON。',
  },
  'gpt-token-counter': {
    name: 'GPT Token 计数器',
    shortIntro: '估算 GPT 和 Claude 提示词的 token 数与 API 成本。',
  },
  'ip-subnet-calculator': {
    name: 'IP 子网计算器',
    shortIntro: '由 CIDR 计算子网掩码、网络地址、广播地址和主机范围。',
  },
  'json-schema-generator': {
    name: 'JSON Schema 生成器',
    shortIntro: '把任意 JSON 数据转成 Draft-07 JSON Schema。',
  },
  'naming-case-converter': {
    name: '命名风格转换器',
    shortIntro: '在 camelCase、snake_case、kebab-case 等命名风格间互转。',
  },
  'nginx-config-generator': {
    name: 'Nginx 配置生成器',
    shortIntro: '生成带 SSL 和缓存的反向代理 nginx server 配置块。',
  },
  'random-choice-picker': {
    name: '随机选择器',
    shortIntro: '粘贴选项,转一转,让运气替你做决定。',
  },
  'user-agent-parser': {
    name: 'User-Agent 解析器',
    shortIntro: '把 user-agent 字符串解析为浏览器、操作系统、引擎和设备。',
  },
  'epoch-converter': {
    name: '时间戳转换器',
    shortIntro: 'Unix 时间戳与日期互转,支持 UTC 与本地时间。',
  },
  'json-diff': {
    name: 'JSON 对比工具',
    shortIntro: '逐字段对比两份 JSON,不敏感于键顺序。',
  },
  'robots-txt-generator': {
    name: 'robots.txt 生成器',
    shortIntro: '用预设模板生成正确的 robots.txt,实时预览。',
  },
  'keycode-info': {
    name: '键盘按键信息查看器',
    shortIntro: '按下任意键,实时查看 key、code、keyCode 与修饰键。',
  },
  'mime-type-lookup': {
    name: 'MIME 类型查询',
    shortIntro: '扩展名与 MIME 类型互查,适用于 HTTP 头与配置。',
  },
  'xml-formatter': {
    name: 'XML 格式化校验器',
    shortIntro: '格式化、压缩或精确校验 XML 文档。',
  },
  'log-filter-tool': {
    name: '日志过滤工具',
    shortIntro: 'grep 式日志过滤——按关键词、级别或正则。',
  },
  'ascii-table': {
    name: 'ASCII 码表',
    shortIntro: '全部 ASCII 字符的十/十六/八/二进制码,可搜索。',
  },
  'jwt-generator': {
    name: 'JWT 生成器',
    shortIntro: '在本地生成签名 JWT,配合解码器测试使用。',
  },
  'base-converter': {
    name: '进制转换器(2-36)',
    shortIntro: '任意 2–36 进制互转,支持小数,常用进制同时呈现。',
  },
  'cron-expression-generator': {
    name: 'Cron 表达式生成器',
    shortIntro: '点击式构建 cron 定时任务,实时预览通俗解释。',
  },
  'htaccess-redirect-generator': {
    name: '.htaccess 重定向生成器',
    shortIntro: '轻松生成 301、域名迁移、HTTPS 与规范化规则。',
  },
  'unicode-character-lookup': {
    name: 'Unicode 字符查询',
    shortIntro: '按名称查找或粘贴任意符号,显示码点与所属区块。',
  },
  'toml-to-json': {
    name: 'TOML 转 JSON',
    shortIntro: '在本地把 Cargo/pyproject 风格的 TOML 解析为整洁 JSON。',
  },

  // ─────────── 🔤 文本工具 ───────────
  'word-counter': {
    name: '字数统计',
    shortIntro: '即时统计字数、字符数、句数和阅读时间。',
  },
  'text-diff': {
    name: '文本差异对比',
    shortIntro: '对比两段文本,查看改动内容。',
  },
  'remove-line-breaks': {
    name: '删除换行',
    shortIntro: '把多行文本合并为单行。',
  },
  'find-and-replace': {
    name: '查找替换',
    shortIntro: '即时查找并替换任意文本。',
  },
  'uppercase-converter': {
    name: '转大写',
    shortIntro: '即时把任意文本转为全大写。',
  },
  'lowercase-converter': {
    name: '转小写',
    shortIntro: '即时把任意文本转为全小写。',
  },
  'title-case-converter': {
    name: '标题格式转换器',
    shortIntro: '把每个单词首字母大写,用于标题与排版。',
  },
  'sentence-case-converter': {
    name: '句首大写转换器',
    shortIntro: '自动把每个句子的首字母大写。',
  },
  'slug-to-title': {
    name: 'Slug 转标题',
    shortIntro: '把 URL slug 还原为可读标题。',
  },
  'html-tag-stripper': {
    name: 'HTML 标签剥离器',
    shortIntro: '移除所有 HTML 标签,得到干净的文本。',
  },
  'character-frequency': {
    name: '字符频率统计',
    shortIntro: '统计文本中每个字符的出现次数。',
  },
  'email-extractor': {
    name: '邮箱提取器',
    shortIntro: '从任意文本中提取所有邮箱地址。',
  },
  'url-extractor': {
    name: 'URL 提取器',
    shortIntro: '从任意文本中提取所有网址链接。',
  },
  'add-line-numbers': {
    name: '添加行号',
    shortIntro: '为文本的每一行编号。',
  },
  'text-to-list': {
    name: '文本转列表',
    shortIntro: '为文本的每一行添加项目符号。',
  },
  'reverse-text': {
    name: '文本反转生成器',
    shortIntro: '反转任意文本 —— 适合解谜与密码游戏。',
  },
  'remove-duplicate-lines': {
    name: '删除重复行',
    shortIntro: '移除重复行,同时保留原始顺序。',
  },
  'sort-lines': {
    name: '文本行排序',
    shortIntro: '一键按字母顺序排序列表。',
  },
  'whitespace-remover': {
    name: '空白清理器',
    shortIntro: '清理任意文本中杂乱的空格。',
  },
  'list-diff': {
    name: '列表差异与交集对比',
    shortIntro: '即时对比两个列表,找出独有和共有的项。',
  },
  'csv-to-markdown-table': {
    name: 'CSV 转 Markdown 表格',
    shortIntro: '把 CSV/TSV 数据转成可直接用于 GitHub 的 Markdown 表格。',
  },
  'srt-subtitle-shift': {
    name: 'SRT 字幕平移器',
    shortIntro: '按任意偏移量平移字幕时间轴,并去除格式标签。',
  },
  'text-cleaner': {
    name: '文本清理器',
    shortIntro: '去除文本中的 emoji、重音符号和特殊字符。',
  },
  'wordle-solver': {
    name: 'Wordle 求解器',
    shortIntro: '按已知、包含和排除的字母缩小 Wordle 答案范围。',
  },
  'line-diff-checker': {
    name: '文本行对比工具',
    shortIntro: '逐行对比文本,统计新增、删除与变更行数。',
  },
  'markdown-toc-generator': {
    name: 'Markdown 目录生成器',
    shortIntro: '从标题生成带链接的目录,兼容 GitHub 锚点。',
  },
  'reading-level-checker': {
    name: '文章可读性检测',
    shortIntro: 'Flesch 分数与年级水平,附逐句分析。',
  },
  'morse-code-translator': {
    name: '摩尔斯电码翻译器',
    shortIntro: '双向摩尔斯电码翻译,可查看点划并可播放提示音。',
  },
  'typing-speed-test': {
    name: '打字速度测试',
    shortIntro: '一分钟测出 WPM 与准确率,干净无广告。',
  },

  // ─────────── 📐 单位换算器 ───────────
  'mass-converter': {
    name: '质量换算器',
    shortIntro: '在公制、克拉、格令之间换算。',
  },
  'density-converter': {
    name: '密度换算器',
    shortIntro: '为物理和化学换算常见密度单位。',
  },
  'power-converter': {
    name: '功率换算器',
    shortIntro: '在瓦、千瓦、马力、BTU 之间换算。',
  },
  'flow-rate-converter': {
    name: '流量换算器',
    shortIntro: '在 L/min、GPM、CFM 等流量单位间换算。',
  },
  'data-storage-converter': {
    name: '存储换算器',
    shortIntro: '在字节、KB、MB、GB、TB 之间换算。',
  },
  'time-converter': {
    name: '时间换算器',
    shortIntro: '在秒、分、时、天等单位间换算。',
  },
  'numeral-system-converter': {
    name: '进制换算器',
    shortIntro: '在二进制、八进制、十进制、十六进制之间换算。',
  },
  'angle-converter': {
    name: '角度换算器',
    shortIntro: '在度、弧度、梯度之间换算。',
  },
  'fuel-economy-converter': {
    name: '油耗换算器',
    shortIntro: '在 MPG 与 L/100km 之间换算汽车油耗。',
  },
  'pressure-converter': {
    name: '压力换算器',
    shortIntro: '在 bar、PSI、帕斯卡、atm 之间换算。',
  },
  'energy-converter': {
    name: '能量换算器',
    shortIntro: '在焦耳、卡、kWh、BTU 之间换算。',
  },
  'frequency-converter': {
    name: '频率换算器',
    shortIntro: '在 Hz、kHz、MHz、GHz、RPM 之间换算。',
  },
  'weight-converter': {
    name: '重量换算器',
    shortIntro: '即时在公制与英制重量单位间换算。',
  },
  'temperature-converter': {
    name: '温度换算器',
    shortIntro: '即时在摄氏、华氏、开尔文间换算。',
  },
  'speed-converter': {
    name: '速度换算器',
    shortIntro: '即时在 km/h、mph、m/s、knot、ft/s 间换算。',
  },
  'area-converter': {
    name: '面积换算器',
    shortIntro: '在公制与英制面积单位间换算,含英亩与公顷。',
  },
  'volume-converter': {
    name: '体积换算器',
    shortIntro: '即时在公制与美制烹饪体积单位间换算。',
  },
  'length-converter': {
    name: '长度换算器',
    shortIntro: '即时在公制与英制长度单位间换算。',
  },
  'cooking-converter': {
    name: '烹饪计量换算器',
    shortIntro: '杯 ↔ 克 ↔ 盎司互转,按食材密度校正。',
  },

  // ─────────── 🧮 数学计算器 ───────────
  'trapezoid-calculator': {
    name: '梯形计算器',
    shortIntro: '由两条平行边和高求梯形面积。',
  },
  'cube-calculator': {
    name: '立方体计算器',
    shortIntro: '计算立方体的体积和表面积。',
  },
  'sphere-calculator': {
    name: '球体计算器',
    shortIntro: '由半径求球体体积和表面积。',
  },
  'scientific-notation-converter': {
    name: '科学计数法换算器',
    shortIntro: '把数字转为科学计数法、E 计数法和工程计数法。',
  },
  'prime-number-checker': {
    name: '质数检查器',
    shortIntro: '检查任意数字是否为质数,并找出相邻质数。',
  },
  'prime-factorization-calculator': {
    name: '质因数分解计算器',
    shortIntro: '把任意数字分解为质因数之积。',
  },
  'combination-calculator': {
    name: '组合数计算器',
    shortIntro: '计算组合数 C(n,r),用于概率与赔率。',
  },
  'permutation-calculator': {
    name: '排列数计算器',
    shortIntro: '计算排列数(考虑顺序的安排方式)。',
  },
  'circle-calculator': {
    name: '圆计算器',
    shortIntro: '由半径求圆面积、周长和直径。',
  },
  'triangle-calculator': {
    name: '三角形计算器',
    shortIntro: '求解直角三角形 —— 斜边、面积、周长。',
  },
  'rectangle-calculator': {
    name: '矩形计算器',
    shortIntro: '求矩形的面积、周长和对角线。',
  },
  'standard-deviation-calculator': {
    name: '标准差计算器',
    shortIntro: '计算标准差、方差和均值。',
  },
  'percentile-calculator': {
    name: '百分位数计算器',
    shortIntro: '找出数据中任意百分位对应的值。',
  },
  'fraction-calculator': {
    name: '分数计算器',
    shortIntro: '分数的加减乘除,精确无误差。',
  },
  'ratio-calculator': {
    name: '比例计算器',
    shortIntro: '解比例并求出缺失的比值。',
  },
  'lcm-gcd-calculator': {
    name: 'LCM 与 GCD 计算器',
    shortIntro: '求任意一组数的最小公倍数与最大公约数。',
  },
  'average-calculator': {
    name: '平均值计算器',
    shortIntro: '计算任意数列的均值、中位数、求和、最值和极差。',
  },
  'percentage-calculator': {
    name: '百分比计算器',
    shortIntro: '即时计算百分比、增减与折扣。',
  },
  'roman-numeral-converter': {
    name: '罗马数字转换器',
    shortIntro: '罗马数字双向转换,附速查表。',
  },

  // ─────────── 💪 健康计算器 ───────────
  'bmi-calculator': {
    name: 'BMI 计算器',
    shortIntro: '计算身体质量指数,查看健康体重范围。',
  },
  'calorie-calculator': {
    name: '热量计算器',
    shortIntro: '算出减脂或增肌所需的每日热量。',
  },
  'tdee-calculator': {
    name: 'TDEE 计算器',
    shortIntro: '按减脂/维持/增肌目标算出每日总热量。',
  },
  'bmr-calculator': {
    name: '基础代谢率计算器',
    shortIntro: '计算完全静息时身体消耗的热量。',
  },
  'body-fat-calculator': {
    name: '体脂率计算器',
    shortIntro: '用围度测量估算身体脂肪百分比。',
  },
  'macro-calculator': {
    name: '宏量营养素计算器',
    shortIntro: '把每日热量拆分为蛋白、碳水、脂肪。',
  },
  'pregnancy-due-date-calculator': {
    name: '预产期计算器',
    shortIntro: '由末次月经期估算预产期。',
  },
  'water-intake-calculator': {
    name: '饮水量计算器',
    shortIntro: '算出你理想的每日饮水量。',
  },
  'ideal-weight-calculator': {
    name: '理想体重计算器',
    shortIntro: '按身高和性别算出理想体重。',
  },
  'pace-calculator': {
    name: '跑步配速计算器',
    shortIntro: '配速、完赛时间预测与任意赛距的分段表。',
  },
  'protein-intake-calculator': {
    name: '蛋白质摄入计算器',
    shortIntro: '按体重与目标算出每日蛋白质需求(克)。',
  },
  'sleep-calculator': {
    name: '睡眠周期计算器',
    shortIntro: '按 90 分钟睡眠周期推算就寝时间,醒来更清爽。',
  },
  'heart-rate-zone-calculator': {
    name: '心率区间计算器',
    shortIntro: '结合静息心率,算出你的五个训练心率区间。',
  },
  'caffeine-calculator': {
    name: '咖啡因计算器',
    shortIntro: '估算此刻你体内还残留多少咖啡因。',
  },
  'steps-to-calories-calculator': {
    name: '步数换算卡路里',
    shortIntro: '步数 → 卡路里与距离,按你的身体数据校正。',
  },

  // ─────────── 🎓 教育计算器 ───────────
  'grade-calculator': {
    name: '成绩计算器',
    shortIntro: '由得分算出百分比成绩和等级。',
  },
  'final-grade-calculator': {
    name: '期末成绩计算器',
    shortIntro: '算出达到目标等级所需的期末分。',
  },
  'gpa-calculator': {
    name: 'GPA 计算器',
    shortIntro: '加入课程、学分和字母等级,即时算出 GPA。',
  },

  // ─────────── ⏰ 时间计算器 ───────────
  'age-calculator': {
    name: '年龄计算器',
    shortIntro: '按年月日精确计算年龄或两日期间隔。',
  },
  'date-difference-calculator': {
    name: '日期差计算器',
    shortIntro: '求任意两日期间隔 —— 天、周、月、工作日。',
  },
  'age-difference-calculator': {
    name: '年龄差计算器',
    shortIntro: '求两人之间的年龄差。',
  },
  'days-countdown-calculator': {
    name: '天数倒计时计算器',
    shortIntro: '实时倒计时到任意日期,或计算两个日期之间的天数。',
  },
  'reading-speaking-time': {
    name: '阅读时长计算器',
    shortIntro: '估算任意文本的阅读和演讲时长。',
  },
  'timezone-converter': {
    name: '时区转换器',
    shortIntro: '跨时区换算时间,找出适合开会的时间段。',
  },
  'screen-time-calculator': {
    name: '屏幕使用时间计算器',
    shortIntro: '把每天刷屏的小时数,换算成人生的年数。',
  },

  // ─────────── 🎨 网页设计工具 ───────────
  'svg-to-image': {
    name: 'SVG 转 PNG',
    shortIntro: '在浏览器内把 SVG 转 PNG 或 WebP,自定义缩放并下载。',
  },
  'px-to-rem': {
    name: 'px 转 rem/em',
    shortIntro: '按自定义根字号在 px 与 rem、em 之间换算。',
  },
  'aspect-ratio-calculator': {
    name: '宽高比计算器',
    shortIntro: '按宽高比补全缺失的宽或高。',
  },
  'color-contrast-checker': {
    name: '颜色对比度检查器(WCAG)',
    shortIntro: '按 WCAG AA 与 AAA 级别测试颜色对比度。',
  },
  'color-converter': {
    name: '颜色换算器',
    shortIntro: '在 HEX、RGB、HSL 之间换算,带可视化拾色器。',
  },
  'open-graph-generator': {
    name: 'Open Graph 与 Meta 标签生成器',
    shortIntro: '生成 OG 与 Twitter Card 标签,带社交分享实时预览。',
  },
  'css-shadow-generator': {
    name: 'CSS 阴影与玻璃态生成器',
    shortIntro: '可视化调节阴影和玻璃态,实时预览并复制 CSS。',
  },
  'favicon-generator': {
    name: 'Favicon 生成器',
    shortIntro: '把图片转为 16×16、32×32 favicon 和 Apple Touch Icon。',
  },
  'css-clamp-calculator': {
    name: 'CSS Clamp 计算器',
    shortIntro: '用 CSS clamp() 生成流体式字号。',
  },
  'css-gradient-generator': {
    name: 'CSS 渐变生成器',
    shortIntro: '可视化构建线性、径向和网格渐变,实时预览。',
  },
  'image-resizer': {
    name: '图片尺寸调整器',
    shortIntro: '调整并压缩图片,实时预览文件大小。',
  },
  'png-to-webp-converter': {
    name: 'PNG 转 WebP 转换器',
    shortIntro: '把 PNG/JPG 转成 WebP,直观看到节省的体积。',
  },
  'svg-minifier': {
    name: 'SVG 压缩器',
    shortIntro: '去除 SVG 文件中的注释、元数据和多余空白。',
  },
  'webp-to-png-converter': {
    name: 'WebP 转 PNG 转换器',
    shortIntro: '在浏览器中把 WebP 图片转成 PNG 或 JPG。',
  },

  // ─────────── 🔒 安全工具 ───────────
  'password-strength-checker': {
    name: '密码强度检查器',
    shortIntro: '用熵分析和检查清单测试密码强度。',
  },
  'password-generator': {
    name: '密码生成器',
    shortIntro: '一键创建强随机安全密码。',
  },
  'bcrypt-hash-generator': {
    name: 'Bcrypt 哈希生成器',
    shortIntro: '在浏览器中用 bcrypt 或加盐 SHA 哈希并校验密码。',
  },
  'secret-key-generator': {
    name: '密钥生成器',
    shortIntro: '在浏览器中生成高熵 API 密钥和机密。',
  },
  'ssh-key-generator': {
    name: 'SSH 密钥生成器',
    shortIntro: '在浏览器中生成 RSA 或 Ed25519 SSH 密钥对。',
  },
  'hmac-generator': {
    name: 'HMAC 生成器',
    shortIntro: '基于原生 WebCrypto 生成 HMAC-SHA256/384/512 签名。',
  },
  'hash-comparator': {
    name: '哈希对比器',
    shortIntro: '常数时间比较两个哈希值,杜绝时序泄露。',
  },
  'password-entropy-checker': {
    name: '密码熵检查器',
    shortIntro: '以比特为单位衡量密码强度——最诚实的指标。',
  },
  'aes-encrypt-decrypt': {
    name: 'AES 加密解密',
    shortIntro: '浏览器内 AES-256-GCM:带认证、PBKDF2 派生密钥、零上传。',
  },

  // ─────────── 💼 商业工具 ───────────
  'qr-code-generator': {
    name: '二维码生成器',
    shortIntro: '为网址、文本和 WiFi 创建二维码,免费无水印。',
  },
  'freelance-invoice-generator': {
    name: '发票生成器',
    shortIntro: '免费制作、预览并打印专业发票。',
  },
  'saas-ltv-churn-calculator': {
    name: 'SaaS LTV 计算器',
    shortIntro: '为你的 SaaS 建模 LTV、流失率、CAC 回收期和 LTV:CAC。',
  },

  // ─────────── 🛠️ 开发者工具(其它) ───────────
  'cron-parser': {
    name: 'Cron 表达式解析器',
    shortIntro: '把 cron 表达式转为通俗语言,并查看下次 5 次触发时间。',
  },

  // ─────────── 🤖 AI 工具 ───────────
  'llm-cost-calculator': {
    name: 'LLM API 成本计算器',
    shortIntro: '并排对比 17 个模型的单次请求与月度 API 成本。',
  },
  'context-window-checker': {
    name: '上下文窗口检查器',
    shortIntro: 'token 数对比各模型上下文上限,附余量百分比。',
  },
  'json-to-zod': {
    name: 'JSON 转 Zod Schema',
    shortIntro: '粘贴 JSON,生成带类型的 Zod schema,可直接校验 AI 输出。',
  },
  'json-repair': {
    name: 'JSON 修复工具',
    shortIntro: '抢救 LLM 输出的坏 JSON——截断、尾逗号、代码围栏。',
  },
  'markdown-fence-extractor': {
    name: '代码块提取器',
    shortIntro: '从 Markdown 或 AI 回答中提取全部 ``` 代码块。',
  },
  'prompt-template-filler': {
    name: '提示词模板填充器',
    shortIntro: '用 JSON 填充提示词模板中的 {{变量}},实时预览。',
  },
  'openai-tools-builder': {
    name: 'OpenAI Tools JSON 构建器',
    shortIntro: '表单式构建工具定义,输出干净的 tools JSON。',
  },
  'csv-to-finetune-jsonl': {
    name: 'CSV 转微调 JSONL',
    shortIntro: 'CSV 训练行 → OpenAI 对话格式 JSONL,字段映射并校验。',
  },
  'token-visualizer': {
    name: 'Token 可视化',
    shortIntro: '彩色标注 token 边界与数量,看清模型眼里的文本。',
  },
  'embedding-price-calculator': {
    name: 'Embedding 价格计算器',
    shortIntro: '对比各模型嵌入成本:维度、$/1M tokens 与批量总价。',
  },

  // ─────────── 🎲 游戏工具 ───────────
  'dice-roller': {
    name: '骰子模拟器',
    shortIntro: '掷任意骰子——d4 到 d100,可多枚同掷,公平随机。',
  },
  'coin-flip': {
    name: '抛硬币',
    shortIntro: '即时抛出正反面,并记录累计统计。',
  },
  'wheel-spinner': {
    name: '转盘决定器',
    shortIntro: '转动转盘做决定:名字、家务、餐厅——公平选出。',
  },
  'random-team-generator': {
    name: '随机分组器',
    shortIntro: '把名单公平分成若干小组,不满意就重新洗牌。',
  },

  // ─────────── 🐶 宠物工具 ───────────
  'dog-age-calculator': {
    name: '狗狗年龄计算器',
    shortIntro: '按犬种体型把狗龄换算为人类年龄——告别 ×7 神话。',
  },

  // ─────────── 🏠 家居计算器 ───────────
  'paint-calculator': {
    name: '油漆用量计算器',
    shortIntro: '按房间面积、涂刷遍数与门窗扣减,算出油漆用量(加仑/升)。',
  },

  // ─────────── 🚀 高商业意图新工具(2026-09)───────────
  'hysa-calculator': {
    name: '高收益储蓄计算器',
    shortIntro: '按日复利与月定投,推演高收益储蓄账户的增长轨迹。',
  },
  'cd-calculator': {
    name: '定存单计算器',
    shortIntro: '测算定存单到期本息,并模拟提前支取罚金后的实际到手。',
  },
  'break-even-calculator': {
    name: '盈亏平衡计算器',
    shortIntro: '一步算出保本销量、保本销售额与贡献毛益率。',
  },
  'profit-margin-calculator': {
    name: '利润率计算器',
    shortIntro: '成本加任意一项,秒推售价、利润、毛利率与加价率。',
  },
  'intermittent-fasting-calculator': {
    name: '轻断食计算器',
    shortIntro: '16:8 / 18:6 / 20:4 时间表,带断食倒计时与代谢阶段时间轴。',
  },
  'llm-api-cost-calculator': {
    name: 'LLM API 成本对比',
    shortIntro: '按月度 token 用量横向对比各大模型的真实账单。',
  },

  // ─────────── 🚀 变现漏斗修复轮新工具(2026-09 v4)───────────
  'roth-ira-calculator': {
    name: 'Roth IRA 计算器',
    shortIntro: 'Roth 与 Traditional IRA 同屏对比——同样本金,不同税务路径谁更划算。',
  },
  'fire-calculator': {
    name: 'FIRE 财务自由计算器',
    shortIntro: '一屏算出你的 FIRE 目标金额、目标退休年份与储蓄率推演。',
  },
  'cac-ltv-calculator': {
    name: 'CAC 与 LTV 计算器',
    shortIntro: '获客成本、客户终身价值、回收月数与 LTV:CAC 健康度一览。',
  },
  'flooring-calculator': {
    name: '地板用量计算器',
    shortIntro: '房间尺寸 + 损耗率 → 瓷砖/地板所需箱数与材料预算(英尺/米)。',
  },
  'dog-food-calculator': {
    name: '狗粮喂食计算器',
    shortIntro: '体重 + 生命阶段 → 每日热量需求,按包装标注折算杯数与克数。',
  },
  'runway-calculator': {
    name: '现金跑道计算器',
    shortIntro: '算出创业现金跑道月数、现金归零日期与净烧钱率。',
  },
  'freelance-rate-calculator': {
    name: '自由职业报价计算器',
    shortIntro: '综合税费、开销与利润,算出时薪与日薪报价。',
  },
  'docker-run-to-compose': {
    name: 'Docker Run 转 Compose',
    shortIntro: '把 docker run 命令转成干净的 docker-compose.yml 文件。',
  },
  'mortgage-affordability-calculator': {
    name: '可负担房价计算器',
    shortIntro: '收入+债务按 28/36 规则反推能买多贵的房(含税险与 HOA)。',
  },
  'refinance-break-even-calculator': {
    name: '再融资回本计算器',
    shortIntro: '新旧月供差与过户费 → 几个月回本、全期利息变化。',
  },
  'biweekly-mortgage-payment-calculator': {
    name: '双周供计算器',
    shortIntro: '双周供加速还款:省多少利息、提前几个月还清。',
  },
  'closing-cost-calculator': {
    name: '过户费用计算器',
    shortIntro: '买卖双方过户费分项估算与买家现金需求。',
  },
  'property-tax-calculator': {
    name: '房产税计算器',
    shortIntro: '评估值 × millage 费率 → 年税额与月摊进月供。',
  },
  'prorated-rent-calculator': {
    name: '按天房租计算器',
    shortIntro: '月中入住或搬出,按天比例算首末月房租。',
  },
  'rental-property-calculator': {
    name: '租赁房产计算器',
    shortIntro: 'NOI、cap rate、现金流、cash-on-cash 与 1% 规则一屏算清。',
  },
  'house-flip-calculator': {
    name: '翻房计算器',
    shortIntro: '70% 规则最高买价、利润与 ROI 一次算完。',
  },
  'college-savings-calculator': {
    name: '大学储蓄计算器',
    shortIntro: '按学费通胀推算总费用,得出每月 529 定存目标。',
  },
  '401k-match-calculator': {
    name: '401(k) 雇主匹配计算器',
    shortIntro: '算出雇主匹配值多少,以及没拿满的免费钱。',
  },
  'social-security-break-even-calculator': {
    name: '社保申领回补计算器',
    shortIntro: '比较 62/FRA/70 三档申领的月额与回补年龄。',
  },
  'student-loan-payment-calculator': {
    name: '学生贷款计算器',
    shortIntro: '标准、阶梯、延长三计划的月供与总利息对比。',
  },
  'car-lease-calculator': {
    name: '汽车租赁计算器',
    shortIntro: '用 money factor 口径算月供、APR 与总租赁成本。',
  },
  'ev-charging-cost-calculator': {
    name: '电动车充电成本计算器',
    shortIntro: '每英里电费与年成本,直接对比同里程油车。',
  },
  'rent-budget-calculator': {
    name: '房租预算计算器',
    shortIntro: '30% 规则与 50/30/20 下的可负担房租上限。',
  },
  'christmas-budget-calculator': {
    name: '圣诞预算计算器',
    shortIntro: '按人群与类别拆分节日总预算,给出人均上限。',
  },
  'one-rep-max-calculator': {
    name: '最大重量(1RM)计算器',
    shortIntro: '用任意一组正式训练推算 1RM,附 50-95% 训练重量表。',
  },
  'race-time-predictor': {
    name: '比赛成绩预测器',
    shortIntro: '输入一场近期比赛,预测 5K 到全马的完赛时间与配速。',
  },
  'vo2-max-calculator': {
    name: '最大摄氧量计算器',
    shortIntro: 'Cooper 12 分钟跑与心率比值两条口径估算 VO₂max。',
  },
  'body-surface-area-calculator': {
    name: '体表面积计算器',
    shortIntro: '由身高体重算 Mosteller 与 DuBois 两种 BSA(m²)。',
  },
  'waist-to-height-ratio-calculator': {
    name: '腰高比计算器',
    shortIntro: '腰围÷身高,按 0.5 规则给出健康风险分级。',
  },
  'steps-to-miles-calculator': {
    name: '步数换英里计算器',
    shortIntro: '步数按身高或实测步幅换算成英里、公里与步行时长。',
  },
  'weight-loss-goal-calculator': {
    name: '减重目标计算器',
    shortIntro: '目标体重换算每日热量缺口、周数与达成日期。',
  },
  'fiber-intake-calculator': {
    name: '纤维摄入量计算器',
    shortIntro: '按年龄性别查每日纤维克数,并换算成常见食物份数。',
  },
  'paypal-fee-calculator': {
    name: 'PayPal 手续费计算器',
    shortIntro: '双向算清 PayPal 手续费:实际到账与应收回款。',
  },
  'etsy-fee-calculator': {
    name: 'Etsy 费用计算器',
    shortIntro: '一单 Etsy 的全部费用、实际费率与到手净额。',
  },
  'amazon-seller-fee-calculator': {
    name: '亚马逊卖家费用计算器',
    shortIntro: '佣金 + FBA + 落地成本 → 单件净利、利润率与 ROI。',
  },
  'square-fee-calculator': {
    name: 'Square 手续费计算器',
    shortIntro: 'Square 手续费双向计算,附小票额实际费率曲线。',
  },
  'youtube-money-calculator': {
    name: 'YouTube 收益计算器',
    shortIntro: '观看量 × RPM 区间 → 月/年 AdSense 收入三档估算。',
  },
  'nps-calculator': {
    name: 'NPS 净推荐值计算器',
    shortIntro: '推荐者 − 贬损者 → NPS 分与 Bain 等级判读。',
  },
  'conversion-rate-calculator': {
    name: '转化率计算器',
    shortIntro: '访问 → 转化:转化率、CPA 与提升目标反推。',
  },
  'gym-cost-per-visit-calculator': {
    name: '单次使用成本计算器',
    shortIntro: '会员费 ÷ 真实次数:每次健身成本与值不值。',
  },
  // ─────────── 🏠 B8 建材与施工 ───────────
  'concrete-calculator': {
    name: '混凝土计算器',
    shortIntro: '板/柱/台阶尺寸 → 立方码与 40/60/80 磅袋数(含损耗)。',
  },
  'mulch-calculator': {
    name: '覆盖物计算器',
    shortIntro: '床尺寸与铺厚 → 立方码、袋数与总花费。',
  },
  'gravel-calculator': {
    name: '砾石计算器',
    shortIntro: '面积与厚度 → 立方码与吨数(按材料密度)。',
  },
  'drywall-calculator': {
    name: '石膏板计算器',
    shortIntro: '墙面天花面积 → 板数、螺丝与嵌缝膏。',
  },
  'roofing-calculator': {
    name: '屋面计算器',
    shortIntro: '投影 × 坡度系数 → squares、瓦束与防水卷。',
  },
  'fence-calculator': {
    name: '栅栏计算器',
    shortIntro: '周长与桩距 → 桩、栏板、横杆与混凝土袋数。',
  },
  'paver-calculator': {
    name: '铺路石计算器',
    shortIntro: '面积 → 铺石块数与碎石基料、铺沙量。',
  },
  'deck-board-calculator': {
    name: '甲板板材计算器',
    shortIntro: '面积与板宽缝宽 → 板数、线性英尺与托梁数。',
  },
  'dividend-calculator': {
    name: '股息计算器',
    shortIntro: '估算股息收入、股息率,以及 DRIP 复利数十年后的差距。',
  },
  'dca-calculator': {
    name: '定投计算器',
    shortIntro: '算出平均成本,并对比定投与一次性买入谁更划算。',
  },
  'stock-average-calculator': {
    name: '股票摊平成本计算器',
    shortIntro: '多笔买入的加权平均成本、总成本与浮动盈亏。',
  },
  'options-profit-calculator': {
    name: '期权损益计算器',
    shortIntro: '盈亏平衡点、最大盈亏与任意价位的到期损益曲线。',
  },
  'crypto-profit-calculator': {
    name: '加密货币利润计算器',
    shortIntro: '扣除双边手续费后的净利润、ROI 与目标卖价。',
  },
  'treasury-bill-calculator': {
    name: '短期国债计算器',
    shortIntro: '算出 T-Bill 买入价与两种收益率口径(360/365 天)。',
  },
  'bond-yield-calculator': {
    name: '债券收益率计算器',
    shortIntro: '当前收益率与到期收益率(YTM 近似)一键算清。',
  },
  'lottery-odds-calculator': {
    name: '彩票概率计算器',
    shortIntro: 'Powerball/Mega Millions/EuroMillions 精确概率,或自定义奖池。',
  },
  'self-employment-tax-calculator': {
    name: '自营税计算器',
    shortIntro: '算出自由职业利润要缴的 SECA 税(15.3%)与可抵扣的一半。',
  },
  'depreciation-calculator': {
    name: '折旧计算器',
    shortIntro: '直线、双倍余额递减与年数总和法,逐年折旧与账面价值。',
  },
  'mileage-reimbursement-calculator': {
    name: '里程报销计算器',
    shortIntro: '里程 × IRS 标准费率(2025 商务 70¢),四类用途。',
  },
  'contractor-vs-employee-calculator': {
    name: '1099 vs W-2 计算器',
    shortIntro: '同额年收入在两种身份下的税后到手差异。',
  },
  'gross-up-calculator': {
    name: 'Gross-Up 反算器',
    shortIntro: '输入期望净额与税率,反推应发的税前总额。',
  },
  'commute-cost-calculator': {
    name: '通勤成本计算器',
    shortIntro: '算出年通勤花费:里程费率或真实油耗,外加时间成本。',
  },
  'smoking-cost-calculator': {
    name: '吸烟成本计算器',
    shortIntro: '周/年/十年烟钱,以及同额投资的复利对照。',
  },
  'emergency-fund-calculator': {
    name: '应急基金计算器',
    shortIntro: '定 3-12 个月目标,看现有储蓄能撑多久、还要攒几个月。',
  },
  'btu-calculator': {
    name: 'BTU 空调计算器',
    shortIntro: '按面积、层高、日照与人数算出空调 BTU 与吨位,过大过小都提醒。',
  },
  'board-foot-calculator': {
    name: '板英尺计算器',
    shortIntro: '厚×宽×长÷12 算板英尺,乘单价得整单木料成本。',
  },
  'wallpaper-calculator': {
    name: '壁纸卷数计算器',
    shortIntro: '逐条计算壁纸用量:墙高+对花重复,美式双卷与欧式卷都支持。',
  },
  'raised-bed-soil-calculator': {
    name: '菜床土壤计算器',
    shortIntro: '算出菜床要填多少土,附 Mel 混合与经济配方分量及袋数。',
  },
  'generator-wattage-calculator': {
    name: '发电机功率计算器',
    shortIntro: '勾选电器算运行瓦与启动浪涌,推荐合适的发电机档位。',
  },
  'pool-volume-calculator': {
    name: '泳池水量计算器',
    shortIntro: '矩形/圆形/肾形池的加仑与升,附泵循环周转时间。',
  },
  'coffee-ratio-calculator': {
    name: '咖啡比例计算器',
    shortIntro: '手冲、法压、浓缩、冷萃的粉水比例互算与杯量换算。',
  },
  'bread-hydration-calculator': {
    name: '面包水合度计算器',
    shortIntro: '水÷粉得水合度,折算酵种后的有效水合与总面团重。',
  },
  'ovulation-calculator': {
    name: '排卵期计算器',
    shortIntro: '按末次月经与周期长度推算排卵日与易孕窗口。',
  },
  'pregnancy-weight-gain-calculator': {
    name: '孕期增重计算器',
    shortIntro: '按 IOM 指南与孕前 BMI 给出增重区间与每周节奏。',
  },
  'diaper-cost-calculator': {
    name: '尿布开销计算器',
    shortIntro: '算出每月、每年与如厕训练前的尿布总花费。',
  },
  'cat-age-calculator': {
    name: '猫咪年龄计算器',
    shortIntro: '按 15/24/+4 曲线把猫龄换算成人类年龄。',
  },
  'cat-food-calculator': {
    name: '猫粮喂食量计算器',
    shortIntro: '按 RER×系数算出每日热量、罐数与克数。',
  },
  'zodiac-sign-calculator': {
    name: '星座查询计算器',
    shortIntro: '按出生月日查星座、日期区间与元素属性。',
  },
  'chinese-zodiac-calculator': {
    name: '生肖查询计算器',
    shortIntro: '按出生年份查生肖、五行与阴阳(立春口径)。',
  },
  'shoe-size-converter': {
    name: '鞋码换算器',
    shortIntro: '美/英/欧/厘米鞋码男女童对照查表互转。',
  },
  'time-card-calculator': {
    name: '工时卡计算器',
    shortIntro: '打卡时刻转十进制工时、周合计与加班标注。',
  },
  'business-days-calculator': {
    name: '工作日推算器',
    shortIntro: '从任意日期加/减 N 个工作日,跳过周末与自定义假日。',
  },
  'week-number-calculator': {
    name: '周数计算器',
    shortIntro: '任意日期的 ISO 周号、周一起止与剩余周数。',
  },
  'pto-accrual-calculator': {
    name: '年假累积计算器',
    shortIntro: '按发薪周期累积的年假余额与年末结转预测。',
  },
  'download-time-calculator': {
    name: '下载时间计算器',
    shortIntro: '文件大小 ÷ 网速(含协议开销)→ 时分秒。',
  },
  'gps-coordinate-converter': {
    name: 'GPS 坐标转换器',
    shortIntro: '十进制度 ↔ 度分秒 ↔ 度分互转,方向字母自动解析。',
  },
  'tire-size-calculator': {
    name: '轮胎规格计算器',
    shortIntro: '轮胎规格解码为直径/周长/转数,两规格对比看表显偏差。',
  },
  'wind-chill-calculator': {
    name: '风寒计算器',
    shortIntro: '气温 + 风速 → JAG/TI 公式风寒体感温度。',
  },
  'quadratic-equation-solver': {
    name: '一元二次方程求解器',
    shortIntro: '判别式、实/复根、顶点与因式分解一次出全。',
  },
  'slope-calculator': {
    name: '斜率计算器',
    shortIntro: '两点求斜率、截距、倾角与直线方程。',
  },
  'confidence-interval-calculator': {
    name: '置信区间计算器',
    shortIntro: '均值或比例的 90/95/99% 区间与误差幅度。',
  },
  'sample-size-calculator': {
    name: '样本量计算器',
    shortIntro: '按置信水平与误差幅度算出该调查多少人。',
  },
  'z-score-calculator': {
    name: 'Z 分数计算器',
    shortIntro: '标准化、百分位与两侧 p 值,可反解 z→x。',
  },
  'bayes-theorem-calculator': {
    name: '贝叶斯定理计算器',
    shortIntro: '筛查阳性后的真实患病概率,破除基础率谬误。',
  },
  'heat-index-calculator': {
    name: '湿热指数计算器',
    shortIntro: '气温+湿度算 NWS 体感温度与中暑风险分级。',
  },
  'dew-point-calculator': {
    name: '露点计算器',
    shortIntro: 'Magnus-Tetens 露点、绝对湿度与舒适分级。',
  },
  'passphrase-generator': {
    name: '口令短语生成器',
    shortIntro: '256 词表随机抽词组合,熵位数实时可见。',
  },
  'border-radius-generator': {
    name: '圆角生成器',
    shortIntro: '四角滑杆 + 椭圆斜杠语法,实时预览直出 CSS。',
  },
  'color-palette-generator': {
    name: '配色生成器',
    shortIntro: '一个基色推出五类调和色板,hex/rgb/hsl 齐备。',
  },
  'image-compressor': {
    name: '图片压缩器',
    shortIntro: '本地重编码 JPG/WebP,实测压缩前后体积对比。',
  },
  'username-generator': {
    name: '用户名生成器',
    shortIntro: '关键词 + 四种风格,按平台长度上限过滤。',
  },
  'secret-santa-generator': {
    name: '秘密圣诞抽取器',
    shortIntro: '闭环配对 + 互斥对,逐人揭晓不剧透。',
  },
  'faq-schema-generator': {
    name: 'FAQ 结构化数据生成器',
    shortIntro: '粘贴问答对,一键生成 FAQPage JSON-LD 代码。',
  },
  'number-to-words-converter': {
    name: '数字转英文单词',
    shortIntro: '把数字拼成英文单词——万亿级、小数、序数都在行。',
  },
  'ohms-law-calculator': {
    name: '欧姆定律计算器',
    shortIntro: '输入 V/I/R/P 任意两个,即刻解出其余。',
  },
  'led-resistor-calculator': {
    name: 'LED 限流电阻计算器',
    shortIntro: '输入电压、正向压降与电流,给出理想值与 E12 标准值。',
  },
  'resistor-color-code-calculator': {
    name: '电阻色环计算器',
    shortIntro: '解读 4-6 环色环,或由阻值反查颜色。',
  },
  'voltage-divider-calculator': {
    name: '分压器计算器',
    shortIntro: 'Vin、R1、R2 算 Vout 与功耗,或反解 R2。',
  },
  'tone-generator': {
    name: '音频发生器',
    shortIntro: '浏览器里播放 20Hz-20kHz 的正弦/方波/三角/锯齿波。',
  },
  'bpm-tap-counter': {
    name: 'BPM 点按测速器',
    shortIntro: '跟着歌点按读出 BPM,附一致性指示。',
  },
  'delay-time-calculator': {
    name: '延迟时间计算器',
    shortIntro: 'BPM 换算各音符毫秒时值与 LFO 速率。',
  },
  'utm-link-builder': {
    name: 'UTM 链接构建器',
    shortIntro: '基础 URL 加 UTM 参数,一键生成完整跟踪链接并给命名提示。',
  },
  'credit-card-validator': {
    name: '信用卡号校验器',
    shortIntro: 'Luhn 校验和加卡组织前缀与长度规则,纯本地计算。',
  },
  'iban-validator': {
    name: 'IBAN 校验器',
    shortIntro: '官方注册表国别长度加 ISO 7064 mod-97 校验,浏览器内完成。',
  },
  'graphql-formatter': {
    name: 'GraphQL 格式化器',
    shortIntro: '基于词法分析的 GraphQL 美化与压缩,查询与 SDL 通用。',
  },
  'http-status-code-lookup': {
    name: 'HTTP 状态码查询',
    shortIntro: '全部 62 个 IANA 状态码,按码或关键词搜索并附排查建议。',
  },
  'css-minifier': {
    name: 'CSS 压缩器',
    shortIntro: '字节级安全压缩:calc() 空格、字符串与 /*! 横幅完好无损。',
  },
  'csv-to-sql-converter': {
    name: 'CSV 转 SQL 转换器',
    shortIntro: 'CSV 进,批量多行 INSERT 出——带转义与 NULL 选项。',
  },
  'rot13-converter': {
    name: 'ROT13 转换器',
    shortIntro: 'ROT13 编解码,可选 ROT5 数字旋转与 ROT-N 自定义位移。',
  },

}
