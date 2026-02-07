# 🚀 Instructions de configuration GED_SITE

## État actuel du projet

✅ **Fonctionnel :**
- Repo GitHub initialisé et poussé
- Squelette Next.js 16 créé avec TypeScript
- Design system copié depuis GED_APP (colors, fonts, tokens)
- 51 composants shadcn/ui copiés
- Fonts Google configurées (Roboto + Nunito)
- Métadonnées mises à jour

⚠️ **À finaliser :**
- Installation des dépendances Radix UI manquantes
- Création du contenu du site vitrine

---

## 1️⃣ Installation des dépendances Radix UI

Les composants shadcn/ui nécessitent les packages Radix UI suivants :

\`\`\`bash
cd ~/Dev/GED_SITE/ged-site

npm install \
  @radix-ui/react-accordion \
  @radix-ui/react-alert-dialog \
  @radix-ui/react-aspect-ratio \
  @radix-ui/react-avatar \
  @radix-ui/react-checkbox \
  @radix-ui/react-collapsible \
  @radix-ui/react-context-menu \
  @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-hover-card \
  @radix-ui/react-label \
  @radix-ui/react-menubar \
  @radix-ui/react-navigation-menu \
  @radix-ui/react-popover \
  @radix-ui/react-progress \
  @radix-ui/react-radio-group \
  @radix-ui/react-scroll-area \
  @radix-ui/react-select \
  @radix-ui/react-separator \
  @radix-ui/react-slider \
  @radix-ui/react-slot \
  @radix-ui/react-switch \
  @radix-ui/react-tabs \
  @radix-ui/react-toast \
  @radix-ui/react-toggle \
  @radix-ui/react-toggle-group \
  @radix-ui/react-tooltip
\`\`\`

---

## 2️⃣ Vérification du serveur de dev

Après installation des dépendances :

\`\`\`bash
npm run dev
\`\`\`

Le site devrait être accessible sur `http://localhost:3000`

---

## 3️⃣ Structure du projet

\`\`\`
ged-site/
├── app/
│   ├── layout.tsx        # ✅ Fonts Roboto + Nunito configurées
│   ├── globals.css       # ✅ Design system GED complet
│   └── page.tsx          # ⚠️ À remplacer par page d'accueil GED
├── components/
│   └── ui/               # ✅ 51 composants shadcn/ui copiés
├── lib/
│   └── utils.ts          # ✅ Utilitaires nettoyés (cn, formatPrice, etc.)
├── tailwind.config.ts    # ✅ Tokens GED (colors, fonts, shadows)
└── package.json          # ⚠️ Nécessite dépendances Radix UI
\`\`\`

---

## 4️⃣ Design System GED

### Couleurs principales
- **Primary (Dark Blue)** : `#2E4053` - Textes, titres, identité
- **Secondary (Gold)** : `#FAB231` - Actions, CTA, focus
- **Accent (Teal)** : `#00D49C` - États actifs, succès

### Typographie
- **Headings** : Roboto (bold, 700-900)
- **Body** : Nunito (regular, 400-800)

### Composants
- Boutons avec `rounded-pill` (50px)
- Ombres `shadow-brand-lg` pour les cartes
- Animations hover `scale-105`

---

## 🎯 Prochaines étapes

1. Installer les dépendances Radix UI (commande ci-dessus)
2. Créer le contenu du site vitrine (page d'accueil, sections, etc.)
3. Tester le build de production : `npm run build`
4. Déployer sur Vercel ou autre plateforme

---

## 📝 Notes importantes

- Le site vitrine utilise **exactement** le même design system que GED_APP
- Les composants UI sont **cohérents** entre l'app et le site
- Le `utils.ts` a été **nettoyé** (plus de dépendances inutiles)
- Les fonts sont **optimisées** pour le chargement (display: swap)

---

**Créé le** : 2026-02-07  
**Par** : Claude (Diagnostic et configuration initiale)
