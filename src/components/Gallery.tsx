import React, { useState } from 'react';
import { X, ArrowRight, Camera } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/cafeData';

interface GalleryProps {
  onNavigateToGallery?: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onNavigateToGallery }) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Take first 6 photos for home preview
  const previewPhotos = GALLERY_PHOTOS.slice(0, 6);

  return (
    <section id="gallery" className="py-24 px-4 md:px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#8C7A6B] text-xs uppercase tracking-[0.2em] font-medium mb-2 block">
              Suasana & Momen Berkesan
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2A29] mb-2">
              Galeri Lumina
            </h2>
            <p className="text-gray-500 font-light text-sm sm:text-base">
              Sekilas tentang kehangatan ruang, sudut estetik, dan ritual kopi kami.
            </p>
          </div>

          {onNavigateToGallery && (
            <button
              id="open-full-gallery-btn"
              onClick={onNavigateToGallery}
              className="inline-flex items-center gap-2 bg-[#2C2A29] hover:bg-[#8C7A6B] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer w-fit"
            >
              <Camera className="w-4 h-4" />
              <span>Buka Semua Foto Lengkap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {previewPhotos.map((photo) => (
            <div
              key={photo.id}
              id={`gallery-img-${photo.id}`}
              className="relative overflow-hidden cursor-pointer group rounded-xl md:rounded-2xl shadow-sm bg-gray-100"
              onClick={() => setLightboxImg(photo.img)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-4">
                <span className="text-[10px] uppercase font-semibold text-white/80 tracking-wider">
                  {photo.category}
                </span>
                <div>
                  <h4 className="text-white text-sm font-medium leading-snug">
                    {photo.title}
                  </h4>
                  <span className="text-white/70 text-xs font-light mt-0.5 block">
                    {photo.location}
                  </span>
                </div>
              </div>
              <img
                src={photo.img}
                alt={photo.title}
                loading="lazy"
                className="w-full h-48 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            id="close-lightbox-btn"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2.5 rounded-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImg(null);
            }}
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImg}
            alt="Enlarged gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
