# Portfolio Design Direction

## Design Read

An aerospace engineering portfolio for recruiters, engineering teams, and collaborators. The visual language should feel technical, assured, and evidence-led: an editorial presentation built on drafting-grid structure, oversized typography, restrained color, and real project artifacts.

This direction is informed by the visual language of [herdr.dev](https://herdr.dev/), reviewed in its desktop and mobile layouts and in both its dark `ink` and light `paper` modes. It is inspiration, not a template. Do not reproduce Herdr's branding, ram motif, terminal mock, copy, exact palette, or page composition.

## Design Principles

1. **Work is the interface.** Project photography, CAD renders, diagrams, test footage, and measured outcomes are the dominant visual material.
2. **Structured, not sterile.** Fine rules, numbered sections, and a visible grid create engineering rigor; oversized type and asymmetric imagery keep it personal.
3. **Evidence before claims.** Prefer dimensions, roles, constraints, tools, and outcomes over generic skill statements.
4. **One strong accent.** Use an aerospace signal orange against neutral ink and paper surfaces. Do not introduce unrelated accent colors.
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
- A faint square drafting grid behind major surfaces
- Hairline dividers as the primary grouping device
- Sharp rectangular controls and image frames
- Large, tightly tracked sans-serif display type
- Monospaced labels, measurements, dates, tools, and figure captions
- Oversized low-contrast section numerals
- Small status marks for project state or discipline
- Real imagery with concise technical captions
- Dark and light themes with identical hierarchy

Avoid:

- Rounded card grids
- Glassmorphism, glow, or gradient blobs
- Generic three-column skill cards
- Fake terminal windows or fake CAD interfaces
- Decorative aircraft silhouettes used as filler
- Purple accents copied from the reference
- Excessive uppercase labels above every heading
- Project descriptions that read like marketing copy

## Color System

Use semantic tokens so the same structure works in both themes.

### Ink Mode

```css
--canvas: #151617;
--surface: #1c1e20;
--surface-strong: #24272a;
--text: #ecebea;
--text-secondary: #c4c3c0;
--text-muted: #8e908f;
--line: #292c2e;
--line-strong: #3a3e40;
--accent: #f08a3c;
--accent-ink: #151617;
--success: #69a879;
--warning: #d2a64c;
```

### Paper Mode

```css
--canvas: #f1f0eb;
--surface: #e8e7e1;
--surface-strong: #dcdbd3;
--text: #171817;
--text-secondary: #50524f;
--text-muted: #7d807a;
--line: #deddd6;
--line-strong: #c8c6bc;
--accent: #c95016;
--accent-ink: #ffffff;
--success: #39764a;
--warning: #8c681a;
```

### Usage Rules

- Default to Ink mode if there is no saved preference; expose a clear `INK / PAPER` toggle.
- Apply the drafting grid with 1px lines every `72px` on desktop and every `40px` on mobile.
- Keep the grid only slightly distinct from the canvas. It must not interfere with text or images.
- Reserve the accent for one phrase in the hero, active controls, links, focus rings, and small navigational signals.
- Do not color every heading or every project number.
- Body text must meet WCAG AA contrast in both themes.

## Typography

### Families

- **Display:** Archivo, ideally self-hosted, weights 800 and 900.
- **Body:** Inter or a similarly neutral grotesk, weights 400 to 600.
- **Technical:** JetBrains Mono, weight 400 to 700.

This pairing intentionally separates voice, explanation, and evidence:

- Archivo carries identity and major statements.
- Inter carries readable descriptions and case-study prose.
- JetBrains Mono carries identifiers, years, dimensions, tools, statuses, and captions.

### Scale

```css
--display-hero: clamp(2.6rem, 7.2vw, 7.6rem);
--display-section: clamp(2.25rem, 5vw, 4.75rem);
--heading-project: clamp(1.25rem, 2vw, 1.75rem);
--body-large: clamp(1rem, 1.2vw, 1.125rem);
--body: 0.9375rem;
--label: 0.6875rem;
--micro: 0.625rem;
```

### Typesetting Rules

- Hero display uses weight 900, `line-height: 0.9`, and approximately `-0.055em` tracking.
- Keep the desktop hero to two or three deliberate lines and the mobile hero to no more than four.
- Highlight one meaningful phrase in the hero using the accent color, not a gradient or alternate font.
- Body copy uses `line-height: 1.65-1.75` and a maximum width of `58ch`.
- Technical labels use uppercase with `0.14em-0.22em` tracking.
- Eyebrows are rare: use one in the hero and at most one more on the home page.

## Layout System

### Page Chassis

- Maximum width: `1440px`.
- Center within the viewport.
- Apply 1px borders to the left, right, and bottom edges on desktop.
- Desktop gutter: `34px`.
- Tablet gutter: `20px`.
- Small-mobile gutter: `16px`.
- Corners remain square throughout the interface.

### Grid

- Use a 12-column desktop grid for page composition.
- Use CSS Grid rather than percentage-based flex calculations.
- Rules and shared edges should align across navigation, hero, metrics, project rows, and footer.
- Prefer horizontal section borders over floating containers.
- Large photos may span the full inner frame; supporting photos can use asymmetric 7/5 or 8/4 splits.

### Spacing

- Navigation height: `60-64px`.
- Hero block padding: `64-80px` top and `56-72px` bottom.
- Major case-study sections: `72-104px` block padding.
- Project index rows: `28-40px` block padding.
- Keep gaps systematic, but let image scale produce visual variety.

## Home Page Anatomy

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

## Project Detail Pages

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
- Images use square corners and 1px borders.
- Use `object-fit: cover` for editorial thumbnails and `contain` for CAD renders, certificates, and diagrams.

### Asset Preparation

- Convert HEIC assets to AVIF or WebP for browser delivery while retaining originals.
- Generate poster images for MOV and MP4 files.
- Provide width and height metadata for every image.
- Use responsive `srcset` sizes; preload only the actual hero media.
- Open certificates and logos in overlays or dedicated detail views rather than placing full-resolution documents on the home page.

## Components

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

- Hero elements entering with a short opacity and `translateY(12px)` sequence
- Project-row arrows shifting on hover
- Image swap crossfades in the featured project plate
- Optional line-drawing animation for an airfoil or planform mark on first load
- View labels updating instantly when project media changes

Do not use:

- Scroll hijacking
- Continuous parallax
- Custom cursors
- More than one looping animation on the page
- Character-by-character headline animation

Timing:

- Hover and active feedback: `100-160ms`
- Content transitions: `220-360ms`
- Entrance sequence: no more than `600ms` total
- Animate only opacity and transform
- Disable nonessential motion under `prefers-reduced-motion: reduce`

## Responsive Behavior

### Desktop: `>= 1024px`

- Full framed chassis
- Single-line navigation
- Hero retains asymmetric text/mark layout
- Metrics form one horizontal strip
- Project rows use three columns
- Featured plate uses a wide cinematic ratio

### Tablet: `768-1023px`

- Reduce gutters to `20px`
- Collapse metrics to two columns
- Project rows use index plus content; evidence moves below the copy
- Keep the large project plate but simplify selectable controls
- Hide sticky case-study navigation

### Mobile: `< 768px`

- Use a strict single content column
- Remove outer chassis side borders if they constrain content
- Keep a compact 60px navigation
- Hero headline remains dominant but does not overflow horizontally
- Metrics use a 2x2 grid or exact cell count equivalent
- Project rows use a narrow `36-44px` index column and one content column
- Evidence panels stack below descriptions and span the content width
- Featured media may use a taller ratio; hide secondary views rather than shrinking them illegibly
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
- Theme preference persists, but the site remains functional without JavaScript.
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

- Build from semantic tokens rather than scattered literal colors.
- Use one radius system: `0px` for all visible containers and controls.
- Use one accent throughout the entire site.
- Avoid generic card abstractions when a border-separated row communicates hierarchy better.
- Do not reproduce Herdr's page copy, terminal UI, mascot placement, purple palette, or exact project-row count.
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
