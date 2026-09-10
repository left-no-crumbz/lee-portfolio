import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
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

function ResumeLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? "icon-button" : "button"}
      href={resumeUrl}
      download="Lee-Andrei-Tuazon-Resume.pdf"
      aria-label="Download resume"
      title="Download resume"
    >
      <ArrowDownToLine size={18} />
      {!compact && "Download resume"}
    </a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="relative flex h-16 items-center justify-between gap-5 border-b border-line px-4 min-[390px]:px-5 md:h-19 md:px-8.5 lg:gap-8">
      <a className="flex items-center gap-2 font-display text-4xl font-black tracking-[-0.04em]" href="#top" aria-label="Lee, homepage">
        <img src={notionFace} alt="" className="h-12 w-12" />
        lee<span className="text-accent">.</span>
      </a>
      <nav
        className={`navigation ${open ? "is-open flex" : "hidden"} absolute inset-x-0 top-16 z-20 flex-col gap-0 border-b border-line-strong bg-surface p-5 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:p-0 lg:gap-7 [&>a]:border-b [&>a]:border-line [&>a]:py-4 [&>a]:text-[11px] [&>a]:uppercase [&>a]:tracking-[0.06em] [&>a]:transition-colors [&>a:hover]:text-accent md:[&>a]:border-0`}
        id="navigation"
        aria-label="Main navigation"
      >
        <a href="#work" onClick={() => setOpen(false)}>
          Work
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#experience" onClick={() => setOpen(false)}>
          Experience
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
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
        <ResumeLink compact />
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
        <h2>Inside the airframe.</h2>
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
            href={`mailto:${email}?subject=UAV%20project%20evidence`}
          >
            Request project evidence <ArrowUpRight size={16} />
          </a>
        </div>
        <figure className="min-w-0">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="technical text-muted">{stage.name} / Project photograph</span>
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
      <a href="#uav" className="group flex flex-wrap items-center gap-3 border-b border-line py-6 md:gap-6">
        <span className="technical text-muted">01</span>
        <h3 className="text-[22px] transition-colors group-hover:text-accent">Fixed-wing UAV</h3>
        <span className="technical order-3 w-full text-muted md:order-0 md:w-auto">Lead design / SolidWorks + XFLR5</span>
        <span className="text-link ml-auto">
          Explore above <ArrowUpRight size={18} />
        </span>
      </a>
      {projects.map((project, index) => (
        <details className="project group border-b border-line" key={project.title}>
          <summary className="grid list-none items-center gap-5 py-7 transition-colors hover:bg-accent/5 md:grid-cols-[5fr_3fr_3fr] md:py-7.5 lg:gap-7.5">
            <div className="flex gap-3 lg:gap-5.5">
              <span className="min-w-9 font-display text-[32px] leading-none font-extrabold text-muted/60 transition-colors group-open:text-accent md:min-w-10 lg:min-w-13.5 lg:text-[44px]">0{index + 2}</span>
              <div>
                <span className="technical text-muted">
                  {project.discipline}
                  {project.year && ` / ${project.year}`}
                </span>
                <h3 className="mt-2 mb-3 text-[25px] transition-colors group-hover:text-accent group-open:text-accent md:text-[22px] lg:text-[25px]">{project.title}</h3>
                <p className="text-xs md:max-w-[30ch]">{project.summary}</p>
              </div>
            </div>
            <div className="pl-12 md:pl-0">
              <p className="mb-2 text-[13px] md:mb-3">{project.role}</p>
              <span className="technical text-muted">{project.methods}</span>
            </div>
            <div className="ml-12 flex items-center gap-4 md:ml-0">
              <div className="min-w-0 flex-1 overflow-hidden">
                <ProjectImage className="transition-transform duration-500 ease-out-expo group-hover:scale-[1.025]" src={project.image} alt={project.alt} sizes="(max-width: 767px) calc(100vw - 124px), (min-width: 1440px) 310px, 23vw" />
                <span className="technical mt-2 block text-muted group-open:text-accent">
                  <span className="group-open:hidden">Open project notes</span>
                  <span className="hidden group-open:inline">Close project notes</span>
                </span>
              </div>
              <Plus className="shrink-0 transition-transform duration-300 group-open:rotate-45 group-open:text-accent" size={20} />
            </div>
          </summary>
          <div className="project-detail grid gap-4 pt-2 pb-8 min-[390px]:pl-12 md:grid-cols-[1fr_2fr] lg:pl-19">
            <span className="technical text-accent">Contribution & limitations</span>
            <p className="max-w-[70ch] text-sm">{project.detail}</p>
            <a
              className="text-link md:col-start-2"
              href={`mailto:${email}?subject=${encodeURIComponent(`${project.title} — project enquiry`)}`}
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
  useEffect(() => {
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
        reveal = gsap.fromTo(index.querySelectorAll("summary"), { x: 18, opacity: 0.6 }, {
          x: 0, opacity: 1, stagger: 0.06, duration: 0.4, ease: "expo.out",
        });
        observer.disconnect();
      }, { threshold: 0.15 });
      if (index) observer.observe(index);
      return () => {
        observer.disconnect();
        reveal?.revert();
      };
    }, root);
    return () => motion.revert();
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
    <div className="mx-auto max-w-360 border-line md:border-x min-[1441px]:mt-5 min-[1441px]:border-t" ref={root} id="top">
      <a className="absolute -top-24 left-5 z-50 bg-accent p-4 text-accent-ink focus:top-2" href="#main">
        Skip to content
      </a>
      <Navigation />
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
              <a className="button mt-6 border-accent! bg-accent text-accent-ink hover:bg-ink hover:text-canvas" href="#work">
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
              <br />a team effort.
            </h2>
            <p className="my-6 max-w-[36ch] text-sm">
              I enjoy the work between a drawing and a finished build: making
              decisions, understanding constraints, and putting the pieces
              together.
            </p>
            <a className="text-link" href="#experience">
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
            <h2>Beyond the project.</h2>
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
              <ResumeLink />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-4 border-y border-line px-4 py-6 text-muted min-[390px]:px-5 md:px-8.5">
        <span className="technical">© {new Date().getFullYear()} Lee</span>
        <span className="technical order-3 w-full md:order-0 md:w-auto">
          Built with intention. Backed by evidence.
        </span>
        <a href="#top" className="text-link technical">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}

export default App;
