/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ContentProvider } from './context/ContentContext';
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
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OrderModal } from './components/OrderModal';
import { AdminModal } from './components/AdminModal';
import { Language } from './types';

function MainApp() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [lang, setLang] = useState<Language>('en');

  // Enforce default white theme (light mode)
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    try {
      localStorage.setItem('fuji_theme', 'light');
    } catch {
      // ignore
    }
  }, []);

  const handleOpenOrder = (service?: string) => {
    setSelectedService(service);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ff7a00] selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navbar
        onOpenOrder={handleOpenOrder}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Services, Transparent Pricing Matrix & Live Calculator (My Services Include) */}
        <PricingCalculator onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Core Promises & 6+ Years Ad Ops Background (Built for High-Velocity Advertising) */}
        <CoreFeatures lang={lang} />

        {/* Agency Accounts vs Regular Accounts In-Depth Comparison */}
        <Comparison onOpenOrder={handleOpenOrder} lang={lang} />

        {/* 3-Step Process & Scam Protection Notice */}
        <ProcessTimeline onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Facebook Fanpage, Pixels & Agency BM Infrastructure */}
        <FacebookFanpageService onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Cooperation Policy & Account Level Setup */}
        <CooperationPolicy onOpenOrder={handleOpenOrder} lang={lang} />

        {/* Accepted Payment Methods */}
        <PaymentMethods />

        {/* Frequently Asked Questions */}
        <FAQ lang={lang} />
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

      {/* Live Admin Content Management Modal */}
      <AdminModal />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <MainApp />
    </ContentProvider>
  );
}
