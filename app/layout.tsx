import type { Metadata } from "next";
import { StructuredData } from "../components/seo/structured-data";
import { SITE_URL } from "../lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dreamy Pijamas | Pijamas suaves y bonitas en Colombia",
    template: "%s | Dreamy Pijamas",
  },
  description:
    "Compra pijamas para mujer, pijamas suaves, accesorios y regalos en Colombia. Diseños bonitos, cómodos y hechos para dormir mejor. Envíos a todo el país.",
  keywords: [
    "pijamas",
    "pijamas para mujer",
    "pijamas bonitas",
    "pijamas suaves",
    "pijamas en Colombia",
    "ropa para dormir",
    "accesorios para dormir",
    "regalos para mujer",
  ],
  applicationName: "Dreamy Pijamas",
  authors: [{ name: "Dreamy Pijamas" }],
  creator: "Dreamy Pijamas",
  publisher: "Dreamy Pijamas",
  category: "fashion",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "Dreamy Pijamas",
    title: "Dreamy Pijamas | Pijamas suaves y bonitas en Colombia",
    description:
      "Pijamas bonitas, suaves y cómodas para convertir cada noche en tu momento favorito.",
    images: [{
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Dreamy Pijamas: pijamas suaves para dormir bonito",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamy Pijamas | Pijamas suaves y bonitas",
    description: "Descubre pijamas, accesorios y regalos para tus momentos suaves.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
