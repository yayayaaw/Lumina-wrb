import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface SignatureMenuProps {
  onOrderClick: () => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onOrderClick }) => {
  const { signatureMenu = [] } = useSite();
  const itemsList = signatureMenu || [];

  return (
    <section id="signature" className="py-24 md:py-32 px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8C7A6B] text-sm uppercase tracking-[0.2em] font-medium mb-2 block">
            Kreasi Terbaik
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C2A29]">
            Menu Andalan Pilihan
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {itemsList.map((item, index) => (
            <div
              key={item.id || index}
              id={`signature-item-${item.id || index}`}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl group shadow-md">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-[#2C2A29] mb-4">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
                  {item.desc}
                </p>
                <p className="text-2xl font-medium text-[#2C2A29] mb-8">
                  Rp {item.price}
                </p>
                <button
                  id={`signature-order-${item.id || index}`}
                  onClick={onOrderClick}
                  className="self-start group flex items-center space-x-2 text-[#2C2A29] font-medium uppercase tracking-wider text-sm border-b border-[#2C2A29] pb-1 hover:text-[#8C7A6B] hover:border-[#8C7A6B] transition-colors cursor-pointer"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

