import Link from 'next/link';
import Image from 'next/image';
import pastEvents from '@/data/pastEvents';

export default function PreviousEditionsPage() {
  return (
    <div className="container-py">
      <h1 className="section-title">Ediciones Anteriores</h1>
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-lg">
          Revive los momentos más destacados de las ediciones anteriores de PyDay Chile. Desde su fundación, 
          este evento ha sido punto de encuentro para la comunidad Python en Chile.
        </p>
      </div>

      <div className="space-y-24 mb-12">
        {pastEvents.map((event, index) => (
          <div key={index} className="event-card">
            <div className="relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Imagen del evento */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={event.mainImage}
                    alt={`PyDay Chile ${event.year}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-3xl font-bold">PyDay {event.year}</h2>
                    <p className="text-yellow-300 text-lg">{event.cities.join(' • ')}</p>
                  </div>
                </div>

                {/* Información del evento */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Estadísticas</h3>
                    <ul className="space-y-2 mb-6">
                      <li>
                        <span className="font-medium">Asistentes:</span> {event.attendees}
                      </li>
                      <li>
                        <span className="font-medium">Charlas:</span> {event.talks}
                      </li>
                      <li>
                        <span className="font-medium">Talleres:</span> {event.workshops}
                      </li>
                      <li>
                        <span className="font-medium">Fecha:</span> {event.date}
                      </li>
                    </ul>
                    
                    <div className="mt-4">
                      <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
                      <p>{event.highlights}</p>
                    </div>
                  </div>

                  {/* Enlaces o acciones */}
                  <div className="mt-6 flex gap-4">
                    {event.photosLink && (
                      <Link 
                        href={event.photosLink} 
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-medium"
                      >
                        Ver Fotos
                      </Link>
                    )}
                    {event.videosLink && (
                      <Link 
                        href={event.videosLink} 
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full text-sm font-medium"
                      >
                        Ver Videos
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/multimedia"
          className="btn-primary"
        >
          Ver galería multimedia
        </Link>
      </div>
    </div>
  );
}