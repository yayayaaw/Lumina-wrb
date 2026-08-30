import React from 'react';
import { 
  ArrowLeft, 
  Flame, 
  Heart, 
  MapPin, 
  Award, 
  Users, 
  Sparkles, 
  Coffee, 
  CheckCircle2 
} from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onNavigateToMenu: () => void;
  onNavigateToGallery: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onNavigateToMenu,
  onNavigateToGallery
}) => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] pt-24 pb-20">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE6DF]">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B635B] hover:text-[#2C2A29] transition-colors py-2 px-3 rounded-full hover:bg-black/5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B]">
            <Heart className="w-4 h-4" />
            <span>Cerita & Filosofi Kami</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-lg bg-[#2C2A29] text-white">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80"
            alt="Lumina Coffee Story"
            className="w-full h-[380px] sm:h-[480px] object-cover opacity-35"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-3xl">
            <span className="text-[#D4C3B3] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Tentang Lumina Roastery
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-4">
              Cahaya, Hangat, dan Seni Menikmati Kopi
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Lahir dari kecintaan pada aroma biji kopi nusantara dan keinginan menciptakan sebuah oase tenang di tengah denyut kota Cirebon.
            </p>
          </div>
        </div>

        {/* 1. Filosofi & Cerita Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#8C7A6B] uppercase tracking-[0.25em] text-xs font-semibold">
              Filosofi Kami
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-snug">
              "Lumina" Berarti Terang dan Memberi Kehangatan
            </h2>
            <p className="text-[#6B635B] text-sm sm:text-base font-light leading-relaxed">
              Kami percaya bahwa secangkir kopi lebih dari sekadar asupan kafein harian. Ia adalah pembuka percakapan berharga, katalis ide-ide kreatif, dan momen hening untuk menyapa diri sendiri setelah hari yang panjang.
            </p>
            <p className="text-[#6B635B] text-sm sm:text-base font-light leading-relaxed">
              Di Lumina Roastery, setiap elemen arsitektur—dari jendela kaca yang membingkai cahaya matahari pagi hingga pemilihan meja kayu jati alami—dirancang dengan cermat untuk memberikan rasa damai dan kehangatan rumah.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-2xl border border-[#EAE6DF]">
                <h4 className="font-serif text-2xl font-semibold text-[#8C7A6B]">100%</h4>
                <p className="text-xs text-[#6B635B] mt-1">Specialty Arabica Beans Pilihan</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#EAE6DF]">
                <h4 className="font-serif text-2xl font-semibold text-[#8C7A6B]">24+ Jam</h4>
                <p className="text-xs text-[#6B635B] mt-1">Fermentasi Slow Brew Khusus</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
              alt="Coffee Sourcing"
              className="rounded-2xl w-full h-64 sm:h-80 object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
              alt="Cafe Atmosphere"
              className="rounded-2xl w-full h-64 sm:h-80 object-cover shadow-md mt-6"
            />
          </div>
        </div>

        {/* 2. Direct Sourcing Origins */}
        <div className="mb-20 bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE6DF] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#8C7A6B] uppercase tracking-[0.25em] text-xs font-semibold">
              Kemitraan Petani Lokal
            </span>
            <h2 className="font-serif text-3xl font-medium mt-1 mb-3">
              Dari Kebun Dataran Tinggi ke Cangkir Anda
            </h2>
            <p className="text-xs sm:text-sm text-[#6B635B] font-light leading-relaxed">
              Kami bekerjasama langsung (direct trade) dengan petani kopi lokal di berbagai penjuru nusantara untuk memastikan harga panen yang adil dan mutu biji kopi terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                region: "Gunung Halu",
                prov: "Jawa Barat",
                alt: "1.450 mdpl",
                notes: "Pink Banana, Honeycomb, Bergamot",
                proc: "Anaerobic Natural"
              },
              {
                region: "Pantan Musara",
                prov: "Aceh Gayo",
                alt: "1.600 mdpl",
                notes: "Wild Berry, Sweet Plum, Jasmine",
                proc: "Special Washed"
              },
              {
                region: "Kintamani",
                prov: "Bali",
                alt: "1.300 mdpl",
                notes: "Citrus Orange, Caramel, Black Tea",
                proc: "Carbonic Maceration"
              },
              {
                region: "Sapan",
                prov: "Toraja, Sulsel",
                alt: "1.700 mdpl",
                notes: "Dark Chocolate, Warm Spice, Nutty",
                proc: "Semi-Washed"
              }
            ].map((origin) => (
              <div
                key={origin.region}
                className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE6DF] hover:border-[#8C7A6B] transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-[#8C7A6B] font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{origin.prov}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2C2A29]">
                  {origin.region}
                </h3>
                <div className="my-3 py-2 border-y border-gray-200 text-xs space-y-1 text-[#6B635B]">
                  <p>Ketinggian: <span className="font-medium text-[#2C2A29]">{origin.alt}</span></p>
                  <p>Proses: <span className="font-medium text-[#2C2A29]">{origin.proc}</span></p>
                </div>
                <p className="text-[11px] text-[#8C7A6B] font-medium">
                  Notes: {origin.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The Roasting Art */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80"
                alt="Roasting Lab"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow text-xs">
                <p className="font-semibold text-[#2C2A29]">In-House Probat Roaster 5kg</p>
                <p className="text-[#6B635B] mt-0.5">Disangrai setiap Selasa & Kamis pagi untuk kesegaran rasa puncak.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <span className="text-[#8C7A6B] uppercase tracking-[0.25em] text-xs font-semibold">
              The Art of Roasting
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-snug">
              Menjaga Kejujuran Karakter Alami Biji Kopi
            </h2>
            <p className="text-[#6B635B] text-sm sm:text-base font-light leading-relaxed">
              Kami tidak membakar biji kopi kami hingga hangus atau menyamarkan rasa aslinya. Dengan pendekatan sangrai *Light to Medium*, aroma bunga, keasaman manis buah-buahan segar, dan rasa manis karamel alami dapat bersinar sepenuhnya di lidah Anda.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Pencatatan profil suhu dan waktu realtime pada software Artisan Roaster.",
                "Sesi Cupping harian oleh Q-Grader bersertifikat sebelum disajikan ke tamu.",
                "Waktu resting biji kopi yang presisi (7 - 14 hari) untuk degas maksimal."
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#554F49] font-light">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Journey Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#8C7A6B] uppercase tracking-[0.25em] text-xs font-semibold">
              Perjalanan Kami
            </span>
            <h2 className="font-serif text-3xl font-medium mt-1">
              Milestone & Jejak Langkah Lumina
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                year: "2022",
                title: "Gagasan & Riset Petani",
                desc: "Perjalanan keliling kebun kopi Jawa Barat dan Aceh untuk menemukan bibit berkualitas dan profil sangrai khas."
              },
              {
                year: "2024",
                title: "Grand Opening Lumina",
                desc: "Membuka pintu cafe pertama di Jl. Kesambi Raya Cirebon dengan konsep Slow Bar dan Glasshouse Garden."
              },
              {
                year: "2025",
                title: "Roastery Lab Expansion",
                desc: "Menambah mesin Probat 5kg dan membuka sesi Cupping & Workshop edukasi kopi untuk komunitas lokal."
              },
              {
                year: "2026",
                title: "Hari Ini & Masa Depan",
                desc: "Melayani ribuan penikmat kopi setiap bulannya dengan komitmen rasa, keramahan, dan inovasi hidangan artisan."
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#EAE6DF] relative shadow-sm hover:shadow-md transition-all"
              >
                <span className="font-serif text-3xl font-bold text-[#D4C3B3] block mb-2">
                  {step.year}
                </span>
                <h3 className="font-serif text-base font-semibold text-[#2C2A29] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#6B635B] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-[#2C2A29] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <Sparkles className="w-8 h-8 text-[#D4C3B3] mx-auto mb-3" />
          <h2 className="font-serif text-2xl sm:text-4xl font-medium mb-3">
            Rasakan Sendiri Hangatnya Suasana Kami
          </h2>
          <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed mb-6">
            Pintu kami selalu terbuka untuk Anda setiap hari dari pukul 08:00 hingga 23:00 WIB. Temukan tempat duduk favorit Anda hari ini.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onNavigateToMenu}
              className="px-6 py-3 bg-white text-[#2C2A29] rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Lihat Menu Lengkap
            </button>
            <button
              onClick={onNavigateToGallery}
              className="px-6 py-3 border border-white/40 text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer"
            >
              Jelajahi Foto Galeri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
