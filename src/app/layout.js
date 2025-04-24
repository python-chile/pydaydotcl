import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PyDay Chile 2025",
  description: "Evento anual gratuito para promover y fomentar el lenguaje de programación Python en Chile",
  keywords: ["Python", "Chile", "Programación", "PyDay", "Desarrollo web", "Data Science", "Comunidad"],
  authors: [{ name: "Comunidad Python Chile" }],
  robots: "index, follow",
  
  openGraph: {
    title: "PyDay Chile 2025",
    description: "¡El evento más importante de Python en Chile! Charlas, workshops y networking para todos los niveles",
    url: "https://pyday.cl",
    siteName: "PyDay Chile",
    images: [
      {
        url: "/images/banner-og.jpg", 
        width: 1200,
        height: 630,
        alt: "PyDay Chile 2025 Banner",
      },
    ],
    locale: "es_CL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PyDay Chile 2025",
    description: "Evento anual de Python más importante de Chile",
    images: ["/images/banner-twitter.jpg"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
            <head>
        {/* Favicon tradicional */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        <link
          rel="icon"
          href="/android-chrome-512x512.png"
          type="image/png"
          sizes="512x512"
        />
        
        {/* Para iOS/Apple */}
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div className="gradient-bg fixed inset-0 -z-10" />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
