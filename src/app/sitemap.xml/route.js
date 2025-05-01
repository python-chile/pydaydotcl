import cityData from "@/data/cities"; 

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://pyday.vercel.app").replace(/\/$/, '');

  // Validación de datos
  if (!cityData || typeof cityData !== 'object') {
    throw new Error('Datos de ciudades no encontrados');
  }

  // Generar URLs
  const urls = [
    ...['', '/multimedia', '/previous', '/register', '/sponsors']
      .map(path => ({
        url: new URL(path, baseUrl).href,
        lastModified: new Date().toISOString(),
        priority: path === '' ? 1.0 : 0.8,
      })),
    ...Object.keys(cityData).map(citySlug => ({
      url: new URL(`/${citySlug}`, baseUrl).href,
      lastModified: new Date().toISOString(),
      priority: 0.9,
    }))
  ];


  // Generar XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(({ url, lastModified, priority }) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
      </url>
    `).join('')}
    </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600'
    },
  });
}