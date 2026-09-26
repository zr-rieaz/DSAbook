import React, { useState } from 'react';
import { ArrowLeft, X, Terminal, FileCode2, Play } from 'lucide-react';
import { PracticalCode } from '../types/syllabus';
import { PracticalLabSection } from './PracticalLabSection';

interface PracticalLabModalProps {
  isOpen: boolean;
  onClose: () => void;
  practicalPrograms: PracticalCode[];
  fontSize: 'sm' | 'base' | 'lg';
  chapterId: number;
}

export const PracticalLabModal: React.FC<PracticalLabModalProps> = ({
  isOpen,
  onClose,
  practicalPrograms,
  fontSize,
  chapterId,
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen m-0 p-0 bg-stone-100 dark:bg-zinc-950 flex flex-col overflow-hidden animate-in fade-in duration-200">
      {/* Top Header - Full Width */}
      <header className="bg-gradient-to-r from-teal-950 via-slate-900 to-zinc-950 text-white px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-teal-900 shadow-md shrink-0 w-full">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5 text-xs font-semibold cursor-pointer shrink-0"
            title="ফিরে যান"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">ফিরে যান</span>
          </button>

          <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center font-bold text-teal-300 shadow-inner shrink-0">
            <Terminal className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-teal-200 text-xs font-semibold">
              <span className="truncate">অধ্যায় ০{chapterId}</span>
            </div>
            <h1 className="text-sm sm:text-lg font-extrabold text-white truncate">
              ব্যবহারিক প্রোগ্রাম ও কোড এক্সিকিউশন ল্যাব
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
            title="ল্যাব বন্ধ করুন"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">বন্ধ করুন</span>
          </button>
        </div>
      </header>

      {/* Practical Program Tab Switcher (if multiple programs) */}
      {practicalPrograms.length > 1 && (
        <div className="bg-zinc-900 px-4 sm:px-8 py-2.5 border-b border-zinc-800 flex items-center gap-2 overflow-x-auto shrink-0 w-full">
          <span className="text-xs font-semibold text-zinc-400 shrink-0">
            প্রোগ্রাম নির্বাচন:
          </span>
          {practicalPrograms.map((prog, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>প্রোগ্রাম #{idx + 1}: {prog.title.split(' ')[0]}...</span>
            </button>
          ))}
        </div>
      )}

      {/* Full-Screen Lab Body - No Outer Margins */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 w-full min-w-0 bg-stone-100 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto min-w-0">
          {practicalPrograms.length > 0 ? (
            <PracticalLabSection
              practical={practicalPrograms[selectedIdx] || practicalPrograms[0]}
              fontSize={fontSize}
            />
          ) : (
            <div className="text-center py-24 text-stone-500 dark:text-zinc-400 text-sm">
              এই অধ্যায়ের জন্য কোনো ব্যবহারিক প্রোগ্রাম নির্ধারিত নেই।
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
