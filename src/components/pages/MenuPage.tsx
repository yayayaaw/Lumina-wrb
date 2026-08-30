import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  X, 
  Sparkles, 
  Flame, 
  Award, 
  MessageSquare, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Check, 
  Coffee 
} from 'lucide-react';
import { DETAILED_MENU, WA_NUMBER } from '../../data/cafeData';
import { DetailedMenuItem, MENU_CATEGORIES, MenuCategory } from '../../types';

interface MenuPageProps {
  onBackToHome: () => void;
  onScrollToReservation?: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onBackToHome, onScrollToReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('Semua');
  const [activeFilter, setActiveFilter] = useState<'all' | 'bestseller' | 'new' | 'chef'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<DetailedMenuItem | null>(null);

  // Modal order state
  const [quantity, setQuantity] = useState(1);
  const [selectedTemp, setSelectedTemp] = useState<'Hot' | 'Iced'>('Iced');
  const [orderNotes, setOrderNotes] = useState('');
  const [copiedWA, setCopiedWA] = useState(false);

  const filteredItems = useMemo(() => {
    return DETAILED_MENU.filter((item) => {
      const matchCategory =
        selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.origin && item.origin.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tastingNotes &&
          item.tastingNotes.some((n) =>
            n.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      const matchFilter =
        activeFilter === 'all' ||
        (activeFilter === 'bestseller' && item.isBestSeller) ||
        (activeFilter === 'new' && item.isNew) ||
        (activeFilter === 'chef' && item.isChefPick);

      return matchCategory && matchSearch && matchFilter;
    });
  }, [selectedCategory, searchQuery, activeFilter]);

  const handleOpenDetail = (item: DetailedMenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setSelectedTemp(item.temperature?.includes('Iced') ? 'Iced' : 'Hot');
    setOrderNotes('');
    setCopiedWA(false);
  };

  const handleDirectWAOrder = () => {
    if (!selectedItem) return;
    const tempText = selectedItem.temperature ? ` (${selectedTemp})` : '';
    const noteText = orderNotes.trim() ? `\nCatatan: ${orderNotes.trim()}` : '';
    const totalHarga = (selectedItem.price * quantity).toLocaleString('id-ID');

    const message = `Halo Lumina Roastery, saya ingin memesan menu ini:
- *${selectedItem.name}*${tempText}
- Jumlah: ${quantity} porsi
- Estimasi Total: Rp ${totalHarga}${noteText}

Apakah menu ini ready sekarang? Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] pt-24 pb-20">
      {/* Header & Breadcrumbs */}
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
            <Coffee className="w-4 h-4" />
            <span>Katalog Kuliner & Kopi Artisan</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto mt-8 mb-12">
          <span className="text-[#8C7A6B] uppercase tracking-[0.25em] text-xs font-semibold">
            Daftar Menu & Foto Lengkap
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium mt-2 mb-4 leading-tight">
            Cita Rasa Terkurasi dengan Dedikasi Penuh
          </h1>
          <p className="text-[#6B635B] text-base sm:text-lg font-light leading-relaxed">
            Dari biji kopi pilihan nusantara yang disangrai sendiri hingga makanan penutup bergaya Eropa. Klik setiap menu untuk melihat foto detail dan memesan langsung via WhatsApp.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2C2A29] text-white shadow-sm'
                  : 'bg-white text-[#6B635B] border border-[#EAE6DF] hover:bg-[#F2EFE9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sub-Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Quick Badges Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#8C7A6B] text-white'
                  : 'bg-black/5 text-[#6B635B] hover:bg-black/10'
              }`}
            >
              Semua Koleksi
            </button>
            <button
              onClick={() => setActiveFilter('bestseller')}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === 'bestseller'
                  ? 'bg-[#B08968] text-white'
                  : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              Best Seller
            </button>
            <button
              onClick={() => setActiveFilter('new')}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === 'new'
                  ? 'bg-[#7F5539] text-white'
                  : 'bg-orange-50 text-orange-800 border border-orange-200 hover:bg-orange-100'
              }`}
            >
              <Flame className="w-3 h-3" />
              Menu Baru
            </button>
            <button
              onClick={() => setActiveFilter('chef')}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === 'chef'
                  ? 'bg-[#2C2A29] text-white'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <Award className="w-3 h-3" />
              Chef's Pick
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kopi, makanan, rasa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EAE6DF] rounded-full text-xs sm:text-sm focus:outline-none focus:border-[#8C7A6B]"
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

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#EAE6DF] p-8">
            <Coffee className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-[#2C2A29]">Menu Tidak Ditemukan</h3>
            <p className="text-sm text-[#6B635B] mt-1">
              Coba gunakan kata kunci lain atau bersihkan filter pencarian Anda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-[#2C2A29] text-white text-xs rounded-full cursor-pointer"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenDetail(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Photo & Badge */}
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-medium flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Klik untuk Pesan / Detail
                      </span>
                    </div>

                    {/* Badges on Top */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                      {item.isBestSeller && (
                        <span className="bg-[#B08968] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                          ★ Best Seller
                        </span>
                      )}
                      {item.isChefPick && (
                        <span className="bg-[#2C2A29] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                          Chef's Pick
                        </span>
                      )}
                      {item.isNew && (
                        <span className="bg-amber-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                          New
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#2C2A29] text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                        {item.priceFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-[#8C7A6B] font-medium mb-1.5">
                      <span>{item.category}</span>
                      {item.origin && (
                        <span className="text-gray-400 font-light truncate max-w-[150px]">
                          {item.origin}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#2C2A29] group-hover:text-[#8C7A6B] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6B635B] mt-2 font-light line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Tasting notes chips */}
                    {item.tastingNotes && item.tastingNotes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                        {item.tastingNotes.map((note) => (
                          <span
                            key={note}
                            className="bg-[#F6F4F0] text-[#7A6E65] text-[10px] px-2 py-0.5 rounded-md font-medium"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDetail(item);
                    }}
                    className="w-full py-2.5 bg-[#F6F4F0] hover:bg-[#2C2A29] text-[#2C2A29] hover:text-white rounded-full text-xs font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Lihat & Pesan via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Item Detail & WhatsApp Order Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="overflow-y-auto">
              {/* Header Image */}
              <div className="relative h-64 sm:h-72 w-full bg-gray-100">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-white/80 text-xs uppercase tracking-widest font-semibold">
                      {selectedItem.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                      {selectedItem.name}
                    </h2>
                    <p className="text-[#D4C3B3] text-lg font-semibold mt-1">
                      {selectedItem.priceFormatted}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details & Customization Form */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-bold mb-1.5">
                    Deskripsi Rasa & Bahan
                  </h4>
                  <p className="text-sm text-[#554F49] font-light leading-relaxed">
                    {selectedItem.desc}
                  </p>
                </div>

                {selectedItem.origin && (
                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE6DF] text-xs">
                    <span className="font-semibold text-[#2C2A29]">Asal Biji / Bahan: </span>
                    <span className="text-[#6B635B]">{selectedItem.origin}</span>
                  </div>
                )}

                {selectedItem.tastingNotes && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-bold mb-2">
                      Sensory Tasting Notes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="bg-[#F0EBE1] text-[#5C534B] text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Temperature Selector if applicable */}
                {selectedItem.temperature && selectedItem.temperature.length > 1 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-bold mb-2">
                      Pilihan Suhu
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedItem.temperature.map((temp) => (
                        <button
                          key={temp}
                          type="button"
                          onClick={() => setSelectedTemp(temp)}
                          className={`py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            selectedTemp === temp
                              ? 'bg-[#2C2A29] text-white shadow-sm'
                              : 'bg-white border border-[#EAE6DF] text-[#6B635B] hover:bg-gray-50'
                          }`}
                        >
                          {temp === 'Hot' ? '☕ Panas (Hot)' : '🧊 Dingin (Iced)'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-bold mb-2">
                      Jumlah Porsi
                    </h4>
                    <div className="flex items-center gap-3 bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl p-1.5 w-fit">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-semibold text-sm w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-bold mb-2">
                      Catatan Tambahan (Opsi)
                    </h4>
                    <input
                      type="text"
                      placeholder="Contoh: Less sugar, oat milk..."
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl focus:outline-none focus:border-[#8C7A6B]"
                    />
                  </div>
                </div>

                {/* Order Summary & WhatsApp Button */}
                <div className="pt-4 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-gray-500">Estimasi Total:</span>
                    <p className="font-serif text-xl font-bold text-[#2C2A29]">
                      Rp {(selectedItem.price * quantity).toLocaleString('id-ID')}
                    </p>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={handleDirectWAOrder}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      Pesan via WhatsApp Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
