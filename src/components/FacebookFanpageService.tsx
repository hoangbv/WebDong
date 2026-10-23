import React from 'react';
import { Flag, CheckCircle2, ArrowRight } from 'lucide-react';
import { FACEBOOK_INFRASTRUCTURE_BENEFITS } from '../data/content';

interface FacebookFanpageServiceProps {
  onOpenOrder: (service: string) => void;
  lang: 'en' | 'vi';
}

export const FacebookFanpageService: React.FC<FacebookFanpageServiceProps> = ({
  onOpenOrder,
  lang,
}) => {
  return (
    <section id="fanpages" className="py-20 bg-slate-100/60 dark:bg-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#ff7a00] text-xs font-bold uppercase tracking-wider mb-3">
            <Flag className="w-3.5 h-3.5" />
            <span>Facebook Ecosystem & Assets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            Resilient Fanpages & Agency BM Infrastructure
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
            {lang === 'en'
              ? 'Scale your Facebook campaigns without fear of sudden page bans or checkpoint bottlenecks. G2 Agency provides aged, pre-warmed Fanpages, verified Business Managers, and pre-configured VPS environments.'
              : 'Tăng tốc chiến dịch Facebook không lo checkpoint hay hạn chế Fanpage. G2 Agency cung cấp Fanpage kháng trâu, BM Agency Nolimit và môi trường VPS/AdsPower chuẩn sạch.'}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACEBOOK_INFRASTRUCTURE_BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-slate-900/70 p-6 border border-slate-200 dark:border-slate-800 hover:border-[#ff7a00]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-[#ff7a00]/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ff7a00]/10 border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Infrastructure Asset 0{idx + 1}</span>
                <span className="text-[#ff7a00]">Included Free ✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout Bar */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-50/80 via-white to-amber-50/60 dark:from-[#111b3e] dark:via-slate-900 dark:to-[#1e1530] p-6 sm:p-8 border border-amber-300 dark:border-[#ff7a00]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md dark:shadow-xl transition-colors">
          <div className="space-y-1 max-w-2xl text-center sm:text-left">
            <span className="text-xs uppercase font-extrabold text-[#ff7a00] tracking-wider block">
              All-In-One Facebook Assets Included
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              When you rent an agency account with G2, we provide aged Fanpages, verified pixels, and clean proxy environments in VPS/AdsPower at no extra cost.
            </p>
          </div>

          <button
            onClick={() => onOpenOrder('Facebook Agency + Fanpage Package')}
            className="flex-shrink-0 px-6 py-3.5 bg-gradient-to-r from-[#ff7a00] to-[#e65c00] hover:from-[#ff8800] hover:to-[#ff6a00] text-white font-extrabold text-xs rounded-xl shadow-lg shadow-[#ff7a00]/30 transition-all flex items-center gap-2"
          >
            <span>Get Facebook Account & Fanpage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
