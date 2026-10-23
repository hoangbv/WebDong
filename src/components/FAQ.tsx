import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Send } from 'lucide-react';
import { FAQ_DATA, CONTACT_INFO } from '../data/content';

interface FAQProps {
  lang: 'en' | 'vi';
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#ff7a00] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers & Clarifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            Any questions? Check out the FAQs
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base transition-colors">
            Still have unanswered questions and need to get in touch?
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm dark:shadow-none transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-3">
                    <span className="text-[#ff7a00] font-black">›</span>
                    <span>{item.question}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#ff7a00]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-700 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick reach out box */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-[#111b3e] dark:to-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-md dark:shadow-xl transition-colors">
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Have a specialized requirement?</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Talk directly with our senior ad ops team on Telegram or WhatsApp 24/7.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={CONTACT_INFO.telegramDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#229ED9] hover:bg-[#229ED9]/80 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
