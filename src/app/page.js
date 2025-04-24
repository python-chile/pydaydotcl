import CountdownTimer from "@/components/CountdownTimer";
import ChileMap from "@/components/ChileMap";
import TalkCard from "@/components/TalkCard";
import RegistrationForm from "@/components/RegistrationForm";
import HeroSection from "@/components/HeroSection";
import SponsorList from "./sponsors/components/SponsorList";
import Link from "next/link";
import Image from "next/image";
import featuredTalks from "@/data/talks";

// FIXME: Datos de ejemplo - Estos deberían venir de una base de datos o CMS
const cities = [
  {
    name: "Copiapó",
    date: "6 de Junio, 2025",
    slug: "copiapo",
    mapCoords: { x: 50, y: 90 },
  },
  {
    name: "Valparaíso",
    date: "13 de Junio, 2025",
    slug: "valparaiso",
    mapCoords: { x: 52, y: 180 },
  },
  {
    name: "Santiago",
    date: "20 de Junio, 2025",
    slug: "santiago",
    mapCoords: { x: 58, y: 200 },
  },
];

export default function Home() {
  //FIXME: Fecha del primer evento de PyDay 2025
  const firstEventDate = "2025-06-06T09:00:00";

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-44 mt-8 mx-auto">
          <Image
            src="/images/logo.webp"
            alt="PyDay Chile 2025 Logo"
            fill
            className="object-contain animate-pulse"
          />
        </div>
      <HeroSection
        title="PyDay Chile 2025"
        subtitle="El evento anual gratuito para la comunidad Python en Chile"
      >
        
        <CountdownTimer targetDate={firstEventDate} />
        <div className="mt-8">
          <Link href="#ciudades" className="btn-primary">
            Ver sedes
          </Link>
        </div>
      </HeroSection>

      {/* Ciudades / Mapa Section */}
      <section id="ciudades" className="container-py">
        <h2 className="section-title">Sedes PyDay 2025</h2>
        <ChileMap cities={cities} />
      </section>

      {/* Agenda / Charlas Section */}
      <section className="container-py">
        <h2 className="section-title">Charlas Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {featuredTalks.map((talk, index) => (
            <TalkCard key={index} talk={talk} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/" className="btn-primary">
            Ver todas las charlas
          </Link>
        </div>
      </section>

      {/* Registro Section */}
      <section id="registro" className="container-py">
        <h2 className="section-title">Regístrate</h2>
        <div className="max-w-xl mx-auto">
          <RegistrationForm />
        </div>
      </section>

      {/* Acerca de PyDay */}
      <section className="container-py bg-black/20 backdrop-blur">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">¿Qué es PyDay?</h2>
          <p className="text-lg leading-relaxed">
            PyDay Chile es un evento anual gratuito y emocionante que se celebra
            en diversas locaciones del país durante un día, con el objetivo de
            promover y fomentar el lenguaje de programación Python. Impulsado
            por la comunidad de Python en Chile, entusiastas, desarrolladores,
            empresas, científicos e investigadores académicos se reúnen en
            universidades e institutos y organizan distintas actividades, como
            charlas inspiradoras, talleres prácticos y hackatones, éste día es
            para colaborar y disfrutar de un ambiente lleno de entusiasmo.
          </p>
          <div className="mt-8 inline-block px-8 py-3 border-2 border-white rounded-full font-bold text-lg">
            Evento 100% Gratuito
          </div>
        </div>
      </section>

      {/* Patrocinadores Section - Versión Simplificada */}
      <section id="patrocinadores" className="container-py">
        <h2 className="section-title">Nuestros Patrocinadores</h2>
        {/* FIXME: Escoger formato de Patrocinadores */}
        <SponsorList />
        {/* Patrocinadores Gold */}
        {/* <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400">
            Patrocinadores Gold
          </h3>
          <div className="flex justify-center">
            <a
              href="https://www.python.org/psf-landing/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur p-6 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <div className="relative h-32 w-64">
                <Image
                  src="/images/logos/psf-logo.webp"
                  alt="Python Software Foundation"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div> */}

        {/* Patrocinadores Silver */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-300">
            Patrocinadores Silver
          </h3>
          <div className="flex justify-center">
            <a
              href="https://aws.amazon.com/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur p-6 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <div className="relative h-24 w-48">
                <Image
                  src="/images/logos/aws.webp"
                  alt="Amazon Web Services"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div> */}

        {/* CTA para patrocinadores */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">
            ¿Interesado en patrocinar PyDay Chile?
          </h3>
          <p className="text-lg mb-8">
            Conecta tu marca con la comunidad Python de Chile y contribuye al
            crecimiento de la tecnología en nuestro país. Existen diferentes
            niveles de patrocinio adaptados a tus necesidades.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/sponsors" className="btn-primary">
              Ver beneficios de patrocinio
            </Link>
            <Link href="/sponsors#contacto" className="btn-secondary">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
