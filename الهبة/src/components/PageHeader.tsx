import React from 'react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  pageTitleAr: string;
  pageTitleEn: string;
  badgeAr: string;
  badgeEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitleAr,
  pageTitleEn,
  badgeAr,
  badgeEn,
  descriptionAr,
  descriptionEn,
}) => {
  const { lang, navigateTo } = useApp();
  const Chevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <div className="pt-24 pb-8 sm:pt-28 sm:pb-10 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-0 right-1/4 w-96 h-48 bg-emerald-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4" aria-label="Breadcrumb">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-1 hover:text-emerald-500 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الرئيسية' : 'Home'}</span>
          </button>
          <Chevron className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
            {lang === 'ar' ? pageTitleAr : pageTitleEn}
          </span>
        </nav>

        {/* Quiet Kicker */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2 tracking-wide">
          <span>{lang === 'ar' ? badgeAr : badgeEn}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital'}</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-3">
          {lang === 'ar' ? pageTitleAr : pageTitleEn}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {lang === 'ar' ? descriptionAr : descriptionEn}
        </p>
      </div>
    </div>
  );
};
