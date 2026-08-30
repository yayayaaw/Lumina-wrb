import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/cafeData';

export const Faq: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-[#F9F8F6]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8C7A6B] text-xs uppercase tracking-[0.2em] font-medium mb-3 block">
            Pusat Bantuan
          </span>
          <h2 className="font-serif text-4xl text-[#2C2A29]">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              id={`faq-accordion-${idx}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                id={`faq-btn-${idx}`}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span className="font-medium text-[#2C2A29] pr-4">{faq.q}</span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#8C7A6B] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
