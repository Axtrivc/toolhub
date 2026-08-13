#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
检查 tools.ts 的 SEO 长度：title / titleLongTail / description / descriptionLongTail。
最终生效 title = titleLongTail ?? title（buildToolMetadata 优先用 titleLongTail）。
最终 <title> = 生效title + " | ToolHub"（10 字符，应 ≤60）。
description 应 ≤160。
输出超限清单，供批量修正参考。
"""
import re, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SRC = 'lib/tools.ts'
src = open(SRC, encoding='utf-8').read()

# 逐条解析工具条目（每个工具是一个 {...} 块，含 slug 字段）
# 简单做法：按 "slug: 'xxx'" 分割定位，再在块内找 title/titleLongTail
def find_all(pat):
    return re.findall(pat, src)

slugs = re.findall(r"slug:\s*'([^']*)'", src)
titles = re.findall(r"\btitle:\s*'([^']*)'", src)
ltt = re.findall(r"titleLongTail:\s*'([^']*)'", src)
descs = re.findall(r"\bdescription:\s*'([^']*)'", src)
dltt = re.findall(r"descriptionLongTail:\s*'([^']*)'", src)

BRAND = len(' | ToolHub')

print('工具总数(slug):', len(slugs))
print('title:', len(titles), ' titleLongTail:', len(ltt))
print('description:', len(descs), ' descriptionLongTail:', len(dltt))
print('=' * 70)

# 最终生效 title（优先 titleLongTail），按 slug 对齐
over_title = []
for i, s in enumerate(slugs):
    eff = ltt[i] if i < len(ltt) and ltt[i] else (titles[i] if i < len(titles) else '')
    if not eff:
        continue
    final_len = len(eff) + BRAND
    if final_len > 60:
        over_title.append((s, eff, final_len))

over_desc = []
for i, s in enumerate(slugs):
    eff = dltt[i] if i < len(dltt) and dltt[i] else (descs[i] if i < len(descs) else '')
    if eff and len(eff) > 160:
        over_desc.append((s, eff, len(eff)))

print(f'最终生效 <title> 超 60 字符：{len(over_title)} 个')
print(f'最终生效 description 超 160 字符：{len(over_desc)} 个')
print('=' * 70)

if over_title:
    print('\n### 超长 title（最终生效）清单（slug | 长度 | 内容）###')
    for s, eff, ln in sorted(over_title, key=lambda x: -x[2]):
        print(f'{ln:3d} | {s} | {eff}')
