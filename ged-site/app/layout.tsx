import type { Metadata } from "next";
import { Roboto, Nunito } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Groupe & Découverte | Hub National du Loisir Éducatif",
  description: "Le Tiers de Confiance des parcours éducatifs. Zéro exclusion, 100% diplômés d'état.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${roboto.variable} ${nunito.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans text-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
