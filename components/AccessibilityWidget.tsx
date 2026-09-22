"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  X,
  RotateCcw,
  Accessibility,
  Eye,
  Type,
  MousePointer2,
  Hand,
  Palette,
  BookOpen,
  Brain,
  Zap,
  Minus,
  Plus,
  type LucideIcon,
} from "lucide-react";

interface A11yState {
  textSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  dyslexiaFont: boolean;
  readableFont: boolean;
  textAlign: "" | "left" | "center" | "right";
  highContrast: boolean;
  darkMode: boolean;
  lightMode: boolean;
  invertColors: boolean;
  monochrome: boolean;
  lowSaturation: boolean;
  highSaturation: boolean;
  highlightLinks: boolean;
  highlightHeadings: boolean;
  bigCursor: boolean;
  readingGuide: boolean;
  focusHighlight: boolean;
  hideImages: boolean;
  stopAnimations: boolean;
  tooltips: boolean;
}

const defaultState: A11yState = {
  textSize: 0,
  lineHeight: 0,
  letterSpacing: 0,
  wordSpacing: 0,
  dyslexiaFont: false,
  readableFont: false,
  textAlign: "",
  highContrast: false,
  darkMode: false,
  lightMode: false,
  invertColors: false,
  monochrome: false,
  lowSaturation: false,
  highSaturation: false,
  highlightLinks: false,
  highlightHeadings: false,
  bigCursor: false,
  readingGuide: false,
  focusHighlight: false,
  hideImages: false,
  stopAnimations: false,
  tooltips: false,
};

const STORAGE_KEY = "sos-a11y-state";

/* Brand tokens kept in one place so the injected CSS matches the site */
const BRAND_ORANGE = "#EA5D19";
const BRAND_INK = "#11110E";

/* Elements that must never receive the page-wide overrides */
const WIDGET_SCOPE =
  "#a11y-trigger, #a11y-trigger *, #a11y-panel, #a11y-panel *, #a11y-statement, #a11y-statement *";

function loadState(): A11yState {
  if (typeof window === "undefined") return defaultState;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...defaultState, ...JSON.parse(saved) };
  } catch {}
  return defaultState;
}

function saveState(state: A11yState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"profiles" | "content" | "color" | "navigation">(
    "profiles"
  );
  const [state, setState] = useState<A11yState>(defaultState);
  const [showStatement, setShowStatement] = useState(false);
  const guideRef = useRef<HTMLDivElement | null>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const initialized = useRef(false);

  /* Restore saved preferences */
  useEffect(() => {
    if (!initialized.current) {
      setState(loadState());
      initialized.current = true;
    }
  }, []);

  /* Apply every active preference as one injected stylesheet */
  useEffect(() => {
    if (!initialized.current) return;

    saveState(state);

    if (!styleRef.current) {
      const el = document.createElement("style");
      el.id = "a11y-widget-styles";
      document.head.appendChild(el);
      styleRef.current = el;
    }

    const rules: string[] = [];

    if (state.textSize !== 0) {
      rules.push(`html { font-size: ${(1 + state.textSize * 0.1) * 100}% !important; }`);
    }

    if (state.lineHeight !== 0) {
      rules.push(`body, body * { line-height: ${1.6 + state.lineHeight * 0.3} !important; }`);
    }

    if (state.letterSpacing !== 0) {
      rules.push(`body, body * { letter-spacing: ${state.letterSpacing * 0.5}px !important; }`);
    }

    if (state.wordSpacing !== 0) {
      rules.push(`body, body * { word-spacing: ${state.wordSpacing * 2}px !important; }`);
    }

    if (state.dyslexiaFont) {
      rules.push(
        `body, body * { font-family: 'OpenDyslexic', 'Comic Sans MS', 'Trebuchet MS', cursive, sans-serif !important; }`
      );
    }

    if (state.readableFont) {
      rules.push(`body, body * { font-family: Georgia, 'Times New Roman', serif !important; }`);
    }

    if (state.textAlign) {
      rules.push(
        `body p, body li, body span, body div { text-align: ${state.textAlign} !important; }`
      );
    }

    /* Color filters live on <html> so the sticky header keeps working */
    const htmlFilters: string[] = [];
    if (state.highContrast) htmlFilters.push("contrast(1.45)");
    if (state.darkMode) htmlFilters.push("invert(1) hue-rotate(180deg)");
    if (state.invertColors) htmlFilters.push("invert(1)");
    if (state.monochrome) htmlFilters.push("grayscale(1)");
    if (state.lowSaturation) htmlFilters.push("saturate(0.5)");
    if (state.highSaturation) htmlFilters.push("saturate(1.8)");

    if (htmlFilters.length) {
      rules.push(`html { filter: ${htmlFilters.join(" ")} !important; }`);
      if (state.darkMode) {
        /* Re-invert media so photos still look like photos */
        rules.push(
          `html img, html video, html canvas, html [style*="background-image"] { filter: invert(1) hue-rotate(180deg) !important; }`
        );
      }
    }

    if (state.lightMode) {
      rules.push(`
        body { background-color: #ffffff !important; color: ${BRAND_INK} !important; }
        body *:not(#a11y-panel):not(#a11y-panel *):not(#a11y-trigger):not(#a11y-trigger *):not(#a11y-statement):not(#a11y-statement *) {
          background-color: transparent !important;
          background-image: none !important;
          color: ${BRAND_INK} !important;
          border-color: #d4d4d4 !important;
        }
        body a:not(#a11y-panel a):not(#a11y-statement a) { color: #1D4ED8 !important; text-decoration: underline !important; }
      `);
    }

    if (state.highlightLinks) {
      rules.push(
        `body a:not(#a11y-panel a):not(#a11y-statement a):not(#a11y-trigger) { outline: 3px solid ${BRAND_ORANGE} !important; outline-offset: 2px !important; background-color: rgba(234, 93, 25, 0.10) !important; text-decoration: underline !important; }`
      );
    }

    if (state.highlightHeadings) {
      rules.push(
        `body :is(h1, h2, h3, h4, h5, h6):not(#a11y-panel *):not(#a11y-statement *) { outline: 3px solid #0E7490 !important; outline-offset: 2px !important; background-color: rgba(14, 116, 144, 0.10) !important; }`
      );
    }

    if (state.bigCursor) {
      rules.push(
        `* { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='%2311110E' stroke='white' stroke-width='1.2' d='M5 3l14 8-6 2 4 8-3 1-4-8-5 4z'/%3E%3C/svg%3E") 4 2, auto !important; }`
      );
    }

    if (state.focusHighlight) {
      rules.push(
        `*:focus, *:focus-visible { outline: 4px solid ${BRAND_ORANGE} !important; outline-offset: 2px !important; box-shadow: 0 0 0 6px rgba(234, 93, 25, 0.30) !important; }`
      );
    }

    if (state.hideImages) {
      rules.push(
        `body :is(img, video, picture, [role="img"]):not(#a11y-panel *):not(#a11y-statement *) { opacity: 0.04 !important; }`
      );
    }

    if (state.stopAnimations) {
      rules.push(
        `*, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }`
      );
    }

    if (state.tooltips) {
      rules.push(`
        [title]:hover::after, [aria-label]:hover::after {
          content: attr(title) attr(aria-label);
          position: absolute; z-index: 99999; top: 100%; left: 0;
          background: ${BRAND_INK}; color: #ffffff;
          padding: 6px 10px; border-radius: 8px;
          font-size: 14px; white-space: nowrap; pointer-events: none;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }
        [title], [aria-label] { position: relative; }
      `);
    }

    /* Keep the widget itself readable no matter what is switched on */
    rules.push(`
      ${WIDGET_SCOPE} {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
        letter-spacing: normal !important;
        word-spacing: normal !important;
        text-align: left !important;
        opacity: 1 !important;
      }
      #a11y-panel, #a11y-panel *, #a11y-statement, #a11y-statement * { line-height: 1.5 !important; }
    `);

    /* Cancel out invert-style filters on the widget layer only */
    const counterFilters: string[] = [];
    if (state.darkMode) counterFilters.push("invert(1) hue-rotate(180deg)");
    if (state.invertColors) counterFilters.push("invert(1)");

    if (counterFilters.length) {
      rules.push(
        `#a11y-trigger, #a11y-panel, #a11y-statement, #a11y-scrim, #a11y-reading-guide { filter: ${counterFilters.join(
          " "
        )} !important; }`
      );
    }

    styleRef.current.textContent = rules.join("\n");
  }, [state]);

  /* Reading guide follows the pointer */
  useEffect(() => {
    if (!state.readingGuide) {
      guideRef.current?.remove();
      guideRef.current = null;
      return;
    }

    if (!guideRef.current) {
      const guide = document.createElement("div");
      guide.id = "a11y-reading-guide";
      guide.style.cssText = [
        "position: fixed",
        "left: 0",
        "width: 100%",
        "height: 14px",
        "background: rgba(234, 93, 25, 0.24)",
        `border-top: 2px solid ${BRAND_ORANGE}`,
        `border-bottom: 2px solid ${BRAND_ORANGE}`,
        "pointer-events: none",
        "z-index: 9994",
      ].join("; ");
      document.body.appendChild(guide);
      guideRef.current = guide;
    }

    const handleMouse = (e: MouseEvent) => {
      if (guideRef.current) guideRef.current.style.top = `${e.clientY - 7}px`;
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [state.readingGuide]);

  /* Escape closes whatever is on top */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (showStatement) {
        setShowStatement(false);
      } else if (isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, showStatement]);

  const update = useCallback((partial: Partial<A11yState>) => {
    setState((prev) => ({ ...prev, ...partial }));
  }, []);

  const resetAll = useCallback(() => {
    setState(defaultState);
    guideRef.current?.remove();
    guideRef.current = null;
  }, []);

  const applyProfile = useCallback((profile: string) => {
    const base = { ...defaultState };
    switch (profile) {
      case "motor":
        setState({
          ...base,
          bigCursor: true,
          focusHighlight: true,
          highlightLinks: true,
          textSize: 1,
        });
        break;
      case "vision":
        setState({
          ...base,
          textSize: 3,
          lineHeight: 2,
          readableFont: true,
          highlightLinks: true,
          highlightHeadings: true,
          focusHighlight: true,
        });
        break;
      case "colorblind":
        setState({ ...base, monochrome: true, highlightLinks: true, highlightHeadings: true });
        break;
      case "dyslexia":
        setState({
          ...base,
          dyslexiaFont: true,
          textSize: 1,
          lineHeight: 2,
          letterSpacing: 2,
          wordSpacing: 2,
          highlightLinks: true,
        });
        break;
      case "cognitive":
        setState({
          ...base,
          readableFont: true,
          textSize: 1,
          lineHeight: 1,
          highlightLinks: true,
          highlightHeadings: true,
          readingGuide: true,
        });
        break;
      case "seizure":
        setState({ ...base, stopAnimations: true, lowSaturation: true });
        break;
      default:
        setState(base);
    }
  }, []);

  const isDefault = JSON.stringify(state) === JSON.stringify(defaultState);

  const tabs: {
    id: "profiles" | "content" | "color" | "navigation";
    label: string;
    icon: LucideIcon;
  }[] = [
    { id: "profiles", label: "Profiles", icon: Accessibility },
    { id: "content", label: "Content", icon: Type },
    { id: "color", label: "Color", icon: Eye },
    { id: "navigation", label: "Navigation", icon: MousePointer2 },
  ];

  const profiles: { id: string; label: string; icon: LucideIcon }[] = [
    { id: "motor", label: "Motor Impaired", icon: Hand },
    { id: "vision", label: "Visually Impaired", icon: Eye },
    { id: "colorblind", label: "Color Blind", icon: Palette },
    { id: "dyslexia", label: "Dyslexia Friendly", icon: BookOpen },
    { id: "cognitive", label: "Cognitive & ADHD", icon: Brain },
    { id: "seizure", label: "Seizure Safe", icon: Zap },
  ];

  return (
    <>
      {/* Trigger */}
      <button
        id="a11y-trigger"
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        aria-label="Open accessibility options"
        aria-expanded={isOpen}
        aria-controls="a11y-panel"
        title="Accessibility Options"
        className="fixed bottom-5 left-5 z-[9990] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] text-white ring-1 ring-white/25 shadow-[0_10px_30px_-8px_rgba(234,93,25,0.65),_inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_40px_-10px_rgba(234,93,25,0.8),_inset_0_1px_0_rgba(255,255,255,0.25)] sm:bottom-6 sm:left-6 sm:h-14 sm:w-14"
      >
        <Accessibility className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      {/* Scrim */}
      <div
        id="a11y-scrim"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[9995] bg-[#11110E]/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        id="a11y-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Accessibility options"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-[9996] flex h-full w-[360px] max-w-[88vw] flex-col border-r border-gray-200 bg-white shadow-[20px_0_50px_rgba(17,17,14,0.35)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden bg-[#11110E] px-4 py-4 text-white">
          <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-[#EA5D19]/35 blur-[60px]" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/15">
                <Accessibility className="h-5 w-5 text-[#FF6E2E]" />
              </div>
              <div>
                <p className="text-base font-bold leading-tight">Accessibility</p>
                <p className="text-[11px] leading-tight text-gray-400">
                  Adjust this site to suit you
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {!isDefault && (
                <button
                  onClick={resetAll}
                  title="Reset all settings"
                  className="flex items-center gap-1 rounded-lg px-2 py-2 text-xs font-semibold text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </button>
              )}
              <button
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label="Close accessibility options"
                className="rounded-lg p-2 transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex shrink-0 border-b border-gray-200 bg-gray-50">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-1 flex-col items-center gap-1 border-b-2 py-3 text-[11px] font-semibold transition-colors ${
                  active
                    ? "border-[#EA5D19] bg-white text-[#EA5D19]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === "profiles" && (
            <div>
              <p className="mb-3 text-xs leading-relaxed text-gray-500">
                Pick a profile to apply a set of adjustments at once. You can fine-tune anything
                afterward.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {profiles.map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => applyProfile(p.id)}
                      className="group rounded-xl border border-gray-200 p-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#EA5D19]/50 hover:bg-[#EA5D19]/5 hover:shadow-sm"
                    >
                      <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors group-hover:bg-gradient-to-br group-hover:from-[#EA5D19] group-hover:to-[#FF6E2E] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold text-gray-700">{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "content" && (
            <div className="space-y-4">
              <SliderControl
                label="Text Size"
                value={state.textSize}
                min={-2}
                max={5}
                onChange={(v) => update({ textSize: v })}
              />
              <SliderControl
                label="Line Height"
                value={state.lineHeight}
                min={0}
                max={4}
                onChange={(v) => update({ lineHeight: v })}
              />
              <SliderControl
                label="Letter Spacing"
                value={state.letterSpacing}
                min={0}
                max={5}
                onChange={(v) => update({ letterSpacing: v })}
              />
              <SliderControl
                label="Word Spacing"
                value={state.wordSpacing}
                min={0}
                max={5}
                onChange={(v) => update({ wordSpacing: v })}
              />
              <ToggleControl
                label="Dyslexia-Friendly Font"
                active={state.dyslexiaFont}
                onToggle={() => update({ dyslexiaFont: !state.dyslexiaFont, readableFont: false })}
              />
              <ToggleControl
                label="Readable Serif Font"
                active={state.readableFont}
                onToggle={() => update({ readableFont: !state.readableFont, dyslexiaFont: false })}
              />
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Text Alignment
                </p>
                <div className="flex gap-2">
                  {(["", "left", "center", "right"] as const).map((align) => (
                    <button
                      key={align || "default"}
                      onClick={() => update({ textAlign: align })}
                      className={`flex-1 rounded-lg border px-2 py-2 text-[11px] font-semibold capitalize transition-colors ${
                        state.textAlign === align
                          ? "border-[#EA5D19] bg-[#EA5D19] text-white"
                          : "border-gray-200 text-gray-600 hover:border-[#EA5D19]/40 hover:text-[#EA5D19]"
                      }`}
                    >
                      {align || "Default"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "color" && (
            <div className="space-y-3">
              <ToggleControl
                label="High Contrast"
                active={state.highContrast}
                onToggle={() => update({ highContrast: !state.highContrast })}
              />
              <ToggleControl
                label="Dark Mode"
                active={state.darkMode}
                onToggle={() =>
                  update({ darkMode: !state.darkMode, lightMode: false, invertColors: false })
                }
              />
              <ToggleControl
                label="Light Mode"
                active={state.lightMode}
                onToggle={() =>
                  update({ lightMode: !state.lightMode, darkMode: false, invertColors: false })
                }
              />
              <ToggleControl
                label="Invert Colors"
                active={state.invertColors}
                onToggle={() =>
                  update({ invertColors: !state.invertColors, darkMode: false, lightMode: false })
                }
              />
              <ToggleControl
                label="Monochrome"
                active={state.monochrome}
                onToggle={() =>
                  update({
                    monochrome: !state.monochrome,
                    lowSaturation: false,
                    highSaturation: false,
                  })
                }
              />
              <ToggleControl
                label="Low Saturation"
                active={state.lowSaturation}
                onToggle={() =>
                  update({
                    lowSaturation: !state.lowSaturation,
                    monochrome: false,
                    highSaturation: false,
                  })
                }
              />
              <ToggleControl
                label="High Saturation"
                active={state.highSaturation}
                onToggle={() =>
                  update({
                    highSaturation: !state.highSaturation,
                    monochrome: false,
                    lowSaturation: false,
                  })
                }
              />
              <ToggleControl
                label="Highlight Links"
                active={state.highlightLinks}
                onToggle={() => update({ highlightLinks: !state.highlightLinks })}
              />
              <ToggleControl
                label="Highlight Headings"
                active={state.highlightHeadings}
                onToggle={() => update({ highlightHeadings: !state.highlightHeadings })}
              />
            </div>
          )}

          {activeTab === "navigation" && (
            <div className="space-y-3">
              <ToggleControl
                label="Big Cursor"
                active={state.bigCursor}
                onToggle={() => update({ bigCursor: !state.bigCursor })}
              />
              <ToggleControl
                label="Reading Guide"
                active={state.readingGuide}
                onToggle={() => update({ readingGuide: !state.readingGuide })}
              />
              <ToggleControl
                label="Focus Highlight"
                active={state.focusHighlight}
                onToggle={() => update({ focusHighlight: !state.focusHighlight })}
              />
              <ToggleControl
                label="Hide Images"
                active={state.hideImages}
                onToggle={() => update({ hideImages: !state.hideImages })}
              />
              <ToggleControl
                label="Stop Animations"
                active={state.stopAnimations}
                onToggle={() => update({ stopAnimations: !state.stopAnimations })}
              />
              <ToggleControl
                label="Show Tooltips"
                active={state.tooltips}
                onToggle={() => update({ tooltips: !state.tooltips })}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-gray-200 bg-gray-50 px-4 py-3">
          <button
            onClick={() => setShowStatement(true)}
            className="w-full text-center text-xs font-semibold text-gray-500 transition-colors hover:text-[#EA5D19]"
          >
            Accessibility Statement
          </button>
        </div>
      </div>

      {/* Statement */}
      {showStatement && (
        <div
          id="a11y-statement"
          role="dialog"
          aria-modal="true"
          aria-label="Accessibility statement"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowStatement(false)}
        >
          <div className="absolute inset-0 bg-[#11110E]/75 backdrop-blur-sm" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[82vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-[0_30px_60px_rgba(17,17,14,0.45)] ring-1 ring-gray-200"
          >
            <button
              onClick={() => setShowStatement(false)}
              aria-label="Close accessibility statement"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="mb-4 pr-8 text-xl font-bold text-[#11110E]">Accessibility Statement</h2>
            <div className="space-y-3 text-sm leading-relaxed text-gray-600">
              <p>
                SOS Plumbing and Air is committed to making our website usable by everyone,
                including people with disabilities. We review and improve the experience on an
                ongoing basis.
              </p>
              <h3 className="pt-1 font-semibold text-[#11110E]">Conformance Status</h3>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
                These guidelines explain how to make web content more accessible for people with
                disabilities and more user-friendly for everyone.
              </p>
              <h3 className="pt-1 font-semibold text-[#11110E]">Accessibility Features</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Adjustable text size, spacing, and font choices</li>
                <li>High contrast, dark mode, and color adjustment options</li>
                <li>Semantic headings and landmarks for screen readers</li>
                <li>Full keyboard navigation support</li>
                <li>Reading guide and enhanced focus indicators</li>
                <li>Animation controls for seizure safety</li>
                <li>Pre-configured profiles for common needs</li>
              </ul>
              <h3 className="pt-1 font-semibold text-[#11110E]">Contact Us</h3>
              <p>
                If you run into an accessibility barrier anywhere on this site, please email{" "}
                <a
                  href="mailto:info@waterheatersos.com"
                  className="font-semibold text-[#EA5D19] underline"
                >
                  info@waterheatersos.com
                </a>{" "}
                or call{" "}
                <a href="tel:8006974014" className="font-semibold text-[#EA5D19] underline">
                  (800) 697-4014
                </a>
                . We welcome your feedback and will make reasonable efforts to resolve the issue.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* Sub-components */

function ToggleControl({
  label,
  active,
  onToggle,
}: {
  label: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={active}
      className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition-colors ${
        active
          ? "border-[#EA5D19]/50 bg-[#EA5D19]/5"
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      <span
        className={`relative h-6 w-10 shrink-0 rounded-full transition-colors ${
          active ? "bg-[#EA5D19]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
            active ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </span>
    </button>
  );
}

function SliderControl({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            aria-label={`Decrease ${label}`}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-[#EA5D19]/40 hover:text-[#EA5D19] disabled:opacity-30"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-6 text-center text-xs font-bold text-gray-700">{value}</span>
          <button
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            aria-label={`Increase ${label}`}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-[#EA5D19]/40 hover:text-[#EA5D19] disabled:opacity-30"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] transition-all"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );
}
