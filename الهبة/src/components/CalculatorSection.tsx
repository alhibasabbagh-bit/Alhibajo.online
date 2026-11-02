import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calculator, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const CalculatorSection: React.FC = () => {
  const { lang, openConsultation } = useApp();

  const [serviceType, setServiceType] = useState<'marketing' | 'store' | 'website' | 'system'>('marketing');
  const [scale, setScale] = useState<'startup' | 'growth' | 'enterprise'>('growth');
  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(2500);

  // Estimations calculation
  const calculations = {
    marketing: {
      startup: { timelineAr: '7 - 10 أيام للإطلاق', timelineEn: '7 - 10 Days to Launch', roas: '3.5x - 4.2x', estLeads: '150 - 300' },
      growth: { timelineAr: '10 - 14 يوماً مع اختبار A/B', timelineEn: '10 - 14 Days with A/B', roas: '4.2x - 5.5x', estLeads: '450 - 900' },
      enterprise: { timelineAr: '14 - 21 يوماً استراتيجية شاملة', timelineEn: '14 - 21 Days Full Funnel', roas: '5.0x - 6.8x', estLeads: '1,200+' },
    },
    store: {
      startup: { timelineAr: '12 - 16 يوماً', timelineEn: '12 - 16 Days', roas: '3.8x', estLeads: 'متجر متكامل بوابات دفع' },
      growth: { timelineAr: '18 - 24 يوماً', timelineEn: '18 - 24 Days', roas: '4.8x', estLeads: 'تكامل شحن ومخزون وسيو' },
      enterprise: { timelineAr: '30 - 45 يوماً', timelineEn: '30 - 45 Days', roas: '5.4x', estLeads: 'نظام تجارة متعدد الفروع' },
    },
    website: {
      startup: { timelineAr: '8 - 12 يوماً', timelineEn: '8 - 12 Days', roas: 'موقع تعريفي فائق السرعة', estLeads: 'هوية بصرية + سيو' },
      growth: { timelineAr: '14 - 18 يوماً', timelineEn: '14 - 18 Days', roas: 'موقع احترافي تفاعلي', estLeads: 'لوحة تحكم + لغتين' },
      enterprise: { timelineAr: '21 - 30 يوماً', timelineEn: '21 - 30 Days', roas: 'بوابة شركات متطورة', estLeads: 'أنظمة حجز + ربط APIs' },
    },
    system: {
      startup: { timelineAr: '20 - 30 يوماً', timelineEn: '20 - 30 Days', roas: 'أتمتة العمليات الأساسية', estLeads: 'نظام CRM لإدارة العملاء' },
      growth: { timelineAr: '30 - 45 يوماً', timelineEn: '30 - 45 Days', roas: 'توفير 50% من الوقت', estLeads: 'لوحة مبيعات وربط واتساب' },
      enterprise: { timelineAr: '45 - 60 يوماً', timelineEn: '45 - 60 Days', roas: 'أتمتة شاملة لجميع الفروع', estLeads: 'ERP مخصص مع صلاحيات' },
    },
  }[serviceType][scale];

  return (
    <section className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-start">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
            <Calculator className="w-4 h-4" />
            <span>{lang === 'ar' ? 'حاسبة المشاريع والميزانيات' : 'Interactive Project & ROI Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {lang === 'ar'
              ? 'قدّر ميزانيتك والمدة المتوقعة لمشروعك'
              : 'Calculate Your Custom Timeline & Performance Projections'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'اختر نوع الخدمة وحجم مشروعك لنقدم لك تقديراً استرشادياً واضحاً للجدول الزمني والعوائد المتوقعة قبل بدء التنفيذ.'
              : 'Select your service domain and current business stage to view transparent timeline and conversion estimates.'}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6 text-start">
              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {lang === 'ar' ? '1. ما هي الخدمة الأساسية المطلوبة؟' : '1. Desired Core Service'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'marketing', ar: 'إعلانات ممولة', en: 'Paid Ads' },
                    { id: 'store', ar: 'متجر إلكتروني', en: 'E-Store' },
                    { id: 'website', ar: 'موقع شركة', en: 'Company Site' },
                    { id: 'system', ar: 'نظام مخصص', en: 'Custom System' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setServiceType(item.id as any)}
                      className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                        serviceType === item.id
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {lang === 'ar' ? item.ar : item.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Business Scale Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {lang === 'ar' ? '2. ما هو حجم ونطاق عملك الحالي؟' : '2. Business Maturity Stage'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'startup', ar: 'ناشئ / جديد', en: 'Startup' },
                    { id: 'growth', ar: 'متوسط ومتنامي', en: 'Growth Stage' },
                    { id: 'enterprise', ar: 'مؤسسي كبير', en: 'Enterprise' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setScale(st.id as any)}
                      className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                        scale === st.id
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {lang === 'ar' ? st.ar : st.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* If Marketing: Ad Spend Slider */}
              {serviceType === 'marketing' && (
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    <span>{lang === 'ar' ? 'الميزانية الإعلانية الشهرية المقترحة:' : 'Target Monthly Ad Budget:'}</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                      ${monthlyAdSpend.toLocaleString()} USD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="500"
                    value={monthlyAdSpend}
                    onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                    <span>$500</span>
                    <span>$5,000</span>
                    <span>$10,000</span>
                    <span>$20,000+</span>
                  </div>
                </div>
              )}
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 text-white border border-emerald-500/30 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'ar' ? 'التقدير الأولي للمشروع' : 'Preliminary Project Scope'}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'ar' ? 'المدة الزمنية المتوقعة للإنجاز:' : 'Estimated Delivery Timeline:'}</span>
                  </div>
                  <div className="font-bold text-base text-white">
                    {lang === 'ar' ? calculations.timelineAr : calculations.timelineEn}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'ar' ? 'المؤشر المستهدف المتوقع:' : 'Target Benchmark:'}</span>
                  </div>
                  <div className="font-bold text-base text-emerald-400 font-mono">
                    {calculations.roas}
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  openConsultation({
                    type: 'consultation',
                    serviceTitle: `تقدير حاسبة المشاريع (${serviceType} - ${scale})`,
                  })
                }
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>{lang === 'ar' ? 'احجز هذا العرض مع الفريق' : 'Lock in This Scope'}</span>
                <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
