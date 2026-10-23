import React from 'react';
import { ShieldCheck, RotateCcw, Lock, Zap, Headphones, Percent, CheckCircle2, Award } from 'lucide-react';
import { CORE_FEATURES } from '../data/content';

interface CoreFeaturesProps {
  lang: 'en' | 'vi';
}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({ lang }) => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#ff7a00]" />,
    RotateCcw: <RotateCcw className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    Lock: <Lock className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    Headphones: <Headphones className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    Percent: <Percent className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
  };

  return (
    <section className="py-16 bg-slate-100/70 dark:bg-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#ff7a00] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Why Top Affiliates Trust G2 Agency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            Built for High-Velocity Advertising
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base transition-colors">
            {lang === 'en'
              ? 'Stop dealing with random ad bans, spending caps, and lost funds. G2 Agency delivers proven enterprise accounts backed by contractual SLA.'
              : 'Chấm dứt nỗi lo tài khoản bị khoá, giới hạn chi tiêu và kẹt vốn. G2 Agency cung cấp tài khoản Agency ổn định với cam kết SLA rõ ràng.'}
          </p>
        </div>

        {/* 6 Key Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_FEATURES.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white dark:bg-slate-900/70 p-6 border border-slate-200 dark:border-slate-800 hover:border-[#ff7a00]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-[#ff7a00]/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700/80 mb-5 group-hover:scale-110 transition-transform shadow-sm">
                  {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6 text-[#ff7a00]" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#ff7a00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                <span>Standard Feature</span>
                <span className="text-[#ff7a00]">Included ✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner on Trading Niches & Experience */}
        <div className="mt-12 rounded-2xl bg-slate-900 dark:bg-gradient-to-r dark:from-[#111b3e] dark:via-slate-900 dark:to-[#111b3e] p-6 sm:p-8 border border-slate-800 shadow-xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-1">
              <span className="text-xs uppercase font-extrabold text-[#ff7a00] tracking-wider block">Experienced Team</span>
              <p className="text-sm text-slate-300">
                We operate 24/7 and provide FACEBOOK AGENT accounts with big budget.
              </p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6 space-y-1">
              <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-wider block">24/7 Customer Service</span>
              <p className="text-sm text-slate-300">
                Support for Black Hat, White Hat, Grey Hat, Crypto, NFT, Gambling.
              </p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6 space-y-1">
              <span className="text-xs uppercase font-extrabold text-blue-400 tracking-wider block">All Trading Niches</span>
              <p className="text-sm text-slate-300">
                9+ years in marketing and advertising with solutions for ad account crashes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
