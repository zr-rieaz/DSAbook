import React, { useState } from 'react';
import { SubTopic } from '../types/syllabus';
import { Lightbulb, Code, CheckCircle, Copy, Check, Info, Sparkles, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { CodeHighlight } from './CodeHighlight';
import { RichContentRenderer } from './RichContentRenderer';

interface SubtopicCardProps {
  subtopic: SubTopic;
  fontSize: 'sm' | 'base' | 'lg';
}

export const SubtopicCard: React.FC<SubtopicCardProps> = ({ subtopic, fontSize }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAscii, setCopiedAscii] = useState(false);

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAscii = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedAscii(true);
    setTimeout(() => setCopiedAscii(false), 2000);
  };

  const fontClass = fontSize === 'sm' ? 'text-xs sm:text-sm' : fontSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';
  const headingClass = fontSize === 'sm' ? 'text-base sm:text-lg' : fontSize === 'lg' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl';

  return (
    <section
      id={`subtopic-${subtopic.id}`}
      className="scroll-mt-24 bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl shadow-xs transition-all w-full max-w-full overflow-hidden hover:border-emerald-600/40"
    >
      {/* Clickable Subtopic Header (Accordion Toggle) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 hover:bg-stone-50/80 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-emerald-700 text-white font-mono font-bold text-xs px-2 py-0.5 rounded-md shadow-xs shrink-0">
              টপিক {subtopic.id}
            </span>
            <span className="text-xs text-stone-500 dark:text-zinc-400 font-mono">
              Syllabus Section
            </span>
          </div>
          <h3 className={`font-bold text-stone-900 dark:text-zinc-100 ${headingClass} leading-snug break-words`}>
            {subtopic.titleBn}
          </h3>
          <p className="text-xs text-stone-500 dark:text-zinc-400 font-mono font-medium truncate">
            {subtopic.titleEn}
          </p>
        </div>

        {/* Toggle Indicator Button */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300 flex items-center justify-center shrink-0 border border-stone-200 dark:border-zinc-700 shadow-xs hover:bg-emerald-700 hover:text-white transition">
          {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
        </div>
      </button>

      {/* Collapsible Content Area */}
      {isOpen && (
        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 space-y-6 border-t border-stone-100 dark:border-zinc-800 animate-in fade-in duration-200">
          {/* Core Definition & Concept */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              সংজ্ঞা ও মূল ধারণা (Core Concept)
            </h4>
            <div className={`${fontClass} text-stone-800 dark:text-zinc-200 text-justify`}>
              <RichContentRenderer content={subtopic.concept} />
            </div>
          </div>

          {/* Real-life Analogy Box */}
          {subtopic.realLifeAnalogy && (
            <div className="bg-amber-50/90 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl space-y-2">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm">
                <Lightbulb className="w-4 h-4" />
                বাস্তব জীবনের উদাহরণ ও সহজ তুলনা (Real-Life Analogy):
              </div>
              <div className={`${fontClass} text-amber-900 dark:text-amber-200/90 italic`}>
                <RichContentRenderer content={subtopic.realLifeAnalogy} />
              </div>
            </div>
          )}

          {/* Technical Breakdown */}
          {subtopic.technicalDetails && (
            <div className="space-y-3 bg-stone-50 dark:bg-zinc-800/40 p-5 rounded-xl border border-stone-200/80 dark:border-zinc-700/80">
              <h4 className="text-sm font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                কার্যপদ্ধতি
              </h4>
              <div className={`${fontClass} text-stone-700 dark:text-zinc-300`}>
                <RichContentRenderer content={subtopic.technicalDetails} />
              </div>
            </div>
          )}

          {/* Diagram / Visual ASCII */}
          {subtopic.diagramContent && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-emerald-700" />
                  কাঠামোগত ডায়াগ্রাম ও মেমরি আর্কিটেকচার (Structural Layout):
                </span>
                <button
                  onClick={() => handleCopyAscii(subtopic.diagramContent || '')}
                  className="flex items-center gap-1 hover:text-emerald-700 transition cursor-pointer"
                >
                  {copiedAscii ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedAscii ? 'কপি হয়েছে' : 'ডায়াগ্রাম কপি'}
                </button>
              </div>
              <div className="relative group rounded-xl overflow-hidden border border-stone-800 bg-zinc-950 p-4 font-mono text-emerald-400 text-xs sm:text-xs overflow-x-auto shadow-inner">
                <pre className="leading-snug">{subtopic.diagramContent}</pre>
              </div>
            </div>
          )}

          {/* Comparison Table */}
          {subtopic.tableData && (
            <div className="space-y-2 overflow-x-auto">
              <div className="text-xs font-semibold text-stone-500 dark:text-zinc-400 flex items-center gap-1.5 mb-1">
                <Info className="w-3.5 h-3.5 text-emerald-700" />
                তুলনামূলক পার্থক্য সারণি (Comparison Table):
              </div>
              <div className="border border-stone-200 dark:border-zinc-700 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-emerald-800 text-white divide-x divide-emerald-700">
                      {subtopic.tableData.headers.map((h, i) => (
                        <th key={i} className="p-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-zinc-700 bg-white dark:bg-zinc-900">
                    {subtopic.tableData.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 0 ? 'bg-stone-50/50 dark:bg-zinc-800/20' : 'bg-white dark:bg-zinc-900'}
                      >
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`p-3 text-stone-800 dark:text-zinc-200 border-r border-stone-200 dark:border-zinc-700 last:border-r-0 ${
                              cIdx === 0 ? 'font-bold bg-stone-100/50 dark:bg-zinc-800/50' : ''
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Syntax / Code Blocks */}
          {subtopic.syntaxOrFormulas && subtopic.syntaxOrFormulas.length > 0 && (
            <div className="space-y-4">
              {subtopic.syntaxOrFormulas.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-stone-700 bg-zinc-950 overflow-hidden shadow-md">
                  <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono text-zinc-300 font-semibold">{item.label}</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(item.codeOrFormula, idx)}
                      className="flex items-center gap-1 text-xs text-zinc-400 hover:text-emerald-400 transition cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>কপি হয়েছে</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>কোড কপি</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-4 bg-zinc-950 overflow-x-auto text-xs sm:text-sm">
                    <CodeHighlight
                      code={item.codeOrFormula}
                      language={item.codeOrFormula.includes('def ') || item.codeOrFormula.includes('import ') ? 'python' : 'c'}
                      showLineNumbers={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Key Takeaways */}
          {subtopic.keyPoints && subtopic.keyPoints.length > 0 && (
            <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 rounded-xl p-4 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                মনে রাখার মতো মূল পয়েন্ট (Key Points):
              </h4>
              <ul className="grid sm:grid-cols-1 gap-1.5 text-xs sm:text-sm text-stone-800 dark:text-zinc-200 pl-2">
                {subtopic.keyPoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
