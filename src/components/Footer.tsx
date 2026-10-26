import React from 'react';
import { Lock, MapPin } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface FooterProps {
  onOpenOrder?: () => void;
  lang?: 'en' | 'vi';
}

export const Footer: React.FC<FooterProps> = () => {
  const { content, setIsAdminOpen } = useContent();
  const { brandName } = content;
  const address = content.contactInfo.address || '〒542-0076 Japan, Osaka, Chuo Ward, Namba, 5 Chome 1−60 Namba SkyO 26F';

  return (
    <footer className="bg-[#070A11] border-t border-slate-800/80 py-8 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-[#ff7a00] shrink-0" />
            <span>{address}</span>
          </div>

          {/* Admin Portal Entry Trigger */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className="flex items-center gap-1 text-slate-600 hover:text-[#ff7a00] transition-colors p-1 rounded hover:bg-slate-900/60 notranslate"
            title="Mở Bảng Quản Trị Website (Ctrl+Shift+A)"
          >
            <Lock className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
