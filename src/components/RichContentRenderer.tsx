import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { CodeHighlight } from './CodeHighlight';

interface RichContentRendererProps {
  content: string;
  className?: string;
}

export const RichContentRenderer: React.FC<RichContentRendererProps> = ({
  content,
  className = '',
}) => {
  if (!content) return null;

  // Split content by fenced code blocks (```lang ... ```)
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    const textBefore = content.substring(lastIndex, match.index);
    if (textBefore) {
      parts.push(
        <React.Fragment key={`text-${lastIndex}`}>
          {renderTextWithMarkdown(textBefore)}
        </React.Fragment>
      );
    }

    const language = (match[1] || 'c').toLowerCase();
    const codeContent = match[2].trim();
    const blockIndex = match.index;

    parts.push(
      <CodeBlockWrapper
        key={`code-${blockIndex}`}
        code={codeContent}
        language={language}
      />
    );

    lastIndex = match.index + match[0].length;
  }

  const remainingText = content.substring(lastIndex);
  if (remainingText) {
    parts.push(
      <React.Fragment key={`text-last`}>
        {renderTextWithMarkdown(remainingText)}
      </React.Fragment>
    );
  }

  return <div className={`space-y-3 leading-relaxed ${className}`}>{parts}</div>;
};

// Component for rendering styled code block with copy button
const CodeBlockWrapper: React.FC<{ code: string; language: string }> = ({
  code,
  language,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validLang =
    language === 'python' || language === 'py'
      ? 'python'
      : language === 'c' || language === 'cpp'
      ? 'c'
      : language === 'algo'
      ? 'algo'
      : 'c';

  return (
    <div className="my-3 rounded-xl overflow-hidden border border-stone-300 dark:border-zinc-700/80 bg-zinc-950 shadow-xs">
      <div className="bg-zinc-900 px-3.5 py-1.5 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
        <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase font-bold text-emerald-400">
          <Terminal className="w-3.5 h-3.5" />
          {validLang === 'python' ? 'Python Code' : validLang === 'algo' ? 'Algorithm' : 'C Program'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 hover:text-white transition text-[11px] font-sans cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'কপি হয়েছে' : 'কোড কপি'}
        </button>
      </div>
      <div className="p-3.5 overflow-x-auto text-xs sm:text-sm">
        <CodeHighlight code={code} language={validLang} />
      </div>
    </div>
  );
};

// Render non-code markdown: headings, tables, formulas, bold, inline code, lists
function renderTextWithMarkdown(text: string): React.ReactNode {
  // Normalize linebreaks
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let tableLines: string[] = [];

  const flushList = (key: string) => {
    if (currentList) {
      if (currentList.type === 'ul') {
        elements.push(
          <ul key={`ul-${key}`} className="list-disc list-inside space-y-1 my-2 pl-1 text-stone-800 dark:text-zinc-200">
            {currentList.items.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {renderInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`ol-${key}`} className="list-decimal list-inside space-y-1 my-2 pl-1 text-stone-800 dark:text-zinc-200">
            {currentList.items.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {renderInlineMarkdown(item)}
              </li>
            ))}
          </ol>
        );
      }
      currentList = null;
    }
  };

  const flushTable = (key: string) => {
    if (tableLines.length > 0) {
      elements.push(renderMarkdownTable(tableLines, `table-${key}`));
      tableLines = [];
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    // Markdown Table check (starts and ends with |)
    if (line.startsWith('|') && line.endsWith('|')) {
      flushList(`table-flush-${index}`);
      tableLines.push(line);
      return;
    } else if (tableLines.length > 0) {
      flushTable(`line-${index}`);
    }

    // Display Math Formula: $$...$$
    if (line.startsWith('$$') && line.endsWith('$$')) {
      flushList(`math-${index}`);
      const formula = line.slice(2, -2).trim();
      elements.push(
        <div
          key={`math-block-${index}`}
          className="my-3 p-3 sm:p-4 rounded-xl bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-600/30 text-emerald-950 dark:text-emerald-200 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-inner"
        >
          {cleanMathFormula(formula)}
        </div>
      );
      return;
    }

    // Algorithm Header: e.g. Algorithm: INSERT(LA, N, K, ITEM)
    if (line.startsWith('Algorithm:') || line.startsWith('ALGORITHM:')) {
      flushList(`algo-${index}`);
      elements.push(
        <div
          key={`algo-hdr-${index}`}
          className="font-mono font-bold text-xs sm:text-sm text-emerald-800 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 my-2 inline-block"
        >
          {line}
        </div>
      );
      return;
    }

    // Headings (###, ##, #)
    if (line.startsWith('### ')) {
      flushList(`h3-${index}`);
      elements.push(
        <h4 key={`h3-${index}`} className="font-bold text-stone-900 dark:text-zinc-100 text-sm sm:text-base mt-3 mb-1">
          {renderInlineMarkdown(line.slice(4))}
        </h4>
      );
      return;
    }
    if (line.startsWith('## ')) {
      flushList(`h2-${index}`);
      elements.push(
        <h3 key={`h2-${index}`} className="font-bold text-stone-900 dark:text-zinc-100 text-base sm:text-lg mt-3 mb-1">
          {renderInlineMarkdown(line.slice(3))}
        </h3>
      );
      return;
    }

    // Bullet points (- or * or •)
    const bulletMatch = line.match(/^[-*•]\s+(.*)$/);
    if (bulletMatch) {
      if (!currentList || currentList.type !== 'ul') {
        flushList(`ul-start-${index}`);
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(bulletMatch[1]);
      return;
    }

    // Numbered List / Bengali Numbered List: e.g. "১. ", "২. ", "1. ", "Step 1: "
    const numMatch = line.match(/^([০-৯0-9]+|[A-Za-z]+)\.\s+(.*)$/) || line.match(/^(Step\s+[0-9]+:)\s+(.*)$/i);
    if (numMatch) {
      flushList(`num-${index}`);
      elements.push(
        <div key={`item-${index}`} className="flex items-start gap-2 my-1.5 pl-1">
          <span className="font-bold font-mono text-emerald-700 dark:text-emerald-400 shrink-0">
            {numMatch[1].endsWith(':') ? numMatch[1] : `${numMatch[1]}.`}
          </span>
          <div className="flex-1 leading-relaxed text-stone-800 dark:text-zinc-200">
            {renderInlineMarkdown(numMatch[2])}
          </div>
        </div>
      );
      return;
    }

    // Empty line
    if (!line) {
      flushList(`empty-${index}`);
      elements.push(<div key={`space-${index}`} className="h-2" />);
      return;
    }

    // Regular paragraph
    flushList(`p-${index}`);
    elements.push(
      <p key={`p-${index}`} className="leading-relaxed text-stone-800 dark:text-zinc-200">
        {renderInlineMarkdown(rawLine)}
      </p>
    );
  });

  flushList('final');
  flushTable('final');

  return elements;
}

// Render Markdown table to responsive HTML table
function renderMarkdownTable(tableLines: string[], key: string): React.ReactNode {
  if (tableLines.length < 2) return null;

  const rows = tableLines.map((line) =>
    line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim())
  );

  const headerRow = rows[0];
  const bodyRows = rows.slice(2); // Skip separator row at index 1

  return (
    <div key={key} className="my-3 overflow-x-auto rounded-xl border border-stone-200 dark:border-zinc-700 shadow-xs">
      <table className="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr className="bg-emerald-800 text-white divide-x divide-emerald-700">
            {headerRow.map((cell, idx) => (
              <th key={idx} className="p-2.5 sm:p-3 font-semibold">
                {renderInlineMarkdown(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-200 dark:divide-zinc-700 bg-white dark:bg-zinc-900">
          {bodyRows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className={`divide-x divide-stone-100 dark:divide-zinc-800 ${
                rIdx % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-stone-50/60 dark:bg-zinc-800/40'
              }`}
            >
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-2.5 sm:p-3 text-stone-800 dark:text-zinc-200">
                  {renderInlineMarkdown(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Inline Markdown parser: `code`, **bold**, *italic*, $math$
function renderInlineMarkdown(text: string): React.ReactNode {
  if (!text) return null;

  // Tokenize string for `code`, **bold**, $math$
  const tokenRegex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\$[^\$]+\$)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    const textBefore = text.substring(lastIndex, match.index);
    if (textBefore) {
      parts.push(textBefore);
    }

    const token = match[0];
    if (token.startsWith('`') && token.endsWith('`')) {
      const codeStr = token.slice(1, -1);
      parts.push(
        <code
          key={`code-${match.index}`}
          className="font-mono font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded text-[0.9em] border border-emerald-200/80 dark:border-emerald-800/80 shadow-2xs"
        >
          {codeStr}
        </code>
      );
    } else if (token.startsWith('**') && token.endsWith('**')) {
      const boldStr = token.slice(2, -2);
      parts.push(
        <strong key={`bold-${match.index}`} className="font-bold text-stone-900 dark:text-zinc-100">
          {boldStr}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      const italicStr = token.slice(1, -1);
      parts.push(
        <em key={`italic-${match.index}`} className="italic text-stone-800 dark:text-zinc-200">
          {italicStr}
        </em>
      );
    } else if (token.startsWith('$') && token.endsWith('$')) {
      const mathStr = token.slice(1, -1);
      parts.push(
        <span
          key={`math-${match.index}`}
          className="font-mono font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 px-1 py-0.5 rounded text-[0.92em]"
        >
          {cleanMathFormula(mathStr)}
        </span>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  const remaining = text.substring(lastIndex);
  if (remaining) {
    parts.push(remaining);
  }

  return <>{parts}</>;
}

// Clean up standard LaTeX symbols into clean unicode / math representation
function cleanMathFormula(latex: string): string {
  return latex
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\log/g, 'log')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\ne/g, '≠')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\approx/g, '≈')
    .replace(/\\to/g, '➔')
    .replace(/\\infty/g, '∞')
    .replace(/\\cdot/g, '·')
    .replace(/\\pm/g, '±')
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³')
    .replace(/\^n/g, 'ⁿ')
    .replace(/_1/g, '₁')
    .replace(/_2/g, '₂')
    .replace(/_\{([^}]+)\}/g, '[$1]')
    .replace(/\\([a-zA-Z]+)/g, '$1');
}
