import { cityData } from "@/data/cities";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pyday.vercel.app";

  // Generar URLs
  const urls = [
    ...['', '/multimedia', '/previous-editions', '/register', '/sponsors']
      .map(path => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date().toISOString(),
        priority: path === '' ? 1.0 : 0.8,
      })),
    ...Object.keys(cityData).map(citySlug => ({
      url: `${baseUrl}/${citySlug}`,
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