import React from 'react';
import { FileDown } from 'lucide-react';

interface ToastProps {
  show: boolean;
}

export const Toast: React.FC<ToastProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed top-24 right-6 z-50 bg-[#2C2A29] text-white px-5 py-4 rounded-xl shadow-2xl flex items-center space-x-3 border border-white/10 transition-all duration-300">
      <FileDown className="w-5 h-5 text-[#8C7A6B]" />
      <div>
        <p className="text-sm font-medium">Buku Menu Digital Sedang Disiapkan</p>
        <p className="text-xs text-gray-300">
          Fitur unduh katalog PDF lengkap akan segera hadir.
        </p>
      </div>
    </div>
  );
};
