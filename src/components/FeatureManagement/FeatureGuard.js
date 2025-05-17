import CTAFinal from "@/components/CTAFinal";

export const FeatureGuard = ({ children, featureName }) => {
  const features = {
    registration: {
      enabled: process.env.NEXT_PUBLIC_FEATURE_REGISTRATION === "true",
      title: "Registro PyDay 2025",
      subtitle: "El formulario de registro está disponible",
      showCTA: true,
      buttonText: "Acceder al registro externo",
      href: "https://www.eventbrite.cl/o/python-chile-31449960387",
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
    children
  ) : ctaProps.showCTA ? (
    <CTAFinal {...ctaProps} />
  ) : (
    <div className="text-center py-12">
      <h2 className="section-title">{ctaProps.title}</h2>
      <p className="text-white/80">{ctaProps.subtitle}</p>
    </div>
  );
};
