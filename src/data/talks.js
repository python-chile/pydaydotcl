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

//TODO: Simulación de datos - Estos vendrían de una base de datos o API
//FIXME:Actualizar con los datos de los oradores y las charlas.
const allTalks = [
  // {
  //   id: 101,
  //   type: "charla",
  //   city: "valparaiso",
  //   title: "Keynote: El futuro de Python en América Latina",
  //   description: "Visión estratégica del crecimiento de Python en la región con casos de éxito regionales",
  //   time: "09:00 - 09:45",
  //   speaker: {
  //     name: "Roberto Gutiérrez",
  //     image: "/images/speakers/roberto-gutierrez.webp"
  //   },
  //   category: "keynote",
  //   level: "intermedio",
  //   tags: ["Python", "Comunidad", "Educación"],
  //   resources: {
  //     slides: "https://slides.com/rgutierrez/keynote-pyday"
  //   }
  // },

];

export default allTalks;
