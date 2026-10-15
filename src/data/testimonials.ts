export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrCity: string;
  country: string;
  countryFlag: string;
  rating: number;
  text: string;
  highlight: string;
}

export const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    id: 't-1',
    name: 'Thomas Lemarchand',
    role: 'Lead UI/UX Designer',
    companyOrCity: 'Studio Nova (Paris)',
    country: 'France',
    countryFlag: '🇫🇷',
    rating: 5,
    text: 'Je passais des journées entières sur After Effects pour de simples maquettes animées. Avec les méthodologies de JehoAI, j’ai livré 3 vidéos produits pour un client luxe en moins de 4 heures. Le ROI a été immédiat.',
    highlight: 'ROI rentabilisé dès le premier projet client',
  },
  {
    id: 't-2',
    name: 'Mamadou Diallo',
    role: 'Créateur de contenu & Motion Freelance',
    companyOrCity: 'Dakar',
    country: 'Sénégal',
    countryFlag: '🇸🇳',
    rating: 5,
    text: 'J’avais essayé des dizaines de tutoriels YouTube sans queue ni tête. Ici tout est structuré, pas à pas. Le paiement par Mobile Money s’est fait en 1 minute. Mes vidéos TikTok ont triplé leur taux de rétention.',
    highlight: 'Rétention TikTok multipliée par 3',
  },
  {
    id: 't-3',
    name: 'Cédric N’Goran',
    role: 'Directeur Artistique Digital',
    companyOrCity: 'Abidjan',
    country: 'Côte d’Ivoire',
    countryFlag: '🇨🇮',
    rating: 5,
    text: 'Le module sur les packshots cosmétiques 3D est phénoménal. La qualité des reflets et des particules rivalise avec ce qu’on produisait en agence avec des machines de guerre à 5 000€.',
    highlight: 'Qualité studio sans machine surpuissante',
  },
  {
    id: 't-4',
    name: 'Élodie Mercier',
    role: 'Fondatrice de marque D2C',
    companyOrCity: 'Lyon',
    country: 'France',
    countryFlag: '🇫🇷',
    rating: 5,
    text: 'En tant qu’e-commerçante, je n’avais ni le budget ni les mois nécessaires pour embaucher une agence de motion. J’ai généré toutes mes publicités TikTok Ads moi-même. Notre CPA a chuté de 38% !',
    highlight: 'Coût d’acquisition client réduit de 38%',
  },
];

export const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    id: 't-5',
    name: 'Benoît Vanderberg',
    role: 'Consultant Branding & Tech',
    companyOrCity: 'Bruxelles',
    country: 'Belgique',
    countryFlag: '🇧🇪',
    rating: 5,
    text: 'La clarté pédagogique est bluffante. Alexandre ne montre pas juste des "hacks" temporaires, mais de vrais principes d’art direction et de synchronisation rythmique qui restent valables dans le temps.',
    highlight: 'Vrais principes de direction artistique',
  },
  {
    id: 't-6',
    name: 'Marc-Aurèle Fotso',
    role: 'Motion Designer Indépendant',
    companyOrCity: 'Douala',
    country: 'Cameroun',
    countryFlag: '🇨🇲',
    rating: 5,
    text: 'J’ai signé mon premier contrat international à 1 400€ pour une startup canadienne deux semaines seulement après avoir fini le module 3 sur les interfaces SaaS. Merci infiniment !',
    highlight: 'Premier contrat international à 1 400€ signé',
  },
  {
    id: 't-7',
    name: 'Sophie Tremblay',
    role: 'Vidéaste & Monteuse',
    companyOrCity: 'Montréal',
    country: 'Canada',
    countryFlag: '🇨🇦',
    rating: 5,
    text: 'Les transitions vectorielles et la typographie cinétique ont donné un boost incroyable à mon portfolio. La communauté Discord est super réactive et les retours sont constructifs.',
    highlight: 'Portfolio transformé et retours bienveillants',
  },
  {
    id: 't-8',
    name: 'Amine Benali',
    role: 'Growth Hacker',
    companyOrCity: 'Casablanca',
    country: 'Maroc',
    countryFlag: '🇲🇦',
    rating: 5,
    text: 'Le fait de pouvoir itérer sur 15 variations d’animation en 20 minutes change radicalement notre façon de tester des créatifs publicitaires. Indispensable pour toute équipe de croissance moderne.',
    highlight: '15 variations testées en 20 minutes',
  },
];
