import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  SiteInfoData, 
  SocialLinksData, 
  ThemeSettingsData, 
  CmsStoreData,
  SignatureMenuItem,
  MenuItem,
  PromoItem,
  GalleryPhoto,
  ReviewItem,
  FaqItem
} from '../types';
import {
  CAFE_NAME,
  WA_NUMBER,
  CAFE_ADDRESS,
  CAFE_HOURS,
  CAFE_MAPS_URL,
  CAFE_EMBED_MAPS_URL,
  SOCIAL_LINKS,
  SIGNATURE_MENU,
  SIMPLE_MENU_PREVIEW,
  PROMOS,
  GALLERY_PHOTOS,
  REVIEWS_DATA,
  FAQS
} from '../data/cafeData';

const STORAGE_KEY = 'lumina_roastery_cms_data_v1';

export const DEFAULT_SITE_INFO: SiteInfoData = {
  cafeName: CAFE_NAME,
  taglineHero: "Menghadirkan Kehangatan, Dalam Setiap Seduhan.",
  subtitleHero: "Ruang hangat untuk bersantai, berbincang, dan menikmati sajian kopi spesialti serta hidangan artisan di jantung kota Cirebon.",
  heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80",
  estYear: "Est. 2024 • Cirebon, Jawa Barat",
  hours: CAFE_HOURS,
  address: CAFE_ADDRESS,
  phone: "+62 812-3456-7890",
  waNumber: WA_NUMBER,
  email: "halo@luminaroastery.id",
  mapsUrl: CAFE_MAPS_URL,
  embedMapsUrl: CAFE_EMBED_MAPS_URL,
  aboutTitle: "Cerita di Balik Lumina",
  aboutDesc1: "Berangkat dari kecintaan mendalam terhadap biji kopi nusantara, Lumina Roastery didirikan sebagai ruang temu di mana setiap cangkir memiliki cerita, dan setiap pengunjung disambut hangat layaknya kawan lama.",
  aboutDesc2: "Kami menyangrai biji kopi pilihan langsung dari petani lokal terbaik dengan standar specialty, memadukan teknik seduh presisi dan keramahan yang tulus untuk menemani setiap percakapan bermakna Anda.",
  aboutImage: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80",
  reservationPolicy: "Meja direservasi ditahan maks. 15 menit. Konfirmasi via WhatsApp dalam 5-15 menit."
};

export const DEFAULT_SOCIAL_LINKS: SocialLinksData = {
  primarySocialUrl: "https://instagram.com/luminaroastery",
  primarySocialLabel: "@luminaroastery (Instagram)",
  instagram: SOCIAL_LINKS.instagram || "https://instagram.com/luminaroastery",
  instagramHandle: "@luminaroastery",
  tiktok: SOCIAL_LINKS.tiktok || "https://tiktok.com/@luminaroastery.id",
  tiktokHandle: "@luminaroastery.id",
  facebook: SOCIAL_LINKS.facebook || "https://facebook.com/luminaroastery",
  facebookName: "Lumina Roastery Cirebon",
  youtube: "https://youtube.com/@luminaroastery",
  spotify: "https://spotify.com"
};

export const DEFAULT_THEME: ThemeSettingsData = {
  primaryAccent: "#8C7A6B", // Mocca Coffee
  darkColor: "#2C2A29",     // Dark Roast
  lightBg: "#FDFBF7",       // Milk Cream
  cardBg: "#FAF7F2",        // Latte
  presetTheme: "warm-coffee"
};

interface SiteContextType {
  siteInfo: SiteInfoData;
  socialLinks: SocialLinksData;
  themeSettings: ThemeSettingsData;
  signatureMenu: SignatureMenuItem[];
  simpleMenu: Record<string, MenuItem[]>;
  allMenu: Record<string, MenuItem[]>;
  promos: PromoItem[];
  gallery: GalleryPhoto[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
  isCustomized: boolean;
  updateSiteInfo: (data: Partial<SiteInfoData>) => void;
  updateSocialLinks: (data: Partial<SocialLinksData>) => void;
  updateThemeSettings: (data: Partial<ThemeSettingsData>) => void;
  updateSignatureMenu: (items: SignatureMenuItem[]) => void;
  updateSimpleMenu: (menu: Record<string, MenuItem[]>) => void;
  updatePromos: (items: PromoItem[]) => void;
  updateGallery: (items: GalleryPhoto[]) => void;
  updateReviews: (items: ReviewItem[]) => void;
  updateFaqs: (items: FaqItem[]) => void;
  resetToDefault: () => void;
  exportConfigJson: () => string;
  importConfigJson: (json: string) => boolean;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteInfo, setSiteInfo] = useState<SiteInfoData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.siteInfo) return { ...DEFAULT_SITE_INFO, ...parsed.siteInfo };
      }
    } catch (e) {
      console.warn("Gagal membaca siteInfo dari localStorage", e);
    }
    return DEFAULT_SITE_INFO;
  });

  const [socialLinks, setSocialLinks] = useState<SocialLinksData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.socialLinks) return { ...DEFAULT_SOCIAL_LINKS, ...parsed.socialLinks };
      }
    } catch (e) {
      console.warn("Gagal membaca socialLinks", e);
    }
    return DEFAULT_SOCIAL_LINKS;
  });

  const [themeSettings, setThemeSettings] = useState<ThemeSettingsData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.themeSettings) return { ...DEFAULT_THEME, ...parsed.themeSettings };
      }
    } catch (e) {
      console.warn("Gagal membaca themeSettings", e);
    }
    return DEFAULT_THEME;
  });

  const [signatureMenu, setSignatureMenu] = useState<SignatureMenuItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.signatureMenu && Array.isArray(parsed.signatureMenu)) return parsed.signatureMenu;
      }
    } catch (e) {
      console.warn("Gagal membaca signatureMenu", e);
    }
    return SIGNATURE_MENU;
  });

  const [simpleMenu, setSimpleMenu] = useState<Record<string, MenuItem[]>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.simpleMenu) return parsed.simpleMenu;
      }
    } catch (e) {
      console.warn("Gagal membaca simpleMenu", e);
    }
    return SIMPLE_MENU_PREVIEW;
  });

  const [promos, setPromos] = useState<PromoItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.promos && Array.isArray(parsed.promos)) return parsed.promos;
      }
    } catch (e) {
      console.warn("Gagal membaca promos", e);
    }
    return PROMOS;
  });

  const [gallery, setGallery] = useState<GalleryPhoto[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.gallery && Array.isArray(parsed.gallery)) return parsed.gallery;
      }
    } catch (e) {
      console.warn("Gagal membaca gallery", e);
    }
    return GALLERY_PHOTOS;
  });

  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.reviews && Array.isArray(parsed.reviews)) return parsed.reviews;
      }
    } catch (e) {
      console.warn("Gagal membaca reviews", e);
    }
    return REVIEWS_DATA;
  });

  const [faqs, setFaqs] = useState<FaqItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.faqs && Array.isArray(parsed.faqs)) return parsed.faqs;
      }
    } catch (e) {
      console.warn("Gagal membaca faqs", e);
    }
    return FAQS;
  });

  // Save all to localStorage on changes
  useEffect(() => {
    try {
      const storeData: CmsStoreData = {
        siteInfo,
        socialLinks,
        themeSettings,
        signatureMenu,
        simpleMenu,
        promos,
        gallery,
        reviews,
        faqs
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storeData));
    } catch (e) {
      console.error("Gagal menyimpan ke localStorage", e);
    }
  }, [siteInfo, socialLinks, themeSettings, signatureMenu, simpleMenu, promos, gallery, reviews, faqs]);

  // Apply dynamic CSS variables for theme customization
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary-accent', themeSettings.primaryAccent || '#8C7A6B');
    root.style.setProperty('--color-dark', themeSettings.darkColor || '#2C2A29');
    root.style.setProperty('--color-light-bg', themeSettings.lightBg || '#FDFBF7');
    root.style.setProperty('--color-card-bg', themeSettings.cardBg || '#FAF7F2');
  }, [themeSettings]);

  const updateSiteInfo = (data: Partial<SiteInfoData>) => {
    setSiteInfo(prev => ({ ...prev, ...data }));
  };

  const updateSocialLinks = (data: Partial<SocialLinksData>) => {
    setSocialLinks(prev => ({ ...prev, ...data }));
  };

  const updateThemeSettings = (data: Partial<ThemeSettingsData>) => {
    setThemeSettings(prev => ({ ...prev, ...data }));
  };

  const updateSignatureMenu = (items: SignatureMenuItem[]) => {
    setSignatureMenu(items);
  };

  const updateSimpleMenu = (menu: Record<string, MenuItem[]>) => {
    setSimpleMenu(menu);
  };

  const updatePromos = (items: PromoItem[]) => {
    setPromos(items);
  };

  const updateGallery = (items: GalleryPhoto[]) => {
    setGallery(items);
  };

  const updateReviews = (items: ReviewItem[]) => {
    setReviews(items);
  };

  const updateFaqs = (items: FaqItem[]) => {
    setFaqs(items);
  };

  const resetToDefault = () => {
    setSiteInfo(DEFAULT_SITE_INFO);
    setSocialLinks(DEFAULT_SOCIAL_LINKS);
    setThemeSettings(DEFAULT_THEME);
    setSignatureMenu(SIGNATURE_MENU);
    setSimpleMenu(SIMPLE_MENU_PREVIEW);
    setPromos(PROMOS);
    setGallery(GALLERY_PHOTOS);
    setReviews(REVIEWS_DATA);
    setFaqs(FAQS);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportConfigJson = () => {
    const data: CmsStoreData = {
      siteInfo,
      socialLinks,
      themeSettings,
      signatureMenu,
      simpleMenu,
      promos,
      gallery,
      reviews,
      faqs
    };
    return JSON.stringify(data, null, 2);
  };

  const importConfigJson = (json: string): boolean => {
    try {
      const parsed = JSON.parse(json);
      if (parsed.siteInfo) setSiteInfo(parsed.siteInfo);
      if (parsed.socialLinks) setSocialLinks(parsed.socialLinks);
      if (parsed.themeSettings) setThemeSettings(parsed.themeSettings);
      if (parsed.signatureMenu) setSignatureMenu(parsed.signatureMenu);
      if (parsed.simpleMenu) setSimpleMenu(parsed.simpleMenu);
      if (parsed.promos) setPromos(parsed.promos);
      if (parsed.gallery) setGallery(parsed.gallery);
      if (parsed.reviews) setReviews(parsed.reviews);
      if (parsed.faqs) setFaqs(parsed.faqs);
      return true;
    } catch (e) {
      console.error("Gagal mengimpor JSON", e);
      return false;
    }
  };

  const isCustomized = Boolean(localStorage.getItem(STORAGE_KEY));

  return (
    <SiteContext.Provider
      value={{
        siteInfo,
        socialLinks,
        themeSettings,
        signatureMenu,
        simpleMenu,
        allMenu: simpleMenu || SIMPLE_MENU_PREVIEW || {},
        promos,
        gallery,
        reviews,
        faqs,
        isCustomized,
        updateSiteInfo,
        updateSocialLinks,
        updateThemeSettings,
        updateSignatureMenu,
        updateSimpleMenu,
        updatePromos,
        updateGallery,
        updateReviews,
        updateFaqs,
        resetToDefault,
        exportConfigJson,
        importConfigJson
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
