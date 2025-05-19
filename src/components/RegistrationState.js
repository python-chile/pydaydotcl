import Link from "next/link";
import cityData from "@/data/cities";

export default function RegistrationState({ cityId }) {
  const citiesWithRegistration = Object.values(cityData)
    .filter((city) => !!city.registrationLink)
    .map((city) => ({
      name: city.name,
      link: city.registrationLink,
    }));

  const getContent = () => {
    if (cityId) {
      const city = cityData[cityId];
      return {
        title: city.registrationLink ? "Registro disponible" : "Registro cerrado",
        message: city.registrationLink
          ? `Inscríbete para PyDay ${city.name}`
          : `El registro para PyDay ${city.name} aún no está disponible.`,
        links: city.registrationLink ? [{ name: city.name, link: city.registrationLink }] : [],
      };
    }

    return {
      title:
        citiesWithRegistration.length > 0
          ? "¡Registro abierto! Cupos limitados"
          : "Registro cerrado",
      message:
        citiesWithRegistration.length > 0
          ? "Elige tu ciudad y asegura tu lugar hoy"
          : "El registro abrirá próximamente. Síguenos en redes sociales.",
      links: citiesWithRegistration,
    };
  };

  const { title, message, links } = getContent();

  if (links.length === 0) return null;

  return (
    <div className="backdrop-blur-sm rounded-lg p-6 md:p-8 text-center">
      <h3 className="text-lg md:text-xl font-bold mb-2 text-py-text">{title}</h3>
      <p className="text-py-text/80 mb-6">{message}</p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full px-4">
        {links.map((city, index) => (
          <Link
            key={index}
            href={city.link}
            target="_blank"
            className="btn-secondary inline-flex items-center flex-shrink-0 px-4 py-2 text-sm md:text-base"
          >
             <span className="whitespace-nowrap">{city.name}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 ml-1.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}

