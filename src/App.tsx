import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  FileText,
  Mail,
  Linkedin,
  Maximize2,
  Minimize2,
  Menu,
  Plus,
  X,
} from "lucide-react";
import gsap from "gsap";
import notionFace from "../assets/myself/my-notion-face-transparent.png";
import {
  email,
  media,
  mediaDimensions,
  linkedInUrl,
  projects,
  resumeUrl,
  smallMedia,
  stages,
} from "./content";

function ProjectImage({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 767px) calc(100vw - 40px), 60vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <img
      className={`block h-auto w-full ${className}`}
      src={src}
      srcSet={`${smallMedia[src]} 640w, ${src} 1280w`}
      sizes={sizes}
      alt={alt}
      width={mediaDimensions[src].width}
      height={mediaDimensions[src].height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

function ResumeTrigger({
  compact = false,
  onOpen,
}: {
  compact?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className={compact ? "icon-button" : "button"}
      onClick={onOpen}
      aria-label={compact ? "View resume" : "View resume (opens preview)"}
      title={compact ? "View resume" : "View resume"}
    >
      {compact ? (
        <FileText size={18} />
      ) : (
        <>
          <FileText size={18} />
          View resume
        </>
      )}
    </button>
  );
}

function ResumeViewer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="resume-scrim fixed inset-0 z-50 flex items-end justify-center bg-[#0b0b0d]/70 p-0 sm:items-center sm:p-6 md:p-10"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        className="resume-panel flex h-[92dvh] w-full max-w-5xl flex-col border border-line-strong bg-surface sm:h-[84vh]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line bg-canvas px-4 py-3 md:px-5">
          <span className="inline-flex size-9 shrink-0 items-center justify-center border border-line-strong text-accent">
            <FileText size={18} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-ink" title="Lee-Andrei-Tuazon-Resume.pdf">
              Lee-Andrei-Tuazon-Resume.pdf
            </p>
            <p className="technical text-muted">Resume / PDF preview</p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 min-[390px]:gap-2">
            <a
              className="icon-button"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open resume in new tab"
              title="Open in new tab"
            >
              <ExternalLink size={18} />
            </a>
            <a
              className="button min-h-11! gap-2! px-3! py-2! md:px-5! [&>svg]:hover:translate-y-0!"
              href={resumeUrl}
              download="Lee-Andrei-Tuazon-Resume.pdf"
              aria-label="Download resume PDF"
              title="Download PDF"
            >
              <ArrowDownToLine size={18} />
              <span className="hidden min-[390px]:inline">Download</span>
            </a>
            <button
              ref={closeRef}
              type="button"
              className="icon-button"
              onClick={onClose}
              aria-label="Close resume preview"
              title="Close preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 bg-[#525659]">
          <object
            data={resumeUrl}
            type="application/pdf"
            aria-label="Lee resume PDF preview"
            className="block h-full w-full"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 bg-surface p-8 text-center">
              <p className="max-w-[42ch] text-sm">
                This browser can’t show the PDF preview. Open it in a new tab
                or download a copy instead.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  className="button"
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in new tab <ArrowUpRight size={16} />
                </a>
                <a
                  className="button border-accent! bg-accent text-accent-ink hover:bg-ink hover:text-canvas"
                  href={resumeUrl}
                  download="Lee-Andrei-Tuazon-Resume.pdf"
                >
                  <ArrowDownToLine size={18} /> Download PDF
                </a>
              </div>
            </div>
          </object>
        </div>
        <div className="technical flex items-center justify-between gap-4 border-t border-line px-4 py-3 text-muted md:px-5">
          <span>PDF preview</span>
          <span className="hidden min-[390px]:inline">
            Download available above
          </span>
        </div>
      </div>
    </div>
  );
}

const NAV_SECTIONS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

function useActiveSection() {
  const [active, setActive] = useState("#work");
  const scrollTimeout = useRef<number | undefined>(undefined);
  useEffect(() => {
    const sectionEls = NAV_SECTIONS
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean) as HTMLElement[];
    if (!sectionEls.length) return;
    function update() {
      if (scrollTimeout.current) return;
      const doc = document.documentElement;
      // Bottom-of-page guard: the last section is too short for its
      // midpoint to ever reach viewport center, so force CONTACT.
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 8) {
        setActive("#contact");
        return;
      }
      // Top-edge rule (monotonic in both scroll directions): the active
      // section is the last one whose top has crossed above the viewport
      // midpoint (offset for the sticky header). Unlike closest-midpoint,
      // this can't skip EXPERIENCE when scrolling bottom-to-top.
      const line = window.innerHeight * 0.5;
      let current = sectionEls[0].id;
      for (const el of sectionEls) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(`#${current}`);
    }
    const onScroll = () => requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const navigate = useCallback((href: string) => {
    setActive(href);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => { scrollTimeout.current = undefined; }, 800);
  }, []);
  return [active, navigate] as const;
}

function Navigation({ activeSection, onNavigate, onViewResume }: { activeSection: string; onNavigate: (href: string) => void; onViewResume: () => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-5 border-b border-line bg-canvas px-4 min-[390px]:px-5 md:h-19 md:px-8.5 lg:gap-8">
      <a className="flex items-center gap-2 font-display text-4xl font-black tracking-[-0.04em]" href="#top" aria-label="Lee, homepage">
        <img src={notionFace} alt="" className="h-12 w-12" />
        lee<span className="text-accent">.</span>
      </a>
      <nav
        className={`navigation ${open ? "is-open flex" : "hidden"} absolute inset-x-0 top-16 z-20 flex-col gap-0 border-b border-line-strong bg-surface p-5 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:p-0 lg:gap-7 [&>a]:border-b [&>a]:border-line [&>a]:py-4 [&>a]:text-[11px] [&>a]:uppercase [&>a]:tracking-[0.06em] [&>a]:transition-colors [&>a:hover]:text-accent md:[&>a]:border-0`}
        id="navigation"
        aria-label="Main navigation"
      >
        {NAV_SECTIONS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={href === activeSection ? "text-accent" : undefined}
            onClick={() => { onNavigate(href); setOpen(false); }}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="flex gap-1.5 min-[390px]:gap-2">
        <a
          className="icon-button"
          href={`mailto:${email}`}
          aria-label="Email Lee"
          title="Email Lee"
        >
          <Mail size={18} />
        </a>
        <ResumeTrigger compact onOpen={onViewResume} />
        <a className="icon-button" href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="Lee on LinkedIn (opens in new tab)" title="Lee on LinkedIn">
          <Linkedin size={18} />
        </a>
        <button
          className="icon-button md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function Evidence() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = gsap.fromTo(
      panel.current,
      { opacity: 0.65, y: 5 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
    );
    return () => {
      animation.kill();
    };
  }, [active]);
  const stage = stages[active];
  return (
    <section id="uav" className="section-pad">
      <div className="section-heading">
        <h2>Inside the airframe<span className="text-accent">.</span></h2>
        <span className="technical">
          Fixed-wing UAV / Academic team project
        </span>
      </div>
      <div className={`grid items-start gap-6 md:gap-7 lg:gap-7.5 ${expanded ? "md:grid-cols-1" : "md:grid-cols-[4fr_8fr]"}`}>
        <div>
          <div
            className="flex border-t border-line md:block"
            aria-label="Explore UAV project stages"
          >
            {stages.map((item, index) => (
              <button
                key={item.name}
                className="group flex w-full items-center justify-center gap-1.5 border-b border-line px-1 py-4 text-[13px] text-left transition-colors hover:bg-accent/10 aria-pressed:bg-accent/10 aria-pressed:text-accent-readable md:justify-start md:gap-4 md:px-3 md:text-base"
                aria-pressed={active === index}
                aria-controls="evidence-panel"
                onClick={() => setActive(index)}
              >
                <span className="technical text-muted">0{index + 1}</span>
                {item.name}
                <ArrowRight className="ml-auto hidden transition-transform duration-300 group-hover:translate-x-1 group-aria-pressed:translate-x-1 md:block" size={18} />
              </button>
            ))}
          </div>
          <div
            className="pt-6 pb-5 md:min-h-71.25 md:pt-7 [&>h3]:mb-4 [&>h3]:text-2xl [&>p]:text-sm"
            id="evidence-panel"
            ref={panel}
            aria-live="polite"
          >
            <h3>{stage.heading}</h3>
            <p>{stage.text}</p>
            <p className="technical pt-4 text-muted md:pt-5.5">{stage.scope}</p>
          </div>
          <a
            className="text-link border-b border-line-strong"
            href={`mailto:${email}?subject=UAV%20Project%20Evidence`}
          >
            Request project evidence <ArrowUpRight size={16} />
          </a>
        </div>
        <figure className="min-w-0">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="technical text-muted">{stage.name} / {stage.mediaLabel}</span>
            <button className="icon-button hidden md:inline-flex" onClick={() => setExpanded(!expanded)} aria-pressed={expanded} aria-label={expanded ? "Restore image size" : "Enlarge project image"} title={expanded ? "Restore image size" : "Enlarge project image"}>
              {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
          <div key={active} className="evidence-media">
            <ProjectImage src={stage.image} alt={stage.alt} sizes={expanded ? "(min-width: 1440px) 1370px, calc(100vw - 68px)" : undefined} />
          </div>
          <figcaption>
            <span className="technical">FIG. 01 / {stage.name}</span>
            <span>{stage.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function ProjectIndex() {
  return (
    <section id="work" className="section-pad border-t border-line">
      <div className="section-heading">
        <h2>
          Selected work<span className="text-accent">.</span>
        </h2>
        <p>
          Different systems.
          <br />
          The same attention to the details.
        </p>
      </div>
      <div className="technical hidden grid-cols-[5fr_3fr_3fr] gap-5 border-b border-line pb-4 text-muted md:grid lg:gap-7.5">
        <span>Project / discipline</span>
        <span>My contribution / methods</span>
        <span>Evidence</span>
      </div>
      <div className="work-rule" aria-hidden="true" />
      <a href="#uav" className="group work-row flex flex-wrap items-center gap-3 border-b border-line py-6 md:gap-6">
        <span className="technical text-muted">01</span>
        <h3 className="project-title text-[22px] transition-colors group-hover:text-accent">Fixed-wing UAV</h3>
        <span className="technical order-3 w-full text-muted md:order-0 md:w-auto">Lead design / SolidWorks + XFLR5</span>
        <span className="text-link return-link ml-auto">
          Explore above <ArrowUpRight size={18} />
        </span>
      </a>
      {projects.map((project, index) => (
        <details className="project group border-b border-line" key={project.title}>
          <summary className="project-summary grid list-none items-center gap-5 py-7 transition-colors hover:bg-accent/5 md:grid-cols-[5fr_3fr_3fr] md:py-7.5 lg:gap-7.5">
            <div className="flex gap-3 lg:gap-5.5">
              <span className="project-num min-w-9 font-display text-[32px] leading-none font-extrabold text-muted/60 transition-colors group-hover:text-accent group-open:text-accent md:min-w-10 lg:min-w-13.5 lg:text-[44px]">0{index + 2}</span>
              <div>
                <span className="technical text-muted">
                  {project.discipline}
                  {project.year && ` / ${project.year}`}
                </span>
                <h3 className="project-title mt-2 mb-3 text-[25px] transition-colors group-hover:text-accent group-open:text-accent md:text-[22px] lg:text-[25px]">{project.title}</h3>
                <p className="text-xs md:max-w-[30ch]">{project.summary}</p>
              </div>
            </div>
            <div className="pl-12 md:pl-0">
              <p className="mb-2 text-[13px] md:mb-3">{project.role}</p>
              <span className="technical text-muted">{project.methods}</span>
            </div>
            <div className="ml-12 flex items-center gap-4 md:ml-0">
              <div className="project-thumb min-w-0 flex-1 overflow-hidden">
                <div className="thumb-frame">
                  <ProjectImage className="transition-transform duration-500 ease-out-expo group-hover:scale-[1.025]" src={project.image} alt={project.alt} sizes="(max-width: 767px) calc(100vw - 124px), (min-width: 1440px) 310px, 23vw" />
                  <span className="thumb-bar technical" aria-hidden="true">
                    <span>Fig. 0{index + 2} / Inspect</span>
                  </span>
                  <span className="thumb-corners" aria-hidden="true">
                    <i className="tick tl" />
                    <i className="tick tr" />
                    <i className="tick bl" />
                    <i className="tick br" />
                  </span>
                </div>
                <span className="technical mt-2 block text-muted group-open:text-accent">
                  <span className="group-open:hidden">Open project notes</span>
                  <span className="hidden group-open:inline">Close project notes</span>
                </span>
              </div>
              <Plus className="project-plus shrink-0 transition-transform duration-300 group-open:rotate-45 group-open:text-accent" size={20} />
            </div>
          </summary>
          <div className="project-detail grid gap-4 pt-2 pb-8 min-[390px]:pl-12 md:grid-cols-[1fr_2fr] lg:pl-19">
            <span className="technical detail-item detail-stamp text-accent">Contribution & limitations</span>
            <p className="detail-item max-w-[70ch] text-sm">{project.detail}</p>
            <a
              className="text-link detail-item md:col-start-2"
              href={`mailto:${email}?subject=${encodeURIComponent(`${project.title} — Project Inquiry`)}`}
            >
              Discuss this project <ArrowUpRight size={16} />
            </a>
          </div>
        </details>
      ))}
    </section>
  );
}

function App() {
  const root = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, navigate] = useActiveSection();
  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);
  useEffect(() => {
    // Hairline plot state: independent of authored motion so reduced-motion
    // still resolves to the drawn end-state (transitions are disabled there).
    const indexEl = root.current?.querySelector("#work");
    let viewObserver: IntersectionObserver | undefined;
    if (indexEl) {
      viewObserver = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        indexEl.classList.add("is-inview");
        viewObserver?.disconnect();
      }, { threshold: 0.15 });
      viewObserver.observe(indexEl);
    }
    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".hero-enter", { y: 24, opacity: 0.4 }, {
        y: 0, opacity: 1, stagger: 0.06, duration: 0.42, ease: "expo.out",
      });
      // Reveal the evidence index as a sequence once it enters the viewport.
      const index = root.current?.querySelector("#work");
      let reveal: gsap.core.Tween | undefined;
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || !index) return;
        reveal = gsap.fromTo(index.querySelectorAll("summary, .work-row"), { x: 18, opacity: 0.6 }, {
          x: 0, opacity: 1, stagger: 0.06, duration: 0.4, ease: "expo.out",
          clearProps: "transform",
        });
        observer.disconnect();
      }, { threshold: 0.15 });
      if (index) observer.observe(index);
      return () => {
        observer.disconnect();
        reveal?.revert();
      };
    }, root);
    return () => {
      viewObserver?.disconnect();
      motion.revert();
    };
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <div className="mx-auto max-w-360 border-line bg-canvas md:border-x min-[1441px]:mt-5 min-[1441px]:border-t" ref={root} id="top">
      <a className="absolute -top-24 left-5 z-50 bg-accent p-4 text-accent-ink focus:top-2" href="#main">
        Skip to content
      </a>
      <Navigation activeSection={activeSection} onNavigate={navigate} onViewResume={openResume} />
      <main id="main">
        <section className="section-pad pt-8! pb-7! md:pt-12! md:pb-10!">
          <div className="hero-enter mb-6 flex items-center justify-between gap-5">
            <p className="text-base text-ink md:text-lg">Hi, I’m Lee.</p>
            <span className="technical max-w-[16ch] text-right text-muted md:max-w-none">Design. Analyze. Build.</span>
          </div>
          <h1 className="hero-enter text-[clamp(2.5rem,10vw,5rem)] leading-[0.94] font-black tracking-[-0.04em] md:text-[clamp(4rem,8.4vw,7.5rem)]">
            Aeronautical
            <br />
            <span className="text-accent">engineering.</span>
          </h1>
          <div className="mt-7 grid items-start gap-7.5 md:mt-9 md:grid-cols-[5fr_7fr] lg:gap-12.5">
            <div className="hero-enter md:max-w-91.25 md:pt-3">
              <p className="max-w-[42ch] text-sm md:max-w-[34ch] md:text-base">
                I work across aircraft design, analysis, and hands-on
                builds—turning engineering decisions into things you can
                inspect.
              </p>
              <a className="button mt-6 border-accent! bg-accent text-accent-ink hover:bg-ink hover:text-canvas" href="#uav">
                View selected work <ArrowDown size={18} />
              </a>
              <div className="technical mt-10 hidden text-muted md:block">
                B.S. Aeronautical Engineering
                <br />
                Holy Angel University
              </div>
            </div>
            <figure className="hero-enter min-w-0 border border-line-strong bg-canvas">
              <div className="technical flex items-center justify-between gap-3 bg-surface px-3 py-3 md:px-4">
                <span>Featured / Fixed-wing UAV</span>
                <ArrowUpRight size={16} />
              </div>
              <a className="group block overflow-hidden" href="#uav" aria-label="Explore the fixed-wing UAV project">
                <ProjectImage
                  src={media.airframe}
                  alt="Assembled fixed-wing UAV with black wings, a white tail, landing gear, and front-mounted propeller."
                  priority
                  className="transition-transform duration-500 ease-out-expo group-hover:scale-[1.025]"
                />
              </a>
              <figcaption className="flex-col gap-2 px-3 py-3 text-[11px] md:px-4 xl:flex-row xl:justify-between">
                <span>
                  Lead Design Engineer{" "}
                  <span className="px-1 text-muted">/</span> SolidWorks +
                  XFLR5
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span className="size-1.5 rounded-full border border-accent" />
                  Not flight-tested
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
        <div className="technical grid grid-cols-2 gap-3 border-y border-line px-4 py-5 text-muted min-[390px]:px-5 md:flex md:justify-between md:gap-5 md:px-8.5">
          <span>Aircraft design</span>
          <span>Stability analysis</span>
          <span>Electronic integration</span>
          <span>Fabrication & assembly</span>
        </div>
        <Evidence />
        <ProjectIndex />
        <section className="section-pad grid items-start gap-7.5 border-y border-line bg-surface md:grid-cols-[5fr_7fr] md:gap-10 lg:gap-17.5" id="about">
          <div>
            <h2>
              Engineering is
              <br />a team effort<span className="text-accent">.</span>
            </h2>
            <p className="my-6 max-w-[36ch] text-sm">
              I enjoy the work between a drawing and a finished build: making
              decisions, understanding constraints, and putting the pieces
              together.
            </p>
            <a className="text-link link-down" href="#experience">
              My experience <ArrowDown size={16} />
            </a>
          </div>
          <figure>
            <ProjectImage
              src={media.competition}
              alt="Lee and fellow glider competition team members with their aircraft and competition recognition."
            />
            <figcaption className="flex-col! gap-1! pb-0">
              <span className="technical">Glider competition / 2026</span>
              <span>
                Team achievement. My contribution: procurement, fabrication, and
                assembly.
              </span>
            </figcaption>
          </figure>
        </section>
        <section className="section-pad" id="experience">
          <div className="section-heading">
            <h2>Beyond the project<span className="text-accent">.</span></h2>
            <span className="technical">Experience & education</span>
          </div>
          <div className="experience-row">
            <span className="technical">2025 / Internship</span>
            <div>
              <h3>Quality Engineering Intern</h3>
              <p>SEAIR International, Inc.</p>
            </div>
            <p>
              Practical experience in an aviation quality environment. Specific
              work details are confidential.
            </p>
          </div>
          <div className="experience-row">
            <span className="technical">2025 / Industry work</span>
            <div>
              <h3>Aerodynamics Analyst</h3>
              <p>Klimatech Innovative Solutions</p>
            </div>
            <p>
              CFD setup, analysis, and conclusions for a vertical-axis wind
              turbine project.
            </p>
          </div>
          <div className="experience-row">
            <span className="technical">2022–2026 / Education</span>
            <div>
              <h3>B.S. Aeronautical Engineering</h3>
              <p>Holy Angel University</p>
            </div>
            <p>
              Magna cum laude.
              <br />
              An academic foundation in aircraft design, analysis, and
              engineering practice.
            </p>
          </div>
        </section>
        <section id="contact" className="section-pad border-t border-line bg-surface md:pb-16">
          <div className="flex items-start justify-between gap-3">
          <h2 className="text-[clamp(2.6rem,10vw,4.8rem)] leading-[0.94] md:text-[clamp(3rem,7.8vw,7rem)]">
            Let’s talk
            <br />
            <span className="text-accent">engineering.</span>
          </h2>
            <ArrowUpRight className="hidden size-17.5 shrink-0 text-accent md:block" strokeWidth={1} />
          </div>
          <p className="mt-6 text-sm">Have an engineering opportunity?</p>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 md:mt-12 md:flex-row md:items-end">
            <div>
              <a className="group flex items-center gap-2 text-[clamp(14px,4.2vw,22px)] transition-colors hover:text-accent-readable md:gap-4 md:text-[clamp(16px,2vw,25px)]" href={`mailto:${email}`}>
                {email} <ArrowUpRight size={24} />
              </a>
              <button className="technical flex min-h-11 items-center gap-2 pt-3 normal-case text-muted transition-colors hover:text-accent-readable" onClick={copyEmail}>
                {copied ? (
                  <>
                    <Check size={14} /> Email copied
                  </>
                ) : (
                  copyError ? "Copy unavailable — use email link" : "Copy email address"
                )}
              </button>
              <span className="sr-only" role="status">
                {copied
                  ? "Email address copied to clipboard."
                  : copyError
                    ? `Copy unavailable. Email Lee at ${email}.`
                    : ""}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a className="icon-button" href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="Lee on LinkedIn (opens in new tab)" title="Lee on LinkedIn"><Linkedin size={18} /></a>
              <ResumeTrigger onOpen={openResume} />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-4 border-y border-line px-4 py-6 text-muted min-[390px]:px-5 md:px-8.5">
        <span className="technical">© {new Date().getFullYear()} Lee</span>
        <a href="#top" className="text-link technical">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
      <ResumeViewer open={resumeOpen} onClose={closeResume} />
    </div>
  );
}

export default App;
