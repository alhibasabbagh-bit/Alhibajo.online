import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Globe, Tag, FileText, Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';

interface SEOSnippetProps {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  category: string;
}

export const SEOSnippetBadge: React.FC<SEOSnippetProps> = ({
  title,
  description,
  keywords,
  slug,
  category,
}) => {
  const { lang } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayUrl = `https://alhibamarketing.com/${lang}/${category}/${slug}`;
  const fullMetaTitle = `${title} | ${lang === 'ar' ? 'الهبة للتسويق والبرمجة' : 'Al-Hiba Digital'}`;

  const copyMetadata = () => {
    const text = `Title: ${fullMetaTitle}\nDescription: ${description}\nKeywords: ${keywords.join(', ')}\nURL: ${displayUrl}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
        >
          <Search className="w-3.5 h-3.5" />
          <span>
            {isOpen
              ? (lang === 'ar' ? 'إخفاء معاينة السيو والأرشفة' : 'Hide SEO Snippet')
              : (lang === 'ar' ? 'معاينة أرشفة Google والسيو' : 'Preview Google SEO Snippet')}
          </span>
          {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        {isOpen && (
          <button
            type="button"
            onClick={copyMetadata}
            className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'نسخ الميتا تاغ' : 'Copy Meta')}</span>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3 text-start animate-in fade-in duration-200">
          {/* Google Search Result Card Mockup */}
          <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
              <Globe className="w-3 h-3 text-emerald-500 shrink-0" />
              <span className="truncate">{displayUrl}</span>
            </div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer leading-snug line-clamp-1">
              {fullMetaTitle}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
              {description}
            </div>
          </div>

          {/* Keywords Cluster */}
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
              <Tag className="w-3 h-3 text-emerald-500" />
              <span>{lang === 'ar' ? 'الكلمات المفتاحية المستهدفة (SEO Keywords):' : 'Targeted SEO Keywords:'}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {keywords.map((kw, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
