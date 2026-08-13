#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量压缩 tools.ts 中超长的 titleLongTail（最终 <title> 应 ≤60，即 titleLongTail ≤50）。

策略（对每条 titleLongTail）：
  1. 去掉尾部冗余修饰词：' - Free Tool' / ' - Free Online Tool' / ' - Free Online' / ' - Online Tool' / ' - Online' / ' - Free' 等（不区分大小写）。
  2. 若仍超 50 字符，在 50 字符内找最后一个空格处截断（避免截断单词）。
  3. 清理尾部的 ' -' 或空格。

用法：
  python scripts/fix-seo-titles.py            # dry-run，只打印将改动的条目
  python scripts/fix-seo-titles.py --apply    # 实际写回 tools.ts（自动备份 tools.ts.bak）
"""
import re, sys, io, shutil, os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SRC = 'lib/tools.ts'
BAK = 'lib/tools.ts.bak'
MAX = 50  # titleLongTail 目标长度上限（加 ' | ToolHub' 10 字符 = 60）

src = open(SRC, encoding='utf-8').read()

# 尾部修饰词，按“优先去掉更长更完整”的顺序
TAIL_PATTERNS = [
    r'\s*-\s*Free\s+Online\s+Tool\s*$',
    r'\s*-\s*Free\s+Online\s*$',
    r'\s*-\s*Free\s+Tool\s*$',
    r'\s*-\s*Online\s+Tool\s*$',
    r'\s*-\s*Online\s*$',
    r'\s*-\s*Free\s*$',
    r'\s*-\s*No\s+Signup\s*$',
]

def compress(t: str) -> str:
    t = t.strip()
    for p in TAIL_PATTERNS:
        t2 = re.sub(p, '', t, flags=re.IGNORECASE)
        if t2 != t:
            t = t2
            break
    t = t.strip().rstrip('-').strip()
    if len(t) > MAX:
        # 在 MAX 内找最后一个空格截断
        cut = t[:MAX]
        if ' ' in cut:
            cut = cut[:cut.rfind(' ')]
        t = cut.rstrip('-').strip()
    return t

# 逐个匹配 titleLongTail
pat = re.compile(r"titleLongTail:\s*'([^']*)'")
changes = []
def repl(m):
    old = m.group(1)
    new = compress(old)
    if new != old:
        changes.append((old, new))
        return "titleLongTail: '" + new.replace("'", "\\'") + "'"
    return m.group(0)

new_src = pat.sub(repl, src)

print(f'共发现 {len(changes)} 处 titleLongTail 需要压缩。')
print('=' * 70)
for old, new in changes:
    print(f'[{len(old)+10}→{len(new)+10}] {old}')
    print(f'{"":8}→ {new}')
    print()

# 校验：压缩后是否仍有超长
still_over = []
for m in pat.finditer(new_src):
    if len(m.group(1)) > MAX:
        still_over.append((m.group(1), len(m.group(1))))
if still_over:
    print('⚠️ 压缩后仍超 50 字符的条目：', len(still_over))
    for s, ln in still_over:
        print(f'  {ln} | {s}')
else:
    print('✅ 压缩后所有 titleLongTail 均 ≤ 50 字符。')

if '--apply' in sys.argv:
    shutil.copyfile(SRC, BAK)
    open(SRC, 'w', encoding='utf-8').write(new_src)
    print(f'\n✅ 已写回 {SRC}，原文件备份到 {BAK}')
else:
    print('\n（dry-run 模式，未写回。加 --apply 实际写入。）')
