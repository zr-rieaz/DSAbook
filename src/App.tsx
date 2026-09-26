import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SyllabusModal } from './components/SyllabusModal';
import { SimulateLabModal } from './components/SimulateLabModal';
import { PracticalLabModal } from './components/PracticalLabModal';
import { ChapterHeader } from './components/ChapterHeader';
import { SubtopicCard } from './components/SubtopicCard';
import { ChapterSummary } from './components/ChapterSummary';
import { BoardQuestionsSection } from './components/BoardQuestionsSection';
import { ChapterQuiz } from './components/ChapterQuiz';
import { Sidebar } from './components/Sidebar';
import { CHAPTER_1_DATA, CHAPTER_2_DATA, CHAPTER_3_DATA, CHAPTER_4_DATA, CHAPTER_5_DATA, CHAPTER_6_DATA, CHAPTER_7_DATA, CHAPTER_8_DATA, CHAPTER_9_DATA, BTEB_SUBJECT_INFO } from './data/syllabusData';
import { ChevronUp, BookMarked, ArrowRight, ArrowLeft } from 'lucide-react';

export default function App() {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('bteb_selected_chapter');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 1 && parsed <= 9) return parsed;
      }
    } catch {
      // Ignore
    }
    return 1;
  });

  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>(() => {
    try {
      const saved = localStorage.getItem('bteb_font_size');
      if (saved === 'sm' || saved === 'base' || saved === 'lg') return saved;
    } catch {
      // Ignore
    }
    return 'base';
  });

  const [isSyllabusOpen, setIsSyllabusOpen] = useState<boolean>(false);
  const [isSimulateLabOpen, setIsSimulateLabOpen] = useState<boolean>(false);
  const [isPracticalLabOpen, setIsPracticalLabOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [activeSection, setActiveSection] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('bteb_active_section');
      if (saved) return saved;
    } catch {
      // Ignore
    }
    return 'subtopic-1.1';
  });

  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Active Chapter Object
  const currentChapter =
    selectedChapterId === 1
      ? CHAPTER_1_DATA
      : selectedChapterId === 2
      ? CHAPTER_2_DATA
      : selectedChapterId === 3
      ? CHAPTER_3_DATA
      : selectedChapterId === 4
      ? CHAPTER_4_DATA
      : selectedChapterId === 5
      ? CHAPTER_5_DATA
      : selectedChapterId === 6
      ? CHAPTER_6_DATA
      : selectedChapterId === 7
      ? CHAPTER_7_DATA
      : selectedChapterId === 8
      ? CHAPTER_8_DATA
      : CHAPTER_9_DATA;

  // Enforce dark mode strictly
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('paper-mode', 'light');
    root.style.colorScheme = 'dark';
  }, []);

  // Save state to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem('bteb_selected_chapter', selectedChapterId.toString());
    } catch {
      // Ignore
    }
  }, [selectedChapterId]);

  useEffect(() => {
    try {
      localStorage.setItem('bteb_active_section', activeSection);
    } catch {
      // Ignore
    }
  }, [activeSection]);

  useEffect(() => {
    try {
      localStorage.setItem('bteb_font_size', fontSize);
    } catch {
      // Ignore
    }
  }, [fontSize]);

  // Handle scroll listener & save scroll Y position
  useEffect(() => {
    let timeoutId: any;
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        try {
          localStorage.setItem('bteb_scroll_y', window.scrollY.toString());
        } catch {
          // Ignore
        }
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Restore scroll position on initial load
  useEffect(() => {
    try {
      const savedY = localStorage.getItem('bteb_scroll_y');
      if (savedY) {
        const y = parseInt(savedY, 10);
        if (y > 0) {
          setTimeout(() => {
            window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
          }, 80);
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapter = (id: number) => {
    setSelectedChapterId(id);
    setActiveSection(`subtopic-${id}.1`);
    try {
      localStorage.setItem('bteb_scroll_y', '0');
    } catch {
      // Ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter subtopics if search query is present
  const filteredSubtopics = currentChapter.subtopics.filter((st) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      st.id.includes(q) ||
      st.titleBn.toLowerCase().includes(q) ||
      st.titleEn.toLowerCase().includes(q) ||
      st.concept.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      {/* Top Navigation with Simulate Lab, Practical, and Menu */}
      <Navbar
        fontSize={fontSize}
        setFontSize={setFontSize}
        onOpenSyllabus={() => setIsSyllabusOpen(true)}
        onOpenSimulateLab={() => setIsSimulateLabOpen(true)}
        onOpenPracticalLab={() => setIsPracticalLabOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedChapterId={selectedChapterId}
        onSelectChapter={handleSelectChapter}
      />

      {/* Main Container Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full min-w-0">
          {/* Main Content Area */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-12 print-page min-w-0 w-full overflow-hidden">
            {/* Chapter Header Banner */}
            <ChapterHeader
              chapter={currentChapter}
              activeSection={activeSection}
              onSelectSection={setActiveSection}
              onOpenSimulateLab={() => setIsSimulateLabOpen(true)}
              onOpenPracticalLab={() => setIsPracticalLabOpen(true)}
            />

            {/* Subtopics Sequential Detailed Discussion */}
            <div className="space-y-4">
              <div className="border-b-2 border-emerald-800/40 pb-2 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
                  <span className="text-emerald-700 dark:text-emerald-400">§</span>
                  অধ্যায়ের বিস্তারিত আলোচনা (Topic-by-Topic Detailed Text)
                </h2>
                <span className="text-xs text-stone-600 dark:text-zinc-400 font-mono">
                  BTEB Probidhan-2022 Syllabus {currentChapter.id}.1 - {currentChapter.id}.{currentChapter.subtopics.length}
                </span>
              </div>

              <div className="space-y-3">
                {filteredSubtopics.map((subtopic) => (
                  <SubtopicCard
                    key={subtopic.id}
                    subtopic={subtopic}
                    fontSize={fontSize}
                  />
                ))}
              </div>
            </div>

            {/* Chapter Summary & Quick Revision Cheat-Sheet */}
            <ChapterSummary
              summaryPoints={currentChapter.summaryPoints}
              fontSize={fontSize}
            />

            {/* Board Pattern Q&A Bank */}
            <BoardQuestionsSection
              questions={currentChapter.boardQuestions}
              fontSize={fontSize}
              searchFilter={searchQuery}
            />

            {/* Interactive MCQ Mock Test */}
            <ChapterQuiz
              questions={currentChapter.quizQuestions}
              fontSize={fontSize}
            />

            {/* Bottom Chapter Switcher Navigation */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              {selectedChapterId > 1 ? (
                <button
                  onClick={() => handleSelectChapter(selectedChapterId - 1)}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 text-stone-800 dark:text-zinc-200 text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  পূর্ববর্তী: অধ্যায় ০{selectedChapterId - 1}
                </button>
              ) : (
                <div />
              )}

              {selectedChapterId < 9 ? (
                <button
                  onClick={() => handleSelectChapter(selectedChapterId + 1)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-600 hover:to-emerald-600 text-white text-xs sm:text-sm font-bold shadow-md transition flex items-center gap-2 cursor-pointer ml-auto"
                >
                  পরবর্তী: অধ্যায় ০{selectedChapterId + 1}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => handleSelectChapter(1)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white text-xs sm:text-sm font-bold shadow-md transition flex items-center gap-2 cursor-pointer ml-auto"
                >
                  <BookMarked className="w-4 h-4" />
                  প্রথম অধ্যায়ে ফিরে যান
                </button>
              )}
            </div>
          </div>

          {/* Right Sidebar (Desktop Table of Contents & Syllabus Navigator) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3 sidebar-nav">
            <div className="sticky top-24 space-y-6">
              <Sidebar
                chapter={currentChapter}
                syllabusInfo={BTEB_SUBJECT_INFO}
                activeSubtopicId={activeSection.replace('subtopic-', '')}
                onOpenSyllabus={() => setIsSyllabusOpen(true)}
                onSelectChapter={handleSelectChapter}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg transition-transform transform hover:scale-110 z-30 cursor-pointer"
          title="উপরে যান"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* 1. Simulate Lab Modal */}
      <SimulateLabModal
        isOpen={isSimulateLabOpen}
        onClose={() => setIsSimulateLabOpen(false)}
        selectedChapterId={selectedChapterId}
      />

      {/* 2. Practical Program Lab Modal */}
      <PracticalLabModal
        isOpen={isPracticalLabOpen}
        onClose={() => setIsPracticalLabOpen(false)}
        practicalPrograms={currentChapter.practicalPrograms}
        fontSize={fontSize}
        chapterId={selectedChapterId}
      />

      {/* 3. Full BTEB Syllabus Modal */}
      <SyllabusModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        onSelectChapter={(id) => {
          if (id <= 9) {
            handleSelectChapter(id);
            setIsSyllabusOpen(false);
          }
        }}
      />

      {/* Academic Footer */}
      <footer className="mt-16 border-t border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 py-6 text-center text-xs text-stone-600 dark:text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-medium text-stone-700 dark:text-zinc-300">
            বিষয়: Data Structure & Algorithm (বিষয় কোড: ২৮৫৪২) • কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি (CST) ৪র্থ পর্ব
          </p>
        </div>
      </footer>
    </div>
  );
}
