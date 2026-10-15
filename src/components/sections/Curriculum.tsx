import React, { useState } from 'react';
import { ChevronDown, Layers, Clock, Sparkles, FolderDown, CheckCircle2 } from 'lucide-react';
import { CURRICULUM_DATA, Module } from '../../data/curriculum.ts';
import { GlassCard } from '../ui/GlassCard.tsx';

export const Curriculum: React.FC = () => {
  const [expandedModuleId, setExpandedModuleId] = useState<string>('module-1');

  const toggleModule = (id: string) => {
    setExpandedModuleId(expandedModuleId === id ? '' : id);
  };

  return (
    <section id="programme" className="py-20 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Key Metrics */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c8ff00] font-semibold mb-2">
              Le Programme
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4 text-balance">
              Un parcours clair, module par module
            </h2>
            <p className="text-base text-[#8b8b92] leading-relaxed">
              Des fondations à ta première vidéo publicitaire d’élite, puis la pratique guidée sur de vrais projets :
              un SaaS, une marque physique et des formats viraux.
            </p>
          </div>

          {/* Curriculum Stats Box */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
              <div className="w-10 h-10 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">5 modules progressifs</p>
                <p className="text-xs text-[#8b8b92]">De l’initiation à la vente client</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
              <div className="w-10 h-10 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">14 chapitres pas-à-pas</p>
                <p className="text-xs text-[#8b8b92]">Environ 10 heures de formation vidéo 4K</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
              <div className="w-10 h-10 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center shrink-0">
                <FolderDown className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Templates & Presets inclus</p>
                <p className="text-xs text-[#8b8b92]">Prompts, sons et fichiers projets téléchargeables</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion of Modules */}
        <div className="lg:col-span-7 space-y-3.5">
          {CURRICULUM_DATA.map((mod: Module) => {
            const isExpanded = expandedModuleId === mod.id;

            return (
              <div
                key={mod.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white/[0.05] border-[#c8ff00]/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
                    : 'bg-white/[0.02] border-white/[0.07] hover:border-white/[0.14]'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleModule(mod.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff00]"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="text-sm font-mono text-[#c8ff00] font-semibold bg-[#c8ff00]/10 px-2.5 py-1 rounded-md shrink-0">
                      {mod.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {mod.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[#8b8b92] mt-0.5">
                        <span>{mod.chapterCount} chapitres</span>
                        <span>·</span>
                        <span>{mod.duration}</span>
                        <span className="hidden sm:inline">·</span>
                        <span className="hidden sm:inline text-white/70">{mod.projectTag}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-full bg-white/[0.05] text-[#8b8b92] shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-white bg-white/[0.1]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06] space-y-4 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-[#8b8b92] leading-relaxed pt-2">
                      {mod.subtitle}
                    </p>

                    <div className="space-y-3 pt-1">
                      {mod.chapters.map((chapter, idx) => (
                        <div
                          key={chapter.id}
                          className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] flex flex-col gap-1.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-white">
                              {idx + 1}. {chapter.title}
                            </span>
                            <span className="text-[11px] font-mono text-[#8b8b92] shrink-0 tabular-nums">
                              {chapter.duration}
                            </span>
                          </div>
                          <p className="text-xs text-[#8b8b92] leading-normal">
                            {chapter.description}
                          </p>
                          <div className="flex items-center gap-1.5 text-[11px] text-[#c8ff00] pt-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{chapter.keyTakeaway}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
