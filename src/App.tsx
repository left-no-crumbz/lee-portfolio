import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  Menu,
  Plus,
  X,
} from "lucide-react";
import gsap from "gsap";
import {
  email,
  media,
  projects,
  resumeUrl,
  smallMedia,
  stages,
} from "./content";

function ProjectImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      srcSet={`${smallMedia[src]} 640w, ${src} 1280w`}
      sizes="(max-width: 767px) calc(100vw - 40px), 60vw"
      alt={alt}
      width="1280"
      height="960"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

function ResumeLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? "icon-button" : "button secondary"}
      href={resumeUrl ?? `mailto:${email}?subject=Resume%20request`}
      download={resumeUrl ? "Lee-resume.pdf" : undefined}
      aria-label={resumeUrl ? "Download resume" : "Request resume by email"}
      title={resumeUrl ? "Download resume" : "Request resume by email"}
    >
      <ArrowDownToLine size={18} />
      {!compact && (resumeUrl ? "Download resume" : "Request resume")}
    </a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme ?? "ink",
  );
  function changeTheme(next: string) {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("lee-theme-v1", next);
    } catch {
      /* Theme still works without storage. */
    }
  }
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="header">
      <a className="wordmark" href="#top" aria-label="Lee, homepage">
        lee<span>.</span>
      </a>
      <nav
        className={open ? "navigation is-open" : "navigation"}
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
        <div className="theme-switch" aria-label="Color theme">
          {["ink", "paper"].map((value) => (
            <button
              key={value}
              aria-pressed={theme === value}
              onClick={() => changeTheme(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </nav>
      <div className="utilities">
        <a
          className="icon-button"
          href={`mailto:${email}`}
          aria-label="Email Lee"
          title="Email Lee"
        >
          <Mail size={18} />
        </a>
        <ResumeLink compact />
        <button
          className="icon-button menu-toggle"
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
    <section id="uav" className="evidence section-pad">
      <div className="section-heading">
        <h2>Inside the airframe.</h2>
        <span className="technical">
          Fixed-wing UAV / Academic team project
        </span>
      </div>
      <div className="evidence-layout">
        <div className="evidence-sidebar">
          <div
            className="stage-buttons"
            aria-label="Explore UAV project stages"
          >
            {stages.map((item, index) => (
              <button
                key={item.name}
                aria-pressed={active === index}
                aria-controls="evidence-panel"
                onClick={() => setActive(index)}
              >
                <span className="technical">0{index + 1}</span>
                {item.name}
                <ArrowRight size={18} />
              </button>
            ))}
          </div>
          <div
            className="evidence-copy"
            id="evidence-panel"
            ref={panel}
            aria-live="polite"
          >
            <h3>{stage.heading}</h3>
            <p>{stage.text}</p>
            <p className="scope technical">{stage.scope}</p>
          </div>
          <a
            className="text-link"
            href={`mailto:${email}?subject=UAV%20project%20evidence`}
          >
            Request project evidence <ArrowUpRight size={16} />
          </a>
        </div>
        <figure>
          <ProjectImage src={stage.image} alt={stage.alt} />
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
    <section id="work" className="work section-pad">
      <div className="section-heading">
        <h2>
          Selected work<span className="accent">.</span>
        </h2>
        <p>
          Different systems.
          <br />
          The same attention to the details.
        </p>
      </div>
      <div className="index-labels technical">
        <span>Project / discipline</span>
        <span>My contribution / methods</span>
        <span>Evidence</span>
      </div>
      <a href="#uav" className="featured-index">
        <span className="technical">01</span>
        <h3>Fixed-wing UAV</h3>
        <span className="technical">Lead design / SolidWorks + XFLR5</span>
        <span className="text-link">
          Explore above <ArrowUpRight size={18} />
        </span>
      </a>
      {projects.map((project, index) => (
        <details className="project" key={project.title}>
          <summary>
            <div className="project-identity">
              <span className="project-number">0{index + 2}</span>
              <div>
                <span className="technical">
                  {project.discipline}
                  {project.year && ` / ${project.year}`}
                </span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </div>
            <div className="project-role">
              <p>{project.role}</p>
              <span className="technical">{project.methods}</span>
            </div>
            <div className="project-evidence">
              {project.image ? (
                <ProjectImage src={project.image} alt={project.alt} />
              ) : (
                <div className="text-evidence">
                  <span className="technical">{project.evidence}</span>
                  <span>Read the project notes</span>
                </div>
              )}
              <Plus className="expand-icon" size={20} />
            </div>
          </summary>
          <div className="project-detail">
            <span className="technical">Contribution & limitations</span>
            <p>{project.detail}</p>
            <a
              className="text-link"
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
    const context = gsap.context(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        gsap.fromTo(
          ".hero-enter",
          { y: 12, opacity: 0.75 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.36,
            ease: "power3.out",
          },
        );
    }, root);
    return () => context.revert();
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
    <div className="chassis" ref={root} id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero section-pad">
          <div className="hero-intro hero-enter">
            <p className="intro-name">Hi, I’m Lee.</p>
            <span className="technical">Design. Analyze. Build.</span>
          </div>
          <h1 className="hero-enter">
            Aeronautical
            <br />
            <span>engineering.</span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-description hero-enter">
              <p>
                I work across aircraft design, analysis, and hands-on
                builds—turning engineering decisions into things you can
                inspect.
              </p>
              <a className="button primary" href="#work">
                View selected work <ArrowDown size={18} />
              </a>
              <div className="hero-footnote technical">
                B.S. Aeronautical Engineering
                <br />
                Holy Angel University
              </div>
            </div>
            <figure className="hero-figure hero-enter">
              <div className="figure-top technical">
                <span>Featured / Fixed-wing UAV</span>
                <ArrowUpRight size={16} />
              </div>
              <a href="#uav" aria-label="Explore the fixed-wing UAV project">
                <ProjectImage
                  src={media.airframe}
                  alt="Assembled fixed-wing UAV with black wings, a white tail, landing gear, and front-mounted propeller."
                  priority
                />
              </a>
              <figcaption>
                <span>
                  Lead Design Engineer{" "}
                  <span className="caption-separator">/</span> SolidWorks +
                  XFLR5
                </span>
                <span className="status">
                  <span />
                  Not flight-tested
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
        <div className="capability-strip technical">
          <span>Aircraft design</span>
          <span>Stability analysis</span>
          <span>Electronic integration</span>
          <span>Fabrication & assembly</span>
        </div>
        <Evidence />
        <ProjectIndex />
        <section className="about section-pad" id="about">
          <div className="about-title">
            <h2>
              Engineering is
              <br />a team effort.
            </h2>
            <p>
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
            <figcaption>
              <span className="technical">Glider competition / 2026</span>
              <span>
                Team achievement. My contribution: procurement, fabrication, and
                assembly.
              </span>
            </figcaption>
          </figure>
        </section>
        <section className="experience section-pad" id="experience">
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
        <section id="contact" className="contact section-pad">
          <div className="contact-top">
            <span className="technical">Have an engineering opportunity?</span>
            <ArrowUpRight className="contact-arrow" strokeWidth={1} />
          </div>
          <h2>
            Let’s talk
            <br />
            <span>engineering.</span>
          </h2>
          <div className="contact-bottom">
            <div>
              <a className="email-link" href={`mailto:${email}`}>
                {email} <ArrowUpRight size={24} />
              </a>
              <button className="copy-button technical" onClick={copyEmail}>
                {copied ? (
                  <>
                    <Check size={14} /> Email copied
                  </>
                ) : (
                  "Copy email address"
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
            <ResumeLink />
          </div>
        </section>
      </main>
      <footer>
        <span className="technical">© {new Date().getFullYear()} Lee</span>
        <span className="technical">
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
