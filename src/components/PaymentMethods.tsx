import React from 'react';
import { Wallet, Landmark, CheckCircle2 } from 'lucide-react';
import { ACCEPTED_PAYMENTS } from '../data/content';

export const PaymentMethods: React.FC = () => {
  return (
    <section className="py-16 bg-slate-100/70 dark:bg-[#0B0F19] border-t border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#ff7a00] text-xs font-bold uppercase tracking-wider mb-2">
            <Wallet className="w-3.5 h-3.5" />
            <span>Secure Transactions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            Payment methods Accepted
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors">
            Fast, multi-currency settlement options with instant balance credit and 100% unspent fund refund guarantees:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ACCEPTED_PAYMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-[#ff7a00]/40 shadow-sm dark:shadow-none transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-[#ff7a00] border border-slate-200 dark:border-slate-700">
                  {item.type === 'Crypto' ? <Wallet className="w-5 h-5" /> : <Landmark className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">{item.note}</span>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
