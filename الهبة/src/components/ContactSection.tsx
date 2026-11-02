import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, getWhatsAppUrl } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('marketing');
  const [budget, setBudget] = useState('medium');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Channels & Trust */}
          <div className="lg:col-span-5 text-start">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 tracking-wide">
              <span>{lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'ar' ? 'استشارة مجانية بدون التزام' : 'Free Discovery Session'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              {lang === 'ar'
                ? 'جاهز لنقل أعمالك إلى المستوى التالي؟'
                : 'Ready to Scale Your Brand to New Heights?'}
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {lang === 'ar'
                ? 'تواصل مباشرة مع مستشاري الهبة للتسويق والبرمجة وسيرفرات IPTV. سنناقش متطلبات مشروعك ونقدم لك استراتيجية عمل واضحة وعرض أسعار مفصّل.'
                : 'Connect directly with our senior engineers and growth strategists. We will evaluate your scope, identify quick wins, and prepare a tailored roadmap.'}
            </p>

            {/* Direct WhatsApp Callout Button */}
            <a
              href={getWhatsAppUrl(
                lang === 'ar'
                  ? 'مرحباً شركة الهبة، أود التحدث مع مستشار تسويق وبرمجة بخصوص مشروع جديد.'
                  : 'Hello Al-Hiba, I would like to speak directly with an advisor regarding a new project.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all mb-8"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>{lang === 'ar' ? 'تحدث معنا مباشرة عبر واتساب' : 'Chat Instantly on WhatsApp'}</span>
            </a>

            {/* Contact Details List */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{lang === 'ar' ? 'البريد الإلكتروني الرسمي:' : 'Official Email:'}</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white font-mono">
                    contact@alhibamarketing.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{lang === 'ar' ? 'هاتف وواتساب خدمة العملاء:' : 'Phone & Support:'}</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white font-mono" dir="ltr">
                    +962 7 8861 4245
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{lang === 'ar' ? 'ساعات العمل والمتابعة:' : 'Support SLA:'}</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {lang === 'ar' ? 'خدمة ودعم فني على مدار الساعة 24/7' : '24/7 Priority Helpline & Monitoring'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{lang === 'ar' ? 'التغطية الجغرافية:' : 'Operational Reach:'}</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {lang === 'ar' ? 'المملكة العربية السعودية، الخليج، ومختلف دول العالم' : 'Saudi Arabia, GCC, MENA & Global Clients'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {lang === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Your Request Has Been Received!'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    {lang === 'ar'
                      ? 'شكراً لتواصلك مع شركة الهبة. سيقوم أحد مستشارينا بالتواصل معك عبر الواتساب أو الاتصال خلال أقل من 30 دقيقة.'
                      : 'Thank you for reaching out to Al-Hiba Digital. An advisor will contact you via WhatsApp or phone within 30 minutes.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="mt-4 px-5 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
                  >
                    {lang === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-start">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'احجز استشارتك المجانية الآن' : 'Free Advisory Booking Form'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'ar' ? 'محمد العتيبي' : 'John Doe'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {lang === 'ar' ? 'رقم الواتساب أو الجوال *' : 'Phone / WhatsApp Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={lang === 'ar' ? '+966 50 123 4567' : '+1 (555) 000-0000'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 font-mono"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {lang === 'ar' ? 'الخدمة المطلوبة' : 'Primary Service'}
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                      >
                        <option value="marketing">{lang === 'ar' ? 'التسويق الرقمي وإعلانات الأداء' : 'Performance Marketing'}</option>
                        <option value="dev">{lang === 'ar' ? 'تطوير المواقع والمتاجر' : 'Web & E-Commerce'}</option>
                        <option value="seo">{lang === 'ar' ? 'تحسين محركات البحث SEO' : 'Search Engine Optimization'}</option>
                        <option value="branding">{lang === 'ar' ? 'تصميم الهوية البصرية' : 'Brand Identity'}</option>
                        <option value="iptv">{lang === 'ar' ? 'سيرفرات واشتراكات IPTV' : 'IPTV Streaming'}</option>
                        <option value="software">{lang === 'ar' ? 'أنظمة برمجية مخصصة' : 'Custom Software'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'تفاصيل مشروعك أو استفسارك' : 'Project Details & Goals'}
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        lang === 'ar'
                          ? 'أخبرنا عن أهدافك الحالية وما الذي ترغب في تحقيقه...'
                          : 'Describe your current operational goals and deliverables...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'إرسال طلب الاستشارة المجانية' : 'Submit Consultation Request'}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    {lang === 'ar'
                      ? 'بياناتك مشفرة ومحمية بالكامل ولا نشاركها مع أي طرف خارجي.'
                      : 'Your information is strictly encrypted and protected under our confidentiality policy.'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
