import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { caseStudiesData } from '../data/translations';
import { CaseStudy } from '../types';
import { useSEO } from '../hooks/useSEO';
import { SEOSnippetBadge } from './SEOSnippetBadge';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { lang, openConsultation } = useApp();
  const [filter, setFilter] = useState<'all' | 'marketing' | 'development'>('all');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  const filteredStudies = caseStudiesData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const activeCase = selectedCaseId
    ? caseStudiesData.find((c) => c.id === selectedCaseId)
    : filteredStudies[0];

  // Dynamic SEO metadata for case studies
  useSEO({
    section: 'case-studies',
    autoDetectSection: false,
    title: activeCase
      ? `${lang === 'ar' ? activeCase.titleAr : activeCase.titleEn} | ${
          lang === 'ar' ? 'قصص نجاح الهبة للتسويق والبرمجة' : 'Al-Hiba Case Studies'
        }`
      : `${lang === 'ar' ? 'أعمالنا وقصص النجاح' : 'Our Case Studies'} | ${
          lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital'
        }`,
    description: activeCase
      ? lang === 'ar'
        ? activeCase.seoDescriptionAr
        : activeCase.seoDescriptionEn
      : lang === 'ar'
      ? 'اكتشف قصص نجاح ومشاريع عملاء شركة الهبة للتسويق والبرمجة. نتائج موثقة بنمو مبيعات يصل إلى 380% وتصدر نتائج محركات البحث Google.'
      : 'Explore documented client case studies by Al-Hiba Digital. Verifiable metrics including +380% revenue growth and #1 Google search rankings.',
    keywords: activeCase
      ? lang === 'ar'
        ? activeCase.keywordsAr
        : activeCase.keywordsEn
      : lang === 'ar'
      ? ['قصص نجاح تسويق', 'دراسات حالة شركات', 'نتائج إعلانات جوجل', 'مشاريع برمجة ناجحة']
      : ['marketing case studies', 'client growth benchmarks', 'roi verification', 'web engineering case study'],
    ogType: 'article',
    canonicalUrl: typeof window !== 'undefined' ? `${window.location.origin}/#case-studies` : '',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: lang === 'ar' ? 'قصص نجاح الهبة للتسويق والبرمجة' : 'Al-Hiba Case Studies & Success Stories',
      itemListElement: filteredStudies.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Article',
          headline: lang === 'ar' ? item.titleAr : item.titleEn,
          description: lang === 'ar' ? item.seoDescriptionAr : item.seoDescriptionEn,
          keywords: (lang === 'ar' ? item.keywordsAr : item.keywordsEn).join(', '),
        },
      })),
    },
  });

  return (
    <section id="case-studies" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-start">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
              <span>{lang === 'ar' ? 'سجل الإنجازات' : 'Proof of Impact'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'ar' ? 'أرقام حقيقية ونتائج موثقة' : 'Documented Client Success'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {lang === 'ar'
                ? 'قصص نجاح ومشاريع حققنا فيها نمواً استثنائياً'
                : 'Case Studies: Transformative Outcomes Delivered'}
            </h2>
          </div>

          {/* Filter Tabs (Interactive segmented buttons allowed by skill §1.A) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 self-start md:self-auto">
            <button
              onClick={() => {
                setFilter('all');
                setSelectedCaseId(null);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'جميع المشاريع' : 'All Projects'}
            </button>
            <button
              onClick={() => {
                setFilter('marketing');
                setSelectedCaseId(null);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'marketing'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'التسويق والإعلانات' : 'Marketing & Ads'}
            </button>
            <button
              onClick={() => {
                setFilter('development');
                setSelectedCaseId(null);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'development'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'تطوير الويب والأنظمة' : 'Web & Systems'}
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((item: CaseStudy) => (
            <div
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className={`rounded-2xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer ${
                selectedCaseId === item.id
                  ? 'border-emerald-500 bg-white dark:bg-slate-900 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500'
                  : 'border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 hover:border-emerald-500/50'
              }`}
            >
              <div>
                {/* Quiet metadata line without pills */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span>{lang === 'ar' ? item.industryAr : item.industryEn}</span>
                  <span aria-hidden="true">·</span>
                  <span>{lang === 'ar' ? item.clientAr : item.clientEn}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>

                {/* Primary Metric Highlight Box */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 mb-5 flex items-baseline justify-between">
                  <div>
                    <div className="text-3xl font-extrabold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
                      {item.resultMetric}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {lang === 'ar' ? item.resultLabelAr : item.resultLabelEn}
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 self-center" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {lang === 'ar' ? item.summaryAr : item.summaryEn}
                </p>

                {/* Dynamic Google SEO Snippet & Keywords Preview */}
                <SEOSnippetBadge
                  title={lang === 'ar' ? item.titleAr : item.titleEn}
                  description={lang === 'ar' ? item.seoDescriptionAr : item.seoDescriptionEn}
                  keywords={lang === 'ar' ? item.keywordsAr : item.keywordsEn}
                  slug={item.id}
                  category="case-studies"
                />
              </div>

              {/* Tags & Action */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openConsultation({
                      type: 'consultation',
                      serviceTitle: `استفسار عن دراسة حالة: ${lang === 'ar' ? item.titleAr : item.titleEn}`,
                    });
                  }}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>{lang === 'ar' ? 'طلب مشروع مماثل' : 'Request Similar Project'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
