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
