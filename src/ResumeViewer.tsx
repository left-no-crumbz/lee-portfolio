import { useEffect, useRef } from "react";
import { ArrowDownToLine, ArrowUpRight, ExternalLink, FileText, X } from "lucide-react";
import { resumeUrl } from "./content";

export default function ResumeViewer({
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
