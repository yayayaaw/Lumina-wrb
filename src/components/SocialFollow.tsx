import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Music, 
  Play, 
  Heart, 
  ExternalLink 
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const SocialFollow: React.FC = () => {
  const { socialLinks, siteInfo } = useSite();

  const mainSocialUrl = socialLinks.primarySocialUrl || socialLinks.instagram || "https://instagram.com/luminaroastery";
  const mainSocialLabel = socialLinks.primarySocialLabel || "@luminaroastery";

  return (
    <section id="social" className="py-20 bg-white border-t border-[#EAE6DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-[#8C7A6B] text-xs uppercase tracking-[0.25em] font-semibold">
          Media Sosial Resmi
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] font-medium">
          Ikuti Cerita & Update Terbaru Kami
        </h2>
        <p className="text-xs sm:text-sm text-[#6B635B] font-light leading-relaxed max-w-xl mx-auto">
          Dapatkan info menu seasonal, promo mingguan, dan suasana harian di {siteInfo.cafeName || 'Lumina Roastery'}.
        </p>

        {/* 1 Main Clean Social Media Link Button */}
        <div className="pt-4">
          <a
            id="social-primary-link"
            href={mainSocialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2C2A29] text-white hover:bg-[#8C7A6B] transition-all text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Instagram className="w-5 h-5 text-[#EAD8C7]" />
            <span>Kunjungi {mainSocialLabel}</span>
            <ExternalLink className="w-4 h-4 text-[#EAD8C7]" />
          </a>
        </div>
      </div>
    </section>
  );
};


