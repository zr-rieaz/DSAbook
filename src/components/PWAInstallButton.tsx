import React, { useState } from 'react';
import { Download, CheckCircle, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState<boolean>(false);

  // If already installed as PWA or running in standalone mode, hide
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const result = await install();
      if (!result) {
        setShowGuideModal(true);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white border border-emerald-500 shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
        title="অ্যাপ ফোনে ইন্সটল করুন (Install PWA App)"
        aria-label="Install App"
      >
        <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        <span className="hidden sm:inline text-xs font-bold">ইন্সটল</span>
      </button>

      {/* Guide Modal if browser needs manual Add to Home Screen / Install */}
      {showGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                <h3 className="text-base font-bold text-stone-900 dark:text-zinc-100">
                  মোবাইলে অ্যাপ ইনস্টল করুন
                </h3>
              </div>
              <button
                onClick={() => setShowGuideModal(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-zinc-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-700 dark:text-zinc-300">
              {isIOS ? (
                <>
                  <p className="font-semibold text-stone-900 dark:text-zinc-100">
                    iPhone বা iPad (Safari) থেকে ইনস্টল করার নিয়ম:
                  </p>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1 text-stone-600 dark:text-zinc-400">
                    <li>Safari ব্রাউজারের নিচের <strong>Share</strong> (শেয়ার) বাটনে চাপ দিন।</li>
                    <li>মেনুটি স্ক্রল করে <strong>Add to Home Screen</strong> এ চাপ দিন।</li>
                    <li>উপরে <strong>Add</strong> বাটনে ট্যাপ করলেই হোমস্ক্রিনে অ্যাপ চলে আসবে।</li>
                  </ol>
                </>
              ) : (
                <>
                  <p className="font-semibold text-stone-900 dark:text-zinc-100">
                    Chrome বা Brave ব্রাউজার থেকে ইনস্টল করার নিয়ম:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-1 text-stone-600 dark:text-zinc-400">
                    <li className="leading-relaxed">
                      ব্রাউজারের উপরের ডানপাশের <strong>৩-ডট (⋮) মেনু</strong> বাটনে চাপ দিন।
                    </li>
                    <li className="leading-relaxed">
                      মেনু থেকে <strong>"Install app"</strong> অথবা <strong>"Add to Home screen"</strong> নির্বাচন করুন।
                    </li>
                    <li className="leading-relaxed">
                      পপআপ আসলে <strong>Install</strong> বা <strong>Add</strong> চাপুন। কয়েক সেকেন্ডে আপনার ফোনে অ্যাপ ইনস্টল হয়ে যাবে।
                    </li>
                  </ol>
                  <div className="bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/50 text-[11px] text-amber-800 dark:text-amber-300">
                    💡 <strong>টিপস:</strong> নতুন আইকন ও ফাইল আপডেট পেতে ব্রাউজারে পেজটি একবার রিফ্রেশ দিন বা ক্যাশ ক্লিয়ার করুন।
                  </div>
                </>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowGuideModal(false)}
                className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition shadow-xs"
              >
                বুঝেছি, ধন্যবাদ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
