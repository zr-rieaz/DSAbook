import React, { useState } from 'react';
import { PracticalCode } from '../types/syllabus';
import { Terminal, Play, Copy, Check, FileCode, CheckCircle2, Cpu } from 'lucide-react';
import { CodeHighlight } from './CodeHighlight';

interface PracticalLabSectionProps {
  practical: PracticalCode;
  fontSize: 'sm' | 'base' | 'lg';
}

export const PracticalLabSection: React.FC<PracticalLabSectionProps> = ({ practical, fontSize }) => {
  const [activeLang, setActiveLang] = useState<'c' | 'python'>('c');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecute = () => {
    setIsExecuting(true);
    setTerminalOutput('প্রোগ্রাম কম্পাইল ও লিঙ্ক হচ্ছে...\n[GCC / Python3 Interpreter Running]');
    setTimeout(() => {
      setTerminalOutput(practical.sampleOutput);
      setIsExecuting(false);
    }, 600);
  };

  const fontClass = fontSize === 'sm' ? 'text-xs' : fontSize === 'lg' ? 'text-base' : 'text-sm';

  return (
    <section id="practical-lab" className="scroll-mt-24 space-y-6 w-full max-w-full overflow-hidden">
      {/* Section Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-teal-800/60 w-full">
        <h3 className="text-xl sm:text-2xl font-bold break-words">{practical.title}</h3>
        <p className="text-teal-100 text-xs sm:text-sm mt-2 leading-relaxed break-words">
          {practical.problemStatementBn}
        </p>
      </div>

      {/* Lab Report Structure Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Left: Step-by-step Algorithm & Flowchart */}
        <div className="lg:col-span-1 space-y-6 min-w-0 w-full">
          {/* Algorithm Card */}
          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs space-y-4 w-full overflow-hidden">
            <h4 className="font-bold text-stone-900 dark:text-zinc-100 text-sm sm:text-base flex items-center gap-2 border-b border-stone-100 dark:border-zinc-800 pb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>ধাপভিত্তিক অ্যালগরিদম (Algorithm)</span>
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-zinc-300">
              {practical.algorithmStepsBn.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-stone-50 dark:bg-zinc-800/40 p-2.5 rounded-lg w-full">
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 shrink-0">
                    {idx + 1}.
                  </span>
                  <span className="leading-snug break-words flex-1 min-w-0">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flowchart Representation Box */}
          <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs space-y-3 w-full overflow-hidden">
            <h4 className="font-bold text-stone-900 dark:text-zinc-100 text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4 text-teal-600 shrink-0" />
              <span>লজিক্যাল ফ্লোচার্ট সংক্ষেপ (Flowchart Logic)</span>
            </h4>
            <div className="bg-stone-950 p-3.5 rounded-xl font-mono text-[11px] text-teal-300 overflow-x-auto max-w-full w-full border border-stone-800">
              <pre className="leading-tight inline-block min-w-full whitespace-pre font-mono">
{` [ Start ]
    │
 ┌──▼────────────────┐
 │ Input: Arr, N, Pos│
 └──┬────────────────┘
    │
 ┌──▼────────────────┐   Shift Right
 │ Loop: i = N-1;    │──► Arr[i+1]=Arr[i]
 │       i >= Pos; i--│
 └──┬────────────────┘
    │
 ┌──▼────────────────┐
 │ Arr[Pos] = ITEM   │
 │ N = N + 1         │
 └──┬────────────────┘
    │
 ┌──▼────────────────┐
 │ Print Updated Arr │
 └──┬────────────────┘
    │
 [ Stop ]`}
              </pre>
            </div>
          </div>
        </div>

        {/* Right: Code Editor & Live Simulation Terminal */}
        <div className="lg:col-span-2 space-y-4 min-w-0 w-full">
          <div className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-xl w-full max-w-full">
            {/* Code Tabs Header */}
            <div className="bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setActiveLang('c')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    activeLang === 'c'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-zinc-400 hover:text-white bg-zinc-800'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  C Language Program
                </button>
                <button
                  onClick={() => setActiveLang('python')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    activeLang === 'python'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-zinc-400 hover:text-white bg-zinc-800'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  Python 3 Program
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(activeLang === 'c' ? practical.cCode : practical.pythonCode)}
                  className="px-2.5 py-1 text-xs text-zinc-400 hover:text-emerald-400 bg-zinc-800 rounded-md transition flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'কপি হয়েছে' : 'কোড কপি'}
                </button>
                <button
                  onClick={handleExecute}
                  disabled={isExecuting}
                  className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-md shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  {isExecuting ? 'রান হচ্ছে...' : 'রান করুন (Execute)'}
                </button>
              </div>
            </div>

            {/* Code Content with Horizontal Scroll Support & Vibrant Syntax Highlighting */}
            <div className="p-4 overflow-x-auto max-h-[460px] font-mono text-xs sm:text-sm leading-relaxed w-full max-w-full bg-zinc-950">
              <div className="inline-block min-w-full">
                <CodeHighlight
                  code={activeLang === 'c' ? practical.cCode : practical.pythonCode}
                  language={activeLang}
                  showLineNumbers={true}
                />
              </div>
            </div>

            {/* Terminal Live Output Window */}
            <div className="border-t border-zinc-800 bg-black p-4 space-y-2 font-mono text-xs w-full overflow-hidden">
              <div className="flex items-center justify-between text-zinc-500 text-[11px] border-b border-zinc-900 pb-1">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  Live Output Terminal Console
                </span>
                <span>Exit Code: 0 (Success)</span>
              </div>
              <div className="overflow-x-auto max-w-full">
                <pre className="text-zinc-200 whitespace-pre leading-relaxed min-h-[90px] font-mono">
                  {terminalOutput || practical.sampleOutput}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Discussion & Notes */}
          <div className="bg-stone-50 dark:bg-zinc-800/40 p-4 rounded-xl border border-stone-200 dark:border-zinc-700 text-xs sm:text-sm text-stone-700 dark:text-zinc-300 w-full overflow-hidden break-words">
            <strong className="text-emerald-800 dark:text-emerald-400 font-bold block mb-1">
              ব্যবহারিক ফলাফল বিশ্লেষণ ও সতর্কতা:
            </strong>
            <p className="leading-relaxed break-words whitespace-normal">
              {practical.explanationBn}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
