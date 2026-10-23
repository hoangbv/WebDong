import React from 'react';
import { CheckCircle2, ShieldAlert, Cpu, CreditCard, PlayCircle, Clock, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessProps {
  onOpenOrder: () => void;
  lang: 'en' | 'vi';
}

export const ProcessTimeline: React.FC<ProcessProps> = ({ onOpenOrder, lang }) => {
  const stepIcons = [
    <PlayCircle className="w-6 h-6 text-[#ff7a00]" />,
    <Cpu className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    <CreditCard className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  ];

  return (
    <section id="process" className="py-20 bg-slate-100/60 dark:bg-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#ff7a00] text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            Our 3-Step Onboarding Process
          </h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-white dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 inline-block shadow-sm">
            We provide everything to run ads: <strong className="text-slate-900 dark:text-white">VPS / AdsPower (clean proxy)</strong>, strong profiles, strong ad accounts for running ads, available credit cards, and pages if needed. <strong className="text-[#ff7a00]">You only focus on performance.</strong>
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white dark:bg-slate-900/80 p-8 border border-slate-200 dark:border-slate-800 hover:border-[#ff7a00]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm dark:shadow-none hover:shadow-2xl hover:shadow-[#ff7a00]/10 flex flex-col justify-between"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black text-slate-300 dark:text-slate-700 group-hover:text-[#ff7a00] transition-colors">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700/80 shadow-sm">
                  {stepIcons[idx]}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span>{item.title}</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Phase {idx + 1}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Guaranteed ✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Verification Note from original text */}
        <div className="mt-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-amber-700 dark:text-amber-300 uppercase tracking-wide">
                Important Security Note
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Campaigns are checked first for both sides. You can verify our accounts beforehand to avoid impersonation scams. We never ask for sensitive credentials outside official Telegram / WhatsApp channels.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenOrder}
            className="flex-shrink-0 px-6 py-3 bg-[#ff7a00] hover:bg-[#ff8800] text-white font-bold text-xs rounded-xl shadow-lg shadow-[#ff7a00]/30 transition-all flex items-center gap-2"
          >
            <span>Start Test Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
