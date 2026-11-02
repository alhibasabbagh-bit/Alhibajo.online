export type Language = 'ar' | 'en';
export type Theme = 'dark' | 'light';
export type PageId = 'home' | 'services' | 'competitor-tool' | 'iptv' | 'about' | 'calculator' | 'contact' | 'case-studies';

export interface ServiceItem {
  id: string;
  icon: string;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  featuresAr: string[];
  featuresEn: string[];
  deliverablesAr: string[];
  deliverablesEn: string[];
  metrics: {
    labelAr: string;
    labelEn: string;
    value: string;
  };
  technologies: string[];
  seoDescriptionAr: string;
  seoDescriptionEn: string;
  keywordsAr: string[];
  keywordsEn: string[];
}

export interface LocalCompetitor {
  name: string;
  rating: number;
  reviewsCount: number;
  marketShare: string;
  keyAdvantage: { ar: string; en: string };
  googleMapsOptimized: boolean;
}

export interface BusinessAuditReport {
  businessName: string;
  location: string;
  link: string;
  overallHealthScore: number;
  googleMapsScore: number;
  seoVisibilityScore: number;
  conversionScore: number;
  topCompetitors: LocalCompetitor[];
  strengths: { ar: string; en: string }[];
  weaknesses: { ar: string; en: string }[];
  expertRecommendations: {
    pillarAr: string;
    pillarEn: string;
    actionAr: string;
    actionEn: string;
    impactAr: string;
    impactEn: string;
  }[];
}

export interface CompetitorReport {
  competitorName: string;
  competitorUrl: string;
  industry: string;
  overallScore: number;
  seoScore: number;
  adsActivityScore: number;
  uxSpeedScore: number;
  socialScore: number;
  strengths: { ar: string; en: string }[];
  weaknesses: { ar: string; en: string }[];
  marketGaps: { ar: string; en: string }[];
  recommendedStrategy: { ar: string; en: string }[];
  estimatedMonthlyVisits: string;
  activeAdPlatforms: string[];
  topKeywords: string[];
}

export interface IptvPlan {
  id: string;
  nameAr: string;
  nameEn: string;
  durationAr: string;
  durationEn: string;
  priceJOD: number;
  priceUSD: number;
  originalPriceJOD?: number;
  originalPriceUSD?: number;
  popular?: boolean;
  isSpecialHydraOffer?: boolean;
  featuresAr: string[];
  featuresEn: string[];
  devices: number;
}

export interface CaseStudy {
  id: string;
  category: 'marketing' | 'development' | 'branding' | 'all';
  titleAr: string;
  titleEn: string;
  clientAr: string;
  clientEn: string;
  industryAr: string;
  industryEn: string;
  resultMetric: string;
  resultLabelAr: string;
  resultLabelEn: string;
  summaryAr: string;
  summaryEn: string;
  tags: string[];
  seoDescriptionAr: string;
  seoDescriptionEn: string;
  keywordsAr: string[];
  keywordsEn: string[];
}

export interface Testimonial {
  id: string;
  nameAr: string;
  nameEn: string;
  companyAr: string;
  companyEn: string;
  roleAr: string;
  roleEn: string;
  avatarText: string;
  quoteAr: string;
  quoteEn: string;
  rating: number;
  serviceAr: string;
  serviceEn: string;
}
