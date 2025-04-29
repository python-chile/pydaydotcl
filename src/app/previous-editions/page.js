import Link from "next/link";
import Image from "next/image";
import pastEvents from "@/data/pastEvents";

export default function PreviousEditionsPage() {
  return (
    <div className="container-py min-h-screen">
      <h1 className="section-title">Ediciones Anteriores</h1>

      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-lg">
          Revive los momentos más destacados de las ediciones anteriores de
          PyDay Chile. Desde su fundación, este evento ha sido punto de
          encuentro para la comunidad Python en Chile.
        </p>
      </div>

      <div className="space-y-24 mb-12">
        {pastEvents.map((event, index) => (
          <div key={index} className="event-card">
            <div className="relative bg-py-dark/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
              {/* Se fuerza que ambos lados ocupen al menos 20rem y se centran verticalmente */}
              <div className="grid md:grid-cols-2 gap-6 items-center min-h-[20rem]">
                {/* Imagen del evento */}
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={event.mainImage}
                    alt={`PyDay Chile ${event.year}`}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-py-dark/70 to-transparent" />
                  <div className="absolute bottom-4 inset-x-0 text-center">
                    <h2 className="text-3xl font-bold text-py-text">
                      PyDay {event.year}
                    </h2>
                    <p className="text-lg text-py-yellow">
                      {event.cities.join(" • ")}
                    </p>
                  </div>
                </div>

                {/* Información del evento */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-py-text">
                      Estadísticas
                    </h3>
                    <ul className="space-y-2 mb-6 text-py-text">
                      <li>
                        <span className="font-medium">Asistentes:</span>{" "}
                        {event.attendees}
                      </li>
                      <li>
                        <span className="font-medium">Espectadores:</span>{" "}
                        {event.viewers}
                      </li>
                      <li>
                        <span className="font-medium">Charlas:</span>{" "}
                        {event.talks}
                      </li>
                      <li>
                        <span className="font-medium">Talleres:</span>{" "}
                        {event.workshops}
                      </li>
                      <li>
                        <span className="font-medium">Fecha:</span> {event.date}
                      </li>
                    </ul>

                    <div className="mt-4">
                      <h3 className="text-2xl font-semibold mb-2 text-py-text">
                        Highlights
                      </h3>
                      <p className="text-py-text">{event.highlights}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-4">
                    <Link
                      href={`/multimedia#photos-${event.year}`}
                      target="_blank"
                      className="btn-secondary"
                    >
                      Fotos {event.year}
                    </Link>
                    <Link
                      href={event.webpageLink}
                      target="_blank"
                      className="btn-secondary"
                    >
                      Sitio Web {event.year}
                    </Link>
                    <Link
                      href={`/multimedia#videos-${event.year}`}
                      target="_blank"
                      className="btn-secondary"
                    >
                      Videos {event.year}
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/multimedia" className="btn-primary">
          Ver galería multimedia
        </Link>
      </div>
    </div>
  );
}
