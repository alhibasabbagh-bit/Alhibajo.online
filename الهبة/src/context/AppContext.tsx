import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, Theme, PageId } from '../types';

interface ConsultationRequest {
  serviceId?: string;
  serviceTitle?: string;
  planId?: string;
  planTitle?: string;
  type: 'service' | 'iptv' | 'consultation' | 'audit';
}

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  navigateTo: (page: PageId) => void;
  isConsultationOpen: boolean;
  openConsultation: (req?: ConsultationRequest) => void;
  closeConsultation: () => void;
  consultationData: ConsultationRequest | null;
  getWhatsAppUrl: (messageText?: string) => string;
}

const parseHashToPage = (): PageId => {
  if (typeof window === 'undefined') return 'home';
  const cleanHash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
  const validPages: PageId[] = [
    'home',
    'services',
    'competitor-tool',
    'iptv',
    'about',
    'calculator',
    'contact',
    'case-studies',
  ];
  if (cleanHash === 'competitor' || cleanHash === 'audit') return 'competitor-tool';
  if (cleanHash === 'servers') return 'iptv';
  if (cleanHash === 'calc') return 'calculator';
  if (validPages.includes(cleanHash as PageId)) {
    return cleanHash as PageId;
  }
  return 'home';
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('alhiba_lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('alhiba_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Dark is default per luxury agency brand
  });

  const [currentPage, setCurrentPageState] = useState<PageId>(parseHashToPage);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationData, setConsultationData] = useState<ConsultationRequest | null>(null);

  // Sync hash changes (e.g. browser back/forward buttons or direct URL change)
  useEffect(() => {
    const handleHashChange = () => {
      const targetPage = parseHashToPage();
      setCurrentPageState(targetPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPageState(page);
    if (page === 'home') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
      }
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    localStorage.setItem('alhiba_lang', lang);
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('alhiba_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openConsultation = (req?: ConsultationRequest) => {
    setConsultationData(req || { type: 'consultation' });
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationData(null);
  };

  const getWhatsAppUrl = (messageText?: string) => {
    // Al-Hiba Official contact number: 00962788614245
    const phone = '962788614245';
    const defaultMsg = lang === 'ar'
      ? 'مرحباً شركة الهبة للتسويق والبرمجة، أرغب في الاستفسار عن خدماتكم وحجز استشارة.'
      : 'Hello Al-Hiba Digital, I would like to inquire about your services and book a consultation.';
    const text = encodeURIComponent(messageText || defaultMsg);
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
        currentPage,
        setCurrentPage: setCurrentPageState,
        navigateTo,
        isConsultationOpen,
        openConsultation,
        closeConsultation,
        consultationData,
        getWhatsAppUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
