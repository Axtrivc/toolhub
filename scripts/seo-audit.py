#!/usr/bin/env python3
"""Audit exported HTML, not React source. Python 3 standard library only.

Offline HTTP/header fields deliberately stay unmeasured. Similarity/quality are
triage heuristics, never an instruction to delete or noindex a page.
"""
import argparse
import csv
import json
import re
from collections import Counter, deque
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
import xml.etree.ElementTree as ET

ORIGIN = 'https://toolhub.axtrivc.com'
INFORMATIONAL = {'broken_fragment_links', 'orphan_page', 'high_similarity_review', 'shared_explanations_review', 'streamed_main_content', 'duplicate_title', 'duplicate_description'}
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

def clean(s):
    return re.sub(r'\s+', ' ', s).strip()

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.title = []
        self.h1s = []
        self.meta = {}
        self.canonicals = []
        self.hreflang = []
        self.links = []
        self.assets = []
        self.ids = set()
        self.text = []
        self.paragraphs = []
        self.jsonld = []
        self.script = None
        self.lang = ''
        self.streamed_main_content = False
        self.main_templates = set()
        self.hidden_h1 = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        hidden = ('hidden' in a or a.get('aria-hidden') == 'true' or
                  bool(re.search(r'display\s*:\s*none', a.get('style', ''))))
        if tag not in VOID:
            is_stream = tag == 'div' and a.get('id', '').startswith('S:') and ('B:' + a.get('id', '')[2:]) in self.main_templates
            self.stack.append((tag, hidden, is_stream))
            self.streamed_main_content |= is_stream
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'template' and any(t == 'main' for t, _, _ in self.stack): self.main_templates.add(a.get('id'))
        if tag == 'html': self.lang = a.get('lang', '')
        if tag == 'meta':
            key = (a.get('name') or a.get('property') or '').lower()
            self.meta.setdefault(key, []).append(a.get('content', ''))
        if tag == 'link':
            rel = a.get('rel', '').lower().split()
            if 'canonical' in rel: self.canonicals.append(a.get('href', ''))
            if 'alternate' in rel and a.get('hreflang'):
                self.hreflang.append({'language': a['hreflang'], 'href': a.get('href', '')})
            if 'stylesheet' in rel: self.assets.append(a.get('href', ''))
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag == 'script':
            if a.get('type', '').lower() == 'application/ld+json': self.script = []
            if a.get('src'): self.assets.append(a['src'])
        if tag == 'h1': self.h1s.append([])
        if tag in {'p', 'li'}: self.paragraphs.append([])

    def handle_endtag(self, tag):
        if tag == 'script' and self.script is not None:
            self.jsonld.append(''.join(self.script))
            self.script = None
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        tags = {t for t, _, _ in self.stack}
        if 'script' in tags:
            if self.script is not None: self.script.append(data)
            return
        if 'style' in tags or 'noscript' in tags: return
        if 'title' in tags: self.title.append(data)
        if 'h1' in tags and self.h1s:
            self.h1s[-1].append(data)
            self.hidden_h1 |= any(hidden for _, hidden, _ in self.stack)
        if any(hidden and not stream for _, hidden, stream in self.stack): return
        if ('main' in tags or any(stream for _, _, stream in self.stack)) and not tags.intersection({'nav', 'header', 'footer', 'button', 'select'}):
            self.text.append(data)
            if tags.intersection({'p', 'li'}) and self.paragraphs: self.paragraphs[-1].append(data)


def robots_allowed(text, path, agent='googlebot'):
    """Google longest-rule matching; selected most-specific UA groups combine."""
    groups, agents, rules = [], [], []
    for line in text.splitlines() + ['User-agent: __end__']:
        line = line.split('#', 1)[0].strip()
        if ':' not in line: continue
        key, value = [x.strip() for x in line.split(':', 1)]
        if key.lower() == 'user-agent':
            if rules:
                groups.append((agents, rules)); agents, rules = [], []
            agents.append(value.lower())
        elif key.lower() in {'allow', 'disallow'}:
            rules.append((key.lower(), value))
    matching = [(max([len(a) if a != '*' else 0 for a in aa if a == '*' or a in agent] or [-1]), rr) for aa, rr in groups]
    best = max([n for n, _ in matching] or [-1])
    candidates = []
    for n, rr in matching:
        if n != best or n < 0: continue
        for kind, pattern in rr:
            if not pattern: continue
            expr = '^' + re.escape(pattern).replace(r'\*', '.*')
            if pattern.endswith('$'): expr = expr[:-2] + '$'
            if re.search(expr, path): candidates.append((len(pattern.replace('*', '').rstrip('$')), kind == 'allow'))
    return max(candidates, default=(0, True))[1]


def walk_json(value):
    if isinstance(value, dict):
        yield value
        for child in value.values(): yield from walk_json(child)
    elif isinstance(value, list):
        for child in value: yield from walk_json(child)


def url_path(file, root):
    rel = file.relative_to(root).as_posix()
    if rel == 'index.html': return '/'
    if rel.endswith('/index.html'): return '/' + rel[:-10]
    return '/' + rel


def audit(root, origin, registry=None):
    sitemap = ET.parse(root / 'sitemap.xml').getroot()
    locations = [node.text or '' for node in sitemap.iter() if node.tag.split('}')[-1] == 'loc']
    site_urls = set(locations)
    robots = (root / 'robots.txt').read_text()
    pages, parsed, global_errors = [], {}, []
    if sitemap.tag.split('}')[-1] != 'urlset': global_errors.append('unsupported_sitemap_root')
    if len(locations) != len(site_urls): global_errors.append('duplicate_sitemap_url')
    for file in sorted(root.rglob('*.html')):
        p = PageParser(); p.feed(file.read_text())
        path = url_path(file, root); url = origin + path
        error_page = path in {'/404/', '/404.html', '/_not-found/'}
        findings = []
        directives = ','.join(p.meta.get('robots', []) + p.meta.get('googlebot', [])).lower()
        noindex = bool(re.search(r'\b(?:noindex|none)\b', directives))
        crawlable = robots_allowed(robots, path)
        canonical = p.canonicals[0] if len(p.canonicals) == 1 else ''
        title = clean(''.join(p.title))
        h1s = [clean(''.join(h)) for h in p.h1s]
        description = p.meta.get('description', [''])[0]
        text = clean(' '.join(p.text))
        schema_errors, types = [], []
        for raw in p.jsonld:
            try:
                value = json.loads(raw)
                if not isinstance(value, (dict, list)): schema_errors.append('non_object_jsonld')
                for obj in walk_json(value):
                    typ = obj.get('@type', [])
                    types.extend(typ if isinstance(typ, list) else [typ])
                    if 'aggregateRating' in obj or 'review' in obj: findings.append('unverified_rating_or_review')
            except ValueError: schema_errors.append('invalid_jsonld')
        if not error_page:
            if not title: findings.append('missing_title')
            if p.hidden_h1: findings.append('hidden_h1')
            if p.streamed_main_content: findings.append('streamed_main_content')
            if len(h1s) != 1 or not h1s[0]: findings.append('invalid_h1_count')
            if not description: findings.append('missing_description')
            if canonical != url or len(p.canonicals) != 1: findings.append('non_self_canonical')
            if noindex: findings.append('unexpected_noindex')
            if not crawlable: findings.append('robots_blocked')
            if url not in site_urls: findings.append('missing_from_sitemap')
            og = p.meta.get('og:url', [])
            if og and og[0].rstrip('/') != url.rstrip('/'): findings.append('og_canonical_mismatch')
            if any(urlsplit(h['href']).query for h in p.hreflang): findings.append('parameter_hreflang')
            if re.search(r'lets you figure out .*? instantly|100% Free & Private\. No sign-up, runs in your browser\.', text + ' ' + description, re.I): findings.append('generic_keyword_filler')
        elif url in site_urls: findings.append('error_page_in_sitemap')
        if schema_errors: findings.extend(schema_errors)
        blocked_assets = sorted({a for a in p.assets if urlsplit(urljoin(url, a)).netloc == urlsplit(origin).netloc and not robots_allowed(robots, urlsplit(urljoin(url, a)).path)})
        if blocked_assets: findings.append('robots_blocked_assets')
        paragraphs = [clean(''.join(x)) for x in p.paragraphs if len(clean(''.join(x)).split()) >= 12]
        row = dict(url=url, path=path, file=file.relative_to(root).as_posix(), http_status=None,
                   http_status_evidence='not measured: filesystem export', x_robots_tag=None,
                   indexability='error_page' if error_page else 'blocked' if noindex or not crawlable else 'eligible_static_html',
                   streamed_main_content=p.streamed_main_content, hidden_h1=p.hidden_h1, title=title, meta_description=description, h1=h1s, canonical=canonical,
                   robots=directives, robots_allowed=crawlable, hreflang=p.hreflang,
                   inbound_links=0, homepage_depth=None, sitemap_inclusion=url in site_urls,
                   jsonld_validity='invalid' if schema_errors else 'valid_json' if p.jsonld else 'absent',
                   schema_types=sorted(set(types)), content_words=len(text.split()), content_similarity=0,
                   closest_page=None, shared_paragraph_ratio=0, audit_findings=sorted(set(findings)),
                   dead_links=[], parameter_links=[], broken_fragments=[], blocked_assets=blocked_assets,
                   quality_class=None, quality_reason=None, priority='P3', _text=text, _paragraphs=paragraphs)
        parsed[path] = p; pages.append(row)
    by_path = {p['path']: p for p in pages}
    aliases = {p['path'].rstrip('/'): p['path'] for p in pages if p['path'].endswith('/')}
    graph = {p['path']: set() for p in pages}
    for row in pages:
        for href in parsed[row['path']].links:
            target = urlsplit(urljoin(row['url'], href))
            if target.scheme not in {'http', 'https'} or target.netloc != urlsplit(origin).netloc: continue
            path = unquote(target.path) or '/'
            resolved = aliases.get(path.rstrip('/'), path)
            if resolved in by_path:
                if target.query: row['parameter_links'].append(href)
                if resolved != row['path']: graph[row['path']].add(resolved)
                if target.fragment and unquote(target.fragment) not in parsed[resolved].ids:
                    row['broken_fragments'].append(href)
            elif not (root / path.lstrip('/')).is_file(): row['dead_links'].append(href)
        for field in ['dead_links', 'parameter_links', 'broken_fragments']:
            row[field] = sorted(set(row[field]))
        if row['dead_links']: row['audit_findings'].append('dead_internal_links')
        if row['broken_fragments']: row['audit_findings'].append('broken_fragment_links')
    for targets in graph.values():
        for target in targets: by_path[target]['inbound_links'] += 1
    queue = deque([('/', 0)]); seen = set()
    while queue:
        path, depth = queue.popleft()
        if path in seen or path not in by_path: continue
        seen.add(path); by_path[path]['homepage_depth'] = depth
        queue.extend((p, depth + 1) for p in sorted(graph[path]))
    exported_urls = {p['url'] for p in pages}
    for url in sorted(site_urls - exported_urls): global_errors.append('sitemap_missing_html:' + url)
    if registry:
        source = registry.read_text()
        blocks = re.split(r"\bslug:\s*'([^']+)'", source)
        published = {blocks[i] for i in range(1, len(blocks), 2) if re.search(r'\bpublished:\s*true\b', blocks[i + 1])}
        if not published: global_errors.append('empty_published_registry')
        for slug in sorted(published):
            if '/tools/' + slug + '/' not in by_path: global_errors.append('published_tool_missing_html:' + slug)
        for row in pages:
            if re.fullmatch('/tools/[^/]+/', row['path']) and row['path'].split('/')[2] not in published:
                row['audit_findings'].append('unpublished_tool_exported')
    for field, finding in [('title', 'duplicate_title'), ('meta_description', 'duplicate_description')]:
        counts = Counter(p[field].casefold() for p in pages if p['indexability'] != 'error_page' and p[field])
        for row in pages:
            if row['indexability'] != 'error_page' and counts[row[field].casefold()] > 1:
                row['audit_findings'].append(finding)
    # Five-word Jaccard on visible main content: explicitly heuristic, excludes scripts/chrome.
    shingles = []
    for row in pages:
        words = re.findall(r'\w+', row['_text'].lower())
        shingles.append(set(' '.join(words[i:i + 5]) for i in range(max(0, len(words) - 4))))
    paragraph_counts = Counter(x for row in pages for x in set(row['_paragraphs']))
    for i, row in enumerate(pages):
        scores = [(len(shingles[i] & other) / len(shingles[i] | other), j) for j, other in enumerate(shingles) if i != j and shingles[i] and other]
        if scores:
            score, closest = max(scores)
            row['content_similarity'] = round(score, 4); row['closest_page'] = pages[closest]['url']
        paragraphs = row['_paragraphs']
        row['shared_paragraph_ratio'] = round(sum(paragraph_counts[p] >= 5 for p in paragraphs) / len(paragraphs), 4) if paragraphs else 0
        if row['indexability'] != 'error_page':
            if row['inbound_links'] == 0: row['audit_findings'].append('orphan_page')
            if row['content_similarity'] >= .8: row['audit_findings'].append('high_similarity_review')
            if row['shared_paragraph_ratio'] >= .6: row['audit_findings'].append('shared_explanations_review')
            # A/B are explanation evidence only: no claim that arithmetic or live interaction passed.
            if row['audit_findings'] and any(f not in INFORMATIONAL for f in row['audit_findings']):
                row['quality_class'] = 'C'; row['quality_reason'] = 'Confirmed static output defect; see findings. Functional quality not inferred.'; row['priority'] = 'P1'
            elif row['content_words'] >= 350 and row['shared_paragraph_ratio'] < .6 and row['content_similarity'] < .8:
                row['quality_class'] = 'A'; row['quality_reason'] = 'Provisional: substantial differentiated rendered explanation; needs independent functional/editorial review.'; row['priority'] = 'P2'
            else:
                row['quality_class'] = 'B'; row['quality_reason'] = 'Provisional: explanation/uniqueness needs review; functional completeness not inferred.'; row['priority'] = 'P2'
        else: row['quality_reason'] = 'Error document, excluded from content quality classification.'
        del row['_text'], row['_paragraphs']
    errors = [(p['url'], f) for p in pages for f in p['audit_findings'] if f not in INFORMATIONAL]
    return dict(generated_at=datetime.now(timezone.utc).isoformat(), origin=origin,
                method='Exported HTML only. No HTTP/header, Google indexing, ranking, or algorithm verdict. Similarity excludes scripts/style/nav/header/footer and includes main-targeted React streamed HTML (flagged separately); it can still contain shared UI. hidden_h1/streamed_main_content indicate JavaScript-dependent reveal, not proof of Google indexing failure.',
                quality_method='A/B/C/D are provisional static triage. D is never assigned automatically. A does not certify functionality. Similarity alone is never a deletion/noindex recommendation.',
                page_count=len(pages), sitemap_count=len(locations), global_errors=global_errors,
                error_count=len(errors) + len(global_errors), errors=errors,
                quality_counts={k: sum(p['quality_class'] == k for p in pages) for k in 'ABCD'},
                pages=pages)


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--root', type=Path, default=Path('out'))
    ap.add_argument('--origin', default=ORIGIN)
    ap.add_argument('--output', type=Path, default=Path('reports/seo'))
    ap.add_argument('--registry', type=Path, default=Path('lib/tools.ts'))
    args = ap.parse_args()
    result = audit(args.root, args.origin.rstrip('/'), args.registry)
    args.output.mkdir(parents=True, exist_ok=True)
    (args.output / 'page-inventory.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    with (args.output / 'page-inventory.csv').open('w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=list(result['pages'][0]))
        writer.writeheader()
        for row in result['pages']:
            writer.writerow({k: json.dumps(v, ensure_ascii=False) if isinstance(v, (list, dict)) else v for k, v in row.items()})
    print(json.dumps({k: v for k, v in result.items() if k not in {'pages', 'method', 'quality_method', 'errors'}}, indent=2))
    for url, finding in result['errors'][:30]: print(f'ERROR {url}: {finding}')
    raise SystemExit(bool(result['error_count']))

if __name__ == '__main__': main()
