import React from 'react';
import { Monitor, CreditCard, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { COOPERATION_STEPS } from '../data/content';

interface CooperationPolicyProps {
  onOpenOrder: () => void;
  lang: 'en' | 'vi';
}

export const CooperationPolicy: React.FC<CooperationPolicyProps> = ({ onOpenOrder, lang }) => {
  const stepIcons = [
    <Monitor className="w-6 h-6 text-[#ff7a00]" />,
    <CreditCard className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    <Clock className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    <MessageSquare className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
  ];

  return (
    <section id="policy" className="py-20 bg-slate-50 dark:bg-gradient-to-b dark:from-[#0B0F19] dark:via-[#0d1322] dark:to-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Guaranteed Security & Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            Cooperation Policy & Account Level
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
            Our strict 4-stage operational framework guarantees zero downtime and lightning-fast campaign deployment:
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COOPERATION_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white dark:bg-slate-900/80 p-6 border border-slate-200 dark:border-slate-800 hover:border-[#ff7a00]/40 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-black text-sm flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Stage {idx + 1}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Verified ✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenOrder}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#ff7a00] to-[#e65c00] hover:from-[#ff8800] hover:to-[#ff6a00] text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-xl shadow-[#ff7a00]/25 transition-all hover:scale-105"
          >
            <span>Start Cooperation Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
