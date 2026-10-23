import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import { publications } from '../src/data/publications.js';
import { publicationSeo } from '../src/data/publicationSeo.js';
import { cop17, cop17Seo } from '../src/data/cop17.js';

// Generate complete, crawlable publication and event pages with existing Vite/React tools.
// This also supplies route-specific metadata to social crawlers without JavaScript.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
try {
  const [{ default: App }, { BrowserRouter }] = await Promise.all([
    server.ssrLoadModule('/src/App.jsx'),
    server.ssrLoadModule('/src/router.jsx'),
  ]);
  const template = await readFile(resolve('dist/index.html'), 'utf8');
  for (const path of ['/publications', ...publications.map((item) => item.path), cop17.path]) {
    const metadata = cop17Seo(path) || publicationSeo(path);
    const body = renderToString(createElement(BrowserRouter, { initialPath: path }, createElement(App)));
    let html = template
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(metadata.title)}</title>`)
      .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(metadata.description)}" />`)
      .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${metadata.url}" />`)
      .replace(/<meta\s+property="og:[^"]+"[\s\S]*?\/>/g, '')
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    const social = ['title', 'description', 'url', 'image', 'type'].map((key) => `<meta property="og:${key}" content="${escapeHtml(metadata[key])}" />`).join('\n');
    html = html.replace('</head>', `${social}\n<script id="publication-structured-data" type="application/ld+json">${JSON.stringify(metadata.structuredData).replaceAll('<', '\\u003c')}</script>\n</head>`);
    const directory = resolve('dist', path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, 'index.html'), html);
    console.log(`Prerendered ${path}`);
  }
} finally {
  await server.close();
}
