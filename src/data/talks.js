/**
 * ESQUEMA NORMALIZADO PARA CHARLAS Y TALLERES
 *
 * CAMPOS OBLIGATORIOS:
 * - id:          Número único (Ej: 101, 102...)
 * - type:        'charla' | 'taller'
 * - city:        'valparaiso' | 'santiago' | 'copiapo'
 * - title:       String (80-120 caracteres)
 * - description: String (140-280 caracteres)
 * - time:        Horario en formato "HH:MM - HH:MM" (duración mínima 30 mins)
 * - speaker:     { name: String, image: URL (ruta /images/speakers/...) }
 * - duration:    Número (minutos) *Obligatorio solo para talleres*
 *
 * CAMPOS OPCIONALES:
 * - category:    Para charlas: ['tecnica', 'comunidad', 'caso-de-exito', 'keynote']
 *                Para talleres: ['herramientas', 'fundamentos', 'proyecto-practico']
 * - level:       'introductorio' | 'intermedio' | 'avanzado'
 * - tags:        Array (max 5) de:
 *                ['Python', 'Web', 'Data Science', 'IA', 'Educación', 'Open Source',
 *                 'DevOps', 'Testing', 'Best Practices', 'Cloud', 'Career']
 * - resources:   {
 *                  slides: URL,
 *                  repo: URL GitHub/GitLab,
 *                  dataset: URL (para talleres)
 *                }
 * - requirements: [String] (Solo talleres - Ej: ['Laptop', 'Python 3.11+ instalado'])
 * - language:    'es' (default) | 'en'
 */
const allTalks = [] 
/*[
  {
    id: 1,
    city: "santiago",
    type: "recepcion",
    title: "Bienvenida",
    description: "Inicio de actividades y acreditación de participantes",
    time: "09:00 - 10:00",
    room: "Hall principal",
    speaker: null,
  },
  {
    id: 2,
    city: "santiago",
    type: "charla",
    title: "",
    description: "",
    time: "HH:MM - HH:MM",
    room: "",
    speaker: {
      name: "",
      image: "/images/speakers/",
      socials: {
          linkedin: "https://www.linkedin.com/in//"
        }
    },
    category: "",
    level: "",
    tags: ["Python"],
  },

];*/

export default allTalks;
