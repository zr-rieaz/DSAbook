import React, { useState } from 'react';
import { Bookmark, ChevronDown, ChevronUp } from 'lucide-react';

interface ChapterSummaryProps {
  summaryPoints: string[];
  fontSize: 'sm' | 'base' | 'lg';
}

export const ChapterSummary: React.FC<ChapterSummaryProps> = ({ summaryPoints, fontSize }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fontClass = fontSize === 'sm' ? 'text-xs sm:text-sm' : fontSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';

  return (
    <section id="chapter-summary" className="scroll-mt-24 space-y-3">
      {/* Clickable Header Banner */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-teal-900 via-emerald-950 to-stone-900 text-white rounded-xl p-4 sm:p-5 shadow-xs border border-emerald-800/50 flex items-center justify-between gap-3 cursor-pointer hover:opacity-95 transition select-none"
      >
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Bookmark className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              অধ্যায় সংক্ষেপ ও রিভিশন নোট (Quick Revision Notes)
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold">
            অধ্যায় সংক্ষেপ ও বুলেট পয়েন্টসমূহ (Summary Cheat-Sheet)
          </h3>
          <p className="text-emerald-100/90 text-xs truncate">
            পরীক্ষার ঠিক আগে সম্পূর্ণ অধ্যায়টি দ্রুত রিভিশন দেওয়ার জন্য গুরুত্বপূর্ণ পয়েন্ট।
          </p>
        </div>

        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 border border-white/10 transition">
          {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
        </div>
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xs animate-in fade-in duration-200">
          <div className="grid sm:grid-cols-2 gap-4">
            {summaryPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-stone-50 dark:bg-zinc-800/40 border border-stone-200 dark:border-zinc-700/80 p-4 rounded-xl flex items-start gap-3 hover:border-emerald-500/40 transition"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className={`${fontClass} text-stone-800 dark:text-zinc-200 leading-relaxed`}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
