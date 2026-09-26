import React, { useState } from 'react';
import { TrendingUp, Cpu, Play, RotateCcw, Zap, Info, BarChart2, Layers, Shuffle, CheckCircle } from 'lucide-react';

export const ComplexityVisualizer: React.FC = () => {
  const [inputSize, setInputSize] = useState<number>(16);
  const [activeStrategy, setActiveStrategy] = useState<'all' | 'linear' | 'binary' | 'nested' | 'recursive'>('all');
  const [simulationRunning, setSimulationRunning] = useState<boolean>(false);
  const [simSteps, setSimSteps] = useState<{ name: string; count: number; formula: string; color: string; desc: string }[]>([]);

  // Calculate complexities for inputSize
  const n = inputSize;
  const o1 = 1;
  const oLogN = Math.round(Math.log2(n) * 10) / 10;
  const oN = n;
  const oNLogN = Math.round(n * Math.log2(n) * 10) / 10;
  const oNSq = n * n;
  const o2N = n <= 30 ? Math.pow(2, n) : Infinity;

  const runSimulation = () => {
    setSimulationRunning(true);
    const steps = [
      {
        name: 'O(1) - Constant Time',
        count: 1,
        formula: '1 Step',
        color: 'text-emerald-400 border-emerald-500 bg-emerald-950/40',
        desc: 'নির্দিষ্ট মেমরি সেল বা অ্যারে ইনডেক্সে এক পদক্ষেপে সরাসরি অ্যাক্সেস (e.g. A[5], Stack Push)'
      },
      {
        name: 'O(log n) - Logarithmic Time',
        count: Math.ceil(Math.log2(n)),
        formula: `ceil(log2(${n})) = ${Math.ceil(Math.log2(n))} Steps`,
        color: 'text-teal-400 border-teal-500 bg-teal-950/40',
        desc: 'বাইনারি সার্চ বা ব্যালান্সড বাইনারি সার্চ ট্রি (প্রতি ধাপে সার্চ স্পেস অর্ধেক হয়)'
      },
      {
        name: 'O(n) - Linear Time',
        count: n,
        formula: `${n} Steps`,
        color: 'text-sky-400 border-sky-500 bg-sky-950/40',
        desc: 'লিনিয়ার সার্চ, সাধারণ অ্যারে ট্রাভার্সিং বা একক লুপ'
      },
      {
        name: 'O(n log n) - Linearithmic Time',
        count: Math.round(n * Math.log2(n)),
        formula: `${n} * log2(${n}) ≈ ${Math.round(n * Math.log2(n))} Steps`,
        color: 'text-indigo-400 border-indigo-500 bg-indigo-950/40',
        desc: 'মার্জ সর্ট (Merge Sort), হিপ সর্ট এবং কুইক সর্টের গড় সময়'
      },
      {
        name: 'O(n²) - Quadratic Time',
        count: n * n,
        formula: `${n} * ${n} = ${n * n} Steps`,
        color: 'text-amber-400 border-amber-500 bg-amber-950/40',
        desc: 'বাবল সর্ট, সিলেকশন সর্ট বা দ্বি-মাত্রিক নেস্টেড লুপ (Nested Loops)'
      },
      {
        name: 'O(2ⁿ) - Exponential Time',
        count: n <= 20 ? Math.pow(2, n) : 99999999,
        formula: n <= 20 ? `2^${n} = ${Math.pow(2, n)} Steps` : `2^${n} (অকল্পনীয় বিশাল)`,
        color: 'text-rose-400 border-rose-500 bg-rose-950/40',
        desc: 'টাওয়ার অব হ্যানয় (Tower of Hanoi), ব্রুট-ফোর্স রিকার্সিভ ফিবোনাচ্চি'
      }
    ];

    setSimSteps(steps);
    setTimeout(() => {
      setSimulationRunning(false);
    }, 400);
  };

  return (
    <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-stone-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-teal-500/20 text-teal-400 font-mono text-xs px-2 py-0.5 rounded font-bold border border-teal-500/30">
              ইন্টারঅ্যাক্টিভ অ্যানালাইজার (Topic 2.5)
            </span>
            <span className="text-xs text-stone-400 font-mono">Asymptotic Big-O Growth Simulator</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-teal-400" />
            অ্যালগরিদমের টাইম কমপ্লেক্সিটি ও গ্রোথ রেট সিমুলেটর
          </h3>
        </div>

        <button
          onClick={() => { setInputSize(16); runSimulation(); }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          রিসেট ইনপুট
        </button>
      </div>

      {/* Input Slider & Quick Presets */}
      <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <label className="text-xs text-stone-400 font-semibold block mb-1">
              ইনপুট উপাদান সংখ্যা (Input Size <code className="text-teal-400 font-bold">n = {inputSize}</code>):
            </label>
            <input
              type="range"
              min="2"
              max="64"
              step="2"
              value={inputSize}
              onChange={(e) => setInputSize(Number(e.target.value))}
              className="w-64 sm:w-80 h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500 text-[11px]">প্রিসেট সাইজ:</span>
            {[8, 16, 32, 64].map((preset) => (
              <button
                key={preset}
                onClick={() => setInputSize(preset)}
                className={`px-2.5 py-1 rounded font-mono font-bold text-xs transition ${
                  inputSize === preset
                    ? 'bg-teal-600 text-white'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                n={preset}
              </button>
            ))}
            <button
              onClick={runSimulation}
              className="px-4 py-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold rounded-lg shadow-sm transition flex items-center gap-1 text-xs"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              বিশ্লেষণ রান
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Growth Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* O(1) */}
        <div className="bg-stone-950 p-4 rounded-xl border border-emerald-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-400">O(1)</span>
            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
              সর্বোত্তম (Excellent)
            </span>
          </div>
          <div className="text-2xl font-mono font-bold text-white">1 Step</div>
          <p className="text-xs text-stone-400">ইনপুট {inputSize} হলেও প্রসেসিং সময় অপরিবর্তিত থাকে।</p>
          <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[2%]"></div>
          </div>
        </div>

        {/* O(log n) */}
        <div className="bg-stone-950 p-4 rounded-xl border border-teal-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-teal-400">O(log₂ n)</span>
            <span className="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">
              অসাধারণ (Good)
            </span>
          </div>
          <div className="text-2xl font-mono font-bold text-teal-300">
            {Math.ceil(oLogN)} Steps
          </div>
          <p className="text-xs text-stone-400">
            বাইনারি সার্চে {inputSize} টি উপাদান খুঁজতে সর্বোচ্চ {Math.ceil(oLogN)} বার তুলনা করতে হয়।
          </p>
          <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-teal-500 h-full"
              style={{ width: `${Math.min(100, (Math.ceil(oLogN) / (inputSize * inputSize)) * 100 + 5)}%` }}
            ></div>
          </div>
        </div>

        {/* O(n) */}
        <div className="bg-stone-950 p-4 rounded-xl border border-sky-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-sky-400">O(n)</span>
            <span className="text-[10px] bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">
              স্বাভাবিক (Fair)
            </span>
          </div>
          <div className="text-2xl font-mono font-bold text-sky-300">{oN} Steps</div>
          <p className="text-xs text-stone-400">
            লিনিয়ার সার্চ বা সিঙ্গেল লুপে {inputSize} টি উপাদানের জন্য {inputSize} টি ধাপ লাগে।
          </p>
          <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-sky-500 h-full"
              style={{ width: `${Math.min(100, (oN / (inputSize * inputSize)) * 100 + 10)}%` }}
            ></div>
          </div>
        </div>

        {/* O(n log n) */}
        <div className="bg-stone-950 p-4 rounded-xl border border-indigo-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-indigo-400">O(n log₂ n)</span>
            <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
              গ্রহণযোগ্য (Acceptable)
            </span>
          </div>
          <div className="text-2xl font-mono font-bold text-indigo-300">
            {Math.round(oNLogN)} Steps
          </div>
          <p className="text-xs text-stone-400">মার্জ সর্ট বা কুইক সর্টের কার্যকর তুলনার সংখ্যা।</p>
          <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-500 h-full"
              style={{ width: `${Math.min(100, (oNLogN / (inputSize * inputSize)) * 100 + 15)}%` }}
            ></div>
          </div>
        </div>

        {/* O(n²) */}
        <div className="bg-stone-950 p-4 rounded-xl border border-amber-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-400">O(n²)</span>
            <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">
              ধীরগতির (Slow)
            </span>
          </div>
          <div className="text-2xl font-mono font-bold text-amber-300">{oNSq} Steps</div>
          <p className="text-xs text-stone-400">
            বাবল সর্ট বা নেস্টেড লুপে {inputSize} উপাদানে মোট {oNSq} বার এক্সিকিউশন হয়।
          </p>
          <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full w-[80%]"></div>
          </div>
        </div>

        {/* O(2ⁿ) */}
        <div className="bg-stone-950 p-4 rounded-xl border border-rose-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-rose-400">O(2ⁿ)</span>
            <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800">
              ভয়াবহ ধীর (Terrible)
            </span>
          </div>
          <div className="text-2xl font-mono font-bold text-rose-300">
            {inputSize <= 25 ? Math.pow(2, inputSize).toLocaleString() : 'অসীম বিশাল!'}
          </div>
          <p className="text-xs text-stone-400">রিকার্সিভ টাওয়ার অব হ্যানয়ে ধাপ সংখ্যা দ্বিগুণ হারে বাড়ে।</p>
          <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-rose-500 h-full w-full"></div>
          </div>
        </div>
      </div>

      {/* Growth Summary Note */}
      <div className="bg-black/90 p-4 rounded-xl border border-stone-800 flex items-start gap-3 font-mono text-xs">
        <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div className="text-stone-300 leading-relaxed">
          <strong className="text-teal-400 font-sans font-bold">অ্যালগরিদমের গ্রোথ রেটের ক্রম (Order of Growth): </strong>
          <span className="text-emerald-300">O(1)</span> &lt;{' '}
          <span className="text-teal-300">O(log n)</span> &lt;{' '}
          <span className="text-sky-300">O(n)</span> &lt;{' '}
          <span className="text-indigo-300">O(n log n)</span> &lt;{' '}
          <span className="text-amber-300">O(n²)</span> &lt;{' '}
          <span className="text-rose-300">O(2ⁿ)</span> &lt;{' '}
          <span className="text-red-500">O(n!)</span>
        </div>
      </div>
    </div>
  );
};
