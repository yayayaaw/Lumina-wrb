import { 
  SignatureMenuItem, 
  MenuItem, 
  DetailedMenuItem, 
  GalleryPhoto, 
  CareerJob, 
  PromoItem, 
  FaqItem,
  ReviewItem
} from '../types';

export const CAFE_NAME = "Lumina Roastery";
export const WA_NUMBER = "6281234567890"; // Nomor WhatsApp reservasi & bantuan
export const CAFE_ADDRESS = "Jl. Kesambi Raya No. 123, Cirebon, Jawa Barat";
export const CAFE_HOURS = "Senin - Minggu: 08:00 - 23:00 WIB";
export const CAFE_MAPS_URL = "https://maps.google.com/?q=Jl.+Kesambi+Raya+Cirebon";
export const CAFE_EMBED_MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d108.45596859508542!3d-6.735165985854611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee2649e6f5647%3A0x6b6c00d41eb8ab40!2sCirebon%2C%20Cirebon%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/luminaroastery",
  facebook: "https://facebook.com/luminaroastery",
  tiktok: "https://tiktok.com/@luminaroastery.id",
  spotify: "https://spotify.com",
  youtube: "https://youtube.com"
};

export const SIGNATURE_MENU: SignatureMenuItem[] = [
  {
    id: 1,
    name: "Lumina Signature Latte",
    desc: "Espresso house blend kami dipadukan dengan susu oat creamy dan sentuhan sirup vanilla madu buatan sendiri. Disajikan hangat atau dingin.",
    price: "45.000",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Truffle Mushroom Risotto",
    desc: "Beras arborio Italia dimasak perlahan dengan kaldu jamur, disajikan dengan jamur shimeji panggang, keju parmesan, dan minyak truffle murni.",
    price: "85.000",
    img: "https://images.unsplash.com/photo-1633337474564-1d94fa51752b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Earl Grey Burnt Cheesecake",
    desc: "Cheesecake bergaya Basque dengan tekstur lembut di dalam dan karamelisasi di luar, diinfus dengan teh Earl Grey premium.",
    price: "55.000",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
  }
];

export const SIMPLE_MENU_PREVIEW: Record<string, MenuItem[]> = {
  "Kopi": [
    { name: "Espresso Single / Double", price: "25k / 30k", desc: "100% Arabika House Blend Sangrai Mandiri" },
    { name: "Americano", price: "35k", desc: "Espresso dengan air mineral dingin / panas" },
    { name: "Café Latte", price: "40k", desc: "Espresso pekat, susu lembut, microfoam halus" },
    { name: "Cappuccino", price: "40k", desc: "Keseimbangan espresso dengan foam susu tebal" },
    { name: "Spanish Cortado", price: "38k", desc: "Rasio 1:1 double espresso dan susu hangat" },
  ],
  "Seduh Manual": [
    { name: "V60 Gayo Pantan Musara", price: "48k", desc: "Aroma buah manis stroberi & bunga melati" },
    { name: "Origami Dripper Gunung Halu", price: "52k", desc: "Proses natural rasa pisang madu lembut" },
    { name: "Aeropress Kintamani", price: "45k", desc: "Body tebal dengan keasaman jeruk segar" },
  ],
  "Non-Kopi": [
    { name: "Artisan Uji Matcha Latte", price: "48k", desc: "Matcha seremonial asli Kyoto dengan susu creamy" },
    { name: "Valrhona 70% Dark Chocolate", price: "45k", desc: "Cokelat hitam murni Prancis & susu hangat" },
    { name: "Yuzu Osmanthus Mocktail", price: "44k", desc: "Sari buah yuzu asam segar, bunga osmanthus & soda" },
  ],
  "Teh Artisan": [
    { name: "Silver Needle White Tea", price: "42k", desc: "Pucuk daun teh putih murni dari Ciwidey" },
    { name: "Chamomile Lavender Blend", price: "38k", desc: "Racikan kuncup chamomile & lavender penenang" },
  ],
  "Hidangan Utama": [
    { name: "Truffle Mushroom Risotto", price: "85k", desc: "Beras arborio Italia, minyak truffle & parmigiano" },
    { name: "Wagyu Meltique Beef Burger", price: "95k", desc: "150g patty wagyu, brioche bun mentega & kentang" },
    { name: "Salmon Aglio Olio Peperoncino", price: "88k", desc: "Spaghetti al dente, salmon panggang & minyak zaitun" },
    { name: "Chicken Nanban with Rice", price: "70k", desc: "Ayam renyah saus nanban Miyazaki & saus tartar" },
  ],
  "Kudapan & Camilan": [
    { name: "Truffle Parmesan Fries", price: "42k", desc: "Kentang goreng minyak truffle & saus aioli gurih" },
    { name: "Crispy Calamari Rings", price: "48k", desc: "Cumi goreng tepung rempah togarashi & mayo lemon" },
  ],
  "Kue & Pastry": [
    { name: "Earl Grey Burnt Cheesecake", price: "55k", desc: "Cheesecake Basque lumer aroma teh bergamot" },
    { name: "Tiramisu al Mascarpone", price: "52k", desc: "Ladyfingers celup espresso & krim mascarpone" },
    { name: "Almond Butter Croissant", price: "38k", desc: "Croissant mentega Prancis isi krim almond panggang" },
    { name: "Vanilla Bean Pannacotta", price: "45k", desc: "Pannacotta vanilla Madagaskar saus selai beri segar" },
  ]
};

export const ALL_MENU = SIMPLE_MENU_PREVIEW;

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507133750070-4ed014260029?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
];

// Rich customer reviews dataset
export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Amanda Radhitya",
    role: "Pencinta Kopi & Remote Worker",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 hari yang lalu",
    comment: "Suasananya sangat menenangkan, sempurna untuk membaca buku maupun fokus kerja laptop. Kopinya luar biasa nikmat, terutama Lumina Signature Latte yang balance banget antara manis madu dan oat-nya!",
    tag: "Signature Latte",
    favoriteMenu: "Lumina Signature Latte",
    verified: true
  },
  {
    id: "rev-2",
    name: "Dimas Arya Pratama",
    role: "Software Engineer di Cirebon",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "4 hari yang lalu",
    comment: "Tempat WFC paling nyaman di Cirebon saat ini. Stopkontak tersedia di hampir semua meja, WiFi kencang tanpa lag, dan baristanya ramah menjelaskan profil beans V60 dengan detail.",
    tag: "WFC Nyaman",
    favoriteMenu: "Manual Brew V60 Gayo",
    verified: true
  },
  {
    id: "rev-3",
    name: "Clarissa Sutedja",
    role: "Food & Lifestyle Reviewer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 minggu yang lalu",
    comment: "Truffle Mushroom Risotto di sini beneran setara restoran fine dining! Porsinya pas, creamy tapi nggak bikin eneg. Ditutup sama Earl Grey Burnt Cheesecake yang lumer lembut di lidah. 10/10!",
    tag: "Makanan Lezat",
    favoriteMenu: "Truffle Mushroom Risotto",
    verified: true
  },
  {
    id: "rev-4",
    name: "Rian Hendrawan",
    role: "Penggemar Manual Brew",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 minggu yang lalu",
    comment: "Biji kopi Gunung Halu Pink Banana-nya beneran keluar rasa manis pisang dan madunya. Roasting in-house mereka sangat bersih dan konsisten. Slow bar experience terbaik!",
    tag: "Specialty Coffee",
    favoriteMenu: "Origami Dripper Halu",
    verified: true
  },
  {
    id: "rev-5",
    name: "Nabila Zahrani",
    role: "Arsitek & Desainer Interior",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 minggu yang lalu",
    comment: "Pencahayaan alami dan pemilihan material kayu di kafe ini sangat estetis dan hangat. Duduk di area taman kaca saat sore hari suasananya magical banget untuk melepas penat.",
    tag: "Interior Estetis",
    favoriteMenu: "Artisan Uji Matcha Latte",
    verified: true
  },
  {
    id: "rev-6",
    name: "Budi Santoso & Keluarga",
    role: "Pengunjung Weekend",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 minggu yang lalu",
    comment: "Reservasi meja lewat web-nya praktis banget dan langsung dikonfirmasi tim kafe via WA. Makanan datang cepat, tempat bersih, dan anak-anak suka banget sama kentang truffle serta burger wagyu-nya.",
    tag: "Family Friendly",
    favoriteMenu: "Wagyu Meltique Burger",
    verified: true
  },
  {
    id: "rev-7",
    name: "Farhan Hakim",
    role: "Mahasiswa Tingkat Akhir",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "3 minggu yang lalu",
    comment: "Sering banget nugas skripsi dari siang sampai malam di sini. Playlist musiknya tenang dan tidak bising. Pilihan Americano Cold Foam-nya bikin seger seharian.",
    tag: "Tempat Nugas",
    favoriteMenu: "Americano Cold Foam",
    verified: true
  },
  {
    id: "rev-8",
    name: "dr. Jessica Tanuwidjaja",
    role: "Dokter Gigi & Health Enthusiast",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 bulan yang lalu",
    comment: "Pilihan teh artisan Silver Needle-nya sangat premium dan wangi. Senang sekali ada opsi susu oat untuk latte tanpa biaya tambahan yang berlebihan. Higienitas tempatnya top notch.",
    tag: "Artisan Tea",
    favoriteMenu: "Silver Needle White Tea",
    verified: true
  },
  {
    id: "rev-9",
    name: "Eko Wahyudi",
    role: "Komunitas Fotografi Cirebon",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 bulan yang lalu",
    comment: "Setiap sudut cafe ini fotogenik! Dari bar depan yang elegan sampai lorong taman belakang. Menu pastry-nya juga disajikan cantik dengan plating yang rapi.",
    tag: "Spot Foto Estetis",
    favoriteMenu: "Tiramisu al Mascarpone",
    verified: true
  },
  {
    id: "rev-10",
    name: "Maya Indrawati",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 bulan yang lalu",
    comment: "Private meeting room mereka sangat representatif untuk ketemu klien bisnis. Smart TV-nya jernih, AC dingin, dan pelayanannya profesional tanpa mengganggu jalannya meeting.",
    tag: "Meeting Room",
    favoriteMenu: "Spanish Cortado",
    verified: true
  }
];


export const DETAILED_MENU: DetailedMenuItem[] = [
  // KOPI
  {
    id: "c1",
    name: "Lumina Signature Latte",
    category: "Kopi",
    price: 45000,
    priceFormatted: "Rp 45.000",
    desc: "Signature house blend espresso dengan sentuhan madu hutan liar, susu oat artisanal, dan sedikit serpihan sea salt di atas foam.",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    isChefPick: true,
    origin: "Gunung Halu & Kintamani Blend",
    tastingNotes: ["Vanilla Honey", "Caramel", "Creamy Velvety"],
    temperature: ["Hot", "Iced"]
  },
  {
    id: "c2",
    name: "Spanish Cortado",
    category: "Kopi",
    price: 38000,
    priceFormatted: "Rp 38.000",
    desc: "Keseimbangan sempurna 1:1 antara double ristretto pekat dengan susu hangat bertekstur microfoam halus dalam gelas gibraltar.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    origin: "Toraja Sapan Single Origin",
    tastingNotes: ["Dark Chocolate", "Spices", "Nutty"],
    temperature: ["Hot"]
  },
  {
    id: "c3",
    name: "Classic Flat White",
    category: "Kopi",
    price: 40000,
    priceFormatted: "Rp 40.000",
    desc: "Double espresso berpadu dengan susu steamed lembut dengan lapisan microfoam tipis khas Melbourne style.",
    img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    origin: "House Blend Eclipse",
    tastingNotes: ["Milk Chocolate", "Roasted Hazelnut"],
    temperature: ["Hot", "Iced"]
  },
  {
    id: "c4",
    name: "Dirty Chai Espresso",
    category: "Kopi",
    price: 46000,
    priceFormatted: "Rp 46.000",
    desc: "Infusi rempah chai oriental asli dipadukan dengan shot espresso pekat dan susu almond gurih.",
    img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    origin: "Sumatra Kerinci",
    tastingNotes: ["Cinnamon", "Cardamom", "Warm Espresso"],
    temperature: ["Hot", "Iced"]
  },
  {
    id: "c5",
    name: "Vanilla Cold Foam Iced Americano",
    category: "Kopi",
    price: 42000,
    priceFormatted: "Rp 42.000",
    desc: "Americano segar dengan topping lapisan busa dingin manis beraroma vanilla bean murni.",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    origin: "Flores Bajawa",
    tastingNotes: ["Crisp Citrus", "Sweet Vanilla", "Refreshing"],
    temperature: ["Iced"]
  },

  // SEDUH MANUAL
  {
    id: "mb1",
    name: "V60 - Gayo Pantan Musara",
    category: "Seduh Manual",
    price: 48000,
    priceFormatted: "Rp 48.000",
    desc: "Proses Anaerobic Natural menghasilkan profil rasa buah yang luar biasa cerah, manis, dan aromatik.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    isChefPick: true,
    origin: "Aceh Gayo (1.600 mdpl)",
    tastingNotes: ["Strawberry Jam", "Jasmine", "Sweet Plum"],
    temperature: ["Hot", "Iced"]
  },
  {
    id: "mb2",
    name: "Origami Dripper - West Java Halu Pink Banana",
    category: "Seduh Manual",
    price: 52000,
    priceFormatted: "Rp 52.000",
    desc: "Kopi fermentasi inovatif lokal dari Gunung Halu Jawa Barat dengan aroma pisang manis dan madu bunga.",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    origin: "Gunung Halu, Jawa Barat",
    tastingNotes: ["Ripe Banana", "Honeycomb", "Bergamot"],
    temperature: ["Hot"]
  },
  {
    id: "mb3",
    name: "Aeropress - Bali Kintamani Carbonic Maceration",
    category: "Seduh Manual",
    price: 45000,
    priceFormatted: "Rp 45.000",
    desc: "Ekstraksi bertekanan lembut menghasilkan body yang tebal dan keasaman jeruk manis khas Kintamani.",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    origin: "Kintamani, Bali",
    tastingNotes: ["Blood Orange", "Dark Caramel", "Black Tea"],
    temperature: ["Hot", "Iced"]
  },

  // NON-KOPI
  {
    id: "nc1",
    name: "Artisan Kyoto Uji Matcha Latte",
    category: "Non-Kopi",
    price: 48000,
    priceFormatted: "Rp 48.000",
    desc: "100% Ceremonial grade Uji Matcha di-whisk tradisional dengan chasen dan dicampur susu segar creamy.",
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    origin: "Uji, Kyoto, Jepang",
    tastingNotes: ["Umami", "Smooth Grassy", "Silky Milk"],
    temperature: ["Hot", "Iced"]
  },
  {
    id: "nc2",
    name: "Valrhona 70% Dark Chocolate",
    category: "Non-Kopi",
    price: 45000,
    priceFormatted: "Rp 45.000",
    desc: "Cokelat hitam premium Valrhona Prancis dilelehkan perlahan dengan steamed milk dan sentuhan kayu manis.",
    img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    origin: "Single Estate Cocoa",
    tastingNotes: ["Rich Cocoa", "Roasted Almond", "Velvety"],
    temperature: ["Hot", "Iced"]
  },
  {
    id: "nc3",
    name: "Yuzu Osmanthus Sparkling Mocktail",
    category: "Non-Kopi",
    price: 44000,
    priceFormatted: "Rp 44.000",
    desc: "Campuran sari jeruk yuzu Jepang, sirup bunga osmanthus harum, soda sparkling dingin, dan daun mint segar.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    isChefPick: true,
    tastingNotes: ["Bright Citrus", "Floral Osmanthus", "Fizzy"],
    temperature: ["Iced"]
  },

  // TEH ARTISAN
  {
    id: "t1",
    name: "Silver Needle White Tea",
    category: "Teh Artisan",
    price: 42000,
    priceFormatted: "Rp 42.000",
    desc: "Pucuk daun teh putih murni dari kebun dataran tinggi Ciwidey, aroma manis lembut dengan antioksidan tinggi.",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    origin: "Ciwidey, Jawa Barat",
    tastingNotes: ["Honeydew", "Orchid Blossom", "Mellow"],
    temperature: ["Hot"]
  },
  {
    id: "t2",
    name: "Chamomile Lavender Sleepy Brew",
    category: "Teh Artisan",
    price: 38000,
    priceFormatted: "Rp 38.000",
    desc: "Kuncup chamomile Mesir utuh dipadukan dengan bunga lavender Prancis organik, bebas kafein dan menenangkan.",
    img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Apple Honey", "Calming Herbal", "Floral"],
    temperature: ["Hot"]
  },

  // HIDANGAN UTAMA
  {
    id: "mc1",
    name: "Truffle Mushroom Risotto",
    category: "Hidangan Utama",
    price: 85000,
    priceFormatted: "Rp 85.000",
    desc: "Beras arborio Italia dimasak perlahan dengan kaldu jamur pekat, disajikan dengan jamur shimeji panggang, parmigiano reggiano, dan minyak truffle murni.",
    img: "https://images.unsplash.com/photo-1633337474564-1d94fa51752b?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    isChefPick: true,
    tastingNotes: ["Earthy Truffle", "Creamy Rich", "Savory Umami"]
  },
  {
    id: "mc2",
    name: "Wagyu Meltique Beef Burger",
    category: "Hidangan Utama",
    price: 95000,
    priceFormatted: "Rp 95.000",
    desc: "Patty wagyu 150g juicy, brioche bun panggang mentega, bawang bombay karamel, keju cheddar leleh, dan kentang goreng rosemary.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    tastingNotes: ["Juicy Beef", "Smoky Sweet", "Crispy Fries"]
  },
  {
    id: "mc3",
    name: "Salmon Aglio Olio Peperoncino",
    category: "Hidangan Utama",
    price: 88000,
    priceFormatted: "Rp 88.000",
    desc: "Spaghetti al dente ditumis dengan minyak zaitun extra virgin, bawang putih iris, serpihan cabai, dan potongan salmon panggang renyah.",
    img: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Garlic Herb", "Zesty Spice", "Flaky Salmon"]
  },
  {
    id: "mc4",
    name: "Chicken Nanban with Tartar & Rice",
    category: "Hidangan Utama",
    price: 70000,
    priceFormatted: "Rp 70.000",
    desc: "Paha ayam renyah dilumuri saus nanban manis gurih khas Miyazaki, disajikan dengan saus tartar homemade dan nasi Jepang hangat.",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    isBestSeller: false,
    tastingNotes: ["Crispy Tangy", "Rich Egg Tartar", "Comforting"]
  },

  // KUDAPAN & CAMILAN
  {
    id: "lb1",
    name: "Truffle Parmesan French Fries",
    category: "Kudapan & Camilan",
    price: 42000,
    priceFormatted: "Rp 42.000",
    desc: "Kentang goreng renyah dibalut minyak truffle putih, taburan keju parmesan parut, dan saus aioli bawang putih panggang.",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    tastingNotes: ["Crispy", "Savory Truffle", "Garlic Dip"]
  },
  {
    id: "lb2",
    name: "Crispy Calamari with Spicy Mayo",
    category: "Kudapan & Camilan",
    price: 48000,
    priceFormatted: "Rp 48.000",
    desc: "Cumi-cumi segar digoreng tepung renyah dengan bumbu lada hitam togarashi, disajikan dengan mayo pedas lemon.",
    img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Crunchy Tender", "Zesty Spicy"]
  },

  // KUE & PASTRY
  {
    id: "d1",
    name: "Earl Grey Burnt Cheesecake",
    category: "Kue & Pastry",
    price: 55000,
    priceFormatted: "Rp 55.000",
    desc: "Cheesecake gaya Basque dengan interior lumer lembut dan aroma infusi teh Earl Grey TWG yang wangi dan elegan.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    isChefPick: true,
    tastingNotes: ["Melt-in-Mouth", "Caramelized Crust", "Bergamot Tea"]
  },
  {
    id: "d2",
    name: "Tiramisu al Mascarpone",
    category: "Kue & Pastry",
    price: 52000,
    priceFormatted: "Rp 52.000",
    desc: "Biskuit ladyfingers dicelup ke dalam espresso Lumina, dilapisi krim mascarpone lembut dan bubuk kakao murni.",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    tastingNotes: ["Espresso Kick", "Silky Mascarpone", "Cocoa"]
  },
  {
    id: "d3",
    name: "Artisan Almond Butter Croissant",
    category: "Kue & Pastry",
    price: 38000,
    priceFormatted: "Rp 38.000",
    desc: "Croissant berlapis-lapis mentega Prancis murni, diisi pasta almond frangipane dan ditaburi almond panggang iris.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Flaky Buttery", "Sweet Almond", "Crisp"]
  },
  {
    id: "d4",
    name: "Vanilla Bean Pannacotta with Berry Compote",
    category: "Kue & Pastry",
    price: 45000,
    priceFormatted: "Rp 45.000",
    desc: "Pannacotta susu lembut dengan bintik vanilla bean Madagaskar asli disiram saus selai buah beri segar asam manis.",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Smooth Cream", "Tart Berry", "Fresh Fresh"]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    title: "Main Coffee Bar & Espresso Machine",
    category: "Barista & Brewing",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    desc: "Mesin espresso Slayer Custom di bar depan dengan pencahayaan hangat alami.",
    location: "Main Bar"
  },
  {
    id: 2,
    title: "Sunlit Architectural Seating Area",
    category: "Interior & Ruang",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    desc: "Ruang tengah dengan langit-langit tinggi dan jendela kaca besar menghadap taman zen.",
    location: "Central Lounge"
  },
  {
    id: 3,
    title: "Pour-Over V60 Slow Bar Session",
    category: "Barista & Brewing",
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80",
    desc: "Ritual penyeduhan manual brew dengan perbandingan air dan ekstraksi presisi.",
    location: "Slow Bar Corner"
  },
  {
    id: 4,
    title: "Greenhouse Indoor Plant Corner",
    category: "Interior & Ruang",
    img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1200&q=80",
    desc: "Sudut membaca tenang dikelilingi tanaman tropis dan kursi kayu minimalis.",
    location: "Library Corner"
  },
  {
    id: 5,
    title: "In-House Micro-Batch Roaster",
    category: "Coffee Roasting",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    desc: "Mesin roasting Probat 5kg kami yang beroperasi setiap Selasa dan Kamis pagi.",
    location: "Roastery Lab"
  },
  {
    id: 6,
    title: "Artisan Coffee Cupping Table",
    category: "Coffee Roasting",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    desc: "Sesi evaluasi rasa berkala bersama para Q-Grader dan head barista kami.",
    location: "Cupping Room"
  },
  {
    id: 7,
    title: "Artisan Wagyu Burger & Chips",
    category: "Artisan Food & Drinks",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    desc: "Sajian makan siang favorit yang dibuat segar setiap hari dari dapur kitchen kami.",
    location: "Dining Area"
  },
  {
    id: 8,
    title: "Fresh Baked Daily Croissants",
    category: "Artisan Food & Drinks",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    desc: "Pastry mentega hangat yang keluar dari oven tepat pada pukul 08:00 WIB.",
    location: "Bakery Display"
  },
  {
    id: 9,
    title: "Outdoor Courtyard Evening Ambience",
    category: "Outdoor & Vibe",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    desc: "Suasana senja di halaman belakang berlantai batu kerikil dan lampu temaram.",
    location: "Backyard Garden"
  },
  {
    id: 10,
    title: "Barista Latte Art Precision",
    category: "Barista & Brewing",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=80",
    desc: "Penuangan pola rosetta dan tulip pada Lumina Signature Latte.",
    location: "Main Bar"
  },
  {
    id: 11,
    title: "Private Meeting & Work Space",
    category: "Interior & Ruang",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    desc: "Ruang private ber-AC dengan koneksi internet serat optik dedicated dan proyektor.",
    location: "VIP Room A"
  },
  {
    id: 12,
    title: "Refreshing Cold Brew Mocktails",
    category: "Artisan Food & Drinks",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
    desc: "Minuman kopi dingin berkarakter menyegarkan untuk siang hari yang terik.",
    location: "Patio Bar"
  },
  {
    id: 13,
    title: "Evening Acoustic Live Corner",
    category: "Outdoor & Vibe",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    desc: "Penampilan musisi indie lokal setiap Jumat malam pukul 19:30 WIB.",
    location: "Open Stage"
  },
  {
    id: 14,
    title: "Coffee Cherry Sourcing Farm Visit",
    category: "Coffee Roasting",
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    desc: "Perjalanan tim roaster kami memetik ceri kopi merah matang di perkebunan binaan.",
    location: "Origin Farm"
  },
  {
    id: 15,
    title: "Warm Timber Communal Worktable",
    category: "Interior & Ruang",
    img: "https://images.unsplash.com/photo-1507133750070-4ed014260029?auto=format&fit=crop&w=1200&q=80",
    desc: "Meja kayu jati panjang berkapasitas 12 orang dengan colokan listrik di setiap kursi.",
    location: "Work Hall"
  },
  {
    id: 16,
    title: "Earl Grey Basque Cheesecake Slice",
    category: "Artisan Food & Drinks",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80",
    desc: "Tekstur lembut meleleh dengan infusi teh earl grey TWG premium.",
    location: "Dessert Station"
  }
];

export const CAREER_JOBS: CareerJob[] = [
  {
    id: "head-barista",
    title: "Head Barista & Quality Control",
    department: "Bar & Coffee",
    type: "Full-time",
    location: "Cirebon, West Java",
    experience: "Min. 2 Tahun pengalaman di Specialty Coffee",
    shortDesc: "Memimpin tim barista, mengontrol dial-in kalibrasi espresso harian, serta melatih barista junior tentang standar hospitality Lumina.",
    responsibilities: [
      "Mengontrol kalibrasi dan rasa espresso & manual brew harian sesuai standar cupping.",
      "Mengatur jadwal shift, inventaris biji kopi, susu, dan sirup.",
      "Melakukan pelatihan teknik latte art, efisiensi alur bar, dan SOP kebersihan.",
      "Berinteraksi ramah dengan pelanggan dan menjelaskan profile beans kepada tamu."
    ],
    requirements: [
      "Pria / Wanita, usia maksimal 29 tahun.",
      "Memiliki pemahaman mendalam tentang ekstraksi espresso, cupping, dan sensory.",
      "Sertifikasi SCA / kompetisi barista menjadi nilai tambah yang sangat dihargai.",
      "Kepribadian ramah, kepemimpinan yang baik, dan berorientasi pada detail."
    ],
    benefits: [
      "Gaji pokok kompetitif + Service Charge bulanan.",
      "BPJS Ketenagakerjaan & Kesehatan.",
      "Free specialty coffee & makan siang karyawan.",
      "Kesempatan mengikuti sertifikasi Q-Grader & kompetisi nasional dibiayai kafe."
    ],
    deadline: "30 September 2026"
  },
  {
    id: "hot-kitchen-cook",
    title: "Demi Chef / Cook (Hot Kitchen)",
    department: "Kitchen & Pastry",
    type: "Full-time",
    location: "Cirebon, West Java",
    experience: "Min. 1-2 Tahun di Cafe / Bistro Kitchen",
    shortDesc: "Bertanggung jawab atas persiapan dan memasak hidangan Western & Fusion pasta, burger, risotto, dan brunch Lumina dengan konsistensi tinggi.",
    responsibilities: [
      "Menyiapkan mise-en-place (bahan baku segar) sebelum operasional dimulai.",
      "Memasak makanan pesanan sesuai resep standar, porsi, dan waktu tunggu maksimal 15 menit.",
      "Menjaga kebersihan area kerja, sanitasi kulkas, dan FIFO bahan makanan.",
      "Bekerja sama dengan Head Chef dalam pengembangan menu seasonal baru."
    ],
    requirements: [
      "Pria / Wanita, lulusan Tata Boga / Perhotelan lebih disukai.",
      "Memahami teknik dasar saus Western, pan-searing, dan pasta cookery.",
      "Mampu bekerja cepat, tahan tekanan jam sibuk (peak hours/weekend).",
      "Disiplin, jujur, dan menjaga standar kebersihan pribadi."
    ],
    benefits: [
      "Gaji pokok + Uang makan harian + Bonus performa.",
      "Tunjangan Hari Raya & BPJS.",
      "Jenjang karir menjadi Chef de Partie.",
      "Lingkungan dapur yang modern, bersih, dan ber-AC."
    ],
    deadline: "25 September 2026"
  },
  {
    id: "pastry-baker",
    title: "Pastry Cook & Baker",
    department: "Kitchen & Pastry",
    type: "Full-time",
    location: "Cirebon, West Java",
    experience: "Min. 1 Tahun di Bakery / Pastry",
    shortDesc: "Memproduksi croissant artisan, burnt cheesecake, tiramisu, dan kue harian segar setiap pagi hari.",
    responsibilities: [
      "Melakukan laminasi adonan croissant, proofing, dan baking pagi hari.",
      "Membuat cake, cookies, dan dessert harian dengan standar visual yang estetis.",
      "Mengontrol kualitas display pastry showcase di bar depan.",
      "Mencatat stok butter, tepung premium, dan cokelat impor."
    ],
    requirements: [
      "Pria / Wanita yang berjiwa teliti dan menyukai estetika baking.",
      "Memiliki keterampilan laminasi butter pastry dan pembuatan cake lembut.",
      "Bersedia masuk shift pagi (mulai pukul 06:00 WIB untuk baking segar).",
      "Kreatif dan mau belajar menu pastry modern."
    ],
    benefits: [
      "Gaji pokok kompetitif + Bonus target bulanan.",
      "Makan harian dan jatah pastry/kopi mingguan.",
      "Pelatihan baking workshop bersama guest pastry chef."
    ],
    deadline: "15 Oktober 2026"
  },
  {
    id: "service-crew",
    title: "Service Crew & Cashier (Front of House)",
    department: "Service & Floor",
    type: "Full-time / Part-time",
    location: "Cirebon, West Java",
    experience: "Fresh graduate dipersilakan melamar",
    shortDesc: "Menjadi wajah ramah pertama yang menyambut tamu Lumina, melayani pemesanan di POS kasir, dan memastikan kenyamanan area bersantap.",
    responsibilities: [
      "Menyambut tamu dengan salam hangat dan senyuman tulus.",
      "Membantu menjelaskan menu dan mengoperasikan mesin kasir tablet POS.",
      "Menyajikan makanan dan minuman ke meja tamu secara elegan.",
      "Menjaga kerapian meja, kenyamanan tamu, dan kebersihan area makan."
    ],
    requirements: [
      "Pria / Wanita, usia 18 - 25 tahun.",
      "Komunikatif, ramah, berpenampilan rapi dan bersih.",
      "Dapat bekerja dalam tim dan fleksibel dengan jadwal shift/weekend.",
      "Memiliki etos kerja tinggi dan cepat tanggap."
    ],
    benefits: [
      "Gaji pokok + Service tip bulanan.",
      "Makan shift & voucher kopi gratis.",
      "Pelatihan hospitality & customer service standar internasional."
    ],
    deadline: "30 September 2026"
  },
  {
    id: "social-media-specialist",
    title: "Social Media & Content Creator",
    department: "Marketing & Creative",
    type: "Full-time / Hybrid",
    location: "Cirebon, West Java",
    experience: "Min. 1 Tahun portofolio Instagram Reels & TikTok",
    shortDesc: "Merancang ide konten video estetik, fotografi menu baru, tren TikTok, dan mengelola komunikasi komunitas online Lumina.",
    responsibilities: [
      "Memproduksi video pendek harian (TikTok & Instagram Reels) bernuansa hangat dan estetik.",
      "Memotret menu baru, ambience sore, dan event live acoustic.",
      "Membalas direct message dan komentar followers dengan nada bicara brand.",
      "Menganalisis performa reach dan merancang strategi promo bulanan."
    ],
    requirements: [
      "Pria / Wanita, melek tren TikTok, Reels, dan visual aesthetic cafe.",
      "Menguasai aplikasi edit video di smartphone (CapCut) atau Premiere/Lightroom.",
      "Memiliki kemampuan copy writing yang hangat dan mengalir.",
      "Wajib menyertakan link akun TikTok / Instagram / Portofolio saat melamar."
    ],
    benefits: [
      "Gaji pokok kompetitif + Budget produksi konten.",
      "Jam kerja fleksibel (Hybrid 3 hari cafe, 2 hari WFH).",
      "Kredit makan dan minum gratis di kafe setiap saat."
    ],
    deadline: "20 Oktober 2026"
  }
];

export const PROMOS: PromoItem[] = [
  {
    title: "Weekend Brunch Special",
    desc: "Nikmati diskon 20% untuk semua Main Course setiap Sabtu dan Minggu dari jam 08:00 - 12:00.",
    date: "Setiap Weekend (08:00 - 12:00)",
    img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=600&q=80",
    type: "Promo"
  },
  {
    title: "Acoustic Night Live Session",
    desc: "Temani malam Anda dengan alunan musik akustik langsung dari musisi lokal sambil menikmati secangkir kopi hangat.",
    date: "Setiap Jumat Malam, 19:30 WIB",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    type: "Event"
  },
  {
    title: "Coffee Roasting Masterclass",
    desc: "Pelajari seni menyangrai biji kopi langsung dari Master Roaster kami. Termasuk sertifikat dan 250g biji kopi hasil sangrai sendiri.",
    date: "Sabtu Pertama Setiap Bulan",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
    type: "Workshop"
  }
];

export const FAQS: FaqItem[] = [
  { 
    q: "Apakah perlu reservasi sebelum datang?", 
    a: "Untuk hari biasa Anda bisa langsung datang (walk-in). Namun untuk akhir pekan (Sabtu & Minggu) atau rombongan lebih dari 6 orang, kami sangat menyarankan untuk reservasi terlebih dahulu agar meja Anda dipersiapkan dengan baik." 
  },
  { 
    q: "Jam berapa Lumina beroperasi?", 
    a: "Kami buka setiap hari mulai pukul 08:00 hingga 23:00 WIB. Last order untuk makanan berat pukul 22:00 WIB dan minuman pukul 22:30 WIB." 
  },
  { 
    q: "Apakah makanan dan minumannya Halal?", 
    a: "Ya, 100% menu makanan, pastry, dan minuman kami menggunakan bahan-bahan halal tanpa menggunakan pork, lard, ataupun alkohol masak." 
  },
  { 
    q: "Apakah tersedia area parkir mobil dan motor?", 
    a: "Ya, kami menyediakan area parkir luas khusus pelanggan di bagian depan dan samping bangunan cafe, lengkap dengan petugas keamanan dan fasilitas valet gratis saat jam padat." 
  },
  { 
    q: "Apakah cocok untuk Work From Cafe (WFC)?", 
    a: "Sangat cocok! Kami menyediakan stopkontak di hampir setiap meja, kursi ergonomis, serta koneksi Wi-Fi fiber optik berkecepatan hingga 100 Mbps." 
  },
  { 
    q: "Apakah tersedia private room untuk meeting / birthday party?", 
    a: "Tentu, kami memiliki 2 private VIP room berkapasitas masing-masing 10 - 15 orang, lengkap dengan Smart TV/Proyektor dan sound system. Hubungi admin WhatsApp kami untuk pemesanan ruangan." 
  }
];
