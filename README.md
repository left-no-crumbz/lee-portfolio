# Lee — Aeronautical Engineering

React + Vite homepage with Tailwind CSS, GSAP, Lucide icons, and self-hosted fonts.

```sh
bun install
bun run dev
bun run build
bun run preview
```

Cloudflare Pages: build command `bun run build`, output directory `dist`. No Worker or backend is required.

## Content

Edit project copy and email in `src/content.ts`. The source of truth for attribution and limitations is `website-questions.txt`, ahead of older resume claims.

The resume action currently opens a request email. Set `VITE_RESUME_URL` to an approved same-origin PDF path (for example `/resume.pdf`, with the PDF in `public/`) to enable the download action. The supplied resume has not been published because it contains claims superseded by the later project answers.

Selected UAV photographs require the owner's publication clearance before deployment. Restricted UAV CAD, wind-tunnel imagery, source files, and confidential employer artifacts are not included in the production bundle. Only explicitly imported, resized project previews ship.

`bun scripts/prepare-media.ts` regenerates responsive WebP previews from the originals without modifying them. Each output includes source provenance in XMP metadata. Sources are listed in that script. This is a homepage build; project summaries expand inline, not into unfinished routes.

Approved surface strategy: `.impeccable/surfaces/src-app-tsx.md`. Visual authority: `DESIGN.md`.
