export type CurrencyCode = 'EUR' | 'XOF' | 'USD' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  label: string;
  symbol: string;
  rateToEur: number; // 1 EUR = X units
  isPrefix: boolean;
  roundTo: number;
}

export const SUPPORTED_CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  EUR: {
    code: 'EUR',
    label: 'Euro (€)',
    symbol: '€',
    rateToEur: 1,
    isPrefix: false,
    roundTo: 1,
  },
  XOF: {
    code: 'XOF',
    label: 'Franc CFA (XOF)',
    symbol: 'FCFA',
    rateToEur: 655.957,
    isPrefix: false,
    roundTo: 500, // round to nearest 500 for clean Mobile Money amounts
  },
  USD: {
    code: 'USD',
    label: 'US Dollar ($)',
    symbol: '$',
    rateToEur: 1.08,
    isPrefix: true,
    roundTo: 1,
  },
  GBP: {
    code: 'GBP',
    label: 'British Pound (£)',
    symbol: '£',
    rateToEur: 0.85,
    isPrefix: true,
    roundTo: 1,
  },
};

/**
 * Calculates and formats price in the chosen currency
 */
export function convertPrice(eurAmount: number, targetCurrency: CurrencyCode): {
  amount: number;
  formatted: string;
} {
  const config = SUPPORTED_CURRENCIES[targetCurrency] || SUPPORTED_CURRENCIES.EUR;
  const rawConverted = eurAmount * config.rateToEur;
  
  let finalAmount: number;
  if (config.roundTo > 1) {
    finalAmount = Math.round(rawConverted / config.roundTo) * config.roundTo;
  } else {
    finalAmount = Math.round(rawConverted);
  }

  // Format with French space grouping if needed
  const numberStr = finalAmount.toLocaleString('fr-FR');
  const formatted = config.isPrefix
    ? `${config.symbol}${numberStr}`
    : `${numberStr} ${config.symbol}`;

  return {
    amount: finalAmount,
    formatted,
  };
}

/**
 * Calculates discount percentage
 */
export function calculateDiscountPercentage(originalEur: number, promoEur: number): number {
  if (originalEur <= 0 || promoEur >= originalEur) return 0;
  return Math.round(((originalEur - promoEur) / originalEur) * 100);
}

/**
 * Calculates remaining time until a deadline
 */
export function calculateTimeRemaining(
  targetDateMs: number,
  currentDateMs: number
): {
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
} {
  const diff = targetDateMs - currentDateMs;
  if (diff <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    hours,
    minutes,
    seconds,
    isExpired: false,
  };
}
