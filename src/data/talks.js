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
  },
  {
    id: 30,
    city: "copiapo",
    type: "recepcion",
    title: "Registro",
    description: "Recepción y acreditación de participantes",
    time: "09:45 - 10:00",
    room: "Hall del Auditorio Edificio B",
    speaker: null
  },
  {
    id: 31,
    city: "valparaiso",
    type: "recepcion",
    title: "Bienvenida",
    description: "Inicio de actividades y palabras de apertura",
    time: "10:00 - 10:10",
    room: "Auditorio",
    speaker: null
  },
  {
    id: 32,
    city: "copiapo",
    type: "charla",
    title: "El poder de la simplicidad con Python",
    description: "Explora cómo la simplicidad en Python puede resolver problemas complejos de manera eficiente y clara.",
    time: "10:10 - 10:20",
    room: "Auditorio",
    speaker: {
      name: "Felipe Neyra",
      image: "/images/speakers/Felipe_Neyra.webp",
      socials: {}
    },
    category: "tecnica",
    level: "introductorio",
    tags: ["Python", "Best Practices", "Educación"]
  },
  {
    id: 33,
    city: "copiapo",
    type: "charla",
    title: "HTML al frente, SQL al fondo … y Django sosteniendo el caos",
    description: "Introducción a la combinación de frontend, bases de datos y Django para crear aplicaciones web robustas.",
    time: "10:20 - 10:30",
    room: "Auditorio",
    speaker: {
      name: "Matias Farias",
      image: "/images/speakers/Matias_Farias.webp",
      socials: {}
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Web", "Django", "SQL"]
  },
  {
    id: 34,
    city: "copiapo",
    type: "charla",
    title: "Identificando patrones en la música con Python",
    description: "Análisis de patrones musicales usando Python y técnicas de ciencia de datos.",
    time: "10:30 - 10:40",
    room: "Auditorio",
    speaker: {
      name: "Pedro Cayunao",
      image: "/images/speakers/Pedro_Cayunao.webp",
      socials: {}
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Data Science", "Música"]
  },
  {
    id: 35,
    city: "copiapo",
    type: "charla",
    title: "Dinámicamente Ilógico",
    description: "Charla sobre lógica y programación dinámica para resolver problemas complejos.",
    time: "10:40 - 10:50",
    room: "Auditorio",
    speaker: {
      name: "Sondra Guerra",
      image: "/images/speakers/Sondra_Guerra.webp",
      socials: {}
    },
    category: "tecnica",
    level: "avanzado",
    tags: ["Python", "Algoritmos", "Lógica"]
  },
  {
    id: 36,
    city: "copiapo",
    type: "charla",
    title: "Sobreviviendo a mi primer Syntax Error: Desde 0 a encontrar una pasión",
    description: "Experiencia personal sobre superar errores iniciales para encontrar pasión en la programación.",
    time: "10:50 - 11:00",
    room: "Auditorio",
    speaker: {
      name: "Ricardo Lira",
      image: "/images/speakers/Ricardo_Lira.webp",
      socials: {}
    },
    category: "comunidad",
    level: "introductorio",
    tags: ["Educación", "Motivación", "Experiencia"]
  },
  {
    id: 37,
    city: "copiapo",
    type: "charla",
    title: "Python y su aplicación en el mundo de los videojuegos",
    description: "Uso de Python para desarrollo y scripting en videojuegos.",
    time: "11:00 - 11:10",
    room: "Auditorio",
    speaker: {
      name: "Willy Bown",
      image: "/images/speakers/Willy_Bown.webp",
      socials: {}
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Videojuegos", "Desarrollo"]
  },
  {
    id: 38,
    city: "copiapo",
    type: "break",
    title: "Primer Coffee Break",
    description: "",
    time: "11:10 - 11:30",
    room: "Hall principal Edificio B",
    speaker: null
  },
  {
    id: 39,
    city: "copiapo",
    type: "charla",
    title: "Animusic: Emociones y Python",
    description: "Uso de Python para combinar música y animación creando experiencias emocionales.",
    time: "11:30 - 11:40",
    room: "Auditorio",
    speaker: {
      name: "Milowan Martinez",
      image: "/images/speakers/Milowan_Martinez.webp",
      socials: {}
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Música", "Animación"]
  },
  {
    id: 40,
    city: "copiapo",
    type: "charla",
    title: "¿Dónde está mi JavaScript? Mi experiencia en Python",
    description: "Comparación y experiencia usando JavaScript y Python.",
    time: "11:40 - 11:50",
    room: "Auditorio",
    speaker: {
      name: "Sofia Gahona",
      image: "/images/speakers/Sofia_Gahona.webp",
      socials: {}
    },
    category: "comunidad",
    level: "introductorio",
    tags: ["Python", "JavaScript", "Experiencia"]
  },
  {
    id: 41,
    city: "copiapo",
    type: "charla",
    title: "Pygame",
    description: "Introducción a Pygame para crear videojuegos y multimedia con Python.",
    time: "11:50 - 12:00",
    room: "Auditorio",
    speaker: {
      name: "Javier Arce",
      image: "/images/speakers/Javier_Arce.webp",
      socials: {}
    },
    category: "tecnica",
    level: "introductorio",
    tags: ["Python", "Videojuegos", "Desarrollo"]
  },
  {
    id: 42,
    city: "copiapo",
    type: "charla",
    title: "No todas las películas tienen final feliz, pero sí regresión lineal",
    description: "Uso de regresión lineal para analizar datos y sacar conclusiones.",
    time: "12:00 - 12:10",
    room: "Auditorio",
    speaker: {
      name: "Gabriel Castillo",
      image: "",
      socials: {}
    },
    category: "caso-de-exito",
    level: "intermedio",
    tags: ["Data Science", "Python", "Estadística"]
  },
  {
    id: 43,
    city: "copiapo",
    type: "charla",
    title: "Python y Viviendas: Buscando sentido a 30 m² por 900 euros",
    description: "Análisis de datos habitacionales con Python.",
    time: "12:10 - 12:20",
    room: "Auditorio",
    speaker: {
      name: "Francisco Alvarez",
      image: "/images/speakers/Francisco_Alvarez.webp",
      socials: {}
    },
    category: "caso-de-exito",
    level: "intermedio",
    tags: ["Python", "Data Science", "Análisis"]
  },
  {
    id: 44,
    city: "copiapo",
    type: "charla",
    title: "PICNIC: Problem in chair, not in computer",
    description: "Reflexión sobre errores comunes en programación y su correcta interpretación.",
    time: "12:20 - 12:30",
    room: "Auditorio",
    speakers: [
      {
        name: "Nayaret Larrondo",
        image: "/images/speakers/Nayaret_Larrondo.webp",
        socials: {}
      },
      {
        name: "Fram Salinas",
        image: "/images/speakers/Fram_Salinas.webp",
        socials: {}
      }
    ],
    category: "comunidad",
    level: "introductorio",
    tags: ["Educación", "Motivación", "Errores"]
  },
  {
    id: 45,
    city: "copiapo",
    type: "charla",
    title: "Comunidad Python Chile",
    description: "Presentación sobre la Comunidad Python Chile, sus objetivos y actividades.",
    time: "12:30 - 12:50",
    room: "Auditorio",
    speaker: {
      name: "Cristina Verdugo",
      image: "/images/speakers/Cristina_Verdugo.webp",
      socials: {}
    },
    category: "comunidad",
    level: "introductorio",
    tags: ["Comunidad", "Educación", "Mujeres"]
  },
  {
    id: 46,
    city: "copiapo",
    type: "charla",
    title: "Spoiler: Saber Inglés ayuda en Python",
    description: "Importancia del inglés para avanzar en el aprendizaje de Python y tecnología.",
    time: "12:50 - 13:00",
    room: "Auditorio",
    speakers: [
      {
        name: "Katherina Ulloa",
        image: "/images/speakers/Katherina_Ulloa.webp",
        socials: {}
      },
      {
        name: "Mariana Rondon",
        image: "/images/speakers/Mariana_Rondon.webp",
        socials: {}
      }
    ],
    category: "comunidad",
    level: "introductorio",
    tags: ["Educación", "Python", "Inglés"]
  },
  {
    id: 47,
    city: "copiapo",
    type: "break",
    title: "Segundo Coffee Break",
    description: "",
    time: "13:00 - 13:20",
    room: "Hall principal Edificio B",
    speaker: null
  },
  {
    id: 48,
    city: "copiapo",
    type: "charla",
    title: "Microservicio en Python: el arte de dividir",
    description: "Introducción a microservicios con Python para sistemas escalables.",
    time: "13:20 - 13:30",
    room: "Auditorio",
    speaker: {
      name: "Carlos Pizarro",
      image: "/images/speakers/Carlos_Pizarro.webp",
      socials: {}
    },
    category: "tecnica",
    level: "avanzado",
    tags: ["Python", "DevOps", "Arquitectura"]
  },
  {
    id: 49,
    city: "copiapo",
    type: "charla",
    title: "De la teoría a la práctica con Django",
    description: "Aplicación práctica de Django en proyectos reales de desarrollo web.",
    time: "13:30 - 13:40",
    room: "Auditorio",
    speaker: {
      name: "Matias Morales",
      image: "/images/speakers/Matias_Morales.webp",
      socials: {}
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Django", "Web"]
  },
  {
    id: 50,
    city: "copiapo",
    type: "charla",
    title: "Data Mining en Videojuegos",
    description: "Uso de minería de datos para analizar y mejorar videojuegos.",
    time: "13:40 - 13:50",
    room: "Auditorio",
    speaker: {
      name: "Guido Araya",
      image: "/images/speakers/Guido_Araya.webp",
      socials: {}
    },
    category: "caso-de-exito",
    level: "intermedio",
    tags: ["Data Science", "Videojuegos", "Análisis"]
  },
  {
    id: 51,
    city: "copiapo",
    type: "charla",
    title: "Ciberseguridad y Python",
    description: "Introducción a la ciberseguridad con herramientas en Python.",
    time: "13:50 - 14:05",
    room: "",
    speaker: {
      name: "Mauro Perez",
      image: "/images/speakers/Mauro_Perez.webp",
      socials: {}
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Seguridad", "DevOps"]
  },
  {
    id: 52,
    city: "copiapo",
    type: "charla",
    title: "Monitoreo en tiempo real con Python",
    description: "Implementación de sistemas de monitoreo en tiempo real usando Python.",
    time: "14:05 - 14:20",
    room: "Auditorio",
    speaker: {
      name: "Catalina Lagos",
      image: "/images/speakers/Catalina_Lagos.webp",
      socials: {}
    },
    category: "tecnica",
    level: "intermedio",
    tags: ["Python", "Monitoreo", "DevOps"]
  },
  {
    id: 53,
    city: "copiapo",
    type: "charla",
    title: "La importancia de la Radio Difusión en Chile",
    description: "Exploración del rol histórico y técnico de la radiodifusión en el país, su evolución con las tecnologías digitales y su impacto en la sociedad chilena.",
    time: "14:20 - 14:40",
    room: "Auditorio",
    speaker: {
      name: "Carlos Carrasco",
      image: "/images/speakers/Carlos_Carrasco.webp",
      socials: {}
    },
    category: "tecnica",
    level: "introductorio",
    tags: ["Radiodifusión", "Tecnología", "Historia", "Chile"]
  },
  {
    id: 54,
    city: "copiapo",
    type: "charla",
    title: "Detección de emociones con DeepFace y Flask",
    description: "Implementación de un sistema de reconocimiento emocional utilizando la biblioteca DeepFace junto al microframework Flask para construir una interfaz sencilla.",
    time: "14:50 - 15:10",
    room: "Auditorio",
    speaker: {
      name: "Luis Rojas",
      image: "",
      socials: {}
    },
    category: "comunidad",
    level: "introductorio",
    tags: ["Python", "IA", "DeepFace", "Flask", "Reconocimiento facial"]
  },
  {
    id: 55,
    city: "copiapo",
    type: "charla",
    title: "MCP: Conectando la Inteligencia Artificial con el Mundo Real",
    description: "Charla por Franco Morales sobre el Model Context Protocol (MCP) y su aplicación en proyectos de IA.",
    time: "15:10 - 15:30",
    room: "Auditorio",
    speaker: {
      name: "Franco Morales",
      image: "",
      socials: {}
    },
    category: "comunidad",
    level: "introductorio",
    tags: ["IA", "Protocolos", "MCP", "Integración", "Aplicaciones"]
  },
  {
    id: 56,
    city: "copiapo",
    type: "charla",
    title: "Llava: el futuro de la vision por computadora con Python",
    description: "Introducción a Llava, una herramienta emergente para visión por computadora potenciada por modelos de lenguaje y Python.",
    time: "15:30 - 15:50",
    room: "Auditorio",
    speaker: {
      name: "Marco Arévalo",
      image: "",
      socials: {}
    },
    category: "comunidad",
    level: "introductorio",
    tags: ["Python", "Visión por computadora", "Llava", "IA"]
  },
  {
    id: 57,
    city: "copiapo",
    type: "cierre",
    title: "Cierre del evento",
    description: "Palabras finales de organizadores: Gabriela López de Inacap, Python Chile y entrega de regalo a charlistas.",
    time: "15:50 - 16:00",
    room: "Auditorio",
    speaker: null
  },

  {
    id: 58,
    city: "copiapo",
    type: "break",
    title: "Coffee Break final",
    description: "",
    time: "16:00 - 16:10",
    room: "Hall principal Edificio B",
    speaker: null
  },

];

export default allTalks;
