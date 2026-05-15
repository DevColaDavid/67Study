import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import 'katex/dist/katex.min.css';
import type { Components } from 'react-markdown';
import type { ReactNode } from 'react';

// Obsidian callout types → CSS modifier
const CALLOUT_TYPES: Record<string, string> = {
  note: 'note',
  info: 'note',
  tip: 'tip',
  hint: 'tip',
  important: 'tip',
  warning: 'warning',
  caution: 'warning',
  danger: 'warning',
  example: 'example',
  quote: 'quote',
  summary: 'summary',
  abstract: 'summary',
};

function parseCallout(children: ReactNode[]): { type: string; title: string; body: ReactNode[] } | null {
  const first = children[0];
  if (!first || typeof first !== 'object') return null;
  // The first child of a blockquote is a <p> element
  const p = first as React.ReactElement<{ children: ReactNode[] }>;
  if (!p.props?.children) return null;

  const pChildren = Array.isArray(p.props.children) ? p.props.children : [p.props.children];
  const firstText = pChildren[0];
  if (typeof firstText !== 'string') return null;

  const match = firstText.match(/^\[!(\w+)\](?:\s+(.+))?$/);
  if (!match) return null;

  const rawType = match[1].toLowerCase();
  const type = CALLOUT_TYPES[rawType] ?? 'note';
  const title = match[2] ?? rawType.charAt(0).toUpperCase() + rawType.slice(1);

  // Rest of first paragraph after the [!type] line
  const restOfP = pChildren.slice(1).filter(Boolean);
  const body: ReactNode[] = [];
  if (restOfP.length > 0) body.push(<p key="rest">{restOfP}</p>);
  // Remaining blockquote children (paragraphs after the first)
  body.push(...children.slice(1));

  return { type, title, body };
}

const components: Components = {
  blockquote({ children }) {
    const arr = Array.isArray(children) ? children : [children];
    const callout = parseCallout(arr as ReactNode[]);
    if (callout) {
      return (
        <div className={`callout callout-${callout.type}`}>
          <div className="callout-title">{callout.title}</div>
          <div className="callout-body">{callout.body}</div>
        </div>
      );
    }
    return <blockquote>{children}</blockquote>;
  },
};

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeSlug]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
