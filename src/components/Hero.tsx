import React from 'react';
import { ShieldCheck, Zap, ArrowRight, MessageCircle, Clock, Check, Sparkles, TrendingUp } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface HeroProps {
  onOpenOrder: () => void;
  lang: 'en' | 'vi';
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, lang }) => {
  const { content } = useContent();
  const { brandName, contactInfo } = content;
  return (
    <section id="overview" className="relative pt-[70px] sm:pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden transition-colors duration-300">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff7a00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Brief */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Facebook Agency BM & Resilient Fanpage Services</span>
            </div>

            {/* Main Headline from Fuji Agency */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
              Rental Facebook{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] via-[#ff9500] to-amber-500 dark:to-amber-300">
                AD Accounts
              </span>{' '}
              Services
            </h1>

            {/* Core brief & value proposition from source site */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors">
              {lang === 'en' ? (
                <>
                  <strong className="text-slate-900 dark:text-white">{brandName}</strong> specializes in providing a premium advertising format on Facebook. We operate 24/7 and provide <strong className="text-[#ff7a00] dark:text-amber-400">FACEBOOK AGENT</strong> accounts with big budgets. Full support for Black Hat, White Hat, Grey Hat, Crypto, NFT, and Gambling.
                </>
              ) : (
                <>
                  <strong className="text-slate-900 dark:text-white">{brandName}</strong> chuyên cung cấp tài khoản quảng cáo Agency cao cấp trên Facebook. Hoạt động 24/7, cung cấp tài khoản Agency ngân sách lớn không giới hạn chi tiêu. Hỗ trợ đầy đủ Black Hat, White Hat, Grey Hat, Crypto, NFT, Gambling.
                </>
              )}
            </p>

            {/* Key trust bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm transition-colors">
                <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Unlimited Daily Ad Spend</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm transition-colors">
                <Check className="w-4 h-4 text-[#ff7a00]" />
                <span>Zero % VAT Tax</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm transition-colors">
                <Check className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Fix Issues in 30 Mins</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#e65c00] hover:from-[#ff8800] hover:to-[#ff6a00] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#ff7a00]/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>{lang === 'en' ? 'Rent Ad Account Now' : 'Thuê Tài Khoản Ngay'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#comparison"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-800 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white font-bold text-sm sm:text-base border border-slate-300 dark:border-slate-700/80 shadow-sm transition-all text-center"
              >
                {lang === 'en' ? 'Discover More' : 'Tìm Hiểu Thêm'}
              </a>
            </div>

            {/* 6+ years footer quote from original content */}
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff7a00]"></span>
              <span>
                <strong>6+ years</strong> in marketing and advertising with proven solutions for ad account crashes.
              </span>
            </div>
          </div>

          {/* Right Column: High-End Live Interactive Account Card Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-800/80 dark:via-slate-900/90 dark:to-[#0B0F19] p-6 border border-slate-200 dark:border-slate-700/80 shadow-xl dark:shadow-2xl backdrop-blur-xl transition-colors">
              {/* Card top badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#ff7a00]/15 dark:bg-[#ff7a00]/20 border border-[#ff7a00]/30 dark:border-[#ff7a00]/40 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#ff7a00]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>Fuji Agency Meta BM VIP</span>
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold px-1.5 py-0.5 rounded border border-emerald-500/30">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">ID: FUJI-BM-884920491 • Whitelisted</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    100% Health
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">24/7 Monitored</span>
                </div>
              </div>

              {/* Account Specs Grid */}
              <div className="grid grid-cols-2 gap-3 py-4">
                <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-3 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-semibold block">Daily Spend Limit</span>
                  <span className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-1 mt-0.5">
                    Unlimited <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400">No daily caps</span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-3 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-semibold block">VAT Surcharge</span>
                  <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 mt-0.5 block">0% VAT</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Save 100% tax fee</span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-3 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-semibold block">Proxy & Setup</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">VPS / AdsPower</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Clean residential proxy</span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-3 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-semibold block">SLA Fix Time</span>
                  <span className="text-sm font-bold text-[#ff7a00] dark:text-amber-400 mt-0.5 block">&lt; 30 Minutes</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Or instant replacement</span>
                </div>
              </div>

              {/* Supported Niches tags */}
              <div className="pt-2 pb-4">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-semibold block mb-2">
                  Trading Products & Niches Supported:
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">Black Hat (BH)</span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">White Hat (WH)</span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">Grey Hat (GH)</span>
                  <span className="px-2 py-1 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">Crypto & NFT</span>
                  <span className="px-2 py-1 rounded bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">Gambling & Casino</span>
                  <span className="px-2 py-1 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">Weight Loss / Nutra</span>
                </div>
              </div>

              {/* Live Status notification bar */}
              <div className="bg-slate-100 dark:bg-gradient-to-r dark:from-[#111b3e] dark:to-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ff7a00]" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Ready to deliver in:</span>
                </div>
                <span className="font-extrabold text-[#ff7a00] bg-[#ff7a00]/10 px-2.5 py-1 rounded-md border border-[#ff7a00]/30">
                  10 Minutes Max
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Metric Badges Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="bg-white dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-black text-[#ff7a00] block">6+ Years</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Marketing & Advertising</span>
          </div>

          <div className="bg-white dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white block">24/7</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">VIP Closed Group Support</span>
          </div>

          <div className="bg-white dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 block">0% VAT</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Zero Foreign Tax Surcharge</span>
          </div>

          <div className="bg-white dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-black text-[#ff7a00] dark:text-amber-400 block">&lt; 10 Mins</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Account Delivery SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
