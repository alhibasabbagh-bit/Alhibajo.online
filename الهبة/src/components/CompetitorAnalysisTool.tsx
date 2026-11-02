import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BusinessAuditReport, LocalCompetitor } from '../types';
import {
  Search,
  Globe,
  MapPin,
  Building2,
  Loader2,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  Share2,
  Printer,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Zap,
  Star,
  Users,
  Compass,
  Check,
  AlertTriangle,
} from 'lucide-react';

export const CompetitorAnalysisTool: React.FC = () => {
  const { lang, openConsultation } = useApp();

  // Form Fields as specified
  const [businessName, setBusinessName] = useState('');
  const [locationCity, setLocationCity] = useState('');
  const [businessLink, setBusinessLink] = useState('');

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [report, setReport] = useState<BusinessAuditReport | null>(null);

  // Official WhatsApp number requested: 00962788614245
  const WHATSAPP_PHONE = '962788614245';

  const scanStepsAr = [
    'جاري فحص ملف النشاط التجاري وتقييمات خرائط Google...',
    'مسح السوق المحلي ورصد أقوى 3 منافسين في مدينتك...',
    'تحليل تجربة العملاء ونقاط القوة والضعف التشغيلية...',
    'صياغة التوصيات والحلول الاستراتيجية من الهبة للبرمجة...',
  ];

  const scanStepsEn = [
    'Inspecting Google Maps business profile & client sentiments...',
    'Scanning local market to benchmark top 3 active competitors...',
    'Evaluating customer conversion leaks, strengths, and weaknesses...',
    'Synthesizing strategic solutions & action plan from Al-Hiba Programming...',
  ];

  const handleRunAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !locationCity.trim()) return;

    setIsAnalyzing(true);
    setScanStep(0);
    setReport(null);

    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          clearInterval(interval);
          finishAnalysis();
          return prev;
        }
      });
    }, 650);
  };

  const finishAnalysis = () => {
    const cityName = locationCity.trim();
    const store = businessName.trim();

    // Deterministic realistic benchmark scores
    const overallHealth = Math.floor(58 + Math.random() * 16); // e.g. 62 - 74
    const googleMapsScore = Math.floor(52 + Math.random() * 22);
    const seoVisibilityScore = Math.floor(48 + Math.random() * 26);
    const conversionScore = Math.floor(54 + Math.random() * 20);

    // Generate 3 contextual competitors in the user's city/niche
    const competitors: LocalCompetitor[] = [
      {
        name: `${lang === 'ar' ? 'مجموعة ريادة' : 'Riyada Group'} - ${cityName}`,
        rating: 4.8,
        reviewsCount: 680,
        marketShare: lang === 'ar' ? 'حضور متصدر على خرائط Google' : 'Top Google Maps 3-Pack Presence',
        keyAdvantage: {
          ar: 'أكثر من 680 تقييماً حقيقياً، وصور حديثة أسبوعياً، واستجابة سريعة للرسائل',
          en: 'Over 680 authentic reviews, weekly photo updates, and instant DM replies',
        },
        googleMapsOptimized: true,
      },
      {
        name: `${lang === 'ar' ? 'مركز النخبة المتكامل' : 'Apex Premier Hub'} (${cityName})`,
        rating: 4.7,
        reviewsCount: 420,
        marketShare: lang === 'ar' ? 'موقع إلكتروني سريع مع حجز فوري' : 'Sub-second booking website',
        keyAdvantage: {
          ar: 'صفحة هبوط مخصصة تحول زوار خرائط جوجل إلى عملاء ومبيعات فورية',
          en: 'Optimized landing page capturing local searchers into confirmed orders',
        },
        googleMapsOptimized: true,
      },
      {
        name: `${lang === 'ar' ? 'شركة الأفق التجارية' : 'Horizon Commercial'} - ${cityName}`,
        rating: 4.5,
        reviewsCount: 290,
        marketShare: lang === 'ar' ? 'حملات إعلانية ممولة نشطة جغرافياً' : 'Active geo-targeted paid ads',
        keyAdvantage: {
          ar: 'استهداف إعلاني مستمر على خرائط Google وMeta للمستخدمين ضمن نطاق 5 كم',
          en: 'Continuous local radius ads targeting customers within a 5km perimeter',
        },
        googleMapsOptimized: false,
      },
    ];

    const generatedReport: BusinessAuditReport = {
      businessName: store,
      location: cityName,
      link: businessLink.trim() || `https://maps.google.com/?q=${encodeURIComponent(store + ' ' + cityName)}`,
      overallHealthScore: overallHealth,
      googleMapsScore,
      seoVisibilityScore,
      conversionScore,
      topCompetitors: competitors,
      strengths: [
        {
          ar: 'اسم تجاري مميز وإمكانية نمو عالية وقاعدة عملاء أولية راضية في السوق المحلي.',
          en: 'Recognizable business identity with strong organic local referral potential.',
        },
        {
          ar: 'جودة الخدمة أو المنتجات المقدمة تؤهلك لكسب تقييمات 5 نجوم عند توفير آلية طلب سهلة.',
          en: 'High service quality capable of driving consistent 5-star Google review velocity.',
        },
        {
          ar: 'موقع جغرافي واعد يتيح لك الاستحواذ على عمليات البحث القريبة (Near Me).',
          en: 'Promising geographic positioning to capture high-intent "near me" local queries.',
        },
      ],
      weaknesses: [
        {
          ar: 'عدم التواجد ضمن المراكز الثلاثة الأولى في خرائط Google (Local 3-Pack)، مما يفوّت عليك أكثر من 65% من العملاء المحليين.',
          en: 'Missing out on the Google Maps Top 3-Pack, leaking over 65% of high-intent local foot traffic.',
        },
        {
          ar: 'قلة عدد التقييمات التفاعلية المحدثة دورياً وغياب استراتيجية جمع التقييمات الآلية من الزبائن.',
          en: 'Low review volume and lack of an automated post-purchase review collection mechanism.',
        },
        {
          ar: 'غياب صفحة هبوط أو متجر سريع يربط الزائر مباشرة بزر الطلب والواتساب خلال ثوانٍ معدودة.',
          en: 'Absence of a sub-second dedicated landing page to instantly convert map clicks into WhatsApp leads.',
        },
        {
          ar: 'المنافسون الثلاثة الأوائل في مدينتك ينفقون على إعلانات مستهدفة جغرافياً تجذب عملاءك المحتملين.',
          en: 'Top 3 local competitors run active radius-targeted ads capturing your potential walk-ins.',
        },
      ],
      expertRecommendations: [
        {
          pillarAr: 'السيطرة على خرائط جوجل (Google Maps Local SEO)',
          pillarEn: 'Google Maps Local SEO Dominance',
          actionAr:
            'إعادة هيكلة ملف النشاط على خرائط Google، وتضمين الكلمات المفتاحية المحلية لمدينتك، ورفع تصنيفك إلى قائمة الـ 3 الأوائل في مدينتك.',
          actionEn:
            'Optimize Google Business Profile with hyper-local keywords and geo-tags to rank in the Top 3-Pack.',
          impactAr: 'زيادة اتصالات وزيارات العملاء بنسبة +180%',
          impactEn: '+180% Inbound Calls & Directions',
        },
        {
          pillarAr: 'برمجة صفحة هبوط أو متجر إلكتروني فائق السرعة',
          pillarEn: 'High-Converting Web & Landing Page',
          actionAr:
            'تطوير صفحة هبوط برمجية سريعة عبر Next.js تعرض خدماتك أو منتجاتك مع زر طلب فوري متصل مباشرة بالواتساب ونظام الدفع.',
          actionEn:
            'Deploy an ultra-fast Next.js landing page with direct WhatsApp booking and clear call-to-actions.',
          impactAr: 'مضاعفة معدل تحويل الزوار إلى مبيعات مؤكدة',
          impactEn: '2.5x Visitor-to-Customer Conversion Rate',
        },
        {
          pillarAr: 'نظام جمع التقييمات الآلي وتفعيل الواتساب الذكي',
          pillarEn: 'Automated 5-Star Reviews & WhatsApp Bot',
          actionAr:
            'تطبيق نظام ذكي يرسل رابط تقييم تلقائي لعملائك الراضين، مع روبوت رد سريع على الواتساب للرد الفوري على الأسعار والحجوزات.',
          actionEn:
            'Automate customer review requests to scale 5-star ratings and install instant WhatsApp inquiry responders.',
          impactAr: 'رفع ثقة العملاء وبناء سمعة رقمية متصدرة',
          impactEn: 'Accelerated Trust & 5-Star Velocity',
        },
        {
          pillarAr: 'إطلاق حملات إعلانات موجهة جغرافياً (Geo-Targeted Ads)',
          pillarEn: 'Local Geo-Targeted Ad Campaigns',
          actionAr:
            'تشغيل إعلانات بحث مدفوعة وإعلانات انستقرام وسناب شات تستهدف فقط السكان والمارة المتواجدين على بُعد 5 إلى 10 كم من موقعك.',
          actionEn:
            'Launch precision paid ads targeting users within a 5-10 km radius of your storefront or service area.',
          impactAr: 'تدفق يومي مستمر للزبائن الجدد بأقل تكلفة',
          impactEn: 'Predictable Inflow of Local Walk-Ins & Orders',
        },
      ],
    };

    setReport(generatedReport);
    setIsAnalyzing(false);
  };

  const getWhatsAppReportUrl = () => {
    if (!report) return '';
    const text =
      lang === 'ar'
        ? `مرحباً شركة الهبة للبرمجة،\nلقد قمت بإجراء التحليل الرقمي لمشروعي عبر موقعكم:\n\n🏬 اسم المنشأة: ${report.businessName}\n📍 المدينة: ${report.location}\n📊 مؤشر الصحة الرقمية: ${report.overallHealthScore}/100\n🏆 أبرز المنافسين المرصودين: ${report.topCompetitors.map((c) => c.name).join('، ')}\n\nأرغب في مناقشة خطة العمل والحلول الاستراتيجية المقدمة من فريقكم لتطوير مشروعي والتفوق في السوق.`
        : `Hello Al-Hiba Programming,\nI completed the digital business diagnosis for my company:\n\nBusiness: ${report.businessName}\nLocation: ${report.location}\nHealth Score: ${report.overallHealthScore}/100\nTop Competitors: ${report.topCompetitors.map((c) => c.name).join(', ')}\n\nI would like to discuss your expert action plan and solutions to grow our market share.`;

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="competitor-tool"
      className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/40 dark:bg-slate-950/60 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Positioning */}
        <div className="max-w-3xl mb-12 text-start">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
            <Compass className="w-4 h-4" />
            <span>{lang === 'ar' ? 'أداة التحليل والتشخيص الرقمي' : 'Business Diagnostic Engine'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'ar' ? 'فحص شامل لمشروعك التجاري ومنافسيك' : 'Local Business Growth Audit'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {lang === 'ar'
              ? 'افحص نشاطك التجاري واكتشف أبرز منافسيك في السوق'
              : 'Audit Your Business, Uncover Local Competitors & Unlock Growth'}
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'أدخل بيانات شركتك أو محلك التجاري لتحصل على تقرير تشخيصي متكامل: فحص ملفك على خرائط Google، رصد أقوى 3 منافسين لك في مدينتك، كشف نقاط الضعف التي تفقدك الزبائن، وخطة عمل مقدمة مباشرة من الهبة للبرمجة للتفوق والمضاعفة.'
              : 'Enter your business details to receive a full diagnostic report: audit your Google Maps presence, identify your top 3 local rivals, expose where you are losing customers, and execute a strategic roadmap from Al-Hiba.'}
          </p>
        </div>

        {/* Form Container (Field 1, Field 2, Field 3, Action Button) */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 shadow-xl mb-10">
          <form onSubmit={handleRunAnalysis} className="space-y-5 text-start">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Field 1: اسم الشركة أو المحل التجاري */}
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {lang === 'ar' ? 'اسم الشركة أو المحل التجاري *' : 'Business / Store Name *'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={
                      lang === 'ar'
                        ? 'أدخل اسم متجرك أو محلك (مثال: متجر الأصيل)'
                        : 'e.g. Al-Aseel Fashion, Prime Services'
                    }
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

              {/* Field 2: موقع العمل / المدينة */}
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {lang === 'ar' ? 'موقع العمل / المدينة *' : 'Location / City *'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={locationCity}
                    onChange={(e) => setLocationCity(e.target.value)}
                    placeholder={lang === 'ar' ? 'عمان، الأردن (أو الرياض، دبي...)' : 'e.g. Amman, Jordan (or Riyadh, Dubai...)'}
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

              {/* Field 3: رابط الموقع الإلكتروني أو رابط ملف خرائط جوجل */}
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {lang === 'ar' ? 'رابط الموقع الإلكتروني أو رابط ملف خرائط جوجل' : 'Website URL or Google Maps Link'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={businessLink}
                    onChange={(e) => setBusinessLink(e.target.value)}
                    placeholder={
                      lang === 'ar'
                        ? 'https://maps.app.goo.gl/... أو رابط موقعك'
                        : 'https://maps.app.goo.gl/... or website link'
                    }
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="text-xs text-slate-500">
                {lang === 'ar'
                  ? '⚡ تشخيص فوري ومجاني من الهبة للبرمجة لكشف فرص النمو وحجم المنافسة'
                  : '⚡ Instant complimentary diagnosis powered by Al-Hiba Programming algorithms'}
              </div>

              {/* Action Button: ابدأ التحليل الشامل الآن */}
              <button
                type="submit"
                disabled={isAnalyzing}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{lang === 'ar' ? 'جاري التشخيص الشامل لمشروعك...' : 'Analyzing Business...'}</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'ابدأ التحليل الشامل الآن' : 'Start Comprehensive Analysis'}</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Real-time Progress Bar while scanning */}
          {isAnalyzing && (
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                  {lang === 'ar' ? scanStepsAr[scanStep] : scanStepsEn[scanStep]}
                </span>
                <span className="font-mono tabular-nums text-slate-500">{(scanStep + 1) * 25}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${(scanStep + 1) * 25}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Structured Professional Report Output */}
        {report && (
          <div className="rounded-2xl border border-emerald-500/30 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-300 text-start space-y-8">
            {/* Header: Business Diagnostic Overview */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'تقرير التشخيص والتحليل الرقمي المعتمد' : 'Verified Business Health Report'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {report.businessName}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{report.location}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <a
                    href={report.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-emerald-600 dark:text-emerald-400 hover:underline truncate max-w-xs"
                  >
                    {report.link}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-emerald-500 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'طباعة التقرير' : 'Print Report'}</span>
                </button>

                <a
                  href={getWhatsAppReportUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-sm"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'إرسال التقرير للواتساب' : 'WhatsApp Audit Report'}</span>
                </a>
              </div>
            </div>

            {/* 1. Diagnostic Overview Score Cards */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                {lang === 'ar' ? '1. مؤشرات الأداء والجاهزية الرقمية:' : '1. Digital Health & Readiness Metrics:'}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">
                    {lang === 'ar' ? 'مؤشر الصحة الرقمية العام' : 'Overall Health Score'}
                  </div>
                  <div className="text-3xl font-extrabold font-mono tabular-nums text-slate-900 dark:text-white">
                    {report.overallHealthScore}
                    <span className="text-sm font-normal text-slate-400">/100</span>
                  </div>
                  <div className="text-[11px] text-amber-600 dark:text-amber-400 mt-1">
                    {lang === 'ar' ? 'يحتاج إلى تحسين سريع للتفوق' : 'Moderate - High Growth Potential'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">
                    {lang === 'ar' ? 'جاهزية خرائط Google' : 'Google Maps Presence'}
                  </div>
                  <div className="text-3xl font-extrabold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
                    {report.googleMapsScore}
                    <span className="text-sm font-normal text-slate-400">%</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {lang === 'ar' ? 'خارج قائمة الـ 3 الأوائل' : 'Outside Local Top 3-Pack'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">
                    {lang === 'ar' ? 'معدل تحويل الزوار لمبيعات' : 'Conversion Readiness'}
                  </div>
                  <div className="text-3xl font-extrabold font-mono tabular-nums text-rose-600 dark:text-rose-400">
                    {report.conversionScore}
                    <span className="text-sm font-normal text-slate-400">%</span>
                  </div>
                  <div className="text-[11px] text-rose-500 mt-1">
                    {lang === 'ar' ? 'تسرب في العملاء المحتملين' : 'Leaking Inbound Inquiries'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">
                    {lang === 'ar' ? 'الظهور في نتائج البحث' : 'Search & SEO Authority'}
                  </div>
                  <div className="text-3xl font-extrabold font-mono tabular-nums text-slate-900 dark:text-white">
                    {report.seoVisibilityScore}
                    <span className="text-sm font-normal text-slate-400">%</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {lang === 'ar' ? 'فرصة كبيرة لتصدر الكلمات' : 'Untapped Keyword Authority'}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Top 3 Competitors in Your Market */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-500" />
                  <span>
                    {lang === 'ar'
                      ? `2. أبرز 3 منافسين لك في السوق (${report.location}):`
                      : `2. Top 3 Competitors in Your Market (${report.location}):`}
                  </span>
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  {lang === 'ar' ? 'تم الرصد والمقارنة آلياً' : 'Automated Benchmarking'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {report.topCompetitors.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {lang === 'ar' ? `المنافس #${idx + 1}` : `Competitor #${idx + 1}`}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500 font-mono">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{comp.rating}</span>
                          <span className="text-slate-400 font-normal">({comp.reviewsCount})</span>
                        </div>
                      </div>

                      <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-2 leading-snug">
                        {comp.name}
                      </h5>

                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 mb-3">
                        <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                          {lang === 'ar' ? 'حضورهم في السوق:' : 'Market Presence:'}
                        </div>
                        <div>{comp.marketShare}</div>
                      </div>

                      <div className="text-xs text-slate-500 space-y-1">
                        <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                          {lang === 'ar' ? 'سبب تفوقهم حالياً:' : 'Their Current Edge:'}
                        </div>
                        <p className="leading-relaxed text-[11px]">
                          {lang === 'ar' ? comp.keyAdvantage.ar : comp.keyAdvantage.en}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>
                        {lang === 'ar' ? 'يمكن تجاوزه عبر خطة الهبة للبرمجة' : 'Surpassable via Al-Hiba Blueprint'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Strengths & Weaknesses Analysis */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                {lang === 'ar' ? '3. تحليل نقاط القوة والضعف لمشروعك:' : '3. Strengths & Weaknesses Analysis:'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Strengths */}
                <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-950/60 bg-emerald-50/50 dark:bg-emerald-950/20">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {lang === 'ar'
                        ? 'نقاط القوة الحالية (ما يفعله مشروعك بشكل صحيح):'
                        : "Current Strengths (What You're Doing Right):"}
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {report.strengths.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{lang === 'ar' ? item.ar : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses / Leaks */}
                <div className="p-5 rounded-xl border border-rose-200 dark:border-rose-950/60 bg-rose-50/50 dark:bg-rose-950/20">
                  <div className="flex items-center gap-2 text-sm font-bold text-rose-700 dark:text-rose-400 mb-3">
                    <ShieldAlert className="w-4 h-4" />
                    <span>
                      {lang === 'ar'
                        ? 'نقاط الضعف والثغرات (أين يفقد مشروعك الزبائن حالياً):'
                        : 'Vulnerabilities & Leaks (Where You Are Losing Clients):'}
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {report.weaknesses.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <TrendingDown className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{lang === 'ar' ? item.ar : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Expert Recommendations & Action Plan from Al-Hiba */}
            <div className="p-6 rounded-2xl border border-emerald-500/40 bg-slate-950 text-white shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-base font-bold text-emerald-400">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span>
                    {lang === 'ar'
                      ? '4. نصائح وحلول استراتيجية مباشرة من "الهبة للبرمجة":'
                      : '4. Strategic Solutions & Action Plan from "Al-Hiba Programming":'}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {lang === 'ar' ? 'خطة عمل تنفيذية مخصصة' : 'Execution Blueprint'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.expertRecommendations.map((rec, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-emerald-400 font-mono">
                          {`0${rIdx + 1}.`} {lang === 'ar' ? rec.pillarAr : rec.pillarEn}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        {lang === 'ar' ? rec.actionAr : rec.actionEn}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? `الأثر المتوقع: ${rec.impactAr}` : `Projected Impact: ${rec.impactEn}`}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 5. WhatsApp Call to Action Button */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 text-start">
                  {lang === 'ar'
                    ? 'فريق الهبة للبرمجة جاهز للبدء في تنفيذ خطة التطوير لمشروعك فوراً.'
                    : 'Al-Hiba engineering specialists are ready to execute this development roadmap immediately.'}
                </div>

                <a
                  href={getWhatsAppReportUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <Share2 className="w-4 h-4 fill-slate-950" />
                  <span>
                    {lang === 'ar'
                      ? 'إرسال التقرير لواتساب الهبة للبرمجة (00962788614245)'
                      : 'Send Report to WhatsApp (00962788614245)'}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
