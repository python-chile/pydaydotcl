import Gallery from "@/components/Gallery";
import { Suspense } from "react";
import { images, videos } from "@/data/multimedia";

const GallerySkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="aspect-square bg-gradient-to-br from-primary-green/10 to-accent-yellow/5 animate-pulse rounded-lg"
      />
    ))}
  </div>
);

export default function MultimediaPage() {
  const getYears = (data) =>
    [...new Set(data.map((item) => item.year))].sort().reverse();

  const videoYears = Array.from(
    new Set(videos.map((v) => new Date(v.date).getFullYear().toString()))
  )
    .sort()
    .reverse();

  return (
    <div className="container-py">
      <h1 className="section-title">Galería Multimedia</h1>

      <section id="photos">
        <h2 className="text-2xl font-bold mb-6 text-center">Fotos</h2>
        {getYears(images).map((year) => (
          <div key={year} id={`photos-${year}`} className="mb-12 scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">PyDay {year}</h3>
            <Suspense fallback={<GallerySkeleton />}>
              <Gallery images={images.filter((img) => img.year === year)} />
            </Suspense>
          </div>
        ))}
      </section>

      <section id="videos">
        <h2 className="text-2xl font-bold mb-6 text-center">Videos</h2>
        {videoYears.map((year) => (
          <div key={year} id={`videos-${year}`} className="mb-12 scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">PyDay {year}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos
                .filter(
                  (v) => new Date(v.date).getFullYear() === parseInt(year)
                )
                .map((video) => (
                  <div
                    key={video.id}
                    className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="aspect-video relative">
                      <iframe
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold">{video.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        {new Date(video.date).toLocaleDateString("es-CL", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
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
