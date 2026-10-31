#!/usr/bin/env python3
"""Synthetic fixtures only: these are NOT ToolHub search data."""
import argparse
import csv
import importlib.util
from pathlib import Path
import tempfile
import json
import subprocess
import sys
import unittest

spec = importlib.util.spec_from_file_location('gsc', Path(__file__).with_name('gsc-analysis.py'))
gsc = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gsc)


class GscTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)

    def csv(self, filename, headers, rows):
        path = Path(self.temp.name) / filename
        with path.open('w', encoding='utf-8-sig', newline='') as stream:
            writer = csv.writer(stream)
            writer.writerow(headers)
            writer.writerows(rows)
        return path

    def args(self, **overrides):
        defaults = dict(input=None, before=None, after=None, period_a='2026-08-10:2026-08-10',
                        period_b='2026-08-18:2026-08-18', property='synthetic-test', search_type='web',
                        filters='none', appearance=None, brand_pattern=r'tool\s*hub|axtrivc')
        return argparse.Namespace(**(defaults | overrides))

    def test_bom_quoted_query_and_weighted_position(self):
        p = self.csv('date.csv', ['Date', 'Query', 'Clicks', 'Impressions', 'Position'], [
            ['2026-08-10', 'a, "quoted" query', 1, 100, 10], ['2026-08-10', 'ToolHub', 1, 300, 2],
            ['2026-08-18', 'a, "quoted" query', 0, 0, 0], ['2026-08-18', 'ToolHub', 1, 10, 1]])
        r = gsc.analyze(self.args(input=p))
        self.assertEqual(r['totals']['before']['position'], 4)
        self.assertEqual(r['totals']['after']['position'], 1)
        self.assertIsNone(r['query_segments']['nonbrand']['after']['ctr'])
        self.assertEqual(r['queries_with_impressions'], {'before': 2, 'after': 1})

    def test_undated_aggregate_page_segments(self):
        a = self.csv('a.csv', ['Top pages', 'Clicks', 'Impressions', 'Position'], [
            ['https://example.org/tools/loan-calculator/?lang=zh', 1, 10, 3]])
        b = self.csv('b.csv', ['Top pages', 'Clicks', 'Impressions', 'Position'], [
            ['https://example.org/tools/loan-calculator/', 0, 0, 0]])
        r = gsc.analyze(self.args(before=a, after=b))
        self.assertEqual(r['page_segments']['flagship']['before']['impressions'], 10)
        self.assertTrue(any('user assertions' in w for w in r['warnings']))

    def test_no_join_between_dimensions(self):
        a = self.csv('a.csv', ['Query', 'Clicks', 'Impressions', 'Position'], [['x', 1, 10, 3]])
        b = self.csv('b.csv', ['Page', 'Clicks', 'Impressions', 'Position'], [['/x/', 1, 10, 3]])
        with self.assertRaisesRegex(ValueError, 'identical dimensions'):
            gsc.analyze(self.args(before=a, after=b))

    def test_missing_day_not_zero_filled(self):
        p = self.csv('a.csv', ['Date', 'Clicks', 'Impressions', 'Position'], [
            ['2026-08-10', 1, 10, 3], ['2026-08-18', 0, 0, 0]])
        r = gsc.analyze(self.args(input=p, period_a='2026-08-10:2026-08-11', period_b='2026-08-18:2026-08-19'))
        self.assertEqual(r['coverage']['before']['observed_days'], 1)
        self.assertTrue(any('incomplete' in w for w in r['warnings']))

    def test_duplicate_rows_rejected(self):
        p = self.csv('a.csv', ['Date', 'Clicks', 'Impressions', 'Position'], [
            ['2026-08-10', 1, 10, 3], ['2026-08-10', 1, 10, 3]])
        with self.assertRaisesRegex(ValueError, 'duplicate dimension'):
            gsc.load(p)

    def test_nonfinite_and_invalid_counts_rejected(self):
        for bad in ['NaN', 'inf', '-1', '0.5']:
            with self.subTest(bad=bad), self.assertRaises(ValueError):
                gsc.number(bad, 'impressions', True)

    def test_overlapping_and_unequal_periods_rejected(self):
        for overrides in [dict(period_b='2026-08-10:2026-08-10'), dict(period_b='2026-08-18:2026-08-19')]:
            with self.assertRaises(ValueError):
                gsc.analyze(self.args(**overrides))

    def test_cli_writes_report(self):
        p = self.csv('a.csv', ['Date', 'Clicks', 'Impressions', 'Position'], [
            ['2026-08-10', 1, 10, 3], ['2026-08-18', 0, 0, 0]])
        out = Path(self.temp.name) / 'report.json'
        run = subprocess.run([sys.executable, str(Path(__file__).with_name('gsc-analysis.py')),
                              '--input', str(p), '--property', 'synthetic-test', '--output', str(out),
                              '--period-a', '2026-08-10:2026-08-10', '--period-b', '2026-08-18:2026-08-18'],
                             capture_output=True, text=True)
        self.assertEqual(run.returncode, 0, run.stderr)
        report = json.loads(out.read_text())
        self.assertEqual(report['totals']['impressions_change_pct'], -100)
        self.assertIsNone(report['totals']['after']['position'])

    def test_search_appearance_no_double_count(self):
        p = self.csv('a.csv', ['Date', 'Search Appearance', 'Clicks', 'Impressions', 'Position'], [
            ['2026-08-10', 'A', 1, 10, 3], ['2026-08-10', 'B', 1, 10, 3],
            ['2026-08-18', 'A', 0, 5, 4], ['2026-08-18', 'B', 0, 5, 4]])
        with self.assertRaisesRegex(ValueError, 'overlap'):
            gsc.analyze(self.args(input=p))
        r = gsc.analyze(self.args(input=p, appearance='A'))
        self.assertEqual(r['totals']['before']['impressions'], 10)


if __name__ == '__main__':
    unittest.main()
