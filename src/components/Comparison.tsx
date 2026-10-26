import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, XCircle, Scale } from 'lucide-react';
import { COMPARISON_DATA } from '../data/content';

interface ComparisonProps {
  onOpenOrder: () => void;
  lang: 'en' | 'vi';
}

export const Comparison: React.FC<ComparisonProps> = ({ onOpenOrder, lang }) => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <section id="comparison" className="py-20 bg-slate-50 dark:bg-gradient-to-b dark:from-[#0B0F19] dark:via-[#0e1424] dark:to-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Comparison Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            Comparison Between Agency Accounts and Regular Accounts
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed transition-colors">
            {lang === 'en'
              ? 'Discover why serious media buyers refuse to run on standard personal accounts and migrate to Fuji Agency infrastructure.'
              : 'Khám phá sự khác biệt vượt trội giữa tài khoản quảng cáo thông thường và tài khoản Agency cao cấp tại Fuji Agency.'}
          </p>

          {/* View Toggle */}
          <div className="inline-flex items-center bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-1 mt-6">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'cards'
                  ? 'bg-[#ff7a00] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Side-by-Side Deep Dive
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'table'
                  ? 'bg-[#ff7a00] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Feature by Feature Table
            </button>
          </div>
        </div>

        {viewMode === 'cards' ? (
          /* Side by Side 2-Column Cards */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Regular Accounts Card */}
            <div className="rounded-2xl bg-white dark:bg-slate-950/80 border border-rose-200 dark:border-rose-950/60 p-6 sm:p-8 flex flex-col justify-between shadow-lg dark:shadow-xl transition-colors">
              <div>
                <div className="flex items-center gap-3 pb-5 border-b border-rose-100 dark:border-rose-950/60 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-300">
                      Regular Ad Accounts
                    </h3>
                    <span className="text-xs text-rose-500 dark:text-rose-400 font-semibold">
                      The Hidden Limitations That Hold You Back
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed bg-rose-50/50 dark:bg-slate-900/60 p-4 rounded-xl border border-rose-100 dark:border-slate-800">
                  At first glance, regular ad accounts may seem like a simple and affordable choice. However, once you start scaling, their built-in limitations quickly become major obstacles to performance and profitability. Here’s what you’re actually dealing with:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Strict Spending Limits</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Daily ad spend is capped, making it difficult to scale campaigns efficiently.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Campaign & Ad Group Restrictions</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">You’re limited in how many campaigns and ad sets you can run at the same time.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Restricted Payment Options</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Only basic payment methods are supported, often limited to credit or bank cards.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Challenging Ad Review Process</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Ads are reviewed more strictly, leading to delays, rejections, and lost momentum.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Minimal Automation & Optimization</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Advanced campaign optimization tools are often unavailable or limited.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Higher Risk of Account Suspension</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Frequent lockouts and unexpected campaign rejections disrupt performance.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">No Balance Withdrawal</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Unused ad balance cannot be withdrawn, locking up your cash flow.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Threshold & “Hold” Issues</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Payment thresholds and sudden holds occur frequently, stopping campaigns without warning.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Higher Banking Fees</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Additional bank charges and currency conversions slowly eat into your profits.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">No Direct Support from Fuji Agency</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-400">You’re on your own when issues arise—no priority support, no fast resolutions.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 text-center font-semibold">
                High Risk • Limited Scaling • Painful Maintenance
              </div>
            </div>

            {/* Fuji Agency Accounts Card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-orange-50/40 via-white to-white dark:from-slate-900 dark:via-slate-900/95 dark:to-[#111b3e] border-2 border-[#ff7a00] p-6 sm:p-8 flex flex-col justify-between shadow-xl dark:shadow-2xl dark:shadow-[#ff7a00]/15 transition-colors">
              {/* Highlight ribbon */}
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#ff7a00] to-amber-500 text-white font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Recommended for Scaling
              </div>

              <div>
                <div className="flex items-center gap-3 pb-5 border-b border-slate-200 dark:border-slate-800 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#ff7a00]/15 dark:bg-[#ff7a00]/20 border border-[#ff7a00]/30 dark:border-[#ff7a00]/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#ff7a00]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                      Fuji Agency Ad Accounts
                    </h3>
                    <span className="text-xs text-[#ff7a00] font-bold">
                      The Smart Choice for Serious Advertisers
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-800 dark:text-slate-200 mb-6 leading-relaxed bg-[#ff7a00]/10 p-4 rounded-xl border border-[#ff7a00]/30 font-medium">
                  If you’re ready to scale without limits, Fuji Agency Ad Accounts are built to give you full control, stability, and performance—everything regular ad accounts simply can’t offer. Here’s what sets Fuji Agency Ad Accounts apart:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Unlimited Daily Ad Spend</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Scale freely without daily budget caps slowing down your growth.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Unlimited Campaigns & Ad Groups</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Launch, test, and expand as many campaigns as you need—no restrictions.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Direct Support from Fuji Agency</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Get fast, hands-on assistance from experts who understand both technical and strategic challenges.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Priority in Facebook’s Review System</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Your ads are reviewed faster and prioritized, reducing delays and unnecessary rejections.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">No Foreign Transaction Fees</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Lower costs mean higher profit margins on every campaign.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Priority Facebook Support</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Enjoy faster resolutions and fewer interruptions when issues arise.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">High Stability & Risk Protection</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Agency-level infrastructure minimizes shutdowns and ensures smoother operations.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Exclusive Refund & Cashback Policies</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Recover costs and maximize ROI with Fuji Agency–only benefits. 100% refund of unspent cash.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Flexible Fund Transfers</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Easily move balances between accounts if an account is restricted or blocked.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-sm text-slate-900 dark:text-white block">Restriction-Friendly Testing Environment</strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Set up and test ads smoothly—even in sensitive or restricted verticals.</span>
                    </div>
                  </li>
                </ul>

                {/* Final Quote Callout */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-[#ff7a00]/15 dark:from-[#ff7a00]/20 dark:to-amber-500/10 border border-[#ff7a00]/30 dark:border-[#ff7a00]/40">
                  <span className="font-extrabold text-sm text-slate-900 dark:text-white block mb-1">
                    Why Choose Fuji Agency Ad Accounts?
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-200">
                    Because scaling ads shouldn’t come with uncertainty. With Fuji, you get power, protection, and priority—all in one place.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={onOpenOrder}
                  className="w-full py-3.5 bg-gradient-to-r from-[#ff7a00] to-[#e65c00] hover:from-[#ff8800] hover:to-[#ff6a00] text-white font-extrabold rounded-xl shadow-lg shadow-[#ff7a00]/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
                >
                  <span>Upgrade to Fuji Agency Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Table View */
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xl transition-colors">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/80">
                  <th className="py-4 px-6 font-bold text-slate-700 dark:text-slate-300 w-1/4">Feature / Metric</th>
                  <th className="py-4 px-6 font-bold text-rose-600 dark:text-rose-400 w-3/8">Regular Ad Accounts</th>
                  <th className="py-4 px-6 font-bold text-[#ff7a00] w-3/8">Fuji Agency Ad Accounts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {COMPARISON_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">{item.title}</td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold mt-0.5">✕</span>
                        <span>{item.regular}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200 bg-[#ff7a00]/5 font-medium">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-500 dark:text-emerald-400 font-bold mt-0.5">✓</span>
                        <span>{item.agency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
