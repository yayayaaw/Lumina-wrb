import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  MapPin, 
  Share2, 
  Check 
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../../data/cafeData';
import { GalleryPhoto } from '../../types';

interface GalleryPageProps {
  onBackToHome: () => void;
}

const CATEGORIES = [
  'Semua',
  'Interior & Ruang',
  'Barista & Brewing',
  'Artisan Food & Drinks',
  'Coffee Roasting',
  'Outdoor & Vibe'
] as const;

export const GalleryPage: React.FC<GalleryPageProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredPhotos = useMemo(() => {
    return GALLERY_PHOTOS.filter((photo) => {
      const matchCategory =
        selectedCategory === 'Semua' || photo.category === selectedCategory;
      const matchSearch =
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activePhoto: GalleryPhoto | null =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] || null : null;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev! > 0 ? prev! - 1 : filteredPhotos.length - 1
      );
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev! < filteredPhotos.length - 1 ? prev! + 1 : 0
      );
    }
  };

  const handleShare = async (photo: GalleryPhoto) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: photo.title,
          text: `${photo.title} - Lumina Roastery`,
          url: window.location.href
        });
      } catch {
        // Fallback copy
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] pt-24 pb-20">
      {/* Top Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE6DF]">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B635B] hover:text-[#2C2A29] transition-colors py-2 px-3 rounded-full hover:bg-black/5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B]">
            <Camera className="w-4 h-4" />
            <span>Visual Archive • {GALLERY_PHOTOS.length} Foto Tersedia</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto mt-8 mb-12">
          <span className="text-[#8C7A6B] uppercase tracking-[0.25em] text-xs font-semibold">
            Galeri Suasana & Cerita
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium mt-2 mb-4 leading-tight">
            Ruang, Rasa, dan Setiap Detik di Lumina
          </h1>
          <p className="text-[#6B635B] text-base sm:text-lg font-light leading-relaxed">
            Jelajahi setiap sudut estetis, ritual penyeduhan kopi manual kami, proses sangrai biji kopi, hingga hidangan lezat yang disajikan setiap hari.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2C2A29] text-white shadow-sm'
                    : 'bg-white text-[#6B635B] border border-[#EAE6DF] hover:bg-[#F2EFE9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari foto, sudut, suasana..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EAE6DF] rounded-full text-xs sm:text-sm focus:outline-none focus:border-[#8C7A6B] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#EAE6DF] p-8">
            <Camera className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-[#2C2A29]">Foto Tidak Ditemukan</h3>
            <p className="text-sm text-[#6B635B] mt-1">
              Coba ganti kata kunci pencarian atau pilih kategori lain.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#2C2A29] text-white text-xs rounded-full"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EAE6DF] cursor-pointer flex flex-col"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={photo.img}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-[#2C2A29] text-xs font-medium px-4 py-2 rounded-full shadow">
                      Buka Foto Lengkap
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium tracking-wider px-2.5 py-1 rounded-full uppercase">
                      {photo.category}
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#2C2A29] group-hover:text-[#8C7A6B] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#6B635B] mt-1 line-clamp-2 leading-relaxed">
                      {photo.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8C7A6B] font-medium mt-3 pt-3 border-t border-gray-100">
                    <MapPin className="w-3 h-3" />
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Tutup foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Image & Detail Card */}
          <div
            className="relative max-w-5xl w-full bg-[#1C1A19] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
              <img
                src={activePhoto.img}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            {/* Photo Info Sidebar */}
            <div className="w-full md:w-80 p-6 flex flex-col justify-between text-white border-t md:border-t-0 md:border-l border-white/10 bg-[#1F1D1C]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D4C3B3] bg-white/10 px-2.5 py-1 rounded-full">
                    {activePhoto.category}
                  </span>
                  <span className="text-xs text-white/50">
                    {activePhotoIndex! + 1} / {filteredPhotos.length}
                  </span>
                </div>

                <h2 className="font-serif text-xl sm:text-2xl font-medium text-white mb-2 leading-snug">
                  {activePhoto.title}
                </h2>

                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                  {activePhoto.desc}
                </p>

                <div className="space-y-2.5 py-4 border-y border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4 text-[#D4C3B3]" />
                    <span>Lokasi: {activePhoto.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Camera className="w-4 h-4 text-[#D4C3B3]" />
                    <span>Lumina Roastery Archive</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => handleShare(activePhoto)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-medium transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      Link Tersalin!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      Bagikan Foto
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
