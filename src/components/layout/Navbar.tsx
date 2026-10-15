import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button.tsx';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Aperçu', href: '#apercu' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Programme', href: '#programme' },
    { label: 'Avis', href: '#avis' },
    { label: 'Tarif', href: '#tarif' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
      <div className="max-w-6xl mx-auto glass-panel rounded-full px-5 py-2.5 flex items-center justify-between gap-8 border border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff00] rounded-lg"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#c8ff00] shadow-[0_0_10px_#c8ff00]" aria-hidden="true" />
          <span>Jeho<span className="text-[#c8ff00]">AI</span></span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8b8b92]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenCheckout}
            className="text-xs px-3.5 sm:px-4 py-1.5 sm:py-2 font-semibold"
          >
            <span className="sm:hidden">Rejoindre</span>
            <span className="hidden sm:inline">Rejoindre la formation</span>
          </Button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden p-1.5 rounded-lg text-[#8b8b92] hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff00]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass-panel rounded-2xl p-5 border border-white/[0.08] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium text-[#8b8b92] hover:text-white py-2 px-3 rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.08]">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  handleLinkClick();
                  onOpenCheckout();
                }}
                className="w-full text-center text-sm font-semibold justify-center"
              >
                Rejoindre la formation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
