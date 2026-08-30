import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles, 
  Send, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Gift, 
  Heart, 
  GraduationCap 
} from 'lucide-react';
import { CAREER_JOBS, WA_NUMBER } from '../../data/cafeData';
import { CareerJob } from '../../types';

interface CareerPageProps {
  onBackToHome: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ onBackToHome }) => {
  const [selectedDept, setSelectedDept] = useState<string>('Semua');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(CAREER_JOBS[0].id);
  const [applyingJob, setApplyingJob] = useState<CareerJob | null>(null);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experienceText, setExperienceText] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const departments = ['Semua', 'Bar & Coffee', 'Kitchen & Pastry', 'Service & Floor', 'Marketing & Creative'] as const;

  const filteredJobs = useMemo(() => {
    return CAREER_JOBS.filter(
      (job) => selectedDept === 'Semua' || job.department === selectedDept
    );
  }, [selectedDept]);

  const handleOpenApply = (job: CareerJob) => {
    setApplyingJob(job);
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setExperienceText('');
    setPortfolioLink('');
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingJob || !fullName || !phone) return;

    const message = `Halo HRD Lumina Roastery, saya ingin melamar pekerjaan:
- *Posisi:* ${applyingJob.title} (${applyingJob.department})
- *Nama Pelamar:* ${fullName}
- *No. WhatsApp:* ${phone}
- *Email:* ${email || '-'}
- *Ringkasan Pengalaman:* ${experienceText || '-'}
- *Link CV / Portofolio:* ${portfolioLink || '-'}

Mohon informasi proses seleksi selanjutnya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] pt-24 pb-20">
      {/* Breadcrumb */}
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
            <Briefcase className="w-4 h-4" />
            <span>Karir & Peluang Kerja</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto mt-8 mb-12">
          <span className="text-[#8C7A6B] uppercase tracking-[0.25em] text-xs font-semibold">
            Bergabung Bersama Kami
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium mt-2 mb-4 leading-tight">
            Tumbuh & Berkarya di Lumina Roastery
          </h1>
          <p className="text-[#6B635B] text-base sm:text-lg font-light leading-relaxed">
            Kami mencari individu penuh semangat, berjiwa ramah, dan mencintai dunia hospitality untuk menciptakan pengalaman kuliner terbaik bagi setiap tamu.
          </p>
        </div>

        {/* Perks / Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Gift,
              title: "Kompensasi Kompetitif",
              desc: "Gaji pokok, service charge bulanan, tunjangan makan harian, dan bonus target."
            },
            {
              icon: GraduationCap,
              title: "Pelatihan & Sertifikasi",
              desc: "Workshop barista berkala, cupping sensory, dan dukungan sertifikasi profesional."
            },
            {
              icon: Heart,
              title: "Kultur Kerja Hangat",
              desc: "Lingkungan kerja inklusif, saling mendukung, dan menjunjung tinggi kesetaraan."
            },
            {
              icon: Sparkles,
              title: "Free Coffee & Meals",
              desc: "Nikmati kopi specialty gratis setiap shift dan hidangan staf bernutrisi tinggi."
            }
          ].map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#EAE6DF] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] flex items-center justify-center text-[#8C7A6B] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#2C2A29] mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-[#6B635B] font-light leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedDept === dept
                  ? 'bg-[#2C2A29] text-white shadow-sm'
                  : 'bg-white text-[#6B635B] border border-[#EAE6DF] hover:bg-[#F2EFE9]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-sm transition-all"
              >
                {/* Job Header Bar */}
                <div
                  onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C7A6B] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#EAE6DF]">
                        {job.department}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2A29]">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B635B] font-light max-w-2xl">
                      {job.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-left md:text-right text-xs text-[#8C7A6B]">
                      <div className="flex items-center gap-1.5 md:justify-end">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:justify-end mt-1 text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Batas: {job.deadline}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="Toggle detail"
                      className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-gray-600 hover:bg-black/10 transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 pt-0 border-t border-gray-100 bg-[#FCFBF9] space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                      {/* Tanggung Jawab */}
                      <div>
                        <h4 className="font-serif text-base font-semibold text-[#2C2A29] mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#8C7A6B]" />
                          Tanggung Jawab Utama
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#554F49] font-light leading-relaxed">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#8C7A6B] font-bold">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Kualifikasi */}
                      <div>
                        <h4 className="font-serif text-base font-semibold text-[#2C2A29] mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#8C7A6B]" />
                          Persyaratan & Kualifikasi
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#554F49] font-light leading-relaxed">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#8C7A6B] font-bold">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Benefit */}
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-serif text-base font-semibold text-[#2C2A29] mb-3">
                        Benefit & Fasilitas
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#554F49]">
                        {job.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">
                      <p className="text-xs text-[#8C7A6B]">
                        Pengalaman minimal: <span className="font-semibold text-[#2C2A29]">{job.experience}</span>
                      </p>
                      <button
                        onClick={() => handleOpenApply(job)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2C2A29] hover:bg-[#8C7A6B] text-white px-8 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow transition-colors cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Lamar Posisi Ini Sekarang
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Application Modal Form */}
      {applyingJob && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setApplyingJob(null)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-gray-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#2C2A29]">
                  Lamaran Berhasil Terkirim!
                </h3>
                <p className="text-xs sm:text-sm text-[#6B635B] font-light max-w-md mx-auto leading-relaxed">
                  Data Anda telah kami arahkan ke tim HRD Lumina Roastery via WhatsApp. Kami akan menghubungi kandidat yang lolos tahap administrasi dalam waktu 3-5 hari kerja.
                </p>
                <button
                  onClick={() => setApplyingJob(null)}
                  className="mt-4 px-6 py-2.5 bg-[#2C2A29] text-white text-xs rounded-full cursor-pointer"
                >
                  Tutup Jendela
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-[#8C7A6B] uppercase tracking-wider">
                    Formulir Pendaftaran
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2C2A29] mt-0.5">
                    Lamar: {applyingJob.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light mt-1">
                    Silakan isi data diri singkat Anda. Tim HRD kami akan langsung meninjau profil Anda.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C2A29] mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Rian Pratama"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl focus:outline-none focus:border-[#8C7A6B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C2A29] mb-1">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl focus:outline-none focus:border-[#8C7A6B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C2A29] mb-1">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@anda.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl focus:outline-none focus:border-[#8C7A6B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C2A29] mb-1">
                      Ringkasan Pengalaman Kerja / Keahlian
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan singkat pengalaman kerja relevan Anda sebelumnya..."
                      value={experienceText}
                      onChange={(e) => setExperienceText(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl focus:outline-none focus:border-[#8C7A6B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C2A29] mb-1">
                      Link CV / Google Drive / Akun Instagram Portofolio
                    </label>
                    <input
                      type="text"
                      placeholder="https://drive.google.com/... atau @username"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl focus:outline-none focus:border-[#8C7A6B]"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setApplyingJob(null)}
                    className="px-4 py-2.5 text-xs font-medium text-gray-500 hover:text-gray-700"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Kirim Lamaran via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
