# -*- coding: utf-8 -*-
"""站内 SEO / 本地化缺口审计脚本（只读，不改任何文件）

用法:
  node 环境下用 python 运行本脚本;输出「缺 FAQ」「公式已注册」「缺 ui」三行关键指标,
  供 GLM-CONTENT-TASKS-v1.md 的验收 grep 使用。
"""
import re, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def read(*p):
    return open(os.path.join(ROOT, *p), encoding='utf-8').read()

tools_src = read('lib', 'tools.ts')
faqs_src = read('lib', 'tool-faqs.ts')
form_src = read('lib', 'tool-formulas.ts')

slugs = re.findall(r"slug:\s*'([^']+)'", tools_src)

# 分类信息(仅用于展示)
def cat_of(slug):
    blocks = re.split(r'\n\s*\{', tools_src)
    for b in blocks:
        if re.search(r"slug:\s*'%s'" % re.escape(slug), b):
            m = re.search(r"category:\s*'([^']*)'", b)
            return m.group(1) if m else '?'
    return '?'

faq_slugs = set(re.findall(r"^\s*'([^']+)':\s*\[", faqs_src, re.M))
missing_faq = [s for s in slugs if s not in faq_slugs]

form_slugs = set(re.findall(r"^\s*'([^']+)':\s*\{", form_src, re.M))

l10n_dir = os.path.join(ROOT, 'lib', 'i18n', 'tools-l10n')
no_ui_any = []
for f in os.listdir(l10n_dir):
    if not f.endswith('.ts'):
        continue
    slug = f[:-3]
    src = open(os.path.join(l10n_dir, f), encoding='utf-8').read()
    has_ui_any = False
    for lang in ('zh', 'es', 'de'):
        idx = src.find(lang + ':')
        seg = src[idx: idx + 6000] if idx >= 0 else ''
        if 'ui:' in seg:
            has_ui_any = True
            break
    if not has_ui_any:
        no_ui_any.append(slug)

# 是否打印详细清单
detail = '--detail' in sys.argv

print('=== ToolHub 内容缺口审计 ===')
print('工具总数:', len(slugs))
print('缺 FAQ:', len(missing_faq), '/', len(slugs))
print('公式已注册:', len(form_slugs), '/', len(slugs))
print('缺 ui(三语都无):', len(no_ui_any), '/', len(slugs))

if detail:
    print()
    print('--- 缺 FAQ 清单 ---')
    for s in missing_faq:
        print(' ', s, '(%s)' % cat_of(s))
    print()
    print('--- 缺 ui(三语都无)清单 ---')
    for s in no_ui_any:
        print(' ', s, '(%s)' % cat_of(s))
