import Link from "next/link";
import Image from "next/image";
import TalkCard from "@/components/TalkCard";
import MapSection from "@/components/Maps";
import HeroSection from "@/components/HeroSection";
import FAQSection from '@/components/FAQSection';
import CTAFinal from "@/components/CTAFinal";
import cityData from "@/data/cities";
import { generalFAQs } from '@/data/faqs';

export function generateStaticParams() {
  return [{ city: "valparaiso" }, { city: "santiago" }, { city: "copiapo" }];
}

async function getCityData(city) {
  await Promise.resolve();
  return cityData[city] || null;
}

export default async function CityPage({ params }) {
  const data = await getCityData(params.city);

  if (!data) {
    return (
      <div className="container-py text-center">
        <h1 className="text-3xl font-bold mb-6">Sede no encontrada</h1>
        <p className="mb-6">La sede que buscas no está disponible.</p>
        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backButton
        image={{ src: data.image, alt: `PyDay ${data.name}` }}
        title={`PyDay ${data.name}`}
        background=""
      >
        <p className="text-xl md:text-2xl opacity-90">{data.date}</p>
        <p className="text-lg opacity-80">{data.venue}</p>
      </HeroSection>

      {/* Mapa y dirección */}
      <section className="container-py">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mapa */}
          <div className="bg-black/20 backdrop-blur rounded-lg overflow-hidden">
            <MapSection city={data} />

            {/* </div>
            <div className="p-4">
              <a
                href={data.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline flex items-center justify-center space-x-2"
              >
                <span>Ver en Google Maps</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Información de transporte */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Cómo llegar</h2>
            <p className="text-lg font-medium mb-2">{data.address}</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Opciones de transporte:
            </h3>
            <ul className="space-y-2">
              {data.transportation.map((option, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="container-py">
        <h2 className="section-title">Agenda</h2>
        <div className="space-y-6 mt-8">
          {data.schedule.map((talk, index) => (
            <TalkCard key={index} talk={talk} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/register"
            target="_blank"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Registrarme para este evento</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Speakers destacados */}
      <section className="container-py bg-black/20 backdrop-blur">
        <h2 className="section-title">Ponentes destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {data.schedule.map((talk, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={talk.speaker.image}
                  alt={talk.speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl">{talk.speaker.name}</h3>
                <p className="text-green-400 mb-2">{talk.title}</p>
                <p className="opacity-80 text-sm">{talk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={generalFAQs} />
      
      <CTAFinal
        title={`¡Únete a la comunidad Python en ${data.name}!`}
        subtitle="Aprende, comparte y conecta con desarrolladores y entusiastas de Python de toda la región y de Chile."
        buttonText="Registrarme ahora"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdhHlnqwmYffl6JNzbAZ4IRRyM_8fcOB1QH0hyz6Vwi3VFOwg/viewform"
        className="bg-gradient-to-br from-green-900/60 to-black/80 backdrop-blur rounded-lg my-8 mx-4 md:mx-8"
      />

      {/* Segundo enlace independiente para "Conocer la comunidad" */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <Link
          href="https://pythonchile.cl/pages/coordinacion.html"
          target="_blank"
          className="btn-secondary inline-flex items-center"
        >
          Conocer la comunidad
        </Link>
      </div>

      {/* Call to Action final */}
      {/* <section className="container-py bg-gradient-to-br from-green-900/60 to-black/80 backdrop-blur rounded-lg my-8 mx-4 md:mx-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            ¡Únete a la comunidad Python en {data.name}!
          </h2>
          <p className="mb-6 text-lg">
            Aprende, comparte y conecta con desarrolladores y entusiastas de
            Python de toda la región y de Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhHlnqwmYffl6JNzbAZ4IRRyM_8fcOB1QH0hyz6Vwi3VFOwg/viewform"
              target="_blank"
              className="btn-primary"
            >
              Registrarme ahora
            </Link>
            <Link
              href="https://pythonchile.cl/pages/coordinacion.html"
              target="_blank"
              className="btn-secondary"
            >
              Conocer la comunidad
            </Link>
          </div>
        </div>
      </section> */}

      {/* Footer específico de la ciudad */}
      <footer className="container-py text-center text-sm opacity-60">
        <p>PyDay {data.name} es organizado por la comunidad Python Chile.</p>
        <p className="mt-2">
          Si quieres ser patrocinador o colaborador,{" "}
          <Link href="/contacto" className="underline hover:text-white">
            contáctanos
          </Link>
          .
        </p>
      </footer>
    </>
  );
}
