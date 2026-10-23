# UNCCD COP17 Mongolia: local implementation for review

## Inspection and source availability

- The repository initially contained no Mongolia, Ulaanbaatar, COP17 or Local Communities Caucus article or media assets. A publications implementation note mentioned the archive as outside the earlier publication task.
- The original archive was found in the supplied Downloads location as `SAWONET at UNCCD COP17, Mongolia.zip` (110,887,419 bytes).
- The ZIP contains exactly 162 JPG photographs and five MP4 videos. No caption sheets, attendance notes, transcripts or photographer-credit files were included.
- Originals were extracted into the local review workspace outside the Git repository for contact sheets, video screening and asset generation. The original ZIP was not modified.
- Selected source filenames, hashes, image dimensions, output variants and video decisions are recorded in `source-assets/cop17-mongolia-media.json`.

## Local routes and integration

- Article: `/projects/unccd-cop17-ulaanbaatar-mongolia`
- Gallery: `/projects/unccd-cop17-ulaanbaatar-mongolia#cop17-gallery`
- Projects feature: `/projects#unccd-cop17-mongolia`
- Homepage: COP17 feature immediately after the main introduction. The Kathmandu feature remains intact below it and is labelled as an earlier engagement.
- Existing Projects / Campaigns navigation provides desktop and mobile access. It stays active on the new article route.
- The Kathmandu and GLF Africa articles, images and links remain present in Projects. Publications and existing forms are unchanged.

To preview: run `npm run build`, then `npm run preview -- --host 127.0.0.1 --port 4175 --strictPort`.

## Editorial and attribution decisions

The article title is **SAWONET at UNCCD COP17, Ulaanbaatar, Mongolia**. The narrative describes the supplied photographic record and cites official conference context. It does not assign SAWONET a speaking role, formal appointment, partnership or responsibility for a conference outcome.

Official sources used in the article:

- Conference dates, location, theme and thematic programme: https://www.unccd.int/cop17/programme and https://indico.un.org/e/unccd-cop17
- Local Communities Caucus agenda: https://www.unccd.int/cop17/programme/agenda/local-communities-caucus-0
- High-level local communities dialogue: https://www.unccd.int/cop17/programme/agenda/seats-table-high-level-dialogue-local-communities-land-and-people-day
- Presentation of the Local Communities' founding declaration: https://transcripts.un.org/en/asset/k1j/k1jjmlhgjp

Captions describe visible settings, participants and readable programme displays. The programme display in source photo `IMG-20261006-WA0302.jpg` confirms the rangelands session title and its 26 August 2026 date. The display in `IMG-20261006-WA0259.jpg` confirms the youth, data and drought session theme.

Per-photo session names, participant identities and attribution of a particular image to a declaration-drafting meeting were not supplied or independently established. Accordingly, meeting photographs are labelled as community meetings rather than asserting a particular caucus or declaration session. The article separately provides sourced Local Communities Caucus/declaration context. Individual photographer names are unknown; the displayed source credit is SAWONET event archive.

The source filenames include `20261006`; no capture dates are inferred from those filenames. Conference dates come from official sources. No image artwork was generated or replaced.

## Media selection and delivery

- Reviewed contact sheets covering all 162 photographs. Selected 18 distinct images spanning the venue and plenary, panels and programme displays, community roundtables, delegation group photographs, networking and rangelands discussions.
- All selected photographs were converted to WebP with EXIF orientation applied. Responsive widths are 640, 1280 and up to 1920 pixels; no source image was upscaled. There are 48 photo derivatives plus one video poster.
- Gallery cards now display the photographs at their natural proportions in a responsive one-, two- or three-column layout, without cropping or visible captions. Category metadata and meaningful descriptions remain available internally for filtering, image alt text and accessible link names. Responsive `sizes` account for container padding and column gaps; images remain lazy-loaded and asynchronously decoded.
- Selecting an image opens a full-viewport native dialog without visible descriptive captions. It retains Previous/Next controls, arrow-key navigation, Escape dismissal, focus return and background scroll locking. Viewer navigation follows the active category and wraps within it. Without JavaScript, image links still open the full photo.
- All five source videos were screened visually using time-spaced storyboards and fully decoded to check their streams. Source durations are approximately 7, 26, 17, 197 and 32 seconds. Speech was not transcribed or used for factual claims.
- Selected `VID-20261006-WA0285.mp4`: 17.4 seconds showing flags outside the venue. It adds motion and location context. Re-encoded as a silent H.264/yuv420p MP4, 432 x 768, 25 fps, with fast-start metadata. Output: 1,664,228 bytes. The visual description explicitly identifies it as silent footage.
- Four speech/meeting clips were excluded: no verified transcripts or speaker attributions were supplied, and the photo selection already covers these settings. The long plenary source also emitted one non-monotonic timestamp warning when decoded; it is not used on the website.
- The player is created only after the visitor requests it, uses `preload="none"`, has native controls and does not autoplay. MP4 delivery supports byte-range requests in preview.
- The video section heading is **Scenes from UNCCD COP17, Ulaanbaatar**. Its 17-second silent source and click-to-load behavior are unchanged.
- All event media variants and the video together total 7,673,984 bytes. Browsers load appropriately sized photos lazily rather than fetching the entire collection and video on entry.

## Files

Created:

- `src/pages/Cop17.jsx`: article, source links, gallery and optional film.
- `src/components/EventPhotoGallery.jsx`: accessible filtering and full-image dialog.
- `src/components/Cop17Feature.jsx`: reusable homepage/Projects feature.
- `src/data/cop17.js`: editorial metadata, descriptions, captions and Article structured data.
- `src/data/cop17Photos.json`: responsive image dimensions and asset variants.
- `public/assets/unccd-cop17-mongolia-2026/`: selected optimized photos, silent video and poster.
- `source-assets/cop17-mongolia-media.json`: source archive/selection provenance and video review decisions.
- `docs/COP17_IMPLEMENTATION.md`: this review record.

Modified:

- `src/App.jsx`, `src/router.jsx`: article route and parent navigation state.
- `src/pages/Home.jsx`, `src/pages/Projects.jsx`: event features and earlier-engagement label.
- `src/components/PublicationSeo.jsx`: existing metadata handler now also supports the event article.
- `scripts/prerender-publications.mjs`: extends existing static rendering to the event route.
- `vite.config.js`, `vercel.json`: matching local preview and future hosting rewrites.
- `public/sitemap.xml`: event URL.
- `src/styles.css`: dialog backdrop and visible keyboard focus styles.

No application or build dependencies were added. FFmpeg was used as an external local media-processing tool and is not required to build or run the site.

## Verification

- Production build passed, including the new static article and all six existing publication routes.
- `node scripts/check-publications.mjs` passed: five original PDFs, cover images, metadata, sitemap and read/download actions.
- Browser checks passed at 320, 390, 768, 1024, 1280 and 1440 pixels: no horizontal overflow, one H1, correct title and Article JSON-LD, and no hydration errors.
- All 18 gallery photos loaded. All 48 photo derivatives returned 200 with `image/webp` and their expected byte lengths.
- Category filtering, full-image viewing, arrow keys, Escape, restored focus and scroll restoration passed.
- No MP4 request occurred before opting into the player. Native video playback and byte-range delivery passed after opt-in.
- Homepage-to-article navigation and mobile Projects-to-article navigation passed. The Kathmandu return link and existing Kathmandu/GLF sections passed.
- Existing home, about, thematic work, membership, member list, APEDO profile, projects, partners, contact and publications routes rendered without browser console or page errors. No external form submissions were made.
- Desktop article, loaded gallery, full-image view and mobile layouts were visually inspected.
- No lint command is configured. The build still reports the existing non-blocking stale Browserslist database notice.

This record describes the implementation reviewed locally before release. The user has subsequently authorized final verification, commit and production deployment. No archive files are missing. The unresolved editorial items are individual photographer credits, precise meeting labels and speaker identifications, which are intentionally not invented.

## Final gallery refinement review

- All 18 curated photos, authentic hero and original media are retained. No per-image captions or category labels are visibly rendered in the gallery or viewer; category buttons remain at the top and the source credit remains below the collection.
- Main article editorial content, including sourced participation, Local Communities Caucus and declaration context, remains unchanged in accordance with the additional review instruction. No unsupported role or declaration-review attendance claims were added.
- Existing COP17 homepage and Projects features were verified, with Kathmandu coverage retained.
- Production build and five-publication verification passed. Browser checks passed at 320, 390, 768, 1024, 1280 and 1440px, including mobile/tablet menu navigation to Projects and the event article, desktop navigation, filters, full-viewport viewing, keyboard navigation, focus restoration, optional video and all 48 photo variants. Filtered viewer navigation wraps correctly within its five-image category.
- Desktop and mobile image-only gallery layouts were visually inspected. No broken assets, routing errors or console errors were observed. These checks were originally completed during local review; publication is now authorized subject to final verification.
