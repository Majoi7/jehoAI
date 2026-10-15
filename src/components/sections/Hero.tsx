import React from 'react';
import { ArrowRight, Play, Star, Sparkles, Layers, Video, Infinity, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { DotGrid } from '../ui/DotGrid';
import { useMousePosition } from '../../hooks/useMousePosition';
import { CurrencyCode, convertPrice } from '../../utils/pricing';
import instructorPhoto from '../../assets/images/instructor_portrait_1792078629331.jpg';

interface HeroProps {
  onOpenCheckout: () => void;
  currency: CurrencyCode;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, currency }) => {
  const containerRef = useMousePosition<HTMLDivElement>();
  const priceInfo = convertPrice(39, currency);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      style={{
        // default fallback if mouse hasn't moved yet
        '--mx': '50%',
        '--my': '25%',
      } as React.CSSProperties}
    >
      <DotGrid />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Release Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-[#c8ff00] mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse" />
          <span>Nouvelle Édition · Motion Design & Vidéo IA 2026</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6 text-balance">
          Crée du motion design pro{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5f5f5] to-[#c8ff00]">
            avec l'IA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#8b8b92] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Un programme complet qui te montre de façon simple comment créer du montage vidéo cinématique et du motion design
          d’élite sans logiciels complexes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenCheckout}
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto text-base px-8 py-3.5"
          >
            Je rejoins la formation · {priceInfo.formatted}
          </Button>

          <a href="#programme" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              icon={<Play className="w-4 h-4 fill-white/80 text-transparent" />}
              className="w-full sm:w-auto text-base"
            >
              Voir le programme
            </Button>
          </a>
        </div>

        {/* Instructor & Reviews Proof Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-2.5 px-5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#8b8b92] mb-12">
          <div className="flex items-center gap-2.5">
            <img
              src={instructorPhoto}
              alt="Alexandre Vane"
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-full object-cover border border-[#c8ff00]/40"
            />
            <span className="text-white font-medium">Avec Alexandre Vane</span>
            <span className="hidden sm:inline text-[#8b8b92]">· Lead Motion & IA</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-white/[0.1]" />

          <div className="flex items-center gap-1.5 text-white">
            <div className="flex text-[#c8ff00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold tabular-nums">4.9/5</span>
            <span className="text-[#8b8b92]">(184 avis vérifiés)</span>
          </div>
        </div>

        {/* 4 Feature highlight metrics badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-left">
            <div className="w-9 h-9 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">5 modules</p>
              <p className="text-[11px] text-[#8b8b92]">De A à Z</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-left">
            <div className="w-9 h-9 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center shrink-0">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">14 chapitres</p>
              <p className="text-[11px] text-[#8b8b92]">Vidéos pas à pas</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-left">
            <div className="w-9 h-9 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center shrink-0">
              <Infinity className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">À vie</p>
              <p className="text-[11px] text-[#8b8b92]">Accès illimité</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-left">
            <div className="w-9 h-9 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Inclus</p>
              <p className="text-[11px] text-[#8b8b92]">Discord & Prompts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
