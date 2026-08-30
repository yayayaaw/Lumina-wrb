import React from 'react';
import { useSite } from '../context/SiteContext';

export const Hero: React.FC = () => {
  const { siteInfo } = useSite();

  return (
    <header
      id="root"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-28 px-4 sm:px-6"
    >
      {/* Background Image (16:9 Full Screen Cover) & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteInfo.heroImage || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80"}
          alt={siteInfo.cafeName || "Cafe Interior"}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Main Text Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center my-auto px-2">
        <span className="inline-block text-[#EAD8C7] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-4 drop-shadow-sm">
          {siteInfo.estYear || "Est. 2024 • Cirebon, Jawa Barat"}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium mb-6 leading-[1.15] sm:leading-tight drop-shadow-md">
          {siteInfo.taglineHero || "Menghadirkan Kehangatan, Dalam Setiap Seduhan."}
        </h1>
        <p className="text-white/95 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed drop-shadow-sm">
          {siteInfo.subtitleHero || "Ruang hangat untuk bersantai, berbincang, dan menikmati sajian kopi premium serta hidangan artisan di pusat kota."}
        </p>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
        <span className="text-white/80 text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-2 text-center whitespace-nowrap drop-shadow-sm">
          {siteInfo.hours || "Buka Setiap Hari: 08:00 - 23:00 WIB"}
        </span>
        <div className="w-[1px] h-8 sm:h-10 bg-white/50 animate-pulse"></div>
      </div>
    </header>
  );
};


