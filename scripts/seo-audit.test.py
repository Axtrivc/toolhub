#!/usr/bin/env python3
"""Fixture regression tests: malformed metadata and graph faults must be detected."""
import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('seo_audit', Path(__file__).with_name('seo-audit.py'))
m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)

class AuditTest(unittest.TestCase):
    def test_parser_excludes_hydration_script_and_chrome(self):
        p = m.PageParser()
        p.feed('<html lang="en"><head><title>A &amp; B</title><script>"<h1>Fake</h1>"</script></head><body><main><nav><p>navigation</p></nav><h1>Real</h1><p>Visible <strong>content</strong></p><span hidden>hidden</span><script>self.__next_f.push("keywords")</script></main></body></html>')
        self.assertEqual(m.clean(''.join(p.title)), 'A & B')
        self.assertEqual([m.clean(''.join(x)) for x in p.h1s], ['Real'])
        self.assertEqual(m.clean(' '.join(p.text)), 'Real Visible content')

    def test_react_streamed_content_keeps_raw_visibility_evidence(self):
        p=m.PageParser()
        p.feed('<main><template id="B:0"></template>Loading</main><div hidden id="S:0"><h1>Real tool</h1><p>Real streamed explanation</p></div><script>$RC("B:0","S:0")</script>')
        self.assertTrue(p.streamed_main_content)
        self.assertTrue(p.hidden_h1)
        self.assertIn('Real streamed explanation', ' '.join(p.text))
        self.assertNotIn('$RC', ' '.join(p.text))

    def test_google_robots_longest_rule(self):
        robots = 'User-agent: *\nDisallow: /\n\nUser-agent: Googlebot\nDisallow: /private\nAllow: /private/public\nDisallow: /*.js$\n'
        self.assertTrue(m.robots_allowed(robots, '/tools/'))
        self.assertFalse(m.robots_allowed(robots, '/private/'))
        self.assertTrue(m.robots_allowed(robots, '/private/public/a'))
        self.assertFalse(m.robots_allowed(robots, '/_next/app.js'))
        self.assertTrue(m.robots_allowed(robots, '/_next/app.js?v=1'))

    def test_rendered_regressions_and_link_graph(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root/'robots.txt').write_text('User-agent: *\nAllow: /\n')
            (root/'sitemap.xml').write_text('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://example.test/</loc></url><url><loc>https://example.test/tool/</loc></url></urlset>')
            (root/'index.html').write_text('<title>Home</title><link rel="canonical" href="https://example.test/"><meta name="description" content="Home description"><main><h1>Home</h1><a href="/tool/?lang=es">Tool</a></main>')
            (root/'tool').mkdir()
            (root/'tool/index.html').write_text('<title>Tool</title><link rel="canonical" href="https://example.test/"><meta name="robots" content="noindex"><link rel="alternate" hreflang="es" href="/tool/?lang=es"><main><h1>Tool</h1><a href="/missing/">Missing</a><script type="application/ld+json">{"aggregateRating":{"ratingValue":5}}</script><script type="application/ld+json">not json</script></main>')
            result = m.audit(root, 'https://example.test')
            tool = next(p for p in result['pages'] if p['path']=='/tool/')
            for finding in ['non_self_canonical', 'unexpected_noindex', 'parameter_hreflang', 'dead_internal_links', 'invalid_jsonld', 'unverified_rating_or_review']:
                self.assertIn(finding, tool['audit_findings'])
            self.assertEqual(tool['inbound_links'], 1)
            self.assertEqual(tool['homepage_depth'], 1)
            self.assertIsNone(tool['http_status'])
            self.assertGreater(result['error_count'], 0)

    def test_hidden_primary_heading_fails_gate(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            (root/'robots.txt').write_text('User-agent: *\nAllow: /\n')
            (root/'sitemap.xml').write_text('<urlset><url><loc>https://example.test/</loc></url></urlset>')
            (root/'index.html').write_text('<title>Home</title><meta name="description" content="A page"><link rel="canonical" href="https://example.test/"><main><template id="B:0"></template>Loading</main><div hidden id="S:0"><h1>Home</h1></div>')
            result=m.audit(root, 'https://example.test')
            self.assertIn(('https://example.test/', 'hidden_h1'), result['errors'])

    def test_error_document_excluded_from_indexable_checks(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            (root/'robots.txt').write_text('User-agent: *\nAllow: /\n')
            (root/'sitemap.xml').write_text('<urlset/>')
            (root/'404.html').write_text('<h1>Not found</h1><meta name="robots" content="noindex">')
            result=m.audit(root, 'https://example.test')
            self.assertEqual(result['error_count'], 0)
            self.assertEqual(result['pages'][0]['indexability'], 'error_page')

if __name__=='__main__': unittest.main()
