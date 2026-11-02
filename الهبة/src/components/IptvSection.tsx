import React from 'react';
import { useApp } from '../context/AppContext';
import { iptvPlansData } from '../data/translations';
import { IptvPlan } from '../types';
import {
  Tv,
  Check,
  Zap,
  Radio,
  Film,
  Trophy,
  ArrowUpRight,
  Headphones,
  Sparkles,
  Gift,
} from 'lucide-react';

export const IptvSection: React.FC = () => {
  const { lang, openConsultation, getWhatsAppUrl } = useApp();

  const formatJOD = (amount: number) => {
    return lang === 'ar' ? `${amount} دينار أردني` : `${amount} JOD`;
  };

  const formatUSD = (amount: number) => {
    return lang === 'ar' ? `يعادل ~$${amount} دولار` : `≈ $${amount} USD`;
  };

  return (
    <section id="iptv" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/3 end-0 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-start">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
            <span>{lang === 'ar' ? 'سيرفرات واشتراكات IPTV 4K' : 'Enterprise IPTV Streaming'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'ar' ? 'الأسعار الرسمية بالدينار الأردني' : 'Official Pricing in JOD & USD'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {lang === 'ar'
              ? 'سيرفرات IPTV واشتراكات سنوية بالدينار الأردني'
              : 'Annual IPTV Subscriptions & Servers (JOD Pricing)'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'جميع الاشتراكات سنوية فقط بأعلى معايير الثبات وبدون تقطيع. اختر سيرفرك المفضل بالدينار الأردني مع معادل القيمة بالدولار، واستفد من العرض الحصري لسيرفر هيدرا: سنة كاملة + 3 أشهر مجاناً (15 شهراً)!'
              : 'All subscriptions are strictly annual plans for top global servers with anti-freeze guarantee. Prices shown in Jordanian Dinar with USD equivalent, featuring the exclusive Hydra offer: 1 Year + 3 Months Free (15 Months)!'}
          </p>
        </div>

        {/* Feature Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {lang === 'ar' ? 'جميع القنوات الرياضية 4K' : 'All Sports Networks'}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">beIN 4K, SSC, Sky, OSN</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {lang === 'ar' ? 'مكتبة VOD ضخمة يومياً' : '60K+ Cinema VOD'}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">شاهد VIP، نتفلكس، ديزني</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {lang === 'ar' ? 'مانع التقطيع Anti-Freeze' : 'Anti-Freeze Tech'}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">H.265 / HEVC Ultra High Speed</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {lang === 'ar' ? 'دعم وتفعيل فوري' : 'Instant Activation'}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {lang === 'ar' ? 'عبر واتساب 00962788614245' : 'Via WhatsApp +962788614245'}
              </p>
            </div>
          </div>
        </div>

        {/* Currency & Annual Guarantee Notice Banner */}
        <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-500/30 mb-8 flex flex-wrap items-center justify-between gap-4 text-start">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500 text-slate-950 shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {lang === 'ar'
                  ? 'الأسعار الرسمية بالدينار الأردني (JOD) مع القيمة المعادلة بالدولار'
                  : 'Official Pricing in Jordanian Dinar (JOD) & USD Equivalent'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {lang === 'ar'
                  ? 'جميع الاشتراكات سنوية فقط. سيرفر هيدرا يحصل على 3 أشهر إضافية مجاناً (15 شهراً كاملاً بمبلغ 25 دينار فقط).'
                  : 'All plans are strictly annual subscriptions. Hydra server comes with 3 months extra free (15 full months for only 25 JOD).'}
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(
              lang === 'ar'
                ? 'مرحباً شركة الهبة، أرغب بالاستفسار وطلب اشتراك سيرفر IPTV (دينار أردني).'
                : 'Hello Al-Hiba, I want to inquire about annual IPTV subscriptions (JOD pricing).'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-sm transition-all whitespace-nowrap"
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طلب تجربة واستفسار عبر الواتساب' : 'Request Trial on WhatsApp'}</span>
          </a>
        </div>

        {/* Pricing Cards Grid (Strictly the 5 Requested Servers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {iptvPlansData.map((plan: IptvPlan) => {
            const isHydra = plan.isSpecialHydraOffer;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between p-5 relative ${
                  isHydra
                    ? 'border-emerald-500 bg-white dark:bg-slate-900 shadow-xl shadow-emerald-500/15 ring-2 ring-emerald-500/80 scale-[1.02]'
                    : plan.popular
                    ? 'border-emerald-500/60 bg-white dark:bg-slate-900 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Badge */}
                  {isHydra ? (
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[11px] mb-3 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'سنة + 3 أشهر مجاناً' : '1 Year + 3 Months Free'}</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold mb-3">
                      <span>{lang === 'ar' ? 'اشتراك سنوي (12 شهر)' : 'Annual Plan (12 Mo)'}</span>
                    </div>
                  )}

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {lang === 'ar' ? plan.nameAr : plan.nameEn}
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-4 font-semibold">
                    {lang === 'ar' ? plan.durationAr : plan.durationEn}
                  </p>

                  {/* Price Display: Main in JOD, Subtext in USD */}
                  <div className="mb-5 pb-4 border-b border-slate-200 dark:border-slate-800 text-start">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-slate-900 dark:text-white">
                        {plan.priceJOD}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                        {lang === 'ar' ? 'دينار أردني' : 'JOD'}
                      </span>
                    </div>
                    {/* USD value equivalent */}
                    <div className="mt-1 flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span>{formatUSD(plan.priceUSD)}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6 text-start">
                    {(lang === 'ar' ? plan.featuresAr : plan.featuresEn).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-[11px] sm:text-xs">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() =>
                    openConsultation({
                      type: 'iptv',
                      planId: plan.id,
                      planTitle: `${lang === 'ar' ? plan.nameAr : plan.nameEn} (${formatJOD(plan.priceJOD)} - ${formatUSD(plan.priceUSD)})`,
                    })
                  }
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] ${
                    isHydra
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/25 ring-1 ring-emerald-400'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                  }`}
                >
                  <span>{lang === 'ar' ? 'طلب الاشتراك والتفعيل' : 'Order Subscription'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Supported Devices Strip */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 p-5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <Tv className="w-4 h-4 text-emerald-500" />
            <span>{lang === 'ar' ? 'الأجهزة والأنظمة المدعومة:' : 'Supported Platforms:'}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-slate-800 font-mono text-[11px]">Samsung Tizen</span>
            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-slate-800 font-mono text-[11px]">LG webOS</span>
            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-slate-800 font-mono text-[11px]">Android TV & Box</span>
            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-slate-800 font-mono text-[11px]">Apple TV / iOS</span>
            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-slate-800 font-mono text-[11px]">Amazon FireStick</span>
            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-slate-800 font-mono text-[11px]">Windows & Mac</span>
          </div>
        </div>
      </div>
    </section>
  );
};

