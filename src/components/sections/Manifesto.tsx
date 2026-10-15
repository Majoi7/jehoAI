import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const MANIFESTO_TEXT =
  "Plus besoin de passer des mois sur After Effects. Avec la bonne grammaire cinétique et les bons prompts, l'intelligence artificielle devient ton studio de motion design complet : tu décris, elle anime.";

const Word: React.FC<{
  word: string;
  range: [number, number];
  progress: any;
}> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress,
    range,
    ['#44444a', word.includes('anime') || word.includes('studio') || word.includes('décris') ? '#c8ff00' : '#ffffff']
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.25em] transition-colors duration-150"
    >
      {word}
    </motion.span>
  );
};

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const words = MANIFESTO_TEXT.split(' ');

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-36 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <p className="text-xs uppercase tracking-widest text-[#8b8b92] font-medium mb-6">
        Le Changement de Paradigme
      </p>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.18] text-balance">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
        })}
      </h2>
    </section>
  );
};
