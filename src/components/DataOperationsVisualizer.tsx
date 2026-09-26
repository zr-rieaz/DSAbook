import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Search, PlusCircle, Trash2, ArrowRightLeft, GitMerge, Check, Eye } from 'lucide-react';

export const DataOperationsVisualizer: React.FC = () => {
  const [activeOp, setActiveOp] = useState<'traverse' | 'search' | 'insert' | 'delete' | 'sort' | 'merge'>('traverse');
  const [array, setArray] = useState<number[]>([15, 42, 8, 93, 27, 64]);
  const [highlightIdx, setHighlightIdx] = useState<number | null>(null);
  const [secondaryIdx, setSecondaryIdx] = useState<number | null>(null);
  const [targetSearch, setTargetSearch] = useState<number>(93);
  const [insertVal, setInsertVal] = useState<number>(55);
  const [insertPos, setInsertPos] = useState<number>(2);
  const [deletePos, setDeletePos] = useState<number>(3);
  const [secondArray, setSecondArray] = useState<number[]>([11, 78]);
  const [mergedResult, setMergedResult] = useState<number[] | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('অপারেশন নির্বাচন করুন এবং রান করুন।');
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resetState = () => {
    setArray([15, 42, 8, 93, 27, 64]);
    setHighlightIdx(null);
    setSecondaryIdx(null);
    setMergedResult(null);
    setIsRunning(false);
    setStatusMessage('অ্যারে রিসেট সম্পন্ন হয়েছে।');
  };

  // 1. Run Traversing
  const runTraversing = async () => {
    setIsRunning(true);
    setStatusMessage('১. ট্রাভার্সিং শুরু: সূচক ০ থেকে শেষ পর্যন্ত প্রতিটি উপাদান পরিদর্শন করা হচ্ছে...');
    for (let i = 0; i < array.length; i++) {
      setHighlightIdx(i);
      setStatusMessage(`Index [${i}] ভিজিট করা হলো -> মান: ${array[i]}`);
      await new Promise((r) => setTimeout(r, 600));
    }
    setHighlightIdx(null);
    setStatusMessage(`✅ ট্রাভার্সিং সম্পন্ন! মোট ${array.length} টি উপাদান সফলভাবে পরিদর্শন করা হয়েছে।`);
    setIsRunning(false);
  };

  // 2. Run Linear Search
  const runSearch = async () => {
    setIsRunning(true);
    setStatusMessage(`২. সার্চিং শুরু: অ্যারেতে '${targetSearch}' খোঁজা হচ্ছে...`);
    let found = false;
    for (let i = 0; i < array.length; i++) {
      setHighlightIdx(i);
      setStatusMessage(`Index [${i}] চেক করা হচ্ছে: ${array[i]} == ${targetSearch} ?`);
      await new Promise((r) => setTimeout(r, 700));
      if (array[i] === targetSearch) {
        found = true;
        setStatusMessage(`🎯 পাওয়া গেছে! উপাদান '${targetSearch}' Index [${i}] এ বিদ্যমান!`);
        break;
      }
    }
    if (!found) {
      setHighlightIdx(null);
      setStatusMessage(`❌ উপাদান '${targetSearch}' অ্যারেতে পাওয়া যায়নি।`);
    }
    setIsRunning(false);
  };

  // 3. Run Insertion
  const runInsert = async () => {
    if (insertPos < 0 || insertPos > array.length) {
      setStatusMessage('ভুল পজিশন দেওয়া হয়েছে!');
      return;
    }
    setIsRunning(true);
    setStatusMessage(`৩. ইনসার্ট শুরু: Index [${insertPos}] এ '${insertVal}' ইনসার্ট করার জন্য ডানদিকে শিফট করা হচ্ছে...`);

    const temp = [...array, 0];
    setArray([...temp]);
    await new Promise((r) => setTimeout(r, 500));

    // Right shifting
    for (let i = array.length - 1; i >= insertPos; i--) {
      setHighlightIdx(i);
      setSecondaryIdx(i + 1);
      temp[i + 1] = temp[i];
      setArray([...temp]);
      setStatusMessage(`ডানদিকে শিফট: উপাদান ${temp[i]} কে Index [${i+1}] এ সরানো হলো`);
      await new Promise((r) => setTimeout(r, 600));
    }

    temp[insertPos] = insertVal;
    setArray([...temp]);
    setHighlightIdx(insertPos);
    setSecondaryIdx(null);
    setStatusMessage(`✅ ইনসার্শন সফল! Index [${insertPos}] এ মান ${insertVal} স্থাপন করা হয়েছে।`);
    setIsRunning(false);
  };

  // 4. Run Deletion
  const runDelete = async () => {
    if (deletePos < 0 || deletePos >= array.length) {
      setStatusMessage('ভুল পজিশন দেওয়া হয়েছে!');
      return;
    }
    setIsRunning(true);
    const deletedVal = array[deletePos];
    setStatusMessage(`৪. ডিলিট শুরু: Index [${deletePos}] এর মান (${deletedVal}) মুছে ফেলে বামদিকে শিফট করা হচ্ছে...`);
    setHighlightIdx(deletePos);
    await new Promise((r) => setTimeout(r, 600));

    const temp = [...array];
    for (let i = deletePos; i < temp.length - 1; i++) {
      setSecondaryIdx(i + 1);
      setHighlightIdx(i);
      temp[i] = temp[i + 1];
      setArray([...temp]);
      setStatusMessage(`বামদিকে শিফট: উপাদান ${temp[i+1]} কে Index [${i}] এ আনা হলো`);
      await new Promise((r) => setTimeout(r, 600));
    }

    temp.pop();
    setArray([...temp]);
    setHighlightIdx(null);
    setSecondaryIdx(null);
    setStatusMessage(`✅ ডিলিট সফল! মান ${deletedVal} মুছে ফেলা হয়েছে।`);
    setIsRunning(false);
  };

  // 5. Run Sorting (Bubble Sort)
  const runSort = async () => {
    setIsRunning(true);
    setStatusMessage('৫. বাবল সর্টিং শুরু: পাশাপাশি উপাদান তুলনা ও সোয়াপ করা হচ্ছে...');
    const temp = [...array];
    const n = temp.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setHighlightIdx(j);
        setSecondaryIdx(j + 1);
        setStatusMessage(`তুলনা: ${temp[j]} এবং ${temp[j+1]}`);
        await new Promise((r) => setTimeout(r, 500));

        if (temp[j] > temp[j + 1]) {
          const swap = temp[j];
          temp[j] = temp[j + 1];
          temp[j + 1] = swap;
          setArray([...temp]);
          setStatusMessage(`সোয়াপ: ${temp[j+1]} > ${temp[j]} হওয়ায় স্থান বিনিময় করা হলো`);
          await new Promise((r) => setTimeout(r, 500));
        }
      }
    }
    setHighlightIdx(null);
    setSecondaryIdx(null);
    setStatusMessage('✅ সর্টিং সম্পন্ন! অ্যারে আরোহী (Ascending) ক্রমে সাজানো হয়েছে।');
    setIsRunning(false);
  };

  // 6. Run Merging
  const runMerge = async () => {
    setIsRunning(true);
    setStatusMessage('৬. মার্জিং শুরু: Array A এবং Array B একত্রিত করে নতুন Array C তৈরি হচ্ছে...');
    setMergedResult(null);
    await new Promise((r) => setTimeout(r, 600));

    const res: number[] = [];
    for (let i = 0; i < array.length; i++) {
      setHighlightIdx(i);
      res.push(array[i]);
      setMergedResult([...res]);
      await new Promise((r) => setTimeout(r, 300));
    }
    for (let j = 0; j < secondArray.length; j++) {
      setSecondaryIdx(j);
      res.push(secondArray[j]);
      setMergedResult([...res]);
      await new Promise((r) => setTimeout(r, 300));
    }

    setHighlightIdx(null);
    setSecondaryIdx(null);
    setStatusMessage('✅ মার্জিং সম্পন্ন! নতুন সম্মিলিত অ্যারে প্রস্তুত।');
    setIsRunning(false);
  };

  const handleRunActive = () => {
    if (isRunning) return;
    if (activeOp === 'traverse') runTraversing();
    else if (activeOp === 'search') runSearch();
    else if (activeOp === 'insert') runInsert();
    else if (activeOp === 'delete') runDelete();
    else if (activeOp === 'sort') runSort();
    else if (activeOp === 'merge') runMerge();
  };

  return (
    <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-stone-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-400 font-mono text-xs px-2 py-0.5 rounded font-bold border border-emerald-500/30">
              ইন্টারঅ্যাক্টিভ সিমুলেটর (Topic 1.5)
            </span>
            <span className="text-xs text-stone-400 font-mono">6 Core Array Operations Playground</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Eye className="w-5 h-5 text-emerald-400" />
            ডাটা স্ট্রাকচারের মৌলিক ৬টি অপারেশন লাইভ সিমুলেটর
          </h3>
        </div>

        <button
          onClick={resetState}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-stone-800 hover:bg-stone-700 disabled:opacity-50 text-stone-300 rounded-lg transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          রিসেট অ্যারে
        </button>
      </div>

      {/* Operation Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => { setActiveOp('traverse'); resetState(); }}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
            activeOp === 'traverse' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          ১. ট্রাভার্সিং (Traversing)
        </button>
        <button
          onClick={() => { setActiveOp('search'); resetState(); }}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
            activeOp === 'search' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          ২. সার্চিং (Searching)
        </button>
        <button
          onClick={() => { setActiveOp('insert'); resetState(); }}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
            activeOp === 'insert' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
          }`}
        >
          <PlusCircle className="w-3.5 h-3.5" />
          ৩. ইনসার্টিং (Inserting)
        </button>
        <button
          onClick={() => { setActiveOp('delete'); resetState(); }}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
            activeOp === 'delete' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
          }`}
        >
          <Trash2 className="w-3.5 h-3.5" />
          ৪. ডিলিটিং (Deleting)
        </button>
        <button
          onClick={() => { setActiveOp('sort'); resetState(); }}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
            activeOp === 'sort' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
          }`}
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          ৫. সর্টিং (Bubble Sort)
        </button>
        <button
          onClick={() => { setActiveOp('merge'); resetState(); }}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
            activeOp === 'merge' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
          }`}
        >
          <GitMerge className="w-3.5 h-3.5" />
          ৬. মার্জিং (Merging)
        </button>
      </div>

      {/* Inputs according to selected operation */}
      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {activeOp === 'search' && (
            <div className="flex items-center gap-2">
              <label className="text-stone-400">খোঁজার মান (Target):</label>
              <input
                type="number"
                value={targetSearch}
                onChange={(e) => setTargetSearch(Number(e.target.value))}
                className="w-20 px-2 py-1 bg-stone-900 border border-stone-700 rounded text-amber-300 font-mono font-bold"
              />
            </div>
          )}

          {activeOp === 'insert' && (
            <>
              <div className="flex items-center gap-2">
                <label className="text-stone-400">নতুন মান:</label>
                <input
                  type="number"
                  value={insertVal}
                  onChange={(e) => setInsertVal(Number(e.target.value))}
                  className="w-16 px-2 py-1 bg-stone-900 border border-stone-700 rounded text-amber-300 font-mono font-bold"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-stone-400">পজিশন (Index):</label>
                <input
                  type="number"
                  min="0"
                  max={array.length}
                  value={insertPos}
                  onChange={(e) => setInsertPos(Number(e.target.value))}
                  className="w-14 px-2 py-1 bg-stone-900 border border-stone-700 rounded text-amber-300 font-mono font-bold"
                />
              </div>
            </>
          )}

          {activeOp === 'delete' && (
            <div className="flex items-center gap-2">
              <label className="text-stone-400">মুছে ফেলার পজিশন (Index):</label>
              <input
                type="number"
                min="0"
                max={array.length - 1}
                value={deletePos}
                onChange={(e) => setDeletePos(Number(e.target.value))}
                className="w-16 px-2 py-1 bg-stone-900 border border-stone-700 rounded text-amber-300 font-mono font-bold"
              />
            </div>
          )}

          {activeOp === 'merge' && (
            <div className="text-stone-400">
              Array A [{array.join(', ')}] + Array B [{secondArray.join(', ')}]
            </div>
          )}

          {activeOp === 'traverse' && (
            <div className="text-stone-400">লুপের মাধ্যমে প্রতিটি উপাদানে ক্রমান্বয়ে পৌঁছানো হবে।</div>
          )}

          {activeOp === 'sort' && (
            <div className="text-stone-400">অসংগঠিত অ্যারে আরোহী (ছোট থেকে বড়) ক্রমে সাজানো হবে।</div>
          )}
        </div>

        <button
          onClick={handleRunActive}
          disabled={isRunning}
          className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white text-xs font-bold rounded-lg shadow-md transition flex items-center gap-1.5"
        >
          <Play className="w-4 h-4 fill-white" />
          {isRunning ? 'এক্সিকিউট হচ্ছে...' : 'অপারেশন চালান (Run)'}
        </button>
      </div>

      {/* Main Array Visualization Canvas */}
      <div className="space-y-4">
        <div>
          <div className="text-xs text-stone-400 font-mono mb-2 flex items-center justify-between">
            <span>Primary Array A (Size: {array.length})</span>
            <span className="text-[11px] text-stone-500">Base Address: 0x1000 | Item Size: 4B</span>
          </div>

          <div className="grid grid-flow-col auto-cols-fr gap-2 sm:gap-3">
            {array.map((val, idx) => {
              const isHigh = highlightIdx === idx;
              const isSec = secondaryIdx === idx;
              return (
                <div
                  key={idx}
                  className={`p-3 sm:p-4 rounded-xl text-center border font-mono transition-all transform duration-300 ${
                    isHigh
                      ? 'bg-emerald-600/30 border-emerald-400 scale-105 shadow-lg shadow-emerald-500/20'
                      : isSec
                      ? 'bg-amber-600/30 border-amber-400 scale-105 shadow-lg shadow-amber-500/20'
                      : 'bg-stone-950 border-stone-800'
                  }`}
                >
                  <div className="text-[10px] text-stone-500 mb-1">Idx [{idx}]</div>
                  <div className={`text-base sm:text-xl font-bold ${isHigh ? 'text-emerald-300' : isSec ? 'text-amber-300' : 'text-white'}`}>
                    {val}
                  </div>
                  <div className="text-[9px] text-stone-600 mt-1 font-mono">
                    0x{ (0x1000 + idx * 4).toString(16) }
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Merged Array Canvas if active */}
        {activeOp === 'merge' && mergedResult && (
          <div className="mt-4 pt-4 border-t border-stone-800 animate-in fade-in duration-300">
            <div className="text-xs text-teal-400 font-mono mb-2">
              Combined Merged Result (Array C):
            </div>
            <div className="grid grid-flow-col auto-cols-fr gap-2">
              {mergedResult.map((mVal, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3 rounded-xl bg-teal-950/60 border border-teal-500/40 text-center font-mono"
                >
                  <div className="text-[9px] text-teal-400">[{mIdx}]</div>
                  <div className="text-base font-bold text-teal-200">{mVal}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Live Status Output Box */}
      <div className="bg-black/90 p-4 rounded-xl border border-stone-800 flex items-center gap-3 font-mono text-xs">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
        <div className="text-stone-300 flex-1">
          <strong className="text-emerald-400 font-sans">স্ট্যাটাস: </strong>
          {statusMessage}
        </div>
      </div>
    </div>
  );
};
