import React from 'react';
import { X, BookOpen, Award, CheckCircle, Clock, Layers, FileCode } from 'lucide-react';
import { BTEB_SUBJECT_INFO } from '../data/syllabusData';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter?: (id: number) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ isOpen, onClose, onSelectChapter }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 border border-stone-300 dark:border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-amber-400 text-stone-950 text-xs font-bold px-2 py-0.5 rounded">
                BTEB Probidhan-2022
              </span>
              <span className="text-emerald-200 text-xs">Subject Code: {BTEB_SUBJECT_INFO.subjectCode}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">{BTEB_SUBJECT_INFO.subjectNameBn}</h2>
            <p className="text-emerald-100 text-sm font-mono">{BTEB_SUBJECT_INFO.subjectNameEn}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800 dark:text-zinc-200 text-sm">
          {/* Mark Distribution Card */}
          <div className="bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-xl border border-stone-200 dark:border-zinc-700">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5" />
              নম্বর বণ্টন ও ক্রেডিট স্ট্রাকচার (Mark Distribution: Total {BTEB_SUBJECT_INFO.marksDistribution.totalMarks} Marks)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg border border-stone-200 dark:border-zinc-700 shadow-xs">
                <div className="text-xs text-stone-500 dark:text-zinc-400">তত্ত্বীয় ধারাবাহিক (TC)</div>
                <div className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                  {BTEB_SUBJECT_INFO.marksDistribution.theoryContinuous}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg border border-stone-200 dark:border-zinc-700 shadow-xs">
                <div className="text-xs text-stone-500 dark:text-zinc-400">তত্ত্বীয় চূড়ান্ত (TF)</div>
                <div className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                  {BTEB_SUBJECT_INFO.marksDistribution.theoryFinal}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg border border-stone-200 dark:border-zinc-700 shadow-xs">
                <div className="text-xs text-stone-500 dark:text-zinc-400">ব্যবহারিক ধারাবাহিক (PC)</div>
                <div className="text-xl font-bold text-teal-700 dark:text-teal-400">
                  {BTEB_SUBJECT_INFO.marksDistribution.practicalContinuous}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg border border-stone-200 dark:border-zinc-700 shadow-xs">
                <div className="text-xs text-stone-500 dark:text-zinc-400">ব্যবহারিক চূড়ান্ত (PF)</div>
                <div className="text-xl font-bold text-teal-700 dark:text-teal-400">
                  {BTEB_SUBJECT_INFO.marksDistribution.practicalFinal}
                </div>
              </div>
            </div>
          </div>

          {/* Theory Chapters List */}
          <div>
            <h3 className="font-bold text-base text-stone-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-700" />
              তত্ত্বীয় সিলেবাসের অধ্যায়সমূহ (9 Theory Chapters)
            </h3>
            <div className="space-y-2">
              {BTEB_SUBJECT_INFO.theoryChapters.map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => {
                    if (ch.isCompletedInBook && onSelectChapter) {
                      onSelectChapter(ch.id);
                      onClose();
                    }
                  }}
                  className={`p-3 rounded-xl border transition ${
                    ch.isCompletedInBook
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 cursor-pointer hover:shadow-md'
                      : 'bg-stone-50 dark:bg-zinc-800/40 border-stone-200 dark:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-mono">
                        {ch.id}
                      </span>
                      <span>{ch.titleBn}</span>
                    </div>
                    {ch.isCompletedInBook ? (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> সম্পূর্ণ পাঠ্যবই অন্তর্ভুক্ত
                      </span>
                    ) : (
                      <span className="text-xs text-stone-500 dark:text-zinc-400">সিলেবাসভুক্ত</span>
                    )}
                  </div>
                  <ul className="mt-2 pl-8 list-disc list-inside text-xs text-stone-600 dark:text-zinc-400 space-y-0.5">
                    {ch.subtopicList.map((st, i) => (
                      <li key={i}>{st}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Experiments */}
          <div>
            <h3 className="font-bold text-base text-stone-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <FileCode className="w-5 h-5 text-teal-700" />
              ব্যবহারিক পরীক্ষণসমূহ (11 Practical Experiments)
            </h3>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              {BTEB_SUBJECT_INFO.practicalExperiments.map((exp) => (
                <div key={exp.id} className="p-2.5 rounded-lg bg-stone-50 dark:bg-zinc-800/40 border border-stone-200 dark:border-zinc-700">
                  <div className="font-semibold text-stone-800 dark:text-zinc-200 flex items-start gap-1.5">
                    <span className="text-teal-700 dark:text-teal-400 font-bold font-mono">#{exp.id}</span>
                    <span>{exp.titleBn}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-100 dark:bg-zinc-800/80 px-6 py-3 border-t border-stone-200 dark:border-zinc-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
