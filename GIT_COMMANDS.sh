#!/bin/bash
# Script pour commiter et pusher les changements GED_SITE
# À exécuter sur votre machine locale

# Se déplacer dans le dossier du projet
cd ~/Dev/GED_SITE

# Supprimer le lock Git si présent (problème de VM)
rm -f .git/index.lock

# Vérifier le statut
echo "📋 Statut Git actuel :"
git status

# Ajouter tous les fichiers
echo ""
echo "➕ Ajout des fichiers..."
git add .

# Créer le commit
echo ""
echo "📝 Création du commit..."
git commit -m "feat: Configuration initiale du site vitrine GED_SITE

Configuration du squelette Next.js 16 avec le design system GED :
- Fonts Google : Roboto (heading) + Nunito (sans)
- Tokens Tailwind : couleurs, spacing, shadows cohérents avec GED_APP
- 51 composants shadcn/ui copiés depuis l'app
- lib/utils.ts nettoyé (cn, formatPrice, generateSlug)
- Page d'accueil de démonstration avec sections Hero & Features
- Documentation : SETUP_INSTRUCTIONS.md avec liste des dépendances Radix UI à installer

Design system :
- Primary (Dark Blue) #2E4053 : Textes, titres
- Secondary (Gold) #FAB231 : Actions, CTA
- Accent (Teal) #00D49C : Succès, états actifs

Prochaines étapes :
1. npm install @radix-ui/* (voir SETUP_INSTRUCTIONS.md)
2. npm run dev pour vérifier que tout fonctionne
3. Créer le contenu réel du site vitrine

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Pousser sur GitHub
echo ""
echo "🚀 Push sur GitHub..."
git push origin main

# Confirmation
echo ""
echo "✅ Commit créé et poussé sur GitHub !"
echo ""
echo "🎯 Prochaines étapes :"
echo "1. cd ~/Dev/GED_SITE/ged-site"
echo "2. npm install @radix-ui/react-* (voir SETUP_INSTRUCTIONS.md)"
echo "3. npm run dev"
echo "4. Ouvrir http://localhost:3000"
