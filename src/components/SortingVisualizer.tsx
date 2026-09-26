import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ArrowRight, CheckCircle, Zap, Cpu, BarChart2, AlertCircle, Info, RefreshCw } from 'lucide-react';

export const SortingVisualizer: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<'bubble' | 'quick' | 'merge'>('bubble');
  const [array, setArray] = useState<number[]>([45, 12, 89, 34, 67, 23, 90, 11, 56, 78]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [comparingIdxs, setComparingIdxs] = useState<number[]>([]);
  const [swappingIdxs, setSwappingIdxs] = useState<number[]>([]);
  const [sortedIdxs, setSortedIdxs] = useState<number[]>([]);
  const [pivotIdx, setPivotIdx] = useState<number | null>(null);
  const [speed, setSpeed] = useState<number>(300); // ms per step
  const [stepCount, setStepCount] = useState<number>(0);
  const [swapCount, setSwapCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('সর্টিং অ্যানিমেশন শুরু করতে "প্লে (Play)" বাটনে চাপ দিন।');

  const stopRef = useRef<boolean>(false);

  const generateRandomArray = () => {
    if (isSorting) return;
    const newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 85) + 10);
    setArray(newArr);
    resetState();
    setMessage('নতুন ১০টি এলোমেলো ডাটা জেনারেট করা হয়েছে।');
  };

  const resetState = () => {
    setIsSorting(false);
    stopRef.current = true;
    setComparingIdxs([]);
    setSwappingIdxs([]);
    setSortedIdxs([]);
    setPivotIdx(null);
    setStepCount(0);
    setSwapCount(0);
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // --- 1. Bubble Sort Visualizer ---
  const runBubbleSort = async () => {
    setIsSorting(true);
    stopRef.current = false;
    let arr = [...array];
    let steps = 0;
    let swaps = 0;
    const n = arr.length;
    let localSorted: number[] = [];

    for (let i = 0; i < n - 1; i++) {
      let swappedInPass = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (stopRef.current) return;
        steps++;
        setStepCount(steps);
        setComparingIdxs([j, j + 1]);
        setMessage(`ধাপ #${steps}: ${arr[j]} এবং ${arr[j + 1]} তুলনা করা হচ্ছে...`);
        await sleep(speed);

        if (arr[j] > arr[j + 1]) {
          if (stopRef.current) return;
          swaps++;
          setSwapCount(swaps);
          setSwappingIdxs([j, j + 1]);
          setMessage(`পজিশন অদল-বদল (Swap): ${arr[j]} > ${arr[j + 1]}`);
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          swappedInPass = true;
          await sleep(speed);
        }
        setSwappingIdxs([]);
      }
      localSorted.push(n - 1 - i);
      setSortedIdxs([...localSorted]);
      if (!swappedInPass) break;
    }
    setSortedIdxs(Array.from({ length: n }, (_, i) => i));
    setComparingIdxs([]);
    setIsSorting(false);
    setMessage(`✅ বাবল সর্টিং সম্পন্ন! মোট তুলনা: ${steps}, মোট সোয়াপ: ${swaps}`);
  };

  // --- 2. Quick Sort Visualizer ---
  const runQuickSort = async () => {
    setIsSorting(true);
    stopRef.current = false;
    let arr = [...array];
    let steps = 0;
    let swaps = 0;
    let localSorted: number[] = [];

    const partition = async (low: number, high: number): Promise<number> => {
      const pivot = arr[high];
      setPivotIdx(high);
      let i = low - 1;

      setMessage(`পাইভট (Pivot) ধরা হলো: ${pivot} (ইনডেক্স ${high})`);
      await sleep(speed);

      for (let j = low; j < high; j++) {
        if (stopRef.current) return high;
        steps++;
        setStepCount(steps);
        setComparingIdxs([j, high]);
        setMessage(`ধাপ #${steps}: উপাদান ${arr[j]} এর সাথে পাইভট ${pivot} এর তুলনা...`);
        await sleep(speed);

        if (arr[j] < pivot) {
          i++;
          swaps++;
          setSwapCount(swaps);
          setSwappingIdxs([i, j]);
          setMessage(`সোয়াপ করা হচ্ছে: ${arr[i]} leftrightarrow ${arr[j]}`);
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setArray([...arr]);
          await sleep(speed);
          setSwappingIdxs([]);
        }
      }

      // Swap pivot to correct place
      swaps++;
      setSwapCount(swaps);
      setSwappingIdxs([i + 1, high]);
      setMessage(`পাইভট ${pivot} সঠিক স্থানে (ইনডেক্স ${i + 1}) বসানো হলো।`);
      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      setArray([...arr]);
      await sleep(speed);

      setSwappingIdxs([]);
      setPivotIdx(null);
      localSorted.push(i + 1);
      setSortedIdxs([...localSorted]);
      return i + 1;
    };

    const quickSortHelper = async (low: number, high: number) => {
      if (low < high) {
        if (stopRef.current) return;
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      } else if (low >= 0 && low < arr.length) {
        localSorted.push(low);
        setSortedIdxs([...localSorted]);
      }
    };

    await quickSortHelper(0, arr.length - 1);
    setSortedIdxs(Array.from({ length: arr.length }, (_, i) => i));
    setComparingIdxs([]);
    setIsSorting(false);
    setMessage(`✅ কুইক সর্টিং সম্পন্ন! মোট তুলনা: ${steps}, মোট সোয়াপ: ${swaps}`);
  };

  // --- 3. Merge Sort Visualizer ---
  const runMergeSort = async () => {
    setIsSorting(true);
    stopRef.current = false;
    let arr = [...array];
    let steps = 0;

    const merge = async (l: number, m: number, r: number) => {
      let n1 = m - l + 1;
      let n2 = r - m;
      let L = arr.slice(l, m + 1);
      let R = arr.slice(m + 1, r + 1);

      let i = 0, j = 0, k = l;

      setMessage(`মার্জ (Merge) করা হচ্ছে Sub-arrays: [${L.join(', ')}] এবং [${R.join(', ')}]`);
      await sleep(speed);

      while (i < n1 && j < n2) {
        if (stopRef.current) return;
        steps++;
        setStepCount(steps);
        setComparingIdxs([l + i, m + 1 + j]);
        await sleep(speed);

        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        } else {
          arr[k] = R[j];
          j++;
        }
        setArray([...arr]);
        setSwappingIdxs([k]);
        await sleep(speed);
        setSwappingIdxs([]);
        k++;
      }

      while (i < n1) {
        if (stopRef.current) return;
        arr[k] = L[i];
        setArray([...arr]);
        setSwappingIdxs([k]);
        await sleep(speed);
        setSwappingIdxs([]);
        i++;
        k++;
      }

      while (j < n2) {
        if (stopRef.current) return;
        arr[k] = R[j];
        setArray([...arr]);
        setSwappingIdxs([k]);
        await sleep(speed);
        setSwappingIdxs([]);
        j++;
        k++;
      }
    };

    const mergeSortHelper = async (l: number, r: number) => {
      if (l >= r) return;
      if (stopRef.current) return;
      const m = Math.floor((l + r) / 2);
      await mergeSortHelper(l, m);
      await mergeSortHelper(m + 1, r);
      await merge(l, m, r);
    };

    await mergeSortHelper(0, arr.length - 1);
    setSortedIdxs(Array.from({ length: arr.length }, (_, i) => i));
    setComparingIdxs([]);
    setIsSorting(false);
    setMessage(`✅ মার্জ সর্টিং সম্পন্ন! মোট তুলনা/ধাপ: ${steps}`);
  };

  const handleStart = () => {
    resetState();
    if (algorithm === 'bubble') runBubbleSort();
    else if (algorithm === 'quick') runQuickSort();
    else if (algorithm === 'merge') runMergeSort();
  };

  const maxVal = Math.max(...array, 100);

  return (
    <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-6">
      {/* Top Controls Bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-stone-200 dark:border-zinc-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">
            <Zap className="w-4 h-4" />
            <span>অধ্যায় ০৯: সর্টিং অ্যালগরিদম অ্যানিমেটেড ভিজ্যুয়ালাইজার</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 dark:text-zinc-100">
            Bubble Sort, Quick Sort & Merge Sort Simulator
          </h2>
        </div>

        {/* Algorithm Tabs */}
        <div className="flex items-center bg-stone-100 dark:bg-zinc-800 p-1 rounded-xl border border-stone-200 dark:border-zinc-700 w-full lg:w-auto">
          <button
            onClick={() => { resetState(); setAlgorithm('bubble'); }}
            disabled={isSorting}
            className={`flex-1 lg:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              algorithm === 'bubble'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-700 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            Bubble Sort
          </button>
          <button
            onClick={() => { resetState(); setAlgorithm('quick'); }}
            disabled={isSorting}
            className={`flex-1 lg:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              algorithm === 'quick'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-700 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            Quick Sort
          </button>
          <button
            onClick={() => { resetState(); setAlgorithm('merge'); }}
            disabled={isSorting}
            className={`flex-1 lg:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              algorithm === 'merge'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-700 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            Merge Sort
          </button>
        </div>
      </div>

      {/* Status Bar Message */}
      <div className="bg-stone-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-stone-200 dark:border-zinc-700 flex items-center justify-between gap-3 text-xs sm:text-sm font-medium">
        <div className="flex items-center gap-2 text-stone-800 dark:text-zinc-200 truncate">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="truncate">{message}</span>
        </div>
        <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
          <span className="bg-stone-200 dark:bg-zinc-700 px-2 py-1 rounded text-stone-700 dark:text-zinc-300">
            ধাপ: <strong>{stepCount}</strong>
          </span>
          {algorithm !== 'merge' && (
            <span className="bg-stone-200 dark:bg-zinc-700 px-2 py-1 rounded text-stone-700 dark:text-zinc-300">
              সোয়াপ: <strong>{swapCount}</strong>
            </span>
          )}
        </div>
      </div>

      {/* Main Interactive Sorting Bar Chart Canvas */}
      <div className="bg-stone-900 text-white p-6 rounded-2xl space-y-4 border border-zinc-800 shadow-inner">
        <div className="flex items-center justify-between text-xs text-stone-400 font-mono pb-2 border-b border-zinc-800">
          <span>ইনডেক্স ও ডাটা ভ্যালু বার (Data Heights)</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500 inline-block" /> সাধারণ</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-400 inline-block" /> তুলনা</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-rose-500 inline-block" /> সোয়াপ</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> সর্টেড</span>
            {algorithm === 'quick' && (
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-purple-500 inline-block" /> পাইভট</span>
            )}
          </div>
        </div>

        {/* Dynamic Bars */}
        <div className="h-56 flex items-end justify-around gap-2 px-2 pt-4">
          {array.map((val, idx) => {
            const heightPercent = Math.max((val / maxVal) * 100, 12);
            const isComp = comparingIdxs.includes(idx);
            const isSwap = swappingIdxs.includes(idx);
            const isSorted = sortedIdxs.includes(idx);
            const isPivot = pivotIdx === idx;

            let bgColor = 'bg-blue-500';
            if (isPivot) bgColor = 'bg-purple-500 ring-2 ring-purple-300';
            else if (isSwap) bgColor = 'bg-rose-500 animate-pulse';
            else if (isComp) bgColor = 'bg-amber-400';
            else if (isSorted) bgColor = 'bg-emerald-500';

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <span className="text-[11px] font-mono font-bold text-amber-300">
                  {val}
                </span>
                <div
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full max-w-[40px] rounded-t-lg transition-all duration-200 flex items-end justify-center pb-1 ${bgColor}`}
                />
                <span className="text-[10px] font-mono text-stone-400">
                  [{idx}]
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Control Buttons & Speed Slider */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-50 dark:bg-zinc-800/40 p-4 rounded-xl border border-stone-200 dark:border-zinc-800">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!isSorting ? (
            <button
              onClick={handleStart}
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>সর্ট শুরু করুন</span>
            </button>
          ) : (
            <button
              onClick={() => { stopRef.current = true; setIsSorting(false); }}
              className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-2 cursor-pointer"
            >
              <Pause className="w-4 h-4" />
              <span>পজ / থামান</span>
            </button>
          )}

          <button
            onClick={generateRandomArray}
            disabled={isSorting}
            className="px-4 py-2.5 rounded-xl bg-stone-200 dark:bg-zinc-700 hover:bg-stone-300 text-stone-800 dark:text-zinc-200 text-xs font-bold transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className="w-4 h-4" />
            <span>নতুন ডাটা</span>
          </button>

          <button
            onClick={resetState}
            disabled={isSorting}
            className="px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 text-stone-700 dark:text-zinc-300 text-xs font-bold transition flex items-center gap-2 cursor-pointer border border-stone-300 dark:border-zinc-700 disabled:opacity-50"
          >
            <RotateCcw className="w-4 h-4" />
            <span>রিসেট</span>
          </button>
        </div>

        {/* Speed Slider */}
        <div className="flex items-center gap-3 text-xs text-stone-600 dark:text-zinc-400 font-medium w-full sm:w-auto justify-end">
          <span>গতি (Speed):</span>
          <input
            type="range"
            min="50"
            max="600"
            step="50"
            value={650 - speed}
            onChange={(e) => setSpeed(650 - parseInt(e.target.value, 10))}
            className="w-28 accent-amber-600 cursor-pointer"
          />
          <span className="font-mono font-bold text-amber-700 dark:text-amber-400">
            {speed}ms
          </span>
        </div>
      </div>

      {/* Complexity & Algorithm Comparison Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-4 rounded-2xl border transition ${algorithm === 'bubble' ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400' : 'bg-stone-50 dark:bg-zinc-800/40 border-stone-200 dark:border-zinc-800'}`}>
          <div className="font-bold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center justify-between">
            <span>Bubble Sort</span>
            <span className="text-xs font-mono text-amber-700 dark:text-amber-400">$O(n^2)$</span>
          </div>
          <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
            পাশাপাশি দুই উপাদান তুলনা করে বড় মানকে ডানদিকে স্থানান্তরিত করে। সহজ কিন্তু ধীরগতি সম্পন্ন।
          </p>
        </div>

        <div className={`p-4 rounded-2xl border transition ${algorithm === 'quick' ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400' : 'bg-stone-50 dark:bg-zinc-800/40 border-stone-200 dark:border-zinc-800'}`}>
          <div className="font-bold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center justify-between">
            <span>Quick Sort</span>
            <span className="text-xs font-mono text-amber-700 dark:text-amber-400">$O(n \log n)$</span>
          </div>
          <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
            Divide & Conquer নীতিতে Pivot উপাদান ধরে দ্রুত পার্টিশন করা হয়। বাস্তব ক্ষেত্রে অত্যন্ত দ্রুত।
          </p>
        </div>

        <div className={`p-4 rounded-2xl border transition ${algorithm === 'merge' ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400' : 'bg-stone-50 dark:bg-zinc-800/40 border-stone-200 dark:border-zinc-800'}`}>
          <div className="font-bold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center justify-between">
            <span>Merge Sort</span>
            <span className="text-xs font-mono text-amber-700 dark:text-amber-400">$O(n \log n)$</span>
          </div>
          <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
            অ্যারে দুই ভাগে ভাগ করে রিকার্সিভলি সর্ট ও একত্রিত (Merge) করে। সবসময় নিশ্চিত $O(n \log n)$।
          </p>
        </div>
      </div>
    </div>
  );
};
