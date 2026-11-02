import React from 'react';
import { useApp } from '../context/AppContext';
import { Target, Eye, ShieldCheck, Zap, Award, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, openConsultation } = useApp();

  const values = [
    {
      icon: Target,
      titleAr: 'التركيز على العائد المالي الفعلي',
      titleEn: 'Measurable Financial ROI',
      descAr: 'لا نكتفي بالمشاهدات الشكلية، بل نركز في كل حملة وكود برمجي على زيادة المبيعات وخفض تكلفة اكتساب العميل.',
      descEn: 'We bypass vanity metrics to engineer quantifiable revenue generation, qualified inbound sales, and bottom-line efficiency.',
    },
    {
      icon: Zap,
      titleAr: 'السرعة الفائقة والتقنيات الحديثة',
      titleEn: 'Velocity & Modern Architecture',
      descAr: 'نعتمد أحدث أطر العمل العالمية (Next.js, React, Node.js) لضمان سرعات قياسية وأمان لا يقبل التهاون.',
      descEn: 'Building exclusively with modern high-concurrency toolchains ensuring lightning performance and military-grade resilience.',
    },
    {
      icon: ShieldCheck,
      titleAr: 'الشفافية الكاملة والالتزام',
      titleEn: 'Radical Transparency & SLA',
      descAr: 'تقارير دورية واضحة بدون تعقيد، عقود موثقة، والتزام دقيق بمواعيد التسليم والمواصفات المتفق عليها.',
      descEn: 'Clear data dashboards, transparent ad spends, punctilious milestone delivery, and formal SLA guarantees.',
    },
    {
      icon: Users,
      titleAr: 'شراكة نمو حقيقية مستمرة',
      titleEn: 'Long-Term Growth Partnership',
      descAr: 'نعتبر أنفسنا الذراع التقني والتسويقي لشركتك، نقدم النصيحة الصادقة والتطوير المستمر لأعمالك.',
      descEn: 'We operate as your dedicated external CTO and CMO, providing proactive consultation as your scale grows.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Identity */}
          <div className="lg:col-span-6 text-start">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
              <span>{lang === 'ar' ? 'من نحن' : 'About Al-Hiba'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Marketing & Programming'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              {lang === 'ar' ? (
                <>
                  رواد الحلول الرقمية والتسويقية المتكاملة في{' '}
                  <span className="text-emerald-500">الشرق الأوسط والعالم</span>
                </>
              ) : (
                <>
                  Pioneering Integrated Digital Growth &{' '}
                  <span className="text-emerald-500">Modern Engineering</span>
                </>
              )}
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {lang === 'ar'
                ? 'تأسست شركة الهبة للتسويق والبرمجة لتكون المحرك الرقمي الشامل للشركات الطموحة ورواد الأعمال. ندمج بين استراتيجيات التسويق الرقمي القائمة على البيانات، والبرمجة المتطورة للمواقع والتطبيقات، بالإضافة إلى تزويد عملائنا بأفضل وأقوى بنية تحتية لسيرفرات البث الرقمي IPTV.'
                : 'Al-Hiba Digital was founded to serve as an authoritative powerhouse for ambitious brands. We unite performance marketing, clean software engineering, and high-uptime streaming solutions into one cohesive agency.'}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm mb-1">
                  <Target className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'رسالتنا' : 'Our Mission'}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {lang === 'ar'
                    ? 'تمكين الشركات من مضاعفة إيراداتها عبر أدوات برمجية وتسويقية متقدمة بدون هدر.'
                    : 'To empower organizations with conversion-focused software and targeted advertising.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm mb-1">
                  <Eye className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {lang === 'ar'
                    ? 'أن نكون الخيار الأول والأكثر موثوقية لكل صاحب عمل يبحث عن نتائج ملموسة وجودة استثنائية.'
                    : 'To be the benchmark for high-velocity software engineering and performance marketing in the MENA region.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => openConsultation({ type: 'consultation' })}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all"
            >
              {lang === 'ar' ? 'تعرف على فريقنا وابدأ مشروعك' : 'Partner with Al-Hiba Today'}
            </button>
          </div>

          {/* Right Column: Values Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {lang === 'ar' ? val.titleAr : val.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {lang === 'ar' ? val.descAr : val.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
