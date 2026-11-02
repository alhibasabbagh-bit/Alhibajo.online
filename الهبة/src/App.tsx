/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeOverview } from './components/HomeOverview';
import { ServicesSection } from './components/ServicesSection';
import { CompetitorAnalysisTool } from './components/CompetitorAnalysisTool';
import { IptvSection } from './components/IptvSection';
import { AboutSection } from './components/AboutSection';
import { CalculatorSection } from './components/CalculatorSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PageHeader } from './components/PageHeader';
import { SectionBottomGateway } from './components/SectionBottomGateway';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { useSEO } from './hooks/useSEO';
import { MessageCircle } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { lang, getWhatsAppUrl, currentPage, navigateTo } = useApp();

  // Dynamic SEO tracking across all page sections and language switches
  useSEO();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <div className="animate-in fade-in duration-200">
            <PageHeader
              pageTitleAr="الخدمات والحلول الرقمية والبرمجية"
              pageTitleEn="Digital Marketing & Engineering Services"
              badgeAr="حلول نمو متكاملة"
              badgeEn="Integrated Growth Solutions"
              descriptionAr="حلول شاملة تجمع بين إدارة الحملات الإعلانية الممولة عالية العائد، برمجة المواقع والمتاجر السريعة، تحسين السيو الفني، وتصميم الهويات البصرية للشركات."
              descriptionEn="Full-funnel performance marketing, bespoke modern web & mobile architectures, technical SEO, and distinct corporate identities built for high conversion."
            />
            <ServicesSection />
            <SectionBottomGateway current="services" onNavigate={navigateTo} lang={lang} />
          </div>
        );

      case 'competitor-tool':
        return (
          <div className="animate-in fade-in duration-200">
            <PageHeader
              pageTitleAr="أداة فحص النشاط التجاري وتحليل المنافسين"
              pageTitleEn="Business Diagnostic & Local Competitor Audit Tool"
              badgeAr="فحص محلي فوري"
              badgeEn="Instant Local Business Scan"
              descriptionAr="افحص نشاطك التجاري واكتشف أبرز 3 منافسين في مدينتك. تقييم شامل لملف خرائط Google، ونقاط القوة والضعف، وخطة عمل مقدمة مباشرة من الهبة للبرمجة."
              descriptionEn="Benchmark your business against top 3 local competitors. Audit your Google Maps performance, uncover conversion leaks, and get actionable recommendations."
            />
            <CompetitorAnalysisTool />
            <SectionBottomGateway current="competitor-tool" onNavigate={navigateTo} lang={lang} />
          </div>
        );

      case 'iptv':
        return (
          <div className="animate-in fade-in duration-200">
            <PageHeader
              pageTitleAr="سيرفرات واشتراكات IPTV 4K فائقة الثبات"
              pageTitleEn="Enterprise 4K IPTV Streaming Servers & Subscriptions"
              badgeAr="الأسعار الرسمية بالدينار الأردني"
              badgeEn="Official JOD & USD Pricing"
              descriptionAr="أقوى سيرفرات IPTV بتقنية مانع التقطيع Anti-Freeze. جميع الباقات سنوية لضمان أعلى ثبات، مع باقة هيدرا VIP الحصرية (سنة + 3 أشهر مجاناً)."
              descriptionEn="Enterprise-grade 4K IPTV subscriptions with anti-freeze architecture. 18,000+ live sports channels and 60,000+ cinema VOD with instant activation."
            />
            <IptvSection />
            <SectionBottomGateway current="iptv" onNavigate={navigateTo} lang={lang} />
          </div>
        );

      case 'about':
        return (
          <div className="animate-in fade-in duration-200">
            <PageHeader
              pageTitleAr="من نحن | قصة ورؤية شركة الهبة للتسويق والبرمجة"
              pageTitleEn="About Al-Hiba Digital | Engineering & Growth Vision"
              badgeAr="شريك رقمي معتمد"
              badgeEn="Certified Growth Partner"
              descriptionAr="تأسست شركة الهبة للتسويق والبرمجة لتكون المحرك الرقمي المتكامل للشركات ورواد الأعمال. نجمع بين خبرة التسويق، البرمجة الحديثة، وسيرفرات البث عالية الثبات."
              descriptionEn="Al-Hiba Digital was founded as a high-velocity growth engine for ambitious enterprises across the Middle East, GCC, and global markets."
            />
            <AboutSection />
            <CaseStudiesSection />
            <TestimonialsSection />
            <SectionBottomGateway current="about" onNavigate={navigateTo} lang={lang} />
          </div>
        );

      case 'calculator':
        return (
          <div className="animate-in fade-in duration-200">
            <PageHeader
              pageTitleAr="حاسبة المشاريع والميزانية التقديرية"
              pageTitleEn="Project Cost, Timeline & ROI Estimator"
              badgeAr="تقدير استرشادي شفاف"
              badgeEn="Transparent Project Estimates"
              descriptionAr="اختر نوع الخدمة وحجم مشروعك وتعرف على الجدول الزمني المتوقع ومؤشرات الأداء والعائد الاستثماري التقديري قبل بدء التنفيذ."
              descriptionEn="Calculate your customized development budget, launch timeline, and expected ROAS across marketing campaigns and software platforms."
            />
            <CalculatorSection />
            <SectionBottomGateway current="calculator" onNavigate={navigateTo} lang={lang} />
          </div>
        );

      case 'contact':
        return (
          <div className="animate-in fade-in duration-200">
            <PageHeader
              pageTitleAr="اتصل بنا | حجز استشارة ومناقشة مشروعك"
              pageTitleEn="Contact Us | Book Free Strategy Session"
              badgeAr="دعم واستجابة سريعة"
              badgeEn="Rapid SLA Response"
              descriptionAr="تواصل مباشرة مع فريق شركة الهبة للتسويق والبرمجة وسيرفرات IPTV عبر الواتساب أو الهاتف، أو أرسل تفاصيل مشروعك لنوافيك بعرض فني واستشاري متكامل."
              descriptionEn="Connect directly with our senior advisors via WhatsApp, direct hotline, or submit your project brief for immediate technical evaluation."
            />
            <ContactSection />
            <SectionBottomGateway current="contact" onNavigate={navigateTo} lang={lang} />
          </div>
        );

      case 'case-studies':
        return (
          <div className="animate-in fade-in duration-200">
            <PageHeader
              pageTitleAr="قصص النجاح وسجل الإنجازات"
              pageTitleEn="Verified Case Studies & Client Success"
              badgeAr="نتائج موثقة بالأرقام"
              badgeEn="Measurable Track Record"
              descriptionAr="اطلع على نماذج حقيقية من مشاريع عملائنا وكيف استطاعت الهبة مضاعفة المبيعات، تصدر نتائج Google، وتطوير منصات رقمية فائقة السرعة."
              descriptionEn="Explore documented success metrics across e-commerce, real estate, healthcare, and enterprise software engineering."
            />
            <CaseStudiesSection />
            <TestimonialsSection />
            <SectionBottomGateway current="case-studies" onNavigate={navigateTo} lang={lang} />
          </div>
        );

      case 'home':
      default:
        return (
          <div className="animate-in fade-in duration-200">
            <Hero />
            <HomeOverview />
            <TestimonialsSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      <Footer />
      <ConsultationModal />

      {/* Floating Fast WhatsApp Action Button */}
      <a
        href={getWhatsAppUrl(
          lang === 'ar'
            ? 'مرحباً شركة الهبة، أرغب بالتواصل الفوري مع أحد ممثلي خدمة العملاء.'
            : 'Hello Al-Hiba, I would like to speak directly with an advisor.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact"
        className="fixed bottom-6 end-6 z-40 w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 fill-slate-950" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
