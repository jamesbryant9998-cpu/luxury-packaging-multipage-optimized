'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LanguageCode = 'EN' | 'FR' | 'DE' | 'ES' | 'IT' | 'AR' | 'TR' | 'JP' | 'ZH';

export interface Language {
  name: string;
  code: LanguageCode;
  flag: string;
}

export const languages: Language[] = [
  { name: 'English', code: 'EN', flag: '🇺🇸' },
  { name: 'Français', code: 'FR', flag: '🇫🇷' },
  { name: 'Deutsch', code: 'DE', flag: '🇩🇪' },
  { name: 'Español', code: 'ES', flag: '🇪🇸' },
  { name: 'Italiano', code: 'IT', flag: '🇮🇹' },
  { name: 'العربية', code: 'AR', flag: '🇸🇦' },
  { name: 'Türkçe', code: 'TR', flag: '🇹🇷' },
  { name: '日本語', code: 'JP', flag: '🇯🇵' },
  { name: '中文', code: 'ZH', flag: '🇨🇳' },
];

interface TranslationContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(languages[0]);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Check local storage for saved language
    const savedLangCode = localStorage.getItem('site_lang');
    if (savedLangCode) {
      const found = languages.find(l => l.code === savedLangCode);
      if (found) setLanguageState(found);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('site_lang', lang.code);
    setIsRTL(lang.code === 'AR');
    // Force direction on body for RTL
    document.dir = lang.code === 'AR' ? 'rtl' : 'ltr';
  };

  // Basic dictionary system
  // To keep it clean, we'll import dictionaries or define them here for key UI
  const dictionaries: Record<LanguageCode, any> = {
    EN: {
      nav_products: "Products",
      nav_about: "About Us",
      nav_resources: "Resources",
      nav_news: "News",
      nav_blog: "Blog",
      hero_title: "Premium Custom Packaging Manufacturer",
      hero_desc: "FSC & ISO certified factory specializing in luxury magnetic gift boxes, rigid boxes, and premium paper bags with global DDP fulfillment.",
      btn_quote: "Get a Free Quote",
      btn_whatsapp: "Chat on WhatsApp",
      section_products: "Our Premium Collection",
      section_resources: "Custom Gift Box Resources",
      section_faq: "Frequently Asked Questions",
      footer_rights: "All Rights Reserved."
    },
    ZH: {
      nav_products: "产品中心",
      nav_about: "关于我们",
      nav_resources: "采购资源",
      nav_news: "新闻动态",
      nav_blog: "行业博客",
      hero_title: "顶级高定包装制造商",
      hero_desc: "FSC 与 ISO 认证工厂，专注于轻奢磁吸礼盒、硬盒及高档纸袋，提供全球 DDP 交付服务。",
      btn_quote: "获取免费报价",
      btn_whatsapp: "WhatsApp 咨询",
      section_products: "核心产品系列",
      section_resources: "高定礼盒资源中心",
      section_faq: "常见问题解答",
      footer_rights: "版权所有。"
    },
    FR: {
      nav_products: "Produits",
      nav_about: "À Propos",
      nav_resources: "Ressources",
      nav_news: "Actualités",
      nav_blog: "Blog",
      hero_title: "Fabricant d'Emballages de Luxe Sur Mesure",
      hero_desc: "Usine certifiée FSC et ISO spécialisée dans les coffrets cadeaux magnétiques, les boîtes rigides et les sacs en papier de qualité supérieure.",
      btn_quote: "Obtenir un Devis Gratuit",
      btn_whatsapp: "Discuter sur WhatsApp",
      section_products: "Notre Collection Premium",
      section_resources: "Guides d'Achat d'Emballages",
      section_faq: "Questions Fréquemment Posées",
      footer_rights: "Tous droits réservés."
    },
    DE: {
      nav_products: "Produkte",
      nav_about: "Über Uns",
      nav_resources: "Ressourcen",
      nav_news: "News",
      nav_blog: "Blog",
      hero_title: "Premium-Hersteller für maßgeschneiderte Verpackungen",
      hero_desc: "FSC- und ISO-zertifizierte Fabrik, spezialisiert auf luxuriöse Magnet-Geschenkboxen, Hartkartonagen und hochwertige Papiertüten.",
      btn_quote: "Kostenloses Angebot anfordern",
      btn_whatsapp: "Auf WhatsApp chatten",
      section_products: "Unsere Premium-Kollektion",
      section_resources: "Einkaufsführer für Geschenkboxen",
      section_faq: "Häufig gestellte Fragen",
      footer_rights: "Alle Rechte vorbehalten."
    },
    ES: {
      nav_products: "Productos",
      nav_about: "Sobre Nosotros",
      nav_resources: "Recursos",
      nav_news: "Noticias",
      nav_blog: "Blog",
      hero_title: "Fabricante de Envases de Lujo a Medida",
      hero_desc: "Fábrica certificada FSC e ISO especializada en cajas de regalo magnéticas, cajas rígidas y bolsas de papel premium.",
      btn_quote: "Obtener Presupuesto Gratis",
      btn_whatsapp: "Chatear por WhatsApp",
      section_products: "Nuestra Colección Premium",
      section_resources: "Recursos de Cajas de Regalo",
      section_faq: "Preguntas Frecuentes",
      footer_rights: "Todos los derechos reservados."
    },
    IT: {
      nav_products: "Prodotti",
      nav_about: "Chi Siamo",
      nav_resources: "Risorse",
      nav_news: "Notizie",
      nav_blog: "Blog",
      hero_title: "Produttore di Imballaggi di Lusso su Misura",
      hero_desc: "Fabbrica certificata FSC e ISO specializzata in scatole regalo magnetiche, scatole rigide e sacchetti di carta premium.",
      btn_quote: "Ottieni un Preventivo Gratuito",
      btn_whatsapp: "Chatta su WhatsApp",
      section_products: "La Nostra Collezione Premium",
      section_resources: "Risorse per Scatole Regalo",
      section_faq: "Domande Frequenti",
      footer_rights: "Tutti i diritti riservati."
    },
    AR: {
      nav_products: "منتجات",
      nav_about: "معلومات عنا",
      nav_resources: "موارد",
      nav_news: "أخبار",
      nav_blog: "مدونة",
      hero_title: "الشركة المصنعة للتغليف المخصص المتميز",
      hero_desc: "مصنع معتمد من FSC وISO متخصص في علب الهدايا المغناطيسية الفاخرة، والعلب الصلبة، والأكياس الورقية المتميزة.",
      btn_quote: "احصل على اقتباس مجاني",
      btn_whatsapp: "الدردشة على واتساب",
      section_products: "مجموعتنا المتميزة",
      section_resources: "موارد علب الهدايا المخصصة",
      section_faq: "الأسئلة الشائعة",
      footer_rights: "كل الحقوق محفوظة."
    },
    TR: {
      nav_products: "Ürünler",
      nav_about: "Hakkımızda",
      nav_resources: "Kaynaklar",
      nav_news: "Haberler",
      nav_blog: "Blog",
      hero_title: "Premium Özel Ambalaj Üreticisi",
      hero_desc: "Lüks mıknatıslı hediye kutuları, sert kutular ve birinci sınıf kağıt torbalar konusunda uzmanlaşmış FSC ve ISO sertifikalı fabrika.",
      btn_quote: "Ücretsiz Teklif Al",
      btn_whatsapp: "WhatsApp'ta Sohbet Et",
      section_products: "Premium Koleksiyonumuz",
      section_resources: "Özel Hediye Kutusu Kaynakları",
      section_faq: "Sıkça Sorulan Sorular",
      footer_rights: "Tüm hakları saklıdır."
    },
    JP: {
      nav_products: "製品",
      nav_about: "会社概要",
      nav_resources: "リソース",
      nav_news: "ニュース",
      nav_blog: "ブログ",
      hero_title: "高級カスタムパッケージメーカー",
      hero_desc: "磁気ギフトボックス、リジッドボックス、高級紙袋を専門とするFSCおよびISO認証工場。世界規模のDDP配送に対応。",
      btn_quote: "無料見積もりを依頼する",
      btn_whatsapp: "WhatsAppで相談する",
      section_products: "プレミアムコレクション",
      section_resources: "カスタムギフトボックスガイド",
      section_faq: "よくある質問",
      footer_rights: "著作権所有。"
    }
  };

  const t = (key: string) => {
    return dictionaries[language.code][key] || dictionaries['EN'][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
