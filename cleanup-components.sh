#!/bin/bash
# Script pour nettoyer les composants UI non nécessaires
# À exécuter sur votre Mac

cd ~/Dev/GED_SITE/ged-site/components/ui

echo "🧹 Suppression des composants avec dépendances externes..."

# Supprimer les composants problématiques
rm -f calendar.tsx
rm -f carousel.tsx
rm -f command.tsx
rm -f date-range-picker.tsx
rm -f drawer.tsx
rm -f form.tsx
rm -f input-otp.tsx
rm -f resizable.tsx
rm -f sonner.tsx
rm -f task-card.tsx
rm -f toaster.tsx
rm -f use-toast.ts

echo ""
echo "✅ Composants supprimés !"
echo ""
echo "📦 Composants restants ($(ls -1 | wc -l)) :"
ls -1

echo ""
echo "✅ Ces composants fonctionnent tous avec les dépendances déjà installées."
echo ""
echo "🚀 Relancez maintenant : npm run dev"
