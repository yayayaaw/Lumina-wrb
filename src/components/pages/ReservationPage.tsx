import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Phone, 
  Calendar, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Send,
  Coffee,
  ShieldCheck,
  Building,
  HeartHandshake
} from 'lucide-react';
import { CAFE_NAME, WA_NUMBER, CAFE_ADDRESS, CAFE_HOURS, CAFE_MAPS_URL } from '../../data/cafeData';

interface ReservationPageProps {
  onBackToHome: () => void;
  onNavigateToMenu?: () => void;
}

export const ReservationPage: React.FC<ReservationPageProps> = ({
  onBackToHome,
  onNavigateToMenu
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '14:00',
    pax: '2',
    area: 'Indoor Ac & Lounge (Bebas Asap)',
    occasion: 'Casual Coffee & Santai',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Halo ${CAFE_NAME}! ☕%0A` +
      `Saya ingin melakukan reservasi meja melalui website:%0A%0A` +
      `👤 *Nama Lengkap:* ${formData.name}%0A` +
      `📱 *Nomor WA / Telp:* ${formData.phone || '-' } %0A` +
      `📅 *Tanggal Kunjungan:* ${formData.date}%0A` +
      `⏰ *Jam Kunjungan:* ${formData.time} WIB%0A` +
      `👥 *Jumlah Pax:* ${formData.pax} Orang%0A` +
      `📍 *Pilihan Area:* ${formData.area}%0A` +
      `🎉 *Keperluan:* ${formData.occasion}%0A` +
      `📝 *Catatan Khusus:* ${formData.notes || '-' }%0A%0A` +
      `Mohon konfirmasi ketersediaan mejanya ya. Terima kasih banyak! 🙏`;

    setSubmitted(true);
    
    // Open WhatsApp
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] pt-24 pb-20">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE6DF]">
          <button
            id="back-home-from-reservation-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B635B] hover:text-[#2C2A29] transition-colors py-2 px-3 rounded-full hover:bg-black/5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B]">
            <Calendar className="w-4 h-4" />
            <span>Layanan Reservasi Resmi</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-lg bg-[#2C2A29] text-white">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt="Reservasi Meja Lumina Roastery"
            className="w-full h-[280px] sm:h-[360px] object-cover opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-3xl">
            <span className="text-[#D4C3B3] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Booking & Private Seating
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-4">
              Reservasi Meja & Ruang Spesial
            </h1>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Dapatkan kenyamanan terbaik untuk momen bersantai, pertemuan bisnis, perayaan ulang tahun, atau sesi kerja fokus di Lumina Roastery.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE6DF] shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F2EFE9]">
                <div className="w-10 h-10 rounded-2xl bg-[#F7F4EE] flex items-center justify-center text-[#8C7A6B]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-[#2C2A29]">Formulir Reservasi</h2>
                  <p className="text-xs text-[#8C7A6B]">Isi detail di bawah untuk diteruskan langsung ke WhatsApp tim kami</p>
                </div>
              </div>

              <form id="dedicated-reservation-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-[#6B635B] mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Cth: Dimas Wicaksono"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E0DACE] text-sm text-[#2C2A29] focus:outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#6B635B] mb-2">
                      Nomor WhatsApp / Telp *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="Cth: 081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E0DACE] text-sm text-[#2C2A29] focus:outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="form-date" className="block text-xs font-semibold uppercase tracking-wider text-[#6B635B] mb-2">
                      Tanggal Kunjungan *
                    </label>
                    <input
                      id="form-date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E0DACE] text-sm text-[#2C2A29] focus:outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-all cursor-pointer"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-time" className="block text-xs font-semibold uppercase tracking-wider text-[#6B635B] mb-2">
                      Jam Kunjungan *
                    </label>
                    <select
                      id="form-time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E0DACE] text-sm text-[#2C2A29] focus:outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-all cursor-pointer"
                    >
                      <option value="09:00">09:00 WIB (Pagi)</option>
                      <option value="10:30">10:30 WIB (Pagi)</option>
                      <option value="12:00">12:00 WIB (Makan Siang)</option>
                      <option value="14:00">14:00 WIB (Siang)</option>
                      <option value="16:00">16:00 WIB (Sore)</option>
                      <option value="17:30">17:30 WIB (Senja)</option>
                      <option value="19:00">19:00 WIB (Makan Malam)</option>
                      <option value="20:30">20:30 WIB (Malam)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-pax" className="block text-xs font-semibold uppercase tracking-wider text-[#6B635B] mb-2">
                      Jumlah Pax *
                    </label>
                    <select
                      id="form-pax"
                      value={formData.pax}
                      onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E0DACE] text-sm text-[#2C2A29] focus:outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-all cursor-pointer"
                    >
                      <option value="1">1 Orang (Solo Bar / WFC)</option>
                      <option value="2">2 Orang (Couple / Date)</option>
                      <option value="3-4">3 - 4 Orang (Small Group)</option>
                      <option value="5-8">5 - 8 Orang (Family / Team)</option>
                      <option value="9-15">9 - 15 Orang (Private Room)</option>
                      <option value="15+">15+ Orang (Full Event Area)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-area" className="block text-xs font-semibold uppercase tracking-wider text-[#6B635B] mb-2">
                      Pilihan Area Tempat Duduk
                    </label>
                    <select
                      id="form-area"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E0DACE] text-sm text-[#2C2A29] focus:outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-all cursor-pointer"
                    >
                      <option value="Indoor AC & Central Lounge (Bebas Asap)">Indoor AC & Central Lounge</option>
                      <option value="Glasshouse Sunlit Garden Area">Glasshouse Garden Pavilion</option>
                      <option value="Slow Bar & Coffee Counter">Slow Bar (Depan Barista)</option>
                      <option value="Backyard Outdoor Seating (Smoking Area)">Backyard Outdoor (Smoking)</option>
                      <option value="VIP Private Meeting Room (AC + Smart TV)">VIP Private Meeting Room</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-occasion" className="block text-xs font-semibold uppercase tracking-wider text-[#6B635B] mb-2">
                      Keperluan / Momen Kunjungan
                    </label>
                    <select
                      id="form-occasion"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E0DACE] text-sm text-[#2C2A29] focus:outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-all cursor-pointer"
                    >
                      <option value="Casual Coffee & Santai">Casual Coffee & Santai</option>
                      <option value="Work From Cafe / Meeting Kerja">Work From Cafe / Meeting Kerja</option>
                      <option value="Ulang Tahun / Birthday Gathering">Perayaan Ulang Tahun</option>
                      <option value="Anniversary / Romantic Date">Anniversary / Romantic Date</option>
                      <option value="Family Dinner / Makan Keluarga">Makan Bersama Keluarga</option>
                      <option value="Arisan / Komunitas">Gathering Komunitas / Arisan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="form-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#6B635B] mb-2">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    id="form-notes"
                    rows={3}
                    placeholder="Contoh: Butuh meja dekat stopkontak, request baby chair, ada kue ulang tahun yang mau dititipkan, dsb."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E0DACE] text-sm text-[#2C2A29] focus:outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-all resize-none"
                  ></textarea>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#ECE6DC] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#8C7A6B] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#6B635B] leading-relaxed">
                    Reservasi tidak dipungut biaya booking fee untuk area reguler. Tim kami akan mengonfirmasi meja Anda dalam 5-15 menit via WhatsApp.
                  </p>
                </div>

                <button
                  id="submit-whatsapp-reservation"
                  type="submit"
                  className="w-full bg-[#2C2A29] text-white py-4 px-6 rounded-2xl font-medium tracking-wide hover:bg-[#433F3C] transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Send className="w-5 h-5 text-[#D4C3B3]" />
                  <span>Kirim Reservasi ke WhatsApp</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>WhatsApp telah terbuka di tab baru. Silakan kirim pesan otomatis tersebut ke tim admin Lumina Roastery.</span>
                </div>
              )}
            </div>
          </div>

          {/* Info & Policy Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE6DF] shadow-sm space-y-5">
              <h3 className="font-serif text-xl text-[#2C2A29] border-b border-[#F2EFE9] pb-3">
                Informasi Penting
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F7F4EE] flex items-center justify-center text-[#8C7A6B] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2A29]">Jam Operasional</h4>
                  <p className="text-xs text-[#6B635B] mt-0.5">{CAFE_HOURS}</p>
                  <p className="text-[11px] text-[#8C7A6B] mt-1">Dapur hidangan utama buka s.d. 22:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F7F4EE] flex items-center justify-center text-[#8C7A6B] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2A29]">WhatsApp Bantuan Cepat</h4>
                  <p className="text-xs text-[#6B635B] mt-0.5">+62 812-3456-7890</p>
                  <p className="text-[11px] text-[#8C7A6B] mt-1">Respon cepat setiap hari 08:00 - 22:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F7F4EE] flex items-center justify-center text-[#8C7A6B] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2A29]">Lokasi</h4>
                  <p className="text-xs text-[#6B635B] mt-0.5">{CAFE_ADDRESS}</p>
                  <a
                    href={CAFE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-semibold text-[#8C7A6B] underline mt-1 hover:text-[#2C2A29]"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Room Features */}
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#ECE6DC] space-y-4">
              <h3 className="font-serif text-lg text-[#2C2A29]">
                Fasilitas Area Kami
              </h3>

              <ul className="space-y-3 text-xs text-[#524B43]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7A6B] flex-shrink-0 mt-0.5" />
                  <span><strong>Private VIP Room:</strong> Dilengkapi Smart TV 55 inch, HDMI, AC tersendiri, kapasitas s.d. 14 pax (cocok untuk rapat kantor & presentasi).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7A6B] flex-shrink-0 mt-0.5" />
                  <span><strong>Koneksi Internet:</strong> Dedicated high-speed fiber optic WiFi (150 Mbps) dengan stopkontak di setiap barisan meja.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7A6B] flex-shrink-0 mt-0.5" />
                  <span><strong>Tempat Parkir Luas:</strong> Area parkir mobil dan motor aman dengan penjagaan sekuriti 24 jam.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7A6B] flex-shrink-0 mt-0.5" />
                  <span><strong>Musholla & Toilet Bersih:</strong> Tersedia musholla ber-AC yang nyaman dan wangi.</span>
                </li>
              </ul>
            </div>

            {/* Reservation Policy */}
            <div className="bg-white rounded-3xl p-6 border border-[#EAE6DF] text-xs text-[#6B635B] space-y-2">
              <h4 className="font-semibold text-[#2C2A29] text-sm">Ketentuan Reservasi:</h4>
              <p>• Meja yang direservasi akan ditahan maksimal <strong>15 menit</strong> dari jam kedatangan.</p>
              <p>• Jika ada perubahan jadwal atau keterlambatan, silakan hubungi tim kami via WhatsApp.</p>
              <p>• Untuk acara besar / sewa ruangan privat lebih dari 20 orang, mohon reservasi H-2.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
