import React from 'react';
import { Menu, X } from 'lucide-react';
import { PageType } from '../types';
import { useSite } from '../context/SiteContext';

interface NavbarProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentPage: PageType;
  onNavigatePage: (page: PageType, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  currentPage,
  onNavigatePage,
}) => {
  const { siteInfo } = useSite();
  const isDetailPage = currentPage !== 'home';

  const navLinks: { label: string; page?: PageType; section?: string }[] = [
    { label: 'Beranda', page: 'home', section: 'root' },
    { label: 'Tentang Kami', page: 'about' },
    { label: 'Menu', page: 'menu' },
    { label: 'Galeri', page: 'gallery' },
    { label: 'Karir', page: 'career' },
    { label: 'Promo', page: 'home', section: 'promo' },
    { label: 'Lokasi', page: 'home', section: 'location' },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 transform-gpu ${
          isScrolled || isDetailPage
            ? 'bg-white shadow-sm py-3.5 border-b border-[#EAE6DF]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div
              className="cursor-pointer flex items-center gap-1.5"
              onClick={() => onNavigatePage('home', 'root')}
            >
              <h1
                className={`font-serif text-xl sm:text-2xl font-semibold tracking-wide transition-colors duration-200 ${
                  isScrolled || isDetailPage ? 'text-[#2C2A29]' : 'text-white'
                }`}
              >
                {siteInfo.cafeName || 'LUMINA'}<span className="text-[#8C7A6B]">.</span>
              </h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((item) => {
              const isActive =
                (item.page && item.page === currentPage && currentPage !== 'home') ||
                (item.label === 'Beranda' && currentPage === 'home');

              return (
                <button
                  key={item.label}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => onNavigatePage(item.page || 'home', item.section)}
                  className={`text-xs uppercase font-semibold tracking-widest transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#8C7A6B] border-b-2 border-[#8C7A6B]'
                      : isScrolled || isDetailPage
                      ? 'text-[#5A5551] hover:text-[#2C2A29]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              id="nav-reservasi-btn"
              onClick={() => onNavigatePage('reservation')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-sm ${
                currentPage === 'reservation'
                  ? 'bg-[#8C7A6B] text-white'
                  : isScrolled || isDetailPage
                  ? 'bg-[#2C2A29] text-white hover:bg-[#8C7A6B]'
                  : 'bg-white text-[#2C2A29] hover:bg-white/90'
              }`}
            >
              Reservasi Meja
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            className="lg:hidden p-2 rounded-full cursor-pointer transition-colors z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2C2A29]" />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled || isDetailPage ? 'text-[#2C2A29]' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 bg-[#F9F8F6] z-40 transition-transform duration-300 ease-in-out flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2.5">
            <span 
              className="font-serif text-2xl font-semibold tracking-wide text-[#2C2A29] cursor-pointer"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigatePage('home', 'root');
              }}
            >
              {siteInfo.cafeName || 'LUMINA'}<span className="text-[#8C7A6B]">.</span>
            </span>
            <button
              id="mobile-header-cms-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigatePage('cms');
              }}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#2C2A29] text-white shadow-sm cursor-pointer"
            >
              <Sliders className="w-3 h-3" />
              <span>CMS</span>
            </button>
          </div>
          <button
            id="mobile-close-btn"
            aria-label="Tutup menu"
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#2C2A29] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 text-center my-auto">
          {navLinks.map((item) => (
            <button
              key={item.label}
              id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigatePage(item.page || 'home', item.section);
              }}
              className={`font-serif text-2xl sm:text-3xl transition-colors cursor-pointer py-1 ${
                (item.page && item.page === currentPage && currentPage !== 'home') ||
                (item.label === 'Beranda' && currentPage === 'home')
                  ? 'text-[#8C7A6B] font-semibold'
                  : 'text-[#2C2A29] hover:text-[#8C7A6B]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            id="mobile-nav-cms-link"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigatePage('cms');
            }}
            className={`font-serif text-2xl sm:text-3xl transition-colors cursor-pointer py-1 flex items-center justify-center gap-2 ${
              currentPage === 'cms' ? 'text-[#8C7A6B] font-semibold' : 'text-[#8C7A6B] hover:text-[#2C2A29]'
            }`}
          >
            <Sliders className="w-5 h-5" />
            <span>CMS Admin</span>
          </button>
          <button
            id="mobile-reservasi-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigatePage('reservation');
            }}
            className="mt-4 py-3 px-8 rounded-full bg-[#2C2A29] text-white text-sm font-semibold tracking-wider uppercase shadow cursor-pointer mx-auto hover:bg-[#8C7A6B] transition-colors"
          >
            Reservasi Meja
          </button>
        </div>

        {/* Mobile Footer */}
        <div className="text-center text-xs text-gray-500 font-light pb-4 border-t border-gray-200 pt-4">
          <p>Lumina Roastery &bull; Buka Setiap Hari: 08:00 - 23:00 WIB</p>
          <p className="mt-1 text-gray-400">Jl. Kesambi Raya No. 123, Cirebon</p>
        </div>
      </div>
    </>
  );
};

