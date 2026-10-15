import { useState, useEffect, useCallback } from 'react';
import { CurrencyCode, convertPrice, SUPPORTED_CURRENCIES } from '../utils/pricing.ts';

export function useGeoCurrency() {
  const [currency, setCurrency] = useState<CurrencyCode>(() => {
    try {
      const stored = localStorage.getItem('jehoai_currency') as CurrencyCode | null;
      if (stored && SUPPORTED_CURRENCIES[stored]) {
        return stored;
      }

      // Geo-heuristic from browser timezone
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (
        timeZone.includes('Abidjan') ||
        timeZone.includes('Dakar') ||
        timeZone.includes('Douala') ||
        timeZone.includes('Lome') ||
        timeZone.includes('Bamako') ||
        timeZone.includes('Ouagadougou') ||
        timeZone.includes('Cotonou') ||
        timeZone.includes('Kinshasa') ||
        timeZone.includes('Casablanca')
      ) {
        return 'XOF';
      }

      if (timeZone.includes('New_York') || timeZone.includes('Los_Angeles') || timeZone.includes('Chicago')) {
        return 'USD';
      }

      if (timeZone.includes('London')) {
        return 'GBP';
      }

      return 'EUR';
    } catch {
      return 'EUR';
    }
  });

  const selectCurrency = useCallback((code: CurrencyCode) => {
    setCurrency(code);
    try {
      localStorage.setItem('kinetix_currency', code);
    } catch {
      // ignore storage failure
    }
  }, []);

  const format = useCallback(
    (eurAmount: number) => {
      return convertPrice(eurAmount, currency);
    },
    [currency]
  );

  return {
    currency,
    setCurrency: selectCurrency,
    format,
    config: SUPPORTED_CURRENCIES[currency],
  };
}
