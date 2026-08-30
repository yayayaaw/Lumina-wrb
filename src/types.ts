export interface SignatureMenuItem {
  id: number;
  name: string;
  desc: string;
  price: string;
  img: string;
}

export interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

export interface DetailedMenuItem {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  price: number;
  priceFormatted: string;
  desc: string;
  img: string;
  tags?: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  isChefPick?: boolean;
  origin?: string;
  tastingNotes?: string[];
  temperature?: ('Hot' | 'Iced')[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
  tag?: string;
  favoriteMenu?: string;
  verified?: boolean;
}

export const MENU_CATEGORIES = [
  "Semua",
  "Kopi",
  "Seduh Manual",
  "Non-Kopi",
  "Teh Artisan",
  "Hidangan Utama",
  "Kudapan & Camilan",
  "Kue & Pastry"
] as const;

export type MenuCategory = typeof MENU_CATEGORIES[number];

export interface GalleryPhoto {
  id: number;
  title: string;
  category: 'Interior & Ruang' | 'Barista & Brewing' | 'Artisan Food & Drinks' | 'Coffee Roasting' | 'Outdoor & Vibe';
  img: string;
  desc: string;
  location: string;
}

export interface CareerJob {
  id: string;
  title: string;
  department: 'Bar & Coffee' | 'Kitchen & Pastry' | 'Service & Floor' | 'Marketing & Creative';
  type: string;
  location: string;
  experience: string;
  shortDesc: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  deadline: string;
}

export interface PromoItem {
  title: string;
  desc: string;
  date: string;
  img: string;
  type: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ReservationData {
  name: string;
  phone?: string;
  pax: string;
  date: string;
  time: string;
  seatingArea?: string;
  occasion?: string;
  notes?: string;
}

export type PageType = 'home' | 'menu' | 'gallery' | 'about' | 'career' | 'reservation';

export interface SiteInfoData {
  cafeName: string;
  taglineHero: string;
  subtitleHero: string;
  heroImage: string;
  estYear: string;
  hours: string;
  address: string;
  phone: string;
  waNumber: string;
  email: string;
  mapsUrl: string;
  embedMapsUrl: string;
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  aboutImage: string;
  reservationPolicy?: string;
}

export interface DailyVisitorStat {
  date: string;       // e.g. "Senin, 25 Agt"
  dayName: string;   // e.g. "Sen"
  visitors: number;  // e.g. 184
  orders: number;    // e.g. 92
  peakHour: string;  // e.g. "16:00"
}

export interface MonthlyVisitorStat {
  month: string;     // e.g. "Jan", "Feb"
  visitors: number;  // e.g. 4200
  revenueEstimate: string; // e.g. "Rp 128.500.000"
  growthPercent: number;  // e.g. 12.4
}

export interface VisitorAnalyticsData {
  todayVisitors: number;
  monthVisitors: number;
  avgRating: number;
  totalReviews: number;
  satisfactionRate: number; // e.g. 98%
  peakHours: string;        // e.g. "15:00 - 17:00 & 19:30 - 21:30"
  dailyStats: DailyVisitorStat[];
  monthlyStats: MonthlyVisitorStat[];
}

export interface SocialLinksData {
  primarySocialUrl: string;    // 1 Link Sosial Media Utama (Instagram / Linktree / TikTok)
  primarySocialLabel: string;  // Label tombol e.g. "Instagram Official" atau "Follow Social Media"
  instagram?: string;
  instagramHandle?: string;
  tiktok?: string;
  tiktokHandle?: string;
  facebook?: string;
  facebookName?: string;
  youtube?: string;
  spotify?: string;
}

export interface ThemeSettingsData {
  primaryAccent: string; // e.g. #8C7A6B
  darkColor: string;     // e.g. #2C2A29
  lightBg: string;       // e.g. #FDFBF7
  cardBg: string;        // e.g. #FAF7F2
  presetTheme: string;
}

export interface CmsStoreData {
  siteInfo: SiteInfoData;
  socialLinks: SocialLinksData;
  themeSettings: ThemeSettingsData;
  signatureMenu: SignatureMenuItem[];
  simpleMenu: Record<string, MenuItem[]>;
  promos: PromoItem[];
  gallery: GalleryPhoto[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
  analytics?: VisitorAnalyticsData;
}

