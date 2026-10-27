import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, Globe, ChevronDown, Check } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { Language } from '../types';
import { SUPPORTED_LANGUAGES, changeLanguageWithGoogleTranslate, getCurrentLanguageCode, LanguageOption } from '../utils/googleTranslate';

interface NavbarProps {
  onOpenOrder: (initialService?: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  theme?: string;
  setTheme?: (theme: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  lang,
  setLang,
}) => {
  const { content } = useContent();
  const { contactInfo, announcement, brandName, brandShort } = content;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState<string>('en');

  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentLangCode(getCurrentLanguageCode());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#pricing', label: 'Services & Pricing' },
    { href: '#comparison', label: 'Agency vs Regular' },
    { href: '#process', label: 'Process' },
    { href: '#fanpages', label: 'Fanpages & BM' },
    { href: '#policy', label: 'Policy' },
    { href: '#faq', label: 'FAQ' },
  ];

  const handleSelectLanguage = (item: LanguageOption) => {
    setCurrentLangCode(item.code);
    setLangDropdownOpen(false);
    if (item.code === 'vi' || item.code === 'en') {
      setLang(item.code as Language);
    }
    changeLanguageWithGoogleTranslate(item.code);
  };

  const selectedLanguage = SUPPORTED_LANGUAGES.find((l) => l.code === currentLangCode) || SUPPORTED_LANGUAGES[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 sm:py-4'
      }`}
    >
      {/* Top micro banner */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200/80 py-1 text-xs text-slate-700 transition-colors notranslate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium">
              {announcement}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 flex items-center gap-1 transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3 text-emerald-500" />
              <span>WhatsApp: {contactInfo.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-3 group notranslate">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#e65c00] flex items-center justify-center shadow-lg shadow-[#ff7a00]/30 group-hover:scale-105 transition-transform flex-shrink-0">
            <span className="font-extrabold text-white text-base sm:text-lg tracking-tighter">{brandShort}</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-slate-900 flex items-center gap-1 transition-colors uppercase">
              {brandName}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
              Facebook Ads & Fanpages
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 hover:text-[#ff7a00] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Google Translate Menu (Theme Toggle removed) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Google Translate Language Dropdown Menu */}
          <div className="relative notranslate" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-label="Select translation language"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span className="text-sm">{selectedLanguage.flag}</span>
              <span>{selectedLanguage.code.toUpperCase()}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu - Expanded PC Grid (No scrollbar) */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[540px] lg:w-[620px] rounded-2xl bg-white border border-slate-200 shadow-2xl p-3.5 z-50 animate-fadeIn">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 text-[11px] font-bold text-slate-500">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#ff7a00]" />
                    <span className="text-slate-800 uppercase tracking-wider font-extrabold">
                      Chọn Ngôn Ngữ / Select Language
                    </span>
                  </div>
                  <span className="text-[10px] text-[#ff7a00] font-semibold bg-[#ff7a00]/10 px-2 py-0.5 rounded-full">
                    Google Translate API
                  </span>
                </div>

                {/* Full Country Grid - All 12 Languages visible simultaneously */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SUPPORTED_LANGUAGES.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => handleSelectLanguage(item)}
                      className={`text-left p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all hover:scale-[1.02] ${
                        currentLangCode === item.code
                          ? 'bg-[#ff7a00]/10 border-[#ff7a00] text-[#ff7a00] font-bold shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xl shrink-0">{item.flag}</span>
                        <div className="min-w-0">
                          <div className="font-bold text-xs truncate leading-tight">{item.nativeName}</div>
                          <div className="text-[10px] text-slate-400 truncate leading-tight">{item.name}</div>
                        </div>
                      </div>
                      {currentLangCode === item.code && <Check className="w-3.5 h-3.5 text-[#ff7a00] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Rent Account Button */}
          <button
            onClick={() => onOpenOrder()}
            className="flex items-center gap-2 bg-gradient-to-r from-[#ff7a00] to-[#ff9500] hover:from-[#ff8800] hover:to-[#ffa726] text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-[#ff7a00]/25 transition-all hover:scale-105 notranslate"
          >
            <span>Rent Account</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 xl:hidden">
          {/* Mobile Language Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Language selection"
            className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1 text-xs font-bold notranslate"
          >
            <span>{selectedLanguage.flag}</span>
            <span>{selectedLanguage.code.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          {/* Mobile Google Translate Language Selector Grid */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 notranslate">
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#ff7a00]" />
                Language (Google Translate API)
              </span>
              <span className="text-[10px] text-[#ff7a00] font-semibold">{selectedLanguage.name}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-48 overflow-y-auto p-1">
              {SUPPORTED_LANGUAGES.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    handleSelectLanguage(item);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium text-left border transition-all ${
                    currentLangCode === item.code
                      ? 'bg-[#ff7a00] text-white border-[#ff7a00] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-base">{item.flag}</span>
                  <div className="truncate">
                    <div className="truncate font-semibold">{item.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-[#ff7a00] py-2 px-2 rounded hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 notranslate">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 bg-[#ff7a00] text-white font-bold rounded-xl text-center shadow-lg shadow-[#ff7a00]/30"
            >
              Rent Account Now
            </button>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-500/15 text-emerald-600 border border-emerald-500/40 text-center font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Support ({contactInfo.whatsappNumber})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
