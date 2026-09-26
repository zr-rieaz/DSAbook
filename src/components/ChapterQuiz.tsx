import React, { useState } from 'react';
import { QuizQuestion } from '../types/syllabus';
import { CheckCircle2, XCircle, RotateCcw, Sparkles, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ChapterQuizProps {
  questions: QuizQuestion[];
  fontSize: 'sm' | 'base' | 'lg';
}

export const ChapterQuiz: React.FC<ChapterQuizProps> = ({ questions, fontSize }) => {
  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleSelectOption = (qId: number, optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    let sc = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        sc++;
      }
    });
    setScore(sc);
    setIsSubmitted(true);

    if (sc >= questions.length * 0.7) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  const percentage = Math.round((score / questions.length) * 100);
  const fontClass = fontSize === 'sm' ? 'text-xs sm:text-sm' : fontSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';

  return (
    <section id="chapter-quiz" className="scroll-mt-24 space-y-3">
      {/* Clickable Quiz Banner */}
      <div
        onClick={() => setIsSectionOpen(!isSectionOpen)}
        className="bg-gradient-to-r from-emerald-900 via-teal-900 to-indigo-950 text-white rounded-xl p-4 sm:p-5 shadow-xs flex items-center justify-between gap-3 cursor-pointer hover:opacity-95 transition select-none"
      >
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-amber-400 text-stone-950 text-xs font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
              অনলাইন মূল্যায়ন ও স্ব-পরীক্ষা
            </span>
            <span className="text-emerald-200 text-xs font-mono">BTEB MCQ Mock Exam • {questions.length} Questions</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold">
            নৈর্ব্যক্তিক ও বহুনির্বাচনী মক টেস্ট (MCQ Test)
          </h3>
          <p className="text-emerald-100/90 text-xs truncate">
            অধ্যায়ের প্রতিটি টপিক আয়ত্ত করার পর নিজেকে যাচাই করতে বহুনির্বাচনী প্রশ্নের উত্তর দিন।
          </p>
        </div>

        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 border border-white/10 transition">
          {isSectionOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
        </div>
      </div>

      {/* Collapsible Quiz Content */}
      {isSectionOpen && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Result Card if submitted */}
          {isSubmitted && (
            <div className="bg-white dark:bg-zinc-900 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-xl animate-in zoom-in-95 duration-300">
              <div className="inline-flex p-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <Trophy className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-stone-900 dark:text-zinc-100">
                পরীক্ষার ফলাফল ও পারফরম্যান্স
              </h4>
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
                {score} / {questions.length} ({percentage}%)
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400 max-w-md mx-auto">
                {percentage >= 80
                  ? '🎉 অসাধারণ! আপনার অধ্যায়টির মূল ভিত্তি অত্যন্ত শক্তিশালী (গ্রেড: A+)।'
                  : percentage >= 60
                  ? '👍 ভালো প্রস্তুতি! তবে কিছু বিষয়ে পুনরাবৃত্তি প্রয়োজন (গ্রেড: A)।'
                  : '📚 আরও একটু মনোযোগ দিয়ে অধ্যায়টির বিস্তারিত আলোচনা পড়ে আবার চেষ্টা করুন।'}
              </p>
              <button
                onClick={handleRetake}
                className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                আবার পরীক্ষা দিন (Retake Quiz)
              </button>
            </div>
          )}

          {/* Questions Stack */}
          <div className="space-y-6">
            {questions.map((q, idx) => {
              const selectedOpt = selectedAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-stone-900 dark:text-zinc-100 text-sm sm:text-base leading-snug">
                      {q.questionBn}
                    </h4>
                  </div>

                  {/* Options List */}
                  <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt, optIdx) => {
                      let btnClass = 'bg-stone-50 dark:bg-zinc-800/40 text-stone-800 dark:text-zinc-200 border-stone-200 dark:border-zinc-700 hover:border-emerald-500/50';

                      if (isSubmitted) {
                        if (optIdx === q.correctAnswerIndex) {
                          btnClass = 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border-emerald-500 font-bold';
                        } else if (selectedOpt === optIdx) {
                          btnClass = 'bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border-rose-500';
                        }
                      } else if (selectedOpt === optIdx) {
                        btnClass = 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-100 border-emerald-600 font-semibold shadow-xs';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition flex items-center justify-between gap-2 cursor-pointer ${btnClass}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-white dark:bg-zinc-700 border border-stone-300 dark:border-zinc-600 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </div>

                          {isSubmitted && optIdx === q.correctAnswerIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {isSubmitted && selectedOpt === optIdx && optIdx !== q.correctAnswerIndex && (
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submission */}
                  {isSubmitted && q.explanationBn && (
                    <div className="bg-emerald-50/50 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-stone-700 dark:text-zinc-300 leading-relaxed">
                      <strong className="text-emerald-800 dark:text-emerald-400 font-bold block mb-0.5">
                        ব্যাখ্যা:
                      </strong>
                      {q.explanationBn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          {!isSubmitted && (
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg transition text-sm flex items-center gap-2 mx-auto cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                উত্তর সাবমিট করুন (Submit Answers)
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
