import React from 'react';
import { MapPin } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Location: React.FC = () => {
  const { siteInfo } = useSite();

  return (
    <section id="location" className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/3">
          <span className="text-[#8C7A6B] text-xs uppercase tracking-[0.2em] font-medium mb-3 block">
            Lokasi & Navigasi
          </span>
          <h2 className="font-serif text-4xl text-[#2C2A29] mb-6">
            Kunjungi Kami
          </h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#8C7A6B] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-[#2C2A29] mb-1">Alamat</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {siteInfo.address}
                </p>
              </div>
            </div>
          </div>
          <button
            id="get-directions-btn"
            onClick={() => window.open(siteInfo.mapsUrl, '_blank')}
            className="px-6 py-3 border border-[#2C2A29] text-[#2C2A29] rounded-full text-sm font-medium hover:bg-[#2C2A29] hover:text-white transition-colors cursor-pointer"
          >
            Petunjuk Arah (Google Maps)
          </button>
        </div>
        <div className="lg:w-2/3 w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden relative shadow-md">
          {/* Embed Google Maps */}
          <iframe
            src={siteInfo.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${siteInfo.cafeName || 'Lumina Cafe'} Location`}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

