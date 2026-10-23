import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Menu, X, ArrowUpRight, Sun, Moon, Globe, ChevronDown, Check, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { Theme, Language } from '../types';
import { SUPPORTED_LANGUAGES, changeLanguageWithGoogleTranslate, getCurrentLanguageCode, LanguageOption } from '../utils/googleTranslate';

interface NavbarProps {
  onOpenOrder: (initialService?: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  lang,
  setLang,
  theme,
  setTheme,
}) => {
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
    { href: '#comparison', label: 'Agency vs Regular' },
    { href: '#process', label: 'Process' },
    { href: '#pricing', label: 'Services & Pricing' },
    { href: '#fanpages', label: 'Fanpages & BM' },
    { href: '#policy', label: 'Policy' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
          ? 'bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/80 shadow-md dark:shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top micro banner */}
      <div className="hidden lg:block bg-slate-100/90 dark:bg-gradient-to-r dark:from-[#ff7a00]/10 dark:via-[#111b3e] dark:to-[#ff7a00]/10 border-b border-slate-200 dark:border-slate-800/50 py-1 text-xs text-slate-700 dark:text-slate-300 transition-colors notranslate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium">
              24/7 Facebook Agency Operations Active • Account & Fanpage Handover in 10 Minutes • 0% VAT
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff7a00] flex items-center gap-1 transition-colors"
            >
              <Send className="w-3 h-3 text-[#ff7a00]" />
              <span>Channel: {CONTACT_INFO.telegramChannelUser}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
              <span>WhatsApp: {CONTACT_INFO.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-3 group notranslate">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#e65c00] flex items-center justify-center shadow-lg shadow-[#ff7a00]/30 group-hover:scale-105 transition-transform flex-shrink-0">
            <span className="font-extrabold text-white text-lg tracking-tighter">G2</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-[#0B0F19]" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
              G2 <span className="text-[#ff7a00]">AGENCY</span>
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
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
              className="text-sm font-semibold text-slate-600 hover:text-[#ff7a00] dark:text-slate-300 dark:hover:text-[#ff7a00] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons, Google Translate Menu & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105 shadow-sm"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Google Translate Language Dropdown Menu */}
          <div className="relative notranslate" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-label="Select translation language"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span className="text-sm">{selectedLanguage.flag}</span>
              <span>{selectedLanguage.code.toUpperCase()}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-slate-700 shadow-2xl py-2 z-50 animate-fadeIn">
                <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Google Translate API</span>
                  <span className="text-[10px] text-[#ff7a00] font-semibold">Auto-Translate</span>
                </div>

                <div className="max-h-80 overflow-y-auto py-1">
                  {/* Primary Language */}
                  <div className="px-3 pt-1.5 pb-1 text-[10px] font-extrabold uppercase text-[#ff7a00] tracking-wider">
                    Primary / Gốc
                  </div>
                  {SUPPORTED_LANGUAGES.filter((l) => l.code === 'en').map((item) => (
                    <button
                      key={item.code}
                      onClick={() => handleSelectLanguage(item)}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                        currentLangCode === item.code
                          ? 'bg-[#ff7a00]/10 text-[#ff7a00] font-bold'
                          : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{item.flag}</span>
                        <div>
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-[10px] text-slate-400">{item.nativeName}</div>
                        </div>
                      </div>
                      {currentLangCode === item.code && <Check className="w-4 h-4 text-[#ff7a00]" />}
                    </button>
                  ))}

                  {/* European Languages */}
                  <div className="px-3 pt-2.5 pb-1 text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 tracking-wider border-t border-slate-100 dark:border-slate-800/80 mt-1">
                    Europe / Châu Âu
                  </div>
                  {SUPPORTED_LANGUAGES.filter((l) => l.region === 'Europe').map((item) => (
                    <button
                      key={item.code}
                      onClick={() => handleSelectLanguage(item)}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                        currentLangCode === item.code
                          ? 'bg-[#ff7a00]/10 text-[#ff7a00] font-bold'
                          : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{item.flag}</span>
                        <div>
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-[10px] text-slate-400">{item.nativeName}</div>
                        </div>
                      </div>
                      {currentLangCode === item.code && <Check className="w-4 h-4 text-[#ff7a00]" />}
                    </button>
                  ))}

                  {/* Asian & Auto-Translate Languages */}
                  <div className="px-3 pt-2.5 pb-1 text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 tracking-wider border-t border-slate-100 dark:border-slate-800/80 mt-1">
                    Asia & Auto-Translate
                  </div>
                  {SUPPORTED_LANGUAGES.filter((l) => l.region === 'Asia' || l.region === 'Auto Translate').map((item) => (
                    <button
                      key={item.code}
                      onClick={() => handleSelectLanguage(item)}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                        currentLangCode === item.code
                          ? 'bg-[#ff7a00]/10 text-[#ff7a00] font-bold'
                          : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{item.flag}</span>
                        <div>
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-[10px] text-slate-400">{item.nativeName}</div>
                        </div>
                      </div>
                      {currentLangCode === item.code && <Check className="w-4 h-4 text-[#ff7a00]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Telegram Quick Contact */}
          <a
            href={CONTACT_INFO.telegramDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#229ED9] border border-[#229ED9]/30 px-3.5 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 notranslate"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>

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
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Language Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Language selection"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1 text-xs font-bold notranslate"
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
        <div className="xl:hidden bg-white/98 dark:bg-[#0B0F19]/98 border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          {/* Mobile Google Translate Language Selector Grid */}
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 notranslate">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-between">
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
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
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

          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#ff7a00] py-2 px-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800/50"
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
            <div className="flex gap-2">
              <a
                href={CONTACT_INFO.telegramDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#229ED9]/15 text-[#229ED9] border border-[#229ED9]/40 text-center font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Telegram
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 text-center font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
