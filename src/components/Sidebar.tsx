import React from 'react';
import { Chapter, SyllabusSubjectInfo } from '../types/syllabus';
import { BookOpen, Layers, Award, FileCode2, PlayCircle, HelpCircle, CheckCircle2, Bookmark, ChevronRight } from 'lucide-react';

interface SidebarProps {
  chapter: Chapter;
  syllabusInfo: SyllabusSubjectInfo;
  activeSubtopicId: string | null;
  onOpenSyllabus: () => void;
  onSelectChapter: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  chapter,
  syllabusInfo,
  activeSubtopicId,
  onOpenSyllabus,
  onSelectChapter
}) => {
  return (
    <aside className="space-y-6">
      {/* Chapter Subtopics Navigation Card */}
      <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-zinc-800 pb-3 mb-4">
          <h3 className="font-bold text-stone-900 dark:text-zinc-100 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            অধ্যায় ০{chapter.id} সূচিপত্র
          </h3>
          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
            {chapter.subtopics.length}টি টপিক
          </span>
        </div>

        <nav className="space-y-1">
          {chapter.subtopics.map((st) => {
            const isActive = activeSubtopicId === st.id;
            return (
              <a
                key={st.id}
                href={`#subtopic-${st.id}`}
                className={`block p-2.5 rounded-xl text-xs transition ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border-l-4 border-emerald-600'
                    : 'text-stone-700 dark:text-zinc-300 hover:bg-stone-50 dark:hover:bg-zinc-800/60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-emerald-600 font-semibold">{st.id}</span>
                  <span className="truncate">{st.titleBn}</span>
                </div>
              </a>
            );
          })}
        </nav>

        {/* Quick Links inside Chapter */}
        <div className="mt-4 pt-3 border-t border-stone-100 dark:border-zinc-800 space-y-1.5 text-xs">
          <a
            href="#interactive-visualizers"
            className="flex items-center justify-between p-2 rounded-lg bg-stone-50 dark:bg-zinc-800/40 text-stone-800 dark:text-zinc-200 hover:text-emerald-600 transition"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <PlayCircle className="w-3.5 h-3.5 text-emerald-600" />
              {chapter.id === 1
                ? 'মেমরি ও অপারেশন সিমুলেটর'
                : chapter.id === 2
                ? 'Big-O কমপ্লেক্সিটি সিমুলেটর'
                : chapter.id === 3
                ? '2D অ্যারে ও পয়েন্টার সিমুলেটর'
                : chapter.id === 4
                ? 'স্ট্যাক ও ইনফিক্স-পোস্টফিক্স সিমুলেটর'
                : chapter.id === 5
                ? 'কিউ, সার্কুলার কিউ ও ডিকিউ সিমুলেটর'
                : chapter.id === 6
                ? 'লিংকড লিস্ট নোড ও পয়েন্টার সিমুলেটর'
                : chapter.id === 7
                ? 'বাইনারি সার্চ ট্রি ও ট্রাভার্সাল সিমুলেটর'
                : chapter.id === 8
                ? 'লিনিয়ার ও বাইনারি সার্চ সিমুলেটর'
                : 'বাবল, কুইক ও মার্জ সর্টিং সিমুলেটর'}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </a>
          <a
            href="#practical-lab"
            className="flex items-center justify-between p-2 rounded-lg bg-stone-50 dark:bg-zinc-800/40 text-stone-800 dark:text-zinc-200 hover:text-teal-600 transition"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <FileCode2 className="w-3.5 h-3.5 text-teal-600" />
              ব্যবহারিক পরীক্ষণ (C/Python)
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </a>
          <a
            href="#chapter-summary"
            className="flex items-center justify-between p-2 rounded-lg bg-stone-50 dark:bg-zinc-800/40 text-stone-800 dark:text-zinc-200 hover:text-emerald-600 transition"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <Bookmark className="w-3.5 h-3.5 text-emerald-600" />
              অধ্যায় সারসংক্ষেপ নোট
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </a>
          <a
            href="#board-questions"
            className="flex items-center justify-between p-2 rounded-lg bg-stone-50 dark:bg-zinc-800/40 text-stone-800 dark:text-zinc-200 hover:text-amber-600 transition"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              বোর্ড ফাইনাল প্রশ্নোত্তর ({chapter.boardQuestions.length})
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </a>
          <a
            href="#chapter-quiz"
            className="flex items-center justify-between p-2 rounded-lg bg-stone-50 dark:bg-zinc-800/40 text-stone-800 dark:text-zinc-200 hover:text-indigo-600 transition"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              নৈর্ব্যক্তিক মক টেস্ট (MCQ)
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </a>
        </div>
      </div>

      {/* Full Syllabus Directory Card */}
      <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-stone-900 dark:text-zinc-100 text-xs flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-700" />
            বোর্ড সিলেবাসের ৯টি অধ্যায়
          </h4>
          <button
            onClick={onOpenSyllabus}
            className="text-[11px] text-emerald-600 hover:underline font-semibold cursor-pointer"
          >
            বিস্তারিত
          </button>
        </div>

        <div className="space-y-1.5 text-xs">
          {syllabusInfo.theoryChapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className={`w-full text-left p-2 rounded-lg flex items-center justify-between gap-2 transition cursor-pointer ${
                chapter.id === ch.id
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-bold border border-emerald-300 dark:border-emerald-700'
                  : ch.isCompletedInBook
                  ? 'bg-stone-50 dark:bg-zinc-800/40 text-stone-800 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800'
                  : 'text-stone-500 dark:text-zinc-400 hover:bg-stone-100/50 dark:hover:bg-zinc-800/30'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <span className={`w-5 h-5 rounded-full font-mono text-[10px] flex items-center justify-center shrink-0 ${
                  chapter.id === ch.id
                    ? 'bg-emerald-700 text-white'
                    : 'bg-stone-200 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300'
                }`}>
                  {ch.id}
                </span>
                <span className="truncate">{ch.titleBn.split('(')[0]}</span>
              </div>
              {ch.isCompletedInBook ? (
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 shrink-0 font-semibold">
                  সম্পূর্ণ
                </span>
              ) : (
                <span className="text-[10px] text-stone-400 shrink-0">
                  সিলেবাস
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
