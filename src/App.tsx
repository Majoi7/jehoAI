import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { VideoShowcase } from './components/sections/VideoShowcase';
import { Manifesto } from './components/sections/Manifesto';
import { Skills } from './components/sections/Skills';
import { Curriculum } from './components/sections/Curriculum';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { Faq } from './components/sections/Faq';
import { CheckoutModal } from './components/ui/CheckoutModal';
import { useGeoCurrency } from './hooks/useGeoCurrency';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { currency, setCurrency, format } = useGeoCurrency();

  // Initialize Lenis smooth scroll with respect for prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f5f5f5] flex flex-col selection:bg-[#c8ff00] selection:text-[#0a0a0b]">
      {/* Top sticky navigation bar */}
      <Navbar onOpenCheckout={() => setIsCheckoutOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          currency={currency}
        />

        <VideoShowcase />

        <Manifesto />

        <Skills />

        <Curriculum />

        <Testimonials />

        <Pricing
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          currency={currency}
          onSelectCurrency={setCurrency}
          formatPrice={format}
        />

        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Checkout Modal (Stripe & Mobile Money) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        currency={currency}
      />
    </div>
  );
}
