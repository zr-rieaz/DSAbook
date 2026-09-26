import React, { useState } from 'react';
import { Layers, ArrowDown, ArrowUp, Eye, RefreshCw, AlertTriangle, CheckCircle, Sparkles, Terminal, ArrowRight } from 'lucide-react';

export const StackVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack_ops' | 'infix_postfix'>('stack_ops');

  // Stack Ops State
  const [maxSize, setMaxSize] = useState<number>(6);
  const [stack, setStack] = useState<string[]>(['10', '25', '40']);
  const [inputVal, setInputVal] = useState<string>('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' }>({
    text: 'স্ট্যাক প্রস্তুত। নতুন উপাদান PUSH বা শীর্ষ উপাদান POP করুন।',
    type: 'info',
  });
  const [peeking, setPeeking] = useState<boolean>(false);

  // Infix to Postfix State
  const [infixInput, setInfixInput] = useState<string>('(A + B) * C - D');
  const [conversionSteps, setConversionSteps] = useState<
    { token: string; stackState: string; output: string; explanation: string }[]
  >([]);
  const [hasConverted, setHasConverted] = useState<boolean>(false);

  // --- Stack Operations Logic ---
  const handlePush = () => {
    if (!inputVal.trim()) {
      setMessage({ text: 'অনুগ্রহ করে একটি উপাদান বা সংখ্যা লিখুন!', type: 'error' });
      return;
    }
    if (stack.length >= maxSize) {
      setMessage({
        text: `⚠️ Stack Overflow! স্ট্যাকের ধারণক্ষমতা (${maxSize}) পূর্ণ। আর উপাদান যোগ করা সম্ভব নয়।`,
        type: 'error',
      });
      return;
    }
    const val = inputVal.trim();
    setStack((prev) => [...prev, val]);
    setInputVal('');
    setMessage({
      text: `✅ PUSH সফল: "${val}" স্ট্যাকের শীর্ষে (TOP = ${stack.length}) যুক্ত হয়েছে।`,
      type: 'success',
    });
  };

  const handlePop = () => {
    if (stack.length === 0) {
      setMessage({
        text: '⚠️ Stack Underflow! স্ট্যাক ইতিমধ্যে খালি (TOP = -1)। অপসারণ করার মতো কোনো উপাদান নেই।',
        type: 'error',
      });
      return;
    }
    const poppedVal = stack[stack.length - 1];
    setStack((prev) => prev.slice(0, -1));
    setMessage({
      text: `✅ POP সফল: শীর্ষ উপাদান "${poppedVal}" অপসারিত হয়েছে (নতুন TOP = ${stack.length - 2})।`,
      type: 'success',
    });
  };

  const handlePeek = () => {
    if (stack.length === 0) {
      setMessage({ text: 'স্ট্যাক খালি! PEEK করার মতো কোনো উপাদান নেই।', type: 'error' });
      return;
    }
    setPeeking(true);
    const topVal = stack[stack.length - 1];
    setMessage({
      text: `🔍 PEEK / TOP: স্ট্যাকের শীর্ষে থাকা বর্তমান মান হলো "${topVal}" (Index: ${stack.length - 1})।`,
      type: 'info',
    });
    setTimeout(() => setPeeking(false), 2500);
  };

  const handleClear = () => {
    setStack([]);
    setMessage({ text: 'স্ট্যাক রিসেট করা হয়েছে (TOP = -1)।', type: 'info' });
  };

  // --- Infix to Postfix Converter Logic ---
  const getPrecedence = (op: string): number => {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    if (op === '^') return 3;
    return 0;
  };

  const isOperator = (ch: string): boolean => {
    return ['+', '-', '*', '/', '^'].includes(ch);
  };

  const convertInfixToPostfix = () => {
    const expr = infixInput.replace(/\s+/g, '');
    if (!expr) return;

    const opStack: string[] = [];
    let postfix = '';
    const steps: { token: string; stackState: string; output: string; explanation: string }[] = [];

    for (let i = 0; i < expr.length; i++) {
      const token = expr[i];

      if (/[a-zA-Z0-9]/.test(token)) {
        // Operand: append to output
        postfix += token;
        steps.push({
          token,
          stackState: opStack.length > 0 ? opStack.join(' ') : '(Empty)',
          output: postfix,
          explanation: `অপার্যান্ড '${token}' সরাসরি আউটপুটে যুক্ত হলো।`,
        });
      } else if (token === '(') {
        // Left Parenthesis: push to stack
        opStack.push(token);
        steps.push({
          token,
          stackState: opStack.join(' '),
          output: postfix,
          explanation: `'(' ব্র্যাকেট স্ট্যাকে PUSH করা হলো।`,
        });
      } else if (token === ')') {
        // Right Parenthesis: pop until '('
        while (opStack.length > 0 && opStack[opStack.length - 1] !== '(') {
          const popped = opStack.pop()!;
          postfix += popped;
        }
        if (opStack.length > 0 && opStack[opStack.length - 1] === '(') {
          opStack.pop(); // Remove '('
        }
        steps.push({
          token,
          stackState: opStack.length > 0 ? opStack.join(' ') : '(Empty)',
          output: postfix,
          explanation: `')' পাওয়ায় '(' পর্যন্ত সকল অপারেটর POP করে আউটপুটে দেওয়া হলো।`,
        });
      } else if (isOperator(token)) {
        // Operator
        while (
          opStack.length > 0 &&
          opStack[opStack.length - 1] !== '(' &&
          getPrecedence(opStack[opStack.length - 1]) >= getPrecedence(token)
        ) {
          const popped = opStack.pop()!;
          postfix += popped;
        }
        opStack.push(token);
        steps.push({
          token,
          stackState: opStack.join(' '),
          output: postfix,
          explanation: `অপারেটর '${token}' স্ট্যাকে রাখা হলো (উচ্চ/সমান অগ্রাধিকার সম্পন্ন অপারেটর থাকলে আগে POP করা হয়েছে)।`,
        });
      }
    }

    // Pop remaining operators
    while (opStack.length > 0) {
      const popped = opStack.pop()!;
      if (popped !== '(') {
        postfix += popped;
      }
    }

    steps.push({
      token: 'End',
      stackState: '(Empty)',
      output: postfix,
      explanation: `ইনপুট সমাপ্ত! স্ট্যাকের অবশিষ্ট সকল অপারেটর POP করে চূড়ান্ত পোস্টফিক্স রূপান্তর সম্পন্ন।`,
    });

    setConversionSteps(steps);
    setHasConverted(true);
  };

  const topIndex = stack.length - 1;
  const isFull = stack.length >= maxSize;
  const isEmpty = stack.length === 0;

  return (
    <div className="space-y-6 w-full max-w-full">
      {/* Visualizer Mode Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-stone-200/70 dark:bg-zinc-800 rounded-2xl w-full sm:w-auto self-start border border-stone-300 dark:border-zinc-700">
        <button
          onClick={() => setActiveTab('stack_ops')}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'stack_ops'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-stone-700 dark:text-zinc-300 hover:bg-stone-300/60 dark:hover:bg-zinc-700'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>স্ট্যাক অপারেশন (PUSH, POP & PEEK)</span>
        </button>
        <button
          onClick={() => setActiveTab('infix_postfix')}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'infix_postfix'
              ? 'bg-indigo-700 text-white shadow-xs'
              : 'text-stone-700 dark:text-zinc-300 hover:bg-stone-300/60 dark:hover:bg-zinc-700'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Infix ➔ Postfix কনভার্সন সিমুলেটর</span>
        </button>
      </div>

      {activeTab === 'stack_ops' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-stone-900 dark:text-zinc-100 flex items-center justify-between border-b border-stone-100 dark:border-zinc-800 pb-3">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  স্ট্যাক কন্ট্রোল প্যানেল
                </span>
                <span className="text-[11px] font-mono text-stone-500 dark:text-zinc-400">
                  LIFO আর্কিটেকচার
                </span>
              </h3>

              {/* Push Input & Button */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-700 dark:text-zinc-300">
                  নতুন উপাদান প্রবেশ করান (Element Value):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handlePush()}
                    placeholder="যেমন: 50, X, Data"
                    className="flex-1 px-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={handlePush}
                    disabled={isFull}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      isFull
                        ? 'bg-stone-300 dark:bg-zinc-800 text-stone-400 cursor-not-allowed'
                        : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs active:scale-95'
                    }`}
                  >
                    <ArrowDown className="w-4 h-4" />
                    PUSH
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <button
                  onClick={handlePop}
                  disabled={isEmpty}
                  className={`p-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    isEmpty
                      ? 'bg-stone-200 dark:bg-zinc-800 text-stone-400 cursor-not-allowed'
                      : 'bg-rose-600 hover:bg-rose-700 text-white shadow-xs active:scale-95'
                  }`}
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  POP (শীর্ষ সরান)
                </button>

                <button
                  onClick={handlePeek}
                  disabled={isEmpty}
                  className={`p-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    isEmpty
                      ? 'bg-stone-200 dark:bg-zinc-800 text-stone-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs active:scale-95'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  PEEK (শীর্ষ দেখুন)
                </button>

                <button
                  onClick={handleClear}
                  className="p-2.5 rounded-xl text-xs font-bold bg-stone-200 hover:bg-stone-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-stone-700 dark:text-zinc-200 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  রিসেট
                </button>
              </div>

              {/* Max Size Selector */}
              <div className="pt-3 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-stone-600 dark:text-zinc-400 font-medium">
                  স্ট্যাকের ধারণক্ষমতা (MAX):
                </span>
                <div className="flex items-center gap-1">
                  {[4, 6, 8].map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setMaxSize(size);
                        if (stack.length > size) {
                          setStack(stack.slice(0, size));
                        }
                      }}
                      className={`px-2.5 py-1 rounded-lg font-mono font-bold transition cursor-pointer ${
                        maxSize === size
                          ? 'bg-emerald-700 text-white'
                          : 'bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Box */}
              <div
                className={`p-3 rounded-xl text-xs font-medium border leading-relaxed ${
                  message.type === 'error'
                    ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-900'
                    : message.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-900'
                    : 'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-900'
                }`}
              >
                {message.text}
              </div>
            </div>

            {/* Pointer & Status Card */}
            <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-stone-800 dark:text-zinc-200 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                মেমরি ও পয়েন্টার স্ট্যাটাস (Internal State)
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-stone-50 dark:bg-zinc-800/60 rounded-xl border border-stone-200 dark:border-zinc-700">
                  <div className="text-stone-500 dark:text-zinc-400 text-[11px]">TOP পয়েন্টারের মান:</div>
                  <div className="text-base font-bold font-mono text-emerald-700 dark:text-emerald-400 mt-0.5">
                    {topIndex === -1 ? '-1 (Empty)' : `Index ${topIndex}`}
                  </div>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-zinc-800/60 rounded-xl border border-stone-200 dark:border-zinc-700">
                  <div className="text-stone-500 dark:text-zinc-400 text-[11px]">বর্তমান অবস্থা:</div>
                  <div className="text-base font-bold font-mono mt-0.5">
                    {isFull ? (
                      <span className="text-rose-600 dark:text-rose-400">Full (Overflow)</span>
                    ) : isEmpty ? (
                      <span className="text-amber-600 dark:text-amber-400">Empty (Underflow)</span>
                    ) : (
                      <span className="text-teal-600 dark:text-teal-400">Normal</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stack Visual Glass Tube */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xs flex flex-col items-center justify-center min-h-[420px]">
            <div className="w-full max-w-sm flex flex-col items-center">
              <div className="text-xs font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <ArrowDown className="w-3.5 h-3.5 text-emerald-600" />
                Stack Top (উন্মুক্ত মুখ / PUSH-POP পয়েন্ট)
              </div>

              {/* Stack Container Outline */}
              <div className="w-full border-x-4 border-b-4 border-emerald-800/80 dark:border-emerald-600/80 rounded-b-2xl p-3 bg-stone-100/70 dark:bg-zinc-950/80 min-h-[300px] flex flex-col-reverse justify-start gap-2 shadow-inner">
                {Array.from({ length: maxSize }).map((_, index) => {
                  const hasElement = index < stack.length;
                  const isTop = index === topIndex;
                  const val = stack[index];

                  return (
                    <div
                      key={index}
                      className={`w-full h-12 rounded-xl border flex items-center justify-between px-4 transition-all duration-300 font-mono text-sm shadow-xs ${
                        hasElement
                          ? isTop && peeking
                            ? 'bg-amber-400 text-stone-950 border-amber-500 font-extrabold ring-4 ring-amber-300/60 scale-[1.02]'
                            : isTop
                            ? 'bg-emerald-600 text-white border-emerald-500 font-bold shadow-md ring-2 ring-emerald-400/40'
                            : 'bg-teal-700 text-white border-teal-600 font-medium'
                          : 'bg-stone-200/50 dark:bg-zinc-900/50 border-dashed border-stone-300 dark:border-zinc-800 text-stone-400 dark:text-zinc-600'
                      }`}
                    >
                      <span className="text-[11px] font-mono text-white/80 dark:text-zinc-400">
                        [{index}]
                      </span>

                      <span className="text-base font-bold tracking-wide">
                        {hasElement ? val : 'ফাঁকা স্লট'}
                      </span>

                      <div>
                        {isTop && (
                          <span className="bg-white/20 dark:bg-black/30 px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wider uppercase">
                            ⬅ TOP
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Base Line */}
              <div className="w-full h-2 bg-emerald-950 dark:bg-emerald-500 rounded-full mt-1" />
              <div className="text-[11px] font-mono text-stone-500 dark:text-zinc-400 mt-2">
                Stack Bottom (বন্ধ প্রান্ত / Index 0)
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Infix to Postfix Converter Simulator */
        <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-100 dark:border-zinc-800 pb-4">
            <h3 className="text-base font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-600" />
              Infix থেকে Postfix এক্সপ্রেশন রূপান্তর সিমুলেটর
            </h3>
            <p className="text-xs text-stone-600 dark:text-zinc-400 mt-1">
              স্ট্যাকের অপারেটর প্রিসিডেন্স ও অ্যাসোসিয়িটিভিটি নীতি ব্যবহার করে যেকোনো গাণিতিক সমীকরণের ধাপভিত্তিক রূপান্তর দেখুন।
            </p>
          </div>

          {/* Input & Convert Form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-1 block">
                ইনফিক্স এক্সপ্রেশন (Infix Expression):
              </label>
              <input
                type="text"
                value={infixInput}
                onChange={(e) => setInfixInput(e.target.value)}
                placeholder="যেমন: (A + B) * C - D / E"
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={convertInfixToPostfix}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white text-xs sm:text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                রূপান্তর সিমুলেট করুন
              </button>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-stone-500 dark:text-zinc-400 font-medium">নমুনা সমীকরণ:</span>
            {[
              '(A + B) * C',
              'A + B * C - D',
              '((A + B) * C) - (D / E)',
              'A * (B + C) / D',
            ].map((preset, pIdx) => (
              <button
                key={pIdx}
                onClick={() => {
                  setInfixInput(preset);
                  setHasConverted(false);
                }}
                className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-zinc-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 text-stone-700 dark:text-zinc-300 font-mono transition cursor-pointer text-[11px]"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Conversion Table Result */}
          {hasConverted && conversionSteps.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ধাপভিত্তিক স্ট্যাক ট্র্যাকিং টেবিল (Step-by-Step Trace):
                </h4>
                <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  চূড়ান্ত Postfix: {conversionSteps[conversionSteps.length - 1].output}
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-zinc-700">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-indigo-900 text-white divide-x divide-indigo-800">
                      <th className="p-2.5 font-semibold w-12 text-center">ধাপ</th>
                      <th className="p-2.5 font-semibold w-24">স্ক্যান টোকেন</th>
                      <th className="p-2.5 font-semibold w-36 font-mono">অপারেটর স্ট্যাক</th>
                      <th className="p-2.5 font-semibold font-mono">আউটপুট স্ট্রিং (Postfix)</th>
                      <th className="p-2.5 font-semibold">কার্যপদ্ধতি ও ব্যাখ্যা</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-zinc-700 bg-white dark:bg-zinc-900">
                    {conversionSteps.map((st, sIdx) => (
                      <tr
                        key={sIdx}
                        className={`divide-x divide-stone-100 dark:divide-zinc-800 ${
                          sIdx % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-stone-50/60 dark:bg-zinc-800/40'
                        }`}
                      >
                        <td className="p-2.5 text-center font-mono font-semibold text-stone-500">
                          {sIdx + 1}
                        </td>
                        <td className="p-2.5 font-mono font-bold text-indigo-700 dark:text-indigo-400">
                          {st.token}
                        </td>
                        <td className="p-2.5 font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                          {st.stackState}
                        </td>
                        <td className="p-2.5 font-mono font-bold text-stone-900 dark:text-zinc-100">
                          {st.output}
                        </td>
                        <td className="p-2.5 text-stone-700 dark:text-zinc-300">
                          {st.explanation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
