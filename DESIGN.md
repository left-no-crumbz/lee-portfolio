---
name: Lee Portfolio
description: Evidence-led aeronautical engineering in Herdr Ink and Paper.
colors:
  ink-canvas: "#17171a"
  ink-accent: "#cba6f7"
  ink-accent-readable: "#cba6f7"
  ink-text: "#eae8ee"
  paper-canvas: "#efece5"
  paper-accent: "#8839ef"
  paper-accent-readable: "#7430d2"
  paper-text: "#15140f"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.5rem, 10vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.2rem, 4.2vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, sans-serif"
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.025em"
rounded:
  square: "0px"
spacing:
  gutter-small: "16px"
  gutter-mobile: "20px"
  gutter-desktop: "34px"
  section-mobile: "52px"
  section-desktop: "80px"
components:
  button-primary:
    rounded: "{rounded.square}"
    padding: "14px 20px"
  button-secondary:
    rounded: "{rounded.square}"
    padding: "14px 20px"
  icon-button:
    rounded: "{rounded.square}"
    size: "44px"
---

# Portfolio Design Direction

## Overview

**Creative North Star: "Engineering field notebook crossed with an aircraft instrument panel"**

An aerospace engineering portfolio for recruiters, engineering teams, and collaborators. The visual language should feel technical, assured, and evidence-led: an editorial presentation built on drafting-grid structure, oversized typography, restrained color, and real project artifacts.

This direction is informed by the visual language of [herdr.dev](https://herdr.dev/). Following the owner's September 10, 2026 correction, use its live Ink/Paper palette: lavender on charcoal and violet on warm paper. This supersedes the earlier signal-orange direction. Retain Lee's approved identity-first, evidence-led composition; do not reproduce Herdr's branding, ram motif, terminal mock, or copy.

**Key Characteristics:**
- Identity-first editorial typography.
- Real engineering artifacts at natural proportions.
- Square composition, hairline divisions, and theme-aware interaction feedback.

This record is source-grounded in `src/App.tsx` and `src/styles.css`. The approved homepage contract lives in `.impeccable/surfaces/src-app-tsx.md`; prospective case-study guidance below is not a claim that separate routes have shipped.

## Design Principles

1. **Work is the interface.** Project photography, CAD renders, diagrams, test footage, and measured outcomes are the dominant visual material.
2. **Structured, not sterile.** Fine rules, numbered sections, and a visible grid create engineering rigor; oversized type and asymmetric imagery keep it personal.
3. **Evidence before claims.** Prefer dimensions, roles, constraints, tools, and outcomes over generic skill statements.
4. **One strong accent.** Use lavender in Ink and violet in Paper against the reference's charcoal and warm-paper surfaces. Do not introduce unrelated accent colors.
5. **Dense details, clear hierarchy.** Technical metadata may be compact and monospaced, while prose remains comfortably readable.
6. **Motion demonstrates function.** Animation should reveal construction, sequence, or state. Decorative motion is unnecessary.

## Experience Dials

- `DESIGN_VARIANCE: 7/10` - asymmetric editorial composition within a strict frame
- `MOTION_INTENSITY: 4/10` - restrained reveals and tactile interaction
- `VISUAL_DENSITY: 5/10` - compact metadata balanced by large imagery and open hero space

## Visual Vocabulary

The site should evoke an engineering field notebook crossed with an aircraft instrument panel, but rendered as a contemporary editorial portfolio.

Use:

- A centered, bordered page chassis on desktop
- Plain surfaces with drafting structure expressed by aligned columns and rules
- A subtle full-page grid background (72px, reduced to 40px on mobile) reinforcing the drafting-table aesthetic
- Hairline dividers as the primary grouping device
- Sharp rectangular controls and image frames
- Large, tightly tracked sans-serif display type
- Monospaced labels, measurements, dates, tools, and figure captions
- Compact project numerals that gain accent emphasis when notes open
- Small status marks for project state or discipline
- Real imagery with concise technical captions
- Dark and light themes with identical hierarchy

Avoid:

- Rounded card grids
- Glassmorphism, glow, or gradient blobs
- Generic three-column skill cards
- Fake terminal windows or fake CAD interfaces
- Decorative aircraft silhouettes used as filler
- Unrelated accent colors outside the approved Ink/Paper palette
- Excessive uppercase labels above every heading
- Project descriptions that read like marketing copy

## Colors

Use semantic tokens so the same structure works in both themes.

### Ink Mode

```css
--surface: #1e1e22;
--surface-strong: #26262b;
--secondary: #cdccd2;
--muted: #b0afb6;
--line: #35353d;
--line-strong: #45475a;
--accent-ink: #17171a;
```

### Paper Mode

```css
--surface: #e7e3da;
--surface-strong: #ddd8cc;
--secondary: #55534a;
--muted: #646052;
--line: #cbc5b6;
--line-strong: #93918a;
--accent-ink: #fff;
```

### Usage Rules

Canvas, accent, and text primitives are recorded in frontmatter; the CSS blocks above retain supporting semantic values. Tailwind v4 `@theme inline` binds utilities to the active root variables.

The `--accent-readable` semantic token maps through `--color-accent-readable` for selected evidence-stage labels and hover text on secondary buttons, icon controls, text links, and contact email/copy controls. It matches the core accent in Ink and uses the darker readable violet in Paper. Core accent fills, borders, focus outlines, and display emphasis retain the approved palette.

**The One Accent Rule.** Use lavender in Ink and violet in Paper; preserve the same hierarchy across themes.

- Default to Ink mode if there is no saved preference; expose a clear `INK / PAPER` toggle.
- Express the drafting structure through aligned content columns and hairline section divisions; the approved homepage uses plain surfaces behind artifacts.
- Muted text and rules may be strengthened relative to Herdr for readability. Core canvas, text, surface, and accent colors follow the reference.
- Reserve the accent for one phrase in the hero, active controls, links, focus rings, and small navigational signals.
- Do not color every heading or every project number.
- Body text must meet WCAG AA contrast in both themes.

## Typography

### Families

- **Display:** Archivo with sans-serif fallback, weights 800 and 900.
- **Body:** Inter with sans-serif fallback.
- **Technical:** JetBrains Mono with monospace fallback, weight 400.

This pairing intentionally separates voice, explanation, and evidence:

- Archivo carries identity and major statements.
- Inter carries readable descriptions and case-study prose.
- JetBrains Mono carries identifiers, years, dimensions, tools, statuses, and captions.

### Scale

Frontmatter records the shared display, headline, body, and label roles. At `768px`, the hero display becomes `clamp(4rem, 8.4vw, 7.5rem)`. Project titles are `25px`, `22px` from `768px`, and `25px` from `1024px`. Prose ranges from `12px` in project summaries to `16px` in the desktop introduction.

### Typesetting Rules

- The discipline headline uses an explicit two-line break and the display metrics in frontmatter.
- Highlight one meaningful phrase in the hero using the accent color, not a gradient or alternate font.
- Body copy uses the shared line height; the introduction is bounded at `42ch` on mobile and `34ch` on desktop, with project notes at `70ch`.
- Technical metadata uses uppercase; tracking increases to `0.075em` at `768px`.

## Layout

### Page Chassis

- Maximum width: `1440px`.
- Center within the viewport.
- Apply 1px side borders from `768px`; above `1440px`, add a top border and `20px` top margin. The footer supplies the bottom rule.
- Desktop gutter: `34px`.
- Mobile gutter from `390px`: `20px`; desktop gutter applies from `768px`.
- Small-mobile gutter: `16px`.
- Corners remain square throughout the interface.

### Grid

- Use explicit fractional grids: `5fr / 7fr` for hero and About, `4fr / 8fr` for evidence, and `5fr / 3fr / 3fr` for project summaries from `768px`.
- Use CSS Grid rather than percentage-based flex calculations.
- Rules and shared edges align across navigation, hero, capability strip, project rows, and footer.
- Prefer horizontal section borders over floating containers.
- Large photos may span the full inner frame; supporting photos can use asymmetric 7/5 or 8/4 splits.

### Spacing

- Navigation height: `64px`, increasing to `76px` at `768px`.
- Hero block padding: `32px` top / `28px` bottom, increasing to `48px` / `40px` at `768px`.
- Shared section padding follows the mobile and desktop frontmatter spacing tokens.
- Project disclosure rows: `28px` block padding, increasing to `30px` at `768px`.
- Keep gaps systematic, but let image scale produce visual variety.

## Elevation & Depth

Flat at rest: surface tones and one-pixel rules provide separation. The shipped interface has no shadows, blur, or glass layers. The mobile menu overlays content with a solid surface and a bottom rule.

## Shapes

Controls, figures, and the page frame have square corners. The small hollow circular marker beside “Not flight-tested” is a status detail, not a container-radius precedent.

## Components

### Shipped homepage composition

The approved surface contract supersedes the older homepage proposals. The opening pairs the two-line discipline headline and accent work action with a real UAV image. A four-item capability strip replaces numerical profile metrics. The featured project exposes Design / Build / Validation evidence, followed by an inline project index, team-oriented About section, experience rows, contact section, and compact footer. There is no availability ribbon or decorative identity mark.

### Navigation and contact utilities

The header contains Work, About, Experience, Contact, an Ink/Paper segmented control, and persistent email, direct resume-download, and LinkedIn icon links. Below `768px`, section links and the theme control move into a bordered menu; email, resume, LinkedIn, and the menu control remain in the header. Escape and section-link selection close the menu. LinkedIn opens a new tab. Contact repeats LinkedIn and the labeled resume download, alongside an email link and copy control with success/error feedback. The footer contains the year, evidence-led signature, and Back to top.

Contact leads with “Let’s talk engineering.” and places “Have an engineering opportunity?” beneath it as supporting prose (`14px`, `24px` top margin). The decorative heading arrow appears only from `768px` at `70px`; email and copy-control hover text use the readable accent.

### Evidence and project notes

Design / Build / Validation buttons use `aria-pressed`, update real imagery and scope text, and announce text changes politely. Desktop enlargement changes the evidence grid to one column rather than opening an overlay. The index links the UAV back to its evidence section; other projects use native disclosures with explicit open/close labels, an accent open state, and plus-to-close rotation. Real quadcopter and wind-tunnel photographs appear in the index. Notes preserve contribution and limitation details; separate case-study routes are outside this shipped surface.

### Buttons and links

Square outlined controls use semantic line colors, monospaced uppercase labels, and `150ms` color feedback. Labeled buttons have a `50px` minimum height; icon buttons are `44px` square. The primary work action uses accent fill and accent-ink text, changing to text-color fill and canvas text on hover. Secondary and icon controls gain core-accent borders, readable-accent text, and a 10% core-accent tint. Press translates buttons down `1px`. Keyboard focus uses a `2px` accent outline with `4px` offset. Text links use readable-accent hover text; their arrows shift horizontally `4px`, while button arrows move down `2px` over `300ms`.

### Figures and informational metadata

Project images use `width: 100%; height: auto`, generated intrinsic dimensions, and `640w` / `1280w` responsive sources. The hero image is eager/high-priority; remaining imagery is lazy. Hover enlargement (`1.025`, `500ms`) clips inside the image bounds. Captions sit outside photography and identify role, methods, and limitations. Metadata is plain technical text rather than a chip library; no input fields or generic card system ship.

## Do's and Don'ts

### Do:
- Do preserve the Ink/Paper hierarchy and semantic theme bindings.
- Do show real project evidence at its natural proportions.
- Do keep contribution and limitations visible beside the work.
- Do respect reduced motion and retain native disclosure behavior.

### Don't:
- Don't introduce unrelated accent colors.
- Don't replace project artifacts with simulated CAD or terminal interfaces.
- Don't crop away engineering details to force uniform thumbnail boxes.

## Superseded Homepage Proposals

The historical proposals below are retained as context only, not implementation requirements. For shipped homepage composition and behavior, use Components above and `.impeccable/surfaces/src-app-tsx.md`. Their availability ribbon, numeric metrics, geometric hero mark, selectable Assembly/Airframe/Control/Test views, full-row project links, and proposed footer are superseded.

### 1. Navigation

Desktop structure:

- Name or compact personal mark at left
- `WORK`, `ABOUT`, `EXPERIENCE`, and `CONTACT` links at right
- Resume link with a small file/download indicator
- `INK / PAPER` segmented theme control

Rules:

- Keep all desktop navigation on one line.
- Use small uppercase labels.
- Use borders rather than filled pills.
- On mobile, retain the name and resume link; move the remaining links and theme control into a bordered menu sheet.
- Hover changes border and text to the accent. Active press moves down by 1px.

### 2. Availability Ribbon

An optional narrow clipped ribbon may sit directly below the navigation. It should communicate a real status such as `AVAILABLE FOR AEROSPACE ENGINEERING OPPORTUNITIES`.

- Use the success color, not the primary accent.
- Keep it short and factual.
- Omit it when the status is not accurate.

### 3. Hero

Suggested content hierarchy:

- Eyebrow: `AERONAUTICAL ENGINEER / DESIGNER / BUILDER`
- Headline: a concise statement of engineering focus, with one accent phrase
- Lede: no more than 35 words summarizing discipline, working style, and intended role
- Primary action: `VIEW WORK`
- Secondary action: `DOWNLOAD RESUME`
- Small metadata line: location, degree/status, and primary toolset

Composition:

- Text occupies the left two-thirds on desktop.
- A large, low-contrast geometric mark may occupy the right third. It should derive from the portfolio identity, such as a simplified airfoil section, planform, or initials, not from Herdr's mascot.
- Prefer an original vector mark. If none exists, use a tightly cropped real engineering photograph rather than decorative SVG filler.
- Keep both actions visible in the initial viewport.

### 4. Profile Metrics

Use a four-cell strip below the hero. Every value must be truthful and useful.

Potential cells:

- Featured projects
- Competition placements
- Relevant software tools
- Internship or practical experience

Each cell contains:

- A large tabular value in display type
- A small icon or status mark
- A monospaced uppercase label

Do not invent precision or inflate experience. If four meaningful metrics are unavailable, use two or three cells and reshape the grid.

### 5. Featured Project Plate

This is the primary visual artifact and should replace Herdr's interactive terminal role.

Recommended first project: the RC plane / fixed-wing UAV or wind tunnel project.

Structure:

- Figure header with project name at left and discipline/status at right
- One full-width visual stage within a 1px frame
- A lead photograph or CAD render as the base
- Optional selectable views: `ASSEMBLY`, `AIRFRAME`, `CONTROL`, `TEST`
- Concise figure caption below with role, objective, and outcome

Interaction:

- Selecting a view swaps real media and updates the caption.
- Use actual project assets; never synthesize a fake engineering dashboard.
- Reserve media dimensions to prevent layout shift.
- Video receives a clear play control and a poster frame.
- The static fallback shows the strongest image and full caption.

### 6. Project Index

Render selected work as large, full-width numbered rows rather than cards.

Desktop columns:

1. Oversized low-contrast index, approximately `120-140px`
2. Project title, concise description, role, and result
3. A real evidence panel or thumbnail aligned right

Suggested projects from the existing assets:

- `01` RC Plane / Fixed-Wing UAV
- `02` Wind Tunnel
- `03` Dorsal-Fin-Inspired Vertical Stabilizer Designs
- `04` Functional Control Surfaces Scale Model
- `05` Supersonic Wind Tunnel Scale Model
- `06` Turbine Engine Scale Model or Wooden Propeller

Evidence panels should vary by project:

- CAD render with view label
- Photograph plus dimensions
- Test video poster with duration
- Two-image before/after or build/result pairing
- Tools and methods matrix
- Small result summary with only verified values

Behavior:

- The entire row is a link.
- Hover gives the row a subtle accent tint, changes the title to accent, and shifts the arrow by 4px.
- Images may scale to `1.02`, but borders and surrounding layout remain fixed.
- Do not repeat the same evidence-panel arrangement for every row.

### 7. Experience Band

Use one slightly tinted, full-width section to summarize practical experience and education without creating another card grid.

- Left: role or degree headline
- Center: short factual description
- Right: organization logo, dates, and a link to details
- Separate multiple entries with horizontal rules
- Preserve original logo proportions and provide monochrome-safe treatment where necessary

### 8. Closing Statement

Use an oversized, left-aligned final headline such as `Let’s build what flies next.`

- One short paragraph describing the kind of work sought
- One contact action, labeled consistently as `CONTACT`
- Optional resume action if it was not already prominent
- A large low-contrast portfolio mark may bleed from the lower-right edge

### 9. Footer

- Compact and rule-separated
- Contact email, LinkedIn, resume, and project index
- Current year and location
- Monospaced microcopy
- Stack into two rows on mobile instead of squeezing links

## Project Detail Pages (Future Guidance)

Every case study should be a technical narrative, not a gallery dump.

### Required Sequence

1. **Header:** title, year, discipline, role, and one-sentence objective
2. **Hero media:** strongest photograph, CAD render, or video
3. **Brief:** problem, constraints, and individual responsibility
4. **Approach:** design decisions and tools
5. **Build:** process images with informative captions
6. **Validation:** testing, observations, and verified results
7. **Reflection:** what worked, what changed, and what would be done next
8. **Next project:** one decisive full-width link

### Case-Study Layout

- Keep prose at `65-72ch`.
- Use a sticky section index on wide screens only.
- Alternate full-width figures, asymmetric image pairs, and text-plus-evidence compositions.
- Caption every technical image with what the viewer should notice.
- Put dimensions and test conditions in monospaced text.
- Do not show more than five undifferentiated images in sequence; group or curate them.

## Image Direction

The existing repository contains strong source material across projects, competitions, work experience, and portraits. Prioritize it over generated imagery.

### Selection

- Lead with images that clearly show the complete object or test setup.
- Use close-ups to explain mechanisms, joints, control surfaces, fabrication, or finish.
- Pair CAD renders with corresponding physical builds when available.
- Use competition images as outcome evidence, not as decorative hero imagery.
- Use one formal portrait in the About page; avoid a repeated personal-photo collage.

### Treatment

- Preserve truthful color in project imagery.
- Use consistent neutral color grading only when sources visibly clash.
- Crop assertively but never hide relevant engineering details.
- Add subtle surface labels outside the image rather than placing text over busy photography.
- Images use square corners. Borders belong to figure headers/captions where present; avoid empty framed areas around an image.
- Render supplied photography, CAD previews, and portrait documentation at their natural proportions (`width: 100%; height: auto`). Generated per-image width/height metadata reserves the correct space. Thumbnail hover zoom stays inside the image's own bounds.

### Asset Preparation

- Convert HEIC assets to AVIF or WebP for browser delivery while retaining originals.
- Generate poster images for MOV and MP4 files.
- Provide width and height metadata for every image.
- Use responsive `srcset` sizes; preload only the actual hero media.
- Open certificates and logos in overlays or dedicated detail views rather than placing full-resolution documents on the home page.

## Earlier Component Proposals (Unshipped)

The button, figure, and metadata definitions in Components above are authoritative for the current build. The earlier status palette and tag proposals below are not shipped primitives.

### Buttons

- Square corners
- 1px border
- Uppercase monospaced label
- Minimum target size of `44x44px` on touch devices
- Primary button uses the accent fill
- Secondary button uses a transparent fill and strong border
- Active state translates down `1px`
- Focus-visible state uses a 2px accent outline with 3px offset

### Labels And Tags

- Tags are informational, not decorative.
- Use for role, discipline, tool, year, or project status.
- Avoid pill shapes; use inline text or rectangular outlined labels.
- Keep no more than four visible tags per project summary.

### Status Indicators

- Solid green: completed or validated
- Amber: ongoing
- Hollow neutral: exploratory
- Never rely on color alone; pair the mark with text.

### Figures

- Figure title and view label above the media
- Caption below the media
- Optional figure number, e.g. `FIG. 03`
- Use the same border alignment as surrounding sections

## Motion

Motion should communicate hierarchy, process, or feedback.

Use:

- Hero elements entering from `translateY(24px)` and opacity `0.4`, with `420ms` duration and `60ms` stagger
- Project-row arrows shifting on hover
- Evidence imagery entering from `translateY(10px)` and opacity `0.65` over `360ms`; accompanying text enters from `5px` over `300ms`
- View labels updating instantly when project media changes
- An inline desktop enlargement control for closer UAV-image inspection; mobile already uses the content width
- Native project disclosures with opening/closing transitions, plus-to-close rotation, and explicit open/close labels
- One-time staggered project-index entry and a short mobile-menu entrance

Do not use:

- Scroll hijacking
- Continuous parallax
- Custom cursors
- More than one looping animation on the page
- Character-by-character headline animation

Timing:

- Control color feedback: `150ms`; arrow/plus transforms: `300ms`; image hover: `500ms`
- Native disclosure block-size/content-visibility transitions: `320ms`; menu entrance: `240ms`
- Project index entrance: `400ms` with `60ms` stagger, once on intersection
- Use opacity and transform for entrances; disclosure expansion also animates block size where supported
- Disable nonessential motion under `prefers-reduced-motion: reduce`

## Responsive Behavior

### Desktop: `>= 1024px`

- Full framed chassis
- Single-line navigation
- Hero retains asymmetric text/photograph layout
- Capabilities form one horizontal strip
- Project rows use three columns
- All project photography retains natural proportions

### Tablet: `768-1023px`

- Use `34px` gutters and the desktop fractional grids
- Keep the capability strip horizontal and project summaries in three columns
- Keep evidence controls vertical and expose inline image enlargement
- There is no sticky case-study navigation on the homepage

### Mobile: `< 768px`

- Use a strict single content column
- Remove outer chassis side borders if they constrain content
- Keep a compact `64px` navigation
- Hero headline remains dominant but does not overflow horizontally
- Capabilities use a two-column grid
- Project rows use a narrow `36-44px` index column and one content column
- Evidence panels stack below descriptions and span the content width
- Preserve natural media proportions; all three evidence controls remain visible in a horizontal row
- Keep captions and metadata legible at `11px` minimum
- Footer stacks into clear rows

### Small Mobile: `< 390px`

- Gutter becomes `16px`
- Hide secondary navigation metadata
- Allow action groups to stack full-width
- Do not horizontally scroll commands, labels, or project titles

## Accessibility

- Use semantic landmarks and maintain a logical heading order.
- Every project-row link needs a descriptive accessible name.
- Provide useful alt text that describes engineering content, not filenames.
- Decorative grids and identity marks are hidden from assistive technology.
- Interactive media selectors use buttons with `aria-pressed` or an appropriate tab pattern.
- All controls remain keyboard operable.
- Do not place text directly over photography without a solid backing surface.
- Maintain 4.5:1 contrast for body text and 3:1 for large display text.
- Theme preference persists when storage is available. Native disclosures work without animation support; the React application itself requires JavaScript.
- Respect reduced motion and avoid autoplaying audible video.

## Content Voice

The writing should be direct, technically literate, and specific.

Prefer:

- `Designed and fabricated a functional elevator and rudder assembly.`
- `Used XFLR5 to compare vertical stabilizer configurations.`
- `Responsible for CAD, material selection, assembly, and test documentation.`

Avoid:

- `Passionate innovator transforming the future of flight.`
- `Crafting seamless solutions at the intersection of creativity and engineering.`
- Claims of performance without measurements or documented observations.

Project summaries should answer four questions quickly:

1. What was built or studied?
2. Why did it matter?
3. What was the individual's role?
4. What evidence or outcome exists?

## Implementation Guardrails

- Build from semantic tokens rather than scattered literal colors. Tailwind v4 `@theme inline` maps Ink/Paper variables into utility colors; JSX utilities own responsive composition and states. Keep CSS limited to base styles, shared `@utility` primitives, and specialized motion.
- Use one radius system: `0px` for all visible containers and controls.
- Use one accent throughout the entire site.
- Avoid generic card abstractions when a border-separated row communicates hierarchy better.
- Do not reproduce Herdr's page copy, terminal UI, mascot placement, or exact project-row count. Its palette is explicitly requested.
- Do not invent project metrics, dates, responsibilities, or outcomes.
- Audit the site in both themes and at `1440px`, `1024px`, `768px`, `390px`, and `320px` widths.
- Target LCP below `2.5s`, CLS below `0.1`, and INP below `200ms`.

## Definition Of Done

The design is successful when:

- The first screen clearly identifies the person, discipline, and desired work.
- A recruiter can understand the strongest project within 20 seconds.
- Every featured project shows real evidence rather than only descriptive text.
- The home page feels like one continuous framed composition, not a stack of templates.
- Desktop and mobile retain the same visual identity without tiny or clipped content.
- Ink and Paper modes preserve equivalent hierarchy and contrast.
- The result evokes Herdr's confidence, grid discipline, and editorial-tech character while remaining recognizably an aerospace engineering portfolio.
