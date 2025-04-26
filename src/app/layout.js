import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3775a9" },
    { media: "(prefers-color-scheme: dark)", color: "#306998" },
  ],
  colorScheme: "light dark",
};

export const metadata = {
  title: "PyDay Chile 2025",
  description:
    "Evento anual gratuito para promover y fomentar el lenguaje de programación Python en Chile",
  keywords: [
    "Python",
    "Chile",
    "Programación",
    "PyDay",
    "Desarrollo web",
    "Data Science",
    "Comunidad",
  ],
  authors: [{ name: "Comunidad Python Chile", url: "https://pyday.cl" }],
  creator: "Comunidad Python Chile",
  publisher: "Comunidad Python Chile",
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
      { url: "/favicon-16x16.webp", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.webp", type: "image/png", sizes: "32x32" },
      {
        url: "/android-chrome-192x192.webp",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.webp",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/shortcut-icon.webp",
    apple: [{ url: "/apple-touch-icon.webp", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#3775a9" },
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
  metadataBase: new URL("https://pyday.cl"),
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
      "¡El evento más importante de Python en Chile! Charlas, workshops y networking para todos los niveles",
    siteName: "PyDay Chile",
    url: "https://pyday.cl",
    images: [
      {
        url: "/images/banner-og.jpg",
        width: 1200,
        height: 630,
        alt: "PyDay Chile 2025 Banner",
      },
      {
        url: "/images/logo-pyday.webp",
        width: 800,
        height: 800,
        alt: "Logo PyDay Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PyDay Chile 2025",
    description: "Evento anual de Python más importante de Chile",
    siteId: "@pythonchile",
    creator: "@pythonchile",
    creatorId: "@pythonchile",
    images: [
      {
        url: "/images/banner-twitter.jpg",
        alt: "PyDay Chile 2025",
      },
    ],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      me: ["mailto:contacto@pyday.cl", "https://twitter.com/pythonchile"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div className="gradient-bg fixed inset-0 -z-10" />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
