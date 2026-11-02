import React from 'react';
import { PageId, Language } from '../types';
import { ArrowLeft, ArrowRight, Briefcase, Search, Tv, Calculator, PhoneCall, Info } from 'lucide-react';

interface SectionBottomGatewayProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const SectionBottomGateway: React.FC<SectionBottomGatewayProps> = ({
  current,
  onNavigate,
  lang,
}) => {
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const suggestions = [
    {
      id: 'services' as PageId,
      titleAr: 'تصفح الخدمات والحلول الرقمية',
      titleEn: 'Explore Full Digital Services',
      descAr: 'إعلانات ممولة، برمجة مواقع، سيو، وهوية بصرية',
      descEn: 'Performance ads, web apps, SEO, and corporate branding',
      icon: Briefcase,
    },
    {
      id: 'competitor-tool' as PageId,
      titleAr: 'أداة تشخيص النشاط التجاري والمنافسين',
      titleEn: 'Business & Competitor Audit Tool',
      descAr: 'افحص موقعك وخرائط Google وقارن مع أفضل 3 منافسين',
      descEn: 'Audit Google Maps profile and benchmark 3 local competitors',
      icon: Search,
    },
    {
      id: 'iptv' as PageId,
      titleAr: 'سيرفرات واشتراكات IPTV 4K',
      titleEn: '4K IPTV Streaming Servers',
      descAr: 'باقات سنوية بالدينار الأردني والدولار مع عرض هيدرا VIP',
      descEn: 'Annual high-stability plans in JOD and USD with Hydra VIP',
      icon: Tv,
    },
    {
      id: 'calculator' as PageId,
      titleAr: 'حاسبة التكلفة والجدول الزمني',
      titleEn: 'Project Cost & Timeline Estimator',
      descAr: 'قدّر ميزانيتك والمدة المتوقعة لمشروعك البرمجي أو التسويقي',
      descEn: 'Estimate your development timeline and campaign ad budget',
      icon: Calculator,
    },
    {
      id: 'about' as PageId,
      titleAr: 'من نحن ورؤية شركة الهبة',
      titleEn: 'About Al-Hiba Digital',
      descAr: 'تعرف على قصة تأسيس الشركة وعقود الضمان والشفافية',
      descEn: 'Learn about our engineering philosophy and verified SLA',
      icon: Info,
    },
    {
      id: 'contact' as PageId,
      titleAr: 'اتصل بنا واحجز استشارتك المجانية',
      titleEn: 'Contact Us & Free Consultation',
      descAr: 'تواصل فوري عبر الواتساب أو الهاتف لمناقشة أهدافك',
      descEn: 'Instant WhatsApp or direct phone consultation',
      icon: PhoneCall,
    },
  ].filter((item) => item.id !== current);

  // Take top 3 relevant other pages
  const itemsToShow = suggestions.slice(0, 3);

  return (
    <div className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {lang === 'ar' ? 'تابع استكشاف صفحات الموقع' : 'Continue Exploring Al-Hiba'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {lang === 'ar'
                ? 'انتقل مباشرة لأي صفحة ترغب بها بنقرة واحدة'
                : 'Directly navigate to any other specialized section with one click'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>{lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
            <Arrow className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {itemsToShow.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 hover:border-emerald-500/50 hover:shadow-md transition-all text-start group cursor-pointer flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors truncate">
                      {lang === 'ar' ? item.titleAr : item.titleEn}
                    </span>
                    <Arrow className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-[-2px] transition-all shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
