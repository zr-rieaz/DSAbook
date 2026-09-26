import React, { useState } from 'react';
import {
  BookOpen,
  Menu,
  X,
  Search,
  ChevronRight,
  Layers,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { BTEB_SUBJECT_INFO } from '../data/syllabusData';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  fontSize: 'sm' | 'base' | 'lg';
  setFontSize: (size: 'sm' | 'base' | 'lg') => void;
  onOpenSyllabus: () => void;
  onOpenSimulateLab: () => void;
  onOpenPracticalLab: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedChapterId: number;
  onSelectChapter: (id: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  fontSize,
  setFontSize,
  onOpenSyllabus,
  onOpenSimulateLab,
  onOpenPracticalLab,
  searchQuery,
  setSearchQuery,
  selectedChapterId,
  onSelectChapter,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [navStage, setNavStage] = useState<'theory' | 'practical'>('theory');

  const getExperimentChapterId = (expId: number): number | undefined => {
    if (expId === 1) return 1;
    if (expId === 2 || expId === 3) return 3;
    if (expId === 4) return 4;
    if (expId === 5) return 5;
    if (expId === 6) return 6;
    if (expId === 7) return 7;
    if (expId === 8 || expId === 9) return 8;
    if (expId === 10 || expId === 11) return 9;
    return undefined;
  };

  const handleChapterClick = (id: number) => {
    onSelectChapter(id);
    setIsMenuOpen(false);
  };

  const handlePracticalClick = (chapterId?: number) => {
    if (chapterId && chapterId <= 9) {
      onSelectChapter(chapterId);
      setIsMenuOpen(false);
      onOpenPracticalLab();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-stone-200 dark:border-zinc-800 transition-colors shadow-xs">
        {/* Main Nav Controls */}
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3 sm:gap-6">
          {/* Logo & Subject Title */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-extrabold text-stone-900 dark:text-zinc-100 text-base sm:text-lg leading-tight tracking-tight">
                Data Structure and Algorithm
              </h1>
              <p className="text-xs text-stone-500 dark:text-zinc-400 font-medium">
                ডাটা স্ট্রাকচার অ্যান্ড অ্যালগরিদম
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xs hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="টপিক বা প্রশ্ন খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 placeholder-stone-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Action Tools: Font Size, Simulate Lab Icon, Practical Program Icon, and 3-Line Menu */}
          <div className="flex items-center gap-2">
            {/* Font Controls */}
            <div className="hidden sm:flex items-center bg-stone-100 dark:bg-zinc-800 rounded-xl p-0.5 border border-stone-200 dark:border-zinc-700">
              <button
                onClick={() => setFontSize('sm')}
                title="ছোট ফন্ট"
                className={`px-2 py-1 text-xs rounded-lg font-bold transition cursor-pointer ${
                  fontSize === 'sm'
                    ? 'bg-white dark:bg-zinc-700 shadow-xs text-emerald-800 dark:text-emerald-300'
                    : 'text-stone-700 dark:text-zinc-300'
                }`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                title="স্বাভাবিক ফন্ট"
                className={`px-2 py-1 text-xs rounded-lg font-bold transition cursor-pointer ${
                  fontSize === 'base'
                    ? 'bg-white dark:bg-zinc-700 shadow-xs text-emerald-800 dark:text-emerald-300'
                    : 'text-stone-700 dark:text-zinc-300'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                title="বড় ফন্ট"
                className={`px-2 py-1 text-xs rounded-lg font-bold transition cursor-pointer ${
                  fontSize === 'lg'
                    ? 'bg-white dark:bg-zinc-700 shadow-xs text-emerald-800 dark:text-emerald-300'
                    : 'text-stone-700 dark:text-zinc-300'
                }`}
              >
                A+
              </button>
            </div>

            {/* 1. Simulate Lab Icon Button */}
            <button
              onClick={onOpenSimulateLab}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/60 dark:hover:bg-teal-900/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 active:scale-95 shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
              title="সিমুলেট ল্যাব (Simulate Lab)"
              aria-label="Open Simulate Lab"
            >
              <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-teal-600 dark:text-teal-400" />
              <span className="hidden lg:inline text-xs font-bold text-teal-800 dark:text-teal-200">
                সিমুলেট ল্যাব
              </span>
            </button>

            {/* 2. Practical Program Icon Button */}
            <button
              onClick={onOpenPracticalLab}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 active:scale-95 shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
              title="ব্যবহারিক প্রোগ্রাম (Practical Program)"
              aria-label="Open Practical Program"
            >
              <Terminal className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-indigo-600 dark:text-indigo-400" />
              <span className="hidden lg:inline text-xs font-bold text-indigo-800 dark:text-indigo-200">
                ব্যবহারিক
              </span>
            </button>

            {/* PWA Install Button */}
            <PWAInstallButton />

            {/* 3. 3-Line Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white shadow-sm transition cursor-pointer flex items-center justify-center"
              title="অধ্যায় সূচিপত্র ও মেনু খুলুন"
              aria-label="Open Chapter Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Chapter Drawer Menu (Sliding from Left) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-start bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          {/* Drawer Sidebar Content */}
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 border-r border-stone-200 dark:border-zinc-800 h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-left duration-250">
            {/* Drawer Header */}
            <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 flex items-center justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-emerald-200 text-xs font-medium mb-1">
                  <Layers className="w-4 h-4" />
                  <span>কারিগরি শিক্ষা বোর্ড প্রবিধান-২০২২</span>
                </div>
                <h2 className="text-lg font-extrabold text-white">
                  {navStage === 'theory' ? 'তত্ত্বীয় অধ্যায় তালিকা (Theory)' : 'ব্যবহারিক পরীক্ষণ তালিকা (Practical)'}
                </h2>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                title="মেনু বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stage Selector: Theory | Practical */}
            <div className="p-3 bg-stone-100 dark:bg-zinc-800/80 border-b border-stone-200 dark:border-zinc-800 flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setNavStage('theory')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                  navStage === 'theory'
                    ? 'bg-emerald-700 text-white shadow-emerald-900/20'
                    : 'bg-white dark:bg-zinc-900 text-stone-700 dark:text-zinc-300 hover:bg-stone-50 dark:hover:bg-zinc-800 border border-stone-200 dark:border-zinc-700'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Theory (তত্ত্বীয়)</span>
              </button>

              <button
                type="button"
                onClick={() => setNavStage('practical')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                  navStage === 'practical'
                    ? 'bg-indigo-700 text-white shadow-indigo-900/20'
                    : 'bg-white dark:bg-zinc-900 text-stone-700 dark:text-zinc-300 hover:bg-stone-50 dark:hover:bg-zinc-800 border border-stone-200 dark:border-zinc-700'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>Practical (ব্যবহারিক)</span>
              </button>
            </div>

            {/* Drawer Body: Conditional List based on navStage */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {navStage === 'theory' ? (
                <>
                  <div className="text-xs text-stone-500 dark:text-zinc-400 font-semibold px-1">
                    <span>তত্ত্বীয় অধ্যায়সমূহ ({BTEB_SUBJECT_INFO.theoryChapters.length}টি)</span>
                  </div>

                  {BTEB_SUBJECT_INFO.theoryChapters.map((ch) => {
                    const isActive = selectedChapterId === ch.id;
                    const isCompleted = ch.isCompletedInBook;

                    return (
                      <div
                        key={ch.id}
                        onClick={() => handleChapterClick(ch.id)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          isActive
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                            : isCompleted
                            ? 'bg-stone-50 dark:bg-zinc-800/60 border-stone-200 dark:border-zinc-700 hover:border-emerald-300 hover:bg-emerald-50/40 dark:hover:bg-zinc-800'
                            : 'bg-stone-50/60 dark:bg-zinc-800/30 border-dashed border-stone-200 dark:border-zinc-700/80 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-8 h-8 rounded-xl font-bold font-mono text-sm flex items-center justify-center shrink-0 mt-0.5 ${
                                isActive
                                  ? 'bg-emerald-700 text-white'
                                  : isCompleted
                                  ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300'
                                  : 'bg-stone-200 dark:bg-zinc-700 text-stone-600 dark:text-zinc-400'
                              }`}
                            >
                              ০{ch.id}
                            </div>
                            <div>
                              <h3
                                className={`text-sm font-bold leading-snug ${
                                  isActive
                                    ? 'text-emerald-900 dark:text-emerald-200 font-extrabold'
                                    : 'text-stone-900 dark:text-zinc-100'
                                }`}
                              >
                                {ch.titleBn}
                              </h3>
                              <p className="text-xs text-stone-500 dark:text-zinc-400 font-mono mt-0.5">
                                {ch.titleEn}
                              </p>
                            </div>
                          </div>

                          <ChevronRight
                            className={`w-5 h-5 shrink-0 mt-1 transition ${
                              isActive
                                ? 'text-emerald-700 dark:text-emerald-400 transform translate-x-1'
                                : 'text-stone-400 dark:text-zinc-600'
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className="text-xs text-stone-500 dark:text-zinc-400 font-semibold px-1">
                    <span>ব্যবহারিক পরীক্ষণসমূহ ({BTEB_SUBJECT_INFO.practicalExperiments.length}টি)</span>
                  </div>

                  {BTEB_SUBJECT_INFO.practicalExperiments.map((exp) => {
                    const targetChapterId = getExperimentChapterId(exp.id);
                    const hasInteractiveLab = targetChapterId !== undefined && targetChapterId <= 9;
                    const isActive = targetChapterId === selectedChapterId || (exp.id === 1 && selectedChapterId === 2);

                    return (
                      <div
                        key={exp.id}
                        onClick={() => handlePracticalClick(hasInteractiveLab ? targetChapterId : undefined)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          isActive
                            ? 'bg-indigo-100/90 dark:bg-indigo-950/80 border-indigo-500 shadow-xs ring-1 ring-indigo-500'
                            : hasInteractiveLab
                            ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/70'
                            : 'bg-stone-50/60 dark:bg-zinc-800/30 border-dashed border-stone-200 dark:border-zinc-700/80 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-8 h-8 rounded-xl font-bold font-mono text-sm flex items-center justify-center shrink-0 mt-0.5 ${
                                isActive
                                  ? 'bg-indigo-800 text-white shadow-xs'
                                  : hasInteractiveLab
                                  ? 'bg-indigo-700 text-white'
                                  : 'bg-stone-200 dark:bg-zinc-700 text-stone-600 dark:text-zinc-400'
                              }`}
                            >
                              P{exp.id}
                            </div>
                            <div>
                              <h3
                                className={`text-sm font-bold leading-snug ${
                                  isActive
                                    ? 'text-indigo-950 dark:text-indigo-100 font-extrabold'
                                    : 'text-stone-900 dark:text-zinc-100'
                                }`}
                              >
                                {exp.titleBn}
                              </h3>
                              <p className="text-xs text-stone-500 dark:text-zinc-400 font-mono mt-0.5">
                                {exp.titleEn}
                              </p>
                            </div>
                          </div>

                          <ChevronRight
                            className={`w-5 h-5 shrink-0 mt-1 transition ${
                              isActive
                                ? 'text-indigo-700 dark:text-indigo-400 transform translate-x-1'
                                : 'text-stone-400 dark:text-zinc-500'
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>

          {/* Right Backdrop click to close */}
          <div
            className="flex-1 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
};
