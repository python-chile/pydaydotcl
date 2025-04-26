import cityData from "@/data/cities";

export default async function sitemap() {
  const baseUrl = "https://pyday.vercel.app/";
  
  // Rutas estáticas
  const staticRoutes = [
    '',
    '/multimedia',
    '/previous-editions',
    '/register',
    '/sponsors',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  // Rutas dinámicas basadas en ciudades
  const citiesRoutes = Object.keys(cityData).map(citySlug => ({
    url: `${baseUrl}/${citySlug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));
  
  return [...staticRoutes, ...citiesRoutes];
}