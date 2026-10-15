import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA, FaqItem } from '../../data/faq.ts';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-widest text-[#c8ff00] font-semibold mb-2">
          Questions Fréquentes
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          Tout ce que tu dois savoir
        </h2>
        <p className="text-sm text-[#8b8b92]">
          Des réponses claires et directes pour démarrer l’esprit tranquille.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((item: FaqItem) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-white/[0.04] border-[#c8ff00]/30 shadow-md'
                  : 'bg-white/[0.02] border-white/[0.07] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff00]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#8b8b92] font-mono shrink-0 uppercase tracking-wider hidden sm:inline">
                    {item.category}
                  </span>
                  <span className="hidden sm:inline text-white/[0.15]">|</span>
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {item.question}
                  </span>
                </div>

                <div
                  className={`p-1.5 rounded-full bg-white/[0.05] text-[#8b8b92] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-white bg-white/[0.1]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#8b8b92] leading-relaxed border-t border-white/[0.04]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
