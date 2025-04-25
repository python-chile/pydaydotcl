import Gallery from '@/components/Gallery';

const { images, videos } = require('@/data/multimedia');

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