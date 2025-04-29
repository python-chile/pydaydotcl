import Gallery from "@/components/Gallery";

const { images, videos } = require("@/data/multimedia");

export default function MultimediaPage() {
  const photoYears = Array.from(new Set(images.map((i) => i.year)))
    .sort()
    .reverse();
  const videoYears = Array.from(
    new Set(videos.map((v) => new Date(v.date).getFullYear().toString()))
  )
    .sort()
    .reverse();

  return (
    <div className="container-py">
      <h1 className="section-title">Galería Multimedia</h1>

      {/* Fotos por año */}
      <section id="photos">
        <h2 className="text-2xl font-bold mb-6 text-center">Fotos</h2>
        {photoYears.map((year) => (
          <div key={year} id={`photos-${year}`} className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-py-text">
              PyDay {year}
            </h3>
            <Gallery images={images.filter((img) => img.year === year)} />
          </div>
        ))}
      </section>

      {/* Videos por año */}
      <section id="videos">
        <h2 className="text-2xl font-bold mb-6 text-center">Videos</h2>
        {videoYears.map((year) => (
          <div key={year} id={`videos-${year}`} className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-py-text">
              PyDay {year}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos
                .filter(
                  (v) => new Date(v.date).getFullYear().toString() === year
                )
                .map((video) => (
                  <div
                    key={video.id}
                    className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="aspect-video relative">
                      <iframe
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold">{video.title}</h4>
                      <p className="text-sm text-gray-300 mt-1">{video.date}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
