import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CONTACT_INFO,
  FB_PRICING_TIERS,
  FAQ_DATA,
  THRESHOLD_PROGRAM,
  FANPAGE_SOLUTIONS,
  OTHER_PRICING,
} from '../data/content';
import {
  PricingTier,
  FAQItem,
  ThresholdProgram,
  FanpageSolution,
  OtherPricingItem,
} from '../types';

export interface ContactInfoState {
  telegramDirect: string;
  telegramUser: string;
  telegramSupport: string;
  telegramSupportUser: string;
  telegramChannel: string;
  telegramChannelUser: string;
  whatsapp: string;
  whatsappNumber: string;
  instagram: string;
  email: string;
  website: string;
}

export interface AppContentState {
  brandName: string;
  brandShort: string;
  brandTagline: string;
  announcement: string;
  contactInfo: ContactInfoState;
  pricingTiers: PricingTier[];
  faqItems: FAQItem[];
  // My Services Include section configuration
  servicesTitle: string;
  servicesSubtitle: string;
  thresholdProgram: ThresholdProgram;
  fanpageSolutions: FanpageSolution[];
  otherPricing: OtherPricingItem[];
}

const DEFAULT_CONTENT_STATE: AppContentState = {
  brandName: 'Fuji Agency',
  brandShort: 'Fuji',
  brandTagline: 'Rental Facebook Ad Accounts & Fanpage Services',
  announcement: '24/7 Facebook Agency Operations Active • Account & Fanpage Handover in 10 Minutes • 0% VAT',
  contactInfo: { ...CONTACT_INFO },
  pricingTiers: [...FB_PRICING_TIERS],
  faqItems: [...FAQ_DATA],
  servicesTitle: 'My Services Include',
  servicesSubtitle: 'We offer competitive pricing for our Facebook advertising services, tailored to your needs. Zero hidden charges, 0% VAT tax, and instant balance refunds.',
  thresholdProgram: { ...THRESHOLD_PROGRAM },
  fanpageSolutions: [...FANPAGE_SOLUTIONS],
  otherPricing: [...OTHER_PRICING],
};

const STORAGE_KEY = 'fuji_app_content_v4';
const ADMIN_PASS_KEY = 'fuji_admin_passcode';

interface ContentContextValue {
  content: AppContentState;
  updateContent: (newContent: Partial<AppContentState>) => void;
  resetToDefaults: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  adminPassword: string;
  setAdminPassword: (newPass: string) => void;
  exportAsJsonString: () => string;
  importFromJsonString: (jsonStr: string) => boolean;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<AppContentState>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            ...DEFAULT_CONTENT_STATE,
            ...parsed,
            contactInfo: {
              ...DEFAULT_CONTENT_STATE.contactInfo,
              ...(parsed.contactInfo || {}),
            },
            pricingTiers: parsed.pricingTiers || DEFAULT_CONTENT_STATE.pricingTiers,
            faqItems: parsed.faqItems || DEFAULT_CONTENT_STATE.faqItems,
            thresholdProgram: parsed.thresholdProgram || DEFAULT_CONTENT_STATE.thresholdProgram,
            fanpageSolutions: parsed.fanpageSolutions || DEFAULT_CONTENT_STATE.fanpageSolutions,
            otherPricing: parsed.otherPricing || DEFAULT_CONTENT_STATE.otherPricing,
            servicesTitle: parsed.servicesTitle || DEFAULT_CONTENT_STATE.servicesTitle,
            servicesSubtitle: parsed.servicesSubtitle || DEFAULT_CONTENT_STATE.servicesSubtitle,
          };
        }
      } catch (e) {
        console.error('Failed to parse saved content from localStorage', e);
      }
    }
    return DEFAULT_CONTENT_STATE;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminPassword, setAdminPasswordState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(ADMIN_PASS_KEY) || '123456';
      } catch {
        return '123456';
      }
    }
    return '123456';
  });

  // Save content to localStorage whenever it changes
  const updateContent = (newContent: Partial<AppContentState>) => {
    setContent((prev) => {
      const updated = {
        ...prev,
        ...newContent,
        contactInfo: {
          ...prev.contactInfo,
          ...(newContent.contactInfo || {}),
        },
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Could not save content to localStorage', e);
      }
      return updated;
    });
  };

  const resetToDefaults = () => {
    setContent(DEFAULT_CONTENT_STATE);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const setAdminPassword = (newPass: string) => {
    setAdminPasswordState(newPass);
    try {
      localStorage.setItem(ADMIN_PASS_KEY, newPass);
    } catch {
      // ignore
    }
  };

  const exportAsJsonString = () => {
    return JSON.stringify(content, null, 2);
  };

  const importFromJsonString = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        updateContent(parsed);
        return true;
      }
    } catch (err) {
      console.error('Invalid JSON import', err);
    }
    return false;
  };

  // Keyboard shortcut Ctrl+Shift+A (or Cmd+Shift+A) & URL check ?admin=1
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen(true);
      }
    };

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('admin') === '1') {
        setIsAdminOpen(true);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        resetToDefaults,
        isAdminOpen,
        setIsAdminOpen,
        adminPassword,
        setAdminPassword,
        exportAsJsonString,
        importFromJsonString,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
