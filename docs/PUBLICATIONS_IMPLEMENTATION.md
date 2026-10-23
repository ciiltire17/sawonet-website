# Research & Publications: implementation and release checks

Implemented locally on 22 October 2026; completed as a five-brief series on 24 October 2026 following authorization to commit, push and publish. The production branch is `main` in `ciiltire17/sawonet-website`, connected to the Vercel `sawonet-ngo` project.

## Preview

Run `npm run build`, then `npm run preview -- --host 127.0.0.1 --port 4173`.

- Collection: http://127.0.0.1:4173/publications
- Brief 1: `/publications/climate-change-conflict-intersectional-vulnerability-pastoral-women`
- Brief 2: `/publications/pastoral-women-climate-adaptation-leaders`
- Brief 3: `/publications/womens-participation-rangeland-governance-peacebuilding`
- Brief 4: `/publications/gesi-lens-pastoral-mobility`
- Brief 5: `/publications/beyond-static-schools-education-systems-pastoral-mobility`

The homepage features all five briefs. Navigation and footer link to the collection.

## Files

Created:

- `.gitattributes`: treats publication PDFs as binary so Git preserves their bytes across platforms.
- `src/data/publications.js`: official titles, subtitles, authors and affiliations, August 2026 dates, original citation text, condensed summaries, findings, recommendations, source page references and asset metadata.
- `src/data/publicationSeo.js`: publication and collection metadata, Report and CollectionPage JSON-LD.
- `src/components/PublicationCard.jsx`: responsive cards and accessible read/download actions.
- `src/components/PublicationSeo.jsx`: metadata updates during client-side navigation.
- `src/pages/Publications.jsx`: collection page.
- `src/pages/PublicationDetail.jsx`: detail pages and related publications.
- `scripts/check-publications.mjs`: dependency-free checks for built pages, sitemap, metadata, PDF integrity and read/download links. Add an origin argument to verify served assets and their hashes, e.g. `node scripts/check-publications.mjs https://sawonet.org`.
- `scripts/prerender-publications.mjs`: renders complete HTML and metadata for the six new routes using existing React/Vite dependencies.
- `public/assets/publications/2026/`: five unchanged PDFs and five WebP images rendered from their original first pages.
- `docs/PUBLICATIONS_IMPLEMENTATION.md`: implementation and verification record.

Modified:

- `src/App.jsx`: publication routes and metadata component.
- `src/router.jsx`: array-generated route support, optional initial path for static rendering, trailing-slash normalization and publication navigation state.
- `src/main.jsx`: hydrates prerendered pages while preserving client rendering elsewhere.
- `src/components/Navbar.jsx`: Publications link; mobile navigation remains available below 1280px to accommodate the additional link.
- `src/components/Footer.jsx`: Publications link.
- `src/pages/Home.jsx`: Latest Research & Publications section with five compact cards.
- `src/styles.css`: publication actions, visible focus outlines and reduced-motion behavior.
- `public/sitemap.xml`: collection and five detail URLs.
- `package.json`: build runs the publication prerender step after Vite.
- `vite.config.js`: production preview serves the same static publication pages as Vercel.
- `vercel.json`: publication rewrites precede the existing SPA fallback; original asset handling remains in place.

No application dependencies were added. Existing forms and API handlers were not changed.

## Source and editorial handling

Sources are the five August 2026 PDF files supplied on `D:/`. The initial request covered four briefs; the 24 October request expands publication to all five. The supplied education PDF is explicitly numbered Brief 5 on its original cover and is included. The COP17 archive remains outside the publication scope.

The series is presented jointly as CGIAR, OPPD & SAWONET. Author affiliations follow the original covers: Joyce Takaindisa (CGIAR), Fozia Noor (OPPD), Barret Kamunzu (OPPD), Yasmin Hassan (OPPD). Original citations identify CGIAR Climate Security and Organization for Pastoral Peace Development (OPPD).

Website summaries are condensed paraphrases of each brief's executive summary, findings and recommendations. Source links identify the printed page ranges and link to the correct physical PDF pages. Full references, acknowledgements, license statements, institutional disclaimers and credits remain in the untouched PDFs. Cover-photo credits appear beneath the detail-page covers.

No day of publication was inferred from filenames: displayed and structured dates preserve August 2026. All five entries are supported by original numbered PDFs.

## Stable public assets

All URLs use `/assets/publications/2026/` followed by the filename below. Cover images use the corresponding slug plus `-cover.webp`.

| Brief | PDF filename | Pages | Bytes | SHA-256 |
| --- | --- | --- | --- | --- |
| 1 | climate-change-conflict-intersectional-vulnerability-pastoral-women-august-2026.pdf | 23 | 11919887 | 607e1d7f3d3653f2f5941d2f6f7ac71510c8a64d575d421bbf0dd887e1d22400 |
| 2 | pastoral-women-climate-adaptation-leaders-august-2026.pdf | 17 | 11211106 | f465a2630acb62cc65961d0e0483d7d1564e966c2cad3534be3ca657161957b5 |
| 3 | womens-participation-rangeland-governance-peacebuilding-august-2026.pdf | 17 | 14561029 | 3476ddeb4394386364633f4209d7a03314d084218dc7af459c026e3a81dc3590 |
| 4 | gesi-lens-pastoral-mobility-august-2026.pdf | 17 | 13664463 | 0963d5f4a61ae5549873348b979f9ddebfb350fa217b7640f8af8e7a1978f8d1 |
| 5 | beyond-static-schools-education-systems-pastoral-mobility-august-2026.pdf | 17 | 16461536 | 796d67e452bcad15f3619cfdc649bef8fbdfe4bb9810b5d671a6683a6f6599c2 |

Each copy was compared byte-for-byte with its original. Covers were rendered at 900 x 1273 pixels and encoded as WebP, without cropping or replacing artwork. Rendering used the bundled PDF tooling; no PDF processing package is required by the website or build.

## Verification

- `npm run build`: passed, including all six prerendered publication routes.
- `git diff --check`: passed.
- No lint command or existing automated test suite is configured in `package.json`.
- Headless Chrome checks passed for all six new routes at 320, 390, 768, 1024, 1280 and 1440px: one H1 per page, no horizontal overflow, canonical URLs, correct JSON-LD and no hydration errors.
- Static HTML responses contain publication content, unique metadata and JSON-LD without requiring JavaScript.
- All five PDF HTTP responses returned 200 with `application/pdf`; served hashes matched the copied files. All five browser downloads completed with the expected descriptive filenames.
- All five covers returned 200 with `image/webp`.
- Card navigation, browser back/forward, mobile-menu navigation and metadata cleanup when returning home passed.
- All nine existing routes rendered: home, about, what we do, membership, member NGOs, APEDO profile, projects, partners and contact. Contact field editing and membership conditional organization fields were checked; no external form submissions were made.
- Original covers, desktop/mobile collection screenshots, a detail page and the homepage feature were visually reviewed. No clipping or layout defects observed.
- Build reports an existing stale Browserslist database notice. It does not prevent the build.

No missing source files or local implementation blockers remain. Production verification is performed after pushing through the existing Vercel Git integration. No environment variables or mail credentials are read or changed.
