type MathJaxGlobal = {
  tex?: { inlineMath: [string, string][] };
  svg?: { fontCache: string };
  startup?: { promise?: Promise<void> };
  typesetPromise?: (nodes: (HTMLElement | SVGElement)[]) => Promise<void>;
  typesetClear?: (nodes: (HTMLElement | SVGElement)[]) => void;
} & Record<string, unknown>;

function mjWin(): { MathJax?: MathJaxGlobal } {
  return window as unknown as { MathJax?: MathJaxGlobal };
}

const MATHJAX_SCRIPT_ID = "apstudy-mathjax-tex-svg";
const MATHJAX_SRC = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";

let mathJaxLoadPromise: Promise<void> | null = null;

function ensureMathJaxConfigured(): void {
  if (typeof window === "undefined") {
    return;
  }
  const w = mjWin();
  if (w.MathJax) {
    return;
  }
  w.MathJax = {
    tex: { inlineMath: [["\\(", "\\)"], ["$", "$"]] },
    svg: { fontCache: "global" },
  };
}

function loadMathJaxScript(): Promise<void> {
  if (typeof document === "undefined") {
    return Promise.resolve();
  }
  if (mathJaxLoadPromise) {
    return mathJaxLoadPromise;
  }
  mathJaxLoadPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById(MATHJAX_SCRIPT_ID);
    if (existing) {
      mjWin().MathJax?.startup?.promise?.then(() => resolve()).catch(reject);
      return;
    }
    ensureMathJaxConfigured();
    const s = document.createElement("script");
    s.id = MATHJAX_SCRIPT_ID;
    s.async = true;
    s.src = MATHJAX_SRC;
    s.onload = () => {
      mjWin().MathJax?.startup?.promise?.then(() => resolve()).catch(reject);
    };
    s.onerror = () => reject(new Error("MathJax failed to load"));
    document.head.appendChild(s);
  });
  return mathJaxLoadPromise;
}

/** Typeset MathJax delimiters inside `root` (legacy HTML from extracted chapters). */
export async function typesetLegacyMathIn(root: HTMLElement): Promise<void> {
  await loadMathJaxScript();
  const mj = mjWin().MathJax;
  if (!mj?.typesetPromise) {
    return;
  }
  await mj.typesetPromise([root]);
}

export function clearLegacyMathTypeset(root: HTMLElement): void {
  void mjWin().MathJax?.typesetClear?.([root]);
}
