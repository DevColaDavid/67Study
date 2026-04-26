import { BlockMath, InlineMath } from "react-katex";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";

type ChapterProps = {
  id: string;
  title: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
};

export function Chapter({ id, title, defaultOpen = true, children }: ChapterProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) {
      return;
    }
    const expand = () => setOpen(true);
    el.addEventListener("apstudy-force-expand-chapter", expand);
    return () => el.removeEventListener("apstudy-force-expand-chapter", expand);
  }, []);

  useEffect(() => {
    const expandAll = () => setOpen(true);
    window.addEventListener("apstudy-expand-chapters", expandAll);
    return () => window.removeEventListener("apstudy-expand-chapters", expandAll);
  }, []);

  const toggle = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  return (
    <div ref={rootRef} className="chapter" id={id}>
      <div
        className="chapter-header"
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <h2>{title}</h2>
        <span
          className="chevron"
          aria-hidden
          style={{ transform: open ? undefined : "rotate(-90deg)" }}
        >
          ▼
        </span>
      </div>
      <div
        id={contentId}
        className={`chapter-content${open ? "" : " collapsed"}`}
      >
        {children}
      </div>
    </div>
  );
}

type LearnBlockProps = { label?: string; children: ReactNode };

export function LearnBlock({ label = "Big Picture", children }: LearnBlockProps) {
  return (
    <div className="learn-block">
      <div className="teaching-label">{label}</div>
      {children}
    </div>
  );
}

type CalloutVariant = "example" | "tip";

export function Callout({
  variant = "example",
  children,
}: {
  variant?: CalloutVariant;
  children: ReactNode;
}) {
  return <div className={`callout ${variant}`}>{children}</div>;
}

export function MistakeBlock({ children }: { children: ReactNode }) {
  return (
    <div className="mistake-block">
      <div className="teaching-label">Common Mistake</div>
      {children}
    </div>
  );
}

type StepsBlockProps = { title: string; children: ReactNode };

export function StepsBlock({ title, children }: StepsBlockProps) {
  return (
    <div className="steps-block">
      <div className="teaching-label">{title}</div>
      {children}
    </div>
  );
}

type WhyBlockProps = { title?: string; children: ReactNode };

export function WhyBlock({ title = "Why It Matters", children }: WhyBlockProps) {
  return (
    <div className="why-block">
      <div className="teaching-label">{title}</div>
      {children}
    </div>
  );
}

export function FormulaBlock({ math }: { math: string }) {
  return (
    <div className="formula-block">
      <BlockMath math={math} />
    </div>
  );
}

type QaItemProps = { question: ReactNode; children: ReactNode };

function renderQuestionString(questionText: string): ReactNode {
  const outputNodes: ReactNode[] = [];
  const mathPattern = /(\$[^$]+\$|\\\([^)]+\\\))/g;
  let cursorIndex = 0;
  let nodeIndex = 0;

  const pushTextWithEmphasis = (textValue: string) => {
    const emphasisPattern = /_([^_]+)_/g;
    let textCursor = 0;
    let emphasisMatch: RegExpExecArray | null;
    while ((emphasisMatch = emphasisPattern.exec(textValue)) !== null) {
      if (emphasisMatch.index > textCursor) {
        outputNodes.push(textValue.slice(textCursor, emphasisMatch.index));
      }
      outputNodes.push(<em key={`q-em-${nodeIndex++}`}>{emphasisMatch[1]}</em>);
      textCursor = emphasisMatch.index + emphasisMatch[0].length;
    }
    if (textCursor < textValue.length) {
      outputNodes.push(textValue.slice(textCursor));
    }
  };

  let mathMatch: RegExpExecArray | null;
  while ((mathMatch = mathPattern.exec(questionText)) !== null) {
    if (mathMatch.index > cursorIndex) {
      pushTextWithEmphasis(questionText.slice(cursorIndex, mathMatch.index));
    }
    const rawMathToken = mathMatch[0];
    const mathContent = rawMathToken.startsWith("\\(")
      ? rawMathToken.slice(2, -2)
      : rawMathToken.slice(1, -1);
    outputNodes.push(
      <InlineMath
        key={`q-math-${nodeIndex++}`}
        math={mathContent}
        renderError={() => <code>{rawMathToken}</code>}
      />,
    );
    cursorIndex = mathMatch.index + rawMathToken.length;
  }

  if (cursorIndex < questionText.length) {
    pushTextWithEmphasis(questionText.slice(cursorIndex));
  }

  return outputNodes;
}

export function QaItem({ question, children }: QaItemProps) {
  const renderedQuestion = typeof question === "string" ? renderQuestionString(question) : question;
  return (
    <div className="qa-item">
      <div className="qa-question">{renderedQuestion}</div>
      <div className="qa-answer">{children}</div>
    </div>
  );
}

export function MiniDiagram({ children }: { children: ReactNode }) {
  return <div className="mini-diagram">{children}</div>;
}
