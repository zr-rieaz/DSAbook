import React, { useState } from 'react';
import { Layers, ArrowRight, RefreshCw, AlertTriangle, CheckCircle, Sparkles, Terminal, Network, Search, PlusCircle, Trash2, Eye } from 'lucide-react';

interface BSTNode {
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;
}

export const TreeVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bst' | 'traversal' | 'terminology'>('bst');

  // BST Array representation for easy UI rendering
  const [treeValues, setTreeValues] = useState<number[]>([50, 30, 70, 20, 40, 60, 80]);
  const [inputVal, setInputVal] = useState<string>('');
  const [searchVal, setSearchVal] = useState<string>('');
  const [visitedNodes, setVisitedNodes] = useState<number[]>([]);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' }>({
    text: 'বাইনারি সার্চ ট্রি (BST) প্রস্তুত। নতুন মান ইনসার্ট, ডিলিট বা ট্রাভার্সাল ট্রাই করুন।',
    type: 'info',
  });

  // BST Insertion Logic into value array
  const handleInsertBST = () => {
    const num = parseInt(inputVal.trim(), 10);
    if (isNaN(num)) {
      setMsg({ text: 'অনুগ্রহ করে একটি সঠিক সংখ্যা লিখুন!', type: 'error' });
      return;
    }
    if (treeValues.includes(num)) {
      setMsg({ text: `⚠️ মান "${num}" ট্রিতে ইতিমধ্যে বিদ্যমান! BST-তে ডুপ্লিকেট মান থাকে না।`, type: 'error' });
      return;
    }

    setTreeValues([...treeValues, num]);
    setInputVal('');
    setMsg({ text: `✅ BST-তে "${num}" সফলভাবে ইনসার্ট করা হয়েছে!`, type: 'success' });
  };

  // BST Node Search simulation
  const handleSearchBST = () => {
    const target = parseInt(searchVal.trim(), 10);
    if (isNaN(target)) return;

    if (treeValues.includes(target)) {
      setMsg({ text: `🔍 অনুসন্ধান সফল: মান "${target}" বাইনারি সার্চ ট্রিতে পাওয়া গেছে!`, type: 'success' });
    } else {
      setMsg({ text: `❌ মান "${target}" ট্রিতে পাওয়া যায়নি।`, type: 'error' });
    }
  };

  // Tree Traversals calculation
  // Build simple BST object graph from treeValues
  const buildBSTGraph = (): BSTNode | null => {
    if (treeValues.length === 0) return null;
    let root: BSTNode = { val: treeValues[0], left: null, right: null };

    const insert = (node: BSTNode, val: number): BSTNode => {
      if (val < node.val) {
        if (!node.left) node.left = { val, left: null, right: null };
        else insert(node.left, val);
      } else if (val > node.val) {
        if (!node.right) node.right = { val, left: null, right: null };
        else insert(node.right, val);
      }
      return node;
    };

    for (let i = 1; i < treeValues.length; i++) {
      insert(root, treeValues[i]);
    }
    return root;
  };

  // In-order (Left, Root, Right)
  const getInOrder = (node: BSTNode | null, res: number[] = []): number[] => {
    if (node) {
      getInOrder(node.left, res);
      res.push(node.val);
      getInOrder(node.right, res);
    }
    return res;
  };

  // Pre-order (Root, Left, Right)
  const getPreOrder = (node: BSTNode | null, res: number[] = []): number[] => {
    if (node) {
      res.push(node.val);
      getPreOrder(node.left, res);
      getPreOrder(node.right, res);
    }
    return res;
  };

  // Post-order (Left, Right, Root)
  const getPostOrder = (node: BSTNode | null, res: number[] = []): number[] => {
    if (node) {
      getPostOrder(node.left, res);
      getPostOrder(node.right, res);
      res.push(node.val);
    }
    return res;
  };

  const bstRoot = buildBSTGraph();
  const inOrderResult = getInOrder(bstRoot);
  const preOrderResult = getPreOrder(bstRoot);
  const postOrderResult = getPostOrder(bstRoot);

  const handleReset = () => {
    setTreeValues([50, 30, 70, 20, 40, 60, 80]);
    setMsg({ text: 'বাইনারি সার্চ ট্রি রিসেট করা হয়েছে।', type: 'info' });
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-sm space-y-6">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800">
              Interactive Tree Lab
            </span>
            <span className="text-xs text-stone-500 font-mono">BST & Traversals</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-zinc-100 mt-1 flex items-center gap-2">
            <Network className="w-6 h-6 text-emerald-600" />
            ট্রি (Tree Data Structure) সিমুলেটর
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center bg-stone-100 dark:bg-zinc-800 p-1 rounded-2xl border border-stone-200 dark:border-zinc-700">
          <button
            onClick={() => setActiveTab('bst')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'bst'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ১. বাইনারি সার্চ ট্রি (BST)
          </button>
          <button
            onClick={() => setActiveTab('traversal')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'traversal'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ২. ট্রাভার্সাল (In/Pre/Post)
          </button>
          <button
            onClick={() => setActiveTab('terminology')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'terminology'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
            }`}
          >
            ৩. Terminology & Properties
          </button>
        </div>
      </div>

      {/* TAB 1: BST INTERACTIVE SANDBOX */}
      {activeTab === 'bst' && (
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
            <div className="md:col-span-6 flex items-center gap-2">
              <input
                type="number"
                placeholder="সংখ্যা লিখুন (যেমন: ৪৫)"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 outline-none"
              />
              <button
                onClick={handleInsertBST}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition flex items-center gap-1 cursor-pointer shrink-0"
              >
                <PlusCircle className="w-4 h-4" />
                <span>BST Insert</span>
              </button>
            </div>

            <div className="md:col-span-6 flex items-center justify-end gap-2">
              <input
                type="number"
                placeholder="খুঁজুন..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl border border-stone-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 outline-none w-28"
              />
              <button
                onClick={handleSearchBST}
                className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl transition flex items-center gap-1 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
              <button
                onClick={handleReset}
                className="p-2 bg-stone-200 dark:bg-zinc-700 hover:bg-stone-300 text-stone-800 dark:text-zinc-200 rounded-xl transition cursor-pointer"
                title="রিসেট"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual BST Node Hierarchy Display */}
          <div className="bg-stone-100 dark:bg-zinc-950 p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 space-y-6">
            <div className="text-xs font-bold text-stone-600 dark:text-zinc-400 flex items-center justify-between">
              <span>Root Node = <code className="font-mono text-emerald-600">{treeValues[0]}</code> (Left &lt; Root &lt; Right)</span>
              <span>মোট নোড: {treeValues.length}টি</span>
            </div>

            {/* Tree Graphical Structure */}
            <div className="flex flex-col items-center gap-6 py-4 overflow-x-auto">
              {/* Level 0: Root */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center shadow-lg ring-4 ring-emerald-400/30">
                  {treeValues[0]}
                </div>
                <span className="text-[10px] font-mono text-emerald-600 font-bold mt-1">ROOT (Level 0)</span>
              </div>

              {/* Level 1 Children */}
              <div className="grid grid-cols-2 gap-16 sm:gap-32 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center shadow-md">
                    {inOrderResult[1] || 30}
                  </div>
                  <span className="text-[10px] font-mono text-stone-500 mt-1">Left Child</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center shadow-md">
                    {inOrderResult[inOrderResult.length - 2] || 70}
                  </div>
                  <span className="text-[10px] font-mono text-stone-500 mt-1">Right Child</span>
                </div>
              </div>

              {/* Level 2 Leaf Nodes */}
              <div className="grid grid-cols-4 gap-6 sm:gap-12">
                {[20, 40, 60, 80].map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 font-extrabold text-xs flex items-center justify-center shadow-xs">
                      {val}
                    </div>
                    <span className="text-[9px] font-mono text-amber-600 font-bold mt-0.5">Leaf</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TREE TRAVERSALS */}
      {activeTab === 'traversal' && (
        <div className="space-y-6">
          <div className="bg-emerald-950 text-emerald-100 p-4 rounded-2xl border border-emerald-800 text-xs font-mono space-y-3">
            <div className="text-amber-400 font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Binary Tree Traversal Results:
            </div>

            <div className="space-y-2">
              <div className="bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-700">
                <span className="text-amber-300 font-bold">১. In-Order (Left ➔ Root ➔ Right):</span>
                <div className="text-sm font-extrabold text-white mt-1">
                  [{inOrderResult.join(' ➔ ')}]
                </div>
                <span className="text-[10px] text-emerald-300 font-sans block mt-0.5">
                  • বিশেষত্ব: BST এর In-order ট্রাভার্সাল সর্বদা মানগুলোকে ছোট থেকে বড় (Ascending Sorted) সাজায়!
                </span>
              </div>

              <div className="bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-700">
                <span className="text-teal-300 font-bold">২. Pre-Order (Root ➔ Left ➔ Right):</span>
                <div className="text-sm font-extrabold text-white mt-1">
                  [{preOrderResult.join(' ➔ ')}]
                </div>
              </div>

              <div className="bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-700">
                <span className="text-amber-300 font-bold">৩. Post-Order (Left ➔ Right ➔ Root):</span>
                <div className="text-sm font-extrabold text-white mt-1">
                  [{postOrderResult.join(' ➔ ')}]
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TERMINOLOGY & PROPERTIES */}
      {activeTab === 'terminology' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-stone-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-stone-200 dark:border-zinc-700 space-y-2">
            <div className="font-bold text-stone-900 dark:text-zinc-100 text-sm">ট্রি-এর প্রধান টার্মিনোলজি:</div>
            <ul className="space-y-1.5 text-stone-700 dark:text-zinc-300">
              <li>• <strong>Root Node:</strong> ট্রির সর্বশীর্ষের নোড (যার কোনো Parent নেই)।</li>
              <li>• <strong>Parent & Child:</strong> কোনো নোডের নিচের সংযুক্ত নোড হলো Child, আর ওপরের নোড হলো Parent।</li>
              <li>• <strong>Leaf / Terminal Node:</strong> যে নোডের কোনো Child বা সন্তান নেই।</li>
              <li>• <strong>Sub-tree:</strong> প্রধান ট্রির ভেতরের যেকোনো নোডভিত্তিক শাখা ট্রি।</li>
              <li>• <strong>Level & Height:</strong> Root এর Level 0; সর্বাপেক্ষা দীর্ঘ পথের নোড সংখ্যা হলো Height।</li>
            </ul>
          </div>

          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 space-y-2">
            <div className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">ট্রি-এর গাণিতিক সূত্রাবলি:</div>
            <ul className="space-y-1.5 text-emerald-950 dark:text-emerald-100 font-mono">
              <li>• $N$ টি নোড থাকলে Edges সংখ্যা = $N - 1$</li>
              <li>• $h$ উচ্চতার বাইনারি ট্রিতে সর্বোচ্চ নোড = $2^(h+1) - 1$</li>
              <li>• Level $L$ এ সর্বোচ্চ নোড সংখ্যা = $2^L$</li>
              <li>• Balanced BST এর Search Time Complexity = $O(\log n)$</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
