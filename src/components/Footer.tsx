import React from 'react';
import { PageType } from '../types';
import { Instagram, Facebook, Music, Sliders } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface FooterProps {
  onNavigatePage: (page: PageType, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const { siteInfo, socialLinks } = useSite();

  return (
    <footer id="footer" className="bg-[#1C1A19] text-white/80 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-serif text-2xl font-semibold tracking-wide text-white">
            {siteInfo.cafeName || 'LUMINA'}<span className="text-[#8C7A6B]">.</span>
          </h2>
          <p className="text-sm font-light leading-relaxed text-gray-400 max-w-sm">
            {siteInfo.subtitleHero || "Tempat berlabuh untuk menikmati racikan kopi specialty nusantara, hidangan artisan berkualitas, dan kehangatan ruang di pusat kota."}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={socialLinks.primarySocialUrl || socialLinks.instagram || "https://instagram.com/luminaroastery"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Media Sosial Resmi"
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 flex items-center gap-2 text-white text-xs font-medium transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#EAD8C7]" />
              <span>{socialLinks.primarySocialLabel || "@luminaroastery"}</span>
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">
            Halaman Utama
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-light text-gray-400">
            <li>
              <button
                id="footer-link-home"
                onClick={() => onNavigatePage('home', 'root')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Beranda (Home)
              </button>
            </li>
            <li>
              <button
                id="footer-link-about"
                onClick={() => onNavigatePage('about')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Cerita & Filosofi (About)
              </button>
            </li>
            <li>
              <button
                id="footer-link-menu"
                onClick={() => onNavigatePage('menu')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Buku Menu & Foto Lengkap
              </button>
            </li>
            <li>
              <button
                id="footer-link-gallery"
                onClick={() => onNavigatePage('gallery')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Galeri Foto (Visual Archive)
              </button>
            </li>
          </ul>
        </div>

        {/* Karir & Info */}
        <div>
          <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">
            Layanan & Karir
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-light text-gray-400">
            <li>
              <button
                id="footer-link-career"
                onClick={() => onNavigatePage('career')}
                className="hover:text-white transition-colors cursor-pointer text-left text-[#D4C3B3] font-medium"
              >
                💼 Karir & Lowongan Kerja
              </button>
            </li>
            <li>
              <button
                id="footer-link-reservasi"
                onClick={() => onNavigatePage('reservation')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Reservasi Meja
              </button>
            </li>
            <li>
              <button
                id="footer-link-promo"
                onClick={() => onNavigatePage('home', 'promo')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Event & Promo
              </button>
            </li>
            <li>
              <button
                id="footer-link-cms"
                onClick={() => onNavigatePage('cms')}
                className="hover:text-[#EAD8C7] text-[#8C7A6B] font-semibold transition-colors cursor-pointer text-left flex items-center gap-1.5"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Kelola CMS Website</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">
            Lokasi & Jam Buka
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-light text-gray-400">
            <li>{siteInfo.address}</li>
            <li className="text-white font-medium">{siteInfo.hours}</li>
            <li className="pt-2 text-gray-300">WA: +{siteInfo.whatsappNumber}</li>
            <li>Email: {siteInfo.email}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-light text-white/50 gap-4">
        <p>&copy; {new Date().getFullYear()} {siteInfo.cafeName || 'Lumina Roastery'}. All rights reserved.</p>
        <div className="flex space-x-6">
          <button
            onClick={() => onNavigatePage('cms')}
            className="hover:text-white transition-colors cursor-pointer underline text-[#8C7A6B]"
          >
            Pengaturan CMS
          </button>
          <span className="hover:text-white transition-colors cursor-pointer">
            Kebijakan Privasi
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Ketentuan Layanan
          </span>
        </div>
      </div>
    </footer>
  );
};

