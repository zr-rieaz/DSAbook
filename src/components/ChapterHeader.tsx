import React from 'react';
import { Chapter } from '../types/syllabus';
import { BookOpen } from 'lucide-react';

interface ChapterHeaderProps {
  chapter: Chapter;
  activeSection?: string;
  onSelectSection?: (sectionId: string) => void;
  onOpenSimulateLab?: () => void;
  onOpenPracticalLab?: () => void;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({ chapter }) => {
  return (
    <div className="w-full">
      {/* Chapter Official Title Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-900 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-700/50">
        <div className="absolute -right-8 -bottom-8 opacity-10 text-white pointer-events-none">
          <BookOpen className="w-64 h-64" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-400 text-stone-950 font-bold px-3 py-1 rounded-md text-xs uppercase tracking-wider shadow-xs">
              অধ্যায় ০{chapter.id} (Chapter {chapter.id})
            </span>
            <span className="bg-emerald-950/80 text-emerald-200 text-xs px-2.5 py-1 rounded-md font-mono border border-emerald-600/40">
              BTEB Code: {chapter.code}
            </span>
            <span className="bg-teal-950/80 text-teal-200 text-xs px-2.5 py-1 rounded-md font-semibold border border-teal-600/40">
              থিওরি ও প্র্যাকটিক্যাল
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {chapter.titleBn}
            </h1>
            <p className="text-base sm:text-xl text-emerald-200 font-mono mt-1">
              {chapter.titleEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
