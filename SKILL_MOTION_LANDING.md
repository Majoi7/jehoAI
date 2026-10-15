# SKILL : Création d'une Landing Page Motion Design & SaaS Haute Conversion (Dark Theme)

> Ce fichier de compétence ("Skill") documente l'architecture complète, les tokens de design, les animations signatures et les astuces de développement pour concevoir ou reproduire de zéro une landing page sombre d'élite avec Vite, React, Tailwind CSS, Motion et Lenis.

---

## 1. Stack Technologique & Dépendances

| Rôle | Technologie | Package / Version | Rôle dans l'application |
| :--- | :--- | :--- | :--- |
| **Framework** | React 19 + TypeScript | `react@^19`, `typescript` | Architecture modulaire, hooks réactifs et typage strict. |
| **Build Tool** | Vite | `vite@^8`, `@vitejs/plugin-react` | Compilation ultra-rapide et bundling optimisé. |
| **Styling** | Tailwind CSS v4 | `@tailwindcss/vite` | Utility-first styling et liaison directe avec les variables CSS. |
| **Animations** | Motion (ex-Framer Motion) | `motion@^12` | Interpolation du scroll pour le texte et animations fluides. |
| **Défilement** | Lenis | `lenis` | Scroll inertiel ultra-doux (smooth scroll). |
| **Icônes** | Lucide React | `lucide-react` | Tracé vectoriel épuré et ultra-léger. |

---

## 2. Structure Modulaire Recommandée

```text
src/
├── assets/
│   └── images/              # Renders et mockups (Packshot 3D, UI SaaS, Typos, Portrait)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Barre de navigation fixe (Top Bar Contract 3 zones)
│   │   └── Footer.tsx       # Pied de page sobre avec mentions et récapitulatif
│   ├── sections/
│   │   ├── Hero.tsx         # Titre percutant, métriques, preuve sociale et grille
│   │   ├── VideoShowcase.tsx # Lecteur démo interactif avec timeline scrubber
│   │   ├── Manifesto.tsx    # Révélation mot par mot du texte au scroll
│   │   ├── Skills.tsx       # Carrousel horizontal des compétences et livrables
│   │   ├── Curriculum.tsx   # Accordéon des 5 modules et 14 chapitres pas-à-pas
│   │   ├── Testimonials.tsx # Double marquee infini défilant en sens opposés
│   │   ├── Pricing.tsx      # Cadre tarifaire avec le Border Beam laser animé
│   │   └── Faq.tsx          # Questions fréquentes interactives
│   └── ui/
│       ├── Button.tsx       # Boutons primaires néon, secondaires et fantômes
│       ├── GlassCard.tsx    # Cartes en verre dépoli (blur 16px)
│       ├── Badge.tsx        # Badges contextuels discrets
│       ├── BorderBeam.tsx   # Composant d'animation du faisceau laser périphérique
│       ├── DotGrid.tsx      # Grille de points asservie aux coordonnées souris
│       └── CheckoutModal.tsx # Tunnel d'achat carte bancaire & Mobile Money
├── data/
│   ├── curriculum.ts        # Modules, chapitres, durées et objectifs
│   ├── testimonials.ts      # Avis élèves, notes, pays et drapeaux
│   ├── pricing.ts           # Offres, tarifs, bonus inclus et garanties
│   └── faq.ts               # Questions/réponses structurées
├── hooks/
│   ├── useMousePosition.ts  # Calcule --mx et --my pour la lumière interactive
│   ├── useCountdown.ts      # Compteur de promo en temps réel
│   └── useGeoCurrency.ts    # Détection géographique et convertisseur de devise
├── styles/
│   └── tokens.css           # Variables CSS, keyframes et règles d'animation
├── utils/
│   ├── pricing.ts           # Fonctions pures de calcul et d'arrondis monétaires
│   └── pricing.test.ts      # Tests unitaires automatisés (node:test)
├── App.tsx                  # Assemblage global et initialisation Lenis
├── index.css                # Base Tailwind et importation des tokens
└── main.tsx                 # Point d'entrée React
```

---

## 3. Tokens de Design & Charte Graphique

### Variables CSS fondamentales (`src/styles/tokens.css`)

```css
:root {
  /* Fond principal sombre obsidian */
  --bg: #0a0a0b;

  /* Surfaces en verre translucide */
  --surface: rgba(255, 255, 255, 0.04);
  --surface-hover: rgba(255, 255, 255, 0.07);

  /* Bordures fines hairline */
  --border: rgba(255, 255, 255, 0.08);
  --border-focus: rgba(200, 255, 0, 0.35);

  /* Couleur d'accent néon électrique (Lime) */
  --accent: #c8ff00;
  --accent-rgb: 200, 255, 0;

  /* Typographie */
  --text: #f5f5f5;
  --muted: #8b8b92;
  --font-display: 'Outfit', sans-serif;
  --font-body: 'Outfit', sans-serif;
}
```

### Typographie
- **Police d'affichage & Titres** : `Outfit` (sans-serif géométrique aux formes ouvertes). Titres en graisse `font-bold` (700) ou `font-semibold` (600) avec interlettrage resserré `tracking-tight` (`-0.02em` à `-0.03em`) et `leading-[1.08]`.
- **Police secondaire / Chiffres** : `Urbanist` ou `Outfit` avec `tabular-nums` pour les prix et timers.
- **Règle anti-orphelins** : Utiliser `text-balance` sur tous les titres principaux pour éviter les mots isolés en fin de ligne.

### Effet Verre Dépoli (Glassmorphism)
```css
.glass-panel {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
}
```

---

## 4. Recettes Techniques des Animations Clés

### A. Le Faisceau Laser Périphérique ("Border Beam") du Tarif

C'est l'effet visible entre **00:13 et 00:17 de la vidéo**. Il projette un filet lumineux électrique qui tourne en boucle le long du contour d'une carte rectangulaire avec des angles arrondis.

#### Technique :
Au lieu d'un `conic-gradient` qui tourne sur un angle central et se déforme sur un rectangle étiré, on utilise un calque SVG vectoriel avec :
1. `pathLength="100"` pour normaliser la longueur totale du périmètre à 100 unités.
2. `strokeDasharray="28 72"` pour définir la taille du faisceau (28% du périmètre) et le vide (72%).
3. Deux couches : une couche floutée (`feGaussianBlur`) pour le halo néon et une couche nette pour le liseré blanc/lime.
4. Une animation CSS pure qui décale `stroke-dashoffset` de `0` à `-100`.

#### Code CSS (`tokens.css`) :
```css
@keyframes beam-dash {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -100;
  }
}

.beam-animation-path {
  animation: beam-dash 5s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .beam-animation-path {
    animation: none !important;
  }
}
```

#### Code Composant (`BorderBeam.tsx`) :
```tsx
import React from 'react';

export const BorderBeam: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative rounded-3xl p-8 md:p-10 bg-[#0e0e11] overflow-hidden ${className}`}>
      {/* Bordure de base */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.08] pointer-events-none" />

      {/* Faisceau laser animé le long du contour */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="25%" stopColor="#c8ff00" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#c8ff00" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c8ff00" stopOpacity="0" />
          </linearGradient>

          <filter id="beamGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Halo externe diffus */}
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="24"
          ry="24"
          fill="none"
          stroke="url(#beamGradient)"
          strokeWidth="4"
          strokeDasharray="28 72"
          pathLength="100"
          filter="url(#beamGlow)"
          className="beam-animation-path opacity-80"
        />

        {/* Cœur laser net */}
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="24"
          ry="24"
          fill="none"
          stroke="url(#beamGradient)"
          strokeWidth="2"
          strokeDasharray="28 72"
          pathLength="100"
          className="beam-animation-path"
        />
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
```

---

### B. Grille de Points Interactive du Hero (Poursuite Curseur)

#### Technique :
Un motif répétitif de points de 1px espacés de 24px (`radial-gradient`), combiné à un masque CSS circulaire centré sur `--mx` et `--my`. Lorsque la souris bouge, le JavaScript passif met à jour ces deux variables sans provoquer aucun re-render React.

#### Hook `useMousePosition.ts` :
```ts
import { useEffect, useRef } from 'react';

export function useMousePosition<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return containerRef;
}
```

#### Composant `DotGrid.tsx` :
```tsx
export const DotGrid: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        maskImage: 'radial-gradient(400px circle at var(--mx, 50%) var(--my, 30%), black 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(400px circle at var(--mx, 50%) var(--my, 30%), black 0%, transparent 80%)',
      }}
    />
  </div>
);
```

---

### C. Révélation du Texte au Scroll Mot par Mot (`Manifesto.tsx`)

#### Technique :
Découper le texte en un tableau de mots. Chaque mot calcule sa plage de progression relative (`start = i / total`, `end = (i+1) / total`) et interpole son opacité de `0.15` à `1.0` en fonction de `scrollYProgress` de Motion.

```tsx
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

const Word: React.FC<{ word: string; range: [number, number]; progress: any }> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const isKey = word.includes('anime') || word.includes('studio') || word.includes('décris');

  return (
    <motion.span
      style={{ opacity, color: isKey ? '#c8ff00' : '#ffffff' }}
      className="inline-block mr-[0.25em]"
    >
      {word}
    </motion.span>
  );
};
```

---

### D. Double Marquee d'Avis en Sens Opposés (`Testimonials.tsx`)

#### Technique :
Deux rangées animées en pur CSS sans librairie externe. Les cartes sont dupliquées deux fois dans le DOM pour garantir un défilement infini sans coupure. La classe `pause-on-hover:hover` fige l'animation pour permettre la lecture.

```css
@keyframes marquee-left {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}

.animate-marquee-left {
  display: flex;
  width: max-content;
  animation: marquee-left 35s linear infinite;
}

.animate-marquee-right {
  display: flex;
  width: max-content;
  animation: marquee-right 35s linear infinite;
}

.pause-on-hover:hover {
  animation-play-state: paused;
}
```

---

## 5. Moteur Multi-Devises & Passerelles de Paiement Hybrides

Pour maximiser les conversions internationales (Europe, Amériques et Afrique francophone), les prix ne sont pas codés en dur dans les composants :

1. **Devises supportées** :
   - **EUR (€)** : 39 € (au lieu de 99 €).
   - **XOF Franc CFA** : Converti et arrondi automatiquement aux tranches de **500 FCFA** (ex : 25 500 FCFA au lieu de 65 000 FCFA) pour correspondre aux montants standards Mobile Money.
   - **USD ($)** : $42 (au lieu de $108).
   - **GBP (£)** : £33 (au lieu de £84).
2. **Détection Géographique Automatique** :
   - Analyser `Intl.DateTimeFormat().resolvedOptions().timeZone` pour pré-sélectionner instantanément la bonne devise (ex: fuseaux d'Abidjan, Dakar, Douala activent `XOF` automatiquement).
3. **Tunnel d'Achat Intégré** :
   - Onglet **Carte Bancaire** (compatible Stripe).
   - Onglet **Mobile Money** (Wave, Orange Money, MTN MoMo, Moov) avec saisie de numéro direct.
   - Écran de validation avec identifiant de commande instantané et accès Discord.

---

## 6. Checklist de Vérification Qualité pour Reproduction

- [x] **Top Bar Contract respecté** : Exactement 3 zones (Logo mot-symbole unique, 4 à 5 liens de navigation texte, 1 seul bouton d'action primaire).
- [x] **Zero-Pill Discipline** : Pas d'empilement de badges décoratifs ou de capsules superflues sur les métadonnées.
- [x] **Faisceau Border Beam** : Vitesse linéaire homogène sur tout le pourtour rectangulaire.
- [x] **Lenis Smooth Scroll** : Défilement doux sans saccades, désactivé automatiquement si `prefers-reduced-motion` est actif.
- [x] **Rendement Responsive Mobile** : Boutons adaptés aux écrans étroits, carrousel tactile, navigation par tiroir et pas de débordement horizontal.
- [x] **Tests Unitaires Découplés** : Moteur de calcul monétaire testable via `node --test`.
