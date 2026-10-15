import React, { useState } from 'react';
import { Check, ShieldCheck, Clock, Sparkles, Smartphone, CreditCard, Gift, ArrowRight } from 'lucide-react';
import { CurrencyCode, SUPPORTED_CURRENCIES } from '../../utils/pricing.ts';
import { MAIN_PRICING_PLAN } from '../../data/pricing.ts';
import { BorderBeam } from '../ui/BorderBeam.tsx';
import { Button } from '../ui/Button.tsx';
import { useCountdown } from '../../hooks/useCountdown.ts';

interface PricingProps {
  onOpenCheckout: () => void;
  currency: CurrencyCode;
  onSelectCurrency: (c: CurrencyCode) => void;
  formatPrice: (eur: number) => { amount: number; formatted: string };
}

export const Pricing: React.FC<PricingProps> = ({
  onOpenCheckout,
  currency,
  onSelectCurrency,
  formatPrice,
}) => {
  const timeLeft = useCountdown(14);
  const currentPrice = formatPrice(MAIN_PRICING_PLAN.promoPriceEur);
  const originalPrice = formatPrice(MAIN_PRICING_PLAN.originalPriceEur);

  return (
    <section id="tarif" className="py-20 md:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest text-[#c8ff00] font-semibold mb-2">
          Tarif Transparent
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Un seul paiement, un accès à vie
        </h2>
        <p className="text-sm sm:text-base text-[#8b8b92] max-w-xl mx-auto">
          Pas d’abonnement mensuel récurrent. Débloquez tous les modules, les prompts, les futures mises à jour
          et la communauté avec un règlement unique.
        </p>

        {/* Currency Switcher Tabs */}
        <div className="flex items-center justify-center gap-1.5 mt-6 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] max-w-xs mx-auto">
          {(Object.keys(SUPPORTED_CURRENCIES) as CurrencyCode[]).map((code) => (
            <button
              key={code}
              onClick={() => onSelectCurrency(code)}
              className={`flex-1 py-1.5 px-3 rounded-full text-xs font-medium transition-all ${
                currency === code
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-[#8b8b92] hover:text-white'
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      {/* Main Glowing BorderBeam Card */}
      <BorderBeam className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-xs font-semibold text-[#c8ff00] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{MAIN_PRICING_PLAN.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {MAIN_PRICING_PLAN.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#8b8b92] mt-1">
              {MAIN_PRICING_PLAN.description}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="text-left md:text-right shrink-0">
            <div className="flex items-baseline gap-2 md:justify-end">
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                {currentPrice.formatted}
              </span>
              <span className="text-base text-[#8b8b92] line-through tabular-nums">
                {originalPrice.formatted}
              </span>
            </div>
            <p className="text-xs text-[#8b8b92] mt-1">
              Paiement unique · Aucun abonnement
            </p>
          </div>
        </div>

        {/* Countdown Banner */}
        <div className="my-6 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="w-4 h-4 text-[#c8ff00]" />
            <span>Tarif de lancement réservé aux 100 prochains inscrits</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-white">
            <span className="px-2 py-1 rounded bg-black/40 border border-white/[0.1] tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span>:</span>
            <span className="px-2 py-1 rounded bg-black/40 border border-white/[0.1] tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span className="px-2 py-1 rounded bg-black/40 border border-white/[0.1] text-[#c8ff00] tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        {/* Deliverables List */}
        <div className="space-y-3 my-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8b8b92]">
            Ce que tu obtiens immédiatement :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#f5f5f5]">
            {MAIN_PRICING_PLAN.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#c8ff00]/15 text-[#c8ff00] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="leading-snug text-xs sm:text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Exclusive Bonuses */}
        <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-4 h-4 text-[#c8ff00]" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              3 Bonus Exclusifs Inclus Aujourd’hui (Valeur 207€)
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {MAIN_PRICING_PLAN.bonuses.map((bonus, i) => (
              <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/[0.05]">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-white">{bonus.title}</span>
                </div>
                <p className="text-[11px] text-[#8b8b92] leading-tight mb-2">
                  {bonus.description}
                </p>
                <span className="text-[10px] text-[#c8ff00] font-mono">{bonus.value} · Offert</span>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout CTA */}
        <div className="space-y-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenCheckout}
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full text-base sm:text-lg py-4 font-bold tracking-tight shadow-[0_0_40px_rgba(200,255,0,0.3)] hover:shadow-[0_0_50px_rgba(200,255,0,0.5)]"
          >
            Je rejoins la formation · {currentPrice.formatted}
          </Button>

          {/* Payment Trust Markers */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#8b8b92] pt-2">
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-white/80" /> Paiement sécurisé SSL (Stripe)
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-white/80" /> Mobile Money (Wave, Orange, MTN, Moov)
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-[#c8ff00]">
              <ShieldCheck className="w-3.5 h-3.5" /> Garantie 14 jours
            </span>
          </div>
        </div>
      </BorderBeam>
    </section>
  );
};
