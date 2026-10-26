export type Language = 'en' | 'vi';
export type Theme = 'dark' | 'light';

export interface PricingTier {
  id: string;
  name: string;
  spendRange: string;
  rate: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface ThresholdProgram {
  title: string;
  feeRate: string;
  content: string;
  referralNote: string;
}

export interface FanpageSolution {
  title: string;
  rate: string;
  desc: string;
  features: string[];
}

export interface OtherPricingItem {
  title: string;
  rate: string;
  desc: string;
}

export interface ComparisonPoint {
  title: string;
  regular: string;
  agency: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
