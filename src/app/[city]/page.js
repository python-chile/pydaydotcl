import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import TalkCard from "@/components/TalkCard";
import MapSection from "@/components/Maps";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CTAFinal from "@/components/CTAFinal";
import EmptyState from "@/components/EmptyState";
import CityLogo from "@/components/CityLogo";
import RegistrationForm from "@/components/RegistrationForm";
import { FeatureGuard } from "@/components/FeatureManagement/FeatureGuard";
import cityData from "@/data/cities";
import { generalFAQs } from "@/data/faqs";

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

async function getCityData(city) {
  const data = cityData[city];

  if (!data) return null;

  return {
    ...data,
    schedule: data.schedule.map((talk) => ({
      ...talk,
      city: data.name,
      date: data.date,
    })),
  };
}

export default async function CityPage({ params }) {
  const data = await getCityData(params.city);

  if (!data) {
    notFound();
  }

  // Función para extraer la hora de inicio
  const getStartTime = (timeStr) => {
    if (timeStr.includes(' - ')) {
      return timeStr.split(' - ')[0];
    }
    return timeStr;
  };

  // Ordenar eventos por hora
  const sortedSchedule = [...data.schedule].sort((a, b) => {
    return getStartTime(a.time).localeCompare(getStartTime(b.time));
  });

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backButton
        image={{ src: data.image, alt: `PyDay ${data.name}` }}
        title={`PyDay ${data.name}`}
        background=""
      >
        {/* Logo de la ciudad */}
        <div className="mb-4 flex justify-center">
          <CityLogo
            cityName={data.name}
            logoPath={data.logo || `/images/logos/pyday_${params.city}.webp`}
            size="md"
          />
        </div>
        <p className="text-xl md:text-2xl opacity-90">{data.date}</p>
        <p className="text-lg opacity-80">{data.venue}</p>
      </HeroSection>
      
      {/* Sección de introducción - Solo se muestra si existe */}
      {data.introduction && (
        <section className="container-py">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {/* Columna de texto */}
              <div className="bg-black/20 backdrop-blur rounded-lg p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-yellow-300">
                  {data.introduction.title}
                </h2>
                <p className="text-base md:text-lg mb-6">
                  {data.introduction.description}
                </p>

                <h3 className="text-lg md:text-xl font-semibold mb-4 text-yellow-300">
                  ¿Cómo participar?
                </h3>
                <p className="text-base mb-5">
                  {data.introduction.participationInfo}
                </p>

                <p className="font-medium mb-5">Fecha: {data.date}</p>

                <p className="mb-4">Puedes participar, sin costo.</p>
              </div>

              {/* Columna de imagen */}
              {data.introduction.campusImage && (
                <div className="rounded-lg overflow-hidden h-[300px] md:h-auto">
                  <Image
                    src={data.introduction.campusImage}
                    alt={`Campus PyDay ${data.name}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Registro Section */}
      <section id="registro" className="container-py">
        <div className="bg-black/20 backdrop-blur rounded-lg p-6 md:p-8">
          <FeatureGuard featureName="registration" cityData={data}>
              <RegistrationForm />
          </FeatureGuard>
        </div>
      </section>

      {/* Agenda*/}
      <section className="container-py">
        <h2 className="section-title">Agenda</h2>
        {sortedSchedule.length > 0 ? (
          <div className="space-y-4 md:space-y-6 mt-6 md:mt-8 max-w-4xl mx-auto">
            {sortedSchedule.map((talk) => (
              <TalkCard 
                key={talk.id} 
                talk={talk} 
                showRoom={true}  // Mostrar la sala en la vista de ciudad
              />
            ))}
          </div>
        ) : (
          <EmptyState cityId={params.city} />
        )}

        <div className="mt-8 md:mt-12 text-center hidden">
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

      {/* Mapa y dirección */}
      <section className="container-py">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">
          {/* Mapa */}
          <div className="bg-black/20 backdrop-blur rounded-lg overflow-hidden h-[300px] md:h-auto">
            <MapSection city={data} />
          </div>

          {/* Información de transporte */}
          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
              Cómo llegar
            </h2>
            <p className="text-base md:text-lg font-medium mb-2">
              {data.address}
            </p>

            <h3 className="text-lg md:text-xl font-semibold mt-3 md:mt-4 mb-2">
              Opciones de transporte:
            </h3>

            <ul className="space-y-2">
              {data.transportation.map((option, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 text-green-400 flex-shrink-0"
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
                  <span className="text-sm md:text-base">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection faqs={generalFAQs} />

      <CTAFinal
        title={`¡Únete al voluntariado de la comunidad Python Chile!`}
        subtitle="Aprende, comparte y conecta con desarrolladores y entusiastas de Python de toda la región y de Chile."
        buttonText="Registrarme ahora"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdhHlnqwmYffl6JNzbAZ4IRRyM_8fcOB1QH0hyz6Vwi3VFOwg/viewform"
        className="bg-gradient-to-br from-green-900/60 to-black/80 backdrop-blur rounded-lg my-4 md:my-8 mx-auto"
      />

      {/* Segundo enlace independiente para "Conocer la comunidad" */}
      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
        <Link
          href="https://pythonchile.cl/pages/coordinacion.html"
          target="_blank"
          className="btn-secondary inline-flex items-center"
        >
          Conocer la comunidad
        </Link>
      </div>

      {/* Footer específico de la ciudad */}
      <footer className="py-6 md:py-8 text-center text-xs md:text-sm opacity-60">
        <p>PyDay {data.name} es organizado por la comunidad Python Chile.</p>
        <p className="mt-2">
          Si quieres ser patrocinador o colaborador,{" "}
          <Link
            href="/sponsors#contacto"
            className="underline hover:text-white"
          >
            contáctanos
          </Link>
          .
        </p>
      </footer>
    </>
  );
}