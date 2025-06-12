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
const allTalks = [
  {
    id: 1,
    city: "santiago",
    type: "recepcion",
    title: "Bienvenida",
    description: "Inicio de actividades y acreditación de participantes",
    time: "13:00 - 14:00",
    room: "Hall principal",
    speaker: null,
  },
  {
    id: 2,
    city: "santiago",
    type: "charla",
    title: "¿Sueñan los androides con gaviotas de plata? Python para explorar el humor en el Festival de Viña",
    description: "Explora cómo el proyecto Datarisas usa Python, NLP y LLMs para analizar 3509 chistes de 128 rutinas del Festival de Viña (1960–2025). Una charla sobre cómo transcripción, segmentación y análisis automatizado revelan patrones y evolución del humor chileno, combinando storytelling y ciencia de datos para preservar la memoria cómica del país.",
    time: "14:00 - 14:30",
    room: "Aula Magna",
    speaker: {
      name: "Alonso Astroza",
      image: "/images/speakers/Alonso_Astroza.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/aastrozacl/"
        }
    },
    category: "caso-de-exito",
    level: "introductorio",
    tags: ["Python", "NLP", "LLMs", "Data Science", "Cultura"],
  },
  {
    id: 3,
    city: "santiago",
    type: "charla",
    title: "Visualizando mis 10K con Python: una mirada de datos al running personal",
    description: "Charla práctica y personal sobre cómo usé Python, pandas y seaborn para analizar mis 10K en la Maratón de Santiago 2025: ritmos, tiempos por kilómetro, evolución en entrenamientos y comparación entre sesiones. Un ejemplo de cómo transformar datos crudos en información útil.",
    time: "14:30 - 15:00",
    room: "Aula Magna",
    speaker: {
      name: "Ingrid Solís Gonzalez",
      image: "/images/speakers/Ingrid_Solis_Gonzalez.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/ingrid-solis-gonzalez/"
        }
    },
    category: "caso-de-exito",
    level: "intermedio",
    tags: ["Python", "Data Science", "Visualización", "Running"],
  },
  {
    id: 4,
    city: "santiago",
    type: "charla",
    title: "Ingeniería de software en Python, aplicado al magnetismo",
    description: "Hablaré de mi experiencia desarrollando y manteniendo librerías en Python para el estudio del magnetismo. Estos códigos abiertos y reproducibles han sido clave para publicar en revistas científicas, ampliando el acceso a la información y fomentando la ciencia abierta.",
    time: "15:00 - 15:30",
    room: "Aula Magna",
    speaker: {
      name: "David Cortes",
      image: "/images/speakers/David_Cortes.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/davidcortesortuno/"
        }
    },
    category: "caso-de-exito",
    level: "avanzado",
    tags: ["Python", "Ingeniería de Software", "Ciencia Abierta", "Magnetismo"],
  },
  {
    id: 5,
    city: "santiago",
    type: "break",
    title: "Coffee Break",
    description: "Espacio para descansar, socializar y compartir ideas con otros asistentes.",
    time: "15:30 - 16:00",
    room: "Hall principal",
    speaker: null,
  },
  {
    id: 6,
    city: "santiago",
    type: "charla",
    title: "¿Cómo utilizar Agentes de IA? Su aplicación a web apps",
    description: "Usar inteligencia artificial puede ser un misterio, especialmente controlar los outputs de un LLM. Herramientas como PyDantic AI nos permiten manejar estas cajas negras y controlar mejor su uso práctico. En esta charla revisaremos un proyecto que usa agentes de IA aplicado a una web app sobre flora nativa chilena.",
    time: "16:00 - 16:30",
    room: "Aula Magna",
    speaker: {
      name: "Lía Da Silva",
      image: "/images/speakers/Lia_Da_Silva.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/lia-dsr/"
        }
    },
    category: "tecnica",
    level: "introductorio",
    tags: ["Python", "IA", "Agentes", "Web Apps"],
  },
  {
    id: 7,
    city: "santiago",
    type: "charla",
    title: "Construyendo un motor de juegos 3D",
    description: "Aquí cuento qué es un motor de juegos, mi experiencia aprendiendo sobre eso, y cómo he construido el mío en Python con pyglet",
    time: "16:30 - 17:00",
    room: "Aula Magna",
    speaker: {
      name: "Jesús Henriquez",
      image: "/images/speakers/Jesus_Henriquez.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/hernaldo-henriquez"
        }
    },
    category: "tecnica",
    level: "avanzado",
    tags: ["Python", "Videojuegos", "Desarrollo", "3D", "Pyglet"],
  },
  {
    id: 8,
    city: "santiago",
    type: "charla",
    title: "De las palabras al Algoritmo: Comprendiendo el Lenguaje Natural desde la perspectiva de la IA",
    description: "Exploraremos cómo las máquinas procesan el lenguaje humano, enfrentando desafíos como la ambigüedad semántica, el contexto cultural y la diversidad lingüística. Hablaremos sobre tecnologías multimodales, modelos de lenguaje y cómo están dando forma a un lenguaje intermedio que facilita la interacción entre humanos y sistemas digitales.",
    time: "17:00 - 17:30",
    room: "Aula Magna",
    speaker: {
      name: "Alison Orellana Rios",
      image: "/images/speakers/Alison_Orellana_Rios.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/alison-or/"
        }
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "IA", "Machine Learning", "LLM","NLP"],
  },
  {
    id: 9,
    city: "santiago",
    type: "break",
    title: "Coffee Break",
    description: "Segundo descanso del día para recargar energías antes del cierre del evento.",
    time: "17:30 - 18:00",
    room: "Hall principal",
    speaker: null,
  },
  {
    id: 10,
    city: "santiago",
    type: "charla",
    title: "Búsqueda Semántica + Descubrimiento de Tópicos",
    description: "Se presentarán flujos de trabajo para extracción de información desde texto en lenguaje natural, usando técnicas clásicas y modelos LLM. Exploraremos summarization y topic modeling desde ambas perspectivas.",
    time: "18:00 - 18:30",
    room: "Aula Magna",
    speakers: [
      {
        name: "Pablo Jiménez",
        image: "/images/speakers/Pablo_Jimenez.webp",
        socials: {
          linkedin: ""
        }
      },
      {
        name: "Dylan Oteiza",
        image: "/images/speakers/Dylan_Oteiza.webp",
        socials: {
          linkedin: ""
        }
      }
    ],
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "NLP","LLM", "Topic Modeling", "Summarization"],
  },
  {
    id: 11,
    city: "santiago",
    type: "charla",
    title: "Rust + Python = Poder Ilimitado: Introducción a PyO3",
    description: "¿Velocidad de Rust con la flexibilidad de Python? En esta charla veremos cómo unir ambos mundos con PyO3, creando módulos Rust accesibles desde Python. Compartiré mi experiencia optimizando tareas críticas y los aprendizajes de este proceso.",
    time: "18:30 - 19:00",
    room: "Aula Magna",
    speaker: {
      name: "Daniel Hernandez",
      image: "/images/speakers/Daniel_Hernandez.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/dhernandezmen/"
        }
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Rust", "Optimización", "Desarrollo"],
  },
  {
    id: 12,
    city: "santiago",
    type: "cierre",
    title: "Palabras finales Duoc UC + Comunidades Amigas Python Chile",
    description: "Cierre oficial del evento con agradecimientos y palabras de las comunidades organizadoras.",
    time: "19:00",
    room: "Aula Magna",
    speaker: null,
  },
  {
    id: 13,
    city: "santiago",
    type: "taller",
    title: "Taller: Análisis y visualización de datos básico con Python",
    description: "En este taller aprenderemos los fundamentos de Python, uno de los lenguajes más usados y versátiles. Usaremos Google Colab como entorno, Pandas para manipular y analizar datos, y Altair para crear visualizaciones gráficas, todo con un enfoque en la música que nos conecta.",
    time: "14:00 - 14:45",
    room: "Sala de Computación",
    speaker: {
      name: "Francisca Beatriz Medina Concha",
      image: "/images/speakers/Francisca_Beatriz_Medina_Concha.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/fbmedina-cl/"
        }
    },
    category: "tecnica",
    level: "introductorio",
    tags: ["Python", "Visualización de datos", "Educación"],
    duration: 45,
    requirements: ["Laptop", "Cuenta de Google para usar Colab"],
  },
  {
    id: 14,
    city: "santiago",
    type: "taller",
    title: "Taller: Python for Lean Accounting",
    description: "Usando Python para agilizar procesos contables. Un contador sin tecnología puede depender de software costoso o procesos manuales lentos. Con Python e IA es posible crear software liviano que acelera la contabilidad y mejora la entrega de resultados.",
    time: "14:45 - 15:30",
    room: "Sala de Computación",
    speaker: {
      name: "Francisco Ponce",
      image: "/images/speakers/Francisco_Ponce.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/francisco-ponce-miranda/"
        }
    },
    category: "tecnica",
    level: "introductorio",
    tags: ["Python", "Fintech", "Automatización"],
    duration: 45,
    requirements: ["Laptop", "Python 3.11+ instalado"],
  },
  {
    id: 15,
    city: "valparaiso",
    type: "recepcion",
    title: "Registro",
    description: "Recepción y acreditación de participantes",
    time: "10:00 - 10:15",
    room: "Hall Principal Edificio A",
    speaker: null
  },
  {
    id: 16,
    city: "valparaiso",
    type: "recepcion",
    title: "Bienvenida",
    description: "Inicio de actividades y palabras de apertura",
    time: "10:15 - 10:30",
    room: "Salón A3",
    speaker: null
  },
  {
    id: 17,
    city: "valparaiso",
    type: "charla",
    title: "Educación Abierta y Comunidad: Democratizando el Aprendizaje en Python",
    description: "Exploración de cómo la educación abierta y la comunidad pueden democratizar el aprendizaje en Python, incluyendo una demo en vivo con Quarto, GitHub y el rol de las comunidades open source con énfasis en Python Chile.",
    time: "10:30 - 11:00",
    room: "Salón A3",
    speakers: [
      {
        name: "Francisco Alfaro",
        image: "/images/speakers/Francisco_Alfaro.webp",
        socials: {
          linkedin: "https://www.linkedin.com/in/faam/"
        }
      },
      {
        name: "Valeska Canales",
        image: "/images/speakers/Valeska_Canales.webp",
        socials: {
          linkedin: "https://www.linkedin.com/in/vcanalesp/"
        }
      }
    ],
    category: "comunidad",
    level: "introductorio",
    tags: ["Python", "Educación", "Open Source", "Comunidad"]
  },
  {
    id: 18,
    city: "valparaiso",
    type: "break",
    title: "Coffee Break",
    description: "Espacio para descansar, socializar y compartir ideas con otros asistentes.",
    time: "11:00 - 11:30",
    room: "Hall Principal Edificio A",
    speaker: null
  },
  {
    id: 19,
    city: "valparaiso",
    type: "charla",
    title: "Ciudades Pendientes: datos para la planificación urbana",
    description: "Presentamos una plataforma con Django y pydeck para clasificar y visualizar flujos de viajes en bicicleta, apoyando a organizaciones sociales en propuestas de movilidad urbana a escala humana. ¡Tecnología para mejorar la calidad de vida!",
    time: "11:30 - 12:00",
    room: "Salón A3",
    speaker: {
      name: "Francisco Vergara",
      image: "/images/speakers/Francisco_Vergara_Vallejos.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/franciscovergara/"
      }
    },
    category: "caso-de-exito",
    level: "introductorio",
    tags: ["Python", "Data Science", "Urban Mobility", "Social Impact"]
  },
  {
    id: 20,
    city: "valparaiso",
    type: "charla",
    title: "Clasificación del Impacto Hidrometeorológico de Ríos Atmosféricos mediante Aprendizaje Automático",
    description: "Aplicación de aprendizaje automático para clasificar el impacto hidrometeorológico de ríos atmosféricos, usando datos del reanálisis CFSR y técnicas de IA explicable para mejorar el pronóstico y prevención de eventos extremos.",
    time: "12:00 - 12:30",
    room: "Salón A3",
    speakers: [
      {
        name: "Pía Aedo",
        image: "/images/speakers/Pia_Aedo.webp",
        socials: {
          linkedin: ""
        }
      },
      {
        name: "Alexis Alva",
        image: "/images/speakers/Alexis_Alva_Nunez.webp",
        socials: {
          linkedin: "https://www.linkedin.com/in/alexis-alva-4993b2141/"
        }
      }
    ],
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Machine Learning", "IA", "Clima"]
  },
  {
    id: 21,
    city: "valparaiso",
    type: "break",
    title: "Pausa Almuerzo",
    description: "Tiempo libre para almorzar y compartir con otros asistentes.",
    time: "12:30 - 14:00",
    room: "Hall Principal Edificio A",
    speaker: null
  },
  {
    id: 22,
    city: "valparaiso",
    type: "charla",
    title: "Potenciando la IA con Python: Descubre la Magia de MCP y N8N",
    description: "Exploramos cómo integrar Python con MCP (Model Context Protocol) de Anthropic y la plataforma open source n8n para crear soluciones de IA personalizadas y automatizar flujos de trabajo, optimizando procesos y maximizando la eficiencia.",
    time: "14:00 - 14:30",
    room: "Salón A3",
    speaker: {
      name: "Gabriel Grobier",
      image: "/images/speakers/Gabriel_Grobier_Romo.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/gabrielgrobier/"
      }
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "IA", "Automatización", "Open Source", "MCP", "N8N"]
  },
  {
    id: 23,
    city: "valparaiso",
    type: "charla",
    title: "Rust + Python = Poder Ilimitado: Introducción a PyO3",
    description: "¿Velocidad de Rust con la flexibilidad de Python? En esta charla veremos cómo unir ambos mundos con PyO3, creando módulos Rust accesibles desde Python. Compartiré mi experiencia optimizando tareas críticas y los aprendizajes de este proceso.",
    time: "14:30 - 15:00",
    room: "Salón A3",
    speaker: {
      name: "Daniel Hernandez",
      image: "/images/speakers/Daniel_Hernandez.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/dhernandezmen/"
      }
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Rust", "Optimización", "Desarrollo"]
  },
  {
    id: 24,
    city: "valparaiso",
    type: "charla",
    title: "Hackeando con estilo: scripts, café y Python",
    description: "En esta charla veremos por qué Python es una herramienta clave en ciberseguridad. Desde automatizar análisis hasta crear scripts para pruebas de penetración, hackeamos (éticamente) con estilo, eficiencia… ¡y mucho café! Descubre librerías esenciales, trucos y buenas prácticas para que tu código sea tan seguro como elegante.",
    time: "15:00 - 15:30",
    room: "Salón A3",
    speaker: {
      name: "Diego Caceres Solis",
      image: "/images/speakers/Diego_Caceres.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/dcaceresso/"
      }
    },
    category: "tecnica",
    level: "avanzado",
    tags: ["Python", "Ciberseguridad", "HackingÉtico","Pentesting", "Automatización"]
  },
  {
    id: 25,
    city: "valparaiso",
    type: "charla",
    title: "Charlas Relámpago",
    description: "Sesión de charlas cortas de 5 minutos cada una sobre diversos temas.",
    time: "15:30 - 16:00",
    room: "Salón A3",
    speaker: null
  },
  {
    id: 26,
    city: "valparaiso",
    type: "cierre",
    title: "Cierre",
    description: "Palabras finales y agradecimientos por parte de los organizadores.",
    time: "16:00 - 16:15",
    room: "Salón A3",
    speaker: null
  },
  {
    id: 27,
    city: "valparaiso",
    type: "break",
    title: "Coffee Break - Cierre",
    description: "Espacio para compartir y despedirse de los asistentes.",
    time: "16:15 - 17:00",
    room: "Hall Principal Edificio A",
    speaker: null
  },
  {
    id: 28,
    city: "valparaiso",
    type: "taller",
    title: "LLM + LLMs Seguros",
    description: "Tipos de ataques que pueden ocurrir en ambientes que utilizan agentes (como ChatGPT) y algunas formas de protección ofrecidas en el paquete agentsdk.",
    time: "11:30 - 12:30",
    room: "Salón A12",
    speaker: {
      name: "Ariane Carvajal",
      image: "/images/speakers/Ariane_Carvajal.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/ariane-carvajal/"
      }
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "IA Generativa", "Seguridad", "LLMs", "Agents"],
    duration: 60,
    requirements: ["Laptop", "Python 3.11+ instalado"]
  },
  {
    id: 29,
    city: "valparaiso",
    type: "taller",
    title: "Streamlit, Axidraw y aprendiendo a aprender",
    description:  "Taller práctico sobre Streamlit, Axidraw e intentos de arte con Python.",
    time: "14:00 - 15:00",
    room: "Salón A12",
    speaker: {
      name: "Sebastian Flores",
      image: "/images/speakers/Sebastian_flores.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/sebastiandres"
      }
    },
    category: "proyecto-practico",
    level: "introductorio",
    tags: ["Python", "Web", "Educación"],
    duration: 60,
    requirements: ["Laptop", "Python 3.11+ instalado"]
  }
];

export default allTalks;
