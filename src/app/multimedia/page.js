import Gallery from '@/components/Gallery';

const images = [
  {
    src: '/images/gallery/pyday2024_1.webp',
    alt: 'Presentación PyDay 2024',
    caption: 'Charla inaugural PyDay 2024',
    location: 'Universidad de Chile, Santiago',
    year: '2024'
  },
  {
    src: '/images/gallery/pyday2024_2.webp',
    alt: 'Taller Python Concurrente',
    caption: 'Taller de Python Concurrente',
    location: 'Universidad Católica de Valparaíso',
    year: '2024'
  },
  {
    src: '/images/gallery/pyday2024_3.webp',
    alt: 'Mesa redonda',
    caption: 'Mesa redonda: Futuro de Python en Chile',
    location: 'Universidad de Concepción',
    year: '2024'
  },
  {
    src: '/images/gallery/pyday2023_1.webp',
    alt: 'Público PyDay 2023',
    caption: 'Público asistente a PyDay 2023',
    location: 'Universidad Andrés Bello, Santiago',
    year: '2023'
  },
  {
    src: '/images/gallery/pyday2023_2.webp',
    alt: 'Hackathon PyDay 2023',
    caption: 'Hackathon PyDay 2023',
    location: 'Campus San Joaquín, Santiago',
    year: '2023'
  },
  {
    src: '/images/gallery/pyday2023_3.webp',
    alt: 'Charla Machine Learning',
    caption: 'Charla sobre Machine Learning con Python',
    location: 'Universidad de Valparaíso',
    year: '2023'
  },
  {
    src: '/images/gallery/pyday2022_1.webp',
    alt: 'PyDay 2022 Inauguración',
    caption: 'Ceremonia de apertura PyDay 2022',
    location: 'Universidad Técnica Federico Santa María, Valparaíso',
    year: '2022'
  },
  {
    src: '/images/gallery/pyday2022_2.webp',
    alt: 'Networking PyDay 2022',
    caption: 'Networking post-evento',
    location: 'Universidad de Chile, Santiago',
    year: '2022'
  },
  {
    src: '/images/gallery/pyday2022_3.webp',
    alt: 'Taller Data Science',
    caption: 'Taller práctico de Data Science',
    location: 'Universidad Andrés Bello, Viña del Mar',
    year: '2022'
  },
  {
    src: '/images/gallery/pyday2021_1.webp',
    alt: 'PyDay 2021 Virtual',
    caption: 'Primera edición virtual de PyDay Chile',
    location: 'Online',
    year: '2021'
  },
  {
    src: '/images/gallery/pyday2021_2.webp',
    alt: 'Presentación Django',
    caption: 'Charla sobre desarrollo web con Django',
    location: 'Online',
    year: '2021'
  },
  {
    src: '/images/gallery/pyday2021_3.webp',
    alt: 'Workshop virtual',
    caption: 'Workshop de Python para principiantes',
    location: 'Online',
    year: '2021'
  }
];

const videos = [
  {
    id: 'video1',
    title: 'PyDay Valparaíso',
    thumbnail: '/images/videos/keynote_thumbnail.webp',
    url: 'https://www.youtube.com/embed/6AWDEZY_iZI',
    speaker: 'Gonzalo Peña-Castellanos',
    year: '2024'
  },
  {
    id: 'video2',
    title: 'PyDay Copiapó',
    thumbnail: '/images/videos/datascience_thumbnail.webp',
    url: 'https://www.youtube.com/embed/4t-z5oVGIAA',
    speaker: 'María Rodríguez',
    year: '2024'
  },
  {
    id: 'video3',
    title: 'Desarrollo web moderno con FastAPI',
    thumbnail: '/images/videos/fastapi_thumbnail.webp',
    url: 'https://www.youtube.com/embed/m3v8Ah5NOSQ',
    speaker: 'Carlos Villegas',
    year: '2023'
  },
  {
    id: 'video4',
    title: 'Python en el Internet de las Cosas',
    thumbnail: '/images/videos/iot_thumbnail.webp',
    url: 'https://www.youtube.com/embed/Dy0SSE8uk-Y',
    speaker: 'Laura Gómez',
    year: '2021'
  }
];

export default function MultimediaPage() {
  return (
    <div className="container-py">
      <h1 className="section-title">Galería Multimedia</h1>
      
      {/* Sección de Fotos */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Fotos de ediciones anteriores</h2>
        <div className="max-w-6xl mx-auto">
          <Gallery images={images} />
        </div>
      </section>
      
      {/* Sección de Videos */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Videos destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video relative">
                <iframe
                  width="560"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-300 mt-1">
                  {video.speaker} • PyDay Chile {video.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}