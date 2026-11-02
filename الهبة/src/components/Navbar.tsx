import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import alhibaLogo from '../alhiba-logo.jpg';
import {
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Home,
  Briefcase,
  Search,
  Tv,
  Info,
  PhoneCall,
} from 'lucide-react';

import { PageId } from '../types';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, theme, toggleTheme, openConsultation, currentPage, navigateTo } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      id: 'home' as PageId,
      labelAr: 'الرئيسية',
      labelEn: 'Home',
      icon: Home,
    },
    {
      id: 'services' as PageId,
      labelAr: 'الخدمات',
      labelEn: 'Services',
      icon: Briefcase,
    },
    {
      id: 'competitor-tool' as PageId,
      labelAr: 'أداة تحليل المنافسين',
      labelEn: 'Competitor Analysis',
      icon: Search,
    },
    {
      id: 'iptv' as PageId,
      labelAr: 'سيرفرات IPTV',
      labelEn: 'IPTV Servers',
      icon: Tv,
    },
    {
      id: 'about' as PageId,
      labelAr: 'من نحن',
      labelEn: 'About Us',
      icon: Info,
    },
    {
      id: 'contact' as PageId,
      labelAr: 'اتصل بنا',
      labelEn: 'Contact Us',
      icon: PhoneCall,
    },
  ];

  // Navigate to page directly without scrolling down on one long page
  const handleNavClick = (pageId: PageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-xl shadow-black/40">
      {/* Top Main Unified Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Brand Wordmark & Official Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-start cursor-pointer"
            aria-label="Al-Hiba Home"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/40 p-0.5 bg-slate-900 group-hover:border-emerald-400 transition-colors shadow-md shadow-emerald-500/20">
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
            <div className="flex flex-col text-start">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital'}
              </span>
              <span className="text-[10px] font-medium text-emerald-400 tracking-wider font-mono">
                {lang === 'ar' ? 'ALHIBA MARKETING & DEV' : 'MARKETING & DEVELOPMENT'}
              </span>
            </div>
          </button>

          {/* Main Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 ring-1 ring-emerald-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                  <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-800 bg-slate-900/80 text-slate-200 hover:border-emerald-500 transition-colors whitespace-nowrap"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Dark/Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-slate-300 hover:text-emerald-400 rounded-lg border border-slate-800 bg-slate-900/80 transition-colors"
              title={theme === 'dark' ? (lang === 'ar' ? 'تفعيل الوضع النهاري' : 'Switch to Light Mode') : (lang === 'ar' ? 'تفعيل الوضع الليلي' : 'Switch to Dark Mode')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-300" />
              )}
            </button>

            {/* Consultation Action Button */}
            <button
              onClick={() => openConsultation({ type: 'consultation' })}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <span>{lang === 'ar' ? 'استشارة مجانية' : 'Consultation'}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
            </button>

            {/* Mobile Drawer Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-emerald-400 rounded-lg border border-slate-800 bg-slate-900/80 transition-colors"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-emerald-500/30 bg-slate-950/98 backdrop-blur-2xl px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 text-start">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPage === link.id;

              return (
                <button
                  key={`drawer-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors w-full text-start cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-emerald-400'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                  <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                </button>
              );
            })}

            <div className="pt-3 mt-1 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultation({ type: 'consultation' });
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-xl bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'ar' ? 'طلب استشارة مجانية الآن' : 'Book Free Consultation'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

