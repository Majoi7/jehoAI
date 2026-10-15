import { useState, useEffect } from 'react';
import { calculateTimeRemaining } from '../utils/pricing';

/**
 * Hook providing live countdown timer until a specified target date
 * Defaults to 24 hours rolling expiration for demo persistence.
 */
export function useCountdown(initialHours = 14) {
  const [targetTime] = useState(() => {
    const saved = localStorage.getItem('jehoai_countdown_target');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (parsed > Date.now()) return parsed;
    }
    const target = Date.now() + initialHours * 3600 * 1000;
    try {
      localStorage.setItem('jehoai_countdown_target', target.toString());
    } catch {
      // ignore local storage errors
    }
    return target;
  });

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeRemaining(targetTime, Date.now())
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(targetTime, Date.now()));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return timeLeft;
}
