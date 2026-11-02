import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Briefcase,
  Search,
  Tv,
  Calculator,
  Info,
  PhoneCall,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export const HomeOverview: React.FC = () => {
  const { lang, navigateTo, openConsultation } = useApp();

  const sections = [
    {
      id: 'services',
      titleAr: 'الخدمات والحلول الرقمية',
      titleEn: 'Digital Marketing & Engineering',
      descAr: 'إدارة حملات Google وMeta الممولة، برمجة المتاجر والمواقع السريعة، تحسين السيو وتصميم الهويات التجارية.',
      descEn: 'High-ROI performance advertising, bespoke React web applications, technical SEO, and corporate visual identities.',
      icon: Briefcase,
      badgeAr: '6 تخصصات متكاملة',
      badgeEn: '6 Core Domains',
      stat: '4.6x ROAS',
      ctaAr: 'عرض صفحة الخدمات كاملة',
      ctaEn: 'Explore Full Services Page',
      accent: 'emerald',
    },
    {
      id: 'competitor-tool',
      titleAr: 'أداة تحليل وتشخيص المنافسين',
      titleEn: 'Competitor & Business Audit Tool',
      descAr: 'افحص نشاطك التجاري محلياً، واكتشف أبرز 3 منافسين في مدينتك، مع تقرير تفصيلي لنقاط القوة والضعف وفرص النمو.',
      descEn: 'Audit your local business profile, uncover your top 3 competitors, and generate actionable strategic growth steps.',
      icon: Search,
      badgeAr: 'فحص فوري مجاني',
      badgeEn: 'Instant Free Scan',
      stat: '1,840+ فحص',
      ctaAr: 'فتح أداة التحليل والتشخيص',
      ctaEn: 'Launch Competitor Audit Tool',
      accent: 'teal',
    },
    {
      id: 'iptv',
      titleAr: 'سيرفرات واشتراكات IPTV 4K',
      titleEn: 'Enterprise 4K IPTV Servers',
      descAr: 'سيرفرات بث فائقة الثبات بتقنية مانع التقطيع Anti-Freeze. أكثر من 18,000 قناة و60,000 فيلم ومسلسل، وعرض هيدرا الحصري (15 شهراً).',
      descEn: 'Ultra-stable H.265 streaming servers with anti-freeze guarantee, 18K+ live channels, 60K+ cinema VOD, and Hydra VIP offers.',
      icon: Tv,
      badgeAr: 'أسعار رسمية بالدينار الأردني',
      badgeEn: 'Official JOD & USD Pricing',
      stat: '99.9% ثبات',
      ctaAr: 'عرض باقات واشتراكات IPTV',
      ctaEn: 'View IPTV Plans & Servers',
      accent: 'emerald',
    },
    {
      id: 'calculator',
      titleAr: 'حاسبة المشاريع والميزانية المتوقعة',
      titleEn: 'Project Cost & ROI Estimator',
      descAr: 'احسب التكلفة التقديرية والجدول الزمني والعائد المتوقع لمشروعك البرمجي أو حملاتك الإعلانية الترويجية.',
      descEn: 'Interactive project estimator providing realistic timelines, development phases, and performance projections.',
      icon: Calculator,
      badgeAr: 'تقدير فوري وتفاعلي',
      badgeEn: 'Instant Interactive Estimate',
      stat: 'شفافية 100%',
      ctaAr: 'فتح حاسبة التكلفة والمدة',
      ctaEn: 'Calculate Project Estimate',
      accent: 'teal',
    },
    {
      id: 'about',
      titleAr: 'من نحن ورؤية شركة الهبة',
      titleEn: 'About Al-Hiba Digital & Vision',
      descAr: 'تعرف على فلسفة العمل، معايير الجودة، وعقود الخدمة الرسمية التي تضمن لك شراكة نمو حقيقية مستدامة.',
      descEn: 'Discover our engineering philosophy, enterprise SLA guarantees, and multi-disciplinary leadership team.',
      icon: Info,
      badgeAr: 'شريك رقمي معتمد',
      badgeEn: 'Certified Digital Partner',
      stat: '+240 مشروع ناجح',
      ctaAr: 'قراءة المزيد عن شركة الهبة',
      ctaEn: 'Learn More About Us',
      accent: 'emerald',
    },
    {
      id: 'contact',
      titleAr: 'تواصل مباشر واستشارة مجانية',
      titleEn: 'Direct Consultation & Contact',
      descAr: 'تواصل مباشرة مع مستشارينا عبر الهاتف أو الواتساب، أو احجز جلستك الاستراتيجية لمناقشة أهدافك فوراً.',
      descEn: 'Connect directly with senior strategists via instant WhatsApp, direct phone, or submit your bespoke RFQ.',
      icon: PhoneCall,
      badgeAr: 'استجابة خلال دقائق',
      badgeEn: 'Sub-hour SLA Response',
      stat: '24/7 متاحون',
      ctaAr: 'الانتقال لصفحة اتصل بنا',
      ctaEn: 'Go to Contact Page',
      accent: 'teal',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-start">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
            <span>{lang === 'ar' ? 'بوابة خدمات شركة الهبة' : 'Al-Hiba Navigation Portal'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'ar' ? 'تصفح أقسام الموقع المستقلة' : 'Dedicated Core Pages'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {lang === 'ar'
              ? 'اختر وجهتك وتصفح صفحات الموقع المستقلة'
              : 'Explore Dedicated Solutions Across Our Ecosystem'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'كل قسم من خدماتنا متاح في صفحة متكاملة مخصصة توفر لك كافة التفاصيل والأسعار والأدوات التفاعلية.'
              : 'Every division is engineered as a standalone, deep-dive destination with complete transparency and interactive tools.'}
          </p>
        </div>

        {/* 6 Gateway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;

            return (
              <div
                key={sec.id}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group text-start"
              >
                <div>
                  {/* Card Top Strip */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {sec.stat}
                    </span>
                  </div>

                  {/* Kicker badge */}
                  <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                    {lang === 'ar' ? sec.badgeAr : sec.badgeEn}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-emerald-500 transition-colors">
                    {lang === 'ar' ? sec.titleAr : sec.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {lang === 'ar' ? sec.descAr : sec.descEn}
                  </p>
                </div>

                {/* Direct Page Navigation Button */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                  <button
                    onClick={() => navigateTo(sec.id as any)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer group-hover:bg-emerald-500 group-hover:text-slate-950"
                  >
                    <span>{lang === 'ar' ? sec.ctaAr : sec.ctaEn}</span>
                    <ArrowUpRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Banner on Home */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-start shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'استشارة استراتيجية مجانية' : 'Complimentary Advisory Session'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {lang === 'ar'
                ? 'هل ترغب في دراسة مخصصة لمشروعك مع خبراء الهبة؟'
                : 'Need a customized analysis of your business with our advisors?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {lang === 'ar'
                ? 'نقدّم لك تقييماً شاملاً لفرص النمو والتسويق الرقمي وتطوير البنية التقنية بدون أي التزام مالي.'
                : 'We evaluate your digital architecture and growth levers with zero contractual obligation.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => openConsultation({ type: 'consultation' })}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              {lang === 'ar' ? 'طلب استشارة الآن' : 'Book Consultation'}
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-700 hover:border-emerald-500/50 bg-slate-900/80 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              {lang === 'ar' ? 'صفحة اتصل بنا' : 'Contact Us'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
