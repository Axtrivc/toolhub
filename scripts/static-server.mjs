#!/usr/bin/env node
/** 依赖零的静态文件服务器:serve out/ 于 127.0.0.1:3000(支持目录 index.html 与无后缀路径) */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(process.argv[2] ?? 'out')
const PORT = parseInt(process.argv[3] ?? '3000', 10)
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json', '.webp': 'image/webp', '.woff2': 'font/woff2',
}
http.createServer((req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    let file = path.join(ROOT, p)
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html')
    else if (!fs.existsSync(file) && fs.existsSync(file + '.html')) file += '.html'
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end('404'); return }
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] ?? 'application/octet-stream' })
    fs.createReadStream(file).pipe(res)
  } catch { res.writeHead(500); res.end() }
}).listen(PORT, '127.0.0.1', () => console.log(`serving ${ROOT} → http://127.0.0.1:${PORT}`))
