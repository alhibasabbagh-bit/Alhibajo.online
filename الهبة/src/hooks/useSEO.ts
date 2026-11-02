import { useEffect, useState, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { Language } from '../types';

export interface SEOSectionContent {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  keywordsAr: string[];
  keywordsEn: string[];
}

// Comprehensive SEO Registry for all website sections
export const sectionSEORegistry: Record<string, SEOSectionContent> = {
  home: {
    titleAr: 'الهبة للتسويق والبرمجة | الشريك الرقمي الرائد وسيرفرات IPTV 4K',
    titleEn: 'Al-Hiba Digital | Growth Marketing, Web Engineering & 4K IPTV',
    descriptionAr: 'الموقع الرسمي لشركة الهبة للتسويق الرقمي وإدارة الحملات الممولة، برمجة المواقع والمتاجر السريعة، وأقوى سيرفرات IPTV 4K بدون تقطيع.',
    descriptionEn: 'Official portal of Al-Hiba Digital. High-converting paid ad campaigns, bespoke web & mobile development, and ultra-stable 4K IPTV streaming servers.',
    keywordsAr: ['الهبة للتسويق والبرمجة', 'شركة تسويق رقمي', 'برمجة مواقع شركات', 'سيرفرات IPTV', 'إعلانات جوجل وميتا', 'تسويق السعودية والخليج', 'زيادة المبيعات'],
    keywordsEn: ['al-hiba digital', 'digital marketing agency', 'web development company', '4k iptv servers', 'google ads management', 'performance marketing', 'ecommerce agency'],
  },
  services: {
    titleAr: 'خدماتنا الرقمية والبرمجية | الهبة للتسويق والبرمجة',
    titleEn: 'Digital Marketing & Web Services | Al-Hiba Digital',
    descriptionAr: 'استكشف خدمات شركة الهبة: إعلانات الأداء الممولة على Google وMeta، برمجة وتطوير المتاجر والمواقع بـ React، تحسين السيو، وتصميم الهويات البصرية.',
    descriptionEn: 'Discover Al-Hiba solutions: performance marketing, custom Next.js web & ecommerce engineering, advanced technical SEO, and brand identity design.',
    keywordsAr: ['خدمات تسويق إلكتروني', 'تطوير متاجر', 'تحسين محركات البحث SEO', 'تصميم هويات تجارية', 'برمجة أنظمة سحابية', 'إعلانات ممولة', 'إدارة سوشيال ميديا'],
    keywordsEn: ['digital marketing services', 'ecommerce web engineering', 'seo optimization agency', 'branding identity design', 'cloud software systems', 'paid social ads'],
  },
  'competitor-tool': {
    titleAr: 'أداة التحليل والتشخيص الرقمي لمشروعك | الهبة للبرمجة',
    titleEn: 'Business Diagnostic & Local Competitor Audit Tool | Al-Hiba',
    descriptionAr: 'افحص نشاطك التجاري واكتشف أبرز 3 منافسين في مدينتك. تحليل نقاط القوة والضعف، وفحص خرائط Google، وخطة حلول استراتيجية من الهبة للبرمجة.',
    descriptionEn: 'Audit your business and uncover top 3 local competitors. Identify strengths, conversion leaks, and receive tailored solutions from Al-Hiba Programming.',
    keywordsAr: ['تشخيص المشاريع', 'تحليل النشاط التجاري', 'أبرز المنافسين', 'تحسين خرائط جوجل', 'سيو محلي', 'الهبة للبرمجة', 'فحص المتاجر والمحلات'],
    keywordsEn: ['business diagnostic tool', 'local competitor analysis', 'google maps business audit', 'store performance audit', 'al-hiba programming', 'local market benchmark'],
  },
  iptv: {
    titleAr: 'سيرفرات واشتراكات IPTV 4K فائقة الثبات | الهبة',
    titleEn: 'Ultra-Stable 4K IPTV Subscriptions & Edge Servers | Al-Hiba',
    descriptionAr: 'أقوى سيرفرات واشتراكات IPTV بتقنية مانع التقطيع Anti-Freeze. أكثر من 18,000 قناة و60,000 فيلم ومسلسل، بث مباشر لكافة الدوريات الرياضية بدقة 4K.',
    descriptionEn: 'Enterprise-grade 4K IPTV streaming subscriptions powered by Anti-Freeze technology. 18,000+ live sports channels and 60,000+ daily updated cinema VOD.',
    keywordsAr: ['سيرفرات IPTV', 'اشتراك IPTV 4K', 'قنوات رياضية بدون تقطيع', 'سيرفرات مانع التقطيع', 'افضل سيرفر IPTV', 'اشتراك بي ان سبورت', 'قنوات SSC الرياضية'],
    keywordsEn: ['4k iptv subscription', 'anti freeze iptv servers', 'live sports streaming iptv', 'smart tv iptv', 'best iptv service', 'fast iptv activation', 'uhd vod cinema'],
  },
  about: {
    titleAr: 'من نحن | قصة ورؤية شركة الهبة للتسويق والبرمجة',
    titleEn: 'About Us | Al-Hiba Digital Philosophy & Vision',
    descriptionAr: 'تعرف على شركة الهبة للتسويق والبرمجة. شراكة نمو حقيقية، أحدث التقنيات البرمجية، وشفافية كاملة في تحقيق عوائد استثمارية ملموسة.',
    descriptionEn: 'Learn about Al-Hiba Digital. We engineer measurable financial growth, modern high-velocity software, and provide 24/7 dedicated enterprise support.',
    keywordsAr: ['عن شركة الهبة', 'وكالة تسويق معتمدة', 'فريق برمجة محترف', 'شركاء نمو رقمي', 'تسويق رقمي الرياض', 'رؤية الهبة للتسويق'],
    keywordsEn: ['about al-hiba', 'digital marketing experts', 'software engineering agency', 'enterprise growth partners', 'certified marketing consultants', 'agency philosophy'],
  },
  'case-studies': {
    titleAr: 'قصص النجاح وسجل الإنجازات | الهبة للتسويق والبرمجة',
    titleEn: 'Documented Case Studies & Client Success | Al-Hiba Digital',
    descriptionAr: 'شاهد نتائج أعمالنا الحقيقية: مضاعفة مبيعات المتاجر 380%، وتوليد 1,420 عميلاً عقارياً، وتصدر المركز الأول في نتائج Google الطبية.',
    descriptionEn: 'Inspect verified client results: +380% revenue lift for e-commerce, 1,420+ qualified real estate leads, and #1 Google medical rankings.',
    keywordsAr: ['قصص نجاح عملاء', 'دراسات حالة تسويق', 'نتائج حملات إعلانية', 'عائد استثماري ROAS', 'مشاريع برمجة منجزة', 'أرقام نجاح الهبة'],
    keywordsEn: ['client case studies', 'marketing ROI benchmarks', 'verified client growth', 'ecommerce case study', 'real estate lead gen case study', 'seo success stories'],
  },
  calculator: {
    titleAr: 'حاسبة المشاريع والميزانية والعائد الاستثماري | الهبة للبرمجة',
    titleEn: 'Project Cost & ROI Calculator | Al-Hiba Digital',
    descriptionAr: 'احسب تكلفة مشروعك البرمجي أو حملاتك الإعلانية وجدولك الزمني التقديري والعائد المتوقع مع شركة الهبة.',
    descriptionEn: 'Calculate your software development budget, performance ad spend, timeline estimates and expected ROAS with Al-Hiba.',
    keywordsAr: ['حاسبة تكلفة المواقع', 'تقدير ميزانية التسويق', 'تكلفة برمجة متجر', 'حاسبة العائد الاستثماري'],
    keywordsEn: ['website cost calculator', 'digital marketing budget estimator', 'ecommerce development pricing'],
  },
  contact: {
    titleAr: 'اتصل بنا واحجز استشارتك المجانية | الهبة للتسويق والبرمجة',
    titleEn: 'Contact Us & Book Free Strategy Session | Al-Hiba Digital',
    descriptionAr: 'تواصل مع خبراء ومستشاري شركة الهبة للتسويق والبرمجة وسيرفرات IPTV. احجز استشارتك المجانية اليوم عبر الهاتف أو الواتساب المباشر.',
    descriptionEn: 'Connect with Al-Hiba marketing and software advisors. Book your complimentary discovery consultation via phone or instant WhatsApp chat.',
    keywordsAr: ['اتصل بنا', 'حجز استشارة تسويقية', 'رقم واتساب الهبة', 'استشارة برمجة مجانية', 'وكالة تسويق اتصال', 'دعم فني 24/7'],
    keywordsEn: ['contact al-hiba', 'book marketing consultation', 'whatsapp digital agency', 'free tech discovery session', 'hire marketing developers', 'customer support helpline'],
  },
};

export interface UseSEOOptions {
  section?: string;
  lang?: Language;
  title?: string;
  description?: string;
  keywords?: string[];
  ogType?: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, any>;
  autoDetectSection?: boolean;
}

export interface UseSEOResult {
  currentSection: string;
  title: string;
  description: string;
  keywords: string[];
  updateSEO: (options: Partial<UseSEOOptions>) => void;
}

/**
 * Custom React hook 'useSEO'
 * Dynamically updates document.title and adds/updates meta tags for description,
 * keywords, OpenGraph, Twitter cards, canonical link, and JSON-LD structured data
 * based on the current page section, active language, or custom overrides.
 */
export function useSEO(options?: UseSEOOptions): UseSEOResult {
  const appContext = useApp();
  const currentLang = options?.lang || appContext?.lang || 'ar';
  const autoDetect = options?.autoDetectSection !== false;

  const [activeSection, setActiveSection] = useState<string>(
    options?.section || appContext?.currentPage || 'home'
  );
  const [overrideSEO, setOverrideSEO] = useState<Partial<UseSEOOptions> | null>(null);

  // Sync activeSection whenever currentPage or options.section changes
  useEffect(() => {
    if (options?.section) {
      setActiveSection(options.section);
    } else if (appContext?.currentPage) {
      setActiveSection(appContext.currentPage);
    }
  }, [options?.section, appContext?.currentPage]);

  // Section observer to detect which section is currently on screen
  useEffect(() => {
    if (!autoDetect || options?.section) return;

    const sectionIds = ['home', 'services', 'competitor-tool', 'iptv', 'about', 'case-studies', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section with highest intersection ratio
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topEntry = visibleEntries[0];
          if (topEntry.target.id) {
            setActiveSection(topEntry.target.id);
          }
        }
      },
      {
        threshold: [0.15, 0.4, 0.7],
        rootMargin: '-80px 0px -20% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [autoDetect, options?.section]);

  // Compute resolved SEO data
  const sectionContent = sectionSEORegistry[activeSection] || sectionSEORegistry.home;

  const title =
    overrideSEO?.title ||
    options?.title ||
    (currentLang === 'ar' ? sectionContent.titleAr : sectionContent.titleEn);

  const description =
    overrideSEO?.description ||
    options?.description ||
    (currentLang === 'ar' ? sectionContent.descriptionAr : sectionContent.descriptionEn);

  const keywords =
    overrideSEO?.keywords ||
    options?.keywords ||
    (currentLang === 'ar' ? sectionContent.keywordsAr : sectionContent.keywordsEn);

  const ogType = overrideSEO?.ogType || options?.ogType || 'website';
  const canonicalUrl =
    overrideSEO?.canonicalUrl ||
    options?.canonicalUrl ||
    (typeof window !== 'undefined'
      ? `${window.location.origin}${activeSection === 'home' ? '' : `#${activeSection}`}`
      : '');

  // DOM update function
  const applyTagsToDOM = useCallback(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to add or replace meta tags
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // 3. Meta Keywords
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // 4. OpenGraph & Twitter Titles and Types
    if (title) {
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'og:locale', currentLang === 'ar' ? 'ar_SA' : 'en_US');
    setMetaTag('property', 'og:site_name', currentLang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital');

    // 5. Canonical URL
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
      setMetaTag('property', 'og:url', canonicalUrl);
    }

    // 6. Schema.org JSON-LD structured data
    const jsonLd =
      overrideSEO?.jsonLd ||
      options?.jsonLd || {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: currentLang === 'ar' ? 'شركة الهبة للتسويق والبرمجة' : 'Al-Hiba Marketing & Programming',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://alhibamarketing.com',
        description: description,
        logo: typeof window !== 'undefined' ? `${window.location.origin}/alhiba-logo.png` : 'https://alhibamarketing.com/alhiba-logo.png',
        inLanguage: currentLang,
        keywords: keywords.join(', '),
      };

    let script = document.getElementById('alhiba-schema-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'alhiba-schema-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd, null, 2);
  }, [title, description, keywords, ogType, canonicalUrl, currentLang, overrideSEO?.jsonLd, options?.jsonLd]);

  // Run DOM updates whenever inputs change
  useEffect(() => {
    applyTagsToDOM();
  }, [applyTagsToDOM]);

  const updateSEO = useCallback((newOptions: Partial<UseSEOOptions>) => {
    setOverrideSEO((prev) => ({ ...prev, ...newOptions }));
  }, []);

  return {
    currentSection: activeSection,
    title,
    description,
    keywords,
    updateSEO,
  };
}

export default useSEO;
