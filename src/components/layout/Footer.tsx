import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070708] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand & statement */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8ff00] shadow-[0_0_10px_#c8ff00]" />
              <span className="text-xl font-bold tracking-tight text-white">
                Jeho<span className="text-[#c8ff00]">AI</span>
              </span>
            </div>
            <p className="text-sm text-[#8b8b92] max-w-md leading-relaxed">
              Le programme de référence pour créer du motion design et des animations publicitaires professionnelles
              grâce à l’intelligence artificielle générative. Conçu pour les designers, agences et créateurs.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#8b8b92] pt-2">
              <span className="flex items-center gap-1.5 text-white/80">
                <Shield className="w-3.5 h-3.5 text-[#c8ff00]" /> Paiements sécurisés
              </span>
              <span>·</span>
              <span>Accès instantané</span>
              <span>·</span>
              <span>Support dédié 7j/7</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Programme</h4>
            <ul className="space-y-2.5 text-sm text-[#8b8b92]">
              <li><a href="#apercu" className="hover:text-white transition-colors">Aperçu vidéo</a></li>
              <li><a href="#competences" className="hover:text-white transition-colors">Ce que tu sauras faire</a></li>
              <li><a href="#programme" className="hover:text-white transition-colors">Modules & chapitres</a></li>
              <li><a href="#avis" className="hover:text-white transition-colors">Témoignages élèves</a></li>
              <li><a href="#tarif" className="hover:text-white transition-colors">Tarif & inscription</a></li>
            </ul>
          </div>

          {/* Col 3: Mentions & Paiements */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Moyens de paiement</h4>
            <div className="space-y-2 text-xs text-[#8b8b92]">
              <p>Stripe (Visa, Mastercard, AMEX)</p>
              <p>Wave, Orange Money, MTN MoMo, Moov</p>
              <p>Apple Pay & Google Pay</p>
              <div className="pt-3">
                <span className="inline-flex items-center gap-1 text-[11px] text-[#c8ff00] bg-[#c8ff00]/10 border border-[#c8ff00]/20 px-2 py-1 rounded">
                  <Sparkles className="w-3 h-3" /> Garantie 14 jours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8b8b92]">
          <p>© {new Date().getFullYear()} JehoAI. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#tarif" className="hover:text-white transition-colors">Conditions Générales de Vente</a>
            <a href="#tarif" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#tarif" className="hover:text-white transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
