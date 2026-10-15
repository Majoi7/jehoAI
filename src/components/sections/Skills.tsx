import React, { useRef } from 'react';
import { Sparkles, ArrowRight, Video, Monitor, Type, Move, Smartphone, Briefcase } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard.tsx';

interface SkillItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverable: string;
}

const SKILLS_LIST: SkillItem[] = [
  {
    number: '01',
    icon: <Sparkles className="w-5 h-5 text-[#c8ff00]" />,
    title: 'Publicités Produits 3D & E-commerce',
    description: 'Donne vie à des flacons cosmétiques, des packshots tech et des textures liquides en suspension sans modélisation complexe.',
    deliverable: 'Rendus photoréalistes 4K',
  },
  {
    number: '02',
    icon: <Monitor className="w-5 h-5 text-[#c8ff00]" />,
    title: 'Interfaces SaaS & Dashboards Animés',
    description: 'Transforme de simples captures d’écrans en trailers logiciels dynamiques avec courbes lumineuses et micro-interactions.',
    deliverable: 'Vidéos de lancement Product Hunt & VC',
  },
  {
    number: '03',
    icon: <Type className="w-5 h-5 text-[#c8ff00]" />,
    title: 'Typographie Cinétique & Lettrages 3D',
    description: 'Crée des titrages percutants en métal chromé, verre fumé et des animations de logos vectoriels fluides.',
    deliverable: 'Titres d’ouverture & identités mémorables',
  },
  {
    number: '04',
    icon: <Move className="w-5 h-5 text-[#c8ff00]" />,
    title: 'Mouvements de Caméras Cinématiques',
    description: 'Maîtrise le traveling orbital, les zooms optiques vertigineux et les transitions fluides sans raccord visible.',
    deliverable: 'Dynamique visuelle fluide à 60fps',
  },
  {
    number: '05',
    icon: <Smartphone className="w-5 h-5 text-[#c8ff00]" />,
    title: 'Formats Verticaux 9:16 Viraux',
    description: 'Conçois des hooks visuels irrésistibles calibrés pour maximiser la rétention sur Instagram Reels, TikTok et Shorts.',
    deliverable: 'Gabarits publicitaires optimisés conversion',
  },
  {
    number: '06',
    icon: <Briefcase className="w-5 h-5 text-[#c8ff00]" />,
    title: 'Monétisation & Vente de Prestations',
    description: 'Apprends à packager ton offre de motion designer IA, rédiger tes devis et facturer entre 800€ et 2 500€ par vidéo.',
    deliverable: 'Modèles de devis & contrat de cession',
  },
];

export const Skills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="competences" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c8ff00] font-semibold mb-2">
              Ce que tu sauras faire
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-xl text-balance">
              De simples prompts à des animations qui impressionnent
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={scrollLeft}
              aria-label="Faire défiler vers la gauche"
              className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/[0.08] transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Faire défiler vers la droite"
              className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/[0.08] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SKILLS_LIST.map((skill) => (
            <div
              key={skill.number}
              className="w-[290px] sm:w-[350px] shrink-0 snap-start"
            >
              <GlassCard glow className="p-7 h-full flex flex-col justify-between border-white/[0.08] hover:border-[#c8ff00]/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#8b8b92]">{skill.number}</span>
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-[#8b8b92] leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[#8b8b92]">Livrable</span>
                  <span className="text-[#c8ff00] font-medium">{skill.deliverable}</span>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
