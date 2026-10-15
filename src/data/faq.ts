export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Prérequis',
    question: 'Ai-je besoin d’un ordinateur surpuissant ou de matériel de pointe ?',
    answer: 'Non, absolument pas. C’est tout l’avantage du motion design propulsé par l’IA : les calculs lourds sont exécutés sur les serveurs distants dans le cloud. Un simple ordinateur portable ou de bureau (Mac ou PC) avec une connexion internet standard suffit amplement.',
  },
  {
    id: 'faq-2',
    category: 'Niveau requis',
    question: 'Je n’ai jamais touché à After Effects ou Blender. Est-ce accessible aux débutants ?',
    answer: 'Oui à 100%. Le programme a été spécialement conçu pour éliminer la courbe d’apprentissage technique de plusieurs mois liée aux logiciels traditionnels. Vous apprenez la grammaire du mouvement, l’art direction et la syntaxe de commande pour obtenir des résultats professionnels dès la première session.',
  },
  {
    id: 'faq-3',
    category: 'Paiement',
    question: 'Comment fonctionnent les paiements par Mobile Money et cartes bancaires ?',
    answer: 'Nous acceptons directement les cartes bancaires internationales (Visa, Mastercard, American Express via Stripe) ainsi que les opérateurs Mobile Money (Wave, Orange Money, MTN MoMo, Moov) sans frais cachés. Dès validation du paiement, votre compte et vos accès vous sont envoyés par email instantanément.',
  },
  {
    id: 'faq-4',
    category: 'Accès',
    question: 'L’accès est-il limité dans le temps ?',
    answer: 'Votre accès est garanti à vie. Vous pouvez suivre les modules à votre propre rythme, revenir sur les chapitres quand vous le souhaitez, et vous bénéficiez de toutes les mises à jour futures du programme sans débourser un centime de plus.',
  },
  {
    id: 'faq-5',
    category: 'Commercialisation',
    question: 'Puis-je vendre les vidéos créées à des clients réels ?',
    answer: 'Oui, tous les rendus et animations créés durant la formation vous appartiennent intégralement avec une licence d’exploitation commerciale complète. Vous êtes libre de les vendre à vos clients, de les diffuser sur les réseaux sociaux ou de les intégrer à vos portfolios.',
  },
];
