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

Edit project copy and email in `src/content.ts`. Attribution and limitations follow the owner's confirmed project answers.

Resume controls directly download `assets/resume/lee-andrei-tuazon-resume.pdf`, bundled by Vite, as requested by the owner. Replace that source PDF to update the download. Homepage claims still follow the later project answers. LinkedIn links to `https://www.linkedin.com/in/leetuazon/`.

Only explicitly imported, resized project previews ship, including the owner-requested quadcopter electronics and physical wind-tunnel assembly photographs. Restricted UAV CAD, project source files, and confidential employer artifacts are not included in the production bundle.

`bun scripts/prepare-media.ts` regenerates responsive WebP previews and `src/media/dimensions.json` from the originals without modifying them. Each output includes source provenance in XMP metadata. Sources are listed in that script. Images retain their native proportions, including CAD and portrait-oriented documentation. This is a homepage build; project summaries expand inline.

## Styling and interaction

Tailwind v4's Vite plugin compiles responsive layout and state utilities in `src/App.tsx`. `src/styles.css` defines semantic Ink/Paper tokens via `@theme inline`, shared `@utility` primitives, base typography, and native disclosure transitions. Colors follow the sampled Herdr palette: lavender/charcoal in Ink and violet/warm paper in Paper.

GSAP handles the opening sequence, one-time project-index reveal, and evidence-copy transitions. CSS handles image and arrow feedback, stage-image transitions, menu entry, and native disclosure expansion. Reduced-motion preferences disable nonessential animation. The UAV photograph can expand inline on desktop; mobile already uses the full content width.

Approved surface strategy: `.impeccable/surfaces/src-app-tsx.md`. Visual authority: `DESIGN.md`.
