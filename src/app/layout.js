import { Suspense } from "react";
import "./globals.css";
import { openSans } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MaintenanceBanner } from "@/components/FeatureManagement/MaintenanceBanner";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3D8B37",
};

export const metadata = {
  title: "PyDay Chile 2025",
  description:
    "Evento anual gratuito que reúne a la comunidad Python en distintas ciudades de Chile con charlas, talleres y networking para todos los niveles",
  keywords: [
    "Python",
    "Chile",
    "Programación",
    "PyDay",
    "Desarrollo web",
    "Data Science",
    "Comunidad",
    "Talleres",
    "Charlas",
    "Hackathon",
  ],
  authors: [{ name: "MariferVL", url: "https://github.com/MariferVL" }],
  creator: "María-Fernanda Villalobos López",
  publisher: "Python Chile",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.webp", type: "image/webp", sizes: "16x16" },
      { url: "/favicon-32x32.webp", type: "image/webp", sizes: "32x32" },
      {
        url: "/android-chrome-192x192.webp",
        type: "image/webp",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.webp",
        type: "image/webp",
        sizes: "512x512",
      },
    ],
    shortcut: "/favicon-32x32.webp",
    apple: [{ url: "/apple-touch-icon.webp", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#3D8B37" },
    ],
  },
  manifest: "/manifest.json",
  applicationName: "PyDay Chile",
  appleWebApp: {
    capable: true,
    title: "PyDay Chile 2025",
    statusBarStyle: "black-translucent",
  },
  category: "technology",
  metadataBase: new URL("https://pyday.cl/"),
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/es",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: ["en_US"],
    title: "PyDay Chile 2025",
    description:
      "PyDay Chile es un evento anual gratuito que reúne a entusiastas, desarrolladores y académicos en un día lleno de Python con charlas inspiradoras, talleres prácticos y networking en diversas ciudades de Chile.",
    siteName: "PyDay Chile",
    url: "https://pyday.cl/",
    images: [
      {
        url: "https://pyday.cl/images/banner-og.jpg",
        width: 1200,
        height: 630,
        alt: "PyDay Chile 2025 - Un día de Python en tu ciudad",
      },
      // {
      //   url: "https://pyday.cl/images/logos/logo_bg.png",
      //   width: 500,
      //   height: 500,
      //   alt: "Logo PyDay Chile",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PyDay Chile 2025 - Evento anual de Python en tu ciudad",
    description:
      "Sumérgete en un día lleno de Python con charlas, talleres y networking en distintas ciudades de Chile. ¡Un evento gratuito impulsado por la comunidad!",
    siteId: "@pythonchile",
    creator: "@pythonchile",
    creatorId: "@pythonchile",
    images: [
      {
        url: "https://pyday.cl/images/banner-og.jpg",
        alt: "PyDay Chile 2025",
        width: 1200,
        height: 628,
      },
    ],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      me: ["mailto:pyday@pythonchile.cl", "https://twitter.com/pythonchile"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${openSans.className} overflow-x-hidden min-h-screen flex flex-col text-py-text`}
      >
        <div className="fixed inset-0 -z-10 gradient-bg" />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={null}>
            <MaintenanceBanner />
          </Suspense>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
