import Link from "next/link";
import cityData from "@/data/cities";

export default function EmptyState({ cityId, context = "city" }) {
  // Obtener todos los links activos
  const activeProposals = Object.values(cityData)
    .filter((city) => city.talkProposalLink?.length > 0)
    .map((city) => ({
      name: city.name,
      link: city.talkProposalLink,
    }));

  // Determinar contenido según contexto
  const getContent = () => {
    if (cityId) {
      const city = cityData[cityId];
      return {
        title: city.talkProposalLink
          ? "No hay charlas disponibles aún"
          : "Convocatoria cerrada",
        message: city.talkProposalLink
          ? "Estamos finalizando el programa. ¡Vuelve pronto!"
          : `La convocatoria para ${city.name} ha finalizado.`,
        links: city.talkProposalLink
          ? [
              {
                name: `Proponer en ${city.name}`,
                link: city.talkProposalLink,
              },
            ]
          : [],
      };
    }

    return {
      title:
        activeProposals.length > 0
          ? "Propuestas de Charlas Abiertas"
          : "Convocatorias Cerradas",
      message:
        activeProposals.length > 0
          ? "Selecciona una ciudad para enviar tu propuesta:"
          : "Todas las convocatorias están cerradas actualmente.",
      links: activeProposals,
    };
  };

  const { title, message, links } = getContent();

  return (
    <div className="backdrop-blur-sm rounded-lg p-6 md:p-8 text-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-py-red/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:h-10 md:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-2 text-py-text">
        {title}
      </h3>
      <p className="text-py-text/80 mb-6">{message}</p>

      {links.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full px-4">
          {links.map((proposal, index) => (
            <Link
              key={index}
              href={proposal.link}
              target="_blank"
              className="btn-secondary inline-flex items-center flex-shrink-0 px-4 py-2 text-sm md:text-base"
            >
              <span className="whitespace-nowrap">{proposal.name}</span>
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

      {links.length === 0 && context === "global" && (
        <p className="text-sm text-py-text/60 mt-4">
          Próximas convocatorias se anunciarán en redes sociales
        </p>
      )}
    </div>
  );
}
