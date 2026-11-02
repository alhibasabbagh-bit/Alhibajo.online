import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { servicesData } from '../data/translations';
import { ServiceItem } from '../types';
import { useSEO } from '../hooks/useSEO';
import { SEOSnippetBadge } from './SEOSnippetBadge';
import {
  TrendingUp,
  Code2,
  SearchCheck,
  Palette,
  Share2,
  Layers,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Code2,
  SearchCheck,
  Palette,
  Share2,
  Layers,
};

export const ServicesSection: React.FC = () => {
  const { lang, openConsultation } = useApp();
  const [expandedId, setExpandedId] = useState<string | null>('performance-marketing');

  // Currently focused service for dynamic SEO
  const activeService = servicesData.find((s) => s.id === expandedId) || servicesData[0];

  // Dynamically update document meta tags and JSON-LD when viewing services
  useSEO({
    section: 'services',
    autoDetectSection: false,
    title: `${lang === 'ar' ? activeService.titleAr : activeService.titleEn} | ${
      lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital'
    }`,
    description: lang === 'ar' ? activeService.seoDescriptionAr : activeService.seoDescriptionEn,
    keywords: lang === 'ar' ? activeService.keywordsAr : activeService.keywordsEn,
    ogType: 'website',
    canonicalUrl: typeof window !== 'undefined' ? `${window.location.origin}/#services` : '',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: lang === 'ar' ? activeService.titleAr : activeService.titleEn,
      description: lang === 'ar' ? activeService.seoDescriptionAr : activeService.seoDescriptionEn,
      provider: {
        '@type': 'Organization',
        name: lang === 'ar' ? 'شركة الهبة للتسويق والبرمجة' : 'Al-Hiba Marketing & Programming',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://alhibamarketing.com',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-start">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
            <span>{lang === 'ar' ? 'خدماتنا المتخصصة' : 'Our Capabilities'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'ar' ? 'حلول تقنية وتسويقية متكاملة' : 'Engineered for Performance'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {lang === 'ar'
              ? 'خدمات احترافية صُممت لنمو أعمالك وريادة مجالك'
              : 'Precision Services Built to Scale Your Enterprise'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'نجمع بين الخبرة العميقة في إدارة الحملات الإعلانية المربحة وأحدث تقنيات البرمجة وتصميم الهويات لبناء ميزة تنافسية مستدامة لعلامتك التجارية.'
              : 'Merging data-driven marketing campaigns, sub-second web engineering, and brand artistry to create an unbeatable competitive moat for your company.'}
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service: ServiceItem, index: number) => {
            const Icon = iconMap[service.icon] || Code2;
            const isExpanded = expandedId === service.id;
            const editorialIndex = `0${index + 1}.`;

            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-emerald-500/50 bg-white dark:bg-slate-900/90 shadow-xl shadow-emerald-500/5'
                    : 'border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                } p-6`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                      {editorialIndex}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {lang === 'ar' ? service.shortDescAr : service.shortDescEn}
                  </p>

                  {/* Highlight Metric */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/60 mb-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {lang === 'ar' ? service.metrics.labelAr : service.metrics.labelEn}
                    </span>
                    <span className="font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400">
                      {service.metrics.value}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {(lang === 'ar' ? service.featuresAr : service.featuresEn).slice(0, isExpanded ? 4 : 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Details: Deliverables & Tech Stack */}
                  {isExpanded && (
                    <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 animate-in fade-in duration-200">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                          {lang === 'ar' ? 'ما ستحصل عليه (المخرجات):' : 'Deliverables:'}
                        </div>
                        <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                          {(lang === 'ar' ? service.deliverablesAr : service.deliverablesEn).map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                          {lang === 'ar' ? 'التقنيات والأدوات المستخدمة:' : 'Tech & Tool Stack:'}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic SEO Meta Preview Snippet Badge */}
                  <SEOSnippetBadge
                    title={lang === 'ar' ? service.titleAr : service.titleEn}
                    description={lang === 'ar' ? service.seoDescriptionAr : service.seoDescriptionEn}
                    keywords={lang === 'ar' ? service.keywordsAr : service.keywordsEn}
                    slug={service.id}
                    category="services"
                  />
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>
                      {isExpanded
                        ? (lang === 'ar' ? 'إخفاء التفاصيل' : 'Show Less')
                        : (lang === 'ar' ? 'عرض التفاصيل' : 'View Details')}
                    </span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() =>
                      openConsultation({
                        type: 'service',
                        serviceId: service.id,
                        serviceTitle: lang === 'ar' ? service.titleAr : service.titleEn,
                      })
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors whitespace-nowrap active:scale-[0.98]"
                  >
                    <span>{lang === 'ar' ? 'اطلب الخدمة' : 'Request Service'}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
