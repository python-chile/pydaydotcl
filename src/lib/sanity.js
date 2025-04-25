import sanityClient from '@sanity/client';
//TODO: Implementar en fases futuras 
//
export const client = sanityClient({
  projectId: 'tu-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Obtener patrocinadores
export async function getSponsors() {
  return await client.fetch('*[_type == "sponsor"] | order(level asc)');
}