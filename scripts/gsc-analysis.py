#!/usr/bin/env python3
"""Compare GSC CSV exports without joining unrelated aggregate tables. Stdlib only."""
import argparse
import csv
from datetime import date
import json
import math
from pathlib import Path
import re
from urllib.parse import urlsplit

DIMENSIONS = ('query', 'page', 'country', 'device', 'search_appearance')
ALIASES = {
    'top queries': 'query', 'queries': 'query', 'query': 'query', '查询': 'query', '热门查询': 'query',
    'top pages': 'page', 'pages': 'page', 'page': 'page', '网页': 'page', '热门网页': 'page',
    'date': 'date', '日期': 'date', 'country': 'country', 'countries': 'country', '国家/地区': 'country',
    'device': 'device', 'devices': 'device', '设备': 'device',
    'search appearance': 'search_appearance', 'search_appearance': 'search_appearance', '搜索结果呈现': 'search_appearance',
    'clicks': 'clicks', '点击次数': 'clicks', 'impressions': 'impressions', '展示次数': 'impressions', '曝光量': 'impressions',
    'ctr': 'ctr', '点击率': 'ctr', 'position': 'position', 'average position': 'position', '平均排名': 'position',
}
FLAGSHIPS = {'loan-calculator', 'wordle-solver', 'percentage-calculator', 'compound-interest-calculator',
             'qr-code-generator', 'word-counter', 'llm-api-cost-calculator', 'json-to-zod', 'json-repair',
             'context-window-checker', 'gpt-token-counter', 'regex-tester'}


def period(value):
    try:
        start, end = map(date.fromisoformat, value.split(':'))
    except ValueError as exc:
        raise ValueError('Period must be YYYY-MM-DD:YYYY-MM-DD') from exc
    if start > end:
        raise ValueError('Period start must precede end')
    return start, end


def number(value, field, integer=False):
    try:
        result = float(value.replace(',', '').strip())
    except (ValueError, AttributeError) as exc:
        raise ValueError(f'Invalid {field}: {value!r}; use decimal point and English/Chinese headers') from exc
    if not math.isfinite(result) or result < 0 or (integer and not result.is_integer()):
        raise ValueError(f'Invalid {field}: {value!r}')
    return int(result) if integer else result


def load(path):
    with open(path, encoding='utf-8-sig', newline='') as stream:
        reader = csv.DictReader(stream)
        if not reader.fieldnames:
            raise ValueError(f'{path}: empty CSV')
        headers = {key: ALIASES.get(key.strip().lower(), key.strip().lower()) for key in reader.fieldnames}
        if len(set(headers.values())) != len(headers):
            raise ValueError(f'{path}: duplicate normalized headers')
        if not {'impressions', 'clicks', 'position'} <= set(headers.values()):
            raise ValueError(f'{path}: requires Impressions, Clicks, Position columns')
        dims = [key for key in DIMENSIONS if key in headers.values()]
        dated = 'date' in headers.values()
        rows, seen = [], set()
        for line, raw in enumerate(reader, 2):
            if None in raw or any(value is None for value in raw.values()):
                raise ValueError(f'{path}:{line}: malformed CSV row')
            row = {headers[key]: value.strip() for key, value in raw.items()}
            for field in ('impressions', 'clicks', 'position'):
                row[field] = number(row[field], field, field != 'position')
            if row['clicks'] > row['impressions']:
                raise ValueError(f'{path}:{line}: clicks exceed impressions')
            if row['impressions'] and row['position'] < 1:
                raise ValueError(f'{path}:{line}: positive impressions require position >= 1')
            if dated:
                row['date'] = date.fromisoformat(row['date'])
            key = tuple(row[d] for d in (['date'] if dated else []) + dims)
            if key in seen:
                raise ValueError(f'{path}:{line}: duplicate dimension tuple; do not concatenate aggregate exports')
            seen.add(key)
            rows.append(row)
    if not rows:
        raise ValueError(f'{path}: no rows')
    return rows, dims, dated


def metrics(rows):
    impressions = sum(row['impressions'] for row in rows)
    clicks = sum(row['clicks'] for row in rows)
    return {'rows': len(rows), 'impressions': impressions, 'clicks': clicks,
            'ctr': clicks / impressions if impressions else None,
            'position': sum(row['position'] * row['impressions'] for row in rows) / impressions if impressions else None}


def comparison(before, after):
    a, b = metrics(before), metrics(after)
    return {'before': a, 'after': b, 'impressions_change': b['impressions'] - a['impressions'],
            'impressions_change_pct': (b['impressions'] / a['impressions'] - 1) * 100 if a['impressions'] else None,
            'position_change': b['position'] - a['position'] if a['position'] is not None and b['position'] is not None else None}


def summarize(before, after, dims, brand_pattern):
    result = {'totals': comparison(before, after), 'dimensions': {}}
    for dim in dims:
        left, right = {}, {}
        for rows, groups in ((before, left), (after, right)):
            for row in rows:
                groups.setdefault(row[dim], []).append(row)
        entries = [{'value': value, **comparison(left.get(value, []), right.get(value, []))}
                   for value in set(left) | set(right)]
        result['dimensions'][dim] = sorted(entries, key=lambda item: (item['impressions_change'], item['value']))
        if dim in ('query', 'page'):
            result[f"{'queries' if dim == 'query' else 'pages'}_with_impressions"] = {
                'before': sum(metrics(group)['impressions'] > 0 for group in left.values()),
                'after': sum(metrics(group)['impressions'] > 0 for group in right.values())}
    if 'query' in dims:
        brand = re.compile(brand_pattern, re.I)
        result['query_segments'] = {name: comparison([r for r in before if bool(brand.search(r['query'])) == branded],
                                                     [r for r in after if bool(brand.search(r['query'])) == branded])
                                    for name, branded in [('brand', True), ('nonbrand', False)]}
    if 'page' in dims:
        def flagship(row):
            return urlsplit(row['page']).path.rstrip('/').split('/')[-1] in FLAGSHIPS
        result['page_segments'] = {name: comparison([r for r in before if flagship(r) == selected],
                                                    [r for r in after if flagship(r) == selected])
                                   for name, selected in [('flagship', True), ('other', False)]}
    return result


def analyze(args):
    pa, pb = period(args.period_a), period(args.period_b)
    if (pa[1] - pa[0]).days != (pb[1] - pb[0]).days:
        raise ValueError('Comparison periods must have equal duration')
    if max(pa[0], pb[0]) <= min(pa[1], pb[1]):
        raise ValueError('Comparison periods must not overlap')
    warnings = ['Exports can omit anonymized queries and truncate rows; totals are observed export totals, not necessarily property totals.',
                'Position is impression-weighted; absent rows mean not observed in this export, not deindexed or proven zero search demand.',
                'GSC dates use Pacific Time. Compare the same property, search type, filters and final data; do not mix search appearances with overlapping totals.']
    def select(rows, span):
        return [r for r in rows if span[0] <= r['date'] <= span[1]]
    sources = []
    if args.input:
        rows, dims, dated = load(args.input)
        if not dated:
            raise ValueError('--input requires Date; use two explicitly period-filtered exports for undated aggregates')
        before, after = select(rows, pa), select(rows, pb)
        sources.append(str(args.input))
    else:
        if not args.before or not args.after:
            raise ValueError('Supply --input OR both --before and --after')
        before, dims, dated = load(args.before)
        after, other_dims, other_dated = load(args.after)
        if dims != other_dims or dated != other_dated:
            raise ValueError('Exports must have identical dimensions and Date presence; unrelated tables cannot be joined')
        if dated:
            before, after = select(before, pa), select(after, pb)
        else:
            warnings.append('Undated export periods are user assertions; the CSV cannot verify their date ranges or completeness.')
        sources.extend([str(args.before), str(args.after)])
    if 'search_appearance' in dims:
        if not args.appearance:
            raise ValueError('Search appearance categories can overlap; use --appearance with one exact category per run')
        before = [r for r in before if r['search_appearance'] == args.appearance]
        after = [r for r in after if r['search_appearance'] == args.appearance]
        warnings.append('Totals are limited to the selected search appearance; never sum reports across overlapping appearances.')
    if not before or not after:
        raise ValueError('One comparison period has no rows; supply complete exports including explicit zero-impression dates')
    coverage = {}
    for label, rows, span in [('before', before, pa), ('after', after, pb)]:
        observed = len({r['date'] for r in rows}) if dated else None
        days = (span[1] - span[0]).days + 1
        coverage[label] = {'period': [str(day) for day in span], 'expected_days': days, 'observed_days': observed}
        if dated and observed != days:
            warnings.append(f'{label}: only {observed}/{days} days observed; missing days are not zero-filled. Period comparison is incomplete.')
    return {'schema_version': 1, 'sources': sources, 'property': args.property, 'search_type': args.search_type,
            'filters': args.filters, 'search_appearance': args.appearance, 'brand_pattern': args.brand_pattern, 'coverage': coverage, 'warnings': warnings,
            **summarize(before, after, dims, args.brand_pattern)}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--input', type=Path)
    parser.add_argument('--before', type=Path)
    parser.add_argument('--after', type=Path)
    parser.add_argument('--period-a', default='2026-08-10:2026-08-17')
    parser.add_argument('--period-b', default='2026-08-18:2026-08-25')
    parser.add_argument('--property', required=True, help='Property identifier recorded as supplied, not authenticated')
    parser.add_argument('--search-type', default='web')
    parser.add_argument('--appearance', help='Exact appearance category to analyze; required when its column exists')
    parser.add_argument('--filters', default='none', help='Record all GSC filters, including appearance if filtered')
    parser.add_argument('--brand-pattern', default=r'tool\s*hub|axtrivc')
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    if args.input and (args.before or args.after):
        parser.error('Use dated --input OR --before/--after, not both')
    try:
        report = analyze(args)
    except (ValueError, OSError, re.error) as exc:
        parser.error(str(exc))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2, allow_nan=False) + '\n', encoding='utf-8')
    print(json.dumps({'output': str(args.output), 'totals': report['totals'], 'warnings': report['warnings']}, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
