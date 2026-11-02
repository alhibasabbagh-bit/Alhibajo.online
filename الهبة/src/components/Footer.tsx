import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import alhibaLogo from '../alhiba-logo.jpg';
import { ArrowUp, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, navigateTo } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pt-16 pb-12 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 mb-4 text-start cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/30 p-0.5 bg-slate-900 group-hover:border-emerald-400 transition-colors">
                <img
                  src={alhibaLogo}
                  alt="Al-Hiba Logo"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/alhiba-logo.png') {
                      target.src = '/alhiba-logo.png';
                    }
                  }}
                />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">
                {lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital'}
              </span>
            </button>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {lang === 'ar'
                ? 'شركة متخصصة في التسويق الرقمي عالي التحويل، وبرمجة المواقع والمتاجر السحابية، وتقديم أفضل سيرفرات البث المباشر IPTV بدون تقطيع.'
                : 'Full-service digital marketing agency, bespoke web & mobile development firm, and provider of premium 4K IPTV streaming infrastructure.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{lang === 'ar' ? 'سجل تجاري وترخيص نظامي معتمد' : 'Licensed & Certified Digital Agency'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {lang === 'ar' ? 'أقسام الموقع' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'خدماتنا' : 'Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('competitor-tool')}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'أداة تحليل المنافسين' : 'Competitor Audit'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('iptv')}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'سيرفرات IPTV' : 'IPTV Servers'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'من نحن' : 'About Us'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('calculator')}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'حاسبة المشاريع والميزانية' : 'Project Estimator'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                </button>
              </li>
            </ul>
          </div>

          {/* Services Directory */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {lang === 'ar' ? 'الخدمات والحلول' : 'Solutions'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'إعلانات Google وMeta الممولة' : 'Google & Meta Paid PPC Ads'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'برمجة المتاجر والمواقع بـ React' : 'React & Next.js Web Platforms'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'تحسين محركات البحث SEO وتصدر النتائج' : 'Technical & Commercial SEO'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'تصميم الهوية البصرية ودليل البراندنج' : 'Brand Identity & Visual Systems'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('iptv')}
                  className="hover:text-emerald-500 transition-colors cursor-pointer text-start"
                >
                  {lang === 'ar' ? 'سيرفرات IPTV 4K لجميع البطولات' : '4K IPTV Live Sports & VOD'}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              {lang === 'ar' ? 'نشرة الهبة للنمو الرقمي' : 'Al-Hiba Growth Letter'}
            </h4>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              {lang === 'ar'
                ? 'نصائح حصرية في التسويق وزيادة المبيعات وعروض سيرفرات IPTV الدورية.'
                : 'Quarterly tactical breakdowns on performance ads and streaming infrastructure.'}
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'ar' ? 'شكراً لاشتراكك معنا!' : 'Thank you for subscribing!'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : 'Your corporate email'}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="absolute end-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()}{' '}
            {lang === 'ar'
              ? 'شركة الهبة للتسويق والبرمجة. جميع الحقوق محفوظة.'
              : 'Al-Hiba Marketing & Programming. All Rights Reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              {lang === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}
            </span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>{lang === 'ar' ? 'للأعلى' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
