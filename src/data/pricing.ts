export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  originalPriceEur: number;
  promoPriceEur: number;
  description: string;
  deliverables: string[];
  bonuses: {
    title: string;
    value: string;
    description: string;
  }[];
  guarantee: string;
}

export const MAIN_PRICING_PLAN: PricingPlan = {
  id: 'jehoai-pro',
  name: 'JehoAI – Programme Complet',
  badge: 'Offre Spéciale de Lancement',
  originalPriceEur: 99,
  promoPriceEur: 39,
  description: 'Formation en ligne complète en français, animée par Alexandre Vane. Accès immédiat et illimité à vie.',
  deliverables: [
    '5 modules structurés de A à Z (14 leçons vidéo HD 4K)',
    'Bibliothèque de +80 prompts cinétiques et presets prêts à l’emploi',
    'Accès à vie et toutes les futures mises à jour incluses gratuitement',
    'Accès au Discord privé des créateurs & sessions de questions/réponses',
    'Pack de sound design exclusif (150+ effets sonores et transitions)',
    'Certificat de complétion nominatif pour votre CV et profil LinkedIn',
  ],
  bonuses: [
    {
      title: 'Pack de 150 bruitages & SFX cinéma',
      value: 'Valeur 49€',
      description: 'Whooshes, impacts de basse, swooshes et ambiences audio mixés pour le motion.',
    },
    {
      title: 'Templates de contrats & devis freelance',
      value: 'Valeur 89€',
      description: 'Modèles juridiques validés pour facturer vos clients sans mauvaise surprise.',
    },
    {
      title: 'Guide d’acquisition de clients internationaux',
      value: 'Valeur 69€',
      description: 'Stratégies de prospection douce sur LinkedIn et Instagram pour booker vos premières missions.',
    },
  ],
  guarantee: 'Garantie satisfait ou remboursé pendant 14 jours sans poser de question.',
};
