import React, { useState } from 'react';
import { Layers, Database, AlertTriangle, CheckCircle, RefreshCw, Cpu, ArrowRight, Zap, Info } from 'lucide-react';

interface HeapBlock {
  id: string;
  name: string;
  size: number;
  type: 'malloc' | 'calloc' | 'realloc';
  values: (number | string)[];
  address: string;
  hasPointer: boolean;
  isLeaked: boolean;
}

export const MemoryVisualizer: React.FC = () => {
  const [stackVars, setStackVars] = useState<{ name: string; type: string; value: string; address: string }[]>([
    { name: 'roll_no', type: 'int', value: '101', address: '0x7ffd9a' },
    { name: 'gpa', type: 'float', value: '3.85', address: '0x7ffd9e' },
    { name: 'ptr', type: 'int*', value: '0x10a400', address: '0x7ffda2' }
  ]);

  const [heapBlocks, setHeapBlocks] = useState<HeapBlock[]>([
    {
      id: 'heap-1',
      name: 'ptr',
      size: 4,
      type: 'malloc',
      values: ['45', '88', '12', '99'],
      address: '0x10a400',
      hasPointer: true,
      isLeaked: false
    }
  ]);

  const [logs, setLogs] = useState<string[]>([
    "সিস্টেম রেডি: স্ট্যাটিক স্ট্যাক মেমরি এবং ডাইনামিক হিপ মেমরি সক্রিয়।"
  ]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 4)]);
  };

  const handleMalloc = () => {
    const newAddress = '0x10a' + Math.floor(100 + Math.random() * 800).toString(16);
    const newBlock: HeapBlock = {
      id: `heap-${Date.now()}`,
      name: `dyn_arr_${heapBlocks.length + 1}`,
      size: 4,
      type: 'malloc',
      values: ['GARBAGE', 'GARBAGE', 'GARBAGE', 'GARBAGE'],
      address: newAddress,
      hasPointer: true,
      isLeaked: false
    };

    setHeapBlocks((prev) => [...prev, newBlock]);
    setStackVars((prev) => [
      ...prev,
      { name: newBlock.name, type: 'int*', value: newAddress, address: '0x7ff' + Math.floor(1000 + Math.random() * 9000).toString(16) }
    ]);
    addLog(`malloc(4 * sizeof(int)) এক্সিকিউট হলো: হিপে 16 Bytes বরাদ্দ হয়েছে (প্রাথমিক মান গার্বেজ)।`);
  };

  const handleCalloc = () => {
    const newAddress = '0x10b' + Math.floor(100 + Math.random() * 800).toString(16);
    const newBlock: HeapBlock = {
      id: `heap-${Date.now()}`,
      name: `calloc_arr_${heapBlocks.length + 1}`,
      size: 5,
      type: 'calloc',
      values: [0, 0, 0, 0, 0],
      address: newAddress,
      hasPointer: true,
      isLeaked: false
    };

    setHeapBlocks((prev) => [...prev, newBlock]);
    setStackVars((prev) => [
      ...prev,
      { name: newBlock.name, type: 'int*', value: newAddress, address: '0x7ff' + Math.floor(1000 + Math.random() * 9000).toString(16) }
    ]);
    addLog(`calloc(5, sizeof(int)) এক্সিকিউট হলো: হিপে 5টি ব্লক 0 দ্বারা ইনিশিয়ালাইজ হয়েছে।`);
  };

  const handleRealloc = () => {
    if (heapBlocks.length === 0) {
      addLog("সতর্কবার্তা: রিঅ্যালোকেট করার জন্য হিপে কোনো মেমরি নেই!");
      return;
    }
    const lastBlock = heapBlocks[heapBlocks.length - 1];
    const newValues = [...lastBlock.values, 105, 200];
    const updated = heapBlocks.map((b, i) =>
      i === heapBlocks.length - 1
        ? { ...b, size: b.size + 2, values: newValues, type: 'realloc' as const }
        : b
    );
    setHeapBlocks(updated);
    addLog(`realloc(${lastBlock.name}, ${lastBlock.size + 2} * sizeof(int)) দ্বারা মেমরির সাইজ বৃদ্ধি করা হয়েছে।`);
  };

  const handleFree = () => {
    if (heapBlocks.length === 0) {
      addLog("হিপে কোনো সক্রিয় মেমরি ব্লক খালি করার মতো নেই।");
      return;
    }
    const freedBlock = heapBlocks[heapBlocks.length - 1];
    setHeapBlocks((prev) => prev.slice(0, -1));
    setStackVars((prev) => prev.filter((v) => v.name !== freedBlock.name));
    addLog(`free(${freedBlock.name}): মেমরি অ্যাড্রেস ${freedBlock.address} সফলভাবে মুক্ত করা হয়েছে।`);
  };

  const handleSimulateLeak = () => {
    if (heapBlocks.length === 0) {
      addLog("লিক করার জন্য হিপে কোনো মেমরি নেই!");
      return;
    }
    // Remove pointer from stack, leaving heap orphan
    const leakedBlock = heapBlocks[0];
    setStackVars((prev) => prev.filter((v) => v.name !== leakedBlock.name));
    setHeapBlocks((prev) =>
      prev.map((b, i) => (i === 0 ? { ...b, hasPointer: false, isLeaked: true } : b))
    );
    addLog(`⚠️ Memory Leak সতর্কবার্তা! ${leakedBlock.name} এর পয়েন্টার মুছে দেওয়া হয়েছে কিন্তু free() করা হয়নি! মেমরি আটকে গেছে!`);
  };

  const handleReset = () => {
    setStackVars([
      { name: 'roll_no', type: 'int', value: '101', address: '0x7ffd9a' },
      { name: 'gpa', type: 'float', value: '3.85', address: '0x7ffd9e' },
      { name: 'ptr', type: 'int*', value: '0x10a400', address: '0x7ffda2' }
    ]);
    setHeapBlocks([
      {
        id: 'heap-1',
        name: 'ptr',
        size: 4,
        type: 'malloc',
        values: ['45', '88', '12', '99'],
        address: '0x10a400',
        hasPointer: true,
        isLeaked: false
      }
    ]);
    setLogs(["মেমরি আর্কিটেকচার রিসেট সম্পন্ন।"]);
  };

  return (
    <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-stone-800 shadow-xl space-y-6">
      {/* Visualizer Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-400 font-mono text-xs px-2 py-0.5 rounded font-bold border border-emerald-500/30">
              ইন্টারঅ্যাক্টিভ সিমুলেটর (Topic 1.6)
            </span>
            <span className="text-xs text-stone-400 font-mono">RAM Architecture & Pointer Link</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-400" />
            স্ট্যাটিক (Stack) বনাম ডাইনামিক (Heap) মেমরি ভিজ্যুয়ালাইজার
          </h3>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          রিসেট
        </button>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        <button
          onClick={handleMalloc}
          className="px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-1"
        >
          <Zap className="w-3.5 h-3.5" />
          malloc() কল করুন
        </button>
        <button
          onClick={handleCalloc}
          className="px-3 py-2 bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-1"
        >
          <Database className="w-3.5 h-3.5" />
          calloc() কল করুন
        </button>
        <button
          onClick={handleRealloc}
          className="px-3 py-2 bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-1"
        >
          <Layers className="w-3.5 h-3.5" />
          realloc() রিসাইজ
        </button>
        <button
          onClick={handleFree}
          className="px-3 py-2 bg-rose-700 hover:bg-rose-600 text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-1"
        >
          <CheckCircle className="w-3.5 h-3.5" />
          free() মেমরি মুক্ত
        </button>
        <button
          onClick={handleSimulateLeak}
          className="col-span-2 sm:col-span-1 px-3 py-2 bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-1"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          Memory Leak টেস্ট
        </button>
      </div>

      {/* Memory Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Stack Memory (Static) */}
        <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <h4 className="font-bold text-sm text-emerald-400">স্ট্যাক মেমরি (Stack - Static)</h4>
            </div>
            <span className="text-[11px] font-mono text-stone-400">Compile-Time / LIFO Growth</span>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed">
            লোকাল চলক এবং পয়েন্টারগুলো ফিক্সড সাইজে স্ট্যাকের মধ্যে সংরক্ষিত হয়:
          </p>

          <div className="space-y-2">
            {stackVars.map((v, i) => (
              <div
                key={i}
                className="bg-stone-900 p-3 rounded-lg border border-stone-800 flex items-center justify-between font-mono text-xs hover:border-emerald-500/40 transition"
              >
                <div>
                  <span className="text-teal-400 font-semibold">{v.type}</span>{' '}
                  <span className="text-amber-300 font-bold">{v.name}</span>
                  <div className="text-[10px] text-stone-500">Address: {v.address}</div>
                </div>
                <div className="text-right">
                  <div className="bg-stone-800 px-2 py-0.5 rounded text-white font-bold inline-block">
                    {v.value}
                  </div>
                  {v.type.includes('*') && (
                    <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 justify-end">
                      Heap Address <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Heap Memory (Dynamic) */}
        <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-sky-400" />
              <h4 className="font-bold text-sm text-sky-400">হিপ মেমরি (Heap - Dynamic)</h4>
            </div>
            <span className="text-[11px] font-mono text-stone-400">Run-Time / Pointer Managed</span>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed">
            রান টাইমে <code className="text-sky-300 font-mono">malloc/calloc</code> দ্বারা বরাদ্দকৃত ব্লকসমূহ:
          </p>

          <div className="space-y-3">
            {heapBlocks.length === 0 ? (
              <div className="text-center py-8 text-xs text-stone-500 border border-dashed border-stone-800 rounded-lg">
                হিপ মেমরিতে বর্তমানে কোনো সক্রিয় ডাটা ব্লক বরাদ্দ নেই।
              </div>
            ) : (
              heapBlocks.map((block) => (
                <div
                  key={block.id}
                  className={`p-3 rounded-lg border transition ${
                    block.isLeaked
                      ? 'bg-rose-950/40 border-rose-600 animate-pulse'
                      : 'bg-stone-900 border-sky-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-amber-300 font-bold">
                      Block: {block.name} ({block.type})
                    </span>
                    <span className="text-[10px] text-stone-400">Loc: {block.address}</span>
                  </div>

                  {/* Allocated Array Values */}
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
                    {block.values.map((val, idx) => (
                      <div
                        key={idx}
                        className="bg-stone-950 p-2 rounded text-center border border-stone-800 font-mono text-[11px]"
                      >
                        <div className="text-[9px] text-stone-500">[{idx}]</div>
                        <div
                          className={`font-bold ${
                            val === 'GARBAGE'
                              ? 'text-rose-400 text-[9px]'
                              : val === 0
                              ? 'text-teal-400'
                              : 'text-amber-300'
                          }`}
                        >
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {block.isLeaked && (
                    <div className="mt-2 text-[11px] text-rose-400 flex items-center gap-1 font-sans">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      মেমরি লিক (Memory Leak): কোনো পয়েন্টার এটি নির্দেশ করছে না!
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Terminal Log Console */}
      <div className="bg-black/90 p-4 rounded-xl border border-stone-800 font-mono text-xs space-y-1">
        <div className="text-[11px] text-stone-400 flex items-center gap-1 mb-1 font-sans font-bold">
          <Info className="w-3.5 h-3.5 text-emerald-400" />
          মেমরি অপারেশন লগ (Execution Console):
        </div>
        {logs.map((log, idx) => (
          <div
            key={idx}
            className={`${
              idx === 0
                ? 'text-emerald-400 font-bold'
                : 'text-stone-400'
            }`}
          >
            &gt; {log}
          </div>
        ))}
      </div>
    </div>
  );
};
