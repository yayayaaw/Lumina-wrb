import React, { useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface DigitalMenuProps {
  onDownloadPdf?: (e: React.MouseEvent) => void;
  onNavigateToMenu?: () => void;
}

export const DigitalMenu: React.FC<DigitalMenuProps> = ({ onNavigateToMenu }) => {
  const { allMenu, simpleMenu } = useSite();
  const menuData = allMenu || simpleMenu || {};
  const categories = Object.keys(menuData);
  const [activeMenuTab, setActiveMenuTab] = useState<string>(categories[0] || "Kopi");

  const currentTab = categories.includes(activeMenuTab) ? activeMenuTab : (categories[0] || "");
  const currentItems = currentTab ? (menuData[currentTab] || []) : [];

  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#8C7A6B] text-xs uppercase tracking-[0.2em] font-medium mb-3 block">
            Daftar Pilihan
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C2A29] mb-4">
            Menu Digital
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base">
            Eksplorasi pilihan kopi spesial, teh artisan segar, dan hidangan lezat kami.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`menu-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveMenuTab(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeMenuTab === cat
                  ? 'bg-[#2C2A29] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu List */}
        <div className="grid gap-6">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              id={`menu-item-${activeMenuTab.toLowerCase().replace(/\s+/g, '-')}-${idx}`}
              className="flex justify-between items-start border-b border-gray-100 pb-6 group"
            >
              <div className="pr-4">
                <h4 className="text-lg font-medium text-[#2C2A29] group-hover:text-[#8C7A6B] transition-colors">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm mt-1 font-light">{item.desc}</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <span className="font-medium text-[#2C2A29]">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        {onNavigateToMenu && (
          <div className="mt-14 flex justify-center">
            <button
              id="open-full-menu-btn"
              onClick={onNavigateToMenu}
              className="inline-flex items-center gap-2.5 bg-[#2C2A29] hover:bg-[#8C7A6B] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Buka Menu Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};


