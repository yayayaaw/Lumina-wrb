import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface AboutProps {
  onNavigateToAbout?: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigateToAbout }) => {
  const { siteInfo } = useSite();

  const highlights = [
    { title: "Premium Roastery", desc: "Biji kopi pilihan kualitas tinggi" },
    { title: "Artisan Food", desc: "Dibuat segar dengan bahan natural" },
    { title: "Cozy Space", desc: "Desain interior hangat & menenangkan" },
    { title: "Fast Wi-Fi", desc: "Sempurna untuk WFC atau meeting" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src={siteInfo.aboutImage || "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"}
              alt="Barista pouring coffee"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#F9F8F6] p-6 rounded-2xl hidden md:block shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80"
                alt="Coffee beans"
                className="w-48 h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <span className="text-[#8C7A6B] text-xs uppercase tracking-[0.2em] font-medium mb-3 block">
            Tentang Kami
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C2A29] mb-6">
            {siteInfo.aboutTitle || "Cerita di Balik Lumina"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
            {siteInfo.aboutDesc1 || "Kami percaya bahwa sebuah cafe bukan sekadar tempat untuk makan dan minum, melainkan sebuah ruang ketiga (third place) di mana ide lahir, koneksi terjalin, dan momen diabadikan."}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
            {siteInfo.aboutDesc2 || "Biji kopi kami dikurasi langsung dari petani lokal terbaik dan dipanggang in-house untuk memastikan kualitas dan kesegaran di setiap cangkir yang Anda nikmati. Dipadukan dengan desain interior yang menenangkan, Lumina adalah pelarian sempurna dari hiruk-pikuk kota."}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                id={`feature-card-${idx}`}
                className="border-l-2 border-[#8C7A6B] pl-4"
              >
                <h4 className="font-medium text-[#2C2A29] mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {onNavigateToAbout && (
            <button
              onClick={onNavigateToAbout}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C2A29] hover:text-[#8C7A6B] transition-colors group cursor-pointer"
            >
              <span>Pelajari Cerita Lengkap, Petani Lokal & Filosofi Kami</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
