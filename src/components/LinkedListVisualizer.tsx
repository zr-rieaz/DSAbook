import React, { useState } from 'react';
import { Layers, ArrowRight, ArrowLeft, RefreshCw, AlertTriangle, CheckCircle, Sparkles, Terminal, Link, Trash2, PlusCircle, Search, Cpu } from 'lucide-react';

interface ListNode {
  id: string;
  data: string;
  addr: string;
  nextAddr: string;
}

export const LinkedListVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'singly' | 'doubly_circular' | 'memory_avail'>('singly');

  // --- Singly Linked List State ---
  const [nodes, setNodes] = useState<ListNode[]>([
    { id: 'n1', data: '১০', addr: '0x1000', nextAddr: '0x1004' },
    { id: 'n2', data: '২৫', addr: '0x1004', nextAddr: '0x1008' },
    { id: 'n3', data: '৪০', addr: '0x1008', nextAddr: '0x100C' },
    { id: 'n4', data: '৫০', addr: '0x100C', nextAddr: 'NULL' },
  ]);

  const [inputVal, setInputVal] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highlightIdx, setHighlightIdx] = useState<number | null>(null);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' | 'warning' }>({
    text: 'সিঙ্গলি লিংকড লিস্ট প্রস্তুত। যেকোনো অবস্থানে নোড ইনসার্ট বা ডিলিট করুন।',
    type: 'info',
  });

  // --- AVAIL Memory Pool State ---
  const [availList, setAvailList] = useState<string[]>(['0x2000', '0x2004', '0x2008', '0x200C']);
  const [allocatedCount, setAllocatedCount] = useState<number>(4);

  // Helper to generate fake memory hex address
  const generateHex = () => '0x' + Math.floor(Math.random() * 65535).toString(16).toUpperCase();

  // --- Singly Linked List Handlers ---
  const handleInsertBegin = () => {
    if (!inputVal.trim()) {
      setMsg({ text: 'অনুগ্রহ করে নোডের ডাটা মান লিখুন!', type: 'error' });
      return;
    }
    const val = inputVal.trim();
    const newAddr = availList.length > 0 ? availList[0] : generateHex();

    const newNode: ListNode = {
      id: Date.now().toString(),
      data: val,
      addr: newAddr,
      nextAddr: nodes.length > 0 ? nodes[0].addr : 'NULL',
    };

    setNodes([newNode, ...nodes]);
    if (availList.length > 0) setAvailList(availList.slice(1));
    setAllocatedCount(allocatedCount + 1);
    setInputVal('');
    setMsg({
      text: `✅ ইনসার্ট সফল (শুরুতে): নতুন নোড [Data: ${val}, Addr: ${newAddr}] HEAD নোড হিসেবে যুক্ত হয়েছে।`,
      type: 'success',
    });
  };

  const handleInsertEnd = () => {
    if (!inputVal.trim()) {
      setMsg({ text: 'অনুগ্রহ করে নোডের ডাটা মান লিখুন!', type: 'error' });
      return;
    }
    const val = inputVal.trim();
    const newAddr = availList.length > 0 ? availList[0] : generateHex();

    const newNode: ListNode = {
      id: Date.now().toString(),
      data: val,
      addr: newAddr,
      nextAddr: 'NULL',
    };

    if (nodes.length === 0) {
      setNodes([newNode]);
    } else {
      const updatedNodes = nodes.map((node, idx) =>
        idx === nodes.length - 1 ? { ...node, nextAddr: newAddr } : node
      );
      setNodes([...updatedNodes, newNode]);
    }

    if (availList.length > 0) setAvailList(availList.slice(1));
    setAllocatedCount(allocatedCount + 1);
    setInputVal('');
    setMsg({
      text: `✅ ইনসার্ট সফল (শেষে): নতুন নোড [Data: ${val}, Addr: ${newAddr}] লিংকড লিস্টের শেষে যুক্ত হয়েছে।`,
      type: 'success',
    });
  };

  const handleDeleteBegin = () => {
    if (nodes.length === 0) {
      setMsg({ text: '⚠️ Underflow! লিংকড লিস্টে কোনো নোড নেই।', type: 'error' });
      return;
    }

    const removedNode = nodes[0];
    setNodes(nodes.slice(1));
    setAvailList([removedNode.addr, ...availList]);
    setAllocatedCount(allocatedCount - 1);
    setMsg({
      text: `✅ ডিলিট সফল (শুরু থেকে): নোড [Data: ${removedNode.data}, Addr: ${removedNode.addr}] অপসারিত হয়ে AVAIL লিস্টে জমা হয়েছে।`,
      type: 'success',
    });
  };

  const handleDeleteEnd = () => {
    if (nodes.length === 0) {
      setMsg({ text: '⚠️ Underflow! লিংকড লিস্টে কোনো নোড নেই।', type: 'error' });
      return;
    }

    const removedNode = nodes[nodes.length - 1];
    if (nodes.length === 1) {
      setNodes([]);
    } else {
      const updatedNodes = nodes.slice(0, -1).map((node, idx) =>
        idx === nodes.length - 2 ? { ...node, nextAddr: 'NULL' } : node
      );
      setNodes(updatedNodes);
    }

    setAvailList([removedNode.addr, ...availList]);
    setAllocatedCount(allocatedCount - 1);
    setMsg({
      text: `✅ ডিলিট সফল (শেষ থেকে): শেষ নোড [Data: ${removedNode.data}] অপসারিত হয়েছে।`,
      type: 'success',
    });
  };

  const handleSearchNode = () => {
    if (!searchQuery.trim()) return;
    const target = searchQuery.trim();
    const foundIdx = nodes.findIndex((n) => n.data === target);

    if (foundIdx !== -1) {
      setHighlightIdx(foundIdx);
      setMsg({
        text: `🔍 অনুসন্ধান সফল: "${target}" মানবিশিষ্ট নোডটি ${foundIdx + 1}তম অবস্থানে (Addr: ${nodes[foundIdx].addr}) পাওয়া গেছে!`,
        type: 'success',
      });
      setTimeout(() => setHighlightIdx(null), 3000);
    } else {
      setHighlightIdx(null);
      setMsg({ text: `❌ উপাদানটি লিংকড লিস্টে পাওয়া যায়নি: "${target}"`, type: 'error' });
    }
  };

  const handleResetList = () => {
    setNodes([
      { id: 'n1', data: '১০', addr: '0x1000', nextAddr: '0x1004' },
      { id: 'n2', data: '২৫', addr: '0x1004', nextAddr: '0x1008' },
      { id: 'n3', data: '৪০', addr: '0x1008', nextAddr: '0x100C' },
      { id: 'n4', data: '৫০', addr: '0x100C', nextAddr: 'NULL' },
    ]);
    setAvailList(['0x2000', '0x2004', '0x2008', '0x200C']);
    setAllocatedCount(4);
    setMsg({ text: 'লিংকড লিস্ট রিসেট করা হয়েছে।', type: 'info' });
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-sm space-y-6">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800">
              Interactive Linked List Lab
            </span>
            <span className="text-xs text-stone-500 font-mono">Dynamic Nodes & Pointers</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-zinc-100 mt-1 flex items-center gap-2">
            <Link className="w-6 h-6 text-emerald-600" />
            লিংকড লিস্ট (Linked List) সিমুলেটর
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center bg-stone-100 dark:bg-zinc-800 p-1 rounded-2xl border border-stone-200 dark:border-zinc-700">
          <button
            onClick={() => setActiveTab('singly')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'singly'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ১. সিঙ্গলি লিংকড লিস্ট (Singly)
          </button>
          <button
            onClick={() => setActiveTab('doubly_circular')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'doubly_circular'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ২. ডাবলি ও সার্কুলার লিস্ট
          </button>
          <button
            onClick={() => setActiveTab('memory_avail')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'memory_avail'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ৩. Dynamic RAM & AVAIL List
          </button>
        </div>
      </div>

      {/* TAB 1: SINGLY LINKED LIST */}
      {activeTab === 'singly' && (
        <div className="space-y-6">
          {/* Status Message */}
          <div
            className={`p-4 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-semibold transition ${
              msg.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                : msg.type === 'error'
                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                : 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-800'
            }`}
          >
            {msg.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />}
            {msg.type === 'error' && <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />}
            {msg.type === 'info' && <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />}
            <span>{msg.text}</span>
          </div>

          {/* Action Control Panel */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700">
            {/* Input & Insertion */}
            <div className="md:col-span-6 flex flex-wrap items-center gap-2">
              <input
                type="text"
                placeholder="নোড ডাটা (যেমন: ৯৯)"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="px-3.5 py-2 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 outline-none w-36"
              />
              <button
                onClick={handleInsertBegin}
                className="px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1 cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Insert First</span>
              </button>
              <button
                onClick={handleInsertEnd}
                className="px-3 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1 cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Insert Last</span>
              </button>
            </div>

            {/* Deletion & Search */}
            <div className="md:col-span-6 flex flex-wrap items-center justify-end gap-2">
              <button
                onClick={handleDeleteBegin}
                className="px-3 py-2 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete First</span>
              </button>
              <button
                onClick={handleDeleteEnd}
                className="px-3 py-2 bg-rose-800 hover:bg-rose-900 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Last</span>
              </button>

              <div className="flex items-center gap-1 border-l border-stone-300 dark:border-zinc-700 pl-2">
                <input
                  type="text"
                  placeholder="খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchNode()}
                  className="px-2.5 py-2 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 outline-none w-20"
                />
                <button
                  onClick={handleSearchNode}
                  className="p-2 bg-stone-200 dark:bg-zinc-700 hover:bg-stone-300 text-stone-800 dark:text-zinc-200 rounded-xl transition cursor-pointer"
                  title="অনুসন্ধান"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleResetList}
                className="p-2 bg-stone-200 dark:bg-zinc-700 hover:bg-stone-300 text-stone-800 dark:text-zinc-200 rounded-xl transition cursor-pointer"
                title="রিসেট"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Node Chain Graphical Display */}
          <div className="bg-stone-100 dark:bg-zinc-950 p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 space-y-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-600 dark:text-zinc-400">
              <span>HEAD Pointer ➔ </span>
              <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-mono">
                {nodes.length > 0 ? nodes[0].addr : 'NULL'}
              </span>
              <span className="ml-auto text-stone-500">মোট নোড সংখ্যা: {nodes.length}টি</span>
            </div>

            {/* Horizontal Nodes and Pointer Links */}
            <div className="flex items-center gap-3 min-w-max py-4">
              {nodes.length === 0 ? (
                <div className="text-center py-8 text-stone-400 text-sm font-semibold w-full">
                  লিংকড লিস্ট সম্পূর্ণ খালি (HEAD = NULL)!
                </div>
              ) : (
                nodes.map((node, idx) => {
                  const isHead = idx === 0;
                  const isHighlighted = highlightIdx === idx;

                  return (
                    <React.Fragment key={node.id}>
                      {/* Node Box */}
                      <div
                        className={`rounded-2xl border-2 transition-all duration-300 shadow-md flex flex-col overflow-hidden min-w-[140px] ${
                          isHighlighted
                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/80 ring-4 ring-amber-400/50 scale-110'
                            : isHead
                            ? 'border-emerald-600 bg-white dark:bg-zinc-800'
                            : 'border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800'
                        }`}
                      >
                        {/* Node Header Badges */}
                        <div className="bg-stone-100 dark:bg-zinc-900 px-3 py-1 text-[10px] font-mono flex items-center justify-between border-b border-stone-200 dark:border-zinc-700 text-stone-600 dark:text-zinc-400 font-bold">
                          <span>{isHead ? 'HEAD [0]' : `Node [${idx}]`}</span>
                          <span className="text-emerald-600 font-mono">{node.addr}</span>
                        </div>

                        {/* Node Content split: DATA FIELD | NEXT POINTER FIELD */}
                        <div className="grid grid-cols-2 divide-x divide-stone-200 dark:divide-zinc-700 text-center">
                          {/* Data Field */}
                          <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/30">
                            <span className="text-[10px] text-stone-400 font-semibold block">DATA</span>
                            <span className="text-base font-extrabold text-stone-900 dark:text-zinc-100">
                              {node.data}
                            </span>
                          </div>

                          {/* Next Pointer Field */}
                          <div className="p-3 bg-stone-50/50 dark:bg-zinc-900/30">
                            <span className="text-[10px] text-stone-400 font-semibold block">NEXT</span>
                            <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                              {node.nextAddr}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Arrow Pointer Link */}
                      <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-mono font-bold shrink-0">
                        <div className="h-0.5 w-6 bg-emerald-600 dark:bg-emerald-400"></div>
                        <ArrowRight className="w-5 h-5 -ml-2" />
                      </div>
                    </React.Fragment>
                  );
                })
              )}

              {/* NULL Terminator */}
              {nodes.length > 0 && (
                <div className="px-3 py-2 rounded-xl bg-stone-800 text-stone-200 text-xs font-mono font-bold shadow-xs border border-stone-700">
                  NULL
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DOUBLY & CIRCULAR LINKED LIST */}
      {activeTab === 'doubly_circular' && (
        <div className="space-y-6">
          {/* Section A: Doubly Linked List */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2 border-b border-stone-200 dark:border-zinc-800 pb-2">
              <span className="text-emerald-600 font-mono">§ 6.1.2</span>
              ডাবলি লিংকড লিস্ট (Doubly Linked List - 3 Fields: PREV | DATA | NEXT)
            </h3>
            <p className="text-xs text-stone-600 dark:text-zinc-400">
              ডাবলি লিংকড লিস্টের প্রতিটি নোডে ৩টি ফিল্ড থাকে: **PREV** (পূর্ববর্তী নোডের পয়েন্টার), **DATA**, এবং **NEXT** (পরবর্তী নোডের পয়েন্টার)। ফলে উভয় দিকে (Forward & Backward) ট্রাভার্স করা যায়।
            </p>

            {/* Doubly Graphic */}
            <div className="bg-stone-100 dark:bg-zinc-950 p-5 rounded-2xl border border-stone-200 dark:border-zinc-800 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max py-2">
                <div className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 text-xs font-mono font-bold">NULL</div>
                <div className="text-emerald-600 font-bold">◄═►</div>

                {/* Node A */}
                <div className="rounded-xl border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xs grid grid-cols-3 divide-x divide-stone-200 dark:divide-zinc-700 text-center text-xs font-mono">
                  <div className="p-2 bg-rose-50/50 dark:bg-rose-950/20 text-rose-700">NULL</div>
                  <div className="p-2 font-bold text-stone-900 dark:text-zinc-100">DATA: 10</div>
                  <div className="p-2 text-teal-600 font-bold">0x1004</div>
                </div>

                <div className="text-emerald-600 font-bold">◄═►</div>

                {/* Node B */}
                <div className="rounded-xl border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xs grid grid-cols-3 divide-x divide-stone-200 dark:divide-zinc-700 text-center text-xs font-mono">
                  <div className="p-2 text-rose-700 font-bold">0x1000</div>
                  <div className="p-2 font-bold text-stone-900 dark:text-zinc-100">DATA: 20</div>
                  <div className="p-2 text-teal-600 font-bold">0x1008</div>
                </div>

                <div className="text-emerald-600 font-bold">◄═►</div>

                {/* Node C */}
                <div className="rounded-xl border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xs grid grid-cols-3 divide-x divide-stone-200 dark:divide-zinc-700 text-center text-xs font-mono">
                  <div className="p-2 text-rose-700 font-bold">0x1004</div>
                  <div className="p-2 font-bold text-stone-900 dark:text-zinc-100">DATA: 30</div>
                  <div className="p-2 text-stone-400">NULL</div>
                </div>

                <div className="text-emerald-600 font-bold">◄═►</div>
                <div className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 text-xs font-mono font-bold">NULL</div>
              </div>
            </div>
          </div>

          {/* Section B: Circular Linked List */}
          <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-zinc-800">
            <h3 className="text-base font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-600 font-mono">§ 6.1.3</span>
              সার্কুলার লিংকড লিস্ট (Circular Linked List)
            </h3>
            <p className="text-xs text-stone-600 dark:text-zinc-400">
              সার্কুলার লিংকড লিস্টের শেষ নোডের NEXT পয়েন্টারে **NULL** থাকার পরিবর্তে প্রথম নোডের (HEAD) মেমরি অ্যাড্রেস সংরক্ষিত থাকে।
            </p>

            <div className="bg-emerald-950 text-emerald-100 p-4 rounded-2xl border border-emerald-800 text-xs font-mono space-y-2">
              <div className="text-amber-400 font-bold">Circular Connection Loop:</div>
              <div>Node[0] (0x1000) ➔ Node[1] (0x1004) ➔ Node[2] (0x1008) ➔ [NEXT points back to 0x1000!]</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DYNAMIC MEMORY & AVAIL LIST */}
      {activeTab === 'memory_avail' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2 border-b border-stone-200 dark:border-zinc-800 pb-2">
              <Cpu className="w-5 h-5 text-emerald-600" />
              Dynamic RAM Allocation & AVAIL List (Free Storage List)
            </h3>
            <p className="text-xs text-stone-600 dark:text-zinc-400">
              অপারেটিং সিস্টেম এবং সি ল্যাঙ্গুয়েজের <code className="font-mono text-emerald-600">malloc()</code> / <code className="font-mono text-emerald-600">free()</code> কীভাবে রানটাইমে হিপ মেমরি বরাদ্দ করে তা নিচে দেখানো হলো:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Active Nodes */}
            <div className="bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700 space-y-2">
              <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                বরাদ্দকৃত মেমরি নোড (Active Nodes in Heap):
              </div>
              <div className="text-xs space-y-1 font-mono">
                {nodes.map((n, idx) => (
                  <div key={idx} className="p-2 rounded bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-700 flex justify-between">
                    <span>Node #{idx + 1} ({n.addr})</span>
                    <span className="text-emerald-600 font-bold">Data: {n.data}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AVAIL List */}
            <div className="bg-amber-50/70 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200 dark:border-amber-900/50 space-y-2">
              <div className="text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                ফ্রি মেমরি পুল (AVAIL List / Free Storage List):
              </div>
              <div className="text-xs space-y-1 font-mono text-amber-950 dark:text-amber-100">
                {availList.length === 0 ? (
                  <div className="p-2 text-rose-600 font-bold">AVAIL List খালি (Memory Overflow risk)!</div>
                ) : (
                  availList.map((addr, idx) => (
                    <div key={idx} className="p-2 rounded bg-white/80 dark:bg-zinc-900/80 border border-amber-300 dark:border-amber-800 flex justify-between">
                      <span>Free Block #{idx + 1}</span>
                      <span className="font-bold text-amber-700">{addr}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
