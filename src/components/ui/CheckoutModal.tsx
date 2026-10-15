import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { CurrencyCode, convertPrice } from '../../utils/pricing.ts';
import { Button } from './Button.tsx';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, currency }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo'>('card');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [momoProvider, setMomoProvider] = useState('Wave');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const currentPrice = convertPrice(39, currency);
  const originalPrice = convertPrice(99, currency);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim()) {
      setErrorMessage('Veuillez renseigner votre nom complet et adresse email.');
      return;
    }

    if (paymentMethod === 'card' && (!cardNumber.trim() || !expiry.trim() || !cvc.trim())) {
      setErrorMessage('Veuillez renseigner les informations de carte bancaire.');
      return;
    }

    if (paymentMethod === 'momo' && !phone.trim()) {
      setErrorMessage('Veuillez renseigner votre numéro Mobile Money.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    setCardNumber('');
    setExpiry('');
    setCvc('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200"
    >
      <div
        className="relative w-full max-w-lg glass-panel rounded-2xl border border-white/[0.12] bg-[#121214] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fermer la modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#8b8b92] hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#c8ff00]/15 text-[#c8ff00] flex items-center justify-center mx-auto mb-4 border border-[#c8ff00]/30 shadow-[0_0_30px_rgba(200,255,0,0.25)]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 id="modal-title" className="text-2xl font-bold tracking-tight text-white mb-2">
              Félicitations, bienvenue dans JehoAI !
            </h3>
            <p className="text-sm text-[#8b8b92] mb-6 max-w-sm mx-auto">
              Votre commande <span className="text-white font-mono">#JHO-84920</span> a été validée avec succès.
              Vos identifiants d’accès au portail et le lien du Discord privé ont été envoyés à{' '}
              <span className="text-white font-medium">{email}</span>.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between text-[#8b8b92]">
                <span>Programme</span>
                <span className="text-white font-medium">JehoAI – Accès à vie</span>
              </div>
              <div className="flex justify-between text-[#8b8b92]">
                <span>Montant payé</span>
                <span className="text-[#c8ff00] font-semibold">{currentPrice.formatted}</span>
              </div>
              <div className="flex justify-between text-[#8b8b92]">
                <span>Mode de règlement</span>
                <span className="text-white">{paymentMethod === 'card' ? 'Carte bancaire (Stripe)' : `${momoProvider} Mobile Money`}</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleReset}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Accéder à l'espace membre
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#c8ff00] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Inscription Immédiate
                </span>
              </div>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Rejoindre JehoAI
              </h3>
              <p className="text-xs sm:text-sm text-[#8b8b92] mt-1">
                Profitez du tarif préférentiel et débloquez instantanément vos 5 modules et vos bonus.
              </p>
            </div>

            {/* Price summary strip */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] mb-6">
              <div>
                <p className="text-xs text-[#8b8b92]">Total à régler (paiement unique)</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white tabular-nums">{currentPrice.formatted}</span>
                  <span className="text-xs text-[#8b8b92] line-through tabular-nums">{originalPrice.formatted}</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#c8ff00]/15 text-[#c8ff00] border border-[#c8ff00]/30">
                -61% Réduction
              </span>
            </div>

            {/* Payment method selector */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-medium border transition-colors ${
                  paymentMethod === 'card'
                    ? 'bg-white/[0.08] border-[#c8ff00] text-white shadow-sm'
                    : 'bg-white/[0.02] border-white/[0.08] text-[#8b8b92] hover:text-white'
                }`}
              >
                <CreditCard className="w-4 h-4" /> Carte Bancaire
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('momo')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-medium border transition-colors ${
                  paymentMethod === 'momo'
                    ? 'bg-white/[0.08] border-[#c8ff00] text-white shadow-sm'
                    : 'bg-white/[0.02] border-white/[0.08] text-[#8b8b92] hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" /> Mobile Money
              </button>
            </div>

            {errorMessage && (
              <div className="p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs text-[#8b8b92] mb-1">Nom complet</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ex. Jean Dupont"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder-[#555] focus:outline-none focus:border-[#c8ff00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-[#8b8b92] mb-1">Adresse email (pour la réception des cours)</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jean.dupont@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder-[#555] focus:outline-none focus:border-[#c8ff00] transition-colors"
                />
              </div>

              {paymentMethod === 'card' ? (
                <>
                  <div>
                    <label className="block text-xs text-[#8b8b92] mb-1">Numéro de carte</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4242 •••• •••• 4242"
                      maxLength={19}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder-[#555] focus:outline-none focus:border-[#c8ff00] transition-colors font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[#8b8b92] mb-1">Expiration</label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder-[#555] focus:outline-none focus:border-[#c8ff00] transition-colors text-center font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#8b8b92] mb-1">CVC / Cryptogramme</label>
                      <input
                        type="text"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder-[#555] focus:outline-none focus:border-[#c8ff00] transition-colors text-center font-mono"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs text-[#8b8b92] mb-1">Opérateur Mobile Money</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {['Wave', 'Orange', 'MTN MoMo', 'Moov'].map((provider) => (
                        <button
                          key={provider}
                          type="button"
                          onClick={() => setMomoProvider(provider)}
                          className={`py-2 px-2 text-[11px] rounded-lg border text-center font-medium transition-colors ${
                            momoProvider === provider
                              ? 'border-[#c8ff00] bg-[#c8ff00]/10 text-white'
                              : 'border-white/[0.08] bg-white/[0.02] text-[#8b8b92] hover:text-white'
                          }`}
                        >
                          {provider}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#8b8b92] mb-1">Numéro de téléphone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+225 07 00 00 00 00 ou +221 77..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder-[#555] focus:outline-none focus:border-[#c8ff00] transition-colors font-mono"
                    />
                  </div>
                </>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Traitement sécurisé en cours...
                    </span>
                  ) : (
                    `Valider mon inscription • ${currentPrice.formatted}`
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#8b8b92]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c8ff00]" />
                <span>Paiement chiffré SSL 256 bits · Garantie 14 jours</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
