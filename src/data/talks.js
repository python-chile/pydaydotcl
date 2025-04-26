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
  {
    id: 101,
    type: "charla",
    city: "valparaiso",
    title: "Keynote: El futuro de Python en América Latina",
    description: "Visión estratégica del crecimiento de Python en la región con casos de éxito regionales",
    time: "09:00 - 09:45",
    speaker: {
      name: "Roberto Gutiérrez",
      image: "/images/speakers/roberto-gutierrez.webp"
    },
    category: "keynote",
    level: "intermedio",
    tags: ["Python", "Comunidad", "Educación"],
    resources: {
      slides: "https://slides.com/rgutierrez/keynote-pyday"
    }
  },
  {
    id: 201,
    type: "taller",
    city: "valparaiso",
    title: "Django desde Cero: Construye un E-commerce",
    description: "Taller práctico de 3 horas para crear una tienda online completa",
    time: "10:00 - 13:00",
    duration: 180,
    speaker: {
      name: "Laura Pérez",
      image: "/images/speakers/laura-perez.webp"
    },
    category: "proyecto-practico",
    level: "introductorio",
    tags: ["Python", "Web", "Django"],
    requirements: ["Laptop con Python 3.11+", "Conocimientos básicos de Python"],
    resources: {
      repo: "https://github.com/lperez/django-ecommerce-workshop"
    }
  },
  {
    id: 301,
    type: "charla",
    city: "santiago",
    title: "Python en Sistemas Embebidos",
    description: "Implementación de Python en dispositivos IoT y sistemas de bajo consumo",
    time: "14:30 - 15:15",
    speaker: {
      name: "Ana González",
      image: "/images/speakers/ana-gonzalez.webp"
    },
    category: "tecnica",
    level: "avanzado",
    tags: ["Python", "IoT", "Hardware"],
    resources: {
      repo: "https://github.com/agonzalez/embedded-python-demo"
    }
  },
  {
    id: 401,
    type: "taller",
    city: "copiapo",
    title: "Análisis de Datos Mineros con Pandas",
    description: "Taller intensivo de procesamiento de datos de sensores mineros",
    time: "16:00 - 18:00",
    duration: 120,
    speaker: {
      name: "Felipe Rojas",
      image: "/images/speakers/felipe-rojas.webp"
    },
    category: "herramientas",
    level: "intermedio",
    tags: ["Python", "Data Science", "Pandas"],
    requirements: ["Laptop con Jupyter instalado"],
    resources: {
      dataset: "https://github.com/frojas/mining-dataset-sample"
    }
  },
  {
    id: 501,
    type: "charla",
    city: "santiago",
    title: "Type Hints en Python a Escala Empresarial",
    description: "Implementación de tipado estático en grandes codebases",
    time: "11:30 - 12:15",
    speaker: {
      name: "Daniel Castro",
      image: "/images/speakers/daniel-castro.webp"
    },
    category: "tecnica",
    level: "avanzado",
    tags: ["Python", "Best Practices", "Testing"],
    resources: {
      slides: "https://slides.com/dcastro/typehints-enterprise"
    }
  },
  {
    id: 601,
    type: "taller",
    city: "valparaiso",
    title: "DevOps con Python: De Cero a CI/CD",
    description: "Implementación de pipelines de despliegue automático",
    time: "15:30 - 17:30",
    duration: 120,
    speaker: {
      name: "Carlos Rojas",
      image: "/images/speakers/carlos-rojas.webp"
    },
    category: "herramientas",
    level: "intermedio",
    tags: ["Python", "DevOps", "Cloud"],
    requirements: ["Cuenta gratuita en AWS", "Docker Desktop instalado"]
  },
  {
    id: 701,
    type: "charla",
    city: "copiapo",
    title: "Python en la Automatización Minera",
    description: "Casos reales de implementación en la industria extractiva",
    time: "10:45 - 11:30",
    speaker: {
      name: "Carla Herrera",
      image: "/images/speakers/carla-herrera.webp"
    },
    category: "caso-de-exito",
    level: "intermedio",
    tags: ["Python", "Industria", "Automatización"]
  },
  {
    id: 801,
    type: "taller",
    city: "santiago",
    title: "Machine Learning para Videojuegos",
    description: "Implementación de IA en desarrollo de juegos con Python",
    time: "16:00 - 18:30",
    duration: 150,
    speaker: {
      name: "Jorge Méndez",
      image: "/images/speakers/jorge-mendez.webp"
    },
    category: "proyecto-practico",
    level: "avanzado",
    tags: ["Python", "IA", "Machine Learning"],
    resources: {
      repo: "https://github.com/jmendez/game-ai-workshop"
    }
  }
];

export default allTalks;
