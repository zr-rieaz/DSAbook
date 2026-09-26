import React, { useState } from 'react';
import { BoardQuestion } from '../types/syllabus';
import { HelpCircle, Star, ChevronDown, ChevronUp, Award, Filter, Sparkles, BookOpen } from 'lucide-react';
import { RichContentRenderer } from './RichContentRenderer';

interface BoardQuestionsSectionProps {
  questions: BoardQuestion[];
  fontSize: 'sm' | 'base' | 'lg';
  searchFilter: string;
}

export const BoardQuestionsSection: React.FC<BoardQuestionsSectionProps> = ({
  questions,
  fontSize,
  searchFilter
}) => {
  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'ati_songkhipto' | 'songkhipto' | 'rochonamulok'>('all');
  const [onlyImportant, setOnlyImportant] = useState<boolean>(false);
  const [expandedIds, setExpandedIds] = useState<string[]>([]); // collapsed by default

  const toggleExpand = (id: string) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => setExpandedIds(questions.map(q => q.id));
  const collapseAll = () => setExpandedIds([]);

  const filteredQuestions = questions.filter(q => {
    // Type tab match
    if (activeTab !== 'all' && q.type !== activeTab) return false;
    // Important filter
    if (onlyImportant && !q.isImportant) return false;
    // Search filter
    if (searchFilter) {
      const qLower = searchFilter.toLowerCase();
      const matchQ = q.questionBn.toLowerCase().includes(qLower);
      const matchAns = q.answerBn.toLowerCase().includes(qLower);
      const matchYear = q.yearsAppeared.some(y => y.toLowerCase().includes(qLower));
      if (!matchQ && !matchAns && !matchYear) return false;
    }
    return true;
  });

  const fontClass = fontSize === 'sm' ? 'text-xs sm:text-sm' : fontSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';

  return (
    <section id="board-questions" className="scroll-mt-24 space-y-3">
      {/* Clickable Header Banner */}
      <div
        onClick={() => setIsSectionOpen(!isSectionOpen)}
        className="bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 text-white rounded-xl p-4 sm:p-5 shadow-xs flex items-center justify-between gap-3 cursor-pointer hover:opacity-95 transition select-none"
      >
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-amber-400 text-stone-950 text-xs font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
              BTEB বোর্ড প্রশ্ন ও উত্তর ভাণ্ডার
            </span>
            <span className="text-amber-200 text-xs font-mono">পলিটেকনিক বোর্ড ফাইনাল সাজেশন</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold">
            বোর্ড প্যাটার্ন প্রশ্নোত্তর ভাণ্ডার (Q&A Bank)
          </h3>
          <p className="text-amber-100/90 text-xs truncate">
            বিগত কারিগরি শিক্ষা বোর্ড সমাপনী পরীক্ষায় আসা অতি-সংক্ষিপ্ত, সংক্ষিপ্ত এবং রচনামূলক প্রশ্নোত্তরসমূহ।
          </p>
        </div>

        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 border border-white/10 transition">
          {isSectionOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
        </div>
      </div>

      {/* Collapsible Questions List */}
      {isSectionOpen && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Filter Toolbar */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-stone-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'all'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300'
            }`}
          >
            সকল প্রশ্ন ({questions.length})
          </button>
          <button
            onClick={() => setActiveTab('ati_songkhipto')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'ati_songkhipto'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300'
            }`}
          >
            অতি সংক্ষিপ্ত (১ নম্বর)
          </button>
          <button
            onClick={() => setActiveTab('songkhipto')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'songkhipto'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300'
            }`}
          >
            সংক্ষিপ্ত (২/৩ নম্বর)
          </button>
          <button
            onClick={() => setActiveTab('rochonamulok')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'rochonamulok'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300'
            }`}
          >
            রচনামূলক (৫ নম্বর)
          </button>
        </div>

        {/* Action Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOnlyImportant(!onlyImportant)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1 ${
              onlyImportant
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${onlyImportant ? 'fill-stone-950' : ''}`} />
            শুধু গুরুত্বপূর্ণ ⭐
          </button>
          <button
            onClick={expandedIds.length === 0 ? expandAll : collapseAll}
            className="px-3 py-1.5 rounded-lg text-xs bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300 hover:bg-stone-200 transition"
          >
            {expandedIds.length === 0 ? 'সব খুলুন' : 'সব বন্ধ করুন'}
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl text-stone-500">
            কোনো প্রশ্ন খুঁজে পাওয়া যায়নি।
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const isExpanded = expandedIds.includes(q.id);
            const badgeBg =
              q.type === 'ati_songkhipto'
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300'
                : q.type === 'songkhipto'
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300'
                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300';

            const typeLabel =
              q.type === 'ati_songkhipto'
                ? 'অতি সংক্ষিপ্ত প্রশ্ন'
                : q.type === 'songkhipto'
                ? 'সংক্ষিপ্ত প্রশ্ন'
                : 'রচনামূলক প্রশ্ন';

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-xs hover:border-emerald-500/40 transition"
              >
                {/* Question Header */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer hover:bg-stone-50/70 dark:hover:bg-zinc-800/40 select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${badgeBg}`}>
                        {typeLabel} ({q.marks} নম্বর)
                      </span>
                      {q.isImportant && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          পরীক্ষার জন্য গুরুত্বপূর্ণ
                        </span>
                      )}
                      {q.subtopicRef && (
                        <span className="text-[11px] font-mono text-stone-500 dark:text-zinc-400">
                          টপিক {q.subtopicRef}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-stone-900 dark:text-zinc-100 text-sm sm:text-base leading-snug">
                      <span className="text-emerald-700 dark:text-emerald-400 font-mono mr-1.5">
                        প্রশ্ন {idx + 1}.
                      </span>
                      {q.questionBn}
                    </h4>

                    {/* Board Years Appeared */}
                    {q.yearsAppeared.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[10px] text-stone-500 dark:text-zinc-400 font-semibold">
                          বিগত বোর্ড সাল:
                        </span>
                        {q.yearsAppeared.map((yr, yIdx) => (
                          <span
                            key={yIdx}
                            className="bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold"
                          >
                            {yr}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <button className="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-zinc-200">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Question Answer Body */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-stone-100 dark:border-zinc-800 bg-stone-50/40 dark:bg-zinc-950/40 space-y-3">
                    <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      উত্তর:
                    </div>
                    <div className={`${fontClass}`}>
                      <RichContentRenderer content={q.answerBn} />
                    </div>

                    {q.diagramContent && (
                      <div className="mt-3 bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-[11px] text-emerald-400 overflow-x-auto shadow-inner">
                        <pre className="leading-snug">{q.diagramContent}</pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
          </div>
        </div>
      )}
    </section>
  );
};
