import React from 'react';
import { Send, MessageCircle, Instagram, Shield, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface FooterProps {
  onOpenOrder: () => void;
  lang: 'en' | 'vi';
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrder, lang }) => {
  return (
    <footer className="bg-[#070A11] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#e65c00] flex items-center justify-center shadow-lg shadow-[#ff7a00]/30 font-extrabold text-white text-lg">
                G2
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                G2 <span className="text-[#ff7a00]">AGENCY</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              G2 Agency specializes in providing a premium advertising format on Facebook. We operate 24/7 and provide FACEBOOK AGENT accounts with big budget. 9+ years in marketing and advertising with solutions for ad account crashes.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONTACT_INFO.telegramDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#229ED9] text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-purple-600 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#overview" className="hover:text-[#ff7a00] transition-colors">Home</a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-[#ff7a00] transition-colors">Agency vs Regular Accounts</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#ff7a00] transition-colors">Process (How It Works)</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#ff7a00] transition-colors">Services & Pricing</a>
              </li>
              <li>
                <a href="#fanpages" className="hover:text-[#ff7a00] transition-colors">Fanpages & BM Infrastructure</a>
              </li>
              <li>
                <a href="#policy" className="hover:text-[#ff7a00] transition-colors">Cooperation Policy</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ff7a00] transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ff7a00] transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Supported Verticals */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Supported Niches
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>White Hat (E-Commerce & Apps)</li>
              <li>Black Hat (BH Media)</li>
              <li>Grey Hat (GH Scale)</li>
              <li>Crypto & Web3 Token Ads</li>
              <li>NFT & Blockchain Projects</li>
              <li>Casino & Online Gaming</li>
              <li>Weight Loss & Dietary Nutra</li>
            </ul>
          </div>

          {/* Official Contacts */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Official Telegram
            </h5>
            <div className="space-y-3 text-xs">
              <a
                href={CONTACT_INFO.telegramDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#229ED9] transition-colors"
              >
                <span className="text-[10px] text-slate-500 block">Direct Manager:</span>
                <span className="font-bold text-white">{CONTACT_INFO.telegramUser}</span>
              </a>
              <a
                href={CONTACT_INFO.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#ff7a00] transition-colors"
              >
                <span className="text-[10px] text-slate-500 block">Official Channel:</span>
                <span className="font-bold text-[#ff7a00]">{CONTACT_INFO.telegramChannelUser}</span>
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 transition-colors"
              >
                <span className="text-[10px] text-slate-500 block">WhatsApp:</span>
                <span className="font-bold text-emerald-400">{CONTACT_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} G2 Agency. All rights reserved. Zero % VAT • 24/7 Operations.</p>
          <div className="flex items-center gap-6">
            <span>VPS & AdsPower Environments</span>
            <span>Clean Residential Proxies</span>
            <span>100% Unspent Balance Refund</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
