/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreFeatures } from './components/CoreFeatures';
import { Comparison } from './components/Comparison';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PricingCalculator } from './components/PricingCalculator';
import { FacebookFanpageService } from './components/FacebookFanpageService';
import { CooperationPolicy } from './components/CooperationPolicy';
import { PaymentMethods } from './components/PaymentMethods';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OrderModal } from './components/OrderModal';
import { Theme, Language } from './types';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [lang, setLang] = useState<Language>('en');

  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('g2_theme') as Theme;
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  // Sync theme with HTML root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('g2_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const handleOpenOrder = (service?: string) => {
    setSelectedService(service);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F19] dark:text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ff7a00] selection:text-white transition-colors duration-300">
      {/* Navigation with Theme & Language controls */}
      <Navbar
        onOpenOrder={handleOpenOrder}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Core Promises & 9+ Years Ad Ops Background */}
        <CoreFeatures lang={lang} />

        {/* Agency Accounts vs Regular Accounts In-Depth Comparison */}
        <Comparison onOpenOrder={handleOpenOrder} lang={lang} />

        {/* 3-Step Process & Scam Protection Notice */}
        <ProcessTimeline onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Services, Transparent Pricing Matrix & Live Calculator */}
        <PricingCalculator onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Facebook Fanpage, Pixels & Agency BM Infrastructure */}
        <FacebookFanpageService onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Cooperation Policy & Account Level Setup */}
        <CooperationPolicy onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Accepted Payment Methods (Crypto, Wire, Fintech) */}
        <PaymentMethods />

        {/* Frequently Asked Questions */}
        <FAQ lang={lang} />

        {/* Direct Telegram / WhatsApp Channels & Leave a Message Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer onOpenOrder={handleOpenOrder} lang={lang} />

      {/* Sticky Floating Quick Contact & Scroll to Top */}
      <FloatingActions />

      {/* Order & Account Reservation Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        preselectedService={selectedService}
        lang={lang}
      />
    </div>
  );
}
