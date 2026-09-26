import React, { useState } from 'react';
import { Layers, Search, RefreshCw, CheckCircle, AlertTriangle, Sparkles, Terminal, ArrowRight, Zap, ChevronRight } from 'lucide-react';

export const SearchingVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'linear' | 'binary' | 'compare'>('linear');

  // Linear Search State
  const [linearArray] = useState<number[]>([15, 42, 8, 91, 23, 67, 34, 88, 50, 12]);
  const [linearTarget, setLinearTarget] = useState<string>('23');
  const [linearCurrentIdx, setLinearCurrentIdx] = useState<number | null>(null);
  const [linearFoundIdx, setLinearFoundIdx] = useState<number | null>(null);
  const [linearSteps, setLinearSteps] = useState<number>(0);
  const [linearMsg, setLinearMsg] = useState<{ text: string; type: 'info' | 'success' | 'error' }>({
    text: 'লিনিয়ার সার্চ প্রস্তুত। টার্গেট মান লিখে সার্চ বাটনে চাপ দিন।',
    type: 'info',
  });

  // Binary Search State
  const [binaryArray] = useState<number[]>([10, 18, 25, 34, 42, 55, 68, 77, 85, 99]);
  const [binaryTarget, setBinaryTarget] = useState<string>('68');
  const [lowPtr, setLowPtr] = useState<number | null>(null);
  const [midPtr, setMidPtr] = useState<number | null>(null);
  const [highPtr, setHighPtr] = useState<number | null>(null);
  const [binaryFoundIdx, setBinaryFoundIdx] = useState<number | null>(null);
  const [binarySteps, setBinarySteps] = useState<number>(0);
  const [binaryMsg, setBinaryMsg] = useState<{ text: string; type: 'info' | 'success' | 'error' }>({
    text: 'বাইনারি সার্চ প্রস্তুত (অ্যারে সর্ট করা অবস্থায় আছে)।',
    type: 'info',
  });

  // Side-by-side Compare State
  const [compareSize] = useState<number>(100);
  const [compareTarget] = useState<number>(87);

  // --- Linear Search Step-by-Step Simulation ---
  const handleLinearSearch = () => {
    const target = parseInt(linearTarget.trim(), 10);
    if (isNaN(target)) return;

    setLinearCurrentIdx(null);
    setLinearFoundIdx(null);
    setLinearSteps(0);

    let idx = 0;
    const interval = setInterval(() => {
      setLinearCurrentIdx(idx);
      setLinearSteps(idx + 1);

      if (linearArray[idx] === target) {
        clearInterval(interval);
        setLinearFoundIdx(idx);
        setLinearMsg({
          text: `✅ ডাটা পাওয়া গেছে! index [${idx}] এ মান ${target} বিদ্যমান। মোট ধাপ/কম্প্যারিসন: ${idx + 1}`,
          type: 'success',
        });
      } else if (idx === linearArray.length - 1) {
        clearInterval(interval);
        setLinearMsg({
          text: `❌ মান ${target} অ্যারেতে পাওয়া যায়নি। মোট কম্প্যারিসন: ${linearArray.length}`,
          type: 'error',
        });
      }
      idx++;
    }, 400);
  };

  // --- Binary Search Simulation ---
  const handleBinarySearch = () => {
    const target = parseInt(binaryTarget.trim(), 10);
    if (isNaN(target)) return;

    setLowPtr(0);
    setHighPtr(binaryArray.length - 1);
    setMidPtr(Math.floor((0 + binaryArray.length - 1) / 2));
    setBinaryFoundIdx(null);

    let low = 0;
    let high = binaryArray.length - 1;
    let stepCount = 0;

    const interval = setInterval(() => {
      if (low > high) {
        clearInterval(interval);
        setBinaryMsg({
          text: `❌ মান ${target} বাইনারি সার্চে পাওয়া যায়নি।`,
          type: 'error',
        });
        return;
      }

      const mid = Math.floor((low + high) / 2);
      stepCount++;
      setLowPtr(low);
      setHighPtr(high);
      setMidPtr(mid);
      setBinarySteps(stepCount);

      if (binaryArray[mid] === target) {
        clearInterval(interval);
        setBinaryFoundIdx(mid);
        setBinaryMsg({
          text: `✅ ডাটা পাওয়া গেছে! index [${mid}] এ মান ${target} বিদ্যমান। মোট কম্প্যারিসন লেগেছে মাত্র: ${stepCount}টি!`,
          type: 'success',
        });
      } else if (binaryArray[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }, 700);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-sm space-y-6">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800">
              Interactive Search Lab
            </span>
            <span className="text-xs text-stone-500 font-mono">Linear vs Binary Search</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-zinc-100 mt-1 flex items-center gap-2">
            <Search className="w-6 h-6 text-emerald-600" />
            সার্চিং অপারেশন (Searching Operation) সিমুলেটর
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center bg-stone-100 dark:bg-zinc-800 p-1 rounded-2xl border border-stone-200 dark:border-zinc-700">
          <button
            onClick={() => setActiveTab('linear')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'linear'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ১. লিনিয়ার সার্চ (Linear Search)
          </button>
          <button
            onClick={() => setActiveTab('binary')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'binary'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ২. বাইনারি সার্চ (Binary Search)
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'compare'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ৩. পারফরম্যান্স তুলনা (Big-O)
          </button>
        </div>
      </div>

      {/* TAB 1: LINEAR SEARCH */}
      {activeTab === 'linear' && (
        <div className="space-y-6">
          {/* Status Message */}
          <div
            className={`p-4 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-semibold transition ${
              linearMsg.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                : linearMsg.type === 'error'
                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                : 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-800'
            }`}
          >
            {linearMsg.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />}
            {linearMsg.type === 'error' && <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />}
            {linearMsg.type === 'info' && <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />}
            <span>{linearMsg.text}</span>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-3 bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700">
            <span className="text-xs font-bold text-stone-700 dark:text-zinc-300 shrink-0">
              খোঁজার টার্গেট মান:
            </span>
            <input
              type="number"
              value={linearTarget}
              onChange={(e) => setLinearTarget(e.target.value)}
              className="px-3.5 py-2 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 outline-none w-32"
            />
            <button
              onClick={handleLinearSearch}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Linear Search শুরু করুন</span>
            </button>
            <span className="ml-auto text-xs font-mono font-bold text-stone-500">
              মোট কম্প্যারিসন: {linearSteps}
            </span>
          </div>

          {/* Linear Array Display */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-3 bg-stone-100 dark:bg-zinc-950 p-4 sm:p-6 rounded-2xl border border-stone-200 dark:border-zinc-800">
            {linearArray.map((val, idx) => {
              const isScanning = linearCurrentIdx === idx;
              const isFound = linearFoundIdx === idx;

              return (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div className="h-5 text-[10px] font-bold">
                    {isScanning && !isFound && <span className="text-amber-500 animate-pulse">Checking</span>}
                    {isFound && <span className="text-emerald-600 font-extrabold">FOUND!</span>}
                  </div>

                  <div
                    className={`w-full aspect-square rounded-2xl flex items-center justify-center font-extrabold text-sm sm:text-base border-2 transition-all duration-300 shadow-xs ${
                      isFound
                        ? 'border-emerald-600 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100 scale-110 ring-4 ring-emerald-400/50'
                        : isScanning
                        ? 'border-amber-500 bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 scale-105'
                        : 'border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-800 dark:text-zinc-100'
                    }`}
                  >
                    {val}
                  </div>

                  <span className="text-[10px] font-mono text-stone-400 font-bold">[{idx}]</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: BINARY SEARCH */}
      {activeTab === 'binary' && (
        <div className="space-y-6">
          {/* Status Message */}
          <div
            className={`p-4 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-semibold transition ${
              binaryMsg.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                : binaryMsg.type === 'error'
                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                : 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-800'
            }`}
          >
            {binaryMsg.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />}
            {binaryMsg.type === 'error' && <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />}
            {binaryMsg.type === 'info' && <Zap className="w-5 h-5 text-blue-600 shrink-0" />}
            <span>{binaryMsg.text}</span>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-3 bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700">
            <span className="text-xs font-bold text-stone-700 dark:text-zinc-300 shrink-0">
              সর্টেড অ্যারেতে মান খুঁজুন:
            </span>
            <input
              type="number"
              value={binaryTarget}
              onChange={(e) => setBinaryTarget(e.target.value)}
              className="px-3.5 py-2 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 outline-none w-32"
            />
            <button
              onClick={handleBinarySearch}
              className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Binary Search (Divide & Conquer)</span>
            </button>
            <span className="ml-auto text-xs font-mono font-bold text-emerald-600">
              ধাপ সংখ্যা: {binarySteps} / Max {Math.ceil(Math.log2(10))}
            </span>
          </div>

          {/* Binary Array Display with LOW, MID, HIGH Pointers */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-3 bg-stone-100 dark:bg-zinc-950 p-4 sm:p-6 rounded-2xl border border-stone-200 dark:border-zinc-800">
            {binaryArray.map((val, idx) => {
              const isLow = lowPtr === idx;
              const isMid = midPtr === idx;
              const isHigh = highPtr === idx;
              const isFound = binaryFoundIdx === idx;
              const isOutRange = lowPtr !== null && highPtr !== null && (idx < lowPtr || idx > highPtr);

              return (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div className="h-5 text-[10px] font-extrabold flex gap-1">
                    {isLow && <span className="text-blue-600">L</span>}
                    {isMid && <span className="text-amber-500">MID</span>}
                    {isHigh && <span className="text-rose-600">H</span>}
                  </div>

                  <div
                    className={`w-full aspect-square rounded-2xl flex items-center justify-center font-extrabold text-sm sm:text-base border-2 transition-all duration-300 shadow-xs ${
                      isFound
                        ? 'border-emerald-600 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100 scale-110 ring-4 ring-emerald-400/50'
                        : isMid
                        ? 'border-amber-500 bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 scale-105'
                        : isOutRange
                        ? 'border-dashed border-stone-200 dark:border-zinc-800 bg-stone-200/50 dark:bg-zinc-900/30 text-stone-400 opacity-40'
                        : 'border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-800 dark:text-zinc-100'
                    }`}
                  >
                    {val}
                  </div>

                  <span className="text-[10px] font-mono text-stone-400 font-bold">[{idx}]</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: PERFORMANCE COMPARISON */}
      {activeTab === 'compare' && (
        <div className="space-y-6 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 dark:bg-zinc-800/60 p-5 rounded-2xl border border-stone-200 dark:border-zinc-700 space-y-3">
              <div className="font-extrabold text-stone-900 dark:text-zinc-100 text-sm flex items-center justify-between">
                <span>১. লিনিয়ার সার্চ (Linear Search)</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 font-mono">
                  $O(n)$
                </span>
              </div>
              <p className="text-stone-600 dark:text-zinc-400">
                ১০০টি উপাদানের মধ্যে সর্বশেষে থাকা মান খুঁজতে সর্বোচ্চ **১০০টি কম্প্যারিসন** লাগবে।
              </p>
              <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-stone-200 dark:border-zinc-700 font-mono text-stone-800 dark:text-zinc-200">
                100 Elements ➔ Worst Case: 100 steps
              </div>
            </div>

            <div className="bg-emerald-50/70 dark:bg-emerald-950/30 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 space-y-3">
              <div className="font-extrabold text-emerald-900 dark:text-emerald-100 text-sm flex items-center justify-between">
                <span>২. বাইনারি সার্চ (Binary Search)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100 font-mono">
                  $O(\log_2 n)$
                </span>
              </div>
              <p className="text-emerald-950 dark:text-emerald-200">
                ১০০টি উপাদানের মধ্যে একই মান খুঁজতে বাইনারি সার্চে সর্বোচ্চ **মাত্র ৭টি কম্প্যারিসন** লাগবে! ($\log_2 100 \approx 6.64$)
              </p>
              <div className="bg-emerald-950 text-emerald-100 p-3 rounded-xl font-mono">
                100 Elements ➔ Worst Case: Max 7 steps!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
