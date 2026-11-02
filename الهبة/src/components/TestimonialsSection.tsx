import React from 'react';
import { useApp } from '../context/AppContext';
import { testimonialsData } from '../data/translations';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { lang } = useApp();

  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-start">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
            <span>{lang === 'ar' ? 'آراء العملاء والشركاء' : 'Client Testimonials'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'ar' ? 'ثقة مبنية على أرقام ونتائج' : 'Real Trust Built on Delivery'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {lang === 'ar'
              ? 'ماذا يقول عملاؤنا عن العمل مع الهبة؟'
              : 'Endorsements from Forward-Thinking Leaders'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'نفخر بثقة نخبة من الشركات ورواد الأعمال في المملكة العربية السعودية والخليج ومختلف دول العالم.'
              : 'Our highest honor is the long-term partnership with corporate executives, retail founders, and digital enterprises across the globe.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item: Testimonial) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  "{lang === 'ar' ? item.quoteAr : item.quoteEn}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 border border-emerald-500/20">
                  {item.avatarText}
                </div>
                <div className="flex flex-col text-start">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {lang === 'ar' ? item.nameAr : item.nameEn}
                  </h4>
                  <div className="text-[11px] text-slate-500">
                    {lang === 'ar' ? `${item.roleAr} - ${item.companyAr}` : `${item.roleEn}, ${item.companyEn}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
