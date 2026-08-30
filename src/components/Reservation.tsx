import React from 'react';
import { Clock, Phone, ArrowRight } from 'lucide-react';
import { WA_NUMBER } from '../data/cafeData';

export const Reservation: React.FC = () => {
  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name');
    const date = fd.get('date');
    const time = fd.get('time');
    const pax = fd.get('pax');
    const notes = fd.get('notes') || '-';

    const text = `Halo Lumina Roastery, saya ingin reservasi meja.%0A%0A*Nama:* ${name}%0A*Tanggal:* ${date}%0A*Waktu:* ${time}%0A*Jumlah Pax:* ${pax} Orang%0A*Catatan:* ${notes}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="reservation" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-5/12">
          <span className="text-[#8C7A6B] text-xs uppercase tracking-[0.2em] font-medium mb-3 block">
            Booking
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C2A29] mb-6">
            Reservasi Meja
          </h2>
          <p className="text-gray-600 font-light mb-10 leading-relaxed">
            Pastikan Anda mendapatkan tempat duduk terbaik, terutama pada akhir pekan.
            Isi formulir di samping, dan sistem kami akan mengarahkan Anda ke WhatsApp
            untuk konfirmasi instan dengan tim kami.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#F9F8F6] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#8C7A6B]" />
              </div>
              <div>
                <h4 className="font-medium text-[#2C2A29]">Jam Operasional</h4>
                <p className="text-sm text-gray-500 mt-1">Setiap Hari: 08:00 - 23:00</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#F9F8F6] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#8C7A6B]" />
              </div>
              <div>
                <h4 className="font-medium text-[#2C2A29]">Kontak Cepat</h4>
                <p className="text-sm text-gray-500 mt-1">+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 bg-[#F9F8F6] p-8 md:p-12 rounded-2xl shadow-sm border border-black/5">
          <form id="reservation-form" onSubmit={handleReservation} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="res-name"
                  className="block text-sm font-medium text-[#2C2A29] mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  id="res-name"
                  required
                  name="name"
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-colors"
                  placeholder="Cth: Budi Santoso"
                />
              </div>
              <div>
                <label
                  htmlFor="res-pax"
                  className="block text-sm font-medium text-[#2C2A29] mb-2"
                >
                  Jumlah Orang (Pax)
                </label>
                <select
                  id="res-pax"
                  required
                  name="pax"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-colors cursor-pointer"
                >
                  <option value="1-2">1 - 2 Orang</option>
                  <option value="3-4">3 - 4 Orang</option>
                  <option value="5-6">5 - 6 Orang</option>
                  <option value="7+">7+ Orang (Group)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="res-date"
                  className="block text-sm font-medium text-[#2C2A29] mb-2"
                >
                  Tanggal
                </label>
                <input
                  id="res-date"
                  required
                  name="date"
                  type="date"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="res-time"
                  className="block text-sm font-medium text-[#2C2A29] mb-2"
                >
                  Waktu Kunjungan
                </label>
                <input
                  id="res-time"
                  required
                  name="time"
                  type="time"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-colors"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="res-notes"
                className="block text-sm font-medium text-[#2C2A29] mb-2"
              >
                Catatan Tambahan (Opsional)
              </label>
              <textarea
                id="res-notes"
                name="notes"
                rows={3}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] transition-colors resize-none"
                placeholder="Cth: Minta meja di dekat jendela, ada anak kecil, dll."
              ></textarea>
            </div>
            <button
              id="submit-reservation-btn"
              type="submit"
              className="w-full bg-[#2C2A29] text-white py-4 rounded-lg font-medium tracking-wide hover:bg-[#4A4744] transition-colors flex justify-center items-center space-x-2 shadow-md cursor-pointer"
            >
              <span>Lanjutkan ke WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
