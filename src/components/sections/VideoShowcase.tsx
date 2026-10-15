import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Wand2 } from 'lucide-react';
import productShowcaseImg from '../../assets/images/showcase_product_motion_1792078647564.jpg';
import saasShowcaseImg from '../../assets/images/showcase_saas_motion_1792078647575.jpg';
import kineticShowcaseImg from '../../assets/images/showcase_kinetic_type_1792078667829.jpg';

interface ProjectSample {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  promptSnippet: string;
  image: string;
  durationSec: number;
}

const PROJECTS: ProjectSample[] = [
  {
    id: 'product',
    tabLabel: 'Publicité Produit 3D',
    badge: 'Packshot Cosmétique E-commerce',
    title: 'Tes propres publicités de produits de luxe animées',
    promptSnippet: 'Cinematic 3D cosmetic bottles floating with liquid splashes, golden sparkles, studio lighting, smooth 60fps orbit...',
    image: productShowcaseImg,
    durationSec: 15,
  },
  {
    id: 'saas',
    tabLabel: 'Dashboard SaaS',
    badge: 'Interface & Motion UI',
    title: 'Des démonstrations logicielles qui convertissent les investisseurs',
    promptSnippet: 'Isometric dark mode UI dashboard with glowing green line graphs, real-time metrics animating upward, subtle camera tilt...',
    image: saasShowcaseImg,
    durationSec: 18,
  },
  {
    id: 'kinetic',
    tabLabel: 'Typographie Cinétique',
    badge: 'Identité & Titrages',
    title: 'Des lettrages 3D chromés et des transitions vectorielles fluides',
    promptSnippet: 'Fluid metallic chrome 3D typography bending into shape with neon edge rim lighting, particle drift...',
    image: kineticShowcaseImg,
    durationSec: 12,
  },
];

export const VideoShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectSample>(PROJECTS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(38); // 38% start

  // Simulated timeline playback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const formatTime = (pct: number, totalSec: number) => {
    const cur = Math.floor((pct / 100) * totalSec);
    const m = Math.floor(cur / 60);
    const s = cur % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="apercu" className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-widest text-[#c8ff00] font-semibold mb-2">
          Aperçu Réel · Ce que tu apprendras à générer
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          Un seul prompt. 2 minutes de calcul. Rendu d’élite.
        </h2>
      </div>

      {/* Interactive Tabs */}
      <div className="flex items-center justify-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] max-w-md mx-auto mb-6 overflow-x-auto">
        {PROJECTS.map((proj) => (
          <button
            key={proj.id}
            onClick={() => {
              setActiveProject(proj);
              setProgress(15);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeProject.id === proj.id
                ? 'bg-[#c8ff00] text-[#0a0a0b] shadow-sm font-semibold'
                : 'text-[#8b8b92] hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {proj.tabLabel}
          </button>
        ))}
      </div>

      {/* Video Container Shell */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/[0.12] shadow-[0_20px_70px_rgba(0,0,0,0.85)] group">
        {/* Top header bar within player */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] shadow-[0_0_8px_#c8ff00]" />
            <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
              {activeProject.badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
              className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/90 backdrop-blur-md border border-white/[0.1] transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#c8ff00]" />}
            </button>
          </div>
        </div>

        {/* Video Canvas Area */}
        <div
          className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center cursor-pointer select-none"
          onClick={togglePlay}
        >
          <img
            src={activeProject.image}
            alt={activeProject.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
          />

          {/* Dark gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Central Play/Pause trigger */}
          <div
            className={`absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
              isPlaying
                ? 'opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-md border border-white/20 text-white'
                : 'opacity-100 bg-[#c8ff00] text-[#0a0a0b] shadow-[0_0_40px_rgba(200,255,0,0.45)] hover:scale-105'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-7 h-7 fill-current ml-1" />
            )}
          </div>

          {/* Prompt banner preview in video */}
          <div className="absolute bottom-16 inset-x-4 sm:inset-x-8 z-20 pointer-events-none">
            <div className="p-3 sm:p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/[0.1] max-w-xl">
              <div className="flex items-center gap-2 mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#c8ff00]">
                <Wand2 className="w-3 h-3" /> Prompt IA utilisé
              </div>
              <p className="text-xs text-white/90 font-mono line-clamp-2">
                "{activeProject.promptSnippet}"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom player controls bar */}
        <div className="p-4 sm:p-5 bg-[#0e0e11] border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Mettre en pause' : 'Lancer la lecture'}
            className="p-2.5 rounded-full bg-white/[0.08] hover:bg-[#c8ff00] hover:text-[#0a0a0b] text-white transition-all shrink-0"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          {/* Timeline track */}
          <div className="flex-1 w-full flex items-center gap-3">
            <span className="text-xs font-mono text-[#8b8b92] shrink-0 tabular-nums">
              {formatTime(progress, activeProject.durationSec)}
            </span>

            <div
              className="relative flex-1 h-2 rounded-full bg-white/[0.1] cursor-pointer group/bar overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newProgress = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
                setProgress(newProgress);
              }}
            >
              <div
                className="absolute top-0 bottom-0 left-0 bg-[#c8ff00] transition-all duration-100 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs font-mono text-[#8b8b92] shrink-0 tabular-nums">
              0:{activeProject.durationSec < 10 ? `0${activeProject.durationSec}` : activeProject.durationSec}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
