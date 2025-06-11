import Link from "next/link";
import cityData from "@/data/cities";

export default function RegistrationState({ cityId }) {
  // Filtramos solo ciudades con registro disponible y que NO estén agotadas o cerradas
  const citiesWithRegistration = Object.entries(cityData)
    .filter(([_, city]) => 
      city.registrationLink && 
      city.registrationStatus !== "soldout" && 
      city.registrationStatus !== "closed"
    )
    .map(([_, city]) => ({
      name: city.name,
      link: city.registrationLink,
      status: city.registrationStatus,
    }));

  const getContent = () => {
    if (cityId) {
      const city = cityData[cityId];
      
      if (city.registrationStatus === "soldout") {
        return {
          title: "Cupos agotados",
          message: `Los cupos para PyDay ${city.name} ya se han agotado.`,
          links: [], // Sin links ni botones
        };
      }

      if (city.registrationStatus === "closed") {
        return {
          title: "Registro cerrado",
          message: `El registro para PyDay ${city.name} ha finalizado.`,
          links: [], // Sin links ni botones
        };
      }
      
      if (city.registrationStatus === "closing-soon") {
        return {
          title: "⏰ ¡Últimas horas!",
          message: `Quedan pocas entradas para PyDay ${city.name}. El registro cierra pronto.`,
          links: [{ name: city.name, link: city.registrationLink, status: "closing-soon" }],
        };
      }
      
      return {
        title: city.registrationLink ? "Registro disponible" : "Registro cerrado",
        message: city.registrationLink
          ? `Inscríbete para PyDay ${city.name}`
          : `El registro para PyDay ${city.name} aún no está disponible.`,
        links: city.registrationLink ? [{ name: city.name, link: city.registrationLink, status: city.registrationStatus }] : [],
      };
    }

    // Para vista general (sin cityId específico)
    const hasClosingSoon = citiesWithRegistration.some(city => city.status === "closing-soon");
    const totalCitiesWithRegistration = citiesWithRegistration.length;
    
    return {
      title: hasClosingSoon
        ? "⏰ ¡Últimas horas para algunas ciudades!"
        : totalCitiesWithRegistration > 0
        ? "¡Registro abierto! Cupos limitados"
        : "Registro cerrado",
      message: hasClosingSoon
        ? "Algunas ciudades están por cerrar su registro. ¡No te quedes fuera!"
        : totalCitiesWithRegistration > 0
        ? "Elige tu ciudad y asegura tu lugar hoy"
        : "El registro ha finalizado para todas las ciudades. ¡Nos vemos en el evento!",
      links: citiesWithRegistration,
    };
  };

  const { title, message, links } = getContent();

  // Función para obtener el estilo del botón según el estado
  const getButtonClass = (status) => {
    if (status === "closing-soon") {
      return "btn-secondary bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 animate-pulse inline-flex items-center flex-shrink-0 px-4 py-2 text-sm md:text-base font-bold";
    }
    return "btn-secondary inline-flex items-center flex-shrink-0 px-4 py-2 text-sm md:text-base";
  };

  // Función para obtener el texto del botón según el estado
  const getButtonText = (cityName, status) => {
    if (status === "closing-soon") {
      return `⏰ ${cityName} - ¡ÚLTIMAS ENTRADAS!`;
    }
    return cityName;
  };

  // Si no hay links, no mostramos botones, solo el texto
  return (
    <div className="backdrop-blur-sm rounded-lg p-6 md:p-8 text-center">
      <h3 className="text-lg md:text-xl font-bold mb-2 text-py-text">{title}</h3>
      <p className="text-py-text/80 mb-6">{message}</p>
      {links.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full px-4">
          {links.map((city, index) => (
            <Link
              key={index}
              href={city.link}
              target="_blank"
              className={getButtonClass(city.status)}
            >
              <span className="whitespace-nowrap">
                {getButtonText(city.name, city.status)}
              </span>
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
      )}
    </div>
  );
}