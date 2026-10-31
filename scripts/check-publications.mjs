import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { publications, policyBriefs, cop17Report } from '../src/data/publications.js';
import { publicationSeo } from '../src/data/publicationSeo.js';

const base = process.argv[2]?.replace(/\/$/, '');
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
const sitemap = await readFile('public/sitemap.xml', 'utf8');
assert.equal(publications.length, 6);
assert.deepEqual(policyBriefs.map((item) => item.number), [1, 2, 3, 4, 5]);
assert.equal(new Set(publications.map((item) => item.path)).size, 6);
const reportSchema = publicationSeo(cop17Report.path).structuredData;
assert.equal(reportSchema.author.name, cop17Report.organization);
assert.equal(reportSchema.publisher.name, cop17Report.organization);
for (const field of ['isPartOf', 'reportNumber', 'copyrightHolder', 'datePublished']) {
  assert.equal(reportSchema[field], undefined, `Report must not inherit brief metadata: ${field}`);
}
const listing = await readFile('dist/publications/index.html', 'utf8');
assert.ok(listing.includes(cop17Report.path));
assert.match(listing.replaceAll('<!-- -->', ''), /5 policy briefs/);

for (const path of ['/publications', ...publications.map((item) => item.path)]) {
  assert.ok(sitemap.includes(`https://www.sawonet.org${path}</loc>`));
  const html = await readFile(`dist${path}/index.html`, 'utf8');
  const metadata = publicationSeo(path);
  const structured = JSON.parse(html.match(/<script id="publication-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(html.includes(`<link rel="canonical" href="${metadata.url}"`));
  assert.deepEqual(structured, metadata.structuredData);
  if (base) {
    const response = await fetch(base + path, { signal: AbortSignal.timeout(45000) });
    assert.equal(response.status, 200, path);
    const served = await response.text();
    assert.ok(served.includes('publication-structured-data'), `Missing static metadata: ${path}`);
    assert.ok(served.includes('<h1'), `Missing static content: ${path}`);
    const json = JSON.parse(served.match(/<script id="publication-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.deepEqual(json, metadata.structuredData, `Incorrect served metadata: ${path}`);
  }
  console.log(`PASS page ${path}`);
}

for (const publication of publications) {
  const original = await readFile(`public${publication.pdf}`);
  const built = await readFile(`dist${publication.pdf}`);
  assert.equal(original.subarray(0, 5).toString(), '%PDF-');
  assert.equal(original.length, publication.bytes);
  assert.equal(hash(built), hash(original));
  assert.ok((await readFile(`public${publication.cover}`)).length > 0);
  const html = await readFile(`dist${publication.path}/index.html`, 'utf8');
  assert.ok(html.includes(`href="${publication.pdf}" download=""`));
  assert.ok(html.includes(`href="${publication.pdf}" target="_blank"`));
  if (publication.kind === 'report') {
    assert.equal(hash(original), publication.sha256, 'Original supplied report must remain unchanged');
    assert.ok(html.includes('SAWONET is not its author'));
    assert.ok(html.includes(publication.participant));
    assert.ok(html.includes(publication.conference));
    assert.ok(!html.includes('Brief undefined'));
    assert.ok(!html.includes('CGIAR Climate Security'));
  } else {
    assert.ok(html.includes(`${publication.pdf}#page=${publication.findingPdfPage}`));
  }
  if (base) {
    const response = await fetch(base + publication.pdf, { signal: AbortSignal.timeout(90000) });
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /application\/pdf/);
    assert.equal(hash(Buffer.from(await response.arrayBuffer())), hash(original), publication.pdf);
    const cover = await fetch(base + publication.cover, { signal: AbortSignal.timeout(45000) });
    assert.equal(cover.status, 200);
    assert.match(cover.headers.get('content-type'), /image\/webp/);
    assert.equal(hash(Buffer.from(await cover.arrayBuffer())), hash(await readFile(`public${publication.cover}`)));
  }
  console.log(`PASS ${publication.kind === 'report' ? 'OPPD report' : `Brief ${publication.number}`}: PDF integrity, cover and read/download links`);
}
console.log(`All five briefs and the OPPD report verified${base ? ` at ${base}` : ' in the production build'}.`);
