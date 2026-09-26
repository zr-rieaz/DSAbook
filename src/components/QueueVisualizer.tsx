import React, { useState } from 'react';
import { Layers, ArrowRight, ArrowLeft, RefreshCw, AlertTriangle, CheckCircle, Sparkles, Terminal, ShieldAlert, RotateCw } from 'lucide-react';

export const QueueVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'linear' | 'circular' | 'deque_priority'>('linear');

  // --- Linear Queue State ---
  const [linearCap, setLinearCap] = useState<number>(6);
  const [linearQueue, setLinearQueue] = useState<(string | null)[]>([
    '১০ (Data-A)',
    '২০ (Data-B)',
    '৩০ (Data-C)',
    null,
    null,
    null,
  ]);
  const [frontPtr, setFrontPtr] = useState<number>(0);
  const [rearPtr, setRearPtr] = useState<number>(2);
  const [linearInput, setLinearInput] = useState<string>('');
  const [linearMsg, setLinearMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' | 'warning' }>({
    text: 'লিনিয়ার কিউ প্রস্তুত। নতুন ডাটা Enqueue অথবা ফ্রন্ট থেকে Dequeue করুন।',
    type: 'info',
  });

  // --- Circular Queue State ---
  const [circCap, setCircCap] = useState<number>(6);
  const [circQueue, setCircQueue] = useState<(string | null)[]>([
    '১০০',
    '২০০',
    '৩০০',
    null,
    null,
    null,
  ]);
  const [circFront, setCircFront] = useState<number>(0);
  const [circRear, setCircRear] = useState<number>(2);
  const [circCount, setCircCount] = useState<number>(3);
  const [circInput, setCircInput] = useState<string>('');
  const [circMsg, setCircMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' | 'warning' }>({
    text: 'সার্কুলার কিউ প্রস্তুত। মডুলো পাটিগণিত (Modulo Arithmetic) দিয়ে মেমরি পুনর্ব্যবহার দেখা যাবে।',
    type: 'info',
  });

  // --- Deque & Priority Queue State ---
  const [dequeCap] = useState<number>(6);
  const [deque, setDeque] = useState<(string | null)[]>([null, 'P-20', 'P-30', 'P-40', null, null]);
  const [dequeFront, setDequeFront] = useState<number>(1);
  const [dequeRear, setDequeRear] = useState<number>(3);
  const [dequeInput, setDequeInput] = useState<string>('');
  const [dequeMsg, setDequeMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' | 'warning' }>({
    text: 'ডিকিউ (Double-Ended Queue): উভয় প্রান্ত (Front & Rear) দিয়েই ডাটা ইনসার্ট ও ডিলিট সম্ভব।',
    type: 'info',
  });

  // Priority Queue Items
  const [pq, setPq] = useState<{ val: string; priority: number }[]>([
    { val: 'ইমার্জেন্সি ফাইল', priority: 1 },
    { val: 'সাধারণ প্রিন্ট কাজ', priority: 3 },
    { val: 'ভিআইপি প্রসেস', priority: 1 },
    { val: 'ব্যাকগ্রাউন্ড টাস্ক', priority: 5 },
  ]);
  const [pqVal, setPqVal] = useState<string>('');
  const [pqPriority, setPqPriority] = useState<number>(2);

  // ================= LINEAR QUEUE HANDLERS =================
  const handleLinearEnqueue = () => {
    if (!linearInput.trim()) {
      setLinearMsg({ text: 'অনুগ্রহ করে কিউতে যোগ করার জন্য মান লিখুন!', type: 'error' });
      return;
    }

    // Check Linear Overflow
    if (rearPtr >= linearCap - 1) {
      if (frontPtr > 0) {
        setLinearMsg({
          text: `⚠️ Linear Queue False Overflow! REAR=${rearPtr} (সর্বোচ্চ সীমানায় পৌঁছেছে)। যদিও সামনে ${frontPtr}টি ঘর ফাঁকা আছে, লিনিয়ার কিউতে নতুন ডাটা Enqueue করা যাবে না!`,
          type: 'warning',
        });
      } else {
        setLinearMsg({
          text: `⚠️ Queue Overflow! লিনিয়ার কিউ সম্পূর্ণ পূর্ণ (REAR = ${linearCap - 1})।`,
          type: 'error',
        });
      }
      return;
    }

    const nextRear = rearPtr === -1 ? 0 : rearPtr + 1;
    const nextFront = frontPtr === -1 ? 0 : frontPtr;
    const newQ = [...linearQueue];
    newQ[nextRear] = linearInput.trim();

    setLinearQueue(newQ);
    setRearPtr(nextRear);
    setFrontPtr(nextFront);
    setLinearInput('');
    setLinearMsg({
      text: `✅ Enqueue সফল: "${linearInput.trim()}" REAR=${nextRear} ইনডেক্সে যুক্ত হয়েছে। (FRONT=${nextFront}, REAR=${nextRear})`,
      type: 'success',
    });
  };

  const handleLinearDequeue = () => {
    if (frontPtr === -1 || frontPtr > rearPtr || linearQueue[frontPtr] === null) {
      setLinearMsg({
        text: '⚠️ Queue Underflow! কিউ সম্পূর্ণ খালি। অপসারণ করার মতো কোনো ডাটা নেই।',
        type: 'error',
      });
      return;
    }

    const removedVal = linearQueue[frontPtr];
    const newQ = [...linearQueue];
    newQ[frontPtr] = null; // Free element

    if (frontPtr === rearPtr) {
      // Last element removed
      setFrontPtr(-1);
      setRearPtr(-1);
      setLinearQueue(Array(linearCap).fill(null));
      setLinearMsg({
        text: `✅ Dequeue সফল: শেষ উপাদান "${removedVal}" অপসারিত হয়েছে। কিউ এখন সম্পূর্ণ খালি (FRONT=-1, REAR=-1)।`,
        type: 'success',
      });
    } else {
      const nextFront = frontPtr + 1;
      setFrontPtr(nextFront);
      setLinearQueue(newQ);
      setLinearMsg({
        text: `✅ Dequeue সফল: FRONT=${frontPtr} থেকে "${removedVal}" অপসারিত হয়েছে। নতুন FRONT=${nextFront}।`,
        type: 'success',
      });
    }
  };

  const handleLinearReset = () => {
    setLinearQueue(Array(linearCap).fill(null));
    setFrontPtr(-1);
    setRearPtr(-1);
    setLinearMsg({ text: 'লিনিয়ার কিউ রিসেট করা হয়েছে (FRONT=-1, REAR=-1)।', type: 'info' });
  };

  // ================= CIRCULAR QUEUE HANDLERS =================
  const handleCircEnqueue = () => {
    if (!circInput.trim()) {
      setCircMsg({ text: 'অনুগ্রহ করে কিউতে যোগ করার জন্য মান লিখুন!', type: 'error' });
      return;
    }

    // Check Circular Overflow: count === capacity or (rear + 1) % MAX === front
    if (circCount === circCap) {
      setCircMsg({
        text: `⚠️ Circular Queue Overflow! কিউ সম্পূর্ণ পূর্ণ (মোট ${circCount}টি উপাদান বর্তমান)।`,
        type: 'error',
      });
      return;
    }

    let nextFront = circFront;
    let nextRear = circRear;

    if (circCount === 0) {
      nextFront = 0;
      nextRear = 0;
    } else {
      nextRear = (circRear + 1) % circCap;
    }

    const newQ = [...circQueue];
    newQ[nextRear] = circInput.trim();

    setCircQueue(newQ);
    setCircFront(nextFront);
    setCircRear(nextRear);
    setCircCount(circCount + 1);
    setCircInput('');
    setCircMsg({
      text: `🔄 Circular Enqueue সফল: "${circInput.trim()}" REAR=(${circRear}+1)%${circCap} = ${nextRear} ইনডেক্সে বসেছে!`,
      type: 'success',
    });
  };

  const handleCircDequeue = () => {
    if (circCount === 0 || circFront === -1) {
      setCircMsg({
        text: '⚠️ Circular Queue Underflow! কিউতে কোনো উপাদান নেই।',
        type: 'error',
      });
      return;
    }

    const removedVal = circQueue[circFront];
    const newQ = [...circQueue];
    newQ[circFront] = null;

    if (circCount === 1) {
      setCircFront(-1);
      setCircRear(-1);
      setCircCount(0);
      setCircQueue(Array(circCap).fill(null));
      setCircMsg({
        text: `🔄 Dequeue সফল: শেষ ডাটা "${removedVal}" বের করা হলো। সার্কুলার কিউ এখন খালি।`,
        type: 'success',
      });
    } else {
      const nextFront = (circFront + 1) % circCap;
      setCircQueue(newQ);
      setCircFront(nextFront);
      setCircCount(circCount - 1);
      setCircMsg({
        text: `🔄 Dequeue সফল: FRONT=${circFront} থেকে "${removedVal}" বের হলো। নতুন FRONT=(${circFront}+1)%${circCap} = ${nextFront}।`,
        type: 'success',
      });
    }
  };

  const handleCircReset = () => {
    setCircQueue(Array(circCap).fill(null));
    setCircFront(-1);
    setCircRear(-1);
    setCircCount(0);
    setCircMsg({ text: 'সার্কুলার কিউ রিসেট করা হয়েছে।', type: 'info' });
  };

  // ================= DEQUE HANDLERS =================
  const handleDequeInsertRear = () => {
    if (!dequeInput.trim()) return;
    if (deque.every((item) => item !== null)) {
      setDequeMsg({ text: '⚠️ Deque Overflow! মেমরি সম্পূর্ণ পূর্ণ।', type: 'error' });
      return;
    }
    const val = dequeInput.trim();
    let nextRear = dequeRear;
    let nextFront = dequeFront;

    if (dequeFront === -1) {
      nextFront = 0;
      nextRear = 0;
    } else {
      nextRear = (dequeRear + 1) % dequeCap;
    }

    const newD = [...deque];
    newD[nextRear] = val;
    setDeque(newD);
    setDequeFront(nextFront);
    setDequeRear(nextRear);
    setDequeInput('');
    setDequeMsg({ text: `✅ Deque Insert Rear সফল: "${val}" (REAR=${nextRear})`, type: 'success' });
  };

  const handleDequeInsertFront = () => {
    if (!dequeInput.trim()) return;
    if (deque.every((item) => item !== null)) {
      setDequeMsg({ text: '⚠️ Deque Overflow! মেমরি সম্পূর্ণ পূর্ণ।', type: 'error' });
      return;
    }
    const val = dequeInput.trim();
    let nextFront = dequeFront;
    let nextRear = dequeRear;

    if (dequeFront === -1) {
      nextFront = 0;
      nextRear = 0;
    } else {
      nextFront = (dequeFront - 1 + dequeCap) % dequeCap;
    }

    const newD = [...deque];
    newD[nextFront] = val;
    setDeque(newD);
    setDequeFront(nextFront);
    setDequeRear(nextRear);
    setDequeInput('');
    setDequeMsg({ text: `✅ Deque Insert Front সফল: "${val}" (FRONT=${nextFront})`, type: 'success' });
  };

  const handleDequeDeleteFront = () => {
    if (dequeFront === -1 || deque[dequeFront] === null) {
      setDequeMsg({ text: '⚠️ Deque Underflow! খালি।', type: 'error' });
      return;
    }
    const removedVal = deque[dequeFront];
    const newD = [...deque];
    newD[dequeFront] = null;

    if (dequeFront === dequeRear) {
      setDequeFront(-1);
      setDequeRear(-1);
      setDeque(Array(dequeCap).fill(null));
      setDequeMsg({ text: `✅ Delete Front: "${removedVal}" সরানো হলো। Deque খালি।`, type: 'success' });
    } else {
      const nextFront = (dequeFront + 1) % dequeCap;
      setDeque(newD);
      setDequeFront(nextFront);
      setDequeMsg({ text: `✅ Delete Front: "${removedVal}" অপসারিত। নতুন FRONT=${nextFront}`, type: 'success' });
    }
  };

  const handleDequeDeleteRear = () => {
    if (dequeRear === -1 || deque[dequeRear] === null) {
      setDequeMsg({ text: '⚠️ Deque Underflow! খালি।', type: 'error' });
      return;
    }
    const removedVal = deque[dequeRear];
    const newD = [...deque];
    newD[dequeRear] = null;

    if (dequeFront === dequeRear) {
      setDequeFront(-1);
      setDequeRear(-1);
      setDeque(Array(dequeCap).fill(null));
      setDequeMsg({ text: `✅ Delete Rear: "${removedVal}" সরানো হলো। Deque খালি।`, type: 'success' });
    } else {
      const nextRear = (dequeRear - 1 + dequeCap) % dequeCap;
      setDeque(newD);
      setDequeRear(nextRear);
      setDequeMsg({ text: `✅ Delete Rear: "${removedVal}" অপসারিত। নতুন REAR=${nextRear}`, type: 'success' });
    }
  };

  // ================= PRIORITY QUEUE HANDLERS =================
  const handlePqInsert = () => {
    if (!pqVal.trim()) return;
    const newItem = { val: pqVal.trim(), priority: pqPriority };
    const updatedPq = [...pq, newItem].sort((a, b) => a.priority - b.priority); // Ascending priority (1 = Highest)
    setPq(updatedPq);
    setPqVal('');
  };

  const handlePqDequeue = () => {
    if (pq.length === 0) return;
    const served = pq[0];
    setPq(pq.slice(1));
    alert(`সর্বোচ্চ প্রায়োরিটি (Priority: ${served.priority}) সহ "${served.val}" সফলভাবে পরিবেশন/প্রসেস করা হলো!`);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-sm space-y-6">
      {/* Top Header & Visualizer Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800">
              Interactive Queue Lab
            </span>
            <span className="text-xs text-stone-500 font-mono">FIFO Protocol & Circular Buffer</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-zinc-100 mt-1 flex items-center gap-2">
            <Layers className="w-6 h-6 text-emerald-600" />
            কিউ (Queue) ও বিশেষ রূপভেদ সিমুলেটর
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
            ১. লিনিয়ার কিউ (Linear)
          </button>
          <button
            onClick={() => setActiveTab('circular')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'circular'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ২. সার্কুলার কিউ (Circular)
          </button>
          <button
            onClick={() => setActiveTab('deque_priority')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'deque_priority'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ৩. Deque & Priority Queue
          </button>
        </div>
      </div>

      {/* TAB 1: LINEAR QUEUE */}
      {activeTab === 'linear' && (
        <div className="space-y-6">
          {/* Status Message Alert */}
          <div
            className={`p-4 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-semibold transition ${
              linearMsg.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                : linearMsg.type === 'error'
                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                : linearMsg.type === 'warning'
                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800'
                : 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-800'
            }`}
          >
            {linearMsg.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />}
            {linearMsg.type === 'error' && <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />}
            {linearMsg.type === 'warning' && <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />}
            {linearMsg.type === 'info' && <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />}
            <span>{linearMsg.text}</span>
          </div>

          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700">
            <div className="md:col-span-5 flex items-center gap-2">
              <input
                type="text"
                placeholder="ডাটা লিখুন (যেমন: ৫০, BTEB)"
                value={linearInput}
                onChange={(e) => setLinearInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLinearEnqueue()}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-stone-900 dark:text-zinc-100 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button
                onClick={handleLinearEnqueue}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Enqueue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="md:col-span-7 flex flex-wrap items-center justify-end gap-2">
              <button
                onClick={handleLinearDequeue}
                className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Dequeue (Front)</span>
              </button>
              <button
                onClick={handleLinearReset}
                className="px-3.5 py-2 bg-stone-200 dark:bg-zinc-700 hover:bg-stone-300 text-stone-800 dark:text-zinc-200 font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>রিসেট</span>
              </button>
            </div>
          </div>

          {/* Linear Queue Display Array */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-600 dark:text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block"></span>
                FRONT (অপসারণ প্রান্ত) = <code className="font-mono text-emerald-700 font-bold">{frontPtr}</code>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                REAR (ইনসার্ট প্রান্ত) = <code className="font-mono text-amber-600 font-bold">{rearPtr}</code>
              </span>
              <span>ধারনক্ষমতা (MAX) = {linearCap}</span>
            </div>

            {/* Horizontal Array Cells */}
            <div className="grid grid-cols-6 gap-2 sm:gap-3 bg-stone-100 dark:bg-zinc-950 p-4 sm:p-6 rounded-2xl border border-stone-200 dark:border-zinc-800">
              {linearQueue.map((item, idx) => {
                const isFront = idx === frontPtr && frontPtr !== -1;
                const isRear = idx === rearPtr && rearPtr !== -1;
                const isEmpty = item === null;

                return (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    {/* Top Pointer Badge */}
                    <div className="h-6 flex items-center gap-1 text-[11px] font-extrabold">
                      {isFront && (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white animate-pulse">
                          FRONT
                        </span>
                      )}
                      {isRear && (
                        <span className="px-1.5 py-0.5 rounded bg-amber-500 text-stone-950 animate-pulse">
                          REAR
                        </span>
                      )}
                    </div>

                    {/* Array Cell */}
                    <div
                      className={`w-full aspect-square rounded-2xl flex flex-col items-center justify-center p-2 text-center transition-all duration-300 border-2 shadow-xs ${
                        isEmpty
                          ? 'border-dashed border-stone-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 text-stone-400'
                          : isFront && isRear
                          ? 'border-emerald-600 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-100 font-bold scale-105 shadow-md'
                          : isFront
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold'
                          : isRear
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-bold'
                          : 'border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-800 dark:text-zinc-100 font-semibold'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold truncate max-w-full">
                        {item ? item : '—'}
                      </span>
                    </div>

                    {/* Cell Index Label */}
                    <span className="text-[11px] font-mono text-stone-500 dark:text-zinc-500 font-bold">
                      [{idx}]
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explanation Box on False Overflow */}
          <div className="bg-amber-50/70 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200 dark:border-amber-900/50 text-xs text-amber-950 dark:text-amber-200 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
              <AlertTriangle className="w-4 h-4" />
              লিনিয়ার কিউ-এর সীমাবদ্ধতা (False Overflow Problem):
            </div>
            <p>
              লিনিয়ার কিউতে Dequeue করলে FRONT পয়েন্টার সামনে এগিয়ে যায়, কিন্তু পেছনের ফাঁকা ঘরে পুনরায় কোনো নতুন উপাদান ঢুকানো যায় না। যখন REAR=MAX-1 হয়, তখন মেমরি ফাঁকা থাকলেও লিনিয়ার কিউ নতুন ডাটা গ্রহণ করতে পারে না। এই সমস্যার সমাধান দেয় **সার্কুলার কিউ (Circular Queue)**!
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: CIRCULAR QUEUE */}
      {activeTab === 'circular' && (
        <div className="space-y-6">
          {/* Status Message */}
          <div
            className={`p-4 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-semibold transition ${
              circMsg.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                : circMsg.type === 'error'
                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                : 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-800'
            }`}
          >
            {circMsg.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />}
            {circMsg.type === 'error' && <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />}
            {circMsg.type === 'info' && <RotateCw className="w-5 h-5 text-blue-600 shrink-0" />}
            <span>{circMsg.text}</span>
          </div>

          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700">
            <div className="md:col-span-6 flex items-center gap-2">
              <input
                type="text"
                placeholder="সার্কুলার কিউতে যোগ করার মান"
                value={circInput}
                onChange={(e) => setCircInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCircEnqueue()}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-stone-900 dark:text-zinc-100 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button
                onClick={handleCircEnqueue}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Enqueue (Modulo)</span>
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="md:col-span-6 flex flex-wrap items-center justify-end gap-2">
              <button
                onClick={handleCircDequeue}
                className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Dequeue</span>
              </button>
              <button
                onClick={handleCircReset}
                className="px-3.5 py-2 bg-stone-200 dark:bg-zinc-700 hover:bg-stone-300 text-stone-800 dark:text-zinc-200 font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>রিসেট</span>
              </button>
            </div>
          </div>

          {/* Modulo Arithmetic Formula Card */}
          <div className="bg-emerald-950 text-emerald-100 p-4 rounded-2xl border border-emerald-800 text-xs font-mono space-y-2">
            <div className="text-amber-400 font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Circular Modulo Formulas:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                • Enqueue Index: <span className="text-emerald-300">REAR = (REAR + 1) % {circCap}</span>
              </div>
              <div>
                • Dequeue Index: <span className="text-emerald-300">FRONT = (FRONT + 1) % {circCap}</span>
              </div>
            </div>
            <div className="text-stone-300 text-[11px] font-sans pt-1 border-t border-emerald-900">
              বর্তমান উপাদান সংখ্যা: <strong>{circCount} / {circCap}</strong> | FRONT: <strong>{circFront}</strong> | REAR: <strong>{circRear}</strong>
            </div>
          </div>

          {/* Circular Ring/Array Graphic representation */}
          <div className="grid grid-cols-6 gap-2 sm:gap-3 bg-stone-100 dark:bg-zinc-950 p-4 sm:p-6 rounded-2xl border border-stone-200 dark:border-zinc-800">
            {circQueue.map((item, idx) => {
              const isFront = idx === circFront && circFront !== -1;
              const isRear = idx === circRear && circRear !== -1;
              const isEmpty = item === null;

              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="h-6 flex items-center gap-1 text-[11px] font-extrabold">
                    {isFront && <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white">FRONT</span>}
                    {isRear && <span className="px-1.5 py-0.5 rounded bg-amber-500 text-stone-950">REAR</span>}
                  </div>

                  <div
                    className={`w-full aspect-square rounded-2xl flex flex-col items-center justify-center p-2 text-center transition-all duration-300 border-2 shadow-xs ${
                      isEmpty
                        ? 'border-dashed border-stone-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 text-stone-400'
                        : isFront && isRear
                        ? 'border-emerald-600 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100 font-bold ring-2 ring-emerald-500/50'
                        : isFront
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold'
                        : isRear
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-bold'
                        : 'border-teal-500 bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-200 font-bold'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold truncate max-w-full">
                      {item ? item : '—'}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-stone-500 dark:text-zinc-500 font-bold">
                    [{idx}]
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: DEQUE & PRIORITY QUEUE */}
      {activeTab === 'deque_priority' && (
        <div className="space-y-8">
          {/* Section 1: Double-Ended Queue (Deque) */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2 border-b border-stone-200 dark:border-zinc-800 pb-2">
              <span className="text-emerald-600 font-mono">§ 5.6.1</span>
              ডিকিউ (Deque - Double Ended Queue)
            </h3>

            {/* Status Message */}
            <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 border border-teal-200 dark:border-teal-800 text-xs font-semibold">
              {dequeMsg.text}
            </div>

            {/* Deque Controls */}
            <div className="flex flex-wrap items-center gap-2 bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700">
              <input
                type="text"
                placeholder="ডাটা লিখুন"
                value={dequeInput}
                onChange={(e) => setDequeInput(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-stone-900 dark:text-zinc-100 outline-none w-36"
              />
              <button
                onClick={handleDequeInsertFront}
                className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition cursor-pointer"
              >
                + Insert Front
              </button>
              <button
                onClick={handleDequeInsertRear}
                className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl transition cursor-pointer"
              >
                + Insert Rear
              </button>
              <button
                onClick={handleDequeDeleteFront}
                className="px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs rounded-xl transition cursor-pointer ml-auto"
              >
                - Delete Front
              </button>
              <button
                onClick={handleDequeDeleteRear}
                className="px-3 py-1.5 bg-rose-800 hover:bg-rose-900 text-white font-bold text-xs rounded-xl transition cursor-pointer"
              >
                - Delete Rear
              </button>
            </div>

            {/* Deque Cells */}
            <div className="grid grid-cols-6 gap-2 bg-stone-100 dark:bg-zinc-950 p-4 rounded-2xl border border-stone-200 dark:border-zinc-800">
              {deque.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div className="h-5 text-[10px] font-bold">
                    {idx === dequeFront && <span className="text-emerald-600">FRONT</span>}
                    {idx === dequeRear && <span className="text-amber-600">REAR</span>}
                  </div>
                  <div className="w-full aspect-square rounded-xl bg-white dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 flex items-center justify-center font-bold text-xs">
                    {item ? item : '—'}
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">[{idx}]</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Priority Queue */}
          <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-zinc-800">
            <h3 className="text-base font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-600 font-mono">§ 5.6.2</span>
              প্রায়োরিটি কিউ (Priority Queue)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Insert to Priority Queue Form */}
              <div className="md:col-span-5 bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700 space-y-3">
                <div className="text-xs font-bold text-stone-800 dark:text-zinc-200">
                  নতুন কাজ / প্রসেস যুক্তকরণ:
                </div>
                <input
                  type="text"
                  placeholder="কাজের নাম (যেমন: প্রিন্ট জব A)"
                  value={pqVal}
                  onChange={(e) => setPqVal(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 outline-none"
                />
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-stone-600 dark:text-zinc-400">প্রায়োরিটি মান:</span>
                  <select
                    value={pqPriority}
                    onChange={(e) => setPqPriority(Number(e.target.value))}
                    className="px-2 py-1 text-xs rounded-lg border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900"
                  >
                    <option value={1}>১ (সর্বোচ্চ ইমার্জেন্সি)</option>
                    <option value={2}>২ (উচ্চ গুরুত্ব)</option>
                    <option value={3}>৩ (সাধারণ)</option>
                    <option value={4}>৪ (নিম্ন গুরুত্ব)</option>
                    <option value={5}>৫ (সর্বনিম্ন)</option>
                  </select>
                </div>
                <button
                  onClick={handlePqInsert}
                  className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition cursor-pointer"
                >
                  Priority Queue-তে ইনসার্ট
                </button>
              </div>

              {/* Priority Queue Processing Table */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700 dark:text-zinc-300">
                    বর্তমান প্রসেস তালিকা (স্বয়ংক্রিয়ভাবে অগ্রাধিকার সাজানো):
                  </span>
                  <button
                    onClick={handlePqDequeue}
                    className="px-3 py-1 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-lg transition cursor-pointer"
                  >
                    সর্বোচ্চ প্রায়োরিটি প্রসেস করুন ➔
                  </button>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-stone-200 dark:border-zinc-700 overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-stone-100 dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-700 text-stone-700 dark:text-zinc-300 font-bold">
                      <tr>
                        <th className="p-2.5">অবস্থান</th>
                        <th className="p-2.5">কাজের নাম</th>
                        <th className="p-2.5">প্রায়োরিটি ലെভেল</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 dark:divide-zinc-700">
                      {pq.map((item, idx) => (
                        <tr
                          key={idx}
                          className={idx === 0 ? 'bg-emerald-50/80 dark:bg-emerald-950/40 font-bold' : ''}
                        >
                          <td className="p-2.5">{idx === 0 ? '১ম (পরবর্তী প্রসেস)' : `${idx + 1}তম`}</td>
                          <td className="p-2.5">{item.val}</td>
                          <td className="p-2.5">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                item.priority === 1
                                  ? 'bg-rose-100 text-rose-800'
                                  : item.priority === 2
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              Priority {item.priority}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
