import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-lg transition-all hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Quick Floating Button */}
      <a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 bg-slate-900 border border-slate-700 text-white text-xs font-semibold px-2.5 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat WhatsApp
        </span>
      </a>

      {/* Telegram Quick Floating Button with Pulse Effect */}
      <a
        href={CONTACT_INFO.telegramDirect}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Telegram"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#229ED9] to-[#0088cc] hover:from-[#2ab2f4] hover:to-[#0099e6] text-white shadow-2xl shadow-[#229ED9]/40 transition-all hover:scale-110 animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7a00] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#ff7a00]"></span>
        </span>
        <Send className="w-7 h-7" />
        <span className="absolute right-16 bg-slate-900 border border-slate-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Telegram 24/7 @G2_agency007
        </span>
      </a>
    </div>
  );
};
