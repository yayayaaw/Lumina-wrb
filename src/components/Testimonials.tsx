import React, { useState, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Quote, 
  CheckCircle2, 
  X, 
  Coffee, 
  Sparkles,
  MessageSquareHeart
} from 'lucide-react';
import { REVIEWS_DATA } from '../data/cafeData';
import { ReviewItem } from '../types';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Form State
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Pengunjung Setia',
    rating: 5,
    comment: '',
    favoriteMenu: 'Lumina Signature Latte',
    tag: 'Suasana Nyaman'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const createdReview: ReviewItem = {
      id: `rev-custom-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Pengunjung Kafe',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`,
      rating: Number(newReview.rating),
      date: 'Baru saja',
      comment: newReview.comment,
      tag: newReview.tag,
      favoriteMenu: newReview.favoriteMenu,
      verified: true
    };

    setReviews([createdReview, ...reviews]);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setNewReview({
        name: '',
        role: 'Pengunjung Setia',
        rating: 5,
        comment: '',
        favoriteMenu: 'Lumina Signature Latte',
        tag: 'Suasana Nyaman'
      });
      // Scroll to start to show new review
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 1200);
  };

  const tags = ['Semua', 'Signature Latte', 'WFC Nyaman', 'Makanan Lezat', 'Specialty Coffee', 'Interior Estetis'];

  const filteredReviews = activeFilter === 'Semua' 
    ? reviews 
    : reviews.filter(r => r.tag?.toLowerCase().includes(activeFilter.toLowerCase()) || r.favoriteMenu?.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="testimonials" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#22201F] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8C7A6B]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#B58A63]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Title & Write Review Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#8C7A6B]"></span>
              <span className="text-[#D4C3B3] text-xs uppercase tracking-[0.25em] font-medium block">
                Kata Mereka Tentang Lumina
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium">
              Ulasan & Pengalaman Pengunjung
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light mt-3 max-w-2xl">
              Cerita nyata dari para penikmat kopi, pekerja kreatif, dan pecinta kuliner yang menjadikan Lumina Roastery rumah kedua mereka di Cirebon.
            </p>
          </div>

          {/* Action Pill Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              id="open-review-modal-btn"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#8C7A6B] hover:bg-[#A39080] text-white text-xs font-semibold py-2.5 px-4 rounded-full shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Bikin Ulasan</span>
            </button>

            {/* Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                id="testimonial-scroll-left"
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                aria-label="Scroll Kiri"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="testimonial-scroll-right"
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                aria-label="Scroll Kanan"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tag
                  ? 'bg-white text-[#22201F] shadow-sm'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Horizontal Scrollable Review Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scroll-smooth focus:outline-none"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A4744 transparent' }}
        >
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] snap-start bg-[#2B2928] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#8C7A6B]/50 transition-all flex flex-col justify-between shadow-lg hover:shadow-xl"
            >
              <div>
                {/* Header: Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-white/40">{item.date}</span>
                </div>

                {/* Tag & Favorite Menu */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {item.tag && (
                    <span className="inline-block bg-[#8C7A6B]/20 text-[#D4C3B3] text-[10px] font-medium px-2.5 py-0.5 rounded-full border border-[#8C7A6B]/30">
                      {item.tag}
                    </span>
                  )}
                  {item.favoriteMenu && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded-full">
                      <Coffee className="w-3 h-3 text-[#D4C3B3]" />
                      <span>{item.favoriteMenu}</span>
                    </span>
                  )}
                </div>

                {/* Quote Comment */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-[#8C7A6B]/20 absolute -top-2 -left-1 transform -scale-x-100" />
                  <p className="text-white/85 text-xs sm:text-sm font-light leading-relaxed relative z-10 pl-2">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-medium text-white truncate">{item.name}</h4>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C7A6B] flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-white/50 truncate">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Bottom Info */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Nilai Rata-rata <strong>4.9 / 5.0</strong> dari 450+ ulasan Google Maps</span>
          </div>
          <p className="font-light">
            Geser untuk melihat ulasan lainnya atau klik <strong>Bikin Ulasan</strong> untuk berbagi cerita Anda.
          </p>
        </div>
      </div>

      {/* Modal Bikin Ulasan */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#2B2928] text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-white/15 shadow-2xl relative">
            <button
              id="close-review-modal"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#8C7A6B]/20 flex items-center justify-center text-[#D4C3B3]">
                <MessageSquareHeart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white">Tulis Ulasan Anda</h3>
                <p className="text-xs text-white/60">Bagikan pengalaman Anda ngopi & makan di Lumina</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl">Terima Kasih!</h4>
                <p className="text-xs text-white/70">Ulasan Anda berhasil ditambahkan ke daftar ulasan Lumina Roastery.</p>
              </div>
            ) : (
              <form id="write-review-form" onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label htmlFor="review-author" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Nama Anda *
                  </label>
                  <input
                    id="review-author"
                    type="text"
                    required
                    placeholder="Cth: Ratna Sari"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#8C7A6B]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="review-role" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Pekerjaan / Status
                    </label>
                    <input
                      id="review-role"
                      type="text"
                      placeholder="Cth: Penikmat Kopi"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#8C7A6B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="review-rating" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Rating Bintang
                    </label>
                    <select
                      id="review-rating"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#343230] border border-white/15 text-sm text-white focus:outline-none focus:border-[#8C7A6B] cursor-pointer"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 / 5)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 / 5)</option>
                      <option value={3}>⭐⭐⭐ (3 / 5)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="review-menu" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Menu Favorit
                    </label>
                    <input
                      id="review-menu"
                      type="text"
                      placeholder="Cth: V60 Gayo"
                      value={newReview.favoriteMenu}
                      onChange={(e) => setNewReview({ ...newReview, favoriteMenu: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#8C7A6B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="review-tag" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Kesan Utama
                    </label>
                    <select
                      id="review-tag"
                      value={newReview.tag}
                      onChange={(e) => setNewReview({ ...newReview, tag: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#343230] border border-white/15 text-sm text-white focus:outline-none focus:border-[#8C7A6B] cursor-pointer"
                    >
                      <option value="Suasana Nyaman">Suasana Nyaman</option>
                      <option value="Signature Latte">Signature Latte</option>
                      <option value="WFC Nyaman">WFC Nyaman</option>
                      <option value="Makanan Lezat">Makanan Lezat</option>
                      <option value="Specialty Coffee">Specialty Coffee</option>
                      <option value="Pelayanan Ramah">Pelayanan Ramah</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="review-comment" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Ulasan / Komentar Anda *
                  </label>
                  <textarea
                    id="review-comment"
                    required
                    rows={3}
                    placeholder="Ceritakan pengalaman Anda bersantai atau mencicipi hidangan kami..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#8C7A6B] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    id="submit-user-review-btn"
                    type="submit"
                    className="w-full bg-[#8C7A6B] hover:bg-[#A39080] text-white py-3.5 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Publikasikan Ulasan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

