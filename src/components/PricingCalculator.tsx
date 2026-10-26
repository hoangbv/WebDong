import React, { useState } from 'react';
import { DollarSign, Check, Calculator, ArrowRight, Gift, Flame } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface PricingCalculatorProps {
  onOpenOrder: (budget?: string) => void;
  lang: 'en' | 'vi';
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenOrder }) => {
  const { content } = useContent();
  const pricingTiers = content.pricingTiers;
  const thresholdProgram = content.thresholdProgram;
  const fanpageSolutions = content.fanpageSolutions;
  const otherPricing = content.otherPricing;
  const servicesTitle = content.servicesTitle || 'My Services Include';
  const servicesSubtitle =
    content.servicesSubtitle ||
    'We offer competitive pricing for our Facebook advertising services, tailored to your needs. Zero hidden charges, 0% VAT tax, and instant balance refunds.';

  const [activeTab, setActiveTab] = useState<'facebook' | 'fanpages' | 'accounts'>('facebook');
  const [dailyBudget, setDailyBudget] = useState<number>(3500);

  // Dynamic fee calculation
  const calculateFee = (spend: number) => {
    if (spend < 3000) {
      return { rate: 6, feeDaily: spend * 0.06, vatSavedDaily: spend * 0.05 };
    } else if (spend <= 10000) {
      return { rate: 5, feeDaily: spend * 0.05, vatSavedDaily: spend * 0.05 };
    } else {
      return { rate: 4, feeDaily: spend * 0.04, vatSavedDaily: spend * 0.05, isNegotiable: true };
    }
  };

  const currentCalc = calculateFee(dailyBudget);

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-gradient-to-b dark:from-[#0B0F19] dark:via-[#0d1322] dark:to-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Transparent Agency Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            {servicesTitle}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
            {servicesSubtitle}
          </p>

          {/* Pricing Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-1 mt-8 gap-1">
            <button
              onClick={() => setActiveTab('facebook')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'facebook'
                  ? 'bg-[#ff7a00] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Facebook Agency Accounts
            </button>
            <button
              onClick={() => setActiveTab('fanpages')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'fanpages'
                  ? 'bg-[#ff7a00] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Fanpages & Pixels
            </button>
            <button
              onClick={() => setActiveTab('accounts')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'accounts'
                  ? 'bg-[#ff7a00] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Personal vs Invoice Accounts
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'facebook' && (
          <div className="space-y-12">
            {/* 3 Facebook Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-b from-orange-50/50 via-white to-white dark:from-slate-900 dark:via-slate-900/95 dark:to-[#111b3e] border-2 border-[#ff7a00] shadow-xl dark:shadow-2xl dark:shadow-[#ff7a00]/20 scale-105 z-10'
                      : 'bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#ff7a00] to-amber-500 text-white font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                      Most Popular Tier
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">{tier.name}</h3>
                    <p className="text-xs text-[#ff7a00] font-semibold mt-1 uppercase tracking-wide">
                      {tier.spendRange}
                    </p>

                    <div className="my-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                        {tier.rate}
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                        Service fee on daily spend
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                      {tier.description}
                    </p>

                    <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-[#ff7a00] flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => onOpenOrder(tier.spendRange)}
                      className={`w-full py-3 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 ${
                        tier.popular
                          ? 'bg-[#ff7a00] hover:bg-[#ff8800] text-white shadow-lg shadow-[#ff7a00]/30'
                          : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span>Order Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Threshold Cashback Box (4% Fee & $450 Bonus) */}
            <div className="rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-orange-50/50 dark:from-[#111b3e] dark:via-slate-900 dark:to-[#1e1435] border border-amber-300 dark:border-amber-500/40 p-6 sm:p-8 shadow-lg dark:shadow-xl relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7a00]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
                <div className="space-y-3 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Special Threshold Program</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {thresholdProgram.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {thresholdProgram.content}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-xs text-amber-700 dark:text-amber-300 font-semibold">
                    <Gift className="w-4 h-4" />
                    <span>{thresholdProgram.referralNote}</span>
                  </div>
                </div>

                <div className="flex-shrink-0 text-center lg:text-right bg-white dark:bg-slate-950/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold block">Effective Rate</span>
                  <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 block my-1">
                    {thresholdProgram.feeRate || '4% Charge'}
                  </span>
                  <span className="text-[11px] text-amber-700 dark:text-amber-300 font-semibold block mb-4">+ $450 Profit Bonus / $900 Threshold</span>
                  <button
                    onClick={() => onOpenOrder('Facebook Threshold Program 4%')}
                    className="w-full px-5 py-2.5 bg-[#ff7a00] hover:bg-[#ff8800] text-white font-extrabold rounded-xl text-xs shadow-md transition-all"
                  >
                    Apply for Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fanpages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fanpageSolutions.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900/80 p-8 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">{item.title}</h3>
                    <span className="text-xs bg-[#ff7a00]/15 text-[#ff7a00] font-bold px-3 py-1 rounded-full border border-[#ff7a00]/30">
                      {item.rate}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300 mb-6">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onOpenOrder(item.title)}
                  className="w-full py-3 bg-[#ff7a00] hover:bg-[#ff8800] text-white font-bold rounded-xl text-xs shadow-md"
                >
                  Request {item.title}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'accounts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPricing.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900/80 p-8 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex flex-col justify-between transition-colors"
              >
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                    FOR {item.title}
                  </h3>
                  <div className="my-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-4xl font-black text-[#ff7a00]">{item.rate}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">Direct account service rate</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold bg-amber-50 dark:bg-amber-500/10 p-3 rounded-lg border border-amber-200 dark:border-amber-500/20">
                    In addition, when customers use the service and refer friends, they will receive a discount for both customers and friends. Fees will be reduced if customers spend a lot.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onOpenOrder(item.title)}
                    className="w-full py-3 bg-slate-100 hover:bg-[#ff7a00] hover:text-white dark:bg-slate-800 dark:hover:bg-[#ff7a00] text-slate-800 dark:text-white font-bold rounded-xl text-xs transition-colors border border-slate-200 dark:border-slate-700"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Live Budget Calculator Widget */}
        <div className="mt-16 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-8 shadow-xl dark:shadow-2xl transition-colors">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#ff7a00] uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Interactive Facebook Fee & Tax Savings Calculator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white transition-colors">
                Simulate Your Facebook Ad Spend & Savings
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors">
                Slide to estimate your daily Facebook ad spend and preview your agency service fee and tax savings with Fuji Agency:
              </p>

              {/* Slider */}
              <div className="pt-4 space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-600 dark:text-slate-400">Facebook Daily Spend:</span>
                  <span className="text-2xl font-black text-[#ff7a00]">${dailyBudget.toLocaleString()}/day</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={25000}
                  step={500}
                  value={dailyBudget}
                  onChange={(e) => setDailyBudget(Number(e.target.value))}
                  className="w-full accent-[#ff7a00] h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>$1,000/day</span>
                  <span>$10,000/day</span>
                  <span>$25,000+/day</span>
                </div>
              </div>
            </div>

            {/* Calculated Breakdown Card */}
            <div className="w-full lg:w-1/2 bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 space-y-4 transition-colors">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block uppercase font-semibold">Service Fee Rate</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    {currentCalc.rate}% {currentCalc.isNegotiable ? '(VIP)' : 'Charge'}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    {currentCalc.isNegotiable ? 'Negotiable custom rate' : 'Standard agency rate'}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block uppercase font-semibold">Est. Daily Service Fee</span>
                  <span className="text-2xl font-black text-[#ff7a00]">
                    ${Math.round(currentCalc.feeDaily).toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Transparent billing</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block uppercase font-semibold">0% VAT Surcharge</span>
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">0% VAT</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">No hidden deductions</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block uppercase font-semibold">Monthly VAT Saved (~5%)</span>
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    +${Math.round(currentCalc.vatSavedDaily * 30).toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Net extra profit retained</span>
                </div>
              </div>

              <button
                onClick={() => onOpenOrder(`Facebook Daily $${dailyBudget.toLocaleString()}`)}
                className="w-full py-3.5 bg-gradient-to-r from-[#ff7a00] to-[#e65c00] hover:from-[#ff8800] hover:to-[#ff6a00] text-white font-extrabold rounded-xl text-xs shadow-lg shadow-[#ff7a00]/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Order Facebook Account with ${dailyBudget.toLocaleString()}/Day</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
