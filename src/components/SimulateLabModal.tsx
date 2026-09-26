import React from 'react';
import { ArrowLeft, X, Sparkles, Cpu, Layers, Maximize2 } from 'lucide-react';
import { DataOperationsVisualizer } from './DataOperationsVisualizer';
import { MemoryVisualizer } from './MemoryVisualizer';
import { ComplexityVisualizer } from './ComplexityVisualizer';
import { ArrayPointerStringVisualizer } from './ArrayPointerStringVisualizer';
import { StackVisualizer } from './StackVisualizer';
import { QueueVisualizer } from './QueueVisualizer';
import { LinkedListVisualizer } from './LinkedListVisualizer';
import { TreeVisualizer } from './TreeVisualizer';
import { SearchingVisualizer } from './SearchingVisualizer';
import { SortingVisualizer } from './SortingVisualizer';

interface SimulateLabModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedChapterId: number;
}

export const SimulateLabModal: React.FC<SimulateLabModalProps> = ({
  isOpen,
  onClose,
  selectedChapterId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen m-0 p-0 bg-stone-100 dark:bg-zinc-950 flex flex-col overflow-hidden animate-in fade-in duration-200">
      {/* Top Header - Full Width */}
      <header className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-teal-800/80 shadow-md shrink-0 w-full">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5 text-xs font-semibold cursor-pointer shrink-0"
            title="ফিরে যান"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">ফিরে যান</span>
          </button>

          <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center font-bold text-amber-300 shadow-inner shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-emerald-200 text-xs font-semibold">
              <span className="truncate">অধ্যায় ০{selectedChapterId}</span>
            </div>
            <h1 className="text-sm sm:text-lg font-extrabold text-white truncate">
              {selectedChapterId === 1
                ? 'ডাটা অপারেশন ও মেমরি ভিজ্যুয়ালাইজেশন ল্যাব'
                : selectedChapterId === 2
                ? 'অ্যালগরিদমিক টাইম কমপ্লেক্সিটি ও অ্যাসিম্পটোটিক গ্রোথ সিমুলেটর'
                : selectedChapterId === 3
                ? '2D অ্যারে মেমরি ক্যালকুলেটর, পয়েন্টার ও স্ট্রিং সিমুলেটর'
                : selectedChapterId === 4
                ? 'স্ট্যাক অপারেশন (PUSH, POP, PEEK) ও Infix-to-Postfix কনভার্সন সিমুলেটর'
                : selectedChapterId === 5
                ? 'কিউ (Queue), সার্কুলার কিউ ও ডিকিউ সিমুলেটর'
                : selectedChapterId === 6
                ? 'লিংকড লিস্ট (Linked List) ও পয়েন্টার ডাইনামিক মেমরি সিমুলেটর'
                : selectedChapterId === 7
                ? 'বাইনারি সার্চ ট্রি (BST) ও রিকার্সিভ ট্রাভার্সাল সিমুলেটর'
                : selectedChapterId === 8
                ? 'লিনিয়ার ও বাইনারি সার্চিং পারফরম্যান্স সিমুলেটর'
                : 'বাবল, কুইক ও মার্জ সর্টিং অ্যালগরিদম ভিজ্যুয়ালাইজেশন ল্যাব'}
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

      {/* Full-Screen Lab Body - No Outer Margins */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 w-full min-w-0 bg-stone-100 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto space-y-8 min-w-0">
          {selectedChapterId === 1 ? (
            <>
              {/* 1.5 Core Data Operations Live Sandbox */}
              <DataOperationsVisualizer />
              {/* 1.6 Static vs Dynamic RAM Visualizer */}
              <MemoryVisualizer />
            </>
          ) : selectedChapterId === 2 ? (
            /* Chapter 2 Big-O Complexity Visualizer */
            <ComplexityVisualizer />
          ) : selectedChapterId === 3 ? (
            /* Chapter 3 Array / Pointer / String Visualizer */
            <ArrayPointerStringVisualizer />
          ) : selectedChapterId === 4 ? (
            /* Chapter 4 Stack Visualizer */
            <StackVisualizer />
          ) : selectedChapterId === 5 ? (
            /* Chapter 5 Queue Visualizer */
            <QueueVisualizer />
          ) : selectedChapterId === 6 ? (
            /* Chapter 6 Linked List Visualizer */
            <LinkedListVisualizer />
          ) : selectedChapterId === 7 ? (
            /* Chapter 7 Tree Visualizer */
            <TreeVisualizer />
          ) : selectedChapterId === 8 ? (
            /* Chapter 8 Searching Visualizer */
            <SearchingVisualizer />
          ) : (
            /* Chapter 9 Sorting Visualizer */
            <SortingVisualizer />
          )}
        </div>
      </main>
    </div>
  );
};
