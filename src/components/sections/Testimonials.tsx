import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_ROW_1, TESTIMONIALS_ROW_2, Testimonial } from '../../data/testimonials.ts';
import { GlassCard } from '../ui/GlassCard.tsx';

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 px-2.5">
      <GlassCard className="p-6 h-full flex flex-col justify-between border-white/[0.08] hover:border-white/[0.18] transition-all">
        <div>
          {/* Rating stars & highlight pill */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex text-[#c8ff00]">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-[11px] font-medium text-[#c8ff00] bg-[#c8ff00]/10 px-2 py-0.5 rounded-full border border-[#c8ff00]/20 truncate max-w-[180px]">
              {item.highlight}
            </span>
          </div>

          {/* Feedback text */}
          <p className="text-xs sm:text-sm text-[#f5f5f5] leading-relaxed mb-6 font-normal">
            "{item.text}"
          </p>
        </div>

        {/* Student metadata */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center font-bold text-xs text-white">
              {item.name.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                <span>{item.name}</span>
                <span title={item.country}>{item.countryFlag}</span>
              </p>
              <p className="text-[11px] text-[#8b8b92]">
                {item.role} · {item.companyOrCity}
              </p>
            </div>
          </div>
          <ShieldCheck className="w-4 h-4 text-[#c8ff00]/70 shrink-0" title="Avis vérifié" />
        </div>
      </GlassCard>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section id="avis" className="py-20 md:py-32 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-[#c8ff00] font-semibold mb-2">
          Les Résultats
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Ils ont sauté le pas
        </h2>
        <div className="flex items-center justify-center gap-2 text-sm text-[#8b8b92]">
          <div className="flex text-[#c8ff00]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-semibold text-white">5/5 de moyenne</span>
          <span>·</span>
          <span>184 créateurs et designers formés</span>
        </div>
      </div>

      {/* Marquee Row 1 (moving left) */}
      <div className="relative mb-5 overflow-hidden pause-on-hover mask-fade">
        <div className="animate-marquee-left">
          {/* Duplicate row twice for infinite loop */}
          {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1].map((item, index) => (
            <TestimonialCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (moving right) */}
      <div className="relative overflow-hidden pause-on-hover mask-fade">
        <div className="animate-marquee-right">
          {/* Duplicate row twice for infinite loop */}
          {[...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2].map((item, index) => (
            <TestimonialCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
