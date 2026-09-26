import React, { useState } from 'react';
import { Grid, Eye, Cpu, Calculator, RefreshCw, Layers, ArrowRight, Check, Zap, Info, Binary } from 'lucide-react';

export const ArrayPointerStringVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'pointer' | 'string'>('matrix');

  // Matrix Address Calculator State
  const [baseAddr, setBaseAddr] = useState<number>(1000);
  const [elemSize, setElemSize] = useState<number>(4); // 4 bytes for int
  const [numRows, setNumRows] = useState<number>(3);
  const [numCols, setNumCols] = useState<number>(4);
  const [targetRow, setTargetRow] = useState<number>(1);
  const [targetCol, setTargetCol] = useState<number>(2);

  // Pointer State
  const [varValue, setVarValue] = useState<number>(42);
  const [varAddr] = useState<string>('0x7ffee4');
  const [ptrAddr] = useState<string>('0x7ffeb0');
  const [ptrOffset, setPtrOffset] = useState<number>(0);

  // String State
  const [str1, setStr1] = useState<string>('BTEB');
  const [str2, setStr2] = useState<string>('CST');
  const [strOp, setStrOp] = useState<'len' | 'cat' | 'rev' | 'cmp'>('cat');

  // Matrix Calculations
  const rowMajorOffset = targetRow * numCols + targetCol;
  const colMajorOffset = targetCol * numRows + targetRow;
  const rowMajorAddr = baseAddr + rowMajorOffset * elemSize;
  const colMajorAddr = baseAddr + colMajorOffset * elemSize;

  // String Operations Result
  const getStrResult = () => {
    if (strOp === 'len') {
      return {
        text: `strlen("${str1}") = ${str1.length} Characters (Excluding '\\0')`,
        chars: [...str1.split(''), '\\0']
      };
    } else if (strOp === 'cat') {
      const combined = str1 + str2;
      return {
        text: `strcat("${str1}", "${str2}") = "${combined}"`,
        chars: [...combined.split(''), '\\0']
      };
    } else if (strOp === 'rev') {
      const reversed = str1.split('').reverse().join('');
      return {
        text: `strrev("${str1}") = "${reversed}"`,
        chars: [...reversed.split(''), '\\0']
      };
    } else {
      const cmp = str1.localeCompare(str2);
      return {
        text: `strcmp("${str1}", "${str2}") = ${cmp} (${cmp === 0 ? 'Equal strings' : cmp > 0 ? 'str1 is greater' : 'str2 is greater'})`,
        chars: [...str1.split(''), '\\0']
      };
    }
  };

  const strResult = getStrResult();

  return (
    <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-stone-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-400 font-mono text-xs px-2 py-0.5 rounded font-bold border border-emerald-500/30">
              ইন্টারঅ্যাক্টিভ হ্যান্ডবুক (Chapter 3)
            </span>
            <span className="text-xs text-stone-400 font-mono">2D RAM Mapping, Pointer & String Lab</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-400" />
            অ্যারে মেমরি ক্যালকুলেটর, পয়েন্টার ও স্ট্রিং ল্যাব
          </h3>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'matrix' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
            }`}
          >
            ২D ম্যাট্রিক্স অ্যাড্রেস
          </button>
          <button
            onClick={() => setActiveTab('pointer')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'pointer' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
            }`}
          >
            পয়েন্টার ডি-রেফারেন্স
          </button>
          <button
            onClick={() => setActiveTab('string')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'string' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
            }`}
          >
            স্ট্রিং অপারেশন
          </button>
        </div>
      </div>

      {/* 1. Matrix Memory Address Calculator Tab */}
      {activeTab === 'matrix' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs">
            <div>
              <label className="text-stone-400 block mb-1">বেস অ্যাড্রেস (Base Address):</label>
              <input
                type="number"
                value={baseAddr}
                onChange={(e) => setBaseAddr(Number(e.target.value))}
                className="w-full bg-stone-900 border border-stone-700 p-1.5 rounded font-mono text-emerald-400 font-bold"
              />
            </div>
            <div>
              <label className="text-stone-400 block mb-1">উপাদান সাইজ w (Bytes):</label>
              <select
                value={elemSize}
                onChange={(e) => setElemSize(Number(e.target.value))}
                className="w-full bg-stone-900 border border-stone-700 p-1.5 rounded font-mono text-emerald-400 font-bold"
              >
                <option value={1}>1 Byte (char)</option>
                <option value={2}>2 Bytes (short)</option>
                <option value={4}>4 Bytes (int / float)</option>
                <option value={8}>8 Bytes (double)</option>
              </select>
            </div>
            <div>
              <label className="text-stone-400 block mb-1">ম্যাট্রিক্স ডাইমেনশন (M × N):</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="2"
                  max="5"
                  value={numRows}
                  onChange={(e) => setNumRows(Number(e.target.value))}
                  className="w-1/2 bg-stone-900 border border-stone-700 p-1.5 rounded font-mono text-amber-300 font-bold"
                  title="Rows"
                />
                <input
                  type="number"
                  min="2"
                  max="6"
                  value={numCols}
                  onChange={(e) => setNumCols(Number(e.target.value))}
                  className="w-1/2 bg-stone-900 border border-stone-700 p-1.5 rounded font-mono text-amber-300 font-bold"
                  title="Cols"
                />
              </div>
            </div>
            <div>
              <label className="text-stone-400 block mb-1">টার্গেট সেল A[j, k]:</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  max={numRows - 1}
                  value={targetRow}
                  onChange={(e) => setTargetRow(Math.min(numRows - 1, Number(e.target.value)))}
                  className="w-1/2 bg-stone-900 border border-stone-700 p-1.5 rounded font-mono text-teal-300 font-bold"
                  title="Target Row j"
                />
                <input
                  type="number"
                  min="0"
                  max={numCols - 1}
                  value={targetCol}
                  onChange={(e) => setTargetCol(Math.min(numCols - 1, Number(e.target.value)))}
                  className="w-1/2 bg-stone-900 border border-stone-700 p-1.5 rounded font-mono text-teal-300 font-bold"
                  title="Target Col k"
                />
              </div>
            </div>
          </div>

          {/* 2D Interactive Grid */}
          <div className="space-y-2">
            <div className="text-xs text-stone-400 flex items-center justify-between">
              <span>Logical 2D Grid (যেকোনো সেলে ক্লিক করে অ্যাড্রেস দেখুন):</span>
              <span className="font-mono text-amber-400">Target: A[{targetRow}][{targetCol}]</span>
            </div>

            <div className="overflow-x-auto p-4 bg-stone-950 rounded-xl border border-stone-800 flex justify-center">
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: `repeat(${numCols}, minmax(70px, 1fr))`
                }}
              >
                {Array.from({ length: numRows }).map((_, r) =>
                  Array.from({ length: numCols }).map((_, c) => {
                    const isTarget = r === targetRow && c === targetCol;
                    const rAddr = baseAddr + (r * numCols + c) * elemSize;
                    return (
                      <button
                        key={`${r}-${c}`}
                        onClick={() => { setTargetRow(r); setTargetCol(c); }}
                        className={`p-2.5 rounded-xl border text-center font-mono transition cursor-pointer ${
                          isTarget
                            ? 'bg-emerald-600/40 border-emerald-400 scale-105 shadow-lg shadow-emerald-500/20'
                            : 'bg-stone-900 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        <div className="text-[10px] text-stone-500">[{r}][{c}]</div>
                        <div className={`text-xs font-bold ${isTarget ? 'text-emerald-300' : 'text-stone-300'}`}>
                          A[{r},{c}]
                        </div>
                        <div className="text-[9px] text-stone-500 mt-0.5">0x{rAddr.toString(16)}</div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Formulas and Results Display */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Row Major */}
            <div className="bg-stone-950 p-4 rounded-xl border border-emerald-500/40 space-y-2">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <span className="text-xs font-bold text-emerald-400 font-mono">১. Row-Major Order (সি/পাইথন)</span>
                <span className="text-xs font-mono font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded">
                  Loc: {rowMajorAddr} (0x{rowMajorAddr.toString(16)})
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-mono">
                LOC(A[{targetRow},{targetCol}]) = Base + w * [N * j + k]
              </p>
              <div className="bg-stone-900 p-2.5 rounded font-mono text-xs text-emerald-300 leading-relaxed">
                = {baseAddr} + {elemSize} * [{numCols} * {targetRow} + {targetCol}]<br />
                = {baseAddr} + {elemSize} * [{targetRow * numCols + targetCol}]<br />
                = <strong className="text-white font-bold">{rowMajorAddr} Bytes</strong>
              </div>
            </div>

            {/* Column Major */}
            <div className="bg-stone-950 p-4 rounded-xl border border-teal-500/40 space-y-2">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <span className="text-xs font-bold text-teal-400 font-mono">২. Column-Major Order (ফরট্রান)</span>
                <span className="text-xs font-mono font-bold bg-teal-950 text-teal-300 px-2 py-0.5 rounded">
                  Loc: {colMajorAddr} (0x{colMajorAddr.toString(16)})
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-mono">
                LOC(A[{targetRow},{targetCol}]) = Base + w * [j + M * k]
              </p>
              <div className="bg-stone-900 p-2.5 rounded font-mono text-xs text-teal-300 leading-relaxed">
                = {baseAddr} + {elemSize} * [{targetRow} + {numRows} * {targetCol}]<br />
                = {baseAddr} + {elemSize} * [{targetRow + numRows * targetCol}]<br />
                = <strong className="text-white font-bold">{colMajorAddr} Bytes</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Pointer Dereferencing Tab */}
      {activeTab === 'pointer' && (
        <div className="space-y-6">
          <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <label className="text-xs text-stone-400 block mb-1">
                  মূল ভেরিয়েবল <code className="text-amber-300 font-bold">int x</code> এর মান পরিবর্তন করুন:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={varValue}
                    onChange={(e) => setVarValue(Number(e.target.value))}
                    className="w-28 bg-stone-900 border border-stone-700 p-1.5 rounded font-mono text-amber-300 font-bold text-sm"
                  />
                  <button
                    onClick={() => setVarValue(Math.floor(Math.random() * 90) + 10)}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-xs transition"
                  >
                    র‍্যান্ডম মান
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs text-stone-400 block mb-1">পয়েন্টার এরিথমেটিক অফসেট (ptr + i):</label>
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3].map((offset) => (
                    <button
                      key={offset}
                      onClick={() => setPtrOffset(offset)}
                      className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition ${
                        ptrOffset === offset
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                      }`}
                    >
                      ptr + {offset}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pointer Architectural Visualizer */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Variable Box */}
            <div className="bg-stone-950 p-5 rounded-xl border border-amber-500/40 space-y-3">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <span className="text-xs font-bold text-amber-400 font-mono">1. Original Variable (x)</span>
                <span className="text-xs font-mono text-stone-500">Address: {varAddr}</span>
              </div>
              <div className="bg-stone-900 p-4 rounded-xl text-center border border-stone-800 font-mono">
                <div className="text-xs text-stone-500 mb-1">Value Stored in RAM</div>
                <div className="text-3xl font-bold text-amber-300">{varValue}</div>
                <div className="text-[10px] text-stone-500 mt-2">&x = {varAddr}</div>
              </div>
            </div>

            {/* Pointer Box */}
            <div className="bg-stone-950 p-5 rounded-xl border border-emerald-500/40 space-y-3">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <span className="text-xs font-bold text-emerald-400 font-mono">2. Pointer Variable (*ptr)</span>
                <span className="text-xs font-mono text-stone-500">Address: {ptrAddr}</span>
              </div>
              <div className="bg-stone-900 p-4 rounded-xl text-center border border-stone-800 font-mono">
                <div className="text-xs text-stone-500 mb-1">
                  {ptrOffset === 0 ? 'Pointer holds &x' : `ptr + ${ptrOffset} (Jump +${ptrOffset * 4}B)`}
                </div>
                <div className="text-xl font-bold text-emerald-300">
                  {ptrOffset === 0 ? varAddr : `0x${(0x7ffee4 + ptrOffset * 4).toString(16)}`}
                </div>
                <div className="text-[10px] text-emerald-400 mt-2">
                  *ptr = {ptrOffset === 0 ? varValue : 'Garbage / Next Memory Cell'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. String Workbench Tab */}
      {activeTab === 'string' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs">
            <div>
              <label className="text-stone-400 block mb-1">String 1 (str1):</label>
              <input
                type="text"
                value={str1}
                onChange={(e) => setStr1(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 p-2 rounded font-mono text-emerald-300 font-bold"
              />
            </div>
            <div>
              <label className="text-stone-400 block mb-1">String 2 (str2):</label>
              <input
                type="text"
                value={str2}
                onChange={(e) => setStr2(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 p-2 rounded font-mono text-teal-300 font-bold"
              />
            </div>
          </div>

          {/* Operation Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setStrOp('len')}
              className={`px-3 py-2 rounded-lg text-xs font-mono font-bold transition ${
                strOp === 'len' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300'
              }`}
            >
              strlen(str1)
            </button>
            <button
              onClick={() => setStrOp('cat')}
              className={`px-3 py-2 rounded-lg text-xs font-mono font-bold transition ${
                strOp === 'cat' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300'
              }`}
            >
              strcat(str1, str2)
            </button>
            <button
              onClick={() => setStrOp('rev')}
              className={`px-3 py-2 rounded-lg text-xs font-mono font-bold transition ${
                strOp === 'rev' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300'
              }`}
            >
              strrev(str1)
            </button>
            <button
              onClick={() => setStrOp('cmp')}
              className={`px-3 py-2 rounded-lg text-xs font-mono font-bold transition ${
                strOp === 'cmp' ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-800 text-stone-300'
              }`}
            >
              strcmp(str1, str2)
            </button>
          </div>

          {/* String Memory Cell Layout */}
          <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3">
            <div className="text-xs text-stone-400 font-mono">
              Memory Representation (1 Byte Per Character + Null Terminator):
            </div>

            <div className="flex flex-wrap gap-2">
              {strResult.chars.map((ch, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-center font-mono min-w-[50px] ${
                    ch === '\\0'
                      ? 'bg-rose-950/60 border-rose-600 text-rose-300'
                      : 'bg-stone-900 border-emerald-500/40 text-emerald-300'
                  }`}
                >
                  <div className="text-[9px] text-stone-500">[{idx}]</div>
                  <div className="text-base font-bold">{ch}</div>
                  <div className="text-[8px] text-stone-500 mt-1">
                    {ch === '\\0' ? 'ASCII 0' : `0x${ch.charCodeAt(0).toString(16)}`}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-stone-900 p-3 rounded-lg text-xs font-mono text-emerald-300 border border-stone-800 mt-3">
              <strong className="text-white">ফলাফল: </strong> {strResult.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
