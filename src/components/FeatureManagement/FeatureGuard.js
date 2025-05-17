import CTAFinal from "@/components/CTAFinal";

export const FeatureGuard = ({ children, featureName, cityData }) => {
  const features = {
    registration: {
      enabled: process.env.NEXT_PUBLIC_FEATURE_REGISTRATION === "true",
      title: `Registro PyDay ${cityData?.name || "2025"}`,
      subtitle: cityData?.registrationLink 
        ? "¡Regístrate ahora para asegurar tu lugar en el PyDay 2025!" 
        : "El registro abrirá próximamente. Mantente atento a nuestras redes sociales",
      showCTA: !!cityData?.registrationLink,
      buttonText: "Registrarme ahora",
      href: cityData?.registrationLink || "",
    },
    sponsors: {
      enabled: process.env.NEXT_PUBLIC_FEATURE_SPONSORS === "true",
      title: "Patrocinadores PyDay",
      subtitle: "Programa de patrocinios en preparación",
      showCTA: true,
      buttonText: "Ver información para patrocinadores",
      href: "/sponsors#contacto",
    },
    sponsorForm: {
      enabled: process.env.NEXT_PUBLIC_FEATURE_SPONSOR_FORM === "true",
      title: "Formulario de Patrocinio",
      subtitle:
        "Actualmente estamos actualizando nuestro sistema de registro. Por favor contáctanos directamente o visita https://pythonchile.cl :",
      showCTA: true,
      buttonText: "Enviar mensaje",
      email: "pyday@pythonchile.cl",
    },
  };

  const { enabled, ...ctaProps } = features[featureName];

  return enabled ? (
      <>
        <h2 className="section-title">Formulario de Registro</h2>
        {children}
      </>
    ) : (
      <div className="text-center py-12">
        <h2 className="section-title">{ctaProps.title}</h2>
        <p className="text-white/80 mb-6">{ctaProps.subtitle}</p>
        {ctaProps.showCTA && (
          <a
            href={ctaProps.href}
            className="btn-secondary inline-flex items-center justify-center px-4 py-2 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaProps.buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}

      </div>
    );
  };


