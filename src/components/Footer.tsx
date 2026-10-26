import React from 'react';
import { Lock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface FooterProps {
  onOpenOrder?: () => void;
  lang?: 'en' | 'vi';
}

export const Footer: React.FC<FooterProps> = () => {
  const { content, setIsAdminOpen } = useContent();
  const { brandName, brandShort } = content;

  return (
    <footer className="bg-[#070A11] border-t border-slate-800/80 pt-12 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#e65c00] flex items-center justify-center shadow-lg shadow-[#ff7a00]/30 font-extrabold text-white text-base">
              {brandShort}
            </div>
            <span className="font-black text-xl tracking-tight text-white uppercase">
              {brandName}
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
            {brandName} specializes in providing a premium advertising format on Facebook. We operate 24/7 and provide FACEBOOK AGENT accounts with big budget. 6+ years in marketing and advertising with solutions for ad account crashes.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {brandName}. All rights reserved. Zero % VAT • 24/7 Operations.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden md:inline">VPS & Clean Residential Proxies</span>
            <span className="hidden md:inline">100% Refundable</span>
            {/* Admin Portal Entry Trigger */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="flex items-center gap-1.5 text-slate-500 hover:text-[#ff7a00] transition-colors px-2 py-1 rounded bg-slate-900/60 border border-slate-800/80 hover:border-[#ff7a00]/40 notranslate"
              title="Mở Bảng Quản Trị Website (Ctrl+Shift+A)"
            >
              <Lock className="w-3 h-3 text-[#ff7a00]" />
              <span className="text-[11px] font-medium">Admin Portal</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
