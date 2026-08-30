import React from 'react';
import { useSite } from '../context/SiteContext';

export const Promos: React.FC = () => {
  const { promos = [], siteInfo } = useSite();
  const promoList = promos || [];

  return (
    <section id="promo" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8C7A6B] text-xs uppercase tracking-[0.2em] font-medium mb-3 block">
            Penawaran Spesial
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C2A29] mb-4">
            Promo & Acara Mendatang
          </h2>
          <p className="text-gray-500 font-light">
            Penawaran spesial dan acara mendatang di {siteInfo?.cafeName || 'Lumina'}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {promoList.map((promo, idx) => (
            <div
              key={promo.id || idx}
              id={`promo-card-${promo.id || idx}`}
              className="bg-[#F9F8F6] rounded-2xl overflow-hidden flex flex-col group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur text-[#2C2A29] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                  {promo.type}
                </div>
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-[#2C2A29] mb-2">
                  {promo.title}
                </h3>
                <p className="text-[#8C7A6B] text-sm mb-4 font-medium">
                  {promo.date}
                </p>
                <p className="text-gray-600 mb-8 font-light flex-grow leading-relaxed">
                  {promo.desc}
                </p>
                <button
                  id={`promo-claim-btn-${promo.id || idx}`}
                  onClick={() =>
                    window.open(
                      `https://wa.me/${siteInfo.whatsappNumber}?text=Halo%20${encodeURIComponent(
                        siteInfo.cafeName
                      )},%20saya%20tertarik%20dengan%20promo/event:%20${encodeURIComponent(
                        promo.title
                      )}`,
                      '_blank'
                    )
                  }
                  className="w-full py-3 rounded-full border border-[#2C2A29] text-[#2C2A29] hover:bg-[#2C2A29] hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  Klaim / Info Lanjut
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

