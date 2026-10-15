export interface Chapter {
  id: string;
  title: string;
  duration: string;
  description: string;
  keyTakeaway: string;
}

export interface Module {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  chapterCount: number;
  duration: string;
  chapters: Chapter[];
  projectTag: string;
}

export const CURRICULUM_DATA: Module[] = [
  {
    id: 'module-1',
    number: '01',
    title: 'Les Fondations du Motion Génératif',
    subtitle: 'Comprendre l’écosystème, la grammaire cinétique et dompter les modèles de génération vidéo.',
    chapterCount: 3,
    duration: '1h 45m',
    projectTag: 'Atelier Prompting Cinétique',
    chapters: [
      {
        id: 'c-1-1',
        title: 'Architecture des modèles vidéo & principes du prompting temporel',
        duration: '35 min',
        description: 'Comment décrire des trajectoires spatiales, des accélérations et des focales sans générer d’artefacts visuels.',
        keyTakeaway: 'Structure universelle d’un prompt de mouvement fluide',
      },
      {
        id: 'c-1-2',
        title: 'Contrôle précis des caméras virtuelles (pan, tilt, zoom, orbiting)',
        duration: '40 min',
        description: 'Paramétrage des mouvements de traveling cinématique et de la profondeur de champ optique.',
        keyTakeaway: 'Contrôler le point focal pour guider le regard',
      },
      {
        id: 'c-1-3',
        title: 'Gestion des ratios & de la cohérence visuelle inter-plans',
        duration: '30 min',
        description: 'Maintenir la même colorimétrie, texture et identité d’un clip à l’autre.',
        keyTakeaway: 'Génération de seed unifiée et color grading IA',
      },
    ],
  },
  {
    id: 'module-2',
    number: '02',
    title: 'Publicités Produits 3D & E-commerce',
    subtitle: 'Créer des packshots luxueux, des éclats de matière et des mises en scène commerciales à fort taux de conversion.',
    chapterCount: 3,
    duration: '2h 15m',
    projectTag: 'Projet Packshot Cosmétique & Tech',
    chapters: [
      {
        id: 'c-2-1',
        title: 'Mise en scène studio : éclairages 3 points & reflets spéculaires',
        duration: '45 min',
        description: 'Simuler des matières nobles (verre opalin, aluminium brossé, fluides liquides dorés) en suspension.',
        keyTakeaway: 'Rendu digne des plus grands studios sans modélisation Blender',
      },
      {
        id: 'c-2-2',
        title: 'Animation de particules, projections liquides et révélation progressive',
        duration: '50 min',
        description: 'Synchroniser des micro-mouvements dynamiques pour sublimer la texture des produits.',
        keyTakeaway: 'Créer un effet waouh dès les deux premières secondes',
      },
      {
        id: 'c-2-3',
        title: 'Déclinaisons publicitaires e-commerce multi-formats (9:16 & 1:1)',
        duration: '40 min',
        description: 'Exporter et décliner une campagne complète pour Instagram Reels, TikTok Ads et bannières Shopify.',
        keyTakeaway: 'Workflow d’export automatisé et gabarits prêts à l’emploi',
      },
    ],
  },
  {
    id: 'module-3',
    number: '03',
    title: 'Interfaces SaaS & Motion UI',
    subtitle: 'Donner vie à des dashboards, courbes financières et micro-interactions logicielles pour lever des fonds ou vendre.',
    chapterCount: 3,
    duration: '2h 00m',
    projectTag: 'Showreel Produit SaaS',
    chapters: [
      {
        id: 'c-3-1',
        title: 'Génération et animation d’écrans UI sombres & néons futuristes',
        duration: '40 min',
        description: 'Création de mockups d’interfaces logicielles hyper-détaillées avec graphes et KPIs animés.',
        keyTakeaway: 'Esthétique Linear/Stripe appliquée au motion design',
      },
      {
        id: 'c-3-2',
        title: 'Mouvements d’angles de vue isométriques et zooms immersifs',
        duration: '45 min',
        description: 'Transformer une simple capture statique en démonstration logicielle premium interactive.',
        keyTakeaway: 'Effet de perspective 3D sur des calques vectoriels',
      },
      {
        id: 'c-3-3',
        title: 'Montage du trailer SaaS et synchronisation rythmique',
        duration: '35 min',
        description: 'Rythmer la vidéo de lancement avec des transitions cinétiques percutantes.',
        keyTakeaway: 'Gabarit de teaser de 30 secondes prêt à poster sur Product Hunt',
      },
    ],
  },
  {
    id: 'module-4',
    number: '04',
    title: 'Typographie Cinétique & Identités de Marque',
    subtitle: 'Maîtriser les lettres 3D gonflées, les rubans métalliques chromés et les transitions de logo sur-mesure.',
    chapterCount: 3,
    duration: '1h 50m',
    projectTag: 'Identité Graphique en Mouvement',
    chapters: [
      {
        id: 'c-4-1',
        title: 'Création de lettrages 3D chrome, verre et matière organique',
        duration: '35 min',
        description: 'Animer du texte expressif qui capture l’œil sans passer par Cinema 4D.',
        keyTakeaway: 'Maîtrise des matériaux chromés et réflectifs',
      },
      {
        id: 'c-4-2',
        title: 'Transitions cinématiques et morphing de formes vectorielles',
        duration: '40 min',
        description: 'Passer d’un logo statique à une séquence d’introduction inoubliable.',
        keyTakeaway: 'Techniques de morphing sans glitchs',
      },
      {
        id: 'c-4-3',
        title: 'Intégration d’effets sonores & sound design percutant',
        duration: '35 min',
        description: 'Associer des whooshes, risers et impacts audio synchronisés à la milliseconde près.',
        keyTakeaway: 'Banque de 150 bruitages inclus dans le module',
      },
    ],
  },
  {
    id: 'module-5',
    number: '05',
    title: 'Formats Courts Viraux & Monétisation Freelance',
    subtitle: 'Comment vendre des prestations de motion design entre 800€ et 2 500€ à des marques et agences.',
    chapterCount: 2,
    duration: '2h 10m',
    projectTag: 'Business Blueprint & Contrats',
    chapters: [
      {
        id: 'c-5-1',
        title: 'Les 7 structures narratives des reels motion qui dépassent 500k vues',
        duration: '50 min',
        description: 'Psychologie de l’attention, hooks visuels des 2 premières secondes et boucles parfaites.',
        keyTakeaway: 'Formule de rétention éprouvée sur plus de 4 millions de vues cumulées',
      },
      {
        id: 'c-5-2',
        title: 'Positionnement tarifaire, devis types et acquisition de clients internationaux',
        duration: '1h 20m',
        description: 'Comment packager son offre, démarcher sur LinkedIn/Twitter et facturer en Europe et en Afrique.',
        keyTakeaway: 'Modèle de contrat de cession de droits et grille tarifaire prête à l’emploi',
      },
    ],
  },
];
