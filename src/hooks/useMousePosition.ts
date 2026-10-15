import { useEffect, useRef } from 'react';

/**
 * Hook to track mouse coordinates and update CSS custom variables --mx and --my
 * on the target container for reactive dot grid / illumination.
 */
export function useMousePosition<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };

    const handleMouseLeave = () => {
      // Default center position if mouse leaves
      el.style.setProperty('--mx', '50%');
      el.style.setProperty('--my', '35%');
    };

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return containerRef;
}
