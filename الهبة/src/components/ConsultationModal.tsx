import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

export const ConsultationModal: React.FC = () => {
  const { lang, isConsultationOpen, closeConsultation, consultationData, getWhatsAppUrl } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [isDone, setIsDone] = useState(false);

  if (!isConsultationOpen) return null;

  const title = consultationData?.planTitle || consultationData?.serviceTitle || (
    lang === 'ar' ? 'طلب استشارة مجانية' : 'Book a Discovery Consultation'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsDone(true);
  };

  const handleWhatsAppDirect = () => {
    const text = lang === 'ar'
      ? `مرحباً شركة الهبة، أرغب بالطلب أو الاستفسار عن: ${title} - اسمي: ${name || 'عميل مهتم'} - هاتفي: ${phone || 'غير محدد'}.`
      : `Hello Al-Hiba, I am inquiring about: ${title} - Name: ${name || 'Interested Client'} - Phone: ${phone || 'N/A'}.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeConsultation}
          className="absolute top-4 end-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {lang === 'ar' ? 'تم استلام طلبك بنجاح' : 'Request Received Successfully'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
              {lang === 'ar'
                ? `شكراً لك ${name}، سيقوم فريق الدعم أو مستشارنا المتخصص بالتواصل معك خلال دقائق.`
                : `Thank you ${name}, our specialist will reach out to you within minutes.`}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>{lang === 'ar' ? 'متابعة عبر الواتساب فوراً' : 'Continue on WhatsApp'}</span>
              </button>
              <button
                onClick={() => {
                  setIsDone(false);
                  closeConsultation();
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital'}</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'ar'
                  ? 'املأ البيانات التالية ليتواصل معك خبيرنا المالي والتقني فوراً.'
                  : 'Provide your details below and our team will get in touch immediately.'}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'ar' ? 'الاسم الكريم *' : 'Full Name *'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'ar' ? 'محمد العتيبي' : 'Alex Morgan'}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'ar' ? 'رقم الواتساب أو الجوال *' : 'Phone / WhatsApp *'}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+966 50 123 4567"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 font-mono"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'ar' ? 'ملاحظة إضافية أو وقت مناسب للتواصل' : 'Additional Notes / Preferred Timing'}
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={lang === 'ar' ? 'مثال: أفضّل التواصل عبر واتساب بعد العصر' : 'e.g. Please reach out via WhatsApp'}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تأكيد الطلب والتواصل معي' : 'Confirm & Request Call'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-2.5 rounded-xl border border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'ar' ? 'أو تواصل فوراً عبر الواتساب' : 'Or Contact Directly on WhatsApp'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
