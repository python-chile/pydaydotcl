import { cityData } from "@/data/cities"; 

export const dynamic = 'force-dynamic'; 

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pyday.vercel.app";

  // Rutas estáticas
  const staticRoutes = [
    { path: '', priority: 1.0 },
    { path: '/multimedia', priority: 0.8 },
    { path: '/previous-editions', priority: 0.8 },
    { path: '/register', priority: 0.8 },
    { path: '/sponsors', priority: 0.8 },
  ];

  // Rutas dinámicas de ciudades
  const citiesRoutes = Object.keys(cityData).map(citySlug => ({
    path: `/${citySlug}`,
    priority: 0.9,
  }));

  // Generar XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...staticRoutes, ...citiesRoutes].map(({ path, priority }) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
      </url>
    `).join('')}
    </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}