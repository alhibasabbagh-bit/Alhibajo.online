import React from 'react';
import { useApp } from '../context/AppContext';
import alhibaLogo from '../alhiba-logo.jpg';
import { ArrowUpRight, Search, Tv, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, openConsultation, navigateTo } = useApp();

  return (
    <section id="home" className="relative pt-24 pb-16 sm:pt-28 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background ambient lighting derived from logo emerald palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 end-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 start-5 w-60 h-60 rounded-full bg-emerald-400/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Proposition Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Quiet text kicker with typographic separator (No pill badges) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4 tracking-wide">
              <span>{lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital & Engineering'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'ar' ? 'شريك نمو رقمي معتمد' : 'Verified Growth Partner'}</span>
            </div>

            {/* Headline sized clamp with text-wrap balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-6 text-balance">
              {lang === 'ar' ? (
                <>
                  نبني لك وجوداً رقمياً قوياً يضاعف{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400">
                    مبيعاتك وأرباحك
                  </span>
                </>
              ) : (
                <>
                  We Engineer Scalable Growth & High-Performance{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400">
                    Digital Ecosystems
                  </span>
                </>
              )}
            </h1>

            {/* Value Proposition without generic buzzwords */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {lang === 'ar'
                ? 'نقدّم حلولاً متكاملة تجمع بين إدارة الحملات الإعلانية الممولة عالية التحويل، وبرمجة المواقع والمتاجر السريعة، وأقوى سيرفرات IPTV فائقة الثبات لعملائنا في الخليج والعالم.'
                : 'Bespoke performance advertising, sub-second web & mobile engineering, and ultra-stable 4K IPTV streaming infrastructure built for high-growth brands and discerning clients.'}
            </p>

            {/* Primary Action Row - Navigates directly to dedicated pages */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => navigateTo('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>{lang === 'ar' ? 'استكشف خدماتنا الرقمية' : 'Explore All Services'}</span>
                <ArrowUpRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
              </button>

              <button
                onClick={() => navigateTo('competitor-tool')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-emerald-500/60 text-slate-800 dark:text-slate-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                <Search className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'ar' ? 'تشخيص مشروعك مجاناً' : 'Audit Your Business'}</span>
              </button>

              <button
                onClick={() => navigateTo('iptv')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-emerald-500/60 text-slate-800 dark:text-slate-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                <Tv className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'ar' ? 'سيرفرات IPTV 4K' : '4K IPTV Servers'}</span>
              </button>
            </div>

            {/* Quick Guarantees (Clean inline text) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'ar' ? 'عقود رسمية وتقارير شفافة' : 'Formal Service Agreements'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'ar' ? 'دعم فني واستجابة خلال دقائق' : 'Fast Technical SLA Support'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'ar' ? 'تفعيل فوري لجميع الخدمات' : 'Instant Provisioning'}</span>
              </div>
            </div>
          </div>

          {/* Visual Anchor Showcase Card (Refined single elevation) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 p-6 shadow-2xl shadow-black/10 overflow-hidden">
              {/* Top Bar of the Visual Anchor */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-emerald-500/30">
                    <img
                      src={alhibaLogo}
                      alt="Al-Hiba Mark"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== '/alhiba-logo.png') {
                          target.src = '/alhiba-logo.png';
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Al-Hiba Command Core</h3>
                    <p className="text-[11px] text-slate-500">Live Client Performance Hub</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* Metrics Grid inside card */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/60">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>{lang === 'ar' ? 'متوسط العائد ROAS' : 'ROAS Average'}</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-emerald-400">4.82x</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">
                    +42% {lang === 'ar' ? 'مقارنة بالربع السابق' : 'vs prior quarter'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/60">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>{lang === 'ar' ? 'سرعة التصفح' : 'Server Latency'}</span>
                    <span className="font-mono text-xs text-emerald-500">HTTP/3</span>
                  </div>
                  <div className="text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">48ms</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {lang === 'ar' ? 'بث 4K بدون تأخير' : 'Ultra-low buffer rate'}
                  </div>
                </div>
              </div>

              {/* Live Activity Simulation Bar */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/70 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50">
                  <span className="text-slate-700 dark:text-slate-300">
                    {lang === 'ar' ? 'حملات إعلانات Meta وGoogle النشطة' : 'Active Meta & Google Ad Sets'}
                  </span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">18 Active</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/70 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50">
                  <span className="text-slate-700 dark:text-slate-300">
                    {lang === 'ar' ? 'حالة سيرفرات البث IPTV' : 'IPTV Stream Node Health'}
                  </span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Optimal 100%</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/70 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50">
                  <span className="text-slate-700 dark:text-slate-300">
                    {lang === 'ar' ? 'فحوصات المنافسين المكتملة' : 'Competitor Audits Generated'}
                  </span>
                  <span className="font-mono text-slate-900 dark:text-slate-200 font-semibold">1,840+</span>
                </div>
              </div>

              {/* Action trigger */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {lang === 'ar' ? 'جاهزون لمضاعفة أرقامك؟' : 'Ready to scale your business?'}
                </span>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Team'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency Strip (Row below hero split) */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-start">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
              +240
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {lang === 'ar' ? 'مشروعاً رقمياً منجزاً بنجاح' : 'Successful Digital Projects'}
            </p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
              4.6x
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {lang === 'ar' ? 'متوسط العائد الإعلاني لعملائنا' : 'Average Campaign ROAS'}
            </p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
              99.9%
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {lang === 'ar' ? 'معدل ثبات واستقرار السيرفرات' : 'IPTV Stream Uptime Guarantee'}
            </p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
              24/7
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {lang === 'ar' ? 'دعم فني واستجابة فورية' : 'Continuous Engineering Support'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
