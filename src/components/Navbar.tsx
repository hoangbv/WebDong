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
  const { contactInfo, announcement, brandName } = content;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
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
    if (item.code === 'en') {
      setLang('en');
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
        {/* Brand Logo Banner */}
        <a href="#overview" className="flex items-center group notranslate">
          <img
            src="/assets/aistudio/banner_b181a63b.png"
            alt={brandName || "Fuji Agency"}
            className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
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
              <div className="absolute right-0 mt-2 w-[540px] lg:w-[680px] max-h-[80vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-3.5 z-50 animate-fadeIn">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 text-[11px] font-bold text-slate-500">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#ff7a00]" />
                    <span className="text-slate-800 uppercase tracking-wider font-extrabold">
                      Language
                    </span>
                  </div>
                  <span className="text-[10px] text-[#ff7a00] font-semibold bg-[#ff7a00]/10 px-2 py-0.5 rounded-full">
                    Google Translate API
                  </span>
                </div>

                {/* Country Grid */}
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
            onClick={() => {
              setMobileLangOpen(!mobileLangOpen);
              setMobileNavOpen(false);
            }}
            aria-label="Language selection"
            className={`px-2.5 py-2 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all notranslate ${
              mobileLangOpen
                ? 'bg-[#ff7a00] text-white border-[#ff7a00] shadow-sm'
                : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
            }`}
          >
            <span className="text-sm">{selectedLanguage.flag}</span>
            <span>{selectedLanguage.code.toUpperCase()}</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${mobileLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Mobile Navigation Hamburger Trigger */}
          <button
            onClick={() => {
              setMobileNavOpen(!mobileNavOpen);
              setMobileLangOpen(false);
            }}
            aria-label="Toggle navigation menu"
            className={`p-2 rounded-xl border transition-all ${
              mobileNavOpen
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
            }`}
          >
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Backdrop for mobile overlays */}
      {(mobileLangOpen || mobileNavOpen) && (
        <div
          className="xl:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-slate-900/30 backdrop-blur-xs z-30"
          onClick={() => {
            setMobileLangOpen(false);
            setMobileNavOpen(false);
          }}
        />
      )}

      {/* 1. Mobile Language Selector Menu (ONLY Language) */}
      {mobileLangOpen && (
        <div className="xl:hidden relative z-40 bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-2xl animate-fadeIn notranslate">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#ff7a00]/10 flex items-center justify-center text-[#ff7a00]">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Language
                </h3>
                <p className="text-[10px] text-slate-500">
                  Current: <span className="font-semibold text-[#ff7a00]">{selectedLanguage.name} ({selectedLanguage.code.toUpperCase()})</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setMobileLangOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close language selector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* All languages grid - Full display with flags & names */}
          <div className="grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto pr-1">
            {SUPPORTED_LANGUAGES.map((item) => {
              const isCurrent = currentLangCode === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => {
                    handleSelectLanguage(item);
                    setMobileLangOpen(false);
                  }}
                  className={`text-left p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                    isCurrent
                      ? 'bg-[#ff7a00] text-white border-[#ff7a00] font-bold shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xl shrink-0">{item.flag}</span>
                    <div className="min-w-0">
                      <div className="font-bold text-xs truncate leading-tight">{item.nativeName}</div>
                      <div className={`text-[10px] truncate leading-tight ${isCurrent ? 'text-white/80' : 'text-slate-500'}`}>
                        {item.name}
                      </div>
                    </div>
                  </div>
                  {isCurrent && <Check className="w-4 h-4 text-white shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Mobile Navigation Menu (ONLY Navigation & Quick Actions) */}
      {mobileNavOpen && (
        <div className="xl:hidden relative z-40 bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Menu / Navigation
            </span>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close navigation menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-2 pb-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className="text-xs font-bold text-slate-700 hover:text-[#ff7a00] py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-100 hover:border-[#ff7a00]/30 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            ))}
          </div>

          {/* Actions: Rent Account & WhatsApp */}
          <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 notranslate">
            <button
              onClick={() => {
                setMobileNavOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#ff7a00] to-[#ff9500] hover:from-[#ff8800] hover:to-[#ffa726] text-white font-extrabold text-sm rounded-xl text-center shadow-lg shadow-[#ff7a00]/30 flex items-center justify-center gap-2 transition-all"
            >
              <span>Rent Account Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileNavOpen(false)}
              className="w-full py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 text-center font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Support ({contactInfo.whatsappNumber})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
