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
  bc: 'bc',
  'bc-only': 'bc',
};

function parseCallout(children: ReactNode[]): { type: string; title: string; body: ReactNode[] } | null {
  // Skip leading whitespace/newline text nodes to find the first element
  const first = children.find((c) => c !== null && c !== undefined && typeof c === 'object');
  if (!first) return null;

  const p = first as React.ReactElement<{ children: ReactNode[] }>;
  if (!p.props?.children) return null;

  const pChildren = Array.isArray(p.props.children) ? p.props.children : [p.props.children];
  const firstText = pChildren[0];
  if (typeof firstText !== 'string') return null;

  // Match only the first line — react-markdown may bundle the whole paragraph
  // into one string with embedded \n, so don't anchor with $
  const firstLine = firstText.split('\n')[0];
  const match = firstLine.match(/^\[!(\w+)\](?:\s+([^\n]+))?/);
  if (!match) return null;

  const rawType = match[1].toLowerCase();
  const type = CALLOUT_TYPES[rawType] ?? 'note';
  const title = match[2]?.trim() ?? rawType.charAt(0).toUpperCase() + rawType.slice(1);

  // Remainder of the first text node after the [!type] line
  const afterFirstLine = firstText.slice(firstLine.length).replace(/^\n/, '');
  const restOfP: ReactNode[] = [];
  if (afterFirstLine) restOfP.push(afterFirstLine);
  restOfP.push(...pChildren.slice(1));

  const body: ReactNode[] = [];
  const filteredRest = restOfP.filter(Boolean);
  if (filteredRest.length > 0) body.push(<p key="rest">{filteredRest}</p>);
  body.push(...children.slice(children.indexOf(first) + 1));

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
